/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let F;

    F = parseInt(document.getElementById("txtIdTemperatura").value) ;
    
    alert( F + " Fahrenheit son " + (F-32)*(5/9) + " Centígrados");

    //alert( Fare + " Fahrenheit son " + FahrenheitCentigrados(Fare) + " Centígrados");

}

function CentigradosFahrenheit () 
{
    let C;

    C = parseFloat(document.getElementById("txtIdTemperatura").value) ;
    
    alert( C + " Centígrados son " + ((C*(9/5))+32) +" Fahrenheit");
	
}
