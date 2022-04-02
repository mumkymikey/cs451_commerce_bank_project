<template>
  <div id="content-wrapper">
    <NavBar />
    <div id="page-content">
      <RulesTable />
    </div>
  </div>
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