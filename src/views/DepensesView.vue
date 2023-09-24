<template>
  <body>
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <section class="expenses">
        <div class="depenses">
          <div class="container">
            <div class="depenses_content">
              <div class="add_expense">
                <div class="add_expense_title">
                  <span>Veuillez ajouter vos dépenses du jour</span>
                </div>
                <div class="add_button" style="display: flex; gap: 15px">
                  <button @click="is_open = true">Ajouter une dépense</button>
                  <button @click="openModal">Vos dépenses par </button>
                </div>
                <div class="table">
                  <table class="" width="80%">
                    <Expensestabheader></Expensestabheader>
                    <tbody style="background-color: gray">

                      <tr v-for="ExpenseData in expenses" :key="ExpenseData.id_expense">
                        <td>
                          {{ ExpenseData.libelle }}
                        </td>
                        <td>
                          {{ ExpenseData.cost }}
                        </td>

                        <td>
                          {{ ExpenseData.date }}
                        </td>

                        <td>
                          <!-- <div style="border-radius-top-left: 5px;"></div> -->
                          {{ getCategoryName(ExpenseData.id_category) }}
                        </td>
                        <td>
                          <DeleteIcon @click="deleteExpense(ExpenseData)"></DeleteIcon>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div class="add_depenses">
                <div class="overlay_div">
                  <div class="overlay" :class="{
                    open: is_open === true,
                    close: is_open === false,
                  }">
                    <div class="modal">
                      <div class="modal_content">
                        <div class="modal_header">
                          <h2>Ajouter une dépense</h2>
                          <button @click="is_open = false" class="modal_close">
                            X
                          </button>
                        </div>
                        <Modalmain></Modalmain>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal" v-if="isModalOpen">
                <div class="modal_content">
                  <div class="modal_body">
                    <div class="chooseDate">
                      <div class="chooseDate">
                        <label for="">Choisir la date</label>
                        <input type="date" v-model="selectedDate" />
                      </div>
                      <label for="">Sélectionnez une catégorie</label>
                      <select v-model="selectedCategory">
                        <option value="null" selected>Choisir une catégorie</option>
                        <option v-for="categorieData in categories_users" :key="categorieData.id_categorie"
                          :value="categorieData.id_categorie">
                          {{ categorieData.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <button @click="closeModal">Fermer</button>
                  <button @click="searchExpenses">Filtrer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <Tri></Tri> -->
    </main>
    <footer class="page-footer">
      <Pagefooter></Pagefooter>
    </footer>
  </body>
</template>
<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import Pagefooter from "@/components/Pagefooter.vue";
import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import { storeToRefs } from "pinia";
import Expensestable from "@/components/Expensestable.vue";
import Modalmain from "@/components/Modalmain.vue";
const { categories_users } = storeToRefs(useCategorieStore());
import { useCategorieStore } from "@/stores/categories_users";
import { useExpenseStore } from "@/stores/expenses";
import Expensestabheader from "@/components/Expensestabheader.vue";
import router from "@/router";
const { expenses } = storeToRefs(useExpenseStore());
import DeleteIcon from "@/components/DeleteIcon.vue";
const { initialiseExpense, getExpensesByDateAndCategory } = useExpenseStore();
import { onMounted, ref } from "vue";
const isModalOpen = ref(false)
const is_open = ref();
const userId = ref();
const selectedDate = ref(null);
const selectedCategory = ref()
async function getUser() {
  const user = await supabase.auth.getUser();
  userId.value = user.data.user?.id;
  console.log(userId.value);
}
getUser();

const ExpenseData = ref({
  date: "",
  cost: 0,
  libelle: "",
  id_user: userId.value,
  id_category: 0,
});
onMounted(async () => {
  await getUser();
  await initialiseExpense();


})



const searchExpenses = async () => {

  if (selectedCategory || selectedDate) {
    console.log(selectedDate.value);
    await getExpensesByDateAndCategory(selectedDate.value, selectedCategory.value);
    selectedDate.value = null
    selectedCategory.value = null
    isModalOpen.value = false
  } else {
    alert("Veuillez choisir au moins une option de filtrage")
  }
}

const openModal = () => {
  isModalOpen.value = true;
}
const closeModal = () => {
  isModalOpen.value = false;
}
const getCategoryName = (categoryId) => {
  const category = categories_users.value.find((c) => c.id_categorie === categoryId);
  return category ? category.name : "Catégorie inconnue";
};
async function deleteExpense(ExpenseData: Expense) {
  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id_expense", ExpenseData.id_expense);
  await initialiseExpense();

}
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

.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0;
}

.add_expense_title span {
  font-size: 20px;
  font-weight: 500px;
  padding: 20px;
}

.depenses {
  padding: 80px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333333d3;
  display: none;
  z-index: 100px;
}

.table table {
  width: 800px;
  padding: 15px;
  z-index: -5px;
}

.table {
  display: flex;
  justify-content: center;
}

.button_border {
  display: flex;
  justify-content: space-between;
}

thead {
  border: 2px solid dark;
  background-color: #17627a;
  color: white;
  font-size: 24px;
}

tr {
  width: 100%;
  border-bottom: 2px solid #17627a;
  background-color: rgb(140, 126, 126);
}

td {
  border: 2px solid white;
  color: black;
  font-size: 24px;
  text-align: center;
}

.open {
  display: block;
}

.close {
  display: none;
}

.add_expense_title {
  display: flex;
  justify-content: center;
}

.modal {
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-width: 600px;
  height: 600px;
  z-index: 200px;
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

.modal_body {
  padding: 20px;
}

.modal_close {
  background-color: #17627a;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: white;
  border: none;

}

footer {
  z-index: -20px;
}

.button {
  display: flex;
  justify-content: center;
}

.add_button {
  display: flex;
  justify-content: center;
  top: 20px;
}

.add_button button {
  padding: 10px 20px;
  margin-bottom: 35px;
  border-radius: 9px;
  border: 1px solid transparent;
  background-color: #17627a;
  color: white;

}

.all_categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.category_content {
  width: 250px;
  height: 250px;
  padding: 20px;
  border-radius: 9px;
  border: 2px solid transparent;
  background-color: rgb(86, 186, 86);
  color: white;
}

.category_title h2 {
  padding: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}

.image img {
  width: 100px;
  height: 100px;
  background-color: white;
  padding: 20px;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  left: 20%;
}

.page-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #17627a;
  padding: 10px 0;
  z-index: -1;
}
</style>
