const  changeImage = () => {
    element = document.getElementById('myImage')
    if (element.src.match("focoOn")){
        element.src = "/Actividad 6/images/focoOff.png"
    } else {
        element.src = "/Actividad 6/images/focoOn.png"
    }
}