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

  const {general, checks, address} = storeToRefs(useNewParkingLotStore())
  const methods = useNewParkingLotStore()

</script>

<template>
  <div>

    <general-card>
      <template #header>
        <div class="container has-text-centered">
          <p class="title has-text-centered">Basic Information</p>
        </div>
      </template>
      <template #content>

        <inner-card>
          <template #header>
            Parking Lot Information
          </template>
          <template #content>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" size="3" placeholder="Parking Lot Number" v-model="general.storedLotNumber">
                  </p>
                  <p class="help">Enter Lot Number here</p>
                </div>
                <div class="field">
                  <p class="control ">
                    <input class="input" type="text" size="30" placeholder="Parking Lot Name" v-model="general.storedLotName">
                  </p>
                  <p class="help">Enter Lot Name here</p>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" v-model="checks.hasMultipleAddresses">
                  Does the Lot have multiple addresses?
                </label>
              </div>
            </div>
          </template>
        </inner-card>


        <inner-card>
          <template #header>
            Location Information
          </template>
          <template #content>
            <mutation-elements-address
                :street-number="address.storedLotStreetNumber"
                :street-name="address.storedLotStreetName"
                :postal-code="address.storedLotStreetPostal"
            ></mutation-elements-address>
          </template>
        </inner-card>

      </template>
    </general-card>



    <div class="control">
      <button @click="$emit('nextStep')" class="button is-info"> Next </button>

    </div>





  </div>
</template>