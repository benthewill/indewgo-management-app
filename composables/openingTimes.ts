export default (arr:any) => {
    const timeConvert = (instance:string) => timeConversion(instance, '24hr', {
        timeFormat: '12hr',
        stringFormat: 'literal'
    })

    const days = (arr:any) => daysOfWeek(arr)

    let cleanArr = arr
    let daysArr
    let output:any = {
        days: [],
        hours: [],
        verbalized: '',
        listed: []
    }

    let dow = {
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
        Sun: 7
    }


    if (cleanArr.length === 0) {
        return 'Empty Array'
    }

    // CLEANING ARR FROM EXTRA NODE PROPERTY
    if (arr[0].node) {
        cleanArr = arr.map((i:any) => {
            return {
                "available_from": i.node.available_from,
                "available_to": i.node.available_to,
                "day_of_the_week":i.node.day_of_the_week
            }
        })
    }

    daysArr = cleanArr.map((i:any) => i.day_of_the_week).sort()
    let duplicateDays = !(JSON.stringify(daysArr) === JSON.stringify(Array.from(new Set(daysArr))))
    daysArr = Array.from(new Set(daysArr))

    let daysVerbalized =  days(daysArr).period

    // CHECKING IF ALL DAYS AND HOURS ARE THE SAME
    const checkAllHoursIdentical = cleanArr.every((n:any) => {
        return n.available_from === cleanArr[0].available_from && n.available_to === cleanArr[0].available_to
    })

    const complexListing = (daysInput:any) => {
        let flipIdenticalDays = Object.entries(daysInput).map(([k,v]) => [v,k])
        let tempGrouped = flipIdenticalDays.reduce((acc:any, entry:any) => {
            const grouping = JSON.stringify(entry[0])
            acc[grouping] = acc[grouping] ?? []
            acc[grouping].push(entry[1])
            return acc
        },{})

        let newOutput:any = []

        let tempListed = Object.entries(tempGrouped).map(([k,v]) => {
            let newKey = k.replace(/[\[\]]/g,'')
            // @ts-ignore
            newKey = newKey.split(',')
            // @ts-ignore
            newKey.forEach(i => {
                // @ts-ignore
                newOutput.push({
                    day_of_week: Object.keys(dow).find((item) => {

                        // @ts-ignore
                        return dow[item] == Number(i)
                    }),
                    // @ts-ignore
                    availabilities: v.map((j:any) => {
                        return {
                            from: j.split(' ')[0],
                            to: j.split(' ')[1]
                        }
                    })
                })
            })
            return newKey
        })
        return newOutput
    }

    // IF ALL HOURS ARE THE SAME AMONG THE DAYS
    if (checkAllHoursIdentical) {
        let identicalHoursFrom = timeConvert(cleanArr[0].available_from)
        let identicalHoursTo = timeConvert(cleanArr[0].available_to)

        output.days.push(daysVerbalized)
        output.hours.push(`${identicalHoursFrom} to ${identicalHoursTo}`)

        // IF 24/7
        if (cleanArr[0].available_from === '00:00:00' && cleanArr[0].available_to && cleanArr.length === 7) {
            output.verbalized = 'Open 24/7'

            let newOutput:any = []

            daysArr.forEach(i => {
                newOutput.push({
                    day_of_week: Object.keys(dow).find((item) => {
                        // @ts-ignore
                        return dow[item] == Number(i)
                    }),
                    availabilities: [{
                        from: '00:00:00',
                        to: '00:00:00'
                    }]
                })
            })

            output.listed = newOutput

            return output
        }

        output.hours = output.hours[0] === '12:00 AM to 12:00 AM' ? '24 Hours' : output.hours

        output.verbalized = `${output.days} - ${output.hours}`


        let newOutput:any = []
        daysArr.forEach(i => {
            newOutput.push({
                    day_of_the_week: Object.keys(dow).find((item) => {
                        // @ts-ignore
                        return dow[item] == Number(i)
                    }),
                    availabilities: {
                        from: cleanArr[0].available_from,
                        to: cleanArr[0].available_to
                    }
                }
            )
        })

        output.listed = newOutput

        // IF NOT 24/7
        return output
    } else if (!checkAllHoursIdentical) {
        let identicalDays = cleanArr.reduce((timesGroup:any, entry:any) => {
            const grouping = entry.available_from + ' ' + entry.available_to
            timesGroup[grouping] = timesGroup[grouping] ?? []
            timesGroup[grouping].push(entry.day_of_the_week)
            return timesGroup
        },{})


        // CHECK DUPLICATE DAYS
        // DUPLICATE DAYS
        if (duplicateDays) {
            output.days = daysVerbalized
            output.hours.push(' - Various Hours')
            output.verbalized = output.days + output.hours

            const newOutput = complexListing(identicalDays)

            output.listed = newOutput

        }
        // NO DUPLICATE DAYS AND ONLY 2 VARIATIONS
        else if (!duplicateDays && Object.entries(identicalDays).length < 3) {

            for (const [hourSet,daySet] of Object.entries(identicalDays)) {
                const hourFrom = hourSet.split(' ')[0]
                const hourTo = hourSet.split(' ')[1]
                output.days.push(days(daySet).period)
                output.hours.push(timeConvert(hourFrom) + ' to ' + timeConvert(hourTo))
            }

            let tempHours = output.hours.map((i:any )=> {
                if (i === '12:00 AM to 12:00 AM') return '24 Hours'
                return i
            })

            const newOutput = complexListing(identicalDays)
            output.listed = newOutput


            for (const [i,v] of output.days.entries()) {
                output.verbalized = i+1 === output.days.length ?
                    output.verbalized + v + ' ' + tempHours[i]
                    : output.verbalized + v + ' ' + tempHours[i] + ' and '
            }
        }

        return output
    }
}