<script setup>
import {computed} from "vue";
  import {useNewParkingLotStore} from "../../../store/newParkingLot";
  import {storeToRefs} from "pinia";
import daysOfWeek from "~/composables/daysOfWeek";

  const {general, checks, addresses, logs} = storeToRefs(useNewParkingLotStore())

  const methods = useNewParkingLotStore()

  const process = computed( () => {
    methods.mutateFinal().then((res)=> {
      console.log(res)
      methods.$reset()
    })
  })



</script>

<script>
export default {
  data() {
    return {
      step: 1
    }
  }
}
</script>

<template>
<!--TOP SECTION -->
  <div class="block px-3 py-3 is-transparent is-rounded is-shadowless ">

    <section class="section">
      <div class="buttons has-addons is-centered">
        <button class="button " :class="{'is-link':step===1}" @click="step = 1">General</button>
        <button class="button " :class="{'is-link':step===2}" @click="step = 2">Location</button>
        <button class="button " :class="{'is-link':step===3}" @click="step = 3">Lot Details</button>
      </div>
      <div class="container is-max-desktop px-5">
        <div v-show="step===1">
          <mutation-addNewLot-step-one @next-step="step++"></mutation-addNewLot-step-one>
        </div>
        <div v-show="step===2">
          <mutation-addNewLot-step-two @next-step="step++"></mutation-addNewLot-step-two>
        </div>
        <div v-show="step===3">
          <mutation-addNewLot-step-three @next-step="step++"></mutation-addNewLot-step-three>
        </div>
        <button class="button is-warning" @click="process">Process</button>
      </div>
    </section>

    <section class="section">
      <pre wrap>{{general}}</pre>
      <pre wrap>{{addresses}}</pre>
      <pre wrap>{{logs.addressesTimes}}</pre>
    </section>











  </div>

</template>

<style>

</style>