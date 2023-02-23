import {defineStore} from 'pinia'
import onChange from 'on-change'

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

enum TimeAvailabilitiesChecks {
    Days = 'days',
    Hours = 'hours'
}

const addressTimeAvailabilitiesObject = {
    dayOfWeek: 0,
    open: false,
    hours: [
        {from: '03:00', to: '23:00'}
    ]
}

const addressObject = {
    storedAddressID: <any>null,
    storedLotStreetNumber: null,
    storedLotStreetName: null,
    storedLotStreetPostal: null,
    storedCityID: null,
    storedLotAccessInformation: {
        gated: true,
        timeAvailabilities: {
            checks: {
                open7Days: false,
                open24Hours: false
            },
            list: []
        }

    }
}

for (let i=1;i<8;i++) {
    let entry = {...addressTimeAvailabilitiesObject}
    entry.dayOfWeek = i
    // @ts-ignore
    addressObject.storedLotAccessInformation.timeAvailabilities.list.push(entry)
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
            addresses: [addressObject],
            logs: {
                addressesTimes: []
            }
        }
    },
    getters: {

    },
    actions: {
        async mutateChecks(opt:string, newStats:any) {
            // @ts-ignore
            this.checks[opt] = newStats
        },
        async incrementAddress() {
            this.addresses.push(addressObject)
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
        },
        async addressTimeChecks(addressIndex:any, checkingType:TimeAvailabilitiesChecks, dayIndex?:number) {

             let replacing = () => {
                // UPDATING THE CACHED VALUE
                for (let i = 0; i < this.logs.addressesTimes.length; i++) {
                    // @ts-ignore
                    if (this.logs.addressesTimes[i].addressIndex === addressIndex) {
                        this.logs.addressesTimes.splice(i,1)
                    }
                }

                let mappedList = JSON.parse(JSON.stringify(this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list))

                let pushToLog =                     // @ts-ignore
                    {
                        addressIndex: addressIndex,
                        availabilities: mappedList
                    }

                // @ts-ignore
                this.logs.addressesTimes.push(pushToLog)
            }

            if (checkingType === 'days') {

                this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.checks.open7Days = !this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.checks.open7Days

                let checkDays = this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.checks.open7Days

                if (checkDays) {

                    replacing()

                    this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list.forEach((item)=> {
                        // @ts-ignore
                        item.open = true
                    })

                    // // @ts-ignore
                    // let daysSet = this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list.map(item => item.dayOfWeek)
                    //
                    // daysSet = Array.from(new Set(daysSet))
                    //
                    // let unavailable = []
                    //
                    // for (let i = 1; i < 8; i++) {
                    //     if (!daysSet.includes(i)) {
                    //         unavailable.push(i)
                    //     }
                    // }
                    //
                    // let newEntries = unavailable.map((item) => {
                    //     let toBeEntried = {...addressTimeAvailabilitiesObject}
                    //     toBeEntried.dayOfWeek = item
                    //     return toBeEntried
                    // })

                    // // @ts-ignore
                    // this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list.push(...newEntries)

                }
                // else if (checkDays === false) {
                //     // CATCHING THE CACHED VALUE
                //     let replaceWithCache = this.logs.addressesTimes.filter((item, id) => {
                //     // @ts-ignore
                //         if (item.addressIndex === addressIndex) {
                //             return item
                //         }
                //     })
                //
                //     replaceWithCache = JSON.parse(JSON.stringify(replaceWithCache))
                //
                //     replacing()
                //
                //     if (this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.checks.open24Hours) {
                //         // AS PER THE DICTATED FUNCTION, CHANGING ALL THE AVAILABILITY(s) INTO TRUE
                //         this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list.forEach((item) => {
                //             // @ts-ignore
                //             item.availability = false
                //         })
                //     } else {
                //         // REPLACING THE ENTRY WITH CACHED VALUE
                //         // @ts-ignore
                //         this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list = replaceWithCache[0].availabilities
                //     }
                // }
            }

            else if (checkingType === 'hours') {

                    replacing()

                    let newArr = [{from: '00:00', to: '00:00'}]

                    // @ts-ignore
                console.log(dayIndex)

                    // @ts-ignore
                this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list[dayIndex].hours = this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list[dayIndex].hours.splice(0,1,...newArr)

                // else {
                //     let replaceWithCache = this.logs.addressesTimes.filter((item, id) => {
                //         // @ts-ignore
                //         if (item.addressIndex === addressIndex) {
                //             return item
                //         }
                //     })
                //
                //     replaceWithCache = JSON.parse(JSON.stringify(replaceWithCache))
                //
                //     replacing()
                //
                //     // REPLACING THE ENTRY WITH CACHED VALUE
                //     // @ts-ignore
                //     this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list = replaceWithCache[0].availabilities
                // }
            }
        },
        async addressTimeEntry(fn:string, addressIndex:number, dayIndex:number, timeIndex?:number) {
            if (fn === 'delete'  && timeIndex != null) {
                // @ts-ignore
                this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list[dayIndex].hours.splice(timeIndex,1)

            } else if (fn === 'add') {
                // @ts-ignore
                this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list[dayIndex].hours = this.addresses[addressIndex].storedLotAccessInformation.timeAvailabilities.list[dayIndex].hours.concat([{from: '03:00', to: '23:00'}])
            }
        }

    }
})
