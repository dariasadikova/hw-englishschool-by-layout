function convertSpeed(speed, direction) {
  if (direction === 'toMS') {
    return `${speed / 3.6} м/с`;
  }
  if (direction === 'toKMH') {
    return `${speed * 3.6} км/ч`;
  }
}

function absValue(number) {
  if (number < 0) {
    return -number;
  }
  return number;
}

const student = {
  name: 'Дарья',
  surname: 'Садикова',
  group: '221-321',
};

console.log(`Список свойств: ${Object.keys(student)}`);
console.log(`Студентка ${(student.surname)} ${(student.name)} учится в группе ${student.group}`);

function randomNumber(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return min + Math.floor(Math.random() * (max - min + 1));
}

function sampleArray(array, number) {
    const newArray = [];
    for (let i = 0; i < number; i ++) {
      newArray.push(array[randomNumber(0, array.length - 1)]);
    }
    return newArray;
}
  