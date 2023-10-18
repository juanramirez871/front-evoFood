<template>
    <form action="" class="form_main">
        <div class="logo">
          <img src="../../introduction/assets/logoevofood.png" alt="" width="200">
        </div>
        <p class="heading">LOGIN</p>
        <button class="button">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
          <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
          <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
          <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
          <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
        </svg>
          Google
        </button>
        <div class="inputContainer">
            <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>
        <input type="text" class="inputField" id="email" placeholder="E-MAIL">
        </div>
        
    <div class="inputContainer">
        <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
        </svg>
        <input type="password" class="inputField" id="password" placeholder="CONTRASEÑA">
    </div>
    <button id="button">INGRESAR</button>
        <p><a class="forgotLink" href="#">¿olvidaste tú contraseña?</a></p>
    </form>
</template>
<script setup>

</script>
<style scoped>
.logo{
  display: flex;
  align-content: center;
  align-self: center;
  margin-left: 11%;
  margin-bottom: 5%;
  z-index: 2;
}
.form_main {
    width: 28rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 30px 30px 30px;
  }
  
  .form_main::before {
    position: absolute;
    content: "";
    width: 300px;
    height: 60vh;
    transform: rotate(45deg);
    left: -180px;
    z-index: 1;
    border-radius: 30px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.082);
  }
  
  .heading {
    font-size: 2em;
    color: #0C0A36;
    font-weight: 700;
    margin: 5px 0 10px 0;
    z-index: 2;
  }
  
  .inputContainer {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .inputIcon {
    position: absolute;
    left: 3px;
    width: 20px;
    height: 20px;
  }
  
  .inputField {
    width: 100%;
    font-size: 20px;
    height: 30px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(173, 173, 173);
    margin: 20px 0;
    color: black;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 30px;
  }
  
  .inputField:focus {
    outline: none;
    border-bottom: 2px solid #afc7f4;
  }
  
  .inputField::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
  }
  
  #button {
    z-index: 2;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    border: none;
    background-color: #000000;
    height: 30px;
    color: white;
    font-size: .8em;
    font-weight: 500;
    letter-spacing: 8px;
    margin-top : 5vh;
    cursor: pointer;
    border-radius: 10px;
  }
  
  #button:hover {
    background-color: #000000cb;
  }
  
  .forgotLink {
    z-index: 2;
    font-size: 1em;
    font-weight: 500;
    color: rgb(31, 20, 74);
    text-decoration: none;
    border-radius: 20px;
  }
  button {
    margin-top: 7vh;
    margin-bottom: 2vh;
    width: 320px;
    justify-content: center;
    display: flex;
    padding: 0.5rem 1.4rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    gap: 0.75rem;
    color: rgb(65, 63, 63);
    background-color: #fff;
    cursor: pointer;
    z-index: 2;
  }
  
  .button svg {
    height: 24px;
  }
</style>