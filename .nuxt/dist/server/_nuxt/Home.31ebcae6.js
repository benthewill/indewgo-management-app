import { i as defineStore, s as storeToRefs, h as __nuxt_component_0 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./Rows.61da851e.js";
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
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
const reqData = async () => {
  return await $fetch("/api/fetchingParkingLots").catch((e) => console.log(e));
};
const storeParkingLots = defineStore("parkingLots", {
  state: () => ({
    checkData: [],
    loading: true,
    error: null
  }),
  actions: {
    async fetchData() {
      this.checkData = [];
      this.loading = true;
      try {
        this.checkData = await reqData().then((data) => data);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  }
});
const __default__ = {
  data() {
    return {
      isActive: false
    };
  },
  computed: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const { checkData, loading, error } = storeToRefs(storeParkingLots());
    const { fetchData } = storeParkingLots();
    fetchData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_tables_rows = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "background-color": "#ededf0" })}" class="block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top"><div class="level"><div class="level-left"><div class="level-item"><p><span class="title is-5 is-align-content-center"> Parking Lots Management </span><span class="is-size-7"><br>Details about the app here or other important news. </span></p></div></div><div class="level-right"><div class="level-item is-hidden-touch"><div class="control mx-1"><input class="input is-small is-light" type="text" placeholder="\u{1F50E} Search Here"></div></div><div class="level-item is-hidden-touch"><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Filter</a><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Sort</a><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Func</a></div><div class="level-item is-hidden-touch"><a class="button is-info is-small has-text-link-light mx-1">Edit Mode</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ParkingLots/functions/addNewLot",
        class: "button is-info is-small has-text-link-light mx-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add Lot `);
          } else {
            return [
              createTextVNode(" Add Lot ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (unref(checkData)) {
        _push(`<div class="section px-1 pt-0 is-shadowless"><!--[-->`);
        ssrRenderList(unref(checkData), (lot) => {
          _push(ssrRenderComponent(_component_tables_rows, {
            "lot-details": lot.node
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="section px-1 pt-0"><p class="title is-5 has-text-centered">Loading Data</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ParkingLots/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Home.31ebcae6.js.map
