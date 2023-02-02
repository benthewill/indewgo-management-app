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

  const {general, address, checks} = storeToRefs(useNewParkingLotStore())
  const methods = useNewParkingLotStore()

  const emit = (defineEmits(['NextStep']))

  const next = computed(() => {
    emit('NextStep')
    // methods.mutateLocations()
  })

</script>



<template>
  <div>
    {{cityNames}}
    <general-card>
      <template #header>
        <div class="container has-text-centered">
          <p class="title">
            {{address.amount}} Location(s) for {{general.storedLotID}} - #{{general.storedLotNumber}} - {{general.storedLotName}}
          </p>
        </div>
      </template>
      <template #content>

        <div v-for="addr in address.list" class="py-4">
          <general-inner-card>
            <template #header>
              <p>
                {{addr}}
              </p>
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
              </div>
            </template>
          </general-inner-card>
        </div>

        <button @click="methods.incrementAddress()" class="button">Add Address</button>

      </template>
    </general-card>

    <div class="buttons">
        <button @click="next" class="button is-info"> Next </button>

    </div>


  </div>
</template>