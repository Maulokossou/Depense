<template>
  <div class="modal_body">
   
    
    <div class="modal_item">
      <label for="date">Date</label>
      <input type="date"  name="date" id="" v-model="ExpenseData.date" required />
    </div>
    <div class="modal_item">
      <label for="cost">Montant</label>
      <input type="text" name="cost" id="" v-model="ExpenseData.cost" required min="1"/>
    </div>
    <div class="modal_item">
      <label for="libelle">Description</label>
      <input type="text" name="libelle" id="" v-model="ExpenseData.libelle" required pattern="(?=.*?[A-Z])(?=.*?[0-9])"/>
    </div>
    <div class="modal_item">
      <label for="id_categorie">Categorie</label>
      <select name="id_categorie" v-model="ExpenseData.id_category">
        <option
          v-for="category in categories_users"
          :key="category.id_categorie"
          :value="category.id_categorie"
        required>
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="button">
      <button type="submit" @click="createExpense">Enregistrer</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useExpenseStore } from "@/stores/expenses";
import router from "@/router";
import { storeToRefs } from "pinia";
import { supabase } from "@/lib/supabase";
const { expenses } = storeToRefs(useExpenseStore());
import { useCategorieStore } from "@/stores/categories_users";
const { categories_users } = storeToRefs(useCategorieStore());
const { initialise } = useCategorieStore();
onMounted(async () => {
  await initialise();
  
});
const is_open = ref();
const userId = ref();
async function getUser(){
  const user = await supabase.auth.getUser();
  userId.value = user.data.user?.id;
  console.log(userId.value);
}
getUser();
const { addExpense  } = useExpenseStore();
const ExpenseData = ref({
  date: "",
  cost: 0,
  libelle: "",
  id_user: userId.value,
  id_category: 0,
});
const createExpense = async () => {
  
  await addExpense(ExpenseData.value);

  console.log(expenses);
  router.replace("/depenses");

};

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-weight: 400px;
  font-size: 14px;
  box-sizing: border-box;
  position: relative;
}
.button button {
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 9px;
  border: 1px solid transparent;
  background-color: #17627a;
  color: white;
}
.modal_header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.modal_header h2,
.modal_item label {
  font-size: 20px;
  user-select: none;
  text-transform: uppercase;
}
.modal_item input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 9px;
  border: 1px solid rgb(140, 126, 126);
  margin: 10px 0;
}
.modal_item select {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 9px;
  border: 1px solid rgb(140, 126, 126);
  margin: 10px 0;
}
.modal_body {
  padding: 40px;
  width: 500px;
}
.modal_close {
  background-color: #17627a;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: white;
  border: none;
}

.button {
  display: flex;
  justify-content: center;
}
</style>
