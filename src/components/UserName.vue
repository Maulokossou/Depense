<template>
   
        <span class="userEmail">{{userName }}</span>
    
</template>
<script lang="ts" setup>
import {supabase} from "@/lib/supabase";
import {ref} from 'vue';
const userName = ref();
async function getEmail(){
    const user = await supabase.auth.getUser();
    if(user){
        userName.value = user.data.user?.email?.split("@")[0];
        console.log(userName);
    }
}
getEmail()
</script>
<style scoped>
 .userEmail{
  color: #fff;
  font-size: 48px;
  font-weight: bold ;
  margin-bottom: 30px;
  margin-top: 50px;
  text-transform: capitalize;
}
</style>