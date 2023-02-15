import {GraphQLClient} from "graphql-request";
import gql from "graphql-tag";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    async function main(availabilitiesArr:any[], addrID:number) {
        const endpoint= 'https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1'
        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8',
                authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8'
            }
        })

        // GRAPHQL QUERY
        const newAddressesDetails = gql`
            mutation newTimes ($availability: [parking_lots_address_time_availabilitiesInsertInput!]!) {
                insertIntoparking_lots_address_time_availabilitiesCollection(objects: $availability) {
                    records {
                        address_time_availability_id
                        day_of_the_week
                        available_from
                        available_to
                    }
                }
            }

        `
    }

    return main(body.availabilities, body.addressID)
})