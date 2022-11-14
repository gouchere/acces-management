const niveaux=[
    {id:1, title:"Administrateur"},
    {id:2, title:"Magasinier"},
    {id:3, title:"Pointeurs"},
    {id:4, title:"Producteur"},
    {id:5, title:"Comptable"},
    {id:6, title:"Chef de centre"},
    {id:7, title:"Directeur générale"}

]

const modules=[
    {id:1, title:"Données de base"},
    {id:2, title:"Commerciale"},
    {id:3, title:"Comptabilité & finance"},
    {id:4, title:"Ressources humaine"},
    {id:5, title:"Relations clients"},
    {id:6, title:"Mutuelle"},
    {id:7, title:"Paramétrage"},
    {id:8, title:"Statistique"},
    {id:9, title:"Gestion de projets"},
]
const pages=[
    {id:1, module:1, title:"Paramètres"},
    {id:2, module:1, title:"Dictionnaire"},
    {id:3, module:1, title:"Models de numérotation"},
    {id:4, module:1, title:"Unité de mesures"},
    {id:4, module:1, title:"Niveaux d'accès"},

    {id:5, module:2, title:"Paramètres généraux"},
    {id:6, module:2, title:"Points de vente"},
    {id:7, module:2, title:"Remises"},
    {id:8, module:2, title:"Facture de vente"},
    {id:9, module:2, title:"Livraisons vente"},

    {id:10, module:3, title:"Règlements"},
    {id:11, module:3, title:"Virements de caisse"},
    {id:12, module:3, title:"Mise à jour"},
    {id:13, module:3, title:"Facture d'avoir vente"},
    {id:14, module:3, title:"Lettrage des comptes"},
    {id:15, module:3, title:"Centre analytique"},
]

const ressources=[
    {
        niveau:1,
        page:2,
        module:3,
        reference:"ref",
        autorisation:false
    }
]
export {niveaux, modules, pages}