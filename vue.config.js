module.exports = {
  pages: {
    index: {
      entry: './demo/main.js',
      template: './demo/index.html',
      title: '',
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/vue-intersection-tracker/'
}