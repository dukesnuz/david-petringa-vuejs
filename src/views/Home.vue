<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from "@/components/MainContent.vue";

export default {
  name: "home",
  components: {
    MainContent
  }
};
</script>

<style scoped>
.home {
   margin-bottom: 500px;
}
</style>
