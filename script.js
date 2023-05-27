function criptografar(){
    const textoInicial = utils()
    const novoTexto = document. getElementById("novoTexto")
    const arrayListText = textoInicial.split("");
    const arrayListCript = []
    
    for (let i = 0; i < arrayListText.length; i++) {
        if(arrayListText[i] == 'a') {
            arrayListCript.push('ai')
        } else if (arrayListText[i] == 'e') {
            arrayListCript.push('enter') 
        } else if (arrayListText[i] == 'i') {
            arrayListCript.push('imes')
        } else if (arrayListText[i] == 'o') {
            arrayListCript.push('ober')
        } else if (arrayListText[i] == 'u') {
            arrayListCript.push('ufat')
        } else {
            arrayListCript.push(arrayListText[i])
        }
    }

    novoTexto.innerHTML = arrayListCript.join('')
    
}


function descriptografar(){
    const textoFinal = utils()
    const novoTexto = document. getElementById("novoTexto")
    const descriptografar = textoFinal.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a')
    .replaceAll('ober', 'o').replaceAll('ufat', 'u')


    novoTexto.innerHTML = descriptografar
    
}

function utils () {
    const textoInicial = document.getElementById("texto").value.toLowerCase()
    const resultado = document.getElementById('resultado')
    const mensagem = document.getElementById('mensagem')
    const apagar = document.getElementById("apagar")
    const novoTextoPai = document.getElementById('novoTextoPai')

    
    resultado.style.justifyContent = 'start' 
    novoTextoPai.classList.add("aparecer")
    

    return textoInicial
    
} 

    