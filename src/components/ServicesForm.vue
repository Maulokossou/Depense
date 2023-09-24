<template>
  <section class="form">
    <div class="container">
      <div class="form_content">
        <form action="">
          <div class="form_content_title">
            <h6>Pour nous contactez</h6>
          </div>
          <div class="form_content_form_item">
            <label for="name">Nom et prénoms</label>
            <input type="text" name="name" id="" placeholder="Nom et prénoms" />
          </div>
          <div class="form_content_form_item">
            <label for="E-mail">E-mail</label>
            <input type="email" name="email" id="" placeholder="E-mail" />
          </div>
          <div class="form_content_form_item">
            <label for="">Objet</label>
            <input type="text" name="objet" id="" placeholder="Objet" />
          </div>
          <div class="form_content_form_item">
            <label for="name">Message</label>
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="form_content_submit">
            <a href="#">Envoyez</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style >
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
}

.form_content_form_item {
  display: flex;
  flex-direction: column;
  margin: 2px auto;
  padding: 20px;
  color: #17627a;
}
h6 {
  font-size: 24px;
}
.form_content_title h6 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  padding-top: 15px;
  color: #17627a;
}
form {
  padding-top: 10px;
  border-radius: 9px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px rgba(46, 44, 44, 0.39);
  max-width: 500px;
  margin: 10px auto;
  margin-bottom: 50px;
  grid-template-columns: (1,1fr);
}
.form_content_form_item label {
  font-size: 15px;
  font-weight: 500px;
  margin-bottom: 9px;
}
.form_content_form_item input {
  border-radius: 35px;
  border: 2px solid #17627a;
  padding: 10px;
  margin-bottom: 5px;
}
.form_content_form_item textarea {
  border-radius: 35px;
  border: 2px solid #17627a;
  padding: 10px;
  margin-bottom: 20px;
}
.form_content_submit a {
  font-size: 18px;
  font-weight: 600px;
  text-decoration: none;
  color: #000;
  text-align: center;
  padding: 10px 50px;
  background-color: #17627a;
  border-radius: 35px;
  color: white;
}
.form_content_submit {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

}
.form_content {
  margin: 10px;
}
</style>
