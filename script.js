let p = 0
var inherit = 'XXX'
function calcMask(hosts) {
    hosts = parseFloat(hosts) + 2
    
    let maxN = 2
    for (i = 0; hosts > maxN; i++){
        maxN = 2**i
    }

    console.log('i = ' + i);
    console.log('Hosts necessários = ' + maxN);   // qntd de hosts necessários                        
    console.log('i invertido = ' + (i - 9));

    let mask = 24-(i-9)
    console.log(`mascara =  ${mask}`); // calculo da mascara
    
    let maskTD = document.getElementById('mask'+p); // getting mask cell

    if(hosts <= 256){
        let numMask = 0
        var xx = 9-i
        for(let z = 0, g = 7; z < xx ; g--, z++){
            numMask = 2**g + numMask
        }
        maskTD.innerHTML = `255.255.255.${numMask}`
    } else if (hosts > 256){
        let numMask = 0
        let h = i - 9

        maskTD.innerHTML = `255.255.${256-(2**h)}.0`
    }

    let ipN3 = 0

    if(p>0) {
        ipN3 = inherit
    }   

    if (p>0 && ipN3>255){
        ipN2.value = parseFloat(ipN2.value) + 1;
        ipN3 = 0
    }

    let idNet = document.getElementById('idNet'+p);
    idNet.innerHTML = ipN0.value + '.' + ipN1.value + '.' + ipN2.value + '.' + ipN3+ '/' + mask

    let ipV = document.getElementById('ipV'+p);
    ipV.innerHTML = ipN0.value + '.' + ipN1.value + '.' + ipN2.value + '.' + (ipN3 + 1) 

    if(maxN > 255) {
        ipN2.value = parseFloat(ipN2.value) + ((maxN/256)-1)
        maxN = 256
    }

    maxN += ipN3

    let lastIP = document.getElementById('lastIP'+p);
    lastIP.innerHTML = ipN0.value + '.' + ipN1.value + '.' + ipN2.value + '.' + (maxN - 2)

    let bCast = document.getElementById('bCast'+p);
    bCast.innerHTML = ipN0.value + '.' + ipN1.value + '.' + ipN2.value + '.' + (maxN - 1)

    inherit = maxN

    createLan()
}

/*
# 
# 
# 
# 
*/

let j = 2
function createLan() {
            p++
            if (j !== 6){
                for (let z = 0; z < 6; z++){ 
                let row = document.getElementById(`myRow${z}`);
                let b = row.querySelectorAll('td')
                let ids = ['','mask','idNet','ipV','lastIP','bCast']
                let x = row.insertCell(row.length); 
                if(z < 1){x.outerHTML = (`<th>Lan ${j}</th>`)}
                b = row.querySelectorAll('td')
                if (z>0){
                    b[j].id = ids[z]+p 
            }       
        }
        j++
    }
}

/*
#
#
#
*/

function preMask(caseClass) {
    let classe
    switch(caseClass){
        case 'A':
            classe = [10,0,0];
            break
        case 'B':
            classe = [172,16,0];
            break
        case 'C':
            classe = [192,168,0]
    }
    defineM(classe)

    function defineM(classM){
        document.getElementById('ipN0').value = classM[0];
        document.getElementById('ipN1').value = classM[1];
        document.getElementById('ipN2').value = classM[2];
    }
}
