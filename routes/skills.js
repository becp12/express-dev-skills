var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
var skillsCtrl = require('../controllers/skills');

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/:skill
router.get('/:skill', skillsCtrl.show);

module.exports = router;