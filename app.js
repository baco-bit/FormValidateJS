const form = document.getElementById("form");
const alert = document.getElementById("alert");
const card = document.getElementById("card");
const cvc = document.getElementById("cvc");
const amount = document.getElementById("amount");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("city");
const postalCode = document.getElementById("postalCode");
const button = document.getElementById("button");
const cancel = document.getElementById("cancel");
const textArea = document.getElementById("textArea");
let error = false;
const inputs = [
    card,
    cvc,
    amount,
    firstName,
    lastName,
    city,
    postalCode,
    textArea,
];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
    if (!hasError) {
        form.submit();
    }
});

function checkInputs() {
    for (let i = 0; i <= inputs.length; i++) {
        if (inputs[i].value.trim() == "") {
            setErrorFor(inputs[i]);
        } else {
            setSuccessFor(inputs[i]);
        }
    }
}

function setErrorFor(input) {
    input.style.backgroundColor = "#f8d7da";
    input.style.borderColor = "#f5c2c7";
    alert.style.display = "block";
    error = true;
}

function setSuccessFor(input) {
    input.className = "form-control border-success";
    alert.style.display = "none";
    input.style.backgroundColor = "#fff";
}