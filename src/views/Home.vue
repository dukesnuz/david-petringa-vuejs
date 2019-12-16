<template>
  <div class="home">
    <img alt="mountains with green trees" src="http://dukesnuz.com/images/926.jpg" />
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
  margin-bottom: 25px;
}
</style>
