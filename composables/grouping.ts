export default (arr, comp) => {
    let compItems = []
    for (let x of arr) {
        x.node[comp].forEach(i => compItems.push(i))
    }
    compItems = [...new Set(compItems)]
    let output = compItems.map((x) => {
        return {[comp]: x, contents: []}
    })

    for (let c of compItems) {
        let z = arr.filter(n => n.node[comp].includes(c))
        let a = output.filter(o => o[comp] === c)[0]
        a.contents = z
    }

    return output
}