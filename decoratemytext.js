function onButtonClick() {
    // alert("Hello, world!");
    // document.getElementById("sample").style.fontSize = "24pt"

    setInterval(function increaseSize() {
        let currentFontSize = parseInt($("#sample").css('font-size')) + 2
        $("#sample").css('font-size', currentFontSize + 'pt')
    }, 500);

}

function onCheckBoxChange() {
    if (document.getElementById("checkbox").checked === true) {
        $("#sample").addClass("new-style");
        $("body").css('background-image', 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")');
    } else {
        $("#sample").removeClass("new-style");
        $("body").css('background-image', '');
    }
}

function onClickIgpayAtinlay() {
    var txtStr = document.getElementById("sample").value;
    var str = txtStr.trim().split(" ");
    var str_new = "";
    for (var i = 0; i < str.length; i++) {
        str_new += convertIgpayAtinlay(str[i]) + " ";
    }
    document.getElementById("sample").value = str_new;
}

function convertIgpayAtinlay(str) {
    return str.replace(/\b(\w)(\w+)\b/g, function(a, b, c) {
        if (/[A-Z]/.test(b)) {
            c = c.replace(/^\w/, function(x) {
                return x.toUpperCase()
            });
        }
        return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay');
    });
}

function onClickMalkovitch() {
    let textArea = document.getElementById("sample");
    var txtStr = textArea.value;
    var str = txtStr.trim().split(" ");
    var str_new = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str_new += "Malkovitch ";
        } else {
            str_new += str[i] + " ";
        }
    }
    textArea.value = str_new;
}