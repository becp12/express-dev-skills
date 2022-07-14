var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
var skillsCtrl = require('../controllers/skills');

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:skill
router.get('/:skill', skillsCtrl.show);

// POST /skills create
router.post('/', skillsCtrl.create);

// DELETE /skills/:skill
router.delete('/:skill', skillsCtrl.delete)

// GET /skills/:skill/edit (edit functionality - update todos)
router.get('/:skill/edit', skillsCtrl.edit);

// PUT /skills/:skill/ (update functionlity)
router.put('/:skill', skillsCtrl.update);

module.exports = router;