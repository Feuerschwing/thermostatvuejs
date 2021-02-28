import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        temperature:20.0,
        humidity:0,
        boolerState:0,
        mode:"Default",
        connected: false,
        colorMode:"#33B5E5",
        colorTextMode:"#404040",
        displayButton:false,
        textSizeMode: "20px",
        user:"",
        password:""

    },
    mutations:{
        UPDATE_TEMP(state, temperature){
            state.temperature = temperature;
        },
        UPDATE_HUM(state, humidity){
            state.humidity = humidity;
        },
        UPDATE_BOOLERSTATE(state, boolerState){
            state.boolerState = boolerState;
        },
        UPDATE_MODE(state, mode){
            state.mode = mode;
        },
        UPDATE_CONNECTED(state, connected){
            state.connected = connected;
        },
        UPDATE_COLORMODE(state, color){
            state.colorMode = color;
        },
        UPDATE_COLORTEXTMODE(state, color){
            state.colorTextMode = color;
        },
        UPDATE_DISPLAY_BUTTON(state, buttonState){
            state.displayButton = buttonState;
        },
        UPDATE_FONT_SIZE(state, size){
            state.textSizeMode = size;
        },
        UPDATE_USER(state, user){
            state.user = user;
        },
        UPDATE_PASSWORD(state, password){
            state.password = password;
        }
    }
});