// Import packages
const express = require('express');

// Import Controller
const PageController = require('../controllers/PageController');

const router = express.Router();

router.route('/add').get(PageController.getAddPage);
router.route('/').get(PageController.getHomePage);
router.route('/services').get(PageController.getServicePage);
router.route('/about').get(PageController.getAboutPage);
router.route('/team').get(PageController.getTeamPage);
router.route('/contact').get(PageController.getContactPage);

module.exports = router;
