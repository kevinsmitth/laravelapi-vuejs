<template>
    <b-container>
        <div>
        <h1>Chat</h1>
        <p class="username">Username: {{username}}</p>
       
        </div>
    </b-container>
</template>

<script>
//import io from 'socket.io-client'

export default {
  name: 'chat',
  components: {
      
  },
/*
  data() {
      return {
          form: {
              email: '',
              password: '',
              socket: io("http://127.0.0.1:8000/api")
          }
      }
  },
 */ 
}
</script>

<style scoped="">

</style>
