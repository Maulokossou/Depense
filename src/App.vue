<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AccueilView from "./views/AccueilView.vue";
import Navbar from './components/Navbar.vue';
import Pagefooter from '@/components/Pagefooter.vue'
</script>

<template>
<!-- <Navbar></Navbar> -->

 <RouterView/>

 <!-- <Footer></Footer> -->
</template>

<style scoped>
</style>
