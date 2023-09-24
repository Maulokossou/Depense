<template>
    <Login></Login>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Login from '@/components/Login.vue';
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
  outline: none;
  position: relative;
}
.login {
  height: 100vh;
  width: 100%;
  background: rgb(61, 124, 61);
  background-size: cover;
  padding: 20px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
.nav_logo a {
  width: 120px;
  cursor: pointer;
  font-size: 2.5rem;
  font-style: oblique;
  font-weight: bold;
  text-decoration: none;
  color: white;
}
button.btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0;
  background-color: transparent;
  color: white;
  border: 2px solid transparent;
  border-color: border-color 0.3s;
}
button.btn:hover {
  border-color: white;
  border-radius: 7px;
}
section.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.form_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
}
.form_wrapper .card {
  width: 360px;
  padding: 30px;
  background-color: white;
}

.card_header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 20px 0;
  font-size: 1.1rem;
  color: green;
  box-shadow: 2px 3px 30px rgb(141, 214, 141);
  border-radius: 50px;
}
.card_header .form_header {
  flex: 50%;
  text-align: center;
  padding: 10px 0;
  border: 1px solid transparent;
  border-radius: 50px;
  user-select: none;
  cursor: pointer;
}
.card h1 {
  font-size: 20px;
  font-weight: 600px;
  font-style: oblique;
  color: green;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}
.card_header .form_header.active {
  box-shadow: 0px 0px 20px rgb(19, 210, 177/55%);
  border-color: green;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.card_body {
  display: flex;
  flex-wrap: nowrap;
  padding: 40px 0;
  text-align: center;
}

form {
  flex: 0 0 100%;
}
.toggleForm {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
}
.form_control {
  width: 100%;
  border: none;
  background: none;
  outline: none;
  padding: 10px 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
}
.form_control::placeholder {
  color: rgb(225, 69, 95);
}
.formButton {
  border: 1px solid transparent;
  padding: 1rem 3rem;
  background-color: rgb(225, 69, 95);
  border-radius: 50px;
  margin-top: 1rem;
  font-size: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}
.formButton:hover {
  box-shadow: 3px 5px 15px rgb(225, 69, 95);
  transform: translateY(-5px);
}

</style>
