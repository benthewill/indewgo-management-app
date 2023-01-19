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
  import InnerCard from "../../general/InnerCard";

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
        <div class="field">
          <!--              <label class="label">Lot Number</label>-->
          <p class="control">
            <input class="input" size="3" placeholder="Parking Lot Number" v-model="general.storedLotNumber">
          </p>
          <p class="help">Enter Lot Number here</p>
        </div>
        <div class="field">
          <!--              <label class="label">Lot Name</label>-->
          <p class="control ">
            <input class="input" type="text" size="30" placeholder="Parking Lot Name" v-model="general.storedLotName">
          </p>
          <p class="help">Enter Lot Name here</p>
        </div>
      </template>
    </general-card>

    <div class="control">
      <button @click="$emit('nextStep')" class="button is-info"> Next </button>

    </div>





  </div>
</template>