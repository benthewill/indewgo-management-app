<script lang="ts">
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

<script setup lang="ts">
  import {useNewParkingLotStore} from "~/store/newParkingLot";
  import {storeToRefs} from "pinia";
  import {computed} from "vue";
  import {useCitiesStore} from "~/store/cityDetails";

  const {cityNames} = storeToRefs(useCitiesStore())
  const {getAllCities} = useCitiesStore()
  getAllCities()

  const {general, addresses, checks} = storeToRefs(useNewParkingLotStore())
  const methods = useNewParkingLotStore()

  const emit = (defineEmits(['NextStep']))

  const next = computed(() => {
    emit('NextStep')
    // methods.mutateLocations()
  })

</script>



<template>
  <div>
    <general-card>
      <template #header>
        <div class="container has-text-centered">
          <p class="title">
            Location(s) for {{general.storedLotID}} - #{{general.storedLotNumber}} - {{general.storedLotName}}
          </p>
        </div>
      </template>
      <template #content>

        <div v-for="addr in addresses" class="py-4">
          <general-inner-card>
            <template #header>
            </template>
            <template #content>
              <div>
                <div class="columns mb-0">
                  <div class="column ">
                    <FormKit
                        type="text"
                        help="Enter Street Number here"
                        label="Street Number"
                        maxlength="10"
                        v-model="addr.storedLotStreetNumber"
                    />
                  </div>
                  <div class="column">
                    <FormKit
                        type="text"
                        help="Enter Street Name here"
                        label="Street Name"
                        v-model="addr.storedLotStreetName"
                    />
                  </div>
                </div>
                <div class="columns mb-0">
                  <div class="column">
                    <FormKit
                        type="text"
                        label="Postal Code"
                        help="Enter Postal Code here"
                        maxlength="7"
                        v-model="addr.storedLotStreetPostal"
                    />
                  </div>
                  <div class="column">
                    <FormKit
                      type="select"
                      name="city"
                      label="Choose a city"
                      v-model="addr.storedCityID"
                      placeholder="Select a City"
                      :options="cityNames"
                      />
                  </div>
                </div>
                  <div class="columns mb-0">
                    <div class="column">
                      <FormKit
                          type="checkbox"
                          name="gated"
                          label="Is the Lot Gated"
                          help="Is it open access or is there a gate?"
                          v-model="addr.storedLotAccessInformation.gated"
                        />
                    </div>
                    <div class="column">
                      <FormKit
                          type="checkbox"
                          name="247"
                          label="Is the Gate Open 24 hours?"
                          help="Automatically input the time 00:00 to 00:00"
                          v-model="addr.storedLotAccessInformation['247']"
                      />
                    </div>

                  </div>

                <div class="columns mb-0" v-show="!addr.storedLotAccessInformation['247']">
                  <div class="column" >
                    <FormKit
                        type="time"
                        name="gateOpenFrom"
                        label="Gate Open From"
                        v-model="addr.storedLotAccessInformation.hours.from"
                        help="What time does the gate open?"
                    />
                  </div>
                  <div class="column">
                    <FormKit
                        type="time"
                        name="gateOpenTo"
                        label="Gate Open To"
                        v-model="addr.storedLotAccessInformation.hours.to"
                        help="What time does the gate closes?"
                    />
                  </div>
                </div>
              </div>
            </template>
          </general-inner-card>
        </div>

        <div class="block">
          <button @click="methods.incrementAddress()" class="button">Add Address</button>
        </div>

        <div class="block">
          <div class="buttons">
            <button  class="button"> Clear </button>
            <button  class="button is-info"> Previous </button>
            <button @click="next" class="button is-info"> Next </button>
          </div>
        </div>

      </template>
    </general-card>



  </div>
</template>