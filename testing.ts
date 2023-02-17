let available = [3,3,4,6,7]

let daysSet = Array.from(new Set(available))
let unavailable = []

for (let i = 1; i < 8; i++) {
    if (!daysSet.includes(i)) {
        unavailable.push(i)
    }
}

console.log(unavailable)
console.log(daysSet)

// @ts-ignore
daysSet.push(...unavailable)
console.log(daysSet)