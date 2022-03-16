const uzbekText = document.querySelector(".uzbek__text");
const russianText = document.querySelector(".russian__text");
const start1 = document.querySelector(".convert--1");
const start2 = document.querySelector(".convert--2");
const clear1 = document.querySelector(".clear--btn--1");
const clear2 = document.querySelector(".clear--btn--2");

let str;
let conver = new Map([
  ["a", "а"],
  ["b", "б"],
  ["s", "с"],
  ["d", "д"],
  ["e", "е"],
  ["f", "ф"],
  ["g", "г"],
  ["i", "и"],
  ["j", "ж"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["q", "к"],
  ["r", "р"],
  ["t", "т"],
  ["u", "у"],
  ["v", "в"],
  ["x", "х"],
  ["y", "й"],
  ["z", "з"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["ya", "я"],
  ["yo", "ё"],
]);

start1.addEventListener("click", function (e) {
  e.preventDefault();
  if (start1.textContent == "Start") {
    let = uzb = setInterval(function () {
      str = uzbekText.value;
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str[i] == "c" && str[i + 1] == "h") {
          result.push(conver.get("ch"));
          i++;
        } else if (str[i] == "s" && str[i + 1] == "h") {
          result.push(conver.get("sh"));
          i++;
        } else if (str[i] == " ") {
          result.push(" ");
        } else if (str[i] == "y" && str[i + 1] == "o") {
          result.push(conver.get("yo"));
          i++;
        } else if (str[i] == "y" && str[i + 1] == "a") {
          result.push(conver.get("ya"));
          i++;
        } else {
          result.push(conver.get(str[i]));
        }
      }
      russianText.value = result.join("");
    }, 200);
    start1.textContent = "Stop";
    start2.disabled = true;
  } else if (start1.textContent == "Stop") {
    clearInterval(uzb);
    start1.textContent = "Start";
    start2.disabled = false;
  }
});

start2.addEventListener("click", function (e) {
  e.preventDefault;

  if (start2.textContent == "Start") {
    let = rus = setInterval(function () {
      let str = russianText.value;
      let id = [];
      for (let i = 0; i < str.length; i++) {
        for (const [key, val] of conver.entries()) {
          if (val == str[i]) {
            id.push(key);
          }
        }
        if (str[i] == " ") {
          id.push(" ");
        }
      }
      uzbekText.value = id.join("");
    }, 200);
    start2.textContent = "Stop";
    start1.disabled = true;
  } else if (start2.textContent === "Stop") {
    clearInterval(rus);
    start2.textContent = "Start";
    start1.disabled = false;
  }
});

clear1.addEventListener("click", function (e) {
  uzbekText.value = "";
  russianText.value = "";
});
clear2.addEventListener("click", function (e) {
  uzbekText.value = "";
  russianText.value = "";
});
