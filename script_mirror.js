const tableBin = [1,2,4,8,16,32,64,128]


function calcMask() {

    let host = document.getElementById('hosts').value;
    let class1 = document.querySelector('input[name="class"]:checked').value;

    host = parseFloat(host) + 2
   
    var i = 0
    let sub = 0
        
        if (host <= 512 && host > 128) {
            console.log('255.255.254.0', 254, class1, host)

        } else if (host > 128) {
            while(host > sub){
                let sub = tableBin[i] * 256
                i++
                if (sub > host){
                    //console.log('sub igual ===' + sub + ' i = ' + i)
                    
                    let x = 0
                    let menos = 0

                    while(x < i-1) {    
                        menos = menos + tableBin[x]
                        x++
                    }       
                    //console.log(menos)
                    createRow((255-menos) + '.000', (255-menos),class1, host)             
                    break
                }
            }

        } else if((host-2) > 0) {
            for(element of tableBin){
                var a = element - host
                if(a>=0) {
                    //console.log('O CORRETO É ' + element)
                    break
                }   
            }   

            let octeto = 256 - element
            createRow('255.' + octeto, octeto, class1, host)

        }  else {console.log('ERRO')}
    }


    function createRow(value1, value2, class1, host) {
        let maskTD = document.getElementById('mask');
        maskTD.innerHTML = `255.255.${value1}`

        let cidrV = cidr(value2,class1,host)
        function cidr(value, classCVT, host) {
            let i = 0
            i++
            console.log(i);
            if (host> 128){
                console.log('GRANDE');
                //AQQQQQQQQQQQQQQQQQQQQQQQQQ
            }   else {
                for(element of tableBin.reverse()) {
                    if(element == value){
                        classCVT = parseFloat(classCVT)
                        i = parseFloat(i)
                        return classCVT + i
                        break
                    }    
                }
            }
        }



        let idNet = document.getElementById('idNet');
        idNet.innerHTML = `XXX.XXX..XXX.${value2 - value2}/${cidrV}` 

        let ipV = document.getElementById('ipV');
        ipV.innerHTML = `XXX.XXX..XXX.${value2 - value2 + 1}` 

        let lastIP = document.getElementById('lastIP');
        lastIP.innerHTML = `XXX.XXX..XXX.${value2 - 2}` 

        let bCast = document.getElementById('bCast');
        bCast.innerHTML = `XXX.XXX..XXX.${value2 - 1}` 
    }