<script lang="ts">
export default {
  data() {
    return {
      isActive: false,
      checkData: [1,2,3,4,5]

    }
  },
  computed: {

  }
}
</script>

<template>
  <div>
    <div style="background-color: #ededf0" class="block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top">
      <div class="level ">
        <div class="level-left">
          <div class="level-item">
            <p>
              <span class="title is-5 is-align-content-center">
                Parking Lots Management
              </span>
              <span class="is-size-7 ">
                <br>Details about the app here or other important news.
              </span>
            </p>
          </div>
        </div>
        <div class="level-right">

          <div class="level-item is-hidden-desktop">

            <div class="control">
              <input class="input is-small is-light" type="text" placeholder="🔎 Search Here">
            </div>

            <div class="dropdown is-right mx-3" :class="{'is-active': isActive}">
              <div class="dropdown-trigger">
                <button class="button is-small is-info" aria-haspopup="true" aria-controls="dropdown-menu2" @click="isActive = !isActive">
                  <span class="is-size-7">...</span>
                </button>
              </div>
              <div class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    Filter
                  </a>
                  <a class="dropdown-item">
                    Sort
                  </a>
                  <a class="dropdown-item">
                    Func
                  </a>
                  <hr class="dropdown-divider">
<!--                  <NuxtLink to="/parkingLots/functions/addNewLot">-->
<!--                    <a class="dropdown-item">Add Lot</a>-->
<!--                  </NuxtLink>-->
                  <a class="dropdown-item">Edit Mode</a>
                </div>
              </div>
            </div>
          </div>



          <div class="level-item is-hidden-touch">
            <div class="control mx-1">
              <input class="input is-small is-light" type="text" placeholder="🔎 Search Here">
            </div>
          </div>


          <div class="level-item is-hidden-touch ">
            <a class="button is-info is-small has-text-link-dark is-inverted mx-1">Filter</a>
            <a class="button is-info is-small has-text-link-dark is-inverted mx-1">Sort</a>
            <a class="button is-info is-small has-text-link-dark is-inverted mx-1">Func</a>
          </div>


<!--          <div class="level-item is-hidden-touch ">-->
<!--            <a class="button is-info is-small has-text-link-light mx-1">Edit Mode</a>-->
<!--            <NuxtLink to="/parkingLots/functions/addNewLot">-->
<!--              <a class="button is-info is-small has-text-link-light mx-1">Add Lot</a>-->
<!--            </NuxtLink>-->
<!--          </div>-->
        </div>




      </div>
    </div>
    <NuxtPage />
    <div v-if="checkData" class="section px-1 pt-0 is-shadowless">
      <p v-for="item in checkData">{{item}}</p>
    </div>

  </div>
</template>

<style>
</style>