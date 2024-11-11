"use strict";

/**
 * portfolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    async getPortfolio(ctx) {
      try {
        const data = await strapi.entityService.findMany(
          "api::portfolio.portfolio",
          {
            //@ts-ignore
            populate: {
              logo: "*",
              thumbnail: "*",
              project: {
                populate: {
                  gallery: {
                    fields: ["url"],
                  },
                },
              },
              skill: "*",
            },
          }
        );

        return ctx.send({ data });
      } catch (error) {
        console.log("[getPortfolio]: ", error);
        return ctx.badRequest(error);
      }
    },
  })
);
