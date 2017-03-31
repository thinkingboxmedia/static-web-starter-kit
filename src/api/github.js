import request from 'src/utils/request';

/**
 * getStatus
 */
export const getStatus = () => {
  return new Promise((resolve, reject) => {
    const result = request('https://api.github.com');
    result.then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error)
    });
  });
}
