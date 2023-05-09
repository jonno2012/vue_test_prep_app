export function isAPrimeNumber(number) {
    let isPrime = true;

// check if number is equal to 1
    if (number === 1) {
        return false
    } else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true
        } else {
            return false
        }
    }
    return false
}