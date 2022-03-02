<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="onClickSave">Save</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      items: []
    }
  },
  methods: {
    async onClickSave() {
      await fetch('https://localhost:3000/user', {
        method: 'POST',
        data: this.name
      })

      this.name = ''
      await this.loadItems();
    },

    async loadItems() {
      await fetch('https://localhost:3000/user', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.name })
      })
    },

    async mounted() {
      await this.loadItems()
    }
  }
}
</script>