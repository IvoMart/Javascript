console.log("Monstrando valores en la Consola del Navegador");

var repeticiones = 3
var num1 = 6
var num2 = 6

var vuelta = repeticiones
    /*for (i = repeticiones; i <= repeticiones; i--) {
        if (i > 0) {
            alert('Iniciamos la vuelta ' + i)
                //vuelta--
        } else {
            alert('Ya se finalizó la vuelta')
            console.log(i)
            console.log(repeticiones)
            i = 0
            break
        }
    }*/

while (vuelta >= 0) {
    if (vuelta > 0) {
        alert('Iniciamos la vuelta ' + vuelta)
    }
    if (vuelta == 0) {
        alert('Ya se finalizó la vuelta')
        console.log(vuelta)
        console.log(repeticiones)
    }
    vuelta--
}



var resultado = num1 * num2;
if (resultado < 35) {
    alert(resultado + " es menor a 35");

} else if (resultado > 35) {
    alert(resultado + ' es mayor a 35');
}