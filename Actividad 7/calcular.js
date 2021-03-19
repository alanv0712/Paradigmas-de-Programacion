function calculate(numero1, numero2, value){

    var result;

    if(value == 1){
        result = parseFloat(numero1) + parseFloat(numero2);
        document.getElementById("resultado").innerHTML = result;
    } else if (value == 2){
        result = parseFloat(numero1) - parseFloat(numero2);
        document.getElementById("resultado").innerHTML = result;
    } else if(value == 3){
        result = parseFloat(numero1) * parseFloat(numero2);
        document.getElementById("resultado").innerHTML = result;
    } else if (value == 4){
        result = parseFloat(numero1) / parseFloat(numero2);
        document.getElementById("resultado").innerHTML = result;
    } else {
        alert("Error unkown operation");
    }
}