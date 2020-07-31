module.exports = {
  // server: {
  //   command: 'node client/index.js',
  //   launchTimeout: 30000,
  // },
  launch: {
    headless: false,
    slowMo: 500,
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  },
  exitOnPageError: false,
};
