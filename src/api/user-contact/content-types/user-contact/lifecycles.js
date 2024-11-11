const geoip = require("geoip-lite");

module.exports = {
  async afterCreate(ev) {
    const { result } = ev;
    try {
      const ctx = strapi.requestContext.get();

      // @ts-ignore
      const ip = ctx.request.id;

      // Lấy thông tin User-Agent từ headers
      const userAgent = ctx.req.headers["user-agent"];

      await strapi.db
        .connection("user_contacts")
        .update({
          ip: `IP: ${ip}. Thông tin thiết bị: ${userAgent}. Thông tin IP: ${geoip.lookup(
            `${ip}`
          )}`,
        })
        .where({ id: result.id });
    } catch (error) {
      console.log("[afterCreate user-contacts]: ", error);
    }
  },
};
