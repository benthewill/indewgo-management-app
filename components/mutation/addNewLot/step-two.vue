<script lang="ts">
  export default {
    props: ['formFields'],
    methods: {
    },
    data()  {
      return {
        step: 'hours'
      }
    }
  }
</script>

<script setup lang="ts">
  import {useNewParkingLotStore} from "~/store/newParkingLot";
  import {storeToRefs} from "pinia";
  import {computed} from "vue";
  import {useCitiesStore} from "~/store/cityDetails";
  import daysOfWeek from "~/composables/daysOfWeek";

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

  const dayOfWeekConvert = (x:any) => daysOfWeek(x)

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

        <div v-for="(addr,i) in addresses" class="py-4">
          <general-inner-card>
            <template #header>
              Address {{i + 1}}
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


                <div class="py-4" >
                  <general-inner-card>
                    <template #header>
                      Details
                    </template>
                    <template #content>
                      <div class="columns is-narrow">
                        <div class="column is-one-fifth mr-3">
                          <div class="block">
                            <button class="button is-fullwidth" :class="{'is-link':step==='hours'}" @click="step = 'hours'">Gate</button>
                          </div>
                          <div class="block">
                            <button class="button is-fullwidth" :class="{'is-link':step==='other'}" @click="step = 'other'">Other</button>
                          </div>
                          <div class="block">
                            <button class="button is-fullwidth" :class="{'is-link':step==='other2'}" @click="step = 'other2'">Other 2</button>
                          </div>
                        </div>
                        <div class="column">
                          <div class="block" v-show="step==='hours'">
                            <div class="block mb-6">
                              <FormKit
                                  type="checkbox"
                                  name="gated"
                                  label="Is the Lot Gated"
                                  help="Is it open access or is there a gate?"
                                  v-model="addr.storedLotAccessInformation.gated"
                              />


                            </div>
                            <div v-for="(day, inDay) in addr.storedLotAccessInformation.timeAvailabilities.list" class="pb-0">
                              <div class="level mb-2">
                                <div class="level-left">
                                  <div class="level-item">
                                    <p class="is-size-5 has-text-weight-semibold has-text-grey">
                                      {{dayOfWeekConvert([day.dayOfWeek]).period}}
                                    </p>
                                  </div>
                                </div>
                                <div class="level-right">
                                  <div class="level-item" v-show="day.open" >
                                    <button :id="'24hour' + inDay" class="button is-small is-link is-inverted" @click="methods.addressTimeChecks(i, 'hours',inDay)">
                                      24 Hours
                                    </button>
                                  </div>
                                  <div class="level-item">
                                    <div class="field">
                                      <input :id="day.dayOfWeek" type="checkbox" name="switchDay" class="switch is-info is-rounded is-left-to-right" :checked="day.open" @click="day.open = !day.open">
                                      <label :for="day.dayOfWeek">
                                        <p class=" has-text-weight-semibold has-text-grey">
                                          {{day.open ? "Open" : "Closed"}}
                                        </p></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                                <div v-show="day.open === true" class="pl-2">
                                  <div class="columns my-0 py-0 is-narrow" v-for="(time, inTime) in day.hours">
                                    <div class="column">
                                      <FormKit
                                          type="time"
                                          name="gateOpenFrom"
                                          label="Open From"
                                          v-model="time.from"
                                      />
                                    </div>
                                    <div class="column">
                                      <FormKit
                                          type="time"
                                          name="gateOpenTo"
                                          label="Open To"
                                          v-model="time.to"
                                      />
                                    </div>
                                    <div class="column is-one-fifth">
                                      <button :id="'remove' + inDay" v-show="day.hours.length > 1" class="button is-danger is-inverted mt-5" @click="methods.addressTimeEntry('delete',i,inDay,inTime)">
                                  <span class="icon">
                                    <i class="fas fa-times"></i>
                                  </span>
                                      </button>
                                    </div>
                                    <div class="column">
                                      <button :id="inDay" v-show="inTime +1 === day.hours.length" class="button is-inverted mt-5" @click="methods.addressTimeEntry('add',i,inDay)">
                                    <span class="icon">
                                      <i class="fas fa-plus"></i>
                                    </span>
                                        <span> Hours</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              <div v-show="inDay !== 6" class="is-divider my-2"></div>
                            </div>
                          </div>
                          <div class="block" v-show="step==='other'">Other</div>
                          <div class="block" v-show="step==='other2'">Other 2</div>

                        </div>
                      </div>

                    </template>
                  </general-inner-card>

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