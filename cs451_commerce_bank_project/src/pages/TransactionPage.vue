<template>
  <div id="content-wrapper">
    <AppBar/>
    <NavBar />
    <div id="page-content">
      <VueJsonToCsv
        :json-data="this.data.transactions"
        :csv-title="'transactions_export'"
      >
        <button type="button" id="csv-btn" class="btn btn-primary btn-pretty">
          Export CSV
        </button>
      </VueJsonToCsv>
      <button type="button" id="new-rule-btn" class="btn btn-primary">
        <router-link to="/transactions/new" class="nav-link">
          Add Transaction
        </router-link>
      </button>
      <br /><br /><br /><br /><!-- TODO: remove this hack -->
      <div id="transaction-page">
        <v-card class="mb-1">
          <v-card-title>
            Transactions
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
            :items="data.transactions"
            :items-per-page="5"
            :search="search"
            loading
            loading-text="Loading... Please wait"
          ></v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppBar from "../layouts/AppBar.vue";
import NavBar from "../components/NavBar.vue";
import store from "../store.js";
import VueJsonToCsv from "vue-json-to-csv";

export default {
  name: "TransactionPage",

  data() {
    return {
      search: '',
      headers: [
        {
          text: "Accound ID",
          align: "start",
          sortable: false,
          value: "userAccountId",
        },
        { text: "Type", value: "type" },
        { text: "Amount", value: "amount" },
        { text: "Location", value: "location" },
        { text: "Balance", value: "balance" },
        { text: "Processing Date", value: "processingDate" },
      ],
      data: {
        transactions: [{}],
      },
    };
  },

  async mounted() {
    const response = await fetch(
      `https://localhost:3000/transaction?accountId=${store.accountId}`
    );
    this.data.transactions = await response.json();
  },

  components: {
    NavBar,
    AppBar,
    VueJsonToCsv,
  },
};
</script>

<style scoped>
#new-rule-btn a,
#csv-btn a {
  color: #fff;
}
h2 {
  padding-top: 15px;
}

#new-rule-btn,
#csv-btn {
  appearance: none;
  backface-visibility: hidden;
  background-color: #006747;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  float: right;
  font-size: 1em;
  font-weight: 500;
  height: 40px;
  width: 125px;
  letter-spacing: normal;
  line-height: 1em;
  margin-top: 1em;
  margin-bottom: 1.5em;
  margin-right: 1.5em;
  outline: none;
  overflow: hidden;
  text-align: justify;
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
