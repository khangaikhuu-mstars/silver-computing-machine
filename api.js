const express = require('express');  
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express');  
  
const app = express();  
  
app.listen(3001 ,()=>console.log("listening on 3001"));  
  
//Swagger Configuration  
const swaggerOptions = {  
    swaggerDefinition: {  
        info: {  
            title:'Foods API',  
            version:'1.0.0'  
        }  
    },  
    apis:['api.js'],  
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));  
   
  
app.get('/Foods',(req, res)=>{  
    res.send([  
        {  
            id:1, Name:'Sushi', portion: 1  
        },  
        {  
            id:2,Name:'Buuz', portion: 2  
        }  
    ])  
});  
  
 
 app.post('/Foods',(req,res)=>{  
   res.status(201).send();  
});  
 
 app.put('/Foods',(req,res)=>{  
    res.status(201).send();  
 });  
  
  app.delete('/Foods',(req,res)=>{  
    res.status(201).send();  
 });
