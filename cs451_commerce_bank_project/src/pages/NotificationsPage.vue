<template>
  <div id="content-wrapper">
    <AppBar />
    <NavBar />
    <div id="page-content">Notify</div>
  </div>
</template>

<script>
import AppBar from "../layouts/AppBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "NotificationsPage",
  components: {
    NavBar,
    AppBar,
  },
};
</script>
