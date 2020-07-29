<template>
    <div id="app">
        <Header />
        <TheNavigation />
        <router-view/>
        <Footer />
    </div>
</template>

<script>
    import TheNavigation from '@/components/TheNavigation'
    import Footer from '@/components/Footer'

    export default {
        components: {
            TheNavigation,
            Footer
        }
    }
</script>

<style scoped="">
    #app{
        background: black;
        color: white;
        }

</style>