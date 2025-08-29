let mailto = document.getElementById("fgEmail");
let fgBtn = document.getElementById("fg-btn");


fgBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    const data = {
        email: mailto.value
    }
    
    let endpoint = await fetch("https://robocop-o2nb.onrender.com/api/user/forgot", {
        method: "POST",
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await endpoint.json()
    console.log(response);
})