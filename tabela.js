var DELIMITER = ';'
var DELIMITER_COMMA = ','
var  NEWLINE = '\n'
var i = document.getElementById('file')
var table = document.getElementById('table')
var nascii
var headers
var j 
var nj

(function () {

    j =1
    if (!i) {
        return;
    }

    i.addEventListener('change',function(){
        if(!!i.files && i.files.length > 0){
            parseCSV(i.files[0]);
        }
    });

    function parseCSV(file){
        if(!file || !FileReader){
            return;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
            toTable(e.target.result);
        };

        reader.readAsText(file);
        if (!x){
        
            var inum = document.createElement('input') // -
            var ins = document.getElementById('ins') // ---
            inum.setAttribute("id","primeiro_vet1") // ----
            inum.setAttribute("size","8") // -------------- CRIA OS INPUTS
            var indois = document.createElement('input') // 
            indois.setAttribute("id","segundo_vet1") // --
            indois.setAttribute("size","8") // ------------

            var select = document.createElement('select')
            select.setAttribute("id","op")
            var op_mais = document.createElement('option')
            op_mais.textContent = '+'
            var op_menos = document.createElement('option')
            op_menos.textContent = '-'
            var op_vezes = document.createElement('option')
            op_vezes.textContent = 'x'
            var op_divi = document.createElement('option')
            op_divi.textContent = '/'
            select.appendChild(op_mais)
            select.appendChild(op_menos)
            select.appendChild(op_vezes)
            select.appendChild(op_divi)

            var btn = document.createElement('input')
            btn.setAttribute("type","button")
            btn.setAttribute("value","Enviar")
            btn.setAttribute("onclick","enviar()")

            var br = document.createElement('br')
            var pe = document.createElement('p')
            pe.setAttribute("id","pp")
            pe.textContent='Resultados:'

            ins.appendChild(inum)
            ins.appendChild(select)
            ins.appendChild(indois)
            ins.appendChild(btn)
            ins.appendChild(br)
            ins.appendChild(pe)
            ins.appendChild(br)
            
            x = true 
        }
    }
    
    function toTable(text){ //=-------------------------------------------------------------------------
        if (!text || !table){
            return;
        }

        //clear table
        while (!!table.lastElementChild){
            table.removeChild(table.lastElementChild);
        }
 
        var rows = text.split(NEWLINE)
        var rolas = text.split(NEWLINE)
        var num_colunas = rolas.shift().trim().split(DELIMITER).length

        headers = []
        nascii = 65

        for (nascii; nascii<=(64+(num_colunas/2));nascii++){// for que cria o vetor header

            headers.push(String.fromCharCode(nascii))

        }
        var htr = document.createElement('tr')
        var th = document.createElement('th')

        for (var nc=1; nc<=headers.length;nc++){ //for dos titulos duplos
            var th = document.createElement('th')
            th.textContent = headers[nc-1]
            th.setAttribute('colspan', 2)
            htr.appendChild(th)
        }
        table.appendChild(htr);
        
        var rtr;

        do {
            window['v' + j] = []
            j++
        } while(j<=num_colunas)
        nj = j

        rows.forEach(function (r) {
            r = r.trim();

            var cols = r.split(DELIMITER);

            rtr = document.createElement('tr');
            cols.forEach(function (c){

                var td = document.createElement('td');
                var tc = c.trim();

                td.textContent = tc;
                rtr.appendChild(td);

            });

            table.appendChild(rtr);

            for (var k=1; k<=num_colunas; k++){//Vn recebe os valores de col[n]

                (window['v'+k]).push(cols[k-1])
        
            }
            
        })
    }   
    
})();

var ans_head = []
var ans_push = []
var todas_respostas = []
var contador_resposta = 0

var x

