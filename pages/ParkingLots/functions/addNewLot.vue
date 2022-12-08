<script setup>
  import {ref} from "vue";

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
  <div style="background-color: #ededf0" class="block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top">

    <div class="level">

      <div class="level-left">
        <div class="level-item">
          <p>
              <span class="title is-5 is-align-content-center">
                Insert New Parking Lot
              </span>
            <span class="is-size-7 ">
                <br>Details about the app here or other important news.
              </span>
          </p>
        </div>
      </div>

      <div class="level-right">

        <div class="level-item">

          <span class="icon" v-if="step===1">
            <ion-icon name="ellipse-outline"></ion-icon>
          </span>
          <span class="icon" v-if="step > 1">
            <ion-icon name="ellipse"></ion-icon>
          </span>

          <span class="icon" v-if="step < 3">
            <ion-icon name="ellipse-outline"></ion-icon>
          </span>
          <span class="icon" v-if="step >= 3">
            <ion-icon name="ellipse"></ion-icon>
          </span>

          <span class="icon" v-if="step < 4">
            <ion-icon name="ellipse-outline"></ion-icon>
          </span>
          <span class="icon" v-if="step >= 4">
            <ion-icon name="ellipse"></ion-icon>
          </span>

        </div>


      </div>

    </div>

<!--    BOTTOM SECTION-->

    <div v-if="step === 1" class="section px-1 pt-0 is-shadowless">
      <p class="title is-5">Page One</p>
      <mutation-insert-step-one></mutation-insert-step-one>
      <button @click="step++">Next Step</button>
    </div>

    <div v-if="step === 2" class="section px-1 pt-0 is-shadowless">
      <p class="title is-5">Page Two</p>
      <button @click="step++">Next Step</button>
    </div>

    <div v-if="step === 3" class="section px-1 pt-0 is-shadowless">
      <p class="title is-5">Page Three</p>
      <button @click="step++">Next Step</button>
    </div>

  </div>

</template>