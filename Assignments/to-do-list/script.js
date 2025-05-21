function addToList() {
  const input = document.getElementById("addTask");
  if (!input.value.trim()) {
    alert("Please input something to add task");
    input.value = "";
    return;
  }

  tl = document.getElementById("taskList");
  cl = document.getElementById("completedTask");

  const l = document.createElement("li");
  l.classList.add("py-2");

  const d = document.createElement("div");
  d.classList.add("d-flex");

  const s = document.createElement("span");
  s.classList.add("flex-fill");
  s.innerText = input.value.trim();

  const bs = document.createElement("button");
  bs.classList.add("btn", "btn-success", "mx-3");
  bs.innerText = "Completed";

  const b = document.createElement("button");
  b.classList.add("btn", "btn-danger");
  b.innerText = "Delete";

  d.appendChild(s);
  d.appendChild(bs);
  d.appendChild(b);
  l.appendChild(d);

  tl.appendChild(l);

  bs.onclick=() => {
    d.removeChild(bs);
    tl.removeChild(l);
    cl.appendChild(l);
  }

  b.onclick = () => l.remove();

  input.value = "";
}
