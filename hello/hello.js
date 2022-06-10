const args = process.argv
const mission = process.argv[2]

const removeIndex0and1 = (i) => i > 2

const cleanedArgs = args.filter((arg, i) => removeIndex0and1(i) && arg)

// Original
// const cleanedArgs = args.filter((arg, i) => {
//     if (i > 2) {
//         return arg
//     }
// }

console.log(`cleanedArgs: ${cleanedArgs}`)

// if (mission === 'learn') {
//     console.log('Time to learn some Node code')
// } else {
//     console.log(`Is ${mission} more fun?`)
// }
