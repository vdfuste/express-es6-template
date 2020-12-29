'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send({
		msg: 'Seems like everithing is OK! :D'
	});
});

router.get('/:id', (req, res) => {
	res.send({
		id: req.params.id,
		msg: 'Parameters working fine!'
	});
});

router.use((req, res) => {
	res.status(500).send({
		status: 500,
		msg: 'Wops! Something is wrong...',
		possitiveMsg: 'At least the error response works fine!'
	});
});

module.exports = router;
