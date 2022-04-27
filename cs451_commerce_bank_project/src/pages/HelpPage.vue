<template>
  <div id="content-wrapper">
    <AppBar />
    <NavBar />
    <div id="page-content">Help</div>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HelpPage",
  components: {
    NavBar,
    AppBar,
  },
};
</script>
