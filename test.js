
//"x":1,"y":1
function tablas(x){
    let data=[
    
    ];
    for(i=1 ;i<=9 ;i++){
   data.push({"number":x, "pos":i, "value":x*i})

}
console.log(data);    
}

tablas(5);
