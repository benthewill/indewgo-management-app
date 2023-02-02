<script setup>
  import {useNewParkingLotStore} from "../../../store/newParkingLot";
  import {storeToRefs} from "pinia";
  import {computed} from "vue";

  const {general, checks, address} = storeToRefs(useNewParkingLotStore())
  const methods = useNewParkingLotStore()

  const emit = (defineEmits(['NextStep']))

  const next = computed(() => {
    emit('NextStep')
  })

</script>

<script>
  export default {
    props: ['formFields'],
    data()  {
      return {

      }
  }
  }
</script>


<template>
  <div>
<!--    FORMKIT WITHOUT FORMS-->
    <general-card>
      <template #header>
        <div class="container has-text-centered">
          <p class="title">Basic Information - FormKit w/out Forms</p>
        </div>
      </template>
      <template #content>

        <general-inner-card>
          <template #header>
            Parking Lot Information
          </template>
          <template #content>
            <div class="columns">
              <div class="column">
                <FormKit
                    type="text"
                    label="Parking Lot Name"
                    help="Enter Parking Lot Name here"
                    v-model="general.storedLotName"
                />

              </div>
              <div class="column">
                <FormKit
                    type="text"
                    label="Parking Lot Number"
                    help="Enter Parking Lot Number here"
                    v-model="general.storedLotNumber"
                />
              </div>
            </div>

          </template>
        </general-inner-card>
        <div class="buttons">
          <button  class="button"> Clear </button>
          <button  class="button is-info"> Previous </button>
          <button @click="next" class="button is-info"> Next </button>
        </div>
      </template>
    </general-card>








  </div>
</template>

<style>
</style>