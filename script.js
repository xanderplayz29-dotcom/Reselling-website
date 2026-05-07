function buy(item) {
  document.getElementById("product").value = item;
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order sent!");
});
function addOrder() {
  let customer = document.getElementById("customer").value;
  let item = document.getElementById("item").value;

  if (!customer || !item) return;

  let div = document.createElement("div");
  div.className = "order";

  div.innerHTML = `
    <p><b>Customer:</b> ${customer}</p>
    <p><b>Item:</b> ${item}</p>

    <label>
      <input type="checkbox" onchange="toggleDone(this)">
      Completed
    </label>
  `;
