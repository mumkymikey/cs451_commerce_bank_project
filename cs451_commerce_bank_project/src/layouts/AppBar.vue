<template>
  <div style="text-align: right; margin: 1em">
    <router-link to="/notification-rules">
      <v-icon> mdi-view-dashboard </v-icon>
    </router-link>
    &nbsp; &nbsp; &nbsp;
    <router-link to="/notifications">
      <v-badge color="red" content="6">
        <v-icon> mdi-bell </v-icon>
      </v-badge>
    </router-link>
    &nbsp; &nbsp; &nbsp;
    <router-link to="/account">
      <v-icon> mdi-account </v-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
