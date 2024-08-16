//https://zenn.dev/okoe/articles/7876b897c0fccf

let userBirthdayMonth = document.getElementById("birthday-month");
let userBirthdayDay = document.getElementById("birthday-day");
let send = document.getElementById("send");

// 月日表示
function createOptionForElements(elem, val) {
    let option = document.createElement("option");
    option.text = val;
    option.value = val;
    elem.appendChild(option);
}

for(let i = 1; i <= 12; i++) {
    createOptionForElements(userBirthdayMonth, i);
}
for(let i = 1; i <= 31; i++) {
    createOptionForElements(userBirthdayDay, i);
}

// 送信したデータを受け取る。
send.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let month = document.getElementById("birthday-month").value;
    let day = document.getElementById("birthday-day").value;

    console.log(name);
    console.log(month);
    console.log(day);
    
});

// 誕生日を参考に正座を分岐

// document.getElementById("send").onclick = function() {
//     let name = document.getElementsById("name");
//     let userBirthdayMonth = document.querySelector(".birthday-month");
//     let userBirthdayDay = document.querySelector(".birthday-day");

//     console.log(name);
//     console.log(userBirthdayMonth);
//     console.log(userBirthdayDay);
// }