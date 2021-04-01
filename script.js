function insert(num) {

        document.form.text.value = document.form.text.value + num;
 count_dot = 0;
}

var count = 0, count_dot=0;
function operator(num){
    count+=1;
    if(count ==1){
     document.form.text.value = document.form.text.value + num;
    document.getElementsByClassName("item").innerHeight = count;
        }
}

function dot(num){
     count_dot+=1;
    if(count_dot ==1){
     document.form.text.value = document.form.text.value + num;
    document.getElementsByClassName("item").innerHeight = count_dot;
        }
}


function equal() {
    var exp = document.form.text.value;
    if (exp) {
        document.form.text.value = eval(exp)
    }
}

function clean() {
    document.form.text.value = "";
    count = 0;
}

function back() {
 var exp = document.form.text.value;
    document.form.text.value = exp.substring(0, exp.length - 1);
    count = 0;
}

