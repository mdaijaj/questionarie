const express = require('express')
const app = express()
const cookieParser= require('cookie-parser')
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname)); 
// app.use(cors());
app.use(cookieParser());

let routes=require('./route/index')
app.use('/', routes);

app.get('/', (req, res)=>{
    console.log("api is working...")
    return res.send({message: "welcome to backend app" })
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
