function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.innerHTML = "Please enter username and password.";
        message.style.color = "red";
    } else {
        window.location.href= "dashboard.html";
    }
}

function submitRequest() {
    let quantity = document.getElementById("quantity").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let address = document.getElementById("address").value;
let priority = document.getElementById("priority").value;
let reason = document.getElementById("reason").value;
let message = document.getElementById("request-message");
let contact = document.getElementById("contact").value;

   if (quantity === "" || date === "" || time === "" || address === "" || priority === "" || reason === ""|| contact === "") {
        message.innerHTML = "Please fill in all the details.";
        message.style.color = "red";
    } else {
        let request = {
            quantity: quantity,
            date: date,
            time: time,
            address: address,
priority: priority,
reason: reason,
contact: contact,
status: "Pending"
        };

        localStorage.setItem("tankerRequest", JSON.stringify(request));

        message.innerHTML = "Tanker request submitted successfully!";
        message.style.color = "green";
    }
}
    function cancelRequest() {
    localStorage.removeItem("tankerRequest");
        window.location.reload();
    }

    function register() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let message = document.getElementById("register-message");

    if (name === "" || phone === "" || email === "" || address === "" || password === "" || confirmPassword === "") {
        message.innerHTML = "Please fill in all the details.";
        message.style.color = "red";
    } else if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Registration successful!";
        message.style.color = "green";
    }
}

function updateWaterLevel() {
    let waterLevel = 68;
    let status = "";

    if (waterLevel > 70) {
        status = "High";
    } else if (waterLevel >= 40) {
        status = "Medium";
    } else if (waterLevel >= 20) {
        status = "Low";
    } else {
        status = "Critical";
    }

    let waterLevelElement = document.getElementById("water-level");
    let waterStatusElement = document.getElementById("water-status");
    let waterLevelFillElement = document.getElementById("water-level-fill");

    if (waterLevelElement && waterStatusElement && waterLevelFillElement) {
        waterLevelElement.innerHTML = waterLevel + "%";
        waterStatusElement.innerHTML = status;
        waterLevelFillElement.style.width = waterLevel + "%";
    }
}

updateWaterLevel();