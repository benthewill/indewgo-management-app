<script>
  import durationCalculation from "../../../composables/durationCalculation";

  export default {
    props: ['content', 'taxes'],
    setup() {
      const durationConvert = (x) => durationCalculation(x);
      const currencyZeros = (x) => currencyConvert(x)
      const taxesCalculation = (x,y) => taxCalculation(x,y)
      const capitalizeText = (x) => capitalize(x)
      const verbalizeDays = (x) => daysOfWeek(x)
      const namingRate = (x,y,z,a) => nameRate(x,y,z,a)


      return {
        durationConvert,
        currencyZeros,
        capitalizeText,
        taxesCalculation,
        namingRate,
        verbalizeDays
      }
    }
  }
</script>

<template>
  <div class="list pt-0 px-1 has-hoverable-list-items" v-for="rateItem in content">
    <div class="list-item">
      <div class="list-item-content">
        <div class="columns is-narrow pl-1">


          <div class="column ">
            <p><span class="heading">Duration</span>
              <span class="subtitle is-6">{{durationConvert(rateItem.node.duration)}}</span></p>
          </div>


          <div class="column ">
            <p><span class="heading">Price</span>
              <span class="subtitle is-6">$ {{currencyZeros(rateItem.node.base_price)}}</span></p>
          </div>



          <div class="column ">
            <p><span class="heading">Availability</span>
              <span class="subtitle is-6" v-if="rateItem.node.daily_rates_availabilityCollection.edges.length === 0">
                N/A
              </span>
            </p>

              <div class="tags are-small">
                <span class="tag is-success is-light" v-for="item in rateItem.node.daily_rates_availabilityCollection.edges">

                    <span v-if="item">
                      {{  verbalizeDays(item.node.days_of_the_week).period  }}&hairsp;
                    </span>

                  </span>
              </div>

          </div>


          <div class="column ">
            <p><span class="heading">Clearance</span>
              <span class="subtitle is-6">SU UG</span></p>
          </div>


          <div class="column ">
            <p><span class="heading">Placeholder</span>
              <span class="subtitle is-6">true</span></p>
          </div>




        </div>
      </div>
    </div>
  </div>
</template>