module.exports = {
  routes: [
    {
      path: "/portfolio-page",
      method: "GET",
      handler: "portfolio.getPortfolio",
      config: {
        middlewares: [],
        policies: [],
      },
    },
  ],
};
