<template>
  <div>
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <NuxtLink to="/">
            <p><strong>indewgo.</strong></p>
          </NuxtLink>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-item">
          <NuxtLink to="/ParkingLots/Home">Lots-Table</NuxtLink>
        </div>

      </div>
    </nav>
  </div>
</template>

<style>
  a {
    color: hsl(0deg, 0%, 21%)
  }
  a:hover {
    color: #800080
  }
</style>
