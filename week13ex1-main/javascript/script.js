function doSomething(e) {
  if (e.target.textContent === "Change Background Color") {
    changeBGColor();
  } else if (e.target.textContent === "Submit") {
    submitHandler();
  }
}

// Change background color //
function changeBGColor() {
  document.body.classList.toggle("new-BG-Color");
}

let students = [];

function submitHandler() {
  const firstNameInput = document.querySelector("#firstname");
  const lastNameInput = document.querySelector("#lastname");
  const progNameInput = document.querySelector("#progname");


  let studentObj = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    progName: progNameInput.value,
  };

  students.push(studentObj);
  firstNameInput.value = "";
  lastNameInput.value = "";
  progNameInput.value = "";
}

document.body.addEventListener("click", doSomething);
