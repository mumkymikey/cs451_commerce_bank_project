<template>
  <div id="rule-view-wrapper">
    <h2>Rule Details</h2>
    <ul>
      <li>Name: {{ rule.name }}</li>
      <li>Type: {{ rule.type }}</li>
      <li>Location: {{ rule.location }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rule: {
        id: null,
        userId: null,
        user: null,
        name: null,
        type: null,
        startTime: "0001-01-01T00:00:00",
        endTime: "0001-01-01T00:00:00",
        location: null,
        amountGreaterThan: 0,
        amountLessThan: 0,
        amountEquals: 0,
        countTriggered: 0,
      },
    };
  },
  async created() {
    const response = await fetch(`https://localhost:3000/rules/single/${this.$route.params.id}`)
    if (response.status == 200) {
        this.rule = await response.json()
    } 
  },
};
</script>
