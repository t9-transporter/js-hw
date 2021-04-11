//Задание 1
let ObjDays = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  0: "Воскресенье",
};

let todayRus = () => ObjDays[new Date().getDay()];
console.log(todayRus());

//Задание 2
let arrObj = (i) => Object.entries(i);
console.log(arrObj(ObjDays));

//Задание 3
let a = [1];
let b = null;
let c = true;
let d = undefined;

let isPlainObject = (i) =>
  typeof i === "object" && i !== null && !Array.isArray(i);
console.log(isPlainObject(ObjDays));
console.log(isPlainObject(a));
console.log(isPlainObject(b));
console.log(isPlainObject(c));
console.log(isPlainObject(d));

//Задание 4
let Obj = {
  item: "table",
  width: 120,
  length: 60,
  height: 50,
  color: "white",
  legs: 4,
  material: "wood",
};

let objWithout = (obj, ...args) => {
  let newObject = { ...obj };
  args.forEach((arg) => {
    delete newObject[arg];
  });
  return newObject;
};
console.log(objWithout(Obj, "color", "legs"));

//Задание 5
let e = {
  a: 1,
  b: 2,
  c: 3,
};
let f = {
  a: 1,
  b: 2,
  c: 3,
};
let g = {
  a: 1,
  c: 3,
  b: 2,
};
let h = {
  a: 1,
  c: 3,
  b: 7,
};

//Простое сравнение ЗНАЧЕНИЙ объектов
let objVal = (obj1, obj2) =>
  JSON.stringify(Object.values(obj1)) === JSON.stringify(Object.values(obj2));
console.log(objVal(e, f));
console.log(objVal(e, g));
console.log(objVal(e, h));

//Простое сравнение свойств объектов через приведение к строке
let isEqial = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(isEqial(e, f));
console.log(isEqial(e, g));
console.log(isEqial(e, h));

//Использовать Google нам разрешено, поэтому как по мне наиболее правильное решение
console.log(_.isEqual(e, f), "Lodash");
console.log(_.isEqual(e, g), "Lodash");
console.log(_.isEqual(e, h), "Lodash");

//Или можно потратить час на это. Да, для обучения кул, но в реальных условиях...
let deepEqial = (obj1, obj2) => {
  for (var p in obj1) {
    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
    switch (typeof obj1[p]) {
      case "object":
        if (!deepEqial(obj1[p], obj2[p])) return false;
        break;

      case "function":
        if (
          typeof obj2[p] == "undefined" ||
          (p != "compare" && obj1[p].toString() != obj2[p].toString())
        )
          return false;
        break;

      default:
        if (obj1[p] != obj2[p]) return false;
    }
  }
  for (var p in obj2) {
    if (typeof obj1[p] == "undefined") return false;
  }
  return true;
};
console.log(deepEqial(e, f), "deepEqial");
console.log(deepEqial(e, g), "deepEqial");
console.log(deepEqial(e, h), "deepEqial");

//Задание 6
let k = {
  a: 1,
  b: 2,
  c: 3,
};
let l = {
  a: 3,
  b: 2,
  d: 3,
};
let objIS = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1);
  return obj1Keys.reduce((acc = {}, key) => {
    if (obj1[key] === obj2[key]) {
      acc = {
        ...acc,
        [key]: obj1[key],
      };
    }
    return acc;
  }, {});
};
console.log(objIS(k, l));

//Задание 7
//используется в Задании 1, а также в Задании 9 ДЗ-2
