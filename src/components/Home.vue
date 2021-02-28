<template>
    <div class="slider-container">
      <svg class="svg-container" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="-50 -50 100 100">
        <circle r="37" fill="#950618"/>
        <rect  x="-25" y="5" width="50" height="1" fill="#810012" />
      </svg>
      <round-slider
          class="round-slider"
          v-model="actualTempForSlider"
          start-angle="301"
          end-angle="+298"
          line-cap="round"
          handleSize="+20"
          width=8
          showTooltip=false
          mouseScrollAction=true
          radius=150
          pathColor="#EEE"
          handleShape="round"
          sliderType="min-range"
          @input="updateTemp"
      />
      <div class="temp-container">
        {{this.$store.state.temperature.toFixed(1)}} °
      </div>

      <svg class="svg-container-drop" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 383.344 383.345">
        <path d="M273.217,106.899c-27.181-44.864-57.413-83.693-73.016-102.846c-2.088-2.565-5.221-4.054-8.528-4.053
        c-3.308,0-6.44,1.489-8.529,4.054c-15.602,19.159-45.834,58.001-73.015,102.869c-35.028,57.823-52.789,105.63-52.789,142.09
        c0,74.071,60.261,134.332,134.332,134.332s134.332-60.261,134.332-134.332C326.005,212.529,308.246,164.715,273.217,106.899z
         M210.106,333.868c-7.844,2.006-15.986,3.022-24.205,3.022c-50.186,0-91.015-37.929-91.015-84.55
        c0-11.255,2.97-24.405,8.825-39.083c0.989-2.48,3.807-3.895,6.585-3.295c2.776,0.598,4.64,3.018,4.354,5.65
        c-0.342,3.148-0.516,6.223-0.516,9.136c0,50.735,40.881,93.221,95.093,98.821c2.698,0.279,4.803,2.297,5.018,4.812
        C214.461,330.896,212.723,333.198,210.106,333.868z" fill="#33B5E5" opacity="0.65"/>
      </svg>
      <div class="hum-container">
        {{this.$store.state.humidity.toFixed(1)}} %
      </div>
      <svg v-if="this.$store.state.boolerState" class="svg-container-fire" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="30" width="30"
           viewBox="0 0 511.269 511.269" >
        <path style="fill:#F3705A;" d="M140.367,465.067C116.9,438.4,93.434,410.667,78.5,377.6c-14.933-35.2-19.2-75.733-11.733-114.133
        s24.533-74.667,49.067-105.6c-2.133,26.667,7.467,54.4,25.6,74.667c-10.667-51.2,6.4-106.667,40.533-147.2S263.034,18.133,312.1,0
        c-24.533,25.6-27.733,66.133-18.133,100.267c9.6,34.133,29.867,64,48,94.933c18.133,30.933,35.2,62.933,36.267,98.133
        c9.6-18.133,20.267-36.267,26.667-56.533c6.4-20.267,9.6-41.6,4.267-61.867c19.2,23.467,29.867,46.933,35.2,76.8
        c5.333,29.867,4.267,60.8,1.067,90.667c-4.267,33.067-12.8,67.2-30.933,94.933c-21.333,33.067-55.467,56.533-92.8,69.333
        C255.567,518.4,190.5,508.8,140.367,465.067z"/>
        <path style="fill:#FFD15C;" d="M221.434,504.533C308.9,538.667,395.3,435.2,347.3,355.2c0-1.067-1.067-1.067-1.067-2.133
        c4.267,43.733-6.4,75.733-26.667,93.867c10.667-25.6,3.2-55.467-9.6-81.067c-12.8-24.533-30.933-46.933-44.8-70.4
        c-13.867-24.533-24.533-52.267-18.133-80c-25.6,19.2-43.733,48-51.2,78.933c-7.467,30.933-3.2,65.067,10.667,93.867
        c-16-11.733-27.733-30.933-28.8-51.2c-17.067,20.267-27.733,46.933-26.667,73.6C151.034,452.267,184.1,489.6,221.434,504.533z" />
      </svg>

      <svg class="svg-container-mode" xmlns="http://www.w3.org/2000/svg" height="250" width="250" viewBox="-100 -100 250 250">
        <circle r="80" :fill="this.$store.state.colorMode" opacity="0.88"/>
      </svg>
      <svg v-if="this.$store.state.mode==='Mode Manuel'" class="svg-anim" xmlns="http://www.w3.org/2000/svg" height="250" width="250" viewBox="-100 -100 250 250">
        <circle :r="this.radius" :fill="this.$store.state.colorMode" opacity="0.5" />
      </svg>
      <div class="container-mode-text" :style="{ color: this.$store.state.colorTextMode , fontSize: this.$store.state.textSizeMode}">
        {{this.$store.state.mode}}
      </div>
      <button  class="button" v-if="this.$store.state.displayButton" v-on:click="sendTempConsign()">
        VALIDER
      </button>
      <svgmode class="svg-icon-mode" />
    </div>
