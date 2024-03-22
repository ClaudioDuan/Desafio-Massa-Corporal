
        function calcular(){
            var nome = document.querySelector('#nome').value
            var num1 = document.querySelector('#alt1')
            var num2 = document.querySelector('#pe1')
            var res = document.querySelector('#res')
            var altura = parseFloat(num1.value)
            var peso = parseFloat(num2.value)
            var imc = peso / (altura * altura)
            
            res.innerHTML =  ` ${nome} é: ${imc.toFixed(2)}`
        }

        function limpar(){
            var nome = document.querySelector('#nome').value = ''
            var num1 = document.querySelector('#alt1').value = ''
            var num2 = document.querySelector('#pe1').value = ''
            var res = document.querySelector('#res')
        
            res.innerHTML = ''
        
        }

