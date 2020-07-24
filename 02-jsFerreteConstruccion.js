/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let L;
    let A;

    L=parseInt(document.getElementById("txtIdLargo").value) ;
    A=parseInt(document.getElementById("txtIdAncho").value) ;

    alert("Debes comprar " + (6*L+6*A) + " metros de alambre");

}
function Circulo () 
{
    let R;

    R=parseInt(document.getElementById("txtIdRadio").value) ;
    
    alert ("Debes comprar " + 6*3.14*R + " metros de alambre"); //¿por qué da distinto si pongo o no paréntesis? si la multiplicacion es comutativa...

} 
function Materiales () 
{
    let L;
    let A;

    L=parseInt(document.getElementById("txtIdLargo").value) ;
    A=parseInt(document.getElementById("txtIdAncho").value) ;

    alert("Debes comprar " + (L*A)*2 + " bolsas de cemento y " + (L*A)*3 + " bolsas de cal");
 

}