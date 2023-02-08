export default (timeFrom:string, timeTo:string, verbalizedDays:any, dayLength:any) => {

    const conversion = (x:any,y:any,z:any) => timeConversion(x,y,z)
    let convertTo12 = (instance:string) => conversion(instance, '24hr', {
        timeFormat: '12hr',
        stringFormat: 'literal'
    })

    let hourFrom = Number(timeFrom.slice(0,2))
    let minuteFrom = Number(timeFrom.slice(3,5))
    let hourTo = Number(timeTo.slice(0,2))
    let minuteTo = Number(timeTo.slice(3,5))

    if ((hourFrom === 0 && minuteFrom === 0 && hourTo === 0 && minuteTo === 0) && dayLength.length ===7 ) {
        return '24/7'
    } else {
        return `${convertTo12(timeFrom)} to ${convertTo12(timeTo)}, ${verbalizedDays}`
    }
}