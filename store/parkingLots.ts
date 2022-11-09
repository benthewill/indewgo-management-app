import {defineStore} from "pinia";

const reqData = async () => {
    return <any[]>await $fetch('/api/fetchingParkingLots').catch((e:any) => console.log(e))
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
                // @ts-ignore
                this.checkData = await reqData()
                    .then(data => data)
            } catch (error:any) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})