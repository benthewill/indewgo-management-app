import {GraphQLClient} from "graphql-request";
import gql from "graphql-tag";

export default defineEventHandler((event) => {
    async function main() {
        const endpoint= 'https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1'
        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8',
                authorization: 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8'
            }
        })

        // Query Body from the ../graphql/queries/queries.js file
        const getLotsHome = gql`
            query getLots ($after: Cursor ){
                parking_lots_generalCollection (after: $after orderBy: {parking_lot_number: AscNullsFirst}){
                    edges {
                        node {
                            parking_lot_name
                            parking_lot_number
                            parking_lot_id
                            parking_lots_addressCollection{
                                edges{
                                    node{
                                        address_id
                                        street_number
                                        street_name
                                        street_postal_code
                                        gated
                                        parking_lot_type
                                        parking_lots_address_time_availabilitiesCollection{
                                            edges {
                                                node{
                                                    day_of_the_week
                                                    available_from
                                                    available_to
                                                }
                                            }
                                        }
                                        city_details{
                                            city_name
                                            provincial_transport_tax
                                            goods_and_services_tax
                                            additional_tax
                                            patrol_jurisdiction
                                        }
                                        daily_ratesCollection{
                                            edges{
                                                node{
                                                    duration
                                                    base_price
                                                    rate_allowance
                                                    daily_rates_time_availabilitiesCollection{
                                                        edges {
                                                            node {
                                                                available_from
                                                                available_to
                                                                day_of_the_week
                                                            }
                                                        }
                                                    }
                                                    daily_rate_payment_methodsCollection{
                                                        edges{
                                                            node{
                                                                daily_rate_payment_method_types{
                                                                    payment_method_type_name
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        monthly_ratesCollection{
                                            edges{
                                                node{
                                                    base_price
                                                    monthly_rates_type{
                                                        rate_name
                                                        rate_type_details
                                                    }
                                                    activation_fee
                                                    rate_allowance
                                                    clearance_levels
                                                    clearance_lot_types
                                                    rate_details
                                                    monthly_rates_time_availabilitiesCollection{
                                                        edges {
                                                            node {
                                                                day_of_the_week
                                                                available_from
                                                                available_to
                                                            }
                                                        }
                                                    }
                                                    monthly_rates_confirmation_externalCollection{
                                                        edges{
                                                            node{
                                                                request_method
                                                                external_contacts{
                                                                    first_name
                                                                    middle_name
                                                                    last_name
                                                                    title
                                                                    contact_email
                                                                }
                                                            }
                                                        }
                                                    }
                                                    monthly_rates_confirmation_internalCollection{
                                                        edges{
                                                            node{
                                                                request_method
                                                                estimated_duration
                                                                internal_members{
                                                                    first_name
                                                                    middle_name
                                                                    last_name
                                                                    title
                                                                    contact_email
                                                                }
                                                            }
                                                        }
                                                    }
                                                    monthly_rates_accessCollection{
                                                        edges {
                                                            node {
                                                                access_method_id
                                                                parking_lots_access_methods {
                                                                    method_name
                                                                    method_usage
                                                                    method_details
                                                                    parking_lots_access_types {
                                                                        access_name
                                                                    }
                                                                }
                                                                monthly_rates_access_activation_internalCollection{
                                                                    edges {
                                                                        node {
                                                                            internal_members {
                                                                                internal_departments {
                                                                                    department_name
                                                                                }
                                                                                first_name
                                                                                middle_name
                                                                                last_name
                                                                                title
                                                                                contact_email
                                                                            }
                                                                            request_method
                                                                            estimated_duration
                                                                        }
                                                                    }
                                                                }
                                                                monthly_rates_access_activation_externalCollection{
                                                                    edges {
                                                                        node{
                                                                            external_contacts {
                                                                                additional_details
                                                                                first_name
                                                                                middle_name
                                                                                last_name
                                                                                title
                                                                                contact_email
                                                                            }
                                                                            request_method
                                                                            estimated_duration
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            parking_lots_external_contactsCollection{
                                edges{
                                    node{
                                        parking_lots_contact_types{
                                            contact_type_name
                                            contact_type_responsibility
                                        }
                                        external_contacts{
                                            first_name
                                            middle_name
                                            last_name
                                            title
                                            contact_email
                                            contact_phone
                                            contact_ext
                                        }
                                    }
                                }
                            }
                            parking_lots_internal_contactsCollection{
                                edges{
                                    node{
                                        parking_lots_contact_types{
                                            contact_type_name
                                            contact_type_responsibility
                                        }
                                        internal_members{
                                            first_name
                                            middle_name
                                            last_name
                                            title
                                            contact_email
                                            contact_phone
                                            contact_ext
                                        }
                                    }
                                }
                            }
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                    }
                }
            }
        `

        let currentPaging = true
        let nextCursor = null
        let arr = []

        while(currentPaging) {
            const data:any = await graphQLClient.request(getLotsHome, {
                after: nextCursor
            })
            nextCursor = data.parking_lots_generalCollection.pageInfo.endCursor
            arr.push(...data.parking_lots_generalCollection.edges)
            currentPaging = data.parking_lots_generalCollection.pageInfo.hasNextPage
        }
        // console.log(arr)

        return arr
    }

    return main()
})