const db = require('../db/db');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: true
}));

//Créer un spectacles
router.post('/spectacles', (req, res) =>{
    const formData = req.body;
    db.query("INSERT INTO spectacles SET ?", formData, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la création du spectacles');
            return;
        }
        if (!results) {
            res.status(400).send();
            return;
        } else {
            db.query("SELECT * FROM spectacles WHERE id = ?", results.insertId, (err, results) =>{
                if (err) {
                    res.status(500);
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});


//Consulter tout les spectacles
router.get('/spectacles' , (req, res) => {
    db.query('SELECT * FROM spectacles', (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération des spectacles');
        } else {
            res.status(200).json(results);
        }
    })
});

//Consulter un spectacles par id
router.get('/spectacles/:id', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM spectacles WHERE id = ?', id, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération du spectacles');
        } 
        if (!results.length) {
            res.status(404).send();
        } else {
            res.status(200).json(results[0]);
        }
    })
});

//Supprimer un spectacles
router.delete('/spectacles/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM spectacles WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).send('Erreur lors de la suppression');
        } else {
            res.status(204).send();
        }
    })
});

//Je veux modifier un spectacles
router.put('/spectacles/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE spectacles SET ? WHERE id = ?', [formData, id], err => {
        if (err) {
            res.status(500).send("Erreur lors de la modification du spectacles");
        } else {
        db.query('SELECT * FROM spectacles WHERE id = ?', id, (err, results) => {
            if (err) {
                res.status(500).send();
            } else {
            res.status(200).send(results[0]);
                }
            })
        }
    });
});


//Créer un artiste
router.post('/artiste', (req, res) =>{
    const formData = req.body;
    db.query("INSERT INTO artiste SET ?", formData, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la création de l/artiste');
            return;
        }
        if (!results) {
            res.status(400).send();
            return;
        } else {
            db.query("SELECT * FROM artiste WHERE id = ?", results.insertId, (err, results) =>{
                if (err) {
                    res.status(500);
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});


//Consulter tout les artistes
router.get('/artiste' , (req, res) => {
    db.query('SELECT * FROM artiste', (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération des artiste');
        } else {
            res.status(200).json(results);
        }
    })
});

//Consulter un artiste par id
router.get('/artiste/:id', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM artiste WHERE id = ?', id, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération de l/artiste');
        } 
        if (!results.length) {
            res.status(404).send();
        } else {
            res.status(200).json(results);
        }
    })
});


//Supprimer un artiste
router.delete('/artiste/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM artiste WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).send('Erreur lors de la suppression');
        } else {
            res.status(204).send();
        }
    })
});

//Je veux modifier un artiste
router.put('/artiste/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE artiste SET ? WHERE id = ?', [formData, id], err => {
        if (err) {
            res.status(500).send("Erreur lors de la modification de l'artiste");
        } else {
        db.query('SELECT * FROM artiste WHERE id = ?', id, (err, results) => {
            if (err) {
                res.status(500).send();
            } else {
            res.status(200).send(results[0]);
                }
            })
        }
    });
});

//Créer une reservation
router.post('/reservation', (req, res) =>{
    const formData = req.body;
    db.query("INSERT INTO reservation SET ?", formData, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la création de la reservation');
            return;
        }
        if (!results) {
            res.status(400).send();
            return;
        } else {
            db.query("SELECT * FROM reservation WHERE id = ?", results.insertId, (err, results) =>{
                if (err) {
                    res.status(500);
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});


//Consulter toutes les reservations
router.get('/reservation' , (req, res) => {
    db.query('SELECT * FROM reservation', (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération des reservation');
        } else {
            res.status(200).json(results);
        }
    })
});

//Consulter une reservation par id
router.get('/reservation/:id', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM reservation WHERE id = ?', id, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération de la reservation');
        } 
        if (!results.length) {
            res.status(404).send();
        } else {
            res.status(200).json(results);
        }
    })
});


//Supprimer une reservation
router.delete('/reservation/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM reservation WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).send('Erreur lors de la suppression');
        } else {
            res.status(204).send();
        }
    })
});

//Je veux modifier une reservation
router.put('/reservation/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE reservation SET ? WHERE id = ?', [formData, id], err => {
        if (err) {
            res.status(500).send("Erreur lors de la modification de la reservation");
        } else {
        db.query('SELECT * FROM reservation WHERE id = ?', id, (err, results) => {
            if (err) {
                res.status(500).send();
            } else {
            res.status(200).send(results[0]);
                }
            })
        }
    });
});


module.exports = router;
