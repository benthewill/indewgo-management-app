<script>
  export default {
    props: ['formFields'],
    methods: {
      updateStore(name,num) {

      }
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
  <div class="card py-3 px-4 mt-5 mb-6 rounding is-shadowless">


    <div class="field">
      <label class="label">Parking Lot Name ( {{ general.storedLotName }} )</label>
      <div class="control">
        <input class="input" type="text" placeholder="Type Name Here" v-model="general.storedLotName">
      </div>
    </div>
    <div class="field">
      <label class="label">Parking Lot Number ( {{ general.storedLotNumber }} )</label>
      <div class="control">
        <input class="input" type="number" placeholder="Type Number Here" v-model="general.storedLotNumber">
      </div>
    </div>
<!--    ADDRESS-->
    <div class="field">
      <label class="label">Street Number ( {{ address.storedLotStreetNumber }} )</label>
      <div class="control">
        <input class="input" type="number" placeholder="Street Number Here" v-model="address.storedLotStreetNumber">
      </div>
    </div>
    <div class="field">
      <label class="label">Street Name ( {{ address.storedLotStreetName }} )</label>
      <div class="control">
        <input class="input" type="text" placeholder="Type Number Here" v-model="address.storedLotStreetName">
      </div>
    </div>
    <div class="field">
      <label class="label">Street Postal Code ( {{ address.storedLotStreetPostal }} )</label>
      <div class="control">
        <input class="input" type="text" placeholder="Type Number Here" v-model="address.storedLotStreetPostal">
      </div>
    </div>

    <button @click="methods.mutateData()"> Add </button>


  </div>
</template>