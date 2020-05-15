<template>
    <div class="container">
        <header-template></header-template>
        <hr>
        <div class="row">
					<server-component></server-component>
					<server-deets-component></server-deets-component>
        </div>
        <hr>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from './Header/Header.vue'
    import Footer from './Footer/Footer.vue'
    import Server from './Server/Server.vue'
    import ServerDeets from './ServerDeets/ServerDeets.vue'

    export default {
        components: {
            'header-template': Header,
					  'footer-component': Footer,
            'server-component': Server,
            'server-deets-component': ServerDeets,
        }
    }
</script>

<style>

</style>
