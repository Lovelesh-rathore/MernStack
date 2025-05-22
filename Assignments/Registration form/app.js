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
  const add = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pincode").value.trim();
  const guardName = document.getElementById("guardName").value.trim();
  const guardPhoneNo = document.getElementById("guardPhoneNo").value.trim();
  const specReq = document.getElementById("specReq").value.trim();


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

  if (!/^[A-Za-z0-9 ]+$/.test(add)) {
    document.getElementById("addressError").innerText =
      "Please enter the valid address";
    isValid = false;
  }

  if (!/^[A-Za-z ]+$/.test(city)) {
    document.getElementById("cityError").innerText =
      "Please enter your city name";
    isValid = false;
  }

  if (!/^[0-9]+$/.test(pin)) {
    document.getElementById("pincodeError").innerText =
      "Please enter valid pincode";
    isValid = false;
  }

  if (!/^[A-Za-z ]+$/.test(guardName) || nm.length < 3) {
    document.getElementById("guardError").innerText =
      "Please Use only Alphabets and atlest 3 characters";
    isValid = false;
  }

  if (!/^[0-9]+$/.test(guardPhoneNo) || ph.length!=10){
    document.getElementById("guardTelError").innerText=
    "Please enter your 10 digit valid number"
    isValid = false;
  }

  if (!/^[A-Za-z0-9 ]+$/.test(specReq)) {
    document.getElementById("specReqError").innerText =
      "Please enter valid information";
    isValid = false;
  }

  return isValid;
}
