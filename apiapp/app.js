const express = require('express')
const app = new express()

let trajets = []

trajets.push({
    "heuredépart":"17h20",
    "heurearrivé":"17h23",
    "départ": "Nation",
    "arrivée": "Chatelet",
    "id":"",
    "nom":"",
    "prenom":""
},
    {
    "départ": "Auber",
    "arrivée": "Versaille",
    "id":1,
    "nom":"",
    "prenom":""
    },
    {
    "départ": "Sartrouville",
    "arrivée": "Gare de Lyon",
    "id":2,
    "nom":"",
    "prenom":""
    },
    {
    "départ": "La Defense",
    "arrivée": "Suresnes",
    "id":3,
    "nom":"",
    "prenom":""
    },
    {
    "départ": "Le Blanc Mesnil",
    "arrivée": "Stade de France",
    "id":4,
    "nom":"",
    "prenom":""
    }
)

app.get('/recherche/:id', function (req, res) {
    // let reponse = {
    //     "Status": "Je suis en marche"
    // }
    let reponse;

    for(i=0; i<trajets.length; i++){
        if( trajets[i].id == req.params.id){
            reponse = {
                    "Status": "Exacte"
                }
        }        
    }

    res.json(reponse)
})

app.get('/', function (req, res) {
    let reponse = {
        "Status": "Je suis en marche"
    }
    res.json(reponse)
})
app.get('/trajets', function (req, res) {

    res.json(trajets)
})

app.get('/trajets/supprimertrajers/:id', function (req, res) {
    for(i=0; i<trajets.length; i++){
        if( trajets[i].id == req.params.id){
          
            // trajets[i].heuredépart="",
            // trajets[i].heurearrivé="",
            // trajets[i].départ= "",
            // trajets[i].arrivée="",
            // trajets[i].id="",
            // trajets[i].nom="",
            // trajets[i].prenom=""
            trajets.splice(i, i)
        
        }        
    }

    res.json(trajets)
})
app.get('/trajets/ajouter/:depart/:arrivee', function (req, res) {
    trajets.push({
        "départ":req.params.depart,
        "arrivée":req.params.arrivee
    })
    res.json("OK")
})
app.get('/trajets/:id', function (req, res) {

    res.json(reponse)
})

app.get('/trajets/ajouter/Accompagnant/:id/:prenom/:nom', function (req, res) {
    // trajets.push({
    //     "départ":req.params.depart,
    //     "arrivée":req.params.arrivee
    // })
    // res.json("OK")

    let reponse;

    if( trajets[1].id == req.params.id){
    reponse = {
            "Status": "Cet id existe déjà"
        }
    }



    for(i=0; i<trajets.length; i++){
        if( trajets[i].id == req.params.id){
            reponse = {
                    "Status": "Exacte"
                }
            trajets[i].nom = req.params.nom;
            trajets[i].prenom = req.params.prenom;
        }        
    }


    res.json(trajets)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))