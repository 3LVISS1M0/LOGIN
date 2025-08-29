let btn = document.getElementById('loginBtn');
let useremail = document.getElementById('email');
let userpassword = document.getElementById("password");
let successBox = document.getElementById("success");
let errorBox = document.getElementById("error")

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black'
    btn.style.border = "1px solid black"
    btn.style.borderRadius = '8px';

    const data = {
        email: useremail.value,
        password: userpassword.value
    }
    let endpoint = await fetch("https://robocop-o2nb.onrender.com/api/user/login", {
        method: "POST",
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await endpoint.json();
    console.log(response)
    if (response.token) {
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white'
        btn.style.border = "1px solid black"
        btn.style.borderRadius = '8px';
        successBox.style.display = 'flex';
        
        const {token, msg, user} = response;
        successBox.innerHTML = msg;
        localStorage.setItem("authtoken", token);
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "dashboard.html"
        }, 3000)
    }
    else {
        errorBox.style.display = 'flex';
        errorBox.innerHTML = response.msg;
    }

})