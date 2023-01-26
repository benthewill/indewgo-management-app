<script setup>
  import {ref} from "vue";
  import {storeParkingLots} from "../../../store/parkingLots";


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

    <section class="hero is-small">
      <div class="container has-text-centered">
        <div class="hero-body">
          <p class="title has-text-link-dark">
            Insert New Parking Lot
          </p>
          <p class="subtitle">
            Details about the application and whatnot.
          </p>
        </div>
        <div class="hero-foot">
          <div class="buttons is-centered">
            <button class="button is-small" :class="{' is-link':step===1}" @click="step = 1"></button>
            <button class="button is-small" :class="{' is-link':step===2}" @click="step = 2"></button>
            <button class="button is-small" :class="{' is-link':step===3}" @click="step = 3"></button>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container is-max-desktop px-5">
        <div v-show="step===1">
          <mutation-insert-step-one @next-step="step++"></mutation-insert-step-one>
        </div>
        <div v-show="step===2">
          <mutation-insert-step-two @next-step="step++"></mutation-insert-step-two>
        </div>
        <div v-show="step===3">
          <mutation-insert-step-three @next-step="step++"></mutation-insert-step-three>
        </div>

      </div>
    </section>






  </div>

</template>

<style>

</style>