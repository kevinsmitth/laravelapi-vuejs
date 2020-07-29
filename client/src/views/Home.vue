<template>
  <b-container>
    <div class="text-center" style="color: rgb(6, 219, 6);"> 
      <h1>Olá, Seja Muito Bem Vindo(a)! </h1>
    </div>
    <div class="text-center">
      <b-row class="my-5">
          <b-col><div class="zoom"><img class="img-fluid" src="/green-photo.jpg" alt="Foto Verde"></div></b-col>
          <b-col><div class="zoom"><img class="img-fluid" src="/clear-glass.jpg" alt="Foto Verde"></div></b-col>
          <b-col><div class="zoom"><img class="img-fluid" src="/bee-on.jpg" alt="Foto Verde"></div></b-col>
      </b-row>
      <b-row class="my-5">
          <b-col><div class="zoom"><img class="img-fluid" src="/man-standing.jpg" alt="Foto Verde"></div></b-col>
          <b-col><div class="zoom"><img class="img-fluid" src="/man-sitting.jpg" alt="Foto Verde"></div></b-col>
          <b-col><div class="zoom"><img class="img-fluid" src="/woman-wearing.jpg" alt="Foto Verde"></div></b-col>
      </b-row>
      <b-row class="my-5">
          <b-col><div class="zoom"><img class="img-fluid" src="/two-women.jpg" alt="Foto Verde"></div></b-col>
          <b-col><div class="zoom"><img class="img-fluid" src="/women-in-white.jpg" alt=""></div></b-col>
          <b-col><div class="zoom"><img class="img-fluid" src="/photo-of-two-girls.jpg" alt="Foto Verde"></div></b-col>
      </b-row>
    </div>
  </b-container>  
</template>

<script>
export default {
  name: 'home',
  components: {
    //
  }
}
</script>

<style scoped="">
  .zoom {
	overflow: hidden !important;
  }

  .zoom img {
    max-width: 100% !important;
    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
  }

  .zoom:hover img {
    -moz-transform: scale(1.1) !important;
    -webkit-transform: scale(1.1) !important;
    transform: scale(1.1) !important;
  }

</style>