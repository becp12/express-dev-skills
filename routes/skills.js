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

module.exports = router;