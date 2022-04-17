<template>
  <v-navigation-drawer permanent app clipped dark>
    <v-list>
      <v-list-item class="px-2">
        <v-img src="/cb-logo.png"></v-img>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
        @click="item.action"
        class="text-decoration-none"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template #append>
      <div class="pa-4 text-center">
        <v-icon left> mdi-facebook </v-icon>
        <v-icon left> mdi-twitter </v-icon>
        <v-icon left> mdi-linkedin </v-icon>
        <v-icon left> mdi-instagram </v-icon>
        <br /><br />
        <span style="color: lightgray">
          Copyright © 2022 Commerce Bancshares, Inc.
        </span>
        <br /><br />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
import store from "../store.js";

export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/notification-rules",
        },
        { title: "Transactions", icon: "mdi-receipt", route: "/transactions" },
        { title: "Notifications", icon: "mdi-bell" },
        { title: "Your Account", icon: "mdi-account" },
        { title: "FAQs and Help", icon: "mdi-help-box" },
        {
          title: "Logout",
          icon: "mdi-account-off-outline",
          action: this.onLogout,
        },
      ],
      right: null,
    };
  },
  methods: {
    onLogout() {
      store.userId = null;
      this.$router.push("/");
    },
  },
};
</script>
