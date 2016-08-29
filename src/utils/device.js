import isMobile from 'ismobilejs';

/**
 * detect
 */
export function detect() {
  window.__DEVICE__ = isMobile;  // eslint-disable-line
}

/**
 * getDevice
 * return
 */

export function getDevice() {
  return window.__DEVICE__;  // eslint-disable-line
}


/**
 * isPhone
 * return
 */
export function isPhone() {
  return window.__DEVICE__.phone;  // eslint-disable-line
}

/**
 * isTablet
 * return
 */

export function isTablet() {
  return window.__DEVICE__.tablet;  // eslint-disable-line
}

/**
 * isDesktop
 * return
 */

export function isDesktop() {
  return !window.__DEVICE__.phone && !window.__DEVICE__.tablet;  // eslint-disable-line
}
