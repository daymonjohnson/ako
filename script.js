$(document).ready(function(){
    $(".receipt").hide();
    let total = 100;
    $(".total").text(`${total}`);
    $("#submitcash").on("click", function () {
    let paid = $("#cashPaid").val();
    console.log(paid);
    let change = (total - paid);
    $(".change").text(`$${change}`);
    });
    $(".submit").on("click", function() {
        $(".receipt").show();
    })
});

class Cart {
    constructor() {
        this.cart = [];
    }
    add(n, p) {
        let newItem = new Item(n, p);
        this.cart.push(newItem);
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let cashText = $("#cashPaid")
//span items and p tags fadein
$(()=>{
  $("span").hide().fadeIn(1700);
  $("p").hide().fadeIn(3000);
});
