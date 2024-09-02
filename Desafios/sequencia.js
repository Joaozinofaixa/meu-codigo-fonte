// a) 1, 3, 5, 7, ___
let sequenceA = [1, 3, 5, 7];
sequenceA.push(sequenceA[sequenceA.length - 1] + 2);
console.log(sequenceA); // [1, 3, 5, 7, 9]

// b) 2, 4, 8, 16, 32, 64, ____
let sequenceB = [2, 4, 8, 16, 32, 64];
sequenceB.push(sequenceB[sequenceB.length - 1] * 2);
console.log(sequenceB); // [2, 4, 8, 16, 32, 64, 128]

// c) 0, 1, 4, 9, 16, 25, 36, ____
let sequenceC = [0, 1, 4, 9, 16, 25, 36];
sequenceC.push(Math.pow(sequenceC.length, 2));
console.log(sequenceC); // [0, 1, 4, 9, 16, 25, 36, 49]

// d) 4, 16, 36, 64, ____
let sequenceD = [4, 16, 36, 64];
sequenceD.push(Math.pow((sequenceD.length + 1) * 2, 2));
console.log(sequenceD); // [4, 16, 36, 64, 100]

// e) 1, 1, 2, 3, 5, 8, ____
let sequenceE = [1, 1, 2, 3, 5, 8];
sequenceE.push(sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2]);
console.log(sequenceE); // [1, 1, 2, 3, 5, 8, 13]

// f) 2, 10, 12, 16, 17, 18, 19, ____
let sequenceF = [2, 10, 12, 16, 17, 18, 19];
sequenceF.push(20);
console.log(sequenceF); // [2, 10, 12, 16, 17, 18, 19, 20]
