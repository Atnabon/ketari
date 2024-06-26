const express = require("express");
const {
  singleEmailSend,
  emailNewsLetterSent,
  emailNewsLetterConfirm,
} = require("../controllers/emailCampaignController");
const roleAuthCheck = require("../Middleware/roleAuthCheck");

const router = express.Router();

router
  .post("/email", roleAuthCheck, singleEmailSend)
  .post("/email-sent", emailNewsLetterSent)
  .post("/email-confirmation", emailNewsLetterConfirm);

module.exports = router;
