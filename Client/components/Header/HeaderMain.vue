<template>
    <header>
        <b-navbar toggleable="lg" type="light" variant="light" style="border-bottom: 1px solid lightgrey;">
            <div class="container">
                <b-navbar-brand href="/Index">asp_mvc_webpack</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="/Index" right>Home</b-nav-item>
                        <b-nav-item href="/Privacy">Privacy</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <slot name="partial-login"></slot>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </header>
</template>
<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator';
    import BootstrapVue from 'bootstrap-vue';
    Vue.use(BootstrapVue)

    @Component
    export default class HeaderMain extends Vue {

    }
</script>

<style scoped lang="less">

</style>