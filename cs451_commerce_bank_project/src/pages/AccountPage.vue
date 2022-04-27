<template>
  <div id="content-wrapper">
    <AppBar />
    <NavBar />
    <div id="page-content">Me</div>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "AccountPage",
  components: {
    NavBar,
    AppBar,
  },
};
</script>
