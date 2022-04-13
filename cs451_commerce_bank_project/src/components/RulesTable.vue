<template>
  <div id="rules-table-wrapper">
    
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Rule Name</th>
            <th scope="col">Rule Type</th>
            <th scope="col">Times Triggered</th>
          </tr>
        </thead>
        <tbody v-if="this.rules.length > 0">
          <tr v-for="rule in rules" v-bind:key="rule.name">
            <td>{{rule.name}}</td>
            <td>{{rule.type}}</td>
            <td>{{rule.countTriggered}}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <h2>Sorry, no rules found.</h2>
        </tbody>
      </table>
  </div>
</template>

<script>
/* eslint-disable */  
import store from "../store.js"

export default {
  data() {
    return {
      rules: [],
    };
  },

  async mounted() {
      // TODO: handle network errors (e.g. 500) .. axios?
      const default_user = 3;
      const response = await fetch(`https://localhost:3000/rules/${store.userId ?? default_user}`);
      this.rules = (response.status == 200? await response.json() : null);
    },
};
</script>
