const express=require('express');
const path=require('node:path');

const server = express();
const port = 3000; //localhost:3000

server.use(express.static('public')); //pastas estática do public

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','html','index.html'));
})
server.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','html','login.html'));
})
server.post('/login',(req,res)=>{
    const email=res.body.email;
    const password=res.body.password;
    console.log(`Tentativa de login com: ${email}`);

    // Aqui você faria a validação no banco de dados
    if (email === "admin@teste.com" && password === "1234") {
        res.send("<h1>Login realizado com sucesso!</h1>");
    } else {
        res.send("<h1>Usuário ou senha incorretos.</h1>");
    }
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})