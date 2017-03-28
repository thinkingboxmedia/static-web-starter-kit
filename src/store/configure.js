import development from './configure.development';
import production from './configure.production';

if (process.env.NODE_ENV === 'production') {
  module.exports = production;
} else {
  module.exports = development;
}