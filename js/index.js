let inputtedTop = [];
$(document).ready(function() {
    $("input").change(function() {
        var inputtedSize = $('input[name="Size"]:checked').val();
        var inputtedCrust = $('input[name="Crust"]:checked').val();
        $('input[name="Toppings"]:checked').each(function() {
            //console.log(this.value);

            inputtedTop.push(this.value);

        });
        console.log(inputtedTop);
        // $('input[name="Toppings"]:checked').each(function() {
        //     console.log(this.value);
        // });

        console.log(inputtedCrust);
        console.log(inputtedSize);

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