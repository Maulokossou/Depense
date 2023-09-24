<template>
0
      <RouterLink to="/Depenses">
        <div class="category_item_content">
          <!-- <div class="category_content"> -->
            <div class="category_content_image">
              <img :src="categorie.image"/>
            </div>
         <!--  </div> -->
          <div class="category_title">
            <h2>{{ categorie.name }}</h2>
          </div>
        </div>
      </RouterLink>
   
    
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const props = defineProps({categorie:
    {type: Object ,required : true}}) 
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}                                                         

</style>
