/*1. Se requiere un algoritmo para obtener la edad promedio de un grupo de N alumnos. 
Si algún alumno tiene más de 18 años, se muestra el promedio que se lleva sin contar el alumno de 18 años.
 EL usuario decide si desea cerrar el programa o vuelve a ejecutarlo.

2. Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo for.

3. Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.

4. Se requiere un algoritmo para determinar, de N cantidades, cuántas son menores o iguales a cero y cuántas mayores a cero.

5. Realice un algoritmo para generar e imprimir los números pares e impares que se encuentran entre 0 y 100. Además muestre la multiplicación de todos estos.

6. Realice un algoritmo para generar N elementos de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13,…).

Sugerencia.
Hacerlos en Java, Javascript, .Net, Python */

// 1.

let arranqueCiclo = 1;
let edad = 0;
let AcumEdad = 0;
let cantidadPer = 0;
let promEdad = 0;
let cont1 = 0;

while(arranqueCiclo != 0)
{ 
    
    if(edad < 19)
    {
        edad = parseInt (prompt("Escriba su edad"));
        AcumEdad = AcumEdad + edad;
        cantidadPer++;    
    }
    else
    {
        cantidadPer--;
        AcumEdad = AcumEdad - edad;
        promEdad = AcumEdad/cantidadPer;
         alert("Sumatoria de edades: " + AcumEdad);
        alert("El promedio de edad hasta el momento es de: " + promEdad);
        arranqueCiclo = parseInt(prompt("Desea continuar? Digite 1 SI 0 NO"));
    }
    
}





