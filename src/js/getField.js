export default function getField() {
    const arrLength = 80
    const arr = []

    for (let i = 0; i < arrLength; i++) {
        const innerArr = []

        for (let i = 0; i < arrLength; i++) {
            innerArr.push(0)
        }

        arr.push(innerArr)
    }

    return arr
}

