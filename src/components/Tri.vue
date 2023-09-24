<template>
<!--   <section>
    <div class="container">
      <div class="Filter_content">
        <div class="item">
          <div class="title">
            <h1>Consulter l'historique de vos dépenses</h1>
          </div>
          <div class="all_button">
            <button type="submit" @click="filterByDay">Jour</button>
            <button type="submit" @click="filterByWeek">Semaine</button>
            <button type="submit" @click="filterByMonth">Mois</button>
          </div>
          <div class="choice">
            <ul>
              <li v-for="expense in filterExpenses" :key="expense.id">
       nses)
    router.replace('/depenses')
}         {{ expense.date }} {{ expense.amount }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script lang="ts" setup>
/* import { ref, onMounted } from "vue";
import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import { useExpenseStore } from "@/stores/expenses";

const expense = ref({
  date: "",
  amount: "",
});
const expenses = ref([{}]);
const props = defineProps(["expense"]);
const filterExpenses = ref([{}]);
const tri = async () => {
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .order("date", { ascending: false });
  if (error) {
    console.log(error);
  } else {
    expenses.value = data;
    filterExpenses.value = data;
  }
};
const filterByDay = () => {
  const today = new Date();
  filterExpenses.value = expenses.value.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getDate() === today.getDate();
  });
};
const filterByWeek = () => {
  const today = new Date();
  const week = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );
  const weekEnd = new Date(
    today.getFullYear(),
    today.getMonth(),
    week.getDate() + 6
  );
  filterExpenses.value = expenses.value.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= week && expenseDate <= weekEnd;
  });
};
const filterByMonth = () => {
  const today = new Date();
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getMonth() + 1, 0);
  filterExpenses.value = expenses.value.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= monthStart && expenseDate <= monthEnd;
  });
};
onMounted(() => {
  tri();
}); */
</script>
<!-- <style scoped>
.all_button {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
}
button {
  padding: 10px 15px;
  background-color: rgba(53, 53, 136, 0.915);
  border-radius: 9px;
  border: 1px solid transparent;
  color: white;
}
h1 {
  font-size: 20px;
  font-weight: 500px;
  text-transform: capitalize;
  padding: 10px 0;
}
* {
  margin: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1040px;
  margin: 0 auto;
}
.Filter_content {
  display: flex;
  justify-content: center;
} -->
<!--  </style> -->
