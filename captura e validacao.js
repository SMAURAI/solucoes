//Javascript
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
