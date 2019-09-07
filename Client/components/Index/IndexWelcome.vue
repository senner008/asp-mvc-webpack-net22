<template>
  <div class="welcome">
    <div class="text-center">
      <h1 class="display-4">Welcome {{user}}</h1>
      <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
      <button @click="pushRoute">Push Route</button>
      {{myvar}}
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';

  @Component
  export default class IndexWelcome extends Vue {
    @Prop() private user!: string;
    
    myvar : string = "hello there"

    pushRoute() {
      this.$router.push({ path: '/index/about' })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1 {
    color: blue;
  }
</style>