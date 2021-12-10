const express = require('express');
const router = express.Router();
const agendasController = require('../controllers/agendas-controller');

router.get('/read-agendas',agendasController.read_agendas);
router.post('/add-agendas',agendasController.add_agendas);
router.delete('/del-agendas/:id',agendasController.delete_agendas);
router.put('/upd-agendas/:id',agendasController.update_agendas);

module.exports = router;