
let sum=0;
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
        $(".firstRow").before('<tr><td>'+x+'</td><td>$'+y+'</td></tr>');
    }
    calcSubtotal() {
        for(let b in this.cart) {
            sum += this.cart[b].price;
        }
        console.log(sum);
        $(".subTotal").text('$'+sum+'.00');
        $(".total").text(sum+'.00');
        $(".tax").text('$'+sum*0.06);
        let tax = sum*0.06;
        console.log(tax);
        let finalTotal = tax + sum;
        $(".finalTotal").text('$'+finalTotal);
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


$(document).ready(function(){
    $(".receipt").hide();
    $(".checkoutForm").hide();
    $("#submitcash").on("click", function () {
    let paid = $("#cashPaid").val();
    console.log(paid);
    let change = paid - $(".total").text();
    $(".change").text(`$${change}`);
    });
    $(".submitCash").on("click", function() {
        $(".receipt").show();
        $(".paymentType").text("cash.");
    })
    $(".submitCredit").on("click", function() {
        $(".receipt").show();
        $(".checkoutForm").hide();
        $(".paymentType").text("card");
    })
    $("#checkout").on("click", function() {
        c.calcSubtotal();
        $(".checkoutForm").show();
    })
    $(".exit").on("click", function() {
        $(".checkoutForm").hide();
    })
});

//span items and p tags fadein
$(()=>{
  $("span").hide().fadeIn(1700);
  $("p").hide().fadeIn(3000);
});
