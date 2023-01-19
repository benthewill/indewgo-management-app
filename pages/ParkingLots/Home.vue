<script lang="ts" setup>
  import {storeParkingLots} from "~/store/parkingLots";
  import {storeToRefs} from "pinia";

  const {checkData, loading, error} = storeToRefs(storeParkingLots())

  const {fetchData} = storeParkingLots()
  fetchData()
</script>

<script lang="ts">
export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {

  }
}
</script>

<template>
  <div>


    <div style="background-color: #fbfbfb" class="block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top">

      <div class="level">

        <div class="level-left">
          <div class="level-item">
            <p>
              <span class="title is-4 is-align-content-center">
                Parking Lots Management
              </span>
              <span class="is-size-7 ">
                <br>Details about the app here or other important news.
              </span>
            </p>
          </div>
        </div>

        <div class="level-right">

          <div class="level-item is-hidden-touch">
            <div class="control mx-1">
              <input class="input is-small is-light" type="text" placeholder="🔎 Search Here">
            </div>
          </div>

          <div class="level-item is-hidden-touch ">
            <a class="button is-info is-small has-text-link-dark is-inverted mx-1">Filter</a>
            <a class="button is-info is-small has-text-link-dark is-inverted mx-1">Sort</a>
            <a class="button is-info is-small has-text-link-dark is-inverted mx-1">Func</a>
          </div>

          <div class="level-item is-hidden-touch">
            <a class="button is-info is-small has-text-link-light mx-1">Edit Mode</a>
            <NuxtLink to="/ParkingLots/functions/addNewLot" class="button is-info is-small has-text-link-light mx-1">
              Add Lot
            </NuxtLink>
          </div>

        </div>

      </div>

    </div>





    <div v-if="checkData" class="section px-1 pt-0 is-shadowless">
      <tables-rows v-for="lot in checkData" :lot-details="lot.node"/>
    </div>


    <div v-if="loading" class="section px-1 pt-0">
      <p class="title is-5 has-text-centered">Loading Data</p>
    </div>


  </div>
</template>

<style>
</style>