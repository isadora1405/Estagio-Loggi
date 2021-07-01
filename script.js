var numero = document.getElementById('numero') // Recebe o código de barras digitado
var res = document.getElementById('res') // Retorna para o HTML
var vendBloq = [584] //Lista de vendedores bloqueados

// Lista por região
var lista0 = []
var lista1 = []
var lista3 = []
var lista5 = []
var lista8 = []

// Listas por tipo
var tipo0 = []
var tipo1 = []
var tipo3 = []
var tipo5 = []
var tipo8 = []

// Lista vendedor
var vend0 = []
var vend1 = []
var vend3 = []
var vend5 = []
var vend8 = []


function finalizar(){ // Função executada depois de clicado enviar
    if (numero.value.length == 15){ // Valida se o cód. tem 15 dígitos

        //Variáveis de separação do cod de barras
        var regOrigem   = numero.value.slice( 0, 3)  //Digito de origem 
        var regDestino  = numero.value.slice( 3, 6)  //Digito de destino
        var regLoggi    = numero.value.slice( 6, 9)  //Digito Loggi
        var codVendedor = numero.value.slice( 9, 12) //Dígito do vendedor
        var tipProduto  = numero.value.slice(12)     //Digito produto
        var libVendedor = false // Variável de verificação vendedor liberado

        for (let pos in vendBloq){ //Verifica se o vendedor está na lista de bloqueados
            if (codVendedor.indexOf(vendBloq[pos]) != -1){
                libVendedor = false
                window.alert(`O vendedor ${codVendedor} está bloqueado`)
            }else{
                libVendedor = true
            }
        }

        //Verificação das regiões, dos produtos e vendedores (chamada de função)
        var origem  = regiao(regOrigem)
        var destino = regiao(regDestino)
        var produto = produtos(tipProduto)
        var vendedor = vender(codVendedor)

        //Varifica validação de todos os ítems do codgo de barras
        if (origem.length > 1   &&
            destino.length > 1  &&
            regLoggi == 555     &&
            libVendedor == true &&
            produto.length > 1 
            ){
                if (regOrigem == 000 && tipProduto == 888){
                    window.alert(`O produto ${numero.value}, que tem origem a região sul, tem brinquedo em seu conteúdo`)
                }
                listaDestino(regDestino)
                listaTipo(tipProduto)
                listaVend(codVendedor)
        }else{
            window.alert("Código inválido")
        }

    }else{
        window.alert("Código de barras não possui 15 dígitos")
    } 
}

function regiao(origem){ //Função de verificação da região (origem e destino)
    if (origem == 111){
        return "Centro-oeste"
    }else if (origem == 333){
        return "Nordeste"
    }else if (origem == 555){
        return "Norte"
    }else if (origem == 888){
        return "Sudeste"
    }else if (origem == 000){
        return "Sul"
    }else{
        window.alert("Região inválida")
    }
}

function produtos(item){ //Função de verificação do produto
    if (item == 111){
        return "Livros"
    }else if (item == 333){
        return "Eletrônicos"
    }else if (item == 555){
        return "Bebidas"
    }else if (item == 888){
        return "Brinquedos"
    }else if (item == 000){
        return "Jóias"
    }else{
        window.alert("Produto inválido")
    }
}
function vender(vendas){
    if (vendas == 123){
        return "Vendedor 123"
    }else if (vendas == 124){
        return "Vendedor 124"
    }else if (vendas == 874){
        return "Vendedor 874"
    }else if (vendas == 654){
        return "Vendedor 654 "
    }else if (vendas == 845){
        return "Vendedor 845"
    }else{
        window.alert("Vendedor inválido")
    }
}

function listaDestino(des){ //Função adição listas de entregas por região
    if (des == 111){
        lista1.push(numero.value)
    }else if (des == 333){
        lista3.push(numero.value)
    }else if (des == 555){
        lista5.push(numero.value)
    }else if (des == 888){
        lista8.push(numero.value)
    }else if (des == 000){
        lista0.push(numero.value)
    }
}

function listaTipo(des){ //Função adição listas de entregas por produto
    if (des == 111){
        tipo1.push(numero.value)
    }else if (des == 333){
        tipo3.push(numero.value)
    }else if (des == 555){
        tipo5.push(numero.value)
    }else if (des == 888){
        tipo8.push(numero.value)
    }else if (des == 000){
        tipo0.push(numero.value)
    }
}

function listaVend(des){ //Função adição listas de Vendedores
    if (des == 123){
        vend1.push(numero.value)
    }else if (des == 124){
        vend3.push(numero.value)
    }else if (des == 874){
        vend5.push(numero.value)
    }else if (des == 654){
        vend8.push(numero.value)
    }else if (des == 845){
        vend0.push(numero.value)
    }
}

function listarRegiao(){
    // Retorna ao HTML
    res.innerHTML = " "
    res.innerHTML += `Lista por região <br>`
    res.innerHTML += `Sul <br>`
    for (let pos in lista0){
        res.innerHTML += `${lista0[pos]} <br>`
    }
    res.innerHTML += `Cetro-oeste <br>`
    for (let pos in lista1){
        res.innerHTML += `${lista1[pos]} <br>`
    }
    res.innerHTML += `Nordeste <br>`
    for (let pos in lista3){
        res.innerHTML += `${lista3[pos]} <br>`
    }
    res.innerHTML += `Norte <br>`
    for (let pos in lista5){
        res.innerHTML += `${lista5[pos]} <br>`
    }
    res.innerHTML += `Sudeste <br>`
    for (let pos in lista8){
        res.innerHTML += `${lista8[pos]} <br>`
    }
}

function listarProdutos(){
    // Retorna ao HTML
    res.innerHTML = " "
    res.innerHTML += `Lista por produtos <br>`
    res.innerHTML += `Jóias <br>`
    for (let pos in tipo0){
        res.innerHTML += `${tipo0[pos]} <br>`
    }
    res.innerHTML += `Livros <br>`
    for (let pos in tipo1){
        res.innerHTML += `${tipo1[pos]} <br>`
    }
    res.innerHTML += `Eletrônicos <br>`
    for (let pos in tipo3){
        res.innerHTML += `${tipo3[pos]} <br>`
    }
    res.innerHTML += `Bebidas <br>`
    for (let pos in tipo5){
        res.innerHTML += `${tipo5[pos]} <br>`
    }
    res.innerHTML += `Brinquedos <br>`
    for (let pos in tipo8){
        res.innerHTML += `${tipo8[pos]} <br>`
    }
} 

function listarVendedor(){
   // Retorna ao HTML
    res.innerHTML = " "
    res.innerHTML += `Lista de Vendedores <br>`
    res.innerHTML += `Vendedor 123 <br>`
    for (let pos in vend1){
        res.innerHTML += `${vend1[pos]} <br>`
    }
    res.innerHTML += `Vendedor 124 <br>`
    for (let pos in vend3){
        res.innerHTML += `${vend3[pos]} <br>`
    }
    res.innerHTML += `Vendedor 874 <br>`
    for (let pos in vend5){
        res.innerHTML += `${vend5[pos]} <br>`
    }
    res.innerHTML += `Vendedor 654 <br>`
    for (let pos in vend8){
        res.innerHTML += `${vend8[pos]} <br>`
    }
    res.innerHTML += `Vendedor 845 <br>`
    for (let pos in vend0){
        res.innerHTML += `${vend0[pos]} <br>`
    }
    
}