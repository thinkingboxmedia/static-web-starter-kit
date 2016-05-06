import configureDev from './configure.prod';
import configureProd from './configure.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = configureProd;
} else {
  module.exports = configureDev;
}
