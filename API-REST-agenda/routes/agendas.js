const express = require('express');
const router = express.Router();
const agendasController = require('../controllers/agendas-controller');

router.get('/agendas',agendasController.read_agendas);
router.post('/agendas',agendasController.add_agendas);
router.delete('/agendas/:id',agendasController.delete_agendas);
router.put('/agendas/:id',agendasController.update_agendas);

module.exports = router;