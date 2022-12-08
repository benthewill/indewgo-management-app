<script>
import SimpleDetails from "./SimpleDetails";
import SimpleDailyRates from "./SimpleDailyRates";
import SimpleMonthlyRates from "./SimpleMonthlyRates";
export default {
  components: {SimpleMonthlyRates, SimpleDailyRates, SimpleDetails},
  props: ['lotDetails'],
  computed: {
    addressColl() {
      const getEdges = this.lotDetails.parking_lots_addressCollection
      const curatedAddresses = [...getEdges.edges]
      const getLength = {...getEdges}

      const cityNames = () => {
        let cityDetails = curatedAddresses[0]
        cityDetails = {...cityDetails}
        cityDetails = {...cityDetails.node}
        cityDetails = {...cityDetails.city_details}
        cityDetails = cityDetails.city_name

        return cityDetails
      }

      const addressesList = () => {
        return curatedAddresses.map((item) => {
          let addrDetailed = {
            streetNum: item.node.street_number,
            streetName: item.node.street_name,
            streetPostal: item.node.street_postal_code
          }

          return `${addrDetailed.streetNum} ${addrDetailed.streetName} St, ${addrDetailed.streetPostal}`
        })
      }

      // console.log(JSON.stringify(getLength))

      return {
        curatedAddresses,
        city : cityNames(),
        addressesList: addressesList(),
        getLength
      }
    },
    contactsColl() {
      const getEdgesExternal = this.lotDetails.parking_lots_external_contactsCollection
      const curatedExternalContacts = [...getEdgesExternal.edges]

      const getEdgesInternal = this.lotDetails.parking_lots_internal_contactsCollection
      const curatedInternalContacts = [...getEdgesInternal.edges]

      return {
        curatedExternalContacts,
        curatedInternalContacts
      }
    }
  }
}
</script>
<template>
  <div class="card py-3 px-4 mt-5 mb-6 rounding is-shadowless">

<!--    NAME AND NUMBER-->
    <div class="sticky has-background-white">

      <div class="card-header pt-2 is-shadowless is-inline-tablet-only is-inline-touch ">
        <div class="card-header-title ">
                <p class="title is-5 has-text-weight-semibold">Lot {{lotDetails.parking_lot_number}} - {{lotDetails.parking_lot_name}}</p>
        </div>
        <div style="align-self: center" class="pl-4 is-inline-flex-tablet is-inline-flex-widescreen is-inline-flex-desktop">
          <p style="align-self: center" class="mr-4 is-size-7">Additional details about this parking lot here.</p>
          <div style="align-self: center">
            <p class="button m-1 is-small is-info">Progress</p>
          </div>
        </div>
      </div>
      <div class="is-divider removeMargin"></div>
    </div>



<!--DETAILED CONTENT BODY-->
    <div class="card-content  px-5 py-0 ">
        <div class="block p-0 bordering mb-6" v-for="(addr,index) in addressColl.curatedAddresses">

<!--HEAD: ADDRESS AND LOT DETAILS-->
            <div class="columns is-multiline px-2 py-3 topBordering has-background-white-bis">
              <div class="column">
                <div v-if="addressColl.getLength.edges.length > 1">
                  <p class="heading">
                    Address {{index + 1}}:
                  </p>
                  <p >
                    {{addr.node.street_number}} {{addr.node.street_name}} Street <br> {{addr.node.city_details.city_name}} BC {{addr.node.street_postal_code}}
                  </p>
                </div>
                <div v-if="addressColl.getLength.edges.length === 1">
                  <p class="heading">
                    Address:
                  </p>
                  <p>
                    {{addr.node.street_number}} {{addr.node.street_name}} Street <br> {{addr.node.city_details.city_name}} BC {{addr.node.street_postal_code}}
                  </p>
                </div>
              </div>
              <SimpleDetails :address="addr" :index="index" :contacts="contactsColl"/>

            </div>


  <!-- DAILY MONTHLY-->
            <div class="columns is-multiline px-1 py-4 bottomBordering has-background-white">

              <SimpleDailyRates :daily="addr.node.daily_ratesCollection.edges" :index="index" :cityDetails="addr.node.city_details" />

                <div class="is-divider-vertical addingPadd is-hidden-touch"></div>
                <div class="is-divider is-hidden-tablet mx-5" ></div>

              <SimpleMonthlyRates :monthly="addr.node.monthly_ratesCollection.edges" :cityDetails="addr.node.city_details"/>
            </div>

          </div>

      </div>
  </div>

</template>
<style>
  td, th{
    text-align: center;
    vertical-align: middle !important;
  }

  .rounding {
    border-radius: 10px;
    background-color: white;
    border: 0.1rem solid lightgrey;
  }

  .bordering {
    //border-radius: 12px;
    //border: 0.8rem solid lightgrey;
    //overflow: clip;
    //-webkit-background-clip: padding-box;
    //-moz-background-clip:    padding;
    //background-clip: border-box;
  }

  .addingPadd {
    padding: 1rem;
  }

  .removeMargin{
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }

  .test {
    min-height: 105px
  }




</style>