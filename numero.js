function enviar(){
    
    var num1 = document.getElementById('num1').value
    var enum1 = document.getElementById('enum1').value
    var num2 = document.getElementById('num2').value
    var enum2 = document.getElementById('enum2').value

    var op = document.getElementById('op').value

    function addVec(M1,M2){
        let ans
        
        if (typeof(M1) == 'string' || typeof(M2) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)
        }

        ans=(M1+M2).toFixed(4)

        return ans
    } 

    function subVec(M1,M2){
        let ans 

        if (typeof(M1) == 'string' || typeof(M2) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)
        }

        ans=(M1-M2).toFixed(4)

        return ans

    }

    function eaddVec(M1,M2){
        let ans 

        if (typeof(M1) == 'string' || typeof(M2) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)
        }

        ans=(Math.sqrt((M1)**2+(M2)**2)).toFixed(4)

        return ans

    }

    function mulVec(M1,M2){
        let ans 

        if (typeof(M1) == 'string' || typeof(M2) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)
        }

        ans=(M1*M2).toFixed(4)

        return ans

    }

    function emulVec(M1,M2,M3,M4){
        let ans 

        if (typeof(M1) == 'string' || typeof(M2) == 'string' || typeof(M3) == 'string' || typeof(M4) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)

            M3 = parseFloat(M3)

            M4 = parseFloat(M4)
        }

        ans=(Math.sqrt((M1*M4)**2+(M2*M3)**2)).toFixed(4)

        return ans

    }

    function divVec(M1,M2){
        let ans 

        if (typeof(M1) == 'string' || typeof(M2) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)
        }

        ans=(M1/M2).toFixed(4)

        return ans

    }

    function edivVec(M1,M2,M3,M4){
        let ans = []

        if (typeof(M1) == 'string' || typeof(M2) == 'string' || typeof(M3) == 'string' || typeof(M4) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = parseFloat(M1)

            M2 = parseFloat(M2)

            M3 = parseFloat(M3)

            M4 = parseFloat(M4)
        }

        ans=((Math.sqrt((M1/M3)**2+(M2/M4)**2))*(M3/M4)).toFixed(4)
        return ans

    }

    switch (op){

        case '+':
            var resposta = addVec(num1,num2)
            var resposta_erro = eaddVec(enum1,enum2)
            break
        case '-':
            var resposta = subVec(num1,num2)
            var resposta_erro = eaddVec(enum1,enum2)
            break
        case 'x':
            var resposta = mulVec(num1,num2)
            var resposta_erro = emulVec(enum1,enum2,num1,num2)
            break
        case '/':
            var resposta = divVec(num1,num2)
            var resposta_erro = edivVec(enum1,enum2,num1,num2)
            break
    }

    console.log(resposta)
    console.log(resposta_erro)

    var p = document.createElement('p')
    var tabela_resposta = document.createElement('p')
    var copy = document.createElement('button')
    copy.textContent = 'Click'

    tabela_resposta.textContent = `(${num1} ± ${enum1}) ${op} (${num2} ± ${enum2}) = ${resposta} ± ${resposta_erro}  `
    var div_resp = document.getElementById('resposta')
    tabela_resposta.appendChild(copy)
    p.appendChild(tabela_resposta)
    div_resp.appendChild(p)
  
}

