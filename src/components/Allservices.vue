<template>
    <section id="Section">
          <div class="container">
            <div class="service_content">
              <div class="service_content_title">
                <h2>Nous proposons:</h2>
              </div>
              <div class="service_content_paragraph">
                <p></p>
              </div>
              <div class="services__content__box">
                <div class="service_content_service_detail">
                  <div
                    class="service_content_service_detail_item"
                    v-for="element in tab"
                  >
                   <div class="service_first_part_content">
                    <div class="service_content_detail_image">
                      <img src="@/assets/images/service1.png" alt="" />
                    </div>
                    <h3>{{ element.title }}</h3>
                    <p>
                      {{ element.paragraph }}
                    </p>
                   </div>
                    <div class="service_content_service_button_first">
                      <div class="service_content_service_button">
                        <a href="#"> Découvrir </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="more_information">
                <a href="#">Découvrir</a>
              </div>
            </div>
          </div>
        </section>
</template>
<script lang="ts" setup>
import {tab} from "@/api/tabdatabase";
</script>
<style scoped>
.services__content__box {
  display: flex;
  justify-content: center;
}

.service_content_service_detail {
  display: flex;
  gap: 40px;
}

.service_content_title h2 {
  font-size: 32px;
  font-weight: 700px;
  text-align: center;
  margin-bottom: 38px;
  color:  #17627a;
}
.service_content_paragraph p {
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  margin-top: 43px;
}
.service_content_service_detail_item img {
  width: 64px;
  height: 64px;
}
.service_first_part_content{
    width: 100%;
    height: 200px;
}
.service_content_detail_image {
  text-align: center;
}
.service_content_service_detail_item h3 {
  font-size: 24px;
  font-weight: 600px;
  margin-bottom: 14px;
  text-align: center;
}
.service_content_service_detail_item p {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 27px;
}

.service_content_service_detail_item {
  display: block;
  width: 241px;
  border-radius: 6px;
  padding: 20px 10px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  padding-bottom: 26.5px;
  margin-top: 67px;
  
}
.service_content_service_button{
    margin-top: 30px;
}
.service_content_service_button a {
  background-color: #17627a;
  border-radius: 35px;
  width: 194px;
  height: 47px;
  text-decoration: none;
  color: white;
  padding: 10px 50px;
  margin-left: 25.5px;
 
}

.service_content {
  margin-top: 38px;
}
.more_information a {
  background-color: #17627a;
  border-radius: 35px;
  text-decoration: none;
  color: white;
  padding: 10px 50px;
 

  
}
.more_information {
  margin: 67px;
  text-align: center;
}
</style>