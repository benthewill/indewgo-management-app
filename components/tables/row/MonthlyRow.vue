<script>
  export default {
    props: ['content', 'taxes'],
    setup() {
      const currencyZeros = (x) => currencyConvert(x)
      const taxesCalculation = (x,y) => taxCalculation(x,y)
      const groupContents = (x,y) => grouping(x,y)
      const verbalizeDays = (x) => daysOfWeek(x)
      const capitalizeText = (x) => capitalize(x)
      const namingRate = (x,y,z,a) => nameRate(x,y,z,a)

      return {
        currencyZeros,
        taxesCalculation,
        groupContents,
        verbalizeDays,
        capitalizeText,
        namingRate
      }
    },
    methods: {

    }
  }
</script>

<template>
  <div class="list pt-0 px-1 has-hoverable-list-items" v-for="rateItem in content">
    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="subtitle is-6">
                  {{ capitalizeText(rateItem.node.monthly_rates_type.rate_name)  }} -
                  {{ namingRate(
                    rateItem.node.rate_hour_from,
                    rateItem.node.rate_hour_to,
                    verbalizeDays(rateItem.node.rate_days).period,
                    rateItem.node.rate_days) }}
                </p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <p class="button is-small is-inverted is-info">Functions</p>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item-description">
          <div class="columns is-narrow pt-1 pl-1">
            <div class="column ">
              <p><span class="heading">Pre-Tax</span>
                <span class="subtitle is-6">$ {{currencyZeros(rateItem.node.base_price)}}</span></p>
            </div>
            <div class="column">
              <p><span class="heading">Price</span>
                <span class="subtitle is-6">$ {{  currencyZeros(taxesCalculation(rateItem.node.base_price, [taxes.provincial_transport_tax, taxes.goods_and_services_tax, taxes.additional_tax]))  }}</span>
              </p>
            </div>
            <div class="column ">
              <p><span class="heading">Clearance</span>
                <span class="subtitle is-6" v-for="n in rateItem.node.clearance_lot_types"> {{ n }}&nbsp;</span></p>
            </div>
            <div class="column ">
              <p><span class="heading">Access</span>
                <span class="subtitle is-6" v-if="rateItem.node.monthly_rates_accessCollection.edges.length" v-for="n in rateItem.node.monthly_rates_accessCollection.edges"> {{ capitalizeText(n.node.parking_lots_access_methods.method_name) }}&nbsp;</span>
                <span class="subtitle is-6" v-if="!rateItem.node.monthly_rates_accessCollection.edges.length">No Access Required</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>