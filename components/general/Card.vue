<template>
  <div class="card py-3 px-4 mt-5 mb-6 rounding is-shadowless">

    <div class="card-header pt-2 is-shadowless">
      <div class="card-header-title">
        <slot name="header">
          Insert Header Content Here
        </slot>
      </div>
    </div>

    <div class="card-content px-5 pb-5">
      <slot name="content">
        Insert Body Here
      </slot>
    </div>

  </div>
</template>