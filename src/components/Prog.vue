<template>
  <div class="prog-container">
  <svg id="donut" width="25%" height="25%" viewBox="0 0 62 62" class="donut" @mousemove="onDrag" @touchmove="onDrag" @touchend="stopDrag" @mouseleave="stopDrag" @mouseup="stopDrag">
      <circle class="donut-ring" cx="31" cy="31" r="15.91549430918952" fill="transparent" stroke="#d2d3d4" stroke-width="7"></circle>
      <circle id="night" class="donut-segment" cx="31" cy="31" r="15.91549430918952" fill="transparent" stroke="#0b1338" stroke-width="7" :stroke-dasharray="arrayGauge['4'].dasharray" stroke-dashoffset="25" stroke-opacity="1"></circle>
      <circle id="inhouse" class="donut-segment" cx="31" cy="31" r="15.91549430918952" fill="transparent" stroke="#f65228" stroke-width="7" :stroke-dasharray="arrayGauge['3'].dasharray" stroke-dashoffset="25" stroke-opacity="1"></circle>
      <circle id="outhouse" class="donut-segment" cx="31" cy="31" r="15.91549430918952" fill="transparent" stroke="#74c689" stroke-width="7" :stroke-dasharray="arrayGauge['2'].dasharray" stroke-dashoffset="25" stroke-opacity="1"></circle>
      <circle id="inhouse" class="donut-segment" cx="31" cy="31" r="15.91549430918952" fill="transparent" stroke="#f65228" stroke-width="7" :stroke-dasharray="arrayGauge['1'].dasharray" stroke-dashoffset="25" stroke-opacity="1"></circle>
      <circle id="night" class="donut-segment" cx="31" cy="31" r="15.91549430918952" fill="transparent" stroke="#0b1338" stroke-width="7" :stroke-dasharray="arrayGauge['0'].dasharray" stroke-dashoffset="25" stroke-opacity="1"></circle>
      <circle id="0" class="circular-hour hour-text" :cx="this.circle['0'].x" :cy="this.circle['0'].y" :r="this.circle['0'].radius" fill="#fdfffb" stroke="#1e1e1e" stroke-width="0.2" @mousedown="startDrag" @touchstart="startDrag"></circle>
      <text id="0" class="hour-text noselect" :x="this.circle['0'].x-2.7" :y="this.circle['0'].y+0.7" fill="black" font-size="1.9"  @mousedown="startDrag" @touchstart="startDrag" >{{this.circle['0'].hourText}} </text>
      <circle id="1" class="circular-hour hour-text" :cx="this.circle['1'].x" :cy="this.circle['1'].y" :r="this.circle['1'].radius" fill="#fdfffb" stroke="#1e1e1e" stroke-width="0.2" @mousedown="startDrag" @touchstart="startDrag"></circle>
      <text id="1" class="hour-text noselect" :x="this.circle['1'].x-2.7" :y="this.circle['1'].y+0.7" fill="black" font-size="1.9" @mousedown="startDrag" @touchstart="startDrag">{{this.circle['1'].hourText}}</text>
      <circle id="2" class="circular-hour hour-text" :cx="this.circle['2'].x" :cy="this.circle['2'].y" :r="this.circle['2'].radius" fill="#fdfffb" stroke="#1e1e1e" stroke-width="0.2" @mousedown="startDrag" @touchstart="startDrag"></circle>
      <text id="2" class="hour-text noselect" :x="this.circle['2'].x-2.7" :y="this.circle['2'].y+0.7" fill="black" font-size="1.9" @mousedown="startDrag" @touchstart="startDrag">{{this.circle['2'].hourText}}</text>
      <circle id="3" class="circular-hour hour-text" :cx="this.circle['3'].x" :cy="this.circle['3'].y" :r="this.circle['3'].radius" fill="#fdfffb" stroke="#1e1e1e" stroke-width="0.2" @mousedown="startDrag" @touchstart="startDrag"></circle>
      <text id="3" class="hour-text noselect" :x="this.circle['3'].x-2.7" :y="this.circle['3'].y+0.7" fill="black" font-size="1.9" @mousedown="startDrag" @touchstart="startDrag"  >{{this.circle['3'].hourText}}</text>
      <image width="6.5" height="6.5" :x="this.night1.x-2.5" :y="this.night1.y-2.5" xlink:href="@/assets/night.svg"/>
      <image width="6.5" height="6.5" :x="this.outside.x-2.5" :y="this.outside.y-2.5" xlink:href="@/assets/outside.svg"/>
      <image width="6.5" height="6.5" :x="this.inside1.x-2.5" :y="this.inside1.y-2.5" xlink:href="@/assets/insideSvg.svg"/>
      <image width="6.5" height="6.5" :x="this.night2.x-2.5" :y="this.night2.y-2.5" xlink:href="@/assets/night.svg"/>
      <image width="6.5" height="6.5" :x="this.inside2.x-2.5" :y="this.inside2.y-2.5" xlink:href="@/assets/insideSvg.svg"/>

  </svg>

    <svg v-if="this.arrowRight" class="arrow-right" width="3%" height="3%" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 492.004 492.004" @click="onRightClick" @mouseover="ecolorRight" @mouseout="decolorRight"  >
      <path class="arrow" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" :fill="this.colorRight"/>
    </svg>
    <svg v-if="this.arrowLeft" class="arrow-left" width="3%" height="3%" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 492 492" @click="onLeftClick" @mouseover="ecolorLeft" @mouseout="decolorLeft">
		<path class="arrow" d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"  :fill="this.colorLeft"/>
    </svg>
    <div class="day-container">
      {{this.day}}
    </div>
    <VueSlideBar class="vue-slider" v-model="valueSlider"
                  :data="slider.data"
                  :showTooltip="false"
                  :range="slider.range"
                  :processStyle="{ backgroundColor: '#0b1338' }"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{ backgroundColor: '#0b1338', borderColor: '#0b1338' }"
                 @callbackRange="callbackRange">
    </VueSlideBar>

  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'
