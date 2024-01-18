<template>
  <div class="form-container">
    <div class="titulo">
      <h1>INICIA EL REGISTRO</h1>
    </div>
    <el-form
      :model="form"
      :label-width="labelWidth"
      class="responsive-form"
      @submit.prevent="handleNext"
    >
      <el-form-item label="NOMBRE">
        <el-input v-model="form.firstName" />
      </el-form-item>
      <el-form-item label="APELLIDOS">
        <el-input v-model="form.surname" />
      </el-form-item>
      <el-form-item label="E-MAIL">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.emailVerify" placeholder="CONFIRMAR E-MAIL" />
      </el-form-item>
      <el-form-item label="CONTRASEÑA">
        <el-input 
        type="password"
        placeholder="CREAR CONTRASEÑA"
        v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="form.passwordVerify"
          placeholder="CONFIRMAR CONTRASEÑA"
        />
      </el-form-item>
      <div class="btns">
        <div class="btn">
          <myButton initial-text="SIGUIENTE" type="submit" />
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import myButton from "./myButton.vue";
import { useRouter } from "vue-router";

const labelWidth = ref("120px");
const isMobile = () => {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
};

if (isMobile()) {
  labelWidth.value = null;
}

const router = useRouter();
const redirectVerify = () => {
  router.push({ name: "verificar.correo" });
};
const form = reactive({
  firstName : "",
  surname : "",
  email: "",
  emailVerify: "",
  password: "",
  passwordVerify: "",
});

const handleNext = () => {
  if (form.email !== form.emailVerify) {
    alert("Los campos de correo electrónico no coinciden.");
    return;
  } else if (form.password !== form.passwordVerify) {
    alert("Los campos de contraseña no coinciden.");
    return;
  } else if (
    form.firstName === "" ||
    form.surname === "" ||
    form.email === "" ||
    form.emailVerify === "" ||
    form.password === "" ||
    form.passwordVerify === ""
  ) {
    alert("Debe completar todos los campos.");
    return;
  }
   else {
    redirectVerify();
  }
};

</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
.form-container {
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
}
.titulo {
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
}
h1 {
  color: #0c0a36;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn {
  display: flex;
  margin: 1.6%;
}
.modal {
  position: fixed;
  z-index: 999;
  top: 15%;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: white;
  align-items: center;
  z-index: 999;
}
.close-button {
  position: absolute;
  top: 2.1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
}
.close-button:hover {
  font-size: 1.9rem;
}
.backdrop {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.296);
  backdrop-filter: blur(3px);
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
@media (min-width: 768px) {
  .el-col.md-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media (max-width: 767px) {
  .el-form-item {
    display: flow;
  }
}
</style>
