import { j as defineStore, s as storeToRefs, i as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vueuse/shared";
import "vue-router";
import "@vue/devtools-api";
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "background-color": "#ededf0" })}" class="block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top"><div class="level"><div class="level-left"><div class="level-item"><p><span class="title is-5 is-align-content-center"> Parking Lots Management v1.0 </span><span class="is-size-7"><br>Details about the app here or other important news. </span></p></div></div><div class="level-right"><div class="level-item is-hidden-desktop"><div class="control"><input class="input is-small is-light" type="text" placeholder="\u{1F50E} Search Here"></div><div class="${ssrRenderClass([{ "is-active": _ctx.isActive }, "dropdown is-right mx-3"])}"><div class="dropdown-trigger"><button class="button is-small is-info" aria-haspopup="true" aria-controls="dropdown-menu2"><span class="is-size-7">...</span></button></div><div class="dropdown-menu" role="menu"><div class="dropdown-content"><a class="dropdown-item"> Filter </a><a class="dropdown-item"> Sort </a><a class="dropdown-item"> Func </a><hr class="dropdown-divider">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/parkingLots/functions/addNewLot" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="dropdown-item"${_scopeId}>Add Lot</a>`);
          } else {
            return [
              createVNode("a", { class: "dropdown-item" }, "Add Lot")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="dropdown-item">Edit Mode</a></div></div></div></div><div class="level-item is-hidden-touch"><div class="control mx-1"><input class="input is-small is-light" type="text" placeholder="\u{1F50E} Search Here"></div></div><div class="level-item is-hidden-touch"><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Filter</a><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Sort</a><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Func</a></div><div class="level-item is-hidden-touch"><a class="button is-info is-small has-text-link-light mx-1">Edit Mode</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/parkingLots/functions/addNewLot" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="button is-info is-small has-text-link-light mx-1"${_scopeId}>Add Lot</a>`);
          } else {
            return [
              createVNode("a", { class: "button is-info is-small has-text-link-light mx-1" }, "Add Lot")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="section px-1 pt-0 is-shadowless"><!--[-->`);
      ssrRenderList(unref(checkData), (lot) => {
        _push(`<p>${ssrInterpolate(lot)}</p>`);
      });
      _push(`<!--]--></div></div>`);
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
//# sourceMappingURL=Home.642585c4.js.map
