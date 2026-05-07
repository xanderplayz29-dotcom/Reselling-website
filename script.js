function addOrder() {

  const customer = document.getElementById("customer").value;

  const item = document.getElementById("item").value;

  if (customer === "" || item === "") {
    alert("Fill out all fields");
    return;
  }

  const order = document.createElement("div");

  order.classList.add("order");

  order.innerHTML = `
    <p><strong>Customer:</strong> ${customer}</p>

    <p><strong>Item:</strong> ${item}</p>

    <label>
      <input type="checkbox" onchange="toggleOrder(this)">
      Completed
    </label>
  `;

  document.getElementById("orders").appendChild(order);

  document.getElementById("customer").value = "";

  document.getElementById("item").value = "";
}

function toggleOrder(box) {

  const order = box.parentElement.parentElement;

  if (box.checked) {
    order.classList.add("completed");
  } else {
    order.classList.remove("completed");
  }
}
