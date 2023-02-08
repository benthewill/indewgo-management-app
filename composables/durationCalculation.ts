export default (time:any) => {
    function timeToDuration(item:any) {
        let regexDays = new RegExp(/\d\d:\d\d:\d\d/)
        let check = item.match(regexDays)
        let spl = item
        let dayCheck = ''

        let hourOutput, minuteOutput, finalOutput


        // BOTH DAY(S) AND TIMESTAMP
        if (check !== null && (item.match(/day/) ) !== null) {
            spl = check[0]
            dayCheck = item.split(' ').slice(0,2).join(' ')
            spl = spl.split(':')
            hourOutput = output(String(spl[0]), 'hr')
            minuteOutput = output(String(spl[1]), 'min')
            finalOutput = `${dayCheck} ${hourOutput} ${minuteOutput}`
        }


        // JUST THE DAY(S)
        else if ((item.match(/day/) ) !== null && check === null) {
            finalOutput = item
        }
        else {
            spl = spl.split(':')
            hourOutput = output(String(spl[0]), 'hr')
            minuteOutput = output(String(spl[1]), 'min')
            finalOutput = `${hourOutput} ${minuteOutput}`
        }



        function output (timeElement: String, unit: 'hr' | 'min'): string {
            if (isNaN(Number(timeElement))){
                throw new Error(`${timeElement} is not an actual Number.`)
            }
            if (timeElement.length > 2){
                throw new Error(`${timeElement} is not a valid Number.`)
            }

            let timeOutput = timeElement !== '00' ? timeElement : null
            if (timeOutput) {
                timeOutput = timeOutput[0] === '0' ? timeOutput.slice(1) : timeOutput
                let unitOutput = Number(timeOutput) > 1 ? unit += 's' : unit
                return `${timeOutput} ${unitOutput}`
            }
            return ''
        }


        return finalOutput
    }

    return timeToDuration(time)
}