const DAYS = new Map([
  [0 , "Monday"],
  [1, "Tuesday"],
  [2, "Wednesday"],
  [3, "Thursday"],
  [4, "Friday"],
  [5, "Saturday"],
  [6, "Sunday"],
]);
const JOURS = new Map([
  [0 , "Lundi"],
  [1, "Mardi"],
  [2, "Mercredi"],
  [3, "Jeudi"],
  [4, "Vendredi"],
  [5, "Samedi"],
  [6, "Dimanche"],
]);

export default {
  name: "Prog",
  components:{VueSlideBar},
  data(){
    return{
      inside1:{x:0, y:0},
      night1:{x:0, y:0},
      outside:{x:0, y:0},
      night2:{x:0, y:0},
      inside2:{x:0, y:0},
      rangeValue: {},
      slider: {
        value:"",
        lineHeight: 12,
        data: ["Lundi", "Mardi", "Mercredi","Jeudi", "Vendredi", "Samedi", "Dimanche"],
        range: [
          {
            label: 'Lundi'
          },
          {
            label: 'Mardi',
          },
          {
            label: 'Mercredi'
          },
          {
            label: 'Jeudi',
          },
          {
            label: 'Vendredi'
          },
          {
            label: 'Samedi',
          },
          {
            label: 'Dimanche'
          }
        ]},
      arrowLeft:true,
      arrowRight:true,
      day:"",
      pageCounter:0,
      colorLeft:"#000000",
      colorRight:"#000000",
      minutes: {"Monday": [20, 240, 720, 900],
        "Tuesday": [50, 260, 800, 1400],
        "Wednesday": [125, 400, 750, 1200],
        "Thursday": [152, 200, 800, 1300],
        "Friday": [100, 350, 950, 1100],
        "Saturday": [150, 500, 900, 1100],
        "Sunday": [150, 450, 850, 1000]},
      circle: {
        0:{
          hourText:"",
          radius: 3,
          drag:false,
          x:25*Math.cos((15*3*Math.PI/2)/75-Math.PI/2)+31,
          y:25*Math.sin((15*3*Math.PI/2)/75-Math.PI/2)+31,
        },
        1:{
          hourText:"",
          radius: 3,
          drag:false,
          x:25*Math.cos((30*3*Math.PI/2)/75-Math.PI/2)+31,
          y:25*Math.sin((30*3*Math.PI/2)/75-Math.PI/2)+31,
        },
        2:{
          hourText:"",
          radius: 3,
          drag:false,
          x:25*Math.cos((50*3*Math.PI/2)/75-Math.PI/2)+31,
          y:25*Math.sin((50*3*Math.PI/2)/75-Math.PI/2)+31,
        },
        3:{
          hourText:"",
          radius: 3,
          drag:false,
          x:25*Math.cos((70*3*Math.PI/2)/75-Math.PI/2)+31,
          y:25*Math.sin((70*3*Math.PI/2)/75-Math.PI/2)+31,
        }
      },
      percent0:15.0,
      percent1:30.0,
      percent2:50.0,
      percent3:70.0,
      arrayGauge:{
        "0":{
          dasharray:"15 85",
        },
        "1":{
          dasharray:"30 70",
        },
        "2":{
          dasharray:"50 50",
        },
        "3":{
          dasharray:"70 30",
        },
        "4":{
          dasharray:"100 00",
        }
      }
    }
  },
  watch: {
    pageCounter:function(newVal){
      this.slider.value = JOURS.get(newVal);
    },
    percent0:function(newVal){
      this.minutes[DAYS.get(this.pageCounter)][0]=newVal*14.4;
      let m = Math.round(this.minutes[DAYS.get(this.pageCounter)][0] / 15) * 15;
      let h = Math.floor(m/60);
      m = m-h*60;
      this.circle["0"].hourText = (h < 10 ? "0" + h.toString() : h.toString()) + ":" + (m < 10 ? "0" + m.toString() : m.toString());

      this.arrayGauge["0"].dasharray = newVal.toString()+" " +(100 - newVal).toString();
      this.circle["0"].x = 25*Math.cos((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.circle["0"].y = 25*Math.sin((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.night1.x = 16*Math.cos((newVal/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.night1.y = 16*Math.sin((newVal/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside1.x = 16*Math.cos(((this.percent1+this.percent0)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside1.y = 16*Math.sin(((this.percent1+this.percent0)/2*3*Math.PI/2)/75-Math.PI/2)+31;
    },
    percent1:function(newVal){
      this.minutes[DAYS.get(this.pageCounter)][1]=newVal*14.4;
      let m = Math.round(this.minutes[DAYS.get(this.pageCounter)][1] / 15) * 15;
      let h = Math.floor(m/60);
      m = m-h*60;
      this.circle["1"].hourText = (h < 10 ? "0" + h.toString() : h.toString()) + ":" + (m < 10 ? "0" + m.toString() : m.toString());

      this.arrayGauge["1"].dasharray = newVal.toString()+" " +(100 - newVal).toString();
      this.circle["1"].x = 25*Math.cos((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.circle["1"].y = 25 * Math.sin((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside1.x = 16*Math.cos(((this.percent1+this.percent0)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside1.y = 16*Math.sin(((this.percent1+this.percent0)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.outside.x =16*Math.cos(((this.percent2+this.percent1)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.outside.y = 16*Math.sin(((this.percent2+this.percent1)/2*3*Math.PI/2)/75-Math.PI/2)+31;
    },
    percent2:function(newVal){
      this.minutes[DAYS.get(this.pageCounter)][2]=newVal*14.4;
      let m = Math.round(this.minutes[DAYS.get(this.pageCounter)][2] / 15) * 15;
      let h = Math.floor(m/60);
      m = m-h*60;
      this.circle["2"].hourText = (h < 10 ? "0" + h.toString() : h.toString()) + ":" + (m < 10 ? "0" + m.toString() : m.toString());

      this.arrayGauge["2"].dasharray = newVal.toString()+" " +(100 - newVal).toString();
      this.circle["2"].x = 25*Math.cos((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.circle["2"].y = 25 * Math.sin((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.outside.x =16*Math.cos(((this.percent2+this.percent1)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.outside.y = 16*Math.sin(((this.percent2+this.percent1)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside2.x = 16*Math.cos(((this.percent3+this.percent2)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside2.y = 16*Math.sin(((this.percent3+this.percent2)/2*3*Math.PI/2)/75-Math.PI/2)+31;
 },
    percent3:function(newVal){
      this.minutes[DAYS.get(this.pageCounter)][3]=newVal*14.4;
      let m = Math.round(this.minutes[DAYS.get(this.pageCounter)][3] / 15) * 15;
      let h = Math.floor(m/60);
      m = m-h*60;
      this.circle["3"].hourText = (h < 10 ? "0" + h.toString() : h.toString()) + ":" + (m < 10 ? "0" + m.toString() : m.toString());

      this.arrayGauge["3"].dasharray = newVal.toString()+" " +(100 - newVal).toString();
      this.circle["3"].x = 25*Math.cos((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.circle["3"].y = 25 * Math.sin((newVal*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside2.x = 16*Math.cos(((this.percent3+this.percent2)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.inside2.y = 16*Math.sin(((this.percent3+this.percent2)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.night2.x = 16*Math.cos(((this.percent3+100)/2*3*Math.PI/2)/75-Math.PI/2)+31;
      this.night2.y = 16*Math.sin(((this.percent3+100)/2*3*Math.PI/2)/75-Math.PI/2)+31;
   },
  },
  computed:{
    valueSlider: {
      get: function () {
        return this.slider.value
      },
      set: function (newValue) {
        this.slider.value = newValue;
        for (let [key, value] of JOURS.entries()) {
          if (value === newValue){
            this.pageCounter = key;
            this.processActualDay();
          }
        }
      }
    }
  },
  mounted() {
    let date= new Date();
    this.pageCounter = date.getDay()===0?6:date.getDay()-1;
    this.processActualDay();
  },
  methods:{
    callbackRange (val) {
      this.rangeValue = val;
    },
    ecolorRight(){
      this.colorRight = "#6c6b6b";
    },
    decolorRight(){
      this.colorRight = "#000000";
    },
    decolorLeft(){
      this.colorLeft= "#000000";
    },
    ecolorLeft(){
      this.colorLeft= "#6c6b6b";
    },
    onLeftClick(){
      if(this.pageCounter>0){
        this.pageCounter--;
        this.processActualDay(this.pageCounter);
      }
    },
    onRightClick(){
      if(this.pageCounter<6){
        this.pageCounter++;
        this.processActualDay(this.pageCounter);
      }
    },
    processActualDay(){
      this.arrowLeft= true;
      this.decolorLeft();
      this.arrowRight = true;
      this.decolorRight();
      if(this.pageCounter===6){
        this.arrowRight = false;
      }
      if(this.pageCounter===0){
        this.arrowLeft = false;
      }
      this.percent0 = this.minutes[DAYS.get(this.pageCounter)][0]/14.4;
      this.percent1 = this.minutes[DAYS.get(this.pageCounter)][1]/14.4;
      this.percent2 = this.minutes[DAYS.get(this.pageCounter)][2]/14.4;
      this.percent3 = this.minutes[DAYS.get(this.pageCounter)][3]/14.4;
      console.log(this.percent0, this.percent1, this.percent2, this.percent3);
      this.day = JOURS.get(this.pageCounter);
    },
    startDrag(e){
      if (e.target.id === "0") {
        this.circle["0"].drag = true;
        this.circle["0"].radius = 4;
      } else if (e.target.id === "1") {
        this.circle["1"].drag  = true;
        this.circle["1"].radius = 4;
      }else if (e.target.id === "2") {
        this.circle["2"].drag = true;
        this.circle["2"].radius = 4;
      }else if (e.target.id === "3") {
        this.circle["3"].drag = true;
        this.circle["3"].radius = 4;
      }
    },
    onDrag: function (e) {
      let dim = this.offset(document.getElementById("donut"));
      let angle;
      let ev = e.clientX?e:e.changedTouches[0];
      let percent;
      console.log(this.percent0, this.percent1-5);
      if (this.circle["0"].drag) {
        angle = Math.atan2(ev.clientY - (dim.height / 2 + dim.top), ev.clientX - (dim.width / 2 + dim.left));
        percent = angle * 50 / Math.PI + 25 >= 0?angle * 50 / Math.PI + 25:(angle + 2 * Math.PI) * 50 / Math.PI + 25;
        this.percent0 = (percent>5&&percent<this.percent1-5)?percent:this.percent0;
      }else if (this.circle["1"].drag) {
        angle = Math.atan2(ev.clientY - (dim.height / 2 + dim.top), ev.clientX - (dim.width / 2 + dim.left));
        percent = angle * 50 / Math.PI + 25 >= 0?angle * 50 / Math.PI + 25:(angle + 2 * Math.PI) * 50 / Math.PI + 25;
        this.percent1=(percent>this.percent0+5&&percent<this.percent2-5)?percent:this.percent1;
      }else if (this.circle["2"].drag) {
        angle = Math.atan2(ev.clientY - (dim.height / 2 + dim.top), ev.clientX - (dim.width / 2 + dim.left));
        percent = angle * 50 / Math.PI + 25 >= 0?angle * 50 / Math.PI + 25:(angle + 2 * Math.PI) * 50 / Math.PI + 25;
        this.percent2 = (percent>this.percent1+5&&percent<this.percent3-5)?percent:this.percent2;
      }else if (this.circle["3"].drag) {
        angle = Math.atan2(ev.clientY - (dim.height / 2 + dim.top), ev.clientX - (dim.width / 2 + dim.left));
        percent = angle * 50 / Math.PI + 25 >= 0?angle * 50 / Math.PI + 25:(angle + 2 * Math.PI) * 50 / Math.PI + 25;
        this.percent3 = (percent>this.percent2+5&&percent<95)?percent:this.percent3;
      }
    },
    stopDrag() {
      for(let key in this.circle) {
        this.circle[key.toString()].drag = false;
        this.circle[key.toString()].radius = 3;
      }
    },
    offset(el) {
      if ('getBoundingClientRect' in el) {
        let
          boundingRect = el.getBoundingClientRect(),
          body = document.body || document.getElementsByTagName("body")[0],
          clientTop = document.documentElement.clientTop || body.clientTop || 0,
          clientLeft = document.documentElement.clientLeft || body.clientLeft || 0,
          scrollTop = (window.pageYOffset || document.documentElement.scrollTop || body.scrollTop),
          scrollLeft = (window.pageXOffset || document.documentElement.scrollLeft || body.scrollLeft);
        return {
          top: boundingRect.top + scrollTop - clientTop,
          left: boundingRect.left + scrollLeft - clientLeft,
          height:boundingRect.height,
          width:boundingRect.width
        }
      }else {
        return{
          top:el.container.offsetHeight,
          left:el.container.offsetWidth,
          height:el.container.height,
          width:el.container.width
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

.vue-slider{
  margin-top: 0.5em;
  left:50%;
  bottom:50%;
  padding-left: 2em;
  padding-right: 2em;
  transform: translate(-50%, 20%);

}
.prog-container{
  height: 100px;
}
.hour-text{
  cursor: grabbing;


}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.day-container{
  font-size: 1.5em;
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0%);
  font-family: 'Poppins', sans-serif;
  color: #0b1338;
  cursor: default;
}
  .donut {
    height: 65%;
    width: 100%;
    position: fixed;
    left: 50%;
    bottom:2%;
    transform: translate(-50%, -10%);
  }
  .arrow-right{
    position: fixed;
    right: 1%;
    bottom: 50%;
    cursor: pointer;
  }
  .arrow-left{
    position: fixed;
    left: 1%;
    bottom: 50%;

    cursor: pointer;

  }
  .arrow:hover{
      background-color: #404040;
  }

</style>