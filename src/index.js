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
        '</td><td><a href="#" id="edit">Edit</a> <a href="#" onclick="deleteItem(\'' +
        element.sku +
        "')\">Delete</a></td></tr>";
    });
    table += "</table>";
    $("#product_list").html(table);
    $("#del").on("click", () => {
      console.log("in dele");
      $("#r").hide();
    });
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
