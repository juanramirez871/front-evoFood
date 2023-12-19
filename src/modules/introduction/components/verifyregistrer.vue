<template>
    <!-- <form action="" class="form_main">
        <div class="logo">
        <img src="../../introduction/assets/logoevofood.png" alt="" width="200">
        </div>
    <button id="button">INGRESAR</button>
    </form> -->
    <form class="form"> <div class="title">OTP</div> <div class="title">Verificar codigo</div> <p class="message">codigo de verificación enviado a tu correo</p> <div class="inputs"> <input id="input1" type="text" maxlength="1"> <input id="input2" type="text" maxlength="1"> <input id="input3" type="text" maxlength="1"> <input id="input4" type="text" maxlength="1"> </div> <button class="action">VERIFICAR</button> </form>
</template>
<script setup>

</script>
<style scoped>
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 18rem;
  background-color: rgb(38, 44, 95);
  border-radius: 12px;
  padding: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 246, 246)
}

.message {
  color: #a3a3a3;
  font-size: 14px;
  margin-top: 4px;
  text-align: center
}

.inputs {
  margin-top: 10px
}

.inputs input {
  width: 32px;
  height: 32px;
  text-align: center;
  border: none;
  border-bottom: 1.5px solid #d2d2d2;
  margin: 0 10px;
}

.inputs input:focus {
  border-bottom: 1.5px solid royalblue;
  outline: none;
}

.action {
  margin-top: 24px;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: royalblue;
  color: white;
  cursor: pointer;
  align-self: end;
}
</style>