<script>
export default {
  setup() {
    const verbalizeDays = (x) => daysOfWeek(x)
    const timeConvert = (instance) => timeConversion(instance,'24hr',timeOutputObject)
    const timeOutputObject = {
      timeFormat: '12hr',
      stringFormat: 'literal'
    }


    return {
      verbalizeDays,
      timeConvert
    }
  },
  props: ['address', 'index', 'contacts']
}

</script>

<template>
  <div class="column is-three-quarters-widescreen is-full-desktop is-full-tablet">

      <div class="columns">

        <div class="column">
          <p>
            <span class="heading ">
              Gated:<br>
            </span>
            <span v-if="address.node.gated">
              True
            </span>
            <span v-if="!address.node.gated">
              False
            </span>
          </p>
        </div>

        <div class="column">
          <p>
            <span class="heading">
              Lot Type:<br>
            </span>
            <span v-for="n in address.node.parking_lot_type">
              {{ n }}&hairsp;
            </span>
          </p>
        </div>

        <div class="column">
          <p>
            <span class="heading">
              Hours:<br>
            </span>
            <span v-if="address.node.gate_hour_from === null && address.node.gate_hour_to === null">Open 24 Hours</span>
            <span v-if="address.node.gate_hour_from && address.node.gate_hour_to">
              {{timeConvert(address.node.gate_hour_from)}} to {{ timeConvert(address.node.gate_hour_to) }}
            </span>
          </p>
        </div>

        <div class="column">
          <p>
            <span class="heading">
              Days:<br>
            </span>
            <span>
              {{verbalizeDays(address.node.open_days).period}}
            </span>
          </p>
        </div>

        <div class="column">
          <p>
            <span class="heading">
              Lot Contacts:<br>
            </span>
            <span v-for="ext in contacts.curatedExternalContacts">
              {{ext.node.external_contacts.first_name}} {{ext.node.external_contacts.last_name}}<br>
            </span>
          </p>
        </div>

        <div class="column">
          <p>
            <span class="heading">
              Lot Managers:<br>
            </span>
            <span v-for="ext in contacts.curatedInternalContacts">
              {{ext.node.internal_members.first_name}} {{ext.node.internal_members.last_name}}<br>
            </span>
          </p>
        </div>


      </div>
  </div>
</template>

<style>

</style>
