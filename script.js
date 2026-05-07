function addOrder() {

  let customer = document.getElementById("customer").value;
  let item = document.getElementById("item").value;
  let price = document.getElementById("price").value;

  if (customer === "" || item === "" || price === "") {
    alert("Fill out all fields");
    return;
  }

  let order = document.createElement("div");

  order.classList.add("order");

  order.innerHTML = `
    <p><strong>Customer:</strong> ${customer}</p>

    <p><strong>Item:</strong> ${item}</p>

    <p><strong>Price:</strong> $${price}</p>

    <label>
      <input type="checkbox" onchange="toggleComplete(this)">
      Completed
    </label>
  `;

  document.getElementById("orders").appendChild(order);

  document.getElementById("customer").value = "";
  document.getElementById("item").value = "";
  document.getElementById("price").value = "";
}

function toggleComplete(checkbox) {

  let order = checkbox.parentElement.parentElement;

  if (checkbox.checked) {
    order.classList.add("completed");
  } else {
    order.classList.remove("completed");
  }
}
