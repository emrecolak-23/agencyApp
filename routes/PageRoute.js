// Import packages
const express = require('express');

// Import Controller
const PageController = require('../controllers/PageController');

const router = express.Router();

router.route('/add').get(PageController.getAddPage);
router.route('/').get(PageController.getHomePage);
router.route('/services').get(PageController.getServicePage);
router.route('/about').get(PageController.getAboutPage);
router.route('/career').get(PageController.getTeamPage);
router.route('/contact').get(PageController.getContactPage);
router.route('/contact').post(PageController.sendEmail);
router.route('/project/edit/:slug').get(PageController.getEditPage);

module.exports = router;
