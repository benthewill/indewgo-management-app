<script setup>
  import {useNewParkingLotStore} from "../../../store/newParkingLot";
  import {storeToRefs} from "pinia";
  import {computed} from "vue";

  const {general, checks, address} = storeToRefs(useNewParkingLotStore())
  const methods = useNewParkingLotStore()

  const emit = (defineEmits(['NextStep']))

  const next = computed(() => {
    emit('NextStep')
    // methods.mutateGeneral()
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

<!--    FORMKIT-->
    <general-card>
      <template #header>
        <div class="container has-text-centered">
          <p class="title">Basic Information - FormKit</p>
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
      </template>
    </general-card>



    <div class="control">
      <button @click="next" class="button is-info"> Next </button>

    </div>





  </div>
</template>

<style>
</style>