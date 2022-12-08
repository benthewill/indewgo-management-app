<script>
import MonthlyRow from "./row/MonthlyRow";
import {ref} from 'vue'
export default {
  components: {MonthlyRow},
  props: ['monthly','cityDetails'],
  setup() {
    const groupContents = (x,y) => grouping(x,y)
    const capitalizeText = (x) => capitalize(x)
    return {
      groupContents,
      capitalizeText
    }
  },
  data() {
    return {
      groupingMethod: ref("rate_allowance")
    }
  },
  methods: {
    alterGroupingMethod(method){
      this.groupingMethod = method
    }
  },
  computed: {

  }
}
</script>

<template>
  <div class="column mx-3">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5 pl-2 has-text-weight-semibold ">
            Monthly Parking
          </p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="button is-small  is-info" @click="alterGroupingMethod('clearance_lot_types')">Function</p>
        </div>
        <div class="level-item">
          <p class="button is-small   is-info" @click="alterGroupingMethod('rate_allowance')">Process</p>
        </div>
      </div>
    </div>

    <div v-if="!monthly.length">
      <div class="block p-2">
        <p class=" title is-5">No monthly parking available.</p>
      </div>
    </div>

    <div v-if="monthly.length">

      <div class="block px-2 is-hidden-mobile">
        <div class="columns">
          <div class="column">
            <p class="heading">
              Details
            </p>
            <div>
              <p class="is-size-7">
                Additional Details Here. Maybe stuff currently not befitting other locations.
              </p>
            </div>
          </div>

          <div class="is-divider-vertical addingPadd"></div>

          <div class="column">
            <p class="heading">
              Details 2
            </p>
            <div>
              <p class="is-size-7">
                Maybe this part of the detail is related to something else.
              </p>
            </div>
          </div>

          <div class="is-divider-vertical addingPadd"></div>

          <div class="column">
            <p class="heading">
              Details 3
            </p>
            <div>
              <p class="is-size-7">
                Maybe this part of the detail is related to something else.
              </p>
            </div>
          </div>
        </div>
      </div>




      <div class="block px-2 py-5 cleanBordering" v-for="rate in groupContents(monthly, groupingMethod)">
        <p class="subtitle is-5 has-text-weight-semibold pl-3 pb-0 has-text-grey">
          {{capitalizeText(rate[groupingMethod])}} Rates
        </p>
        <monthly-row :content="rate.contents" :taxes="cityDetails"></monthly-row>
      </div>
    </div>


  </div>
</template>
