<template>
  <section class="banner">
    <div class="container">
      <div class="banner_content">
        <div class="content_item">
          <div class="banner_content_left">
           <div class="banner_title">
            <h1> sit amet consectetur </h1>
            <h3>ncaecati accusamus tempora vero ab? adipisicing elit. </h3>
           </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor molestiae cumque ad, beatae dolores nemo voluptates
              perumquam, obferendis perspiciatis aperiam, repudiandae nihil nisi quasi
              ncaecati accusamus tempora vero ab? Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Incidunt porro soluta culpa
              necessitatibus veritatis, est consequatur quibusdam fugiat quae
              rerum, eum quidem officia magni suscipit vero error autem quis
              amet?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti unde, porro expedita error iste corrupti natus! Corrupti
              doloribus voluptatum natus deserunt molestias provident facere,
              nam dicta dolorem. 
            </p>
          </div>
          <div class="banner_content_left">
            <img src="@/assets/images/banner.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style scoped>
.container {
  max-width: 1040px;
  margin: auto;
}
section {
  padding: 20px;
  background-color: white;

}
.banner_content {
  overflow-x: hidden;
}
.banner_content_left img {
  width: 500px;
  height: 500px;
  background-color: white;
}
.content_item {
  display: flex;
  justify-content: center;
  gap: 100px;
}
.banner_content_left {
  margin-top: 30px;
  
 
}
.banner_content_left p{
  font-size: 20px;
  padding-top: 20px;
}
.banner_title h1{
  font-size: 20px;
  font-weight: 500px;
  padding-top: 70px;
}
.banner_title h3{
  font-size: 20px;
  font-weight: 300px;
  padding-top: 20px;
}
.banner_content_left h2 {
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  color: green;
}
.banner_content_right {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
.image img {
  width: 700px;
  height: 500px;
  border-radius: 50%;
  margin: -30px;
}
</style>
