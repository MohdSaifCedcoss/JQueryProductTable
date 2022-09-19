let products = [];
$(() => {
  $("#add_product").click(() => {
    let sku = $("#product_sku").val();
    let name = $("#product_name").val();
    let price = $("#product_price").val();
    let quan = $("#product_quantity").val();
    if (sku == "" || name == "" || price == "" || quan == "") {
      $(".error").toggle();
    } else {
      $(".success").show();
      var obj = {
        sku: sku,
        name: name,
        price: price,
        quan: quan,
      };
      products.push(obj);
      display();
    }
  });
  $(".close").click(() => {
    $(".success").hide();
    $(".error").hide();
  });
  display = () => {
    let table =
      "<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
    products.forEach((element) => {
      table +=
        '<tr id="row"><td>' +
        element.sku +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.price +
        "</td><td>" +
        element.quan +
        '</td><td><a href="#" onclick="editItem(\'' +
        element.sku +
        '\')">Edit</a> <a href="#" onclick="deleteItem(\'' +
        element.sku +
        "')\">Delete</a></td></tr>";
    });
    table += "</table>";
    $("#product_list").html(table);
  };
});
function deleteItem(val) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].sku == val) {
      products.splice(i, 1);
    }
  }
  display();
}
function editItem(val) {
  let sku, name, price, quan, new_val;
  var i;
  var k;
  $("#update_product").show();
  $("#add_product").hide();
  $("#product_sku").val(val);
  $("#product_name").val("");
  $("#product_price").val("");
  $("#product_quantity").val("");
  $("#update_product").click(() => {
    for (k = 0; k < products.length; k++) {
      sku = $("#product_sku").val();
      name = $("#product_name").val();
      price = $("#product_price").val();
      quan = $("#product_quantity").val();
      if (products[k].sku == val) {
        products[k].name = name;
        products[k].sku = sku;
        products[k].price = price;
        products[k].quan = quan;
        console.log(products);
        display();
        $("#update_product").hide();
        $("#add_product").show();
      }
    }
  });
}
