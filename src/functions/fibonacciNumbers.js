export const fibonacciNumbers = (number) => {
	let fibo = [0,1];

	for(let i=2; i <= number; i++){
		fibo.push(fibo[i-1] + fibo[i-2])	
	}
    let array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    let f = fibo.shift()
    return fibo
}