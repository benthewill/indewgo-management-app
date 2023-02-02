<script>
  export default {
    props: ['formFields'],
    methods: {
    },
    data()  {
      return {

      }
  }
  }
</script>

<script setup>
  import {useNewParkingLotStore} from "../../../store/newParkingLot";
  import {storeToRefs} from "pinia";

  const {general, address} = storeToRefs(useNewParkingLotStore())
  const methods = useNewParkingLotStore()

</script>

<template>
  <div>

    <general-card>
      <template #header>
          <p class="title is-5 has-text-weight-semibold">Three</p>
      </template>
      <template #content>

        <FormKit
          type="hello"
          />
      </template>
    </general-card>

    <div class="control">
      <button @click="$emit('nextStep')" class="button is-info"> Next </button>

    </div>





  </div>
</template>