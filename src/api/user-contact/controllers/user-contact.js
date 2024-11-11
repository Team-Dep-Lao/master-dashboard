"use strict";

/**
 * user-contact controller
 */

const UAParser = require("ua-parser-js");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::user-contact.user-contact");
