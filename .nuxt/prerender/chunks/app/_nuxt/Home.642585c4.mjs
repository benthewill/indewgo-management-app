import { j as defineStore, s as storeToRefs, i as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, withCtx, createVNode, unref, useSSRContext } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unctx/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ufo/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/h3/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@vueuse/shared/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/defu/dist/defu.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/graphql-request/dist/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/destr/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/scule/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ohash/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/radix3/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/pathe/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unified/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark-util-character/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-emoji/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-slug/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-external-links/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-gfm/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-raw/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-parse/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-rehype/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/detab/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unist-builder/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/mdurl/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/slugify/slugify.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unist-util-position/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/html-tags/index.js';

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
      const _component_NuxtLink = __nuxt_component_0$1;
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

export { _sfc_main as default };
//# sourceMappingURL=Home.642585c4.mjs.map
