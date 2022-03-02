<template>
  <div>
    <input type="text" v-model="userName" />
    <button @click="onClickSave">Save</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      items: []
    }
  },
  methods: {
    async onClickSave() {
      await fetch('https://localhost:3000/user', {
        method: 'GET',
        data: this.userName
      })

      this.userName = ''
      await this.loadItems();
    },

    async loadItems() {
      await fetch('https://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: this.userName })
      })

      this.userName = ''
    },

    async mounted() {
      await this.loadItems()
    }
  }
}
</script>