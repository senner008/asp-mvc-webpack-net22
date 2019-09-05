<template>
    <div>

        <ul class="navbar-nav">
            <div v-if="isSignedin">
                <li class="nav-item">
                    <a class="nav-link text-dark" asp-area="Identity" href="/Identity/Account/Manage/Index"
                        title="Manage">Hello
                        {{userName}}</a>
                </li>
                <form slot="return-url" class="form-inline">
                    <button type="submit" @click.prevent="logout"
                        class="nav-link btn btn-link text-dark">Logout</button>
                </form>
            </div>
            <div v-else>
                <li class="nav-item">
                    <a class="nav-link text-dark" asp-area="Identity" href="/Identity/Account/Register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" asp-area="Identity" href="/Identity/Account/Login">Login</a>
                </li>
            </div>
        </ul>
    </div>

</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator';

    @Component
    export default class HeaderLogin extends Vue {
        @Prop({type: Boolean}) private isSignedin!: boolean;
        @Prop({type: String}) private userName!: string;

        logout() {
            $.ajax({
                type: 'post',
                url: '/Account/Logout',
            })
            .done(function (data) {
                window.location.href = "https://localhost:5001/";
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .welcome {
        color: red;
    }
</style>