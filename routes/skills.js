var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
var skillsCtrl = require('../controllers/skills');

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// POST /skills create
router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete)

// GET /skills/:id/edit (edit functionality - update todos)
router.get('/:id/edit', skillsCtrl.edit);

// PUT /skills/:id/ (update functionlity)
router.put('/:id', skillsCtrl.update);

module.exports = router;