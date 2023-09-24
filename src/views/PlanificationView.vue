<template>
  <header><Navbar></Navbar></header>
  <main>
    <div class="wrapper">
      <p>
        Cliquez ici pour ajouter un nouveau budjet par catégorie
        <button @click="is_opened = true">Ajouter un budjet</button>
      </p>
    </div>
    <div
      class="overlay"
      :class="{
        open: is_opened === true,
        close: is_opened === false,
      }"
    >
      <div class="modal">
        <div class="modal_content">
          <div class="modal_header">
            <h2>Ajouter un budget</h2>
            <button @click="is_opened = false" class="modal_close">X</button>
          </div>
          <div class="modal_body">
            <div class="modal_item">
              <label for="name"> Sélectionnez une Catégorie</label>
              <div class="input_name">
                <select name="id_categorie" v-model="selectedCategory" required>
                  <option
                    v-for="category in categories_users"
                    :key="category.id_categorie"
                    :value="category.id_categorie"
                    required
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="modal_item">
              <label for="name">BUDGET</label>
              <div class="input_name">
                <input
                  type="number"
                  id=""
                  pattern="(?=.*?[0-9])"
                  class=""
                  v-model="newBudget"
                  required
                  min="1"
                />
              </div>
            </div>
            <div class="button">
              <button type="submit" class="record" @click="addBudget">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Budget de départ</th>
            <th>Nouveau budjet</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for="category in categories_users" :key="category.id_categorie" -->
          <tr
            v-for="categorie in categories_users"
            :key="categorie.id_categorie"
          >
            <td>{{ categorie.name }}</td>
            <td>
              {{ categorie.budget }}
            </td>
            <td>
              {{ newBudgets[categories_users.indexOf(categorie)] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <footer><Pagefooter></Pagefooter></footer>
</template>
<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import Pagefooter from "@/components/Pagefooter.vue";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import image9 from "@/assets/images/user.jpg";
import { useCategorieStore } from "@/stores/categories_users";
import { supabase } from "@/lib/supabase";
import { count } from "console";
const { initialise, fetchExpensesForCategory } = useCategorieStore();
const { categories_users } = storeToRefs(useCategorieStore());
const selectedCategory = ref("");
const newBudget = ref(0);

const categorieData = ref({
  name: "",
  image: image9,
  budget: 0,
  id_user: 1,
});

const is_opened = ref();
async function addBudget() {
  try {
    const { data, error } = await supabase.from("categories_users").upsert([
      {
        id_categorie: selectedCategory.value,
        budget: newBudget.value,
      },
    ]);
    if (error) {
      console.error("Erreur lors de la mise à jour du budget :", error);
    } else {
      console.log("Budget mis à jour avec succès !", data);
      await initialise();
    }
    await supabase.from("expenses").select("*").eq("category_id", categoryId);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}
// ...

const newBudgets = ref([0]);

// ...

async function calculateNewBudget(categoryId) {
  const { data, error } = await supabase
    .from("expenses")
    .select("cost")
    .eq("id_category", categoryId);

  if (error) {
    console.error("Erreur lors de la récupération des dépenses :", error);
    return 0; 
  }

  let totalExpenses = 0;

  if (data.length > 0) {
  
    totalExpenses = data.reduce(
      (accumulator, expense) => accumulator + expense.cost,
      0
    );
  } else {
   
    totalExpenses = data[0]?.cost || 0;
  }

  console.log("Total des dépenses par catégorie :", totalExpenses);

  const category = categories_users.value.find(
    (categorie) => categorie.id_categorie === categoryId
  );

  if (category) {
    const newBudget = category.budget - totalExpenses;
    newBudgets.value.push(newBudget); 
  }
}

onMounted(async () => {
  await initialise();
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400px;
  position: relative;
}
p {
  font-size: 24px;
  font-weight: 400px;
  padding: 50px;
  text-align: center;
}
.table {
  display: flex;
  justify-content: center;
}
table {
  width: 700px;
  padding: 20px;
}
thead tr {
  background-color: #17627a;
  border-bottom: 1px solid white;
  height: 60px;
}
tbody {
  background-color: rgba(180, 180, 222, 0.544);
}
th {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
td {
  text-align: center;
  border-bottom: 1px solid #17627a;
  padding: 15px;
  color: #17627a;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333333d3;
  z-index: 100;
  display: none;
}

.open {
  display: block;
}

.close {
  display: none;
}
.close {
  display: none;
}
.modal {
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 30%;
  height: 30%;
  z-index: 100;
}
.modal_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.modal_item input,
.modal_item select {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 9px;
  border: 1px solid rgb(140, 126, 126);
  margin: 20px 0;
}
.modal_close {
  background-color: #17627a;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: white;
  border: none;
  position: absolute;
  right: 60px;
}

.button {
  display: flex;
  justify-content: center;
}
button.record {
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 9px;
  border: 1px solid transparent;
  background-color: #17627a;
  color: white;
  position: absolute;
}
</style>
