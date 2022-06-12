console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");

const firstName = prompt("Siapa nama depanmu ?");
const lastName = prompt("Siapa nama belakangmu ?");
const language = prompt("Asalmu dari negara mana ? Indonesia / Britain");

let user = {
  name: {
    first: firstName,
    last: lastName,
  },
  language: language,
};

if (user.language == "Indonesia") {
  alert("Sayang kamu, " + user.name.first + " " + user.name.last);
} else if (user.language == "indonesia") {
  alert("Sayang kamu, " + user.name.first + " " + user.name.last);
} else if (user.language == "Britain") {
  alert("Love you, " + user.name.first + " " + user.name.last);
} else if (user.language == "britain") {
  alert("Love you, " + user.name.first + " " + user.name.last);
}
