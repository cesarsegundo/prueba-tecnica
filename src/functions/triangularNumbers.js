export const triangularNumbers = (number) => {
    let array = []
    for (let i = 1; i <= number; i++) {
        array.push(i*(i+1)/2)
    }
    return array;
}