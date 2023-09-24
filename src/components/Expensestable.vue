<template>
  

    
</template>
<script lang="ts" setup>
import { ref } from "vue";
const ExpenseData = ref({
  date: "",
  cost: 0,
  libelle: "",
  id_user: 0,
  id_category: 0,

});

const props = defineProps({ expense: { type: Object, required: true } });
</script>
<style scoped>

</style>
