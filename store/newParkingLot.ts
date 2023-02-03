import {defineStore} from 'pinia'



const addGeneralInfo = async (inputName:any, inputNumber:number|null) => {
    return <any[]>await $fetch('/api/mutation/newElements/general',
        {
            method: 'post',
            body : {
                newName: inputName,
                newNumber: inputNumber
            }
        }).catch((e) => console.log(e))
}

const addAddresses = async (inputAddresses:any[],inputParkingLotID:number) => {
    return <any[]>await $fetch('/api/mutation/newElements/location',
        {
            method: 'post',
            body : {
                parkingLotID: inputParkingLotID,
                addresses: inputAddresses
            }
        }).catch((e)=>console.log(e))
}

export const useNewParkingLotStore = defineStore('newLot', {
    state : () => {
        return {
            general: {
                storedLotName: null,
                storedLotNumber:null,
                storedLotID:<any> null
            },
            checks: {
                hasMultipleAddresses: false
            },
            addresses: [
                    {
                        storedAddressID: <any>null,
                        storedLotStreetNumber: null,
                        storedLotStreetName: null,
                        storedLotStreetPostal: null,
                        storedCityID: null,
                        storedLotAccessInformation: {
                            gated: true,
                            hours: {
                                from: null,
                                to: null
                            }
                        }
                    }
                ]
            }
    },
    actions: {
        async mutateChecks(opt:string, newStats:any) {
            // @ts-ignore
            this.checks[opt] = newStats
        },
        async incrementAddress() {
            this.addresses.push({
                storedAddressID: <any>null,
                storedLotStreetNumber: null,
                storedLotStreetName: null,
                storedLotStreetPostal: null,
                storedCityID: null,
                storedLotAccessInformation: {
                    gated: true,
                    hours: {
                        from: null,
                        to: null
                    }
                }
            })
        },
        async mutateGeneral() {
            this.general.storedLotID = await addGeneralInfo(this.general.storedLotName, this.general.storedLotNumber)
        },
        async mutateLocations() {
            let responseIDs = await addAddresses(this.addresses, this.general.storedLotID)
            for (let i = 0; i < responseIDs.length; i++) {
                this.addresses[i].storedAddressID = responseIDs[i].address_id
            }
        },
        async mutateFinal() {
            await this.mutateGeneral()
            await this.mutateLocations()
        }

    }
})
