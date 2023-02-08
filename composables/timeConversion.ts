interface Options {
    timeFormat?: string,
    stringFormat?: string
}

type timeFormat = '24hr' | '12hr'
type stringFormat = 'timestamp' | 'literal'

export default (timeInput:string, timeFormat:timeFormat, outputOptions?:Options) => {
    let output, tempOutput, midnightIndicator = ''

    let convertScale = (input:string,conversion?:string):string => {
        let extractHour:string = input.slice(0,2)
        let extractRest = input.slice(2)

        let output = conversion === 'adding' ?
            String(Number(extractHour) + 12):
            String(Number(extractHour) - 12)


        output = output.length === 1 ? '0' + output + extractRest : output + extractRest


        return output

    }

    function regexConversion (stringInput:string) {
        const regexHHMMSS = stringInput.match(new RegExp(/\d\d:\d\d:\d\d/))
        const regexHMMSS = stringInput.match(new RegExp(/\d:\d\d:\d\d/))
        const regexHHMM = stringInput.match(new RegExp(/\d\d:\d\d/))
        const regexHMM = stringInput.match(new RegExp(/\d:\d\d/))
        const regexHH = stringInput.match(new RegExp(/\d\d/))
        const regexH = stringInput.match(new RegExp(/\d/))

        let stringOutput

        if (regexHHMMSS) {
            stringOutput = stringInput
        } else if (regexHMMSS) {
            stringOutput = '0' + stringInput
        } else if (regexHHMM) {
            stringOutput = stringInput + ':00'
        } else if (regexHMM) {
            stringOutput = '0' + stringInput + ':00'
        } else if (regexHH) {
            stringOutput = stringInput + ':00:00'
        } else if (regexH) {
            stringOutput = '0' + stringInput + ':00:00'
        }

        return stringOutput
    }

    if (timeFormat === '24hr') {
        tempOutput = regexConversion(timeInput)
    } else {
        let regexAMPM = timeInput.match(new RegExp(/AM|am|Am|PM|pm|Pm/))
        let regexAM = timeInput.match(new RegExp(/AM|am|Am/))

        if (regexAMPM) {
            midnightIndicator = regexAM ? 'AM' : 'PM'
            tempOutput = timeInput.replace(/AM|am|Am|PM|pm|Pm| AM| am| Am| PM| pm| Pm/,'')
            tempOutput = regexConversion(tempOutput)

        } else {
            midnightIndicator = 'AM'
            tempOutput = regexConversion(timeInput)
        }

        // @ts-ignore
        tempOutput = midnightIndicator === 'AM' || '' ? tempOutput : convertScale(tempOutput, 'adding')
    }

    // OUTPUT

    if (outputOptions?.timeFormat === '24hr') {
        if (outputOptions?.stringFormat === 'timestamp') {
            output = tempOutput
        } else {
            output = tempOutput
        }
    } else if (outputOptions?.timeFormat === '12hr') {
        if (outputOptions?.stringFormat === 'timestamp') {
            // @ts-ignore
            output = Number(tempOutput?.slice(0,2)) > 12 ? convertScale(tempOutput) : tempOutput
        } else {
            midnightIndicator = Number(tempOutput?.slice(0,2)) > 12 ? 'PM' : 'AM'
            // @ts-ignore
            output = Number(tempOutput?.slice(0,2)) > 12 ? convertScale(tempOutput) : tempOutput

            output = tempOutput?.slice(0,2) === '00' ?
                '12:00 AM'
                : output?.slice(0,5) + ' ' + midnightIndicator


        }
    } else {
        output = tempOutput
    }



    return output
}