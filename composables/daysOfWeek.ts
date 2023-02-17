export default (arr:any) => {

    let dow = {
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
        Sun: 7
    }
    let dowFull = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7
    }

    let output

    const range = (start:any, stop:any, step:any) => Array.from({ length: (stop - start) / step + 1}, (n, i) => start + (i * step));
    const arrFill = range(arr[0],arr[arr.length-1],1)

    function seq(check:any, start:any) {
        let param = {status: true, ends: 0}

        for (let i = start, j = check[start]; i < check.length; i++) {
            if (check[i] !== j) {
                param.status = false
                param.ends = i
                break
            } else {
                param.ends = i
            }
            j++
        }

        return param
    }

    let details = []
    // @ts-ignore
    let getDay = (i:any) => Object.keys(dow).find(key => dow[key] === arr[i])

    let period = `${getDay(0)} to ${getDay(arr.length - 1)}`
    let totalDays = arr.length

    if (JSON.stringify(arrFill) !== JSON.stringify(arr)){
        output = 'skipped'

        let done = false
        let startingPoint = 0

        while (done === false) {
            let checking = seq(arr,startingPoint)
            if (checking.status === false) {
                startingPoint = checking.ends
                details.push(checking.ends)
            } else {
                done = true
            }
        }

        period = `${getDay(0)} to ${getDay(details[0] -1)}, and ${getDay(details[0])} to ${getDay(arr.length - 1)}`

        return {period, totalDays}
    }

    if (arr.length === 7) {
        period = 'Everyday'
    }


    if (arr.length === 1) {
        // @ts-ignore
        period = String(Object.keys(dowFull).find((i:any) => dowFull[i] === arr[0]))
    }

    return {
        period,
        totalDays
    }
}

