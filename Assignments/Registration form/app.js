function submit() {
  if (ValidityState()) {
    console.log("Form Validated");
  }
}

function ValidityState() {
  let isValid = true;
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const per = document.getElementById("percent").value.trim();

  //   document
  //     .querySelectorAll(".error")
  //     .forEach((element) => (element.innerText = ""));

  const errors = document.querySelectorAll(".error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerText = "";
  }

  if (!/^[A-Za-z ]+$/.test(nm) || nm.length < 3) {
    document.getElementById("nameError").innerText =
      "Please Use only Alphabets and atlest 3 characters";
    isValid = false;
  }

  if (!/^[a-zA-Z0-9_.±]+@[a-zA-Z]+.[a-zA-Z]+$/.test(em)){
    document.getElementById("emailError").innerText=
    "Please enter a valid email id"
    isValid = false;
  }

  if (!/^[0-9]+$/.test(ph) || ph.length!=10){
    document.getElementById("telError").innerText=
    "Please enter your 10 digit valid number"
    isValid = false;
  }

  if (!/^[0-100]+$/.test(per)){
    document.getElementById("perError").innerText=
    "Please approximate to the nearest digit & don't write percent"
    isValid = false;
  }

  return isValid;
}
