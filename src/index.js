products = [];
function isValidateForm(id, name, price) {
  errors = [];
  if (!id) {
    errors.push(alert("Id field is empty."));
  }
  if (!name) {
    errors.push(alert("Name field is empty."));
  }
  if (!price) {
    errors.push(alert("Price field is empty."));
  }

  return errors;
}
function submitForm() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  if (isValidateForm(id, name, price).length == 0) {
    if (NotduplicateId(id)) {
      p = {
        id: id,
        name: name,
        price: price,
      };
      products.push(p);
      display();
    }
  }
}
function NotduplicateId(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      alert("Product with this id is already in database");
      return false;
    }
  }
  return true;
}
function display() {
  var tblBody = document.createElement("tbody");
  for (let i = 0; i < products.length; i++) {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerText = products[i].id;
    cell2.innerText = products[i].name;
    cell3.innerText = products[i].price;
    cell4.innerHTML =
      '<a href="#" onclick="editForm(' + products[i].id + ')">Edit</a>';
    tblBody.appendChild(row);
  }
  var old_tbody = document.getElementById("tbody");
  if (old_tbody == null) {
    document.getElementById("table").appendChild(tblBody);
  } else {
    document
      .getElementById("tbody")
      .parentNode.replaceChild(tblBody, old_tbody);
  }

  tblBody.setAttribute("id", "tbody");
}
function editForm(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      break;
    }
  }
  document.getElementById("id").value = products[i].id;
  document.getElementById("id").readOnly = true;
  document.getElementById("id").style.border = "thick solid blue";
  document.getElementById("id").value = products[i].id;
  document.getElementById("id").value = products[i].id;
}
function update() {}