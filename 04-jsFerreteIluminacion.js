/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
// CON SWITCH

function CalcularPrecio() {
    let vCantLamp;
    let vDesc;
    let vMarca;
    vCantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    vMarca = document.getElementById("Marca").value;

    switch (vCantLamp) {
        case 1:
        case 2:
            vDesc = vCantLamp * 35;
            document.getElementById("txtIdprecioDescuento").value = vDesc;
            break;

        case 5:
            switch (vMarca) {
                case "ArgentinaLuz":
                    vDesc = (vCantLamp * 35 * 0.60).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
                default:
                    vDesc = (vCantLamp * 35 * 0.70).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
            }
            break;
        case 4:
            switch (vMarca) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    vDesc = (vCantLamp * 35 * 0.75).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
                default:
                    vDesc = (vCantLamp * 35 * 0.80).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
            }
            break;
        case 3:
            switch (vMarca) {
                case "ArgentinaLuz":
                    vDesc = (vCantLamp * 35 * 0.85).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
                case "FelipeLamparas":
                    vDesc = (vCantLamp * 35 * 0.90).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
                default:
                    vDesc = (vCantLamp * 35 * 0.95).toFixed(2);
                    document.getElementById("txtIdprecioDescuento").value = vDesc;
                    break;
            }
            break;
        default:
            vDesc = (vCantLamp * 35 * 0.5).toFixed(2);
            document.getElementById("txtIdprecioDescuento").value = vDesc;
            break;
    }

    switch (vDesc) {
        case vDesc > 120:            
            document.getElementById("txtIdprecioDescuento").value = (vDesc * 1.10).toFixed(2);
            alert("IIBB Usted pagó " + ((vDesc * 1.10).toFixed(2)) + " final siendo " + ((vDesc * 0.10).toFixed(2)) + " el impuesto agregado");
            break;
        }
    
    /*if (vDesc>120) {
            document.getElementById("txtIdprecioDescuento").value = (vDesc * 1.10).toFixed(2);
            alert("IIBB Usted pagó " + ((vDesc * 1.10).toFixed(2)) + " final siendo " + ((vDesc * 0.10).toFixed(2)) + " el impuesto agregado");
        }
    */
      
}




/*
// CON IF
function CalcularPrecio() {
    let vCantLamp;
    let vDesc;
    let vMarca;
    vCantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    vMarca = document.getElementById("Marca").value;

    // PARTE A
    if (vCantLamp >=0 && vCantLamp <=2) {
        vDesc = vCantLamp * 35;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }
    if (vCantLamp >= 6) {
        vDesc = vCantLamp * 35 * 0.5;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }
    // PARTE B
    else if (vCantLamp == 5 && vMarca == "ArgentinaLuz") {
        vDesc = vCantLamp * 35 * 0.60;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }

    else if (vCantLamp == 5 && vMarca != "ArgentinaLuz") {
        vDesc = vCantLamp * 35 * 0.70;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }
    //PARTE C
    else if (vCantLamp == 4 && (vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas")) {
        vDesc = vCantLamp * 35 * 0.75;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }

    else if (vCantLamp == 4 && !(vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas")) {
        vDesc = vCantLamp * 35 * 0.80;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }
    // PARTE D
    else if (vCantLamp == 3 && vMarca == "ArgentinaLuz") {
        vDesc = vCantLamp * 35 * 0.85;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }
    else if (vCantLamp == 3 && vMarca == "FelipeLamparas"){
        vDesc = vCantLamp * 35 * 0.90;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }

    else if (vCantLamp == 3 && !(vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas")) {
        vDesc = vCantLamp * 35 * 0.95;
        document.getElementById("txtIdprecioDescuento").value = vDesc;
    }
    //PARTE E
    if (vDesc>120) {
        document.getElementById("txtIdprecioDescuento").value = (vDesc * 1.10).toFixed(2);
        alert("IIBB Usted pagó " + ((vDesc * 1.10).toFixed(2)) + " final siendo " + ((vDesc * 0.10).toFixed(2)) + " el impuesto agregado");
    }
}
*/
