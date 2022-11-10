<script>
  export default {
    setup() {
      // const testHello = async () => {
      //   return await $fetch('/api/testFunction').then((data) => data)
      // }

      const {data: hello} =  useFetch('/api/testFunction')

      return {
        hello
      }
    }
  }
</script>

<template>
  <div>
    <p>This is Router Test. I'm an Index Page</p>
    <p>Version 2.0:  </p>
    <p>{{hello}}</p>
  </div>
</template>