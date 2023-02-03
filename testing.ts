function timeConvert (time:String, format: String) {
    let regexDays = new RegExp(/\d\d:\d\d/)
    let check = time.match(regexDays)
    let spl = time
    let dayCheck = ''

    let hourOutput, minuteOutput, finalOutput

    console.log(check)

    return time
}

let test1 = "09:00"
let test2 = "19:00"
let test3 = "9 AM"

console.log(timeConvert(test1,'24hr'))
// console.log(timeConvert(test2,'24hr'))
// console.log(timeConvert(test3,'12hr'))