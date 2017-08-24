var path = require('path');
module.exports = {
   cache: true,
   debug: true,
   devtool: 'eval',
   entry: './assets/scripts/main.js',
   output: {
      path: path.join(__dirname, "build"),
      filename: 'main.min.js'
   },
   resolve: {
      extensions: ['', '.js', '.json', '.coffee']
   }
};
