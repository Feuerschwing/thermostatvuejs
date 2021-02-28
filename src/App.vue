<template>
  <div id="app" class="app">
    <modal v-if="!this.$store.state.connected" @tryConnection="this.startConnect"></modal>
    <!--<form v-if="!$store.state.connected" class="test-class" @submit.prevent="login">-->
    <nav>
      <div class="logo">Smart Thermostat</div>
      <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><router-link to="/home" >HOME</router-link></li>
        <li><router-link to="/prog">PROGRAMMATION</router-link></li>
        <li><router-link to="/graph">GRAPH</router-link></li>
      </ul>
    </nav>
    <router-view @activeManuelMode="sendActiveManuel" @refreshData="sendRefresh"/>
  </div>
</template>

<script>

import {Client, Message} from 'paho-mqtt';
import modal from "@/components/modal";

const MODES = new Map([
  ["manuelMode" , ["#33B5E5", "Mode Manuel", "#383838"]],
  ["nightMode" , ["#0b1338", "Mode Nuit", "#ffffff"]],
  ["insideMode" , ["#f65228", "Mode Confort", "#383838"]],
  ["outsideMode" , ["#74c689", "Mode Travail", "#383838"]]
]);

export default {
  name: 'App',
  components:{
    modal
  },
  data() {
    return {
      client:{
        connecteded:false
      },
      showMenu: false
    }
  },
  methods:{
    startConnect() {
      // Generate a default random client ID
      let clientID = "clientID-" + parseInt(Math.random() * 100);

      // Fetch the hostname/IP address and port number from the form
      let host ="m12.cloudmqtt.com";
      let port = "30222";

      // Initialize new Paho client connection
      this.client = new Client(host, Number(port), clientID);
      // Set callback handlers
      this.client.onConnectionLost = this.onConnectionLost;
      this.client.onMessageArrived = this.onMessageArrived;
      this.client.connect({
        useSSL: true,
        onSuccess: this.onConnect,
        userName : this.$store.state.user,
        password : this.$store.state.password
      });
    },
    onConnect() {
      this.$store.commit("UPDATE_CONNECTED", true);
      this.client.subscribe("sensorsData");
      this.sendMessage("askUpdateData");
    },
    onConnectionLost(responseObject) {
      console.log("onConnectionLost: Connection Lost");
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
      }
    },
    onMessageArrived(message) {
      let data = JSON.parse(message.payloadString);
      if(data.command === "sendData"){
        this.$store.commit("UPDATE_FONT_SIZE", "20px");
        this.$store.commit("UPDATE_DISPLAY_BUTTON", false);
        this.$store.commit("UPDATE_TEMP", data.temperature);
        this.$store.commit("UPDATE_HUM", data.humidity);
        this.$store.commit("UPDATE_BOOLERSTATE", data.stateBooler);
        this.$store.commit("UPDATE_MODE", MODES.get(data.mode)[1]);
        this.$store.commit("UPDATE_COLORMODE", MODES.get(data.mode)[0]);
        this.$store.commit("UPDATE_COLORTEXTMODE", MODES.get(data.mode)[2]);
      }
    },
    sendMessage(command, data=null){
      console.log("sendMessage");
      let payload = {"command": command};
      if(data != null){
        payload=Object.assign({}, payload, data);
      }
      payload = JSON.stringify(payload);
      let message = new Message(payload);
      message.destinationName = "androidDevice";
      this.client.send(message);
    },
    sendActiveManuel(){
      this.sendMessage("activeManuelMode", {"consigne":parseInt(this.$store.state.mode.slice(0,2))});
    },
    sendRefresh(){
      this.sendMessage("askUpdateData");
    }
  }
}
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
nav{
  display: flex;
  height: 80px;
  width: 100%;
  background: #950618;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;
  flex-wrap: wrap;
  overflow: hidden;
}
nav .logo{
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
nav ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
nav ul li{
  margin: 0 5px;
}
nav ul li a{
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav ul li a.active,
nav ul li a:hover{
  color: #111;
  background: #fff;
}
nav .menu-btn i{
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"]{
  display: none;
}
@media (max-width: 1000px){
  nav{
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
  nav .menu-btn i{
    display: block;
  }
  #click:checked ~ .menu-btn i:before{
    content: "\f00d";
  }
  nav ul{
    position: absolute;
    top: 80px;
    left: -100%;
    background: #950618;
    height: 100%;
    height: -webkit-calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: calc(100% - 80px);
    text-align: left;
    display: block;
    transition: all 0.3s ease;
    z-index: 100;
  }
  #click:checked ~ ul{
    left: 0;
  }
  nav ul li{
    width: 30%;
    margin: 40px 0;
  }
  nav ul li a{
    width: 100%;
    margin-left: -50%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a{
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover{
    background: none;
    color: cyan;
  }
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
  width: 100%;
  padding: 0 30px;
  color: #1b1b1b;
}
.content div{
  font-size: 40px;
  font-weight: 700;
}

</style>
