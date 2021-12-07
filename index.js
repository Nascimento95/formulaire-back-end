const express = require("express")
const app = express()
const port = 5000
// pour utiliser handlebars il faut c'est 3 ligne
const engine = require("express-handlebars").engine
app.engine("handlebars",engine())
app.set("view engine","handlebars")
// permet d'utiliser le formulaire pour recupéré les valeur de l'input 
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.render('home');
});
// je créé la route pour avoir accès a mon formulaire
app.get("/form", (req, res) => {
    res.render('form')
})
// ma page signup de handlebar j'ai créé la route
app.get("/signup", (req, res) => {
    res.render('signup')
})
// et la après le form je dirige vers la page /signup
app.post('/form/signup', (req, res) => {
    console.log(req.body)
    res.redirect('/signup')
})
  console.log("salut");
app.listen(port , () =>{
    console.log(`serveur started on port: ${port}`);
})