const express = require("express");
const app = express();

app.use(express.json());
app.get('/:id',(req,res)=>{
    const x=req.params.id;
    const data=tablas(x)

    res.send({data})
})



function tablas(x){
    let data=[
    
    ];
    for(i=2 ;i<=9 ;i++){
        data.push({"number":x, "pos":i, "value":x*i})

}
return data; 
}

app.listen(3000);
