<template>
<body>
  <div class="body">
  <div class="form_body">
    <div class="wrapper">
      <div class="form_title">
        <h1>Inscription</h1>
      </div>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          class="form_control"
          name="firstName"
          id=""
          placeholder="Robert"
          required
          v-model="userData.prenom"
        autocomplete="off" />
        <input
          type="text"
          class="form_control"
          name_name="lastName"
          id=""
          placeholder="Latour"
          required
          v-model="userData.nom"
        autocomplete="off"/>
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
        />
        <div class="button_content">
        <button @click="submitForm" type="submit" class="formButton">
          submit
        </button>
        <RouterLink to="/signin"> <span style="">Vous avez déjà un compte ?</span></RouterLink>
        </div>
      </form>
    </div>
  </div>
</div>
</body>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";
const { addUser } = useUserStore();
const user = ref();
const emits = defineEmits(["submit"]);
const userData = ref({
  email: "",
  password: "",
});

const submitForm = async () => {
  await addUser(userData.value);
  const { data, error } = await supabase.auth.signUp({
    email: userData.value.email,
    password: userData.value.password,
  });
  console.log(data);

  if (error) {
    console.log(error);
  } else {
    router.replace("/signin");
  }
};
</script>
<style scoped>
body{
 

 background-image: url('@/assets/images/pieces.jpg');
 background-size: cover;
 margin: 0;
 background-repeat: no-repeat;
 min-height: 100vh;
 min-width: 100vw;
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
button {
  border: 1px solid transparent;
  color: #17627a;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 9px;
  margin-top: 1rem;
  font-size: 1rem;
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
.button_content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button_content span{
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.button_content a{
  text-decoration: none;
}
</style>
