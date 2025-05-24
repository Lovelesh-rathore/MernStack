const from = document.getElementById("from");
const to = document.getElementById("to");

async function convert() {
  const from = document.getElementById("from").value.split(",")[0];
  const to = document.getElementById("to").value.split(",")[0];
  const inputValue = document.getElementById("inputValue").value.trim();  

  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
  const response = await fetch(URL);
  const data = await response.json();
  const rate = data[from];
  const amt = inputValue*rate[to];

  document.getElementById("preVal").innerText = inputValue +" "+ (from).toUpperCase() + " = ";
  document.getElementById("converted").innerText = (amt.toFixed(2)) +" "+ (to).toUpperCase();
}

async function autofill() {
  const response = await fetch("./codes.json");
  const data = await response.json();

  data.forEach((element) => {
    if (element.Currency_Code) {
      const o = document.createElement("option");
      o.value = element.Currency_Code + "," + element.Country_Code;
      o.innerText = element.Country;

      from.appendChild(o);
    }
  });

  data.forEach((element) => {
    if (element.Currency_Code) {
      const o = document.createElement("option");
      o.value = element.Currency_Code + "," + element.Country_Code;
      o.innerText = element.Country;

      to.appendChild(o);
    }
  });

  from.value = "inr,IN";
  to.value = "usd,US";
  fromImg.src = "https://flagsapi.com/IN/flat/64.png";
  toImg.src = "https://flagsapi.com/US/flat/64.png";
}

autofill();

from.addEventListener("change", () => {
  const country = from.value.split(",")[1];
  fromImg.src = `https://flagsapi.com/${country}/flat/64.png`;
});

to.addEventListener("change", () => {
  const country = to.value.split(",")[1];
  toImg.src = `https://flagsapi.com/${country}/flat/64.png`;
});
