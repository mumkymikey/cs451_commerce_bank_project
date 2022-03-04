<template>
  <div class="container">
    <b-card>
    <input type="text" v-model="name" />
    <button @click="onClickSave">Save</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </b-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      name: '',
      items: []
    }
  },
  async mounted() {
    await this.loadItems()
  },
  methods: {
    async onClickSave() {
      const response = await fetch('https://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.name })
      })

      this.name = ''
      await this.loadItems();
    },

    async loadItems() {
      const response = await fetch('https://localhost:3000/user')
      this.items = await response.json()
    }
  }
}
</script>

<style>
div {
  width: 500px;
  margin: auto
}

.container {
  margin: auto
}
</style>
