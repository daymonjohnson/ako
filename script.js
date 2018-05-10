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
    $(".submitCash").on("click", function() {
        $(".receipt").show();
        $(".paymentType").text("cash.");
    })
    $(".submitCredit").on("click", function() {
        $(".receipt").show();
        $(".paymentType").text("card.");
    })
});

class Cart {
    constructor() {
        this.cart = [];
    }
    add(n, p) {
        let newItem = new Item(n, p);
        this.cart.push(newItem);
        let i = this.cart.indexOf(newItem);

        let x = newItem.printName();
        let y = newItem.printPrice();
        $("th").before('<tr><td>'+x+'</td><td>$'+y+'</td></tr>');


    }
    calcSubtotal() {
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    printName() {
        return this.name;
    }
    printPrice() {
        return this.price;
    }
}


let c = new Cart;


//span items and p tags fadein
$(()=>{
  $("span").hide().fadeIn(1700);
  $("p").hide().fadeIn(3000);
});

// $("#testing").click(function(){
//     $("#testing_").data("greeting", "Hello World");
// });
// $("#submitCash").click(function(){
//     alert($("testing_").data("greeting"));
// });