function enviar(){

    if(um==0 || dois==0){// condicionar de não ter espaço em branco

        window.alert('Um dos vetores não foi selecionado')
        return;
        
    } 
    var op = document.getElementById("op").value
    var um = document.getElementById("primeiro_vet1").value
    var dois = document.getElementById('segundo_vet1').value

    if((um.charCodeAt(0)-32) >= 65 && (um.charCodeAt(0)-32) <=90){
        um = String.fromCharCode(um.charCodeAt(0)-32)
    }

    if((dois.charCodeAt(0)-32) >= 65 && (dois.charCodeAt(0)-32) <=90){
        dois = String.fromCharCode(dois.charCodeAt(0)-32)
    }
    
    if (headers.includes(um)==false && ans_push.includes(um)==false) {

        alert('O primeiro vetor não existe')
        return;

    } if (headers.includes(dois)==false && ans_push.includes(dois)==false)  {

        alert('O segundo vetor não existe')
        return;

    } 
    
    if (ans_push.includes(um)==true || ans_push.includes(dois)==true) { 

        if (ans_push.includes(um)==true) {

            var posi_um = (2*(ans_push.indexOf(um))+(nj))
            var posi_erro_um = (2*(ans_push.indexOf(um))+(1+nj))
   
        } else {

            var posi_um = (2*(headers.indexOf(um))+1)
            var posi_erro_um = (2*(headers.indexOf(um))+2)
    
        }

        if (ans_push.includes(dois)==true) {

            var posi_dois = (2*(ans_push.indexOf(dois))+(nj))
            var posi_erro_dois = (2*(ans_push.indexOf(dois))+(1+nj))
    
        } else {

            var posi_dois = (2*(headers.indexOf(dois))+1)
            var posi_erro_dois = (2*(headers.indexOf(dois))+2)
    
        }

    
    } else {

        var posi_um = (2*(headers.indexOf(um))+1)
        var posi_dois = (2*(headers.indexOf(dois))+1)
        var posi_erro_um = (2*(headers.indexOf(um))+2)
        var posi_erro_dois = (2*(headers.indexOf(dois))+2)

    }

    contador_resposta++
    ans_head = String.fromCharCode(nascii+contador_resposta-1) // da o valor ao vetor titulo-resposta
    ans_push.push(ans_head)

    const supertable = document.getElementById('supertable')
    const elemento = document.createElement('table')
    elemento.setAttribute("id","table2")

    var ans_htr = document.createElement('tr') // tr para criar th

    var resp_titulo = document.createElement('th')
    resp_titulo.textContent = `${ans_head} (${um}${op}${dois})`
    resp_titulo.setAttribute('colspan', 2)
    ans_htr.appendChild(resp_titulo)
    
    elemento.appendChild(ans_htr)
    supertable.appendChild(elemento)

    function addVec(M1,M2){
        let ans = []
        
        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string'){ 
                
            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

              M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });
              
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=(M1[l]+M2[l]).toFixed(4)

        }
        return ans
    } 

    function subVec(M1,M2){
        let ans = []

        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

            M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=(M1[l]-M2[l]).toFixed(4)

        }
        return ans

    }

    function eaddVec(M1,M2){
        let ans = []

        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

            M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=(Math.sqrt((M1[l])**2+(M2[l])**2)).toFixed(4)

        }
        return ans

    }

    function mulVec(M1,M2){
        let ans = []

        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

            M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=(M1[l]*M2[l]).toFixed(4)

        }
        return ans

    }

    function emulVec(M1,M2,M3,M4){
        let ans = []

        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string' || typeof(M3[0]) == 'string' || typeof(M4[0]) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

            M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });

            M3 = (M3).map(str => {
                return parseFloat(str, 10);
              });

            M4 = (M4).map(str => {
                return parseFloat(str, 10);
              });
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=(Math.sqrt((M1[l]*M4[l])**2+(M2[l]*M3[l])**2)).toFixed(4)

        }
        return ans

    }

    function divVec(M1,M2){
        let ans = []

        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

            M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=(M1[l]/M2[l]).toFixed(4)

        }
        return ans

    }

    function edivVec(M1,M2,M3,M4){
        let ans = []

        if (typeof(M1[0]) == 'string' || typeof(M2[0]) == 'string' || typeof(M3[0]) == 'string' || typeof(M4[0]) == 'string'){ // pensar um jeito de tornar isso uma função

            M1 = (M1).map(str => {
                return parseFloat(str, 10);
              });

            M2 = (M2).map(str => {
                return parseFloat(str, 10);
              });

            M3 = (M3).map(str => {
                return parseFloat(str, 10);
              });

            M4 = (M4).map(str => {
                return parseFloat(str, 10);
              });
        }

        for (var l=0; l<=M1.length; l++){
            ans[l]=((Math.sqrt((M1[l]/M3[l])**2+(M2[l]/M4[l])**2))*(M3[l]/M4[l])).toFixed(4)

        }
        return ans

    }

    switch (op){

        case '+':
            var resposta_soma = addVec(window['v'+posi_um],window['v'+posi_dois])
            var resposta_soma2 = eaddVec(window['v'+posi_erro_um],window['v'+posi_erro_dois])
            break
        case '-':
            var resposta_soma = subVec(window['v'+posi_um],window['v'+posi_dois])
            var resposta_soma2 = eaddVec(window['v'+posi_erro_um],window['v'+posi_erro_dois])
            break
        case 'x':
            var resposta_soma = mulVec(window['v'+posi_um],window['v'+posi_dois])
            var resposta_soma2 = emulVec(window['v'+posi_erro_um],window['v'+posi_erro_dois],window['v'+posi_um],window['v'+posi_dois])
            break
        case '/':
            var resposta_soma = divVec(window['v'+posi_um],window['v'+posi_dois])
            var resposta_soma2 = edivVec(window['v'+posi_erro_um],window['v'+posi_erro_dois],window['v'+posi_um],window['v'+posi_dois])
            break
    }

    //console.log(resposta_soma)
    resposta_soma.pop()
    resposta_soma2.pop()
    var soma_ans = [];

    for (var i = 0; i < resposta_soma.length; i++) { // for que junta os vetores medida + erro
        soma_ans.push([resposta_soma[i].toString(), resposta_soma2[i]].toString());
    }

    soma_ans.forEach(function (r) {

        var resp_cols = r.split(DELIMITER_COMMA)

        rtr = document.createElement('tr')
        resp_cols.forEach(function (c){

            var td = document.createElement('td')
            var tc = c.trim();

            td.textContent = tc
            rtr.appendChild(td)

        });

        elemento.appendChild(rtr)
        
        
    })

    window['v'+j] = resposta_soma
    window['v'+(j+1)] = resposta_soma2
    j+=2

    todas_respostas.push(soma_ans)
    //console.log(todas_respostas)
    supertable.appendChild(elemento)
}