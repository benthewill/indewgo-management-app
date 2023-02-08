import { withCtx, createVNode, unref, createTextVNode, withDirectives, vModelText, vModelCheckbox, useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, i as defineStore, s as storeToRefs } from '../server.mjs';
import { GraphQLClient } from 'graphql-request';
import gql from 'graphql-tag';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import 'defu';
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

const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card py-3 px-4 mt-5 mb-6 rounding is-shadowless" }, _attrs))}><div class="card-header pt-2 is-shadowless"><div class="card-header-title">`);
  ssrRenderSlot(_ctx.$slots, "header", {}, () => {
    _push(` Insert Header Content Here `);
  }, _push, _parent);
  _push(`</div></div><div class="card-content px-5 pb-5">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, () => {
    _push(` Insert Body Here `);
  }, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/Card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const Card = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block px-2 py-5 cleanBordering" }, _attrs))}><p class="subtitle is-5 has-text-weight-semibold pl-3 pb-0 has-text-grey">`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`</p><div class="px-3">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/general/InnerCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const InnerCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const InnerCard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: InnerCard
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: [`streetNumber`, `streetName`, `postalCode`],
  data() {
    return {
      value: [],
      source: [
        "Underground",
        "Surface"
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormKit = resolveComponent("FormKit");
  _push(`<!--[--><div class="field is-horizontal"><div class="field-label is-normal"><label class="label">Address</label></div><div class="field-body"><div class="field is-horizontal"><div class="field-body"><div class="field"><p class="control"><input class="input" size="1" placeholder="1140"${ssrRenderAttr("value", _ctx.streetNumber)}></p><p class="help">Street Number</p></div><div class="field"><p class="control"><input class="input" size="50" placeholder="West Pender"${ssrRenderAttr("value", _ctx.streetName)}></p><p class="help">Street Name</p></div></div></div></div></div><div class="field is-horizontal"><div class="field-label"></div><div class="field-body"><div class="field"><p class="control"><input class="input" size="1"${ssrRenderAttr("value", _ctx.postalCode)}></p><p class="help">Postal Code</p></div><div class="field"><div class="select"><p class="control"><select><option value="1">Pelican Town</option><option value="2">Sulani Island</option><option value="3">Komorebi Village</option><option value="4">Star Beach</option><option value="5">Homebound Mountain</option><option value="6">Calico Desert</option></select></p><p class="help">City</p></div></div></div></div><div class="field is-horizontal"><div class="field-label"><label class="label"> Details </label></div><div class="field-body"></div></div>`);
  _push(ssrRenderComponent(_component_FormKit, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mutation/elements/address.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const address = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1
}, Symbol.toStringTag, { value: "Module" }));
const useNewParkingLotStore = defineStore("newLot", {
  state: () => {
    return {
      general: {
        storedLotName: null,
        storedLotNumber: null
      },
      checks: {
        hasMultipleAddresses: false
      },
      address: {
        storedLotStreetNumber: null,
        storedLotStreetName: null,
        storedLotStreetPostal: null
      }
    };
  },
  actions: {
    async mutateChecks(opt, newStats) {
      this.checks[opt] = newStats;
    },
    async mutateData() {
      const endpoint = "https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1";
      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8",
          authorization: "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8"
        }
      });
      const newGeneralLot = gql`
                mutation newLot ($newName: String, $newNum: Int) {
                    insertIntoparking_lots_generalCollection(
                        objects: { parking_lot_name: $newName, parking_lot_number: $newNum }
                    ) {
                        records {
                            parking_lot_id
                            parking_lot_name
                            parking_lot_number
                        }
                    }
                }
            `;
      let generalVariables = {
        newName: this.general.storedLotName,
        newNum: this.general.storedLotNumber
      };
      const newAddressesDetails = gql`
                mutation newAddressesRequest ($newAddresses: [parking_lots_addressInsertInput!]!) {
                    insertIntoparking_lots_addressCollection(objects: $newAddresses) {
                        records {
                            address_id
                            parking_lot_id
                            street_name
                            street_number
                        }
                    }
                }
            `;
      let addressesVariables = {
        "newAddresses": [
          {
            "parking_lot_id": 0,
            "street_number": this.address.storedLotStreetNumber,
            "street_name": this.address.storedLotStreetName,
            "street_postal_code": this.address.storedLotStreetPostal
          }
        ]
      };
      await graphQLClient.request(newGeneralLot, generalVariables).then(async (res) => {
        console.log(res.insertIntoparking_lots_generalCollection.records[0].parking_lot_id);
        addressesVariables.newAddresses[0].parking_lot_id = res.insertIntoparking_lots_generalCollection.records[0].parking_lot_id;
        let addressData = await graphQLClient.request(newAddressesDetails, addressesVariables);
        console.log(addressData);
      });
    }
  }
});
const __default__$2 = {
  props: ["formFields"],
  methods: {},
  data() {
    return {};
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "step-one",
  __ssrInlineRender: true,
  setup(__props) {
    const { general, checks, address: address2 } = storeToRefs(useNewParkingLotStore());
    useNewParkingLotStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_general_card = __nuxt_component_0;
      const _component_mutation_elements_address = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_general_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container has-text-centered"${_scopeId}><p class="title has-text-centered"${_scopeId}>Basic Information</p></div>`);
          } else {
            return [
              createVNode("div", { class: "container has-text-centered" }, [
                createVNode("p", { class: "title has-text-centered" }, "Basic Information")
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(InnerCard), null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Parking Lot Information `);
                } else {
                  return [
                    createTextVNode(" Parking Lot Information ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="field is-horizontal"${_scopeId2}><div class="field-body"${_scopeId2}><div class="field"${_scopeId2}><p class="control"${_scopeId2}><input class="input" size="3" placeholder="Parking Lot Number"${ssrRenderAttr("value", unref(general).storedLotNumber)}${_scopeId2}></p><p class="help"${_scopeId2}>Enter Lot Number here</p></div><div class="field"${_scopeId2}><p class="control"${_scopeId2}><input class="input" type="text" size="30" placeholder="Parking Lot Name"${ssrRenderAttr("value", unref(general).storedLotName)}${_scopeId2}></p><p class="help"${_scopeId2}>Enter Lot Name here</p></div></div></div><div class="field"${_scopeId2}><div class="control"${_scopeId2}><label class="checkbox"${_scopeId2}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(checks).hasMultipleAddresses) ? ssrLooseContain(unref(checks).hasMultipleAddresses, null) : unref(checks).hasMultipleAddresses) ? " checked" : ""}${_scopeId2}> Does the Lot have multiple addresses? </label></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "field is-horizontal" }, [
                      createVNode("div", { class: "field-body" }, [
                        createVNode("div", { class: "field" }, [
                          createVNode("p", { class: "control" }, [
                            withDirectives(createVNode("input", {
                              class: "input",
                              size: "3",
                              placeholder: "Parking Lot Number",
                              "onUpdate:modelValue": ($event) => unref(general).storedLotNumber = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(general).storedLotNumber]
                            ])
                          ]),
                          createVNode("p", { class: "help" }, "Enter Lot Number here")
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("p", { class: "control" }, [
                            withDirectives(createVNode("input", {
                              class: "input",
                              type: "text",
                              size: "30",
                              placeholder: "Parking Lot Name",
                              "onUpdate:modelValue": ($event) => unref(general).storedLotName = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(general).storedLotName]
                            ])
                          ]),
                          createVNode("p", { class: "help" }, "Enter Lot Name here")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("div", { class: "control" }, [
                        createVNode("label", { class: "checkbox" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(checks).hasMultipleAddresses = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(checks).hasMultipleAddresses]
                          ]),
                          createTextVNode(" Does the Lot have multiple addresses? ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InnerCard), null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Location Information `);
                } else {
                  return [
                    createTextVNode(" Location Information ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_mutation_elements_address, {
                    "street-number": unref(address2).storedLotStreetNumber,
                    "street-name": unref(address2).storedLotStreetName,
                    "postal-code": unref(address2).storedLotStreetPostal
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_mutation_elements_address, {
                      "street-number": unref(address2).storedLotStreetNumber,
                      "street-name": unref(address2).storedLotStreetName,
                      "postal-code": unref(address2).storedLotStreetPostal
                    }, null, 8, ["street-number", "street-name", "postal-code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(InnerCard), null, {
                header: withCtx(() => [
                  createTextVNode(" Parking Lot Information ")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "field is-horizontal" }, [
                    createVNode("div", { class: "field-body" }, [
                      createVNode("div", { class: "field" }, [
                        createVNode("p", { class: "control" }, [
                          withDirectives(createVNode("input", {
                            class: "input",
                            size: "3",
                            placeholder: "Parking Lot Number",
                            "onUpdate:modelValue": ($event) => unref(general).storedLotNumber = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(general).storedLotNumber]
                          ])
                        ]),
                        createVNode("p", { class: "help" }, "Enter Lot Number here")
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("p", { class: "control" }, [
                          withDirectives(createVNode("input", {
                            class: "input",
                            type: "text",
                            size: "30",
                            placeholder: "Parking Lot Name",
                            "onUpdate:modelValue": ($event) => unref(general).storedLotName = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(general).storedLotName]
                          ])
                        ]),
                        createVNode("p", { class: "help" }, "Enter Lot Name here")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "field" }, [
                    createVNode("div", { class: "control" }, [
                      createVNode("label", { class: "checkbox" }, [
                        withDirectives(createVNode("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ($event) => unref(checks).hasMultipleAddresses = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, unref(checks).hasMultipleAddresses]
                        ]),
                        createTextVNode(" Does the Lot have multiple addresses? ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(InnerCard), null, {
                header: withCtx(() => [
                  createTextVNode(" Location Information ")
                ]),
                content: withCtx(() => [
                  createVNode(_component_mutation_elements_address, {
                    "street-number": unref(address2).storedLotStreetNumber,
                    "street-name": unref(address2).storedLotStreetName,
                    "postal-code": unref(address2).storedLotStreetPostal
                  }, null, 8, ["street-number", "street-name", "postal-code"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="control"><button class="button is-info"> Next </button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mutation/insert/step-one.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const stepOne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const __default__$1 = {
  props: ["formFields"],
  methods: {},
  data() {
    return {};
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "step-three",
  __ssrInlineRender: true,
  setup(__props) {
    const { general, address: address2 } = storeToRefs(useNewParkingLotStore());
    useNewParkingLotStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_general_card = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_general_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="title is-5 has-text-weight-semibold"${_scopeId}>Three</p>`);
          } else {
            return [
              createVNode("p", { class: "title is-5 has-text-weight-semibold" }, "Three")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="field"${_scopeId}><p class="control"${_scopeId}><input class="input" size="3" placeholder="Parking Lot Number"${ssrRenderAttr("value", unref(general).storedLotNumber)}${_scopeId}></p><p class="help"${_scopeId}>Enter Lot Number here</p></div><div class="field"${_scopeId}><p class="control"${_scopeId}><input class="input" type="text" size="30" placeholder="Parking Lot Name"${ssrRenderAttr("value", unref(general).storedLotName)}${_scopeId}></p><p class="help"${_scopeId}>Enter Lot Name here</p></div>`);
          } else {
            return [
              createVNode("div", { class: "field" }, [
                createVNode("p", { class: "control" }, [
                  withDirectives(createVNode("input", {
                    class: "input",
                    size: "3",
                    placeholder: "Parking Lot Number",
                    "onUpdate:modelValue": ($event) => unref(general).storedLotNumber = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(general).storedLotNumber]
                  ])
                ]),
                createVNode("p", { class: "help" }, "Enter Lot Number here")
              ]),
              createVNode("div", { class: "field" }, [
                createVNode("p", { class: "control" }, [
                  withDirectives(createVNode("input", {
                    class: "input",
                    type: "text",
                    size: "30",
                    placeholder: "Parking Lot Name",
                    "onUpdate:modelValue": ($event) => unref(general).storedLotName = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(general).storedLotName]
                  ])
                ]),
                createVNode("p", { class: "help" }, "Enter Lot Name here")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="control"><button class="button is-info"> Next </button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mutation/insert/step-three.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const stepThree = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const __default__ = {
  props: ["formFields"],
  methods: {},
  data() {
    return {};
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "step-two",
  __ssrInlineRender: true,
  setup(__props) {
    const { general, address: address2 } = storeToRefs(useNewParkingLotStore());
    useNewParkingLotStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_general_card = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_general_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="title is-5 has-text-weight-semibold"${_scopeId}>Two</p>`);
          } else {
            return [
              createVNode("p", { class: "title is-5 has-text-weight-semibold" }, "Two")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="field"${_scopeId}><p class="control"${_scopeId}><input class="input" size="3" placeholder="Parking Lot Number"${ssrRenderAttr("value", unref(general).storedLotNumber)}${_scopeId}></p><p class="help"${_scopeId}>Enter Lot Number here</p></div><div class="field"${_scopeId}><p class="control"${_scopeId}><input class="input" type="text" size="30" placeholder="Parking Lot Name"${ssrRenderAttr("value", unref(general).storedLotName)}${_scopeId}></p><p class="help"${_scopeId}>Enter Lot Name here</p></div>`);
          } else {
            return [
              createVNode("div", { class: "field" }, [
                createVNode("p", { class: "control" }, [
                  withDirectives(createVNode("input", {
                    class: "input",
                    size: "3",
                    placeholder: "Parking Lot Number",
                    "onUpdate:modelValue": ($event) => unref(general).storedLotNumber = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(general).storedLotNumber]
                  ])
                ]),
                createVNode("p", { class: "help" }, "Enter Lot Number here")
              ]),
              createVNode("div", { class: "field" }, [
                createVNode("p", { class: "control" }, [
                  withDirectives(createVNode("input", {
                    class: "input",
                    type: "text",
                    size: "30",
                    placeholder: "Parking Lot Name",
                    "onUpdate:modelValue": ($event) => unref(general).storedLotName = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(general).storedLotName]
                  ])
                ]),
                createVNode("p", { class: "help" }, "Enter Lot Name here")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="control"><button class="button is-info"> Next </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mutation/insert/step-two.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stepTwo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { Card as C, InnerCard$1 as I, __nuxt_component_0 as _, _sfc_main$2 as a, _sfc_main as b, _sfc_main$1 as c, address as d, stepThree as e, stepTwo as f, stepOne as s };
//# sourceMappingURL=step-two.a57ece87.mjs.map
