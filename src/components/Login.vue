<template>
<body>
  
  <div class="body">
    <div class="form_body">
      
    <div class="wrapper">
      <div class="form_title">
        <h1>Connexion</h1>
      </div>
      <form action="" id="formLogin" @submit.prevent="submitForm">
        <input
          type="email"
          class="form_control"
          name=""
          id=""
          placeholder="example@gmail.com"
          required
          v-model="userData.email"
        autocomplete="off"/>
        <input
          type="password"
          class="form_control"
          name=""
          id=""
          placeholder="Mot de passe"
          required
          v-model="userData.password"
       autocomplete="off" />

        <div class="authentificate">
          <button type="submit" class="formButton">Submit</button>
         <RouterLink to="/signup"> <span style="">Vous n'avez pas encore de compte ?</span></RouterLink>
        </div>
      </form>
    </div>
  </div>
  </div>

</body>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const user = ref();
import { supabase } from "@/lib/supabase";
const emits = defineEmits(["submit"]);
import { defineStore } from "pinia";
import router from "@/router";
const userData = ref({
  email: "",
  password: "",
  nom: "",
  prenom: "",
});

const submitForm = async () => {

  const { data, error } = await supabase.auth.signInWithPassword({
    email: userData.value.email,
    password: userData.value.password,
  });

  if (error) {
    console.log(error);
  } else {
    
    router.replace("/accueil");
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400px;
  position: relative;
}

body{
  background-image: url('@/assets/images/pieces.jpg');
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
object-fit: cover;
background-position: center;
}
.form_control {
   width: 100%;
  border-radius: 9px;
  background: transparent;
  outline: none;
  padding: 10px 5px;
  margin-bottom: 20px;
  border: 3px solid  white; 
  color: white;
}
.authentificate{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.authentificate span{
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.authentificate a{
  text-decoration: none;
}
button {
  border: 1px solid transparent;
  padding: 8px 20px;
  background-color:   white;
  border-radius: 9px;
  margin-top: 1rem;
  font-size: 1rem;
 color: #17627a;
  transition: transform 0.3s, box-shadow 0.3s;

}
.wrapper {
  max-width: 700px;
  border-radius: 9px;
 /*  border: 1px solid white; */
  color: white;
  padding: 20px;
  margin: 100px 0;
  background-color: #17627a;
  box-shadow: 0px 0px 8px white;
 
}
.form_body {
  display: flex;
  justify-content: center;
  
}
.form_title h1 {
  font-weight: 500px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 25px 0;
  text-transform: uppercase;
  user-select: none;
  color: white;
}
</style>
