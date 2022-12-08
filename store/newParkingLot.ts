import {defineStore} from 'pinia'
import {integer} from "vscode-languageserver-types";
import {GraphQLClient} from "graphql-request";
import gql from "graphql-tag";

export const useNewParkingLotStore = defineStore('newLot', {
    state : () => {
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
        }
    },
    actions: {
        async mutateData() {
            const endpoint= 'https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1'
            const graphQLClient = new GraphQLClient(endpoint, {
                headers: {
                    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8',
                    authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8'
                }
            })

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
            `

            let generalVariables = {
                newName: this.general.storedLotName,
                newNum: this.general.storedLotNumber
            }

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
            `

            let addressesVariables = {
                "newAddresses": [
                    {
                        "parking_lot_id": 0,
                        "street_number": this.address.storedLotStreetNumber,
                        "street_name": this.address.storedLotStreetName,
                        "street_postal_code": this.address.storedLotStreetPostal
                    }
                ]
            }

            const data = await graphQLClient.request(newGeneralLot, generalVariables)
                .then(async (res) => {
                    console.log(res.insertIntoparking_lots_generalCollection.records[0].parking_lot_id)
                    addressesVariables.newAddresses[0].parking_lot_id = res.insertIntoparking_lots_generalCollection.records[0].parking_lot_id

                    let addressData = await graphQLClient.request(newAddressesDetails, addressesVariables)

                    console.log(addressData)
                })

        }

    }
})
