<template>
  <div id="transaction-page">
    <VueJsonToCsv :json-data="this.rules" :csv-title="'rules_export'">
      <button type="button" id="csv-btn" class="btn btn-primary btn-pretty">
        Export CSV
      </button>
    </VueJsonToCsv>
    <button type="button" id="new-rule-btn" class="btn btn-primary">
      <router-link to="/notification-rules/new" class="nav-link">
        New Rule
      </router-link>
    </button>
    <br /><br /><br /><br /><!-- TODO: remove this hack -->
    <v-card class="mb-1">
      <v-card-title>
        Notification Rules
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="rules"
        :items-per-page="10"
        :search="search"
        loading
        loading-text="Loading... Please wait"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
import store from "../store.js";
import VueJsonToCsv from "vue-json-to-csv";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Rule Name",
          align: "start",
          value: "name",
        },
        { text: "Rule Type", value: "type" },
        { text: "Count Triggered", value: "countTriggered" },
      ],
      rules: [{}],
    };
  },
  components: {
    VueJsonToCsv,
  },
  async mounted() {
    // TODO: handle network errors (e.g. 500) .. axios?
    const response = await fetch(
      `https://localhost:3000/rules/${store.userId}`
    );
    this.rules = response.status == 200 ? await response.json() : null;
  },
};
</script>

<style scoped>
/* TODO: move this to a css file. */
h2 {
  padding-top: 15px;
}
#new-rule-btn a,
#csv-btn a {
  color: #fff;
}
#new-rule-btn,
#csv-btn {
  appearance: none;
  backface-visibility: hidden;
  background-color: #006747;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  float: right;
  font-size: 1em;
  font-weight: 500;
  height: 40px;
  width: 100px;
  letter-spacing: normal;
  line-height: 1.5;
  margin-top: 1em;
  margin-bottom: 1.5em;
  margin-right: 1.5em;
  outline: none;
  overflow: hidden;
  right: 15px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}
</style>
