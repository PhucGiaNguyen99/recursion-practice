// Iterative Fibonacci
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Recursive Fibonacci
function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const seq = fibsRec(n - 1);
    return [...seq, seq[n - 2] + seq[n - 3]];
}

// Test
console.log("Iterative fibs(8):", fibs(8));
console.log("Recursive fibsRec(8):", fibsRec(8));