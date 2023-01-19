
<script>
  export default {
    props: [`streetNumber`,`streetName`,`postalCode`],
    data() {
      return {
        value: [],
        source: [
            "Underground", "Surface"
        ]
      }
    }
  }
</script>

<template>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Address</label>
    </div>
    <div class="field-body">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input" size="1" placeholder="1140" v-model="streetNumber">
            </p>
            <p class="help">Street Number</p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input" size="50" placeholder="West Pender" v-model="streetName">
            </p>
            <p class="help">Street Name</p>
          </div>
        </div>
      </div>



    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label"></div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" size="1" v-model="postalCode">
        </p>
        <p class="help">Postal Code</p>
      </div>
      <div class="field">
        <div class="select">
          <p class="control">
            <select>
              <option value="1">Pelican Town</option>
              <option value="2">Sulani Island</option>
              <option value="3">Komorebi Village</option>
              <option value="4">Star Beach</option>
              <option value="5">Homebound Mountain</option>
              <option value="6">Calico Desert</option>
            </select>
          </p>
          <p class="help">City</p>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label">
        Details
      </label>
    </div>
    <div class="field-body">
    </div>
  </div>

  <FormKit>

  </FormKit>



</template>