export default (hourFrom:number, hourTo:number, verbalizedDays:any, dayLength:any) => {
    let conv = (x:any) => {
        let getNum = x === 0 ? '12 AM' : (x > 12 ? x-12 + " PM" : x + " AM")
        return getNum
    }

    if ((hourFrom === 0 && hourTo === 24) && dayLength.length === 7){
        return `24/7`
    } else if ((hourFrom !== 0 || hourTo !== 24) && dayLength.length === 7) {
        return `${conv(hourFrom)} to ${conv(hourTo)}, ${verbalizedDays}`
    } else {
        return `${conv(hourFrom)} to ${conv(hourTo)}, ${verbalizedDays}`
    }
}