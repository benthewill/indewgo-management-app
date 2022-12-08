import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { i as defineStore, s as storeToRefs } from '../server.mjs';
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

const useNewParkingLotStore = defineStore("newLot", {
  state: () => {
    return {
      general: {
        storedLotName: null,
        storedLotNumber: null
      },
      address: {
        storedLotStreetNumber: null,
        storedLotStreetName: null,
        storedLotStreetPostal: null
      }
    };
  },
  actions: {
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
const __default__ = {
  props: ["formFields"],
  methods: {
    updateStore(name, num) {
    }
  },
  data() {
    return {};
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "step-one",
  __ssrInlineRender: true,
  setup(__props) {
    const { general, address } = storeToRefs(useNewParkingLotStore());
    useNewParkingLotStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card py-3 px-4 mt-5 mb-6 rounding is-shadowless" }, _attrs))}><div class="field"><label class="label">Parking Lot Name ( ${ssrInterpolate(unref(general).storedLotName)} )</label><div class="control"><input class="input" type="text" placeholder="Type Name Here"${ssrRenderAttr("value", unref(general).storedLotName)}></div></div><div class="field"><label class="label">Parking Lot Number ( ${ssrInterpolate(unref(general).storedLotNumber)} )</label><div class="control"><input class="input" type="number" placeholder="Type Number Here"${ssrRenderAttr("value", unref(general).storedLotNumber)}></div></div><div class="field"><label class="label">Street Number ( ${ssrInterpolate(unref(address).storedLotStreetNumber)} )</label><div class="control"><input class="input" type="number" placeholder="Street Number Here"${ssrRenderAttr("value", unref(address).storedLotStreetNumber)}></div></div><div class="field"><label class="label">Street Name ( ${ssrInterpolate(unref(address).storedLotStreetName)} )</label><div class="control"><input class="input" type="text" placeholder="Type Number Here"${ssrRenderAttr("value", unref(address).storedLotStreetName)}></div></div><div class="field"><label class="label">Street Postal Code ( ${ssrInterpolate(unref(address).storedLotStreetPostal)} )</label><div class="control"><input class="input" type="text" placeholder="Type Number Here"${ssrRenderAttr("value", unref(address).storedLotStreetPostal)}></div></div><button> Add </button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mutation/insert/step-one.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-one.fb9d6641.mjs.map
