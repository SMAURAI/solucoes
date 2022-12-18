//DESCRIÇÃO
/*
A função captura os valores que foram apresentados nos campos do HTML e valida se foram preenchidos.
A ideia é que ele realize a validação antes de submeter ao PHP, além disso, aprender como manipular dados que não foram apresentados em um formulário.
*/
function main(){
        // Captura dos valores que foram preenchidos no documento HTML
				var user = document.getElementById("user").value
				var pass = document.getElementById("pass").value

        // Validação do resultado contido nos campos
				if(user == ""){
					alert("Preencha o formulário!")
				}
				else{
					if(pass == ""){
						alert("Preencha o formulário!")
					}
					else{
						alert("Conectando!")
						alert(user)
					}
				}
			}
