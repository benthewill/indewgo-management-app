export default (amount:number) :string => {
    let localString = amount.toLocaleString()

    let split = localString.split('.')

    let num = split[0]

    let dec = split[1] ? split[1] : '00'
    dec = dec.length > 1 ? dec : dec += '0'
    dec = dec.length > 2 ? dec.split('')[0] + dec.split('')[1] : dec

    return num + '.' + dec
}

let test = 500
let locale = test.toLocaleString()
let splitted = locale.split('.')

function splitting (amount:number) {
    let localString = amount.toLocaleString()

    let split = localString.split('.')

    let num = split[0]

    let dec = split[1] ? split[1] : '00'
    dec = dec.length > 1 ? dec : dec += '0'
    dec = dec.length > 2 ? dec.split('')[0] + dec.split('')[1] : dec

    return num + '.' + dec
}

let testContent = splitting(162.18)
console.log( testContent)