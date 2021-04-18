//task 1
//Alerts я не использовал, это трэш
let btn1 = document.querySelector(".btn1");
let btnPress = () => {
  let div1 = document.getElementById("hi1");
  div1.classList.toggle("hello-active");
};
btn1.addEventListener("click", btnPress);

//task 2
let btn2 = document.querySelector(".btn2");
let btnHover = () => {
  let div2 = document.getElementById("hi2");
  div2.classList.toggle("hello-active");
};
btn2.addEventListener("mouseover", btnHover);
btn2.addEventListener("mouseout", btnHover);

//task 3
let btn3 = document.querySelector(".btn3");
let btnDblClick = () => {
  let div3 = document.getElementById("hi3");
  div3.classList.toggle("hello-active");
};
btn3.addEventListener("dblclick", btnDblClick);

//task 4
let btn4 = document.querySelector(".p-out");
let btnOut = () => {
  let div4 = document.getElementById("hi4");
  div4.classList.toggle("hello-active");
};
btn4.addEventListener("mouseout", btnOut);

//task 5
//с этого задание я решил сократить кол-во переменных(обращаюсь напрямую). Стоит ли так делать?
let btnInner = () => {
  if (document.querySelector(".npt").value !== "") {
    document.getElementById("hi5").innerHTML = document.querySelector(
      ".npt"
    ).value;
  } else {
    document.getElementById("hi5").innerHTML = "что-то тут пусто";
  }
  document.getElementById("hi5").classList.toggle("hello-active");
};
document.querySelector(".btn5").addEventListener("click", btnInner);

//task 6
let btnChange = () => {
  document.querySelector(".npt1").value = "что-то пошло так! =)";
};
document.querySelector(".btn6").addEventListener("click", btnChange);

//task 7
let btnChangeMonkey = () => {
  document.querySelector(".monkey").classList.toggle("monkey-active");
};
document.querySelector(".btn7").addEventListener("click", btnChangeMonkey);

//task 8 (this тут не применял, т.к. выводил не через alert и функция взаимодействует с другим элементом)
let nptClick = () => {
  document.getElementById("hi8").classList.toggle("hello-active");
};

//task 9 (тут уже this)
let nptChange = (elem) => {
  elem.value = "что-то пошло так! =)";
};

//task 10
let nptChange2 = (elem) => {
  if (elem.value === "Нажми на меня!") {
    elem.value = "а можно еще раз?";
  } else {
    elem.value = "теперь ок!";
  }
};

//task 11
let nptChange3 = (elem) => {
  elem.value = "ку-ку";
};

//task 12
let nptChange4 = (elem) => {
  elem.value = "зря нажимал";
  elem.disabled = true;
};

//task 13
let nptChange5 = (elem) => {
  elem.classList.toggle("monkey2-active");
};

//task 14
let nptCss = () => {
  document.querySelector(".npt6").classList.toggle("npt6-active");
};

//task 15
let nptCssHide = () => {
  document.querySelector(".npt7").classList.add("npt7-active");
};
let nptCssShow = () => {
  document.querySelector(".npt7").classList.remove("npt7-active");
};

//task 16
let nptCssEpic = () => {
  document.querySelector(".npt8").classList.toggle("npt8-active");
  document.querySelector(".npt8").value = "текст + css";
};

//task 17
let nptChange6 = () => {
  document.querySelector(".npt9").value = "зря нажимал";
  document.querySelector(".npt9").disabled = true;
  document.querySelector(".npt10").classList.toggle("npt10-active");
};

let nptChange7 = () => {
  document.querySelector(".npt9").value = "Нажми на меня!";
  document.querySelector(".npt9").disabled = false;
  document.querySelector(".npt10").classList.toggle("npt10-active");
};

//task 18
let nptCounter = () => {
  document.querySelector(".npt11").value =
    +document.querySelector(".npt11").value + 1;
  document.querySelector(".npt11").value.innerHTML = document.querySelector(
    ".npt11"
  ).value;
};

//task 19
let replace = () => {
  document.querySelector(".btn12").classList.toggle("btn12-active");
  document.querySelector(".swap-form").classList.toggle("swap-form-active");
};
document.querySelector(".btn12").addEventListener("click", replace);

//task 20
let nptClassList = () => {
  document.querySelector(".qqq").value =
    "Мои css классы: " + document.querySelector(".qqq").classList;
};
document.querySelector(".btn13").addEventListener("click", nptClassList);

//task 21
let fixSwap = () => {
  let x = document.querySelector(".npt13").value;
  document.querySelector(".npt13").value = document.querySelector(
    ".npt14"
  ).value;
  document.querySelector(".npt14").value = x;
};

//task 22
let sqr = () => {
  document.querySelector(".npt16").value =
    document.querySelector(".npt15").value *
    document.querySelector(".npt15").value;
};

//task 23
let sqrCheck = () => {
  if (isNaN(document.querySelector(".npt17").value)) {
    document.getElementById("hi10").classList.toggle("hello-active");
  } else {
    document.querySelector(".npt18").value =
      document.querySelector(".npt17").value *
      document.querySelector(".npt17").value;
  }
};

//task 24
let disPointer = (elem) => {
  elem.value = "зря нажимал";
  elem.disabled = true;
  elem.classList.add("pointer-active");
};

//task 25 (вот тут this супер элегантное решение)
let addMyValue = (elem) => {
  document.querySelector(".npt20").value =
    document.querySelector(".npt20").value + elem.value;
};

/*PS мне реально немного стыдно за некоторые наименования классов и id. Я делал
ДЗ глубокой ночью, воображение спало. Мне хотелось тратить время на суть, а не на 
оформление.
Да, кстати, задания супер!
*/
