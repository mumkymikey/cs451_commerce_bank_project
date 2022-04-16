<template>
  <div id="content-wrapper">
    <NavBar />
    <button @click="addTransaction">Add Transaction</button>
    <div id="page-content">
      <div id="transaction-page">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Account ID</th>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Location</th>
              <th scope="col">Balance</th>
              <th scope="col">Processing Date</th>
            </tr>
          </thead>
          <tbody v-if="this.data.transactions.length > 0">
            <tr v-for="item in this.data.transactions" v-bind:key="item">
              <td>{{item.userAccountId}}</td>
              <td>{{item.type}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.location}}</td>
              <td>{{item.balance}}</td>
              <td>{{item.processingDate}}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <h2>No Data Found</h2>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from "../components/NavBar.vue";
import store from '../store.js';

export default {
  name: "TransactionPage",

  data() {
    return {
      data: {
        transactions: []
      }
    }
  },

  async mounted() {
    const response = await fetch(`https://localhost:3000/transaction?accountId=${store.accountId}`);
    this.data.transactions = await response.json();
  },

  methods: {
    addTransaction() {
      this.$router.push('/transactions/new');
    }
  },

  components: {
    NavBar,
  }

};
</script>

<style scoped>
h2 {
  padding-top: 15px;
}

button {
    appearance: none;
    backface-visibility: hidden;
    background-color: #006747;
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    float: right;
    font-size: 1em;
    font-weight: 500;
    height: 40px;
    width: 100px;
    letter-spacing: normal;
    line-height: 1.5;
    margin-top: 2em;
    margin-bottom: 1.5em;
    margin-right: 15em;
    outline: none;
    overflow: hidden;
    right: 15px;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
}
</style>
