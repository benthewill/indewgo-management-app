import{Q as b,R as w,S as I}from"./entry.6032d723.js";var d=function(){return d=Object.assign||function(n){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},d.apply(this,arguments)},c=new Map,g=new Map,p=!0,m=!1;function h(e){return e.replace(/[\s,]+/g," ").trim()}function _(e){return h(e.source.body.substring(e.start,e.end))}function k(e){var n=new Set,t=[];return e.definitions.forEach(function(a){if(a.kind==="FragmentDefinition"){var s=a.name.value,r=_(a.loc),i=g.get(s);i&&!i.has(r)?p&&console.warn("Warning: fragment with name "+s+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):i||g.set(s,i=new Set),i.add(r),n.has(r)||(n.add(r),t.push(a))}else t.push(a)}),d(d({},e),{definitions:t})}function v(e){var n=new Set(e.definitions);n.forEach(function(a){a.loc&&delete a.loc,Object.keys(a).forEach(function(s){var r=a[s];r&&typeof r=="object"&&n.add(r)})});var t=e.loc;return t&&(delete t.startToken,delete t.endToken),e}function L(e){var n=h(e);if(!c.has(n)){var t=b(e,{experimentalFragmentVariables:m,allowLegacyFragmentVariables:m});if(!t||t.kind!=="Document")throw new Error("Not a valid GraphQL document.");c.set(n,v(k(t)))}return c.get(n)}function o(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];typeof e=="string"&&(e=[e]);var a=e[0];return n.forEach(function(s,r){s&&s.kind==="Document"?a+=s.loc.source.body:a+=s,a+=e[r+1]}),L(a)}function N(){c.clear(),g.clear()}function F(){p=!1}function x(){m=!0}function z(){m=!1}var l={gql:o,resetCaches:N,disableFragmentWarnings:F,enableExperimentalFragmentVariables:x,disableExperimentalFragmentVariables:z};(function(e){e.gql=l.gql,e.resetCaches=l.resetCaches,e.disableFragmentWarnings=l.disableFragmentWarnings,e.enableExperimentalFragmentVariables=l.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=l.disableExperimentalFragmentVariables})(o||(o={}));o.default=o;const u=o,Z=w("newLot",{state:()=>({general:{storedLotName:null,storedLotNumber:null},address:{storedLotStreetNumber:null,storedLotStreetName:null,storedLotStreetPostal:null}}),actions:{async mutateData(){const e="https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1",n=new I.GraphQLClient(e,{headers:{apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8",authorization:"Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8"}}),t=u`
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
            `;let a={newName:this.general.storedLotName,newNum:this.general.storedLotNumber};const s=u`
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
            `;let r={newAddresses:[{parking_lot_id:0,street_number:this.address.storedLotStreetNumber,street_name:this.address.storedLotStreetName,street_postal_code:this.address.storedLotStreetPostal}]};await n.request(t,a).then(async i=>{console.log(i.insertIntoparking_lots_generalCollection.records[0].parking_lot_id),r.newAddresses[0].parking_lot_id=i.insertIntoparking_lots_generalCollection.records[0].parking_lot_id;let f=await n.request(s,r);console.log(f)})}}});export{Z as u};
