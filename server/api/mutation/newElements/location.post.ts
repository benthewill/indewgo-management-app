import gql from "graphql-tag";
import {GraphQLClient} from "graphql-request";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    async function main(addressesArray:any[],lotID:number) {
        const endpoint= 'https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1'
        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8',
                authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8'
            }
        })

        // GRAPHQL QUERY
        const newAddressesDetails = gql`
            mutation newAddressesRequest ($newAddresses: [parking_lots_addressInsertInput!]!) {
                insertIntoparking_lots_addressCollection(objects: $newAddresses) {
                    records {
                        address_id
                        parking_lot_id
                        street_name
                        street_number
                        city_id
                        parking_lot_type
                        gated
                    }
                }
            }
        `

        let mappedArray = addressesArray.map((item) => {
            return {
                "parking_lot_id": lotID,
                "street_number": Number(item.storedLotStreetNumber),
                "street_name": item.storedLotStreetName,
                "street_postal_code": item.storedLotStreetPostal,
                "city_id": item.storedCityID,
                "gate_hour_from": item.storedLotAccessInformation.from,
                "gate_hour_to": item.storedLotAccessInformation.to
            }
        })

        let addressesVariables = {
            "newAddresses": mappedArray
        }

        return await graphQLClient.request(newAddressesDetails, addressesVariables)
            .then((res) => {
                console.log(res.insertIntoparking_lots_addressCollection.records)
                return res.insertIntoparking_lots_addressCollection.records
            })
    }

    return main(body.addresses, body.parkingLotID)
})