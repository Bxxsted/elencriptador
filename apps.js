let botonEncriptar = document.querySelector('.encriptar');
let botonDesencriptar = document.querySelector('.desencriptar');
let muneco = document.querySelector('.muneco');
let contenedor = document.querySelector('.parrafo');
let resultado = document.querySelector('.textoResultado');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    let cajaTexto = recuperarTexto();
    if (cajaTexto == null) return;
    ocultarAdelante();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    let cajaTexto = recuperarTexto();
    if (cajaTexto == null) return;
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    let cajaTexto = document.querySelector('.cajatexto');
    return cajaTexto.value;
}

function ocultarAdelante() {
    if (muneco && contenedor) {
        muneco.classList.add('ocultar');
        contenedor.classList.add('ocultar');
    }
}
function encriptarTexto(mensaje){
    let texto = mensaje.toLowerCase();
    let textoFinal = ''

    for (let i = 0; i < texto.length; i++){
        if (texto[i] == 'a'){
            textoFinal = textoFinal + 'ai'
        }
        else if (texto[i] == 'e'){
            textoFinal = textoFinal + 'enter'
        }
        else if (texto[i] == 'i'){
            textoFinal = textoFinal + 'imes'
        }
        else if (texto[i] == 'o'){
            textoFinal = textoFinal + 'ober'
        }
        else if (texto[i] == 'u'){
            textoFinal = textoFinal + 'ufat'
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    let texto = mensaje.toLowerCase();
    let textoFinal = '';

    for (let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }  
    }
    return textoFinal;
    }

    function validateDOM() {
        let requiredElements = ['.encriptar', '.desencriptar', '.muneco', '.parrafo', '.cajatexto', '.textoResultado'];
        let allElementsPresent = requiredElements.every((selector) => document.querySelector(selector)!= null);
        if (!allElementsPresent) {
            console.error("One or more required elements are missing in the DOM.");
        }
    }
    
    validateDOM();

    function copiar() {
        let resultadoElement = document.querySelector(".textoResultado");
        if (resultadoElement) {
            let contenido = resultadoElement.textContent;
            navigator.clipboard.writeText(contenido);
            alert('Copied to clipboard');
        } else {
            console.error("Resultado element not found.");
        }
    }

    function copiar() {
        let resultadoElement = document.querySelector(".textoResultado");
        if (resultadoElement) {
            let contenido = resultadoElement.textContent;
            navigator.clipboard.writeText(contenido);
            alert('Copied to clipboard');
        } else {
            console.error("Resultado element not found.");
        }
    }

    const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    });