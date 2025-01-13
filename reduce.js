const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 0;

const sumWithInitial = myArr.reduce(
        (acuumulator, currentValue) => acuumulator + currentValue, initialValue);

console.log(sumWithInitial)