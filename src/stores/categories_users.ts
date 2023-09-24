import {defineStore} from "pinia"
import {supabase} from '@/lib/supabase'
import {ref} from 'vue'

type category ={
  id_categorie?: number
  name: string,
  image:string,
  budget:number,
  id_user:number,
}
 export const useCategorieStore = defineStore("categorieData", () => {
    const categories_users = ref<category[]>([]);
    async function initialise() {
      const { data, error } = await supabase
        .from("categories_users")
        .select("*");
      if (data) {
        categories_users.value = data;
        console.log(data);
      }
    }
    async function addCategory(categorieData: category) {
      try {
        const { data, error } = await supabase.from("categories_users").insert(categorieData).single();
        if (data) {
          categories_users.value.push(data);
        }
      } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie :", error);
      }
    }
    async function fetchExpensesForCategory(categoryId) {
      try {
        const { data, error } = await supabase
          .from("expenses")
          .select("*")
          .eq("id_category", categoryId);
    
        if (error) {
          console.error("Erreur lors de la récupération des dépenses :", error);
          return [];
        }
    
        return data || [];
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        return [];
      }
    }
   
    return { categories_users,addCategory, initialise, fetchExpensesForCategory};
  })
    