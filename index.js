//var numberOfButton = $(".cal-btn").length;
//console.log(numberOfButton);

//$(".cal-btn").click(function () {
//    numberOfButton++;
//    var buttonInnerHTML = this.innerHTML;
//    input(buttonInnerHTML);
//})

//function input(v) {
//    var val = $(".input-body");
//    val.value += v;
//}

var num1 = "";
var num2 = "";
var operators = "";
var total = "";

$(".cal-btn").click(function (e) {
    if (!$(this).hasClass("not")) {
        if ($(".input-body").val() == 0) {
            $(".input-body").val($(this).text());
        }
        else {
            $(".input-body").val(
                $(".input-body").val() + $(this).text());
        }
    }
}); 





$(".reset").click(function () {
    $(".input-body").val("0");
});


function numberHandler(num) {
   
}

function operatorHandler(oper) {
    operators = oper;
}

function display(btn) {
    $(".input-body").text(btn);
}

function handleTotal() {
    switch (operator) {
        case '+': total = +num1 + +num2;
            display(total);
        break;
    }
}