</template>

<script>
import RoundSlider from 'vue-round-slider'
import svgmode from './svgmode'

export default {
  name: 'Home',
  components:{RoundSlider, svgmode},
  data() {
    return {
      sliderValue: 60,
      radius:30,
      i:true
    }
  },
  mounted(){
    this.growCircle(10);
    if(this.$store.state.connected){
      this.$emit('refreshData');
    }
  },
  computed:{
    actualTempForSlider:function(){
      return this.$store.state.temperature*100/10-150;
    }
  },
  methods: {
    updateTemp(payload){
      this.$store.state.mode = parseInt(payload*10/100+15).toString()+" °";
      this.$store.state.displayButton = true;
      this.$store.state.textSizeMode = "35px";
    },
    sendTempConsign:function (){
      this.$emit('activeManuelMode');
    },
    growCircle(value) {
      this.radius = this.radius + value;
      if(this.i){
        this.i = this.radius <= 90;
        return setTimeout(this.growCircle, 15, 1);
      }else{
        this.i = this.radius < 60;
        setTimeout(this.growCircle, 15, -1);
      }
    }
  },
}
</script>

<style lang="scss">
@import url('../assets/style/home.scss');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');


.rs-range-color  {
  background-color: #33B5E5;
}
.rs-path-color  {
  background-color: #C2E9F7;
}
.rs-handle  {
  background-color: #C2E9F7;
  padding: 7px;
}
.rs-handle:hover{
  border: 3px solid #33B5E5;

}
.rs-border  {
  border-color: transparent;
}
.slider-container{
  padding: 2em;
}

.button{
  background-color: #404040;
  border: 3px solid #686868;
  color: #f3eeee;
  padding: 8px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, 100%);
}
.button:hover{
  background-color: #d5d5d5;
  color: #333333;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.24), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.svg-anim{
  margin: auto;
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-100px, 105%);
}
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 3000px) {
  .slider-container{
    background-color: transparent;
    margin-top: 10px;
    padding:2em 1em;
    position: relative;
    .round-slider {
      text-align: center;
    }
    .rs-control {
      margin: 0 auto;
    }
    .temp-container {
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 40%;
      font-size: 52px;
      color: white;
      font-weight: bold;
      transform: translate(-40%, -75%);
    }
    .hum-container {
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 50%;
      font-size: 16px;
      color: #33B5E5;
      font-weight: bold;
      transform: translate(110%, 70%);
    }
    .svg-container{
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 6%;
      transform: translate(-50%, 11%);
    }
    .svg-container-drop{
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 46%;
      font-size: 20px;
      transform: translate(120%, -0%);

    }
    .svg-container-fire{
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 40%;
      color: white;
      transform: translate(-350%, -170%);
    }
    .svg-container-mode{
      -webkit-filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
      filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translate(-100px, 105%);
    }
    .container-mode-text{
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 24%;
      font-weight: bold;
      transform: translate(-50%, 0);
    }
    .svg-icon-mode{
      margin: auto;
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translate(-40%, 280%);
    }
  }
}
</style>
