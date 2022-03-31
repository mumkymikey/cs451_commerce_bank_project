<template>
  <div id="app">
    <NavBar />
    <RulesTable />
  </div>
  <!-- #notification-rules-page -->
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RulesTable from "../components/RulesTable.vue";

export default {
  name: "NotificationRulesPage",
  components: {
    NavBar,
    RulesTable,
  },
};
</script>