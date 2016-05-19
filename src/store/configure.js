import configureDev from './configure.dev';
import configureProd from './configure.prod';

if (process.env.NODE_ENV === 'production') {
  module.exports = configureProd;
} else {
  module.exports = configureDev;
}
