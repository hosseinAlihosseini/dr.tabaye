let modal = document.getElementById("myModal");

let modal2 = document.getElementById("myModal2");

let signin = document.getElementById("signin");

let btn = document.getElementById("myBtn");
btn.onclick = function () {
    console.log("ali");
    modal.style.display = "flex";
}

let btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    console.log("alihossein");
    modal2.style.display = "none";
    signin.style.display = "block";
}

let btn3 = document.getElementById("btn-signin");
btn3.onclick = function () {
    console.log("alihossein");
    modal2.style.display = "block";
    signin.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal2.style.display = "block";
        signin.style.display = "none";
    }
}

async function submitForm() {
    const mobile = document.getElementById('userName').value
    console.log(mobile)
    const password = document.getElementById('password').value
    console.log(password)
    // https://apinew.tabaye.ir/api/v1/user/login
    const user = {
        mobile,
        password,
        platform: "web"
    }
    const data = (await axios.post('https://apinew.tabaye.ir/api/v1/user/login', user,)).data.data.meta.avatar
    window.open(`https://apinew.tabaye.ir${data}`)

}