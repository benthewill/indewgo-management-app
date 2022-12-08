<script>
import durationCalculation from "../../composables/durationCalculation";
import DailyRow from "./row/DailyRow";
import {ref} from "vue";

export default {
  components: {DailyRow},
  props: ['daily', 'index', 'cityDetails'],
  setup() {
    const durationConvert = (x) => durationCalculation(x);
    const currencyZeros = (x) => currencyConvert(x)
    const groupContents = (x,y) => grouping(x,y)

    return {
      durationConvert,
      currencyZeros,
      groupContents
    }
  },
  data() {
    return {
      groupingMethod: ref("rate_allowance")
    }
  },
  methods: {
    capitalize(text, config){
      let textArr = text.split(' ')
      let newArr = []
      for (let tx of textArr){
        let newTx = tx[0].toUpperCase() + tx.slice(1)
        newArr.push(newTx)
      }
      return newArr.join(' ')
    },
    alterGroupingMethod(method){
      this.groupingMethod = method
    }
  },
  computed: {
    getMethods() {
      let paymentMethods = []

      this.daily.forEach((item) => {
        let method = item.node.daily_rate_payment_methodsCollection.edges

        if (method.length) {

          let methodName = method.map(n => n.node.daily_rate_payment_method_types.payment_method_type_name)

          paymentMethods.push(methodName)
        }
      })

      let flattenPM = paymentMethods.flat()
      let pmSet = [...new Set(flattenPM)]

      return pmSet
    }
  }
}

</script>

<template>
  <div class="column mx-3">
    <div class="is-narrow">

      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5 pl-2 has-text-weight-semibold ">
              Daily Parking
              <span class="is-size-6 has-text-weight-light">({{daily.length}})</span>
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


      <div v-if="!daily.length">
        <div class="block p-2">
          <p class=" title is-5">No daily parking available.</p>
        </div>
      </div>

      <div v-if="daily.length">


        <div class="block px-2 is-hidden-mobile">
          <div class="columns">
            <div class="column">
              <p class="heading  ">
                Payment
              </p>
              <div class="tags are-small" >
                <span class="tag is-warning is-light" v-for="method in getMethods">
                  {{method}}
                </span>
              </div>
            </div>

            <div class="is-divider-vertical addingPadd"></div>

            <div class="column">
              <p class="heading ">
                Areas
              </p>
              <div v-for="method in getMethods">
                <p class="is-size-7">
                  {{method}}
                </p>
              </div>
            </div>

            <div class="is-divider-vertical addingPadd"></div>

            <div class="column">
              <p class="heading ">
                Details
              </p>
              <div>
                <p class="is-size-7">
                  Additional Details Here. Maybe stuff currently not befitting other locations.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="block px-2 py-5 cleanBordering" v-for="rate in groupContents(daily, groupingMethod)">
          <p class="subtitle is-5 has-text-weight-semibold pl-3 pb-0 has-text-grey">
            {{capitalize(rate[groupingMethod])}} Rates
          </p>
          <daily-row :content="rate.contents" :taxes="cityDetails"></daily-row>
        </div>

      </div>

    </div>
  </div>
</template>

<style>
  .dailyRates{
    display: flex;
    flex-direction: row;
  }
  .dailyRatesColumns {
    width: 100%;
  }


</style>