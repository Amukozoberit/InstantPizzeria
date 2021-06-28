let inputtedTop = [];

let sizePrices = {
    Small: 500,
    Medium: 550,
    Large: 600,
    Any: 0,
}


let crustPrices = {
    Crispy: 50,
    Stuffed: 100,
    gluttenFree: 230,
    none: 0,
}




let toppingPrice = {
    Large: {
        Broccolini: 50,
        Sausage: 50,
        Potatoes: 30,
        Capsicum: 40
    },
    Medium: {
        Broccolini: 30,
        Sausage: 30,
        Potatoes: 20,
        Capsicum: 15,
    },
    Small: {
        Broccolini: 15,
        Sausage: 15,
        Potatoes: 10,
        Capsicum: 10
    }
}



function Order(Size, Crust, Toppings, howMany) {
    this.Size = Size;
    this.Crust = Crust;
    this.Toppings = Toppings;
    this.howMany = howMany;
}

function show() {
    var x = document.getElementById('showD');
    var y = document.getElementById('new-order');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function deliveries() {
    var delValues = []
    var location;
    var Email;
    var phone;
    if (($("input#location").val() === "") || ($("input#phone").val() === "") || ($("input#mail").val() === "")) {
        alert("EMPTY DELIVERY INPUTS.Continuing makes you order without delivery .click ok to continue .If you want delivery click delivery button to add delivery info");
        return false;
    } else {
        location = $("input#location").val();
        delValues.push(location);
        Email = $("input#mail").val();
        delValues.push(Email);
        phone = $("input#phone").val();
        delValues.push(phone);
    }
    var y = document.getElementById('new-order');
    y.style.display = 'block';
    return delValues;
}
$(document).ready(function() {
    $("input").change(function() {
        var inputtedSize = $('input[name="Size"]:checked').val();
        var inputtedCrust = $('input[name="Crust"]:checked').val();
        var howMany = $('input#howMany').val();
        console.log(howMany)
        console.log(inputtedCrust);
        console.log(inputtedSize);
        var order1 = new Order(inputtedSize, inputtedCrust, inputtedTop, howMany)
        console.log(order1);
        var size = document.getElementById("orderSize");
        size.textContent = "Size:       " + inputtedSize;
        var Crust = document.getElementById("orderCrust");
        Crust.textContent = "Crust:      " + inputtedCrust;

        var toppings = document.querySelector("#orderToppings");
        toppings.textContent = " "
        toppings.textContent = "Toppings:       " + inputtedTop;

        var ordertot = document.querySelector("#orderTotal p");
        ordertot.textContent = "Total=    " +
            order1.total();
    });
    $("#new-order").click(function(event) {
        var size = document.querySelector("#orderSize")
        var Crust = document.querySelector("#orderCrust")
        var Toopings = document.querySelector("#orderToppings");
        var howMany = $("input#howMany").val();
        var y = document.getElementById("");
        var delivery = deliveries();
        var Total = document.querySelector("#orderTotal p")
        if (($('input[name="Size"]:checked').val() === "Any") || ($('input[name="Crust"]:checked').val() === "") || (inputtedTop.length === 0)) {
            alert("hey your order is incomplete fill out missing values");
            $('input[type="radio"]').prop("checked", false);
            $('input[type="checkbox"]').prop("checked", false);
            return false;
        }
        var x = document.getElementById("showD");
        if (x.style.display === 'none') {
            // alert("if you want it delivered then you have to enter your details below.<br>Click ok to proceed")
            bo = '<div class="card w-400px">' +
                '<div class="card-header">' +
                '<h1 class="center">Order Summary</h1>' +
                '</div>' +
                '<div class="card-body">' +
                '<ul style="font-weight:bold" class="pb-5 mb-5">' +
                '<li>' + size.innerHTML + '</li>' +
                '<li class="p-3">' + Crust.innerHTML + '</li>' +
                '<li class="p-3">' + Toopings.innerHTML + '</li>' +
                '<li class="p-3">' + 'HowMany: ' + howMany + '</li>' +
                '<li style="border:1px black; padding:5px; margin:3px; height:100%;">' + 'Ksh' + Total.innerHTML + '</li>' +
                '</ul>' + '</div>' +
                '<div class="card-footer">' +
                '<p>We aprecite you </p>' +
                '</div>';
            document.getElementsByTagName("body")[0].innerHTML = bo;

            $('input[type="radio"]').prop("checked", false);
            $('input[type="checkbox"]').prop("checked", false);
            return false;
        } else {
            bo = '<div class="card w-400px">' +
                '<div class="card-header">' +
                '<h1 class="center">Order Summary</h1>' +
                '</div>' +
                '<div class="card-body">' +
                '<ul style="font-weight:bold" class="pb-5 mb-5">' +
                '<li>' + size.innerHTML + '</li>' +
                '<li class="p-3">' + Crust.innerHTML + '</li>' +
                '<li class="p-3">' + Toopings.innerHTML + '</li>' +
                '<li class="p-3">' + 'HowMany: ' + howMany + '</li>' +
                '<li style="border:1px black; padding:5px; margin:3px; height:100%;">' + 'Ksh' + Total.innerHTML + '</li>' +
                '</ul>' + '</div>' + '<div class="destination">' + '<div class="bold">' + 'Destination' + '</div>' +
                '<div>' + 'Location: ' + delivery[0] + ' </div>' +
                '<div>' + 'Phone number :' +
                delivery[2] + '</div>' +
                '<div>' + 'Email: ' + delivery[1] + ' </div>' +
                '</div>' +
                '<div class="card-footer">' +
                '<p>Thank you for shoping with us</p>' +
                '</div>';
            document.getElementsByTagName("body")[0].innerHTML = bo;
            alert("We are delivering to " + delivery[0]);
            $('input[type="radio"]').prop("checked", false);
            $('input[type="checkbox"]').prop("checked", false);
        }
    });

});
$("input[type=checkbox]").change(function() {
    var inputtedSize = $('input[name="Size"]:checked').val();
    if (inputtedSize == "Any") {
        alert("Its absurd to select toppings before choosing the size");
        $('input[type="checkbox"]').prop("checked", false)
        return
    } else {


        if (inputtedTop.includes(this.value)) {
            inputtedTop.splice(inputtedTop.indexOf(this.value), 1);
        } else {
            inputtedTop.push(this.value);
        };
    }
});


$("#submit").click(function() {
    deliveries();
    return false;
})


$(".showdelivery").click(function() {
    show();
});



Order.prototype.total = function() {
    let total = 0;
    let sizep = parseInt(sizePrices[this.Size]);
    let crustP = parseInt(crustPrices[this.Crust]);
    let howMany = parseInt(this.howMany);
    let arr = this.Toppings;
    total += sizep;
    total += crustP;
    sizeA = this.Size;
    tops = arr.forEach(function(top) {
        total += parseInt(toppingPrice[sizeA][top]);
    })
    total *= howMany;
    return (total);
}