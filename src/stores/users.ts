
 import {defineStore} from "pinia"
import {supabase} from '@/lib/supabase'
import {ref} from 'vue'
type User ={
    id_user?: number
    email: string
    password: string
   
}


export const useUserStore = defineStore("user", () => {
    const users = ref<User[]>([]);
    
    async function initialise() {
      const { data, error } = await supabase
        .from("users")
        .select("id_user,email,password");
      if (data) {
        users.value = data;
        console.log(data);
        
      }
    }
    async function addUser(user: User){
        const {data,error} = await supabase.from("users").insert(user).select('*');
        if(data){
          users.value.push(data[0]);
        }
      }
    
      return { users, initialise,addUser };
      
      
    });
   
       