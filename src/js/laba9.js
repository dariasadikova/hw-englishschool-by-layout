function start() {
  let a = 72;
  let b = 20;
  console.log(`${a} км/ч  соответствует  ${a / 3.6} м/с`);
  console.log(`${b} м/с  соответствует  ${b * 3.6} км/ч`);

  let s1 = 21;
  let s2 = 40;
  let s3 = 76;
  if (s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2) {
    let p = s1 + s2 + s3;
    let mp = p / 2;
    let s = Math.sqrt(mp * (mp - s1) * (mp - s2) * (mp - s3));
    let relation = p / s;
    console.log('треугольник существует');
    console.log('Периметр = ' + p);
    console.log('Площадь = ' + s);
    console.log('Соотношение = ' + relation);
  } else {
    console.log('треугольник не существует');
  }

  let flag = false;
  while (flag == false) {
    number = prompt('Введите число в задании 3');
    if (isNaN(number) == false) {
      for (let i = 0; i <= number; i++) {
        if (i % 5 == 0 && i != 0) {
          console.log(i + ' fizz buzz');
        }
        if (i % 2 == 0 && i % 5 != 0) {
          console.log(i + ' buzz');
        }
        if (i % 2 != 0 && i % 5 != 0) {
          console.log(i + ' fizz');
        }
      }
      flag = true;
    } else {
      console.log('Ошибка! Вы ввели не число');
    }
  }

  let esize = 10
  let elka = ""
  for (let i = 1; i<=esize; i++) {
    if (i%2 != 0) {
      elka += "*".repeat(i)
      elka += "\n"
    }
    if (i%2 == 0) {
      elka += "#".repeat(i)
      elka += "\n"
    }
  }
  elka += "||"
  console.log(elka)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let flag_5 = false
  let r = getRandomInt(10);
  console.log(r);
  while ((flag_5 == false)) {
    n = parseInt(prompt("Введите число для 5 задания (диапазон от 0 до 10)"));
    if (isNaN(n) == false) {
      if (n > r) {
        console.log("ваше число больше");
      }
      if (n < r) {
        console.log("ваше число меньше");
      }
      if (n == r) {
        console.log("угадано");
        flag_5 = true;
      }
    } else {
      console.log("вы ввели не число");
    }
  }

  let c = 54;
  let x = 3;
  let y = 9;
  let result = false;
  if (c % x == 0 && c % y == 0) {
    result = true;
  }
  else {
    result = false
  }

  console.log("n = " + c + ", x = " + x + ", y = " + y + " => " + result);

  let date = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  let mes = "июль";
  let kv = 0;
  for (let i = 0; i < date.length; i++) {
    if (mes == date[i]) {
      kv = Math.ceil((i + 1) / 3);
    }
  }
  console.log(mes + " => " + kv + " квартал")
}

window.onload = start;
