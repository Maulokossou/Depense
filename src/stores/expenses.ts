import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { ref } from "vue";
type Expense = {
  id_expense?: number;
  date: string;
  cost: number;
  libelle: string;
  id_user: number;
  id_category: number;
};
export const useExpenseStore = defineStore("ExpenseData", () => {
  const expenses = ref<Expense[]>([]);

  async function initialiseExpense() {
    const { data, error } = await supabase.from("expenses").select("*");
    if (data) {
      expenses.value = data;
      console.log(data);
    }
  }

  async function getExpensesByDateAndCategory(selectedDate, selectedCategory) {

    if (selectedCategory && selectedDate) {
      console.log('search both');
      const { data, error } = await supabase.from('expenses')
        .select('*')
        .eq('date', selectedDate)
        .eq('id_category', selectedCategory);
      if (error) {
        console.error(error);
      } else {
        expenses.value = data
      }
    } else if (selectedDate && selectedCategory == undefined) {
      console.log('search date only');
      const { data, error } = await supabase.from('expenses')
        .select('*')
        .eq('date', selectedDate);
      if (error) {
        console.error(error);
      } else {
        expenses.value = data
      }
    } else if (selectedDate == null && selectedCategory) {
      console.log('search category only');
      const { data, error } = await supabase.from('expenses')
        .select('*')
        .eq('id_category', selectedCategory);
      if (error) {
        console.error(error);
      } else {
        expenses.value = data
      }
    }


  }
  async function addExpense(ExpenseData: Expense) {
    try {
      const { data, error } = await supabase.from("expenses").insert(ExpenseData).single();
      if (data) {
        expenses.value.push(data);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la catégorie :", error);
    }
  }

  return { expenses, initialiseExpense, addExpense, getExpensesByDateAndCategory };
});
