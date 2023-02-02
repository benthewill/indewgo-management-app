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
            address: {
                amount: 1,
                list: [
                    {
                        storedIndex: 1,
                        storedAddressID: <any>null,
                        storedLotStreetNumber: null,
                        storedLotStreetName: null,
                        storedLotStreetPostal: null,
                        storedCityID: null
                    }
                ]
            }
        }
    },
    actions: {
        async mutateChecks(opt:string, newStats:any) {
            // @ts-ignore
            this.checks[opt] = newStats
        },
        async incrementAddress() {
            this.address.amount++
            this.address.list.push({
                storedIndex: this.address.amount,
                storedAddressID: <any>null,
                storedLotStreetNumber: null,
                storedLotStreetName: null,
                storedLotStreetPostal: null,
                storedCityID: null
            })
        },
        async mutateGeneral() {
            this.general.storedLotID = await addGeneralInfo(this.general.storedLotName, this.general.storedLotNumber)
        },
        async mutateLocations() {
            let responseIDs = await addAddresses(this.address.list, this.general.storedLotID)
            for (let i = 0; i < responseIDs.length; i++) {
                this.address.list[i].storedAddressID = responseIDs[i].address_id
            }
        },
        async mutateFinal() {
            await this.mutateGeneral()
            await this.mutateLocations()
        }

    }
})
