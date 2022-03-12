<template>
  <div class="container">
    <form class="card" @submit.prevent="onLogin">
      <div class="card-body">
        <h2>Login</h2>
        <label for="username">Username:</label><br>
        <input
          v-model="data.username"
          placeholder="Enter username"
          required
        ><br><br>
        <label for="password">Password:</label><br>
        <input
          v-model="data.password"
          placeholder="Enter password"
          required
        ><br><br>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    onLogin() {
      console.log(this.data.emailAddress);
      const response = fetch('https://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.data)
      }).then((response) => {
        if (response.status == 200) {
          // add redirect when vue-router implemented
          alert('Login Successful!');
        }
        else if (response.status == 400) {
          alert('Username and/or password is incorrect!')
        }
      }).catch((error) => {
        console.log(error);
      });

      this.data.username = '';
      this.data.password = '';
    },

    async loadItems() {
      const response = await fetch('https://localhost:3000/user')
      this.items = await response.json()
    }
  }
}
</script>

<style scoped>
button {
    appearance: none;
    backface-visibility: hidden;
    background-color: #2f80ed;
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    height: 40px;
    width: 75px;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    position: relative;
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

div {
  width: 400px;
  margin: auto;
}

input {
  width: 250px;
}

.container {
  margin: auto;
  padding-top: 150px;
}
</style>
