function formSuccess() {
    const submitBt = document.querySelector('.submit');

    setTimeout(() => {
        submitBt.innerHTML = "Job application sent. Thanks!"
    }, 300);

    let allInputs = document.querySelectorAll('input');

    for(i=0;i<allInputs.length;i++) {
        allInputs[i].value = "";
        allInputs[i].checked = false;
    }
}

const below18Input = document.querySelector('.below_18_input input')
const underAgeWarning = document.querySelector('.underage_warning')
const over18Input = document.querySelector('.over_18_input input')

below18Input.addEventListener('click', function() {
    this.checked = false;

    underAgeWarning.style.display = 'initial';
})

over18Input.addEventListener('click', function() {
    underAgeWarning.style.display = 'none';
})

const handleSubmit = (e) => {
e.preventDefault();
let myForm = document.getElementById("jobForm");
let formData = new FormData(myForm);
fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
})
    .then(() => formSuccess())
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);