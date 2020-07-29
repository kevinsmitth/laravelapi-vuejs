<template>
    <b-container>
        <ul>
            <li>
                <router-link :to="{name:'home'}">Home</router-link>
            </li>   
            <template v-if="authenticated">
                <li>
                    {{user.name}}
                </li>
                <li>
                    <router-link :to="{name:'dashboard'}">Dashboard</router-link>
                </li>

                <li>
                    <a href="#" @click.prevent="signOut">Sign Out</a>
                </li>
                <li>
                    <router-link :to="{name:'chat'}">Chat</router-link>
                </li>
            </template>
            <template v-else>
                <li>
                    <router-link :to="{name:'signin'}">Sign In</router-link>
                </li>
            </template>
        </ul>
    </b-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user',
            })
        },
        methods: {
            ...mapActions({
                signOutAction: 'auth/signOut'
            }),

            signOut () {
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'home'
                    })
                })
            }
        },
            
    }
</script>

<style>
li{
    list-style-type: none;
    display: inline-flex;
    margin: 10px;
}

a{
    color: green !important;
    text-decoration: none !important;
}
a:hover{
    color: rgb(6, 219, 6) !important;
}

</style>