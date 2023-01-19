import gql from "graphql-tag";
import {GraphQLClient} from "graphql-request";

export default defineEventHandler((event) => {
    async function main(a:any) {
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

        let variables = {
            newName: "Svartalheim",
            newNum: 13002
        }

        const data = await graphQLClient.request(newGeneralLot, variables)
        console.log(data)
    }

    return main(event)
})