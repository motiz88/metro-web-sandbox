module.exports = {
  resolver: {
    assetExts: ['html'],
  },
  server: {
    // StackBlitz opens '/' on launch, so redirect that to something interesting.
    enhanceMiddleware: (middleware, server) => {
      return (req, res, next) => {
        if (req.url === '/') {
          res
            .writeHead(302, {
              Location: '/assets/index.html',
            })
            .end();
          return;
        } else if (req.url !== '/assets/index.html') {
          res.writeHead(200, { 'content-type': 'text/plain' }).end('nothing');
        }
        return middleware(req, res, next);
      };
    },
  },
};
