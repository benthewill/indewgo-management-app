import { i as defineStore, s as storeToRefs, h as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './Rows.61da851e.mjs';
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import 'graphql-request';
import '../../nitro/stormkit.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'html-tags';

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

export { _sfc_main as default };
//# sourceMappingURL=Home.31ebcae6.mjs.map
