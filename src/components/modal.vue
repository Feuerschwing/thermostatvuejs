<template>
    <transition name="modal">
      <div class="modal-mask" >
        <div class="modal-container">
          <div class="modal-header">
            <h3>Log In</h3>
          </div>
          <div class="modal-body">
            <label class="form-label">
              Username
              <input type="text" v-model="username">
            </label>
            <label class="form-label">
              Password
              <input type="password" placeholder="+8 chars" auto-complete="new-password" v-model="password">
            </label>
          </div>
          <div class="modal-footer text-right">
            <button class="modal-default-button" @click="savePost()">
              Log in
            </button>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: "modal",
  computed:{
    username:{
      get(){
        return this.$store.state.user
      },
      set(value){
        this.$store.commit("UPDATE_USER", value);
      }
    },
    password:{
      get(){
        return this.$store.state.password
      },
      set(value){
        this.$store.commit("UPDATE_PASSWORD", value);
      }
    }
  },
  methods: {
    savePost: function () {
      this.$emit('tryConnection');
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Catamaran', sans-serif;
  box-sizing: border-box;
}
.modal-default-button{
  cursor: pointer;
  background: #33B5E5;
  border: 0;
  border-radius: 50px;
  color: #ffffff;
  padding: 12px 60px;
  font-weight: 700;
  font-size: 15px;
  outline: 0;
  text-transform: uppercase;
  margin: 0 auto;
  display: table;

  &:hover{
    background: darken(#24acdb, 5%)
  }
}
input{
  border: 1px solid rgba(0, 0, 0, .10);
  background: #ffffff;
  box-shadow: none;
  color: #000;
  padding: 16px;
  outline: 0;
  margin-bottom: 12px;
  border-radius: 2px;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  left: 50%;
  bottom: 50%;
  &::placeholder{
     color: #c9c9c9;
     font-size: 11px;
  }
  &:focus{
    color: #555555;
    background: #ffffff;
    border-color: #33B5E5;
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-container {
  width: 300px;
  margin: 150px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
}

.modal-header h3 {
  margin-top: 0;
  color: #33B5E5;
}

.modal-body {
  margin: 20px 0;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}

.form-label > .form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>