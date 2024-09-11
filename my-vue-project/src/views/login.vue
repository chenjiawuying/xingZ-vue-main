<template>
    <div>
      <div class="overlay" v-if="showOverlay"></div>
      <div class="container">
        <div class="loginBox">
          <div class="userImage">
            <img src="http://bindy.es/Codepen-resources/img/catFace.png" alt="User Image">
          </div>
          <form @submit.prevent="validateForm">
            <div class="input-wrapper">
              <label>Introduce tu email:</label>
              <input type="email" v-model="email" placeholder="E-mail">
              <div class="error-email" v-if="showEmailError">
                <div class="email-msg">{{ emailErrorMsg }}</div>
                <div class="triangle"></div>
              </div>
            </div>
            <div class="input-wrapper">
              <label>Introduce tu contraseña:</label>
              <input type="password" v-model="password" placeholder="Password">
              <div class="error-pass" v-if="showPassError">
                <div class="pass-msg">{{ passErrorMsg }}</div>
                <div class="triangle"></div>
              </div>
            </div>
            <input type="submit" value="LOGIN">
          </form>
        </div>
      </div>
      <div class="confirmation" v-if="showConfirmation">
        <img src="https://image.freepik.com/vector-gratis/lindo-personaje-de-gato_11823-526.jpg" alt="Confirmation">
      </div>
    </div>
  </template>
  
  <script scoped>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'HomeView',
    components: {
      HelloWorld
    },
    data() {
      return {
        email: '',
        password: '',
        showEmailError: false,
        showPassError: false,
        emailErrorMsg: '',
        passErrorMsg: '',
        showConfirmation: false,
        showOverlay: false
      };
    },
    methods: {
      checkEmail(email) {
        const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailReg.test(email);
      },
      validateForm() {
        this.showEmailError = false;
        this.showPassError = false;
        let countErrors = 0;
  
        if (!this.checkEmail(this.email)) {
          this.emailErrorMsg = "Por favor, compruebe su email";
          this.showEmailError = true;
          countErrors++;
        }
  
        if (this.password.length < 5) {
          this.passErrorMsg = "La contraseña debe al menos 5 caracteres";
          this.showPassError = true;
          countErrors++;
        }
  
        setTimeout(() => {
          this.showEmailError = false;
          this.showPassError = false;
        }, 2000);
  
        if (countErrors === 0) {
          this.showOverlay = true;
          this.showConfirmation = true;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  body, html {
    height: 100%; 
    margin: 0; 
    font-family: "Arial"; 
    font-weight: lighter; 
    color: #626262;
    background-color: #66e8dc; 
  }
  .container {
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
  }
  .loginBox {
    width: 330px; 
    background-color: white; 
    box-shadow: 0px 0px 43px -2px rgba(135,130,135,1); 
    border-radius: 8px; 
    padding: 15px;
  }
  .userImage {
    border-radius: 50%; 
    overflow: hidden; 
    width: 120px; 
    height: 120px; 
    margin: 10px auto 30px;
  }
  img {
    width: 100%;
  }
  .input-wrapper {
    position: relative;
  }
  .error-email, .error-pass {
    position: absolute; 
    top: 5px; 
    padding: 5px 10px; 
    right: 0; 
    color: white; 
    background-color: #66e8dc; 
    border-radius: 10px;
  }
  .triangle {
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent; 
    border-right: 10px solid transparent; 
    border-top: 10px solid #66e8dc; 
    position: absolute; 
    right: 18px; 
    bottom: -8px;
  }
  input {
    display: block; 
    width: 300px; 
    padding: 15px 10px; 
    border-radius: 8px; 
    border: 1px solid #ececec; 
    margin: 10px 0;
  }
  input[type="submit"] {
    width: 100%; 
    margin-top: 35px; 
    background-color: #32bfb2; 
    color: white; 
    font-weight: lighter;
  }
  .warning {
    border-color: red
  }
  .confirmation {
    width: 200px; 
    position: absolute; 
    top: 0; 
    border-radius: 50%; 
    overflow: hidden; 
    height: 200px; 
    left: 50%; 
    margin-left: -100px; 
    top: 50%; 
    margin-top: -100px;     					
    box-shadow: 10px 10px 10px; 
    z-index: 10
  }
  .overlay {
    background: rgba(14, 14, 14, 0.57); 
    height: 100%; 
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    z-index: 9;
  }
  .showOk {
    animation: showOk 1s ease 1 normal; 
    width: 200px; 
    height: 200px;
  }
  @keyframes showOk {
    from {
      transform: scale(0);
      opacity: 0
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  