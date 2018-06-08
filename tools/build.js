import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

/* eslint-disable import/default  */

console.log('Generating minified bundle for production via Webpack. This will take a moment...');

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();
  if(jsonStats.hasError) {
    return jsonStats.erorrs.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    console.log("Webpack generated the follow warnings:" .bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));

  }
  console.log(`Webpack stats: ${stats}`);

  console.log('Your app has been compiled in production mode and wirtten to /dist. if\'s read');
  return 0;
});