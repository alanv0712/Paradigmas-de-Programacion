const  changeImage1 = () => {
    var startTime1 = new Date();
    var endTime1;
    var total1;
    var difference1;
    var timer1;
    element = document.getElementById('myImage1')
    if (element.src.match("On")){
        endTime1 = new Date();
        timer1 = endTime1.getHours() + ":" + endTime1.getMinutes() + ":" + endTime1.getSeconds();
        difference1 = Math.round(endTime1 - startTime1);
        total1 = Math.round((difference1 / 60000) / 60);
        total1 = total1 * 52;
        element.src = "/Proyecto primer parcial/images/Off.png"
        document.getElementById('fin1').innerHTML = "Hora del fin: " + timer1;
        document.getElementById('total1').innerHTML = "Total: " + total1;
    } else {
        startTime1 = new Date();
        document.getElementById('fin1').innerHTML = "Hora del fin: ";
        document.getElementById('total1').innerHTML = "Total: ";
        timer1 = startTime1.getHours() + ":" + startTime1.getMinutes() + ":" + startTime1.getSeconds();
        element.src = "/Proyecto primer parcial/images/On.png"
        document.getElementById('inicio1').innerHTML = "Hora de Inicio: " + timer1;
    }   
}
const  changeImage2 = () => {
    var startTime2 = new Date();
    var endTime2;
    var total2;
    var difference2;
    var timer2;
    element = document.getElementById('myImage2')
    if (element.src.match("On")){
        endTime2 = new Date();
        timer2 = endTime2.getHours() + ":" + endTime2.getMinutes() + ":" + endTime2.getSeconds();
        difference2 = Math.round(endTime2 - startTime2);
        total2 = Math.round((difference2 / 60000) / 60);
        total2 = total2 * 52;
        element.src = "/Proyecto primer parcial/images/Off.png"
        document.getElementById('fin2').innerHTML = "Hora del fin: " + timer2;
        document.getElementById('total2').innerHTML = "Total: " + total2;
    } else {
        startTime2 = new Date();
        document.getElementById('fin2').innerHTML = "Hora del fin: ";
        document.getElementById('total2').innerHTML = "Total: ";
        timer2 = startTime2.getHours() + ":" + startTime2.getMinutes() + ":" + startTime2.getSeconds();
        element.src = "/Proyecto primer parcial/images/On.png"
        document.getElementById('inicio2').innerHTML = "Hora de Inicio: " + timer2;
    }   
}
const  changeImage3 = () => {
    var startTime3 = new Date();
    var endTime3;
    var total3;
    var difference3;
    var timer3;
    element = document.getElementById('myImage3')
    if (element.src.match("On")){
        endTime3 = new Date();
        timer3 = endTime3.getHours() + ":" + endTime3.getMinutes() + ":" + endTime3.getSeconds();
        difference3 = Math.round(endTime3 - startTime3);
        total3 = Math.round((difference3 / 60000) / 60);
        total3 = total3 * 52;
        element.src = "/Proyecto primer parcial/images/Off.png"
        document.getElementById('fin3').innerHTML = "Hora del fin: " + timer3;
        document.getElementById('total3').innerHTML = "Total: " + total3;
    } else {
        startTime3 = new Date();
        document.getElementById('fin3').innerHTML = "Hora del fin: ";
        document.getElementById('total3').innerHTML = "Total: ";
        timer3 = startTime3.getHours() + ":" + startTime3.getMinutes() + ":" + startTime3.getSeconds();
        element.src = "/Proyecto primer parcial/images/On.png"
        document.getElementById('inicio3').innerHTML = "Hora de Inicio: " + timer3;
    }   
}
const  changeImage4 = () => {
    var startTime4 = new Date();
    var endTime4;
    var total4;
    var difference4;
    var timer4;
    element = document.getElementById('myImage4')
    if (element.src.match("On")){
        endTime4 = new Date();
        timer4 = endTime4.getHours() + ":" + endTime4.getMinutes() + ":" + endTime4.getSeconds();
        difference4 = Math.round(endTime4 - startTime4);
        total4 = Math.round((difference4 / 60000) / 60);
        total4 = total4 * 52;
        element.src = "/Proyecto primer parcial/images/Off.png"
        document.getElementById('fin4').innerHTML = "Hora del fin: " + timer4;
        document.getElementById('total4').innerHTML = "Total: " + total4;
    } else {
        startTime4 = new Date();
        document.getElementById('fin4').innerHTML = "Hora del fin: ";
        document.getElementById('total4').innerHTML = "Total: ";
        timer4 = startTime4.getHours() + ":" + startTime4.getMinutes() + ":" + startTime4.getSeconds();
        element.src = "/Proyecto primer parcial/images/On.png"
        document.getElementById('inicio4').innerHTML = "Hora de Inicio: " + timer4;
    }   
}
const  changeImage5 = () => {
    var startTime5 = new Date();
    var endTime5;
    var total5;
    var difference5;
    var timer5;
    element = document.getElementById('myImage5')
    if (element.src.match("On")){
        endTime5 = new Date();
        timer5 = endTime5.getHours() + ":" + endTime5.getMinutes() + ":" + endTime5.getSeconds();
        difference5 = Math.round(endTime5 - startTime5);
        total5 = Math.round((difference5 / 60000) / 60);
        total5 = total5 * 52;
        element.src = "/Proyecto primer parcial/images/Off.png"
        document.getElementById('fin5').innerHTML = "Hora del fin: " + timer5;
        document.getElementById('total5').innerHTML = "Total: " + total5;
    } else {
        startTime5 = new Date();
        document.getElementById('fin5').innerHTML = "Hora del fin: ";
        document.getElementById('total5').innerHTML = "Total: ";
        timer5 = startTime5.getHours() + ":" + startTime5.getMinutes() + ":" + startTime5.getSeconds();
        element.src = "/Proyecto primer parcial/images/On.png"
        document.getElementById('inicio5').innerHTML = "Hora de Inicio: " + timer5;
    }   
}
const  changeImage6 = () => {
    var startTime6 = new Date();
    var endTime6;
    var total6;
    var difference6;
    var timer6;
    element = document.getElementById('myImage6')
    if (element.src.match("On")){
        endTime6 = new Date();
        timer6 = endTime6.getHours() + ":" + endTime6.getMinutes() + ":" + endTime6.getSeconds();
        difference6 = Math.round(endTime6 - startTime6);
        total6 = Math.round((difference6 / 60000) / 60);
        total6 = total6 * 52;
        element.src = "/Proyecto primer parcial/images/Off.png"
        document.getElementById('fin6').innerHTML = "Hora del fin: " + timer6;
        document.getElementById('total6').innerHTML = "Total: " + total6;
    } else {
        startTime6 = new Date();
        document.getElementById('fin6').innerHTML = "Hora del fin: ";
        document.getElementById('total6').innerHTML = "Total: ";
        timer6 = startTime6.getHours() + ":" + startTime6.getMinutes() + ":" + startTime6.getSeconds();
        element.src = "/Proyecto primer parcial/images/On.png"
        document.getElementById('inicio6').innerHTML = "Hora de Inicio: " + timer6;
    }   
}
