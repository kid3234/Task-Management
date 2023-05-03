const express = require("express")
const mysql = require("mysql")
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
const db= mysql.createConnection(
    {
        host: 'db4free.net',
        user: 'kidus_bi20',
        password:"Kid12@1993",
        database: "database_user" 
    }
   
)
app.post("/signup",(req,res)=>{
    const sql="INSERT INTO usertable (name,email,password) VALUES(?,?,?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,values,(err,data)=>{
        
        if(err){
            // console.log(err)
            return res.json("Error")
        }else{
            // console.log(data)
            return res.json(data)
        }
           
    })
})

app.post("/Login",(req,res)=>{
    const sql = "SELECT * FROM usertable WHERE email=? AND password=?";
    db.query(sql,[ req.body.email,req.body.password],(err,data)=>{
        
        if(err){
            // console.log(err)
            return res.json("Error")
        }
         if(data.length > 0){
            
            // console.log(data[0].id)
            return  res.json({
                status:"Success",
                id:data[0].id
            })
            
        }else{
            // console.log(data)
            return res.json("Faile")
        } 
           
    })
})

app.post("/Task",(req,res)=>{
    const sql="INSERT INTO task (title,description,date,uid) VALUES(?,?,?,?)";
    const values =[
        req.body.title,
        req.body.description,
        req.body.date,
        req.body.uid
    ]
    db.query(sql,values,(err,data)=>{
        
        if(err){
            // console.log(err)
            return res.json("Error")
        }else{
            // console.log(data)
            return res.json(data)
        }
           
    })
})
app.put("/:id",(req,res)=>{
    const tid=req.params.id
    const sql=`UPDATE task SET title=?,description=?,date=? WHERE id = ${tid}`;
    // console.log(req.body) 
   
    const values =[
        req.body.title,
        req.body.description,
        req.body.date.substr(0,10)
    ]

    db.query(sql,values,(err,data)=>{
        // console.log(data)
        if(err){
            // console.log(err)
            return res.json("Error")
        }else{
            // console.log(data)
            return res.json(data)
        }
           
    })
})

app.put("/item/:id",(req,res)=>{
    const tid=req.params.id
    const ischecked= req.body.tstatus;
    console.log(req.body.tstatus) 
    const sql=`UPDATE task SET IsCompleted=? WHERE id = ${tid}`;
    
    // const values =[
    //     req.body.IsCompleted,
    // ]
    db.query(sql,ischecked,(err,data)=>{
        // console.log(data)
        if(err){
            // console.log(err)
            return res.json("Error")
        }else{
            // console.log(data)
            return res.json(data)
        }
           
    })
})
app.delete("/:id",(req,res)=>{
    const tid=req.params.id
    const sql=`DELETE  from task WHERE id = ${tid}`;
    // console.log(req.body) 
    db.query(sql,(err,data)=>{
        // console.log(data)
        if(err){
            // console.log(err)
            return res.json("Error")
        }else{
            // console.log(data)
            return res.json(data)
        }
           
    })
})

app.get("/:id",(req,res)=>{
    const id=req.params.id
    const sql = `SELECT * FROM task WHERE uid='${id}'`;
    db.query(sql,(err,data)=>{
        // console.log(data)
        if(err){
            // console.log(err)
            return res.json("Error")
        }else if(data.length >0){
            // console.log(data)
            return res.json({
                tasks: data
            })
        }else{
            return res.json("Faile")
        }
           
    })
})
app.listen(8081,()=>{
    console.log("listening")
})