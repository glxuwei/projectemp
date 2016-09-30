module.exports = {
  development: 'http://localhost:8080',
  production: 'http://pictrip.qyer.com',
  map: {
    '@index@': {
      development: '',
      production: '/bbs'
    },
    '@post@': {
      development: '/post.html',
      production: '/bbs/index/post'
    }
  }

}
