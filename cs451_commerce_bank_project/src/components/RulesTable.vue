<template>
  <div>
    <b-table striped hover :items="getTableData"></b-table>
  </div>
</template>

<script>
/* eslint-disable */
import store from "../store.js";

export default {
  data() {
    return {
      userId: '',
    };
  },

  methods: {
    async getTableData() {
      const fallback = [
        { no_rules_found: "Sorry, no rules were found for your account." },
      ];

      this.userId = store.userId ?? -1;
      const response = await fetch(
        `https://localhost:3000/rules/${this.userId}`
      );
      
      const data = await response.json();
      data.forEach(item => {
        item.startTime = new Date(item.startTime).toLocaleString('en-US');
        item.endTime = new Date(item.endTime).toLocaleString('en-US');
        delete item.userId;
      });

      return data.length ? data : fallback;
    },
  },
};
</script>
