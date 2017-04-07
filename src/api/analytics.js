/**
 * trackEvent
 */
export const trackEvent = (category, action) => {
  window.trackEvent(category, action);
}

/**
 * trackPage
 */
export const trackPage = (name) => {
  window.trackPage(name);
}
