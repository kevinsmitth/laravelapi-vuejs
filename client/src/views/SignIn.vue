<template>
    <b-container>
        <form @submit.prevent="submit" class="text-center">
            <div>
                <label for="email">Email</label>
                <b-input type="text" name="email" id="email" v-model="form.email"></b-input>
            </div>
            <div>
                <label for="password">Password</label>
                <b-input type="password" name="password" id="password" v-model="form.password"></b-input>
            </div>

            <div>
                <b-button id="submit" variant="success" type="submit">Sign In</b-button>
            </div>
        </form>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'signin',
  components: {
    //
  },

  data() {
      return {
          form: {
              email: '',
              password: '',
          }
      }
  },

  methods: {
      ...mapActions({
          signIn: 'auth/signIn'
      }),

      submit() {
          this.signIn(this.form).then(() => {
              this.$router.replace({
                  name: 'dashboard'
              })
          }).catch(() => {
              console.log('failed');
          })
      }
  }
}
</script>

<style scoped="">
form{
    width: 300px;
    background-color: #ddd;
    padding: 10px;
    margin: 0 auto;
}
label{
    margin: 10px;
}
#submit{
    margin-top: 10px;
}
</style>
