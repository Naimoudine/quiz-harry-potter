export let db = [ 
    {
        question: {
            id: 1,
            type: "images",
            text: "Comment s'appellent les meilleurs amis de Harry ?"
        }, 
        answers: [
            {text: "Hermione et Ron", "result": true},
            {text: "Crabbe et Goyle", "result": false},
            {text: "Drago et Severus", "result": false},
            {text: "Luna et Neville", "result": false}
            // {img: "../assets/Images/question1-hermione-ron.jpg", "result": true},
            // {img: "../assets/Images/question1-drago-severus.jpg", "result": false},
            // {img: "../assets/Images/question1-CrabbandGoyle.jpg", "result": false},
            // {img: "../assets/Images/question1-neville-luna.webp", "result": false}
        ]
    },
    {
        question: {
            id: 2,
            type: "text",
            text: "Quel âge a Harry Potter à son arrivée à Poudlard?"
        }, 
        answers: [
            {text: "11 ans", "result": true},
            {text: "12 ans", "result": false},
            {text: "13 ans", "result": false},
            {text: "14 ans", "result": false}
        ]
    },
    {
        question: {
            id: 3,
            type: "text/img",
            text: "Combien y a-t-il d'horcruxes ?",
            img: "../assets/Images/question3.jpg"
        }, 
        answers: [
            {text: "7", "result": true},
            {text: "8", "result": false},
            {text: "9", "result": false},
            {text: "10", "result": false}
        ]
    },
    {
        question: {
            id: 4,
            type: "text/img",
            text: "Comment s'appelle l'araignée de Hagid?"
        }, 
        answers: [
            {text: "Aragog", "result": true},
            {text: "Crockdur", "result": false},
            {text: "Norbert", "result": false},
            {text: "Buck", "result": false}
        ]
    },
    {
        question: {
            id: 5,
            type: "text",
            text: "Quel est le nom de Hagid?"
        }, 
        answers: [
            {text: "Rubeus", "result": true},
            {text: "Albus", "result": false},
            {text: "Severus", "result": false},
            {text: "Sirius", "result": false}
        ]
    },
    {
        question: {
            id: 6,
            type: "text/img",
            text: "Quel sortilège le professeur McGonagall avoue-t-elle avoir toujours eu envie d’essayer ?"
        }, 
        answers: [
            {text: "Piertotum Locomotor", "result": true},
            {text: "Petrificus totalus", "result": false},
            {text: "Tarrentallegra", "result": false},
            {text: "Avada Kedavra", "result": false}
        ]
    },
    {
        question: {
            id: 7,
            type: "text",
            text: "Quel sort permet de crocheter une serrure ?"
        }, 
        answers: [
            {text: "Alohomora", "result": true},
            {text: "Aloevera", "result": false},
            {text: "Aloemoraurat", "result": false},
            {text: "Alocommentuva", "result": false}
        ]
    },
    {
        question: {
            id: 8,
            type: "text/img",
            text: "Qu'est-ce que Bellatrix écrit sur le bras de Hermione ?"
        }, 
        answers: [
            {text: "Sang-de-bourbe", "result": true},
            {text: "Sang-de-moldu", "result": false},
            {text: "Sang-impur", "result": false},
            {text: "Je ne dois pas mentir", "result": false}
        ]
    },
    {
        question: {
            id: 9,
            type: "text",
            text: "Quel sortilège Hermione utilise-t-elle contre Drago dans la Salle sur Demande ?"
        }, 
        answers: [
            {text: "Expelliarmus", "result": true},
            {text: "Stupéfix", "result": false},
            {text: "Endoloris", "result": false},
            {text: "Immobilis", "result": false}
        ]
    },
    {
        question: {
            id: 10,
            type: "text/img",
            text: "Dans quelle ville retrouve-t-on tante Marge toute gonflée ?"
        }, 
        answers: [
            {text: "Sheffield", "result": true},
            {text: "Londres", "result": false},
            {text: "Sainsbury", "result": false},
            {text: "Aberdeen", "result": false}
        ]
    },
    {
        question: {
            id: 11,
            type: "text",
            text: "Qu'est-ce que les B.U.S.E ?"
        }, 
        answers: [
            {text: "Brevet Universel de Sorcellerie Elémentaire", "result": true},
            {text: "Baccalauréat Universitaire des Sorciers Expérimentés", "result": false},
            {text: "Brevet Universitaire de Sorcellerie Elémentaire", "result": false},
            {text: "Blaireaux Unijambiste Sous Extasie", "result": false}
        ]
    },
    {
        question: {
            id: 12,
            type: "text",
            text: "Qu'obtient-on en ajoutant de la racine d'asphodèle en poudre à une infusion d'armoise ?"
        }, 
        answers: [
            {text: "La goutte du mort vivant", "result": true},
            {text: "Du polynectar", "result": false},
            {text: "Un philtre d'amour nommé Amortentia", "result": false},
            {text: "La potion tue-loup", "result": false}
        ]
    },
    {
        question: {
            id: 13,
            type: "text/img",
            text: "Quelle est la créature magique que les élèves de première année ont rencontré lors du cours qui s’est déroulé près du lac du Parc de Poudlard ?"
        }, 
        answers: [
            {text: "Douze hippogriffes", "result": true},
            {text: "Douze sombrals", "result": false},
            {text: "Douze elfes de maisons", "result": false},
            {text: "Douze centaures", "result": false}
        ]
    },
    {
        question: {
            id: 14,
            type: "images",
            text: "Quel est le patronus de Severus ?"
        }, 
        answers: [
            {text: "Une biche", "result": true},
            {text: "Un pigeon", "result": false},
            {text: "Un Jack Russel terrier", "result": false},
            {text: "Un cerf", "result": false}
        ]
    },
    {
        question: {
            id: 15,
            type: "text/img",
            text: "Comment s'appelle le père de Luna Lovegood ?"
        }, 
        answers: [
            {text: "Xenophilius", "result": true},
            {text: "Xenoverse", "result": false},
            {text: "Xenophile", "result": false},
            {text: "Xenophibius", "result": false}
        ]
    },
    {
        question: {
            id: 16,
            type: "text/img",
            text: "Comment s'appelle le père de Luna Lovegood ?"
        }, 
        answers: [
            {text: "Ginny", "result": true},
            {text: "Luna", "result": false},
            {text: "Hermione", "result": false},
            {text: "Lavande", "result": false}
        ]
    },
    {
        question: {
            id: 17,
            type: "text",
            text: "Il faut du courage pour affronter ses ennemis mais il en faut encore plus pour affronter ses..."
        }, 
        answers: [
            {text: "amis", "result": true},
            {text: "peurs", "result": false},
            {text: "parents", "result": false},
            {text: "phobies", "result": false}
        ]
    },
    {
        question: {
            id: 18,
            type: "text",
            text: "De quoi famille Durley a-t-elle le plus peur ?"
        }, 
        answers: [
            {text: "De tout ce qui peut les faire paraître étranges", "result": true},
            {text: "Des voisins curieux", "result": false},
            {text: "De Voldemort", "result": false},
            {text: "De Harry", "result": false}
        ]
    },
    {
        question: {
            id: 19,
            type: "text",
            text: "De quoi famille Durley a-t-elle le plus peur ?"
        }, 
        answers: [
            {text: "renvoyés!", "result": true},
            {text: "punis!", "result": false},
            {text: "virés!", "result": false},
            {text: "maudits!", "result": false}
        ]
    },
    {
        question: {
            id:20,
            type: "text",
            text: "Quel est le deuxième prénom de Harry Potter ?"
        }, 
        answers: [
            {text: "James", "result": true},
            {text: "Louis", "result": false},
            {text: "Sirius", "result": false},
            {text: "Remus", "result": false}
        ]
    }
]