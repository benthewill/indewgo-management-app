export default (text:string, config:object) => {
    let textArr = text.split(' ')
    let newArr = []
    for (let tx of textArr){
        let newTx = tx[0].toUpperCase() + tx.slice(1)
        newArr.push(newTx)
    }
    return newArr.join(' ')
}