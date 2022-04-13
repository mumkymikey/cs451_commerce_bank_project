<template>
  <div id="new-rule-form-wrapper">
    <button type="button" class="btn btn-primary btn-pretty">
      <a href="/notification-rules"> ⬅ Back to Rules </a>
    </button>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Rule Name: </label>
        <input
          type="text"
          id="exampleFormControlInput1"
          placeholder="Something clever"
          required
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect2">Rule Type</label>
        <select class="form-control" id="exampleFormControlSelect2">
          <option>💰 Amount</option>
          <option selected>📍 Location</option>
          <option>🕖 Time</option>
        </select>
      </div>

      <div class="form-group">
        <label for="state" class="control-label">State</label>

        <select class="form-control" id="state" name="state" required>
          <option value="AK">Alaska</option>
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DC">District of Columbia</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="IA">Iowa</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MA">Massachusetts</option>
          <option value="MD">Maryland</option>
          <option value="ME">Maine</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MO" selected>Missouri</option>
          <option value="MS">Mississippi</option>
          <option value="MT">Montana</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="NE">Nebraska</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NV">Nevada</option>
          <option value="NY">New York</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="VT">Vermont</option>
          <option value="WA">Washington</option>
          <option value="WI">Wisconsin</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-primary btn-pretty"
          @click="submitRule"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  methods: {
    submitRule() {
      console.log("test");
      // verify inputs

      // send ajax request

      // process response
    },
  },
};
</script>

<style scoped>
/* TODO: move this to a css file. */
.btn-pretty a {
  color: #fff;
}
.btn-pretty {
  appearance: none;
  backface-visibility: hidden;
  background-color: #006747;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  height: 40px;
  letter-spacing: normal;
  line-height: 1.5;
  margin-bottom: 1.5em;
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
