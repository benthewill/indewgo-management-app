import {defineStore} from "pinia";

const getCities = async () => {
    return <any[]> await $fetch('/api/fetchingCityDetails').catch(e => console.log(e))
}

export const useCitiesStore = defineStore('allCities', {
    state: () => {
        return {
            cityNames:<any[]> []
        }
    },
    actions: {
        async getAllCities() {
            const data = await getCities()
            let arranged = data.map((item) => {
                return {
                    label: item.node.city_name,
                    value: item.node.city_id
                }
            })
            this.cityNames = arranged
        }
    }
})