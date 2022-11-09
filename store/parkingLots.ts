import {defineStore} from "pinia";

const reqData = async () => {
    return <any[]>await $fetch('/api/fetchingParkingLots').catch(e => console.log(e))
}

export const storeParkingLots = defineStore('parkingLots', {
    state: () => ({
        checkData: [],
        loading: true,
        error: null
    }),
    actions: {
        async fetchData() {
            this.checkData = []
            this.loading = true
            try {
                this.checkData = await reqData()
                    .then(data => data)
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})