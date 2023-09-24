<template>
  <header class="header" >
    <div class="navbar_content">
      <div class="navbar_item">
        <Logo></Logo>

        <div class="navbar_menu">
          <ul>
            <li><RouterLink to="/accueil">Accueil</RouterLink></li>
            <li><RouterLink to="/depenses">Dépense</RouterLink></li>
            <li><RouterLink to="/addCategory">Catégorie</RouterLink></li>
            <li><RouterLink to="/pLanification">PLanification</RouterLink></li>
            <li><button @click="out">Déconnexion</button></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Logo from "@/components/Logo.vue";
import router from "@/router";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
const user = ref();

const userData = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});

const out = async () => {
  console.log("hey");

  const { error } = await supabase.auth.signOut();
  const token = localStorage.getItem("access_token");
  console.log(token);

  if (error) {
    console.log(error);
  } else {
    router.replace("/");
  }
};
</script>
<style scoped>
 * {
  margin: 0;
  padding: 0;
  font-style: system-ui;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
  position: relative;
}

button {
  background-color: #17627a;
  padding: 10px 20px;
  color: white;
  border-radius: 9px;
  border: 1px solid transparent;
}
.header {
  width: 100%;
  padding: 15px;
  background-color: whitesmoke;
  overflow-x: hidden; 
  box-shadow: 0 0 5px #17627a;
  

}

ul li:active {
  color: #17627a;
}
.navbar_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}

img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.navbar_menu ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  top: 15px;
  padding-bottom: 15px;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #273250;
  text-transform: uppercase;
}
li {
  list-style-type: none;
}
a:hover {
 
  padding-bottom: 22px;
  color: rgb(12, 12, 18);
}
 
 </style>
