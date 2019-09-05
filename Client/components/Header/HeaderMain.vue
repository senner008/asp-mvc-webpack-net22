<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container"><a class="navbar-brand" asp-area="" asp-page="/Index">asp_mvc_webpack</a><button
                    class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">

                    <slot name="partial-login"></slot>

                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item"><a class="nav-link text-dark" asp-area="" href="/Index">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-dark" asp-area="" href="/Privacy">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script lang="ts">

import {Component, Prop, Vue} from 'vue-property-decorator';


@Component
export default class HeaderMain extends Vue {

}

</script>
< !-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="less">
        .welcome {
            color: red;
        }
    </style>