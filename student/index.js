//importing
const express=require("express")
//2. initialize
const app = new express();
app.use(express.json());
 
const Array = [
    {id:1,name: "Anjana", department:"Computerscience"},
    {id:2,name: "Nandhana", department:"Commerce"},
];
app.get("/view",(req,res)=>
    {
        res.send(Array)
    })
app.delete("/remove",(req,res)=>{
        Array.pop()
        res.send("deleted successfully")
    });
    app.post('/add',(req,res) => {
        console.log(req.body);
        Array.push(req.body);
        res.send("Data added");
    });
    app.get('/',(req, res) => {
        res.send("Message from the server");
    });
//4. port
app.listen(2900,() => {
    console.log("Server is running on port");
});
