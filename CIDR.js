let calcCIDR = (a) => {

    let posArr = 0
    let maskArr = [0,0,0,0]

    if(a<9){
        posArr = 0;
    }   else if(a > 8 && a < 17){
        a = a - 8;
        maskArr = [255,0,0,0]
        posArr = 1;
    }   else if(a >16 && a <= 24){
        a = a -16
        maskArr = [255,255,0,0]
        posArr = 2;
    }   else if(a > 24){
        a = a -24
        maskArr = [255,255,255,0]
        posArr = 3;
    }  
    
    let product = 0
    for(i=7; i > (7-a); i--){
        product += 2**i
    }
    console.log(i);
    console.log(product);

    maskArr[posArr] = product;
    maskArr = maskArr.toString()
    maskArr = maskArr.replaceAll(',', '.');

    a > 32 ? document.getElementById('result').innerHTML = 'Valor Inválido!' : document.getElementById('result').innerHTML = maskArr;
    
}
