console.log(
  "Selamat datang di blog saya, sebelumnya mohon isikan beberapa data berikut"
);
const firstName = prompt("Siapa nama depan anda ?");
const lastName = prompt("Siapa nama belakang anda ?");
const language = prompt("Asal negara anda ?");

let user = {
  name: {
    first: firstName,
    last: lastName,
  },
  language: language,
};

if (user.language === "Indonesia") {
  alert("Halo, " + user.name.first + " " + user.name.last + " selamat membaca");
} else if (user.language === "indonesia") {
  alert("Halo, " + user.name.first + " " + user.name.last + " selamat membaca");
} else if (user.language === "English") {
  alert("Hi, " + user.name.first + " " + user.name.last + " happy reading");
} else if (user.language === "english") {
  alert("Hi, " + user.name.first + " " + user.name.last + " selamat membaca");
}
