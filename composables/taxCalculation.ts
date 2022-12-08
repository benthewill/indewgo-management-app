export default (amount:number, taxes:number[]):number => {

        let finalPrice = Number(amount)
        for(let tax of taxes){
            finalPrice += (finalPrice * tax)
        }

        return finalPrice
}


// function calc (amount, taxes)  {
//
//     let finalPrice = amount
//     for(let tax of taxes){
//         finalPrice += (finalPrice * tax)
//     }
//
//     return finalPrice
// }
//
// let calc1 = calc("150", [0.02,0.06,0.00])
// console.log( calc1)