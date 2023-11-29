const resposta = document.querySelector(".resposta");
const formulario = document.querySelector(".formulario")
const input = formulario.querySelector(".input")
let valor = 0;




function recebeNumero()
{
    
document.addEventListener('submit', function(e)
{
    valor = 0;
    resposta.innerHTML = " ";
    

    let b = Math.round(input.value)

    for(let i = b - 1; i > 0; i--)
    {
       if(i % 3 == 0 || i % 5 == 0)
       { 
        valor += i;
       }
    }
  
    e.preventDefault();
    resposta.innerHTML += "A resposta é " + valor;
})
}

recebeNumero();
























