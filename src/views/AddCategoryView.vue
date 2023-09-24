<template>
  <body>
    <header><Navbar></Navbar></header>
    <main>
      <div class="wrapper">
        <section class="categories">
          <div class="container">
            <div class="categorie_wrapper">
              <div class="categorie_content">
                <div class="title">
                  <h2>Mes catégories</h2>
                </div>
                <div class="add_category">
                  <h3>Cliquez ici pour ajouter une catégorie</h3>
                  <button @click="is_open = true">+</button>
                </div>
                <div class="all_categories">
                  <div
                    class="all_categories_content"
                    v-for="categorieData in categories_users"
                    :key="categorieData.id_categorie"
                  >
                    <!--  <Category
                      v-for="element in categories_users"
                      :categorie = "element"/> -->

                    <div class="trash">
                      <DeleteIcon
                        @click="deleteCategory(categorieData)"
                      ></DeleteIcon>
                    </div>
                    <div class="modify">
                      <ModifyIcon
                        @click="
                          is_opened = true;
                          newCategoryName = categorieData.name;
                        
                        "
                      ></ModifyIcon>
                    </div>
                    <div class="category_item_content">
                      <!-- <div class="category_content"> -->
                      <div class="category_content_image">
                        <img :src="categorieData.image" />
                      </div>
                      <!--  </div> -->
                      <div class="category_title">
                        <h2>{{ categorieData.name }}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="overlay"
                  :class="{ open: is_open === true, close: is_open === false }"
                >
                  <div class="modal">
                    <div class="modal_content">
                      <div class="modal_header">
                        <h2>Ajouter une catégorie</h2>
                        <button @click="is_open = false" class="modal_close">
                          X
                        </button>
                      </div>
                      <div class="modal_body">
                        <div class="modal_item">
                          <label for="name">Nom</label>
                          <div class="input_name">
                            <input
                              type="text"
                              id=""
                              pattern="(?=.*?[A-Z])(?=.*?[a-z])"
                              class=""
                              v-model="categorieData.name"
                              required
                            />
                          </div>
                        </div>
                        <div class="button">
                          <button
                            type="submit"
                            class="record"
                            @click="createCategory"
                          >
                            Enregistrer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <h2>Ajouter une catégorie</h2>
                        <button @click="is_opened = false" class="modal_close">
                          X
                        </button>
                      </div>
                      <div class="modal_body">
                        <div class="modal_item">
                          <label for="name">Nom</label>
                          <div class="input_name">
                            <input
                              type="text"
                              id=""
                              pattern="(?=.*?[A-Z])(?=.*?[a-z])"
                              class=""
                              v-model="newCategoryName"
                               required
                            />
                          </div>
                        </div>
                        <div class="button">
                          <button
                            type="submit"
                            class="record"
                            @click="modifyCategory(categorieData)"
                          >
                            Enregistrer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer class="page-footer"><Pagefooter></Pagefooter></footer>
  </body>
</template>
<script lang="ts" setup>
import { onMounted, ref,computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Pagefooter from "@/components/Pagefooter.vue";
import Banner from "@/components/Banner.vue";
import { RouterView } from "vue-router";
import Category from "@/components/Category.vue";
import { storeToRefs } from "pinia";
import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import router from "@/router";
import { useCategorieStore } from "@/stores/categories_users";
import image9 from "@/assets/images/user.jpg";
import DeleteIcon from "@/components/DeleteIcon.vue";
import ModifyIcon from "@/components/ModifyIcon.vue";
const { addCategory, initialise} = useCategorieStore();
const { categories_users } = storeToRefs(useCategorieStore());
const is_open = ref();
const is_opened = ref();
const userName = ref();
async function getEmail(){
    const user = await supabase.auth.getUser();
    if(user){
        userName.value = user.data.user?.email;
        console.log("non",userName);
    }
}
getEmail()
const categorieData = ref({
  name: "",
  image: image9,
  budget: 0,
  id_user:1,
});
const userId =ref();

const createCategory = async () => {
  await addCategory(categorieData.value);
  console.log(categories_users);
  router.replace("/addcategory");
};
onMounted(async () => {
  const filteredCategories = computed(() => {
  return categories_users.value.filter(category => category.id_user === userName.value);
});
  await initialise();
});
async function deleteCategory(categorieData: category) {
  const { error } = await supabase
    .from("categories_users")
    .delete()
    .eq("id_categorie", categorieData.id_categorie);
  await initialise();
}
const newCategoryName = ref("Boire");

async function modifyCategory(categorieData) {
  try {

    if (categorieData && categorieData.id_categorie && newCategoryName.value) {

    
    console.log("categorieData:", categorieData);
    console.log("newCategoryName:", newCategoryName.value);
      const { data, error } = await supabase.from("categories_users").upsert([
        {
          id_categorie: categorieData.id_categorie,
          name: newCategoryName.value,
          
        },
       
      ]);
      if (error) {
        console.error("Erreur lors de la mise à jour de la catégorie :", error);
      } else {
        console.log("Catégorie mise à jour avec succès !", data);
      }
      await initialise();
    } else {
      console.error("Les données de la catégorie sont incorrectes.");
    }
  } catch (error) {
    console.error("Une erreur s'est produite :", error);

  }
}


</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}
header {
  overflow-x: hidden;
}

.container {
  margin: auto;
  max-width: 1080px;
}
.categories {
  background-color: #17627a;
  opacity: 10px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.categorie_wrapper {
  display: flex;
  justify-content: center;
}
.categorie_content {
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  padding-top: 50px;
}
.title h2 {
  color: white;
  font-weight: 700px;
  font-size: 24px;
}
.add_category {
  color: white;
  font-weight: 700px;
  font-size: 24px;
  text-align: center;
  padding-top: 30px;
}
.add_category button {
  padding: 10px 15px;
  color: #17627a;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  box-shadow: 0px 0px 3px white;
  margin-top: 20px;
}
.all_categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.category_item_content {
  width: 200px;
  height: 200px;
  border: 1px solid transparent;
  border-radius: 9px;
  padding: 10px;
  margin-bottom: 15px;
}
.category_content_image {
  width: 200px;
  height: 150px;
  border-radius: 9px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9px;
}
.category_title h2 {
  padding: 20px;
  text-align: center;
  color: white;
}
.trash {
  position: absolute;
  top: 100px;
  left: 160px;
  z-index: 2;
}
.modify {
  position: absolute;
  top: 100px;
  left: 29px;
  z-index: 2;
}
a {
  text-decoration: none;
  color: white;
  text-transform: capitalize;
  margin: 10px;
  padding: 5px;
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
.modal_item input {
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
.page-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #17627a;
  padding: 10px 0;
  z-index: -1;
}
</style>
