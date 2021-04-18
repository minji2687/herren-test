module.exports = {
  devServer: {
    proxy: {
      "/front-test": {
        target: "https://brandaz.s3.ap-northeast-2.amazonaws.com/",
        changeOrign: true,
      },
    },
  },
};
