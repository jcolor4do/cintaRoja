// 14.- Escriba una función para ingresar 
//      cualquier letra del alfabeto y verifique 
//      si es vocal o consonante


let checarLetra = (letra) => {
    if (letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U') {
        return "Es una vocal";
    } else if ((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z')) {
        return "Es una consonante";
    } else {
        return "Debes introducir una letra del alfabeto";
    }
}

checarLetra('a');