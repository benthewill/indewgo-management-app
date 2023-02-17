<script lang="ts" setup>
</script>

<template>

  <div class="content-wrapper">
    <div>
      <Header />
      <div class="section p-5">
        <NuxtPage />
      </div>
    </div>
  </div>

</template>



<style lang="css">


html,body{
  min-height: 100vh;
  background-color: #fbfbfb;
}
.content-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.footerContent{
  flex-shrink: 0;
  margin-top: auto;
  margin-bottom: 0;

}
#__nuxt{
  min-height: 100vh;
}

.topBordering{
  border-radius: 10px 10px 0px 0px;
  border-top: 0.1rem solid lightgrey;
  border-left: 0.1rem solid lightgrey;
  border-right: 0.1rem solid lightgrey;
  border-bottom: 0.1rem solid lightgrey;

}

.bottomBordering{
  border-radius: 0px 0px 10px 10px;
  border-bottom: 0.1rem solid lightgrey;
  border-left: 0.1rem solid lightgrey;
  border-right: 0.1rem solid lightgrey;

}

.cleanBordering{
  border-radius: 15px;
  border: 0.05rem solid lightgrey;
}

.sticky{
  position: sticky;
  top: 8%;
  z-index: 999;
}

.sticky-top{
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
