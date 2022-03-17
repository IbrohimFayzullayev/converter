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
        if (str[i] === str[i].toUpperCase()) {
          if (str[i] == "C" && (str[i + 1] == "h" || str[i + 1] == "H")) {
            result.push(conver.get("ch").toUpperCase());
            i++;
          } else if (
            str[i] == "S" &&
            (str[i + 1] == "h" || str[i + 1] == "H")
          ) {
            result.push(conver.get("sh").toUpperCase());
            i++;
          } else if (str[i] == "Y" && str[i + 1] == "o") {
            result.push(conver.get("yo").toUpperCase());
            i++;
          } else if (str[i] == "Y" && str[i + 1] == "a") {
            result.push(conver.get("ya").toUpperCase());
            i++;
          } else if (str[i] == "H") {
            result.push("х".toUpperCase());
          } else if (str[i] == "Q") {
            result.push("к".toUpperCase());
          } else if (conver.get(str[i].toLowerCase())) {
            result.push(conver.get(str[i].toLowerCase()).toUpperCase());
          } else {
            result.push(str[i]);
          }
        } else if (str[i] == str[i].toLowerCase()) {
          if (str[i] == "c" && str[i + 1] == "h") {
            result.push(conver.get("ch"));
            i++;
          } else if (str[i] == "s" && str[i + 1] == "h") {
            result.push(conver.get("sh"));
            i++;
          } else if (str[i] == "y" && str[i + 1] == "o") {
            result.push(conver.get("yo"));
            i++;
          } else if (str[i] == "y" && str[i + 1] == "a") {
            result.push(conver.get("ya"));
            i++;
          } else if (str[i] == "h") {
            result.push("х");
          } else if (str[i] == "q") {
            result.push("к");
          } else if (conver.get(str[i])) {
            result.push(conver.get(str[i]));
          } else {
            result.push(str[i]);
          }
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
          if (str[i] == str[i].toUpperCase()) {
            if (val == str[i].toLowerCase()) {
              id.push(key.toUpperCase());
            }
          } else if (val == str[i]) {
            id.push(key);
          }
        }
        if (!conver.get(str[i])) {
          id.push(str[i]);
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
