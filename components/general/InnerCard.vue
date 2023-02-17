<template>
  <div class="block px-4 py-5 cleanBordering">
    <p class="subtitle is-5 has-text-weight-semibold px-3 pb-0 has-text-grey">
      <slot name="header"></slot>
    </p>
    <div class="block px-3 py-3" >
      <slot name="content"></slot>
    </div>
  </div>
</template>