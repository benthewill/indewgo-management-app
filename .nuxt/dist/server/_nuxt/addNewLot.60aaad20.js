import _sfc_main$1 from "./step-one.fb9d6641.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
import "graphql-request";
import "graphql-tag";
const __default__ = {
  data() {
    return {
      step: 1
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "addNewLot",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_mutation_insert_step_one = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "background-color": "#ededf0" },
        class: "block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top"
      }, _attrs))}><div class="level"><div class="level-left"><div class="level-item"><p><span class="title is-5 is-align-content-center"> Insert New Parking Lot </span><span class="is-size-7"><br>Details about the app here or other important news. </span></p></div></div><div class="level-right"><div class="level-item">`);
      if (_ctx.step === 1) {
        _push(`<span class="icon"><ion-icon name="ellipse-outline"></ion-icon></span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step > 1) {
        _push(`<span class="icon"><ion-icon name="ellipse"></ion-icon></span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step < 3) {
        _push(`<span class="icon"><ion-icon name="ellipse-outline"></ion-icon></span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step >= 3) {
        _push(`<span class="icon"><ion-icon name="ellipse"></ion-icon></span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step < 4) {
        _push(`<span class="icon"><ion-icon name="ellipse-outline"></ion-icon></span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step >= 4) {
        _push(`<span class="icon"><ion-icon name="ellipse"></ion-icon></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (_ctx.step === 1) {
        _push(`<div class="section px-1 pt-0 is-shadowless"><p class="title is-5">Page One</p>`);
        _push(ssrRenderComponent(_component_mutation_insert_step_one, null, null, _parent));
        _push(`<button>Next Step</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step === 2) {
        _push(`<div class="section px-1 pt-0 is-shadowless"><p class="title is-5">Page Two</p><button>Next Step</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step === 3) {
        _push(`<div class="section px-1 pt-0 is-shadowless"><p class="title is-5">Page Three</p><button>Next Step</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ParkingLots/functions/addNewLot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=addNewLot.60aaad20.js.map
