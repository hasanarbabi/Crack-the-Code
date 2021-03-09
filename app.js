var rands = [];
var rand = 0;

for(var i = 0; i < 3; i++) {
    rand = Math.floor(Math.random() * 10);
    rands.push(rand);
}

console.log(rands);

function crack() {
    var html = ""
    var numbers = [];
    var j = 0;
    for(var i = 1; i < 4; i++) {
        numbers.push(parseInt(document.getElementById("number-" + i).value));
    }

    console.log(numbers)

    for(var i = 0; i < rands.length; i++) {
        if (rands[i] < numbers[i]) {
            html += "[Please enter Lower number.] ";
        } else if (rands[i] > numbers[i]) {
            html += "[Please enter higher number.] ";
        } else {
            html += "[Number " + numbers[i] + " " + "is corect.] ";
            j++
        }
    }

    if(j == 3){
        html += "<marquee><h1>You Win...</h1></marquee>"
    }

    document.getElementById("output").innerHTML += html + "<br>";
}





