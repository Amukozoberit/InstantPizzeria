let inputtedTop = [];
$(document).ready(function() {
    $("input").change(function() {
        var inputtedSize = $('input[name="Size"]:checked').val();
        var inputtedCrust = $('input[name="Crust"]:checked').val();
        $('input[name="Toppings"]:checked').each(function() {
            // console.log(this.value);
            if (inputtedTop.includes(this.value)) {

            } else {
                inputtedTop.push(this.value);
            }


        });
        // console.log(inputtedTop);
        // console.log(inputtedCrust);
        // console.log(inputtedSize);
        var order1 = new Order(inputtedSize, inputtedCrust, inputtedTop)
        console.log(order1);
    });





    $("#add-form").click(function() {
        $("form#pizzaOrder").append(


        )
    });
});


function Order(Size, Crust, Toppings) {
    this.Size = Size;
    this.Crust = Crust;
    this.Toppings = Toppings;
}