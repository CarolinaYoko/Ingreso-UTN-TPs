/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let Imp1
    let Imp2
    let Imp3

    Imp1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    Imp2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    Imp3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("La suma es: " + (Imp1 + Imp2 + Imp3));
	
}

function Promedio () 
{
	let Imp1;
    let Imp2;
    let Imp3;

    Imp1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    Imp2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    Imp3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("El promedio es: " + ((Imp1 + Imp2 + Imp3)/3));

}

function PrecioFinal () 
{
	let Imp1;
    let Imp2;
    let Imp3;

    Imp1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    Imp2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    Imp3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("Precio final es: " + (Imp1 + Imp2 + Imp3)*1.21);

}