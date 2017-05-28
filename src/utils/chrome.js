/**
 * Open page in new tab
 * @param url
 * @returns {*}
 */
export const openUrl = (url) => chrome.tabs.create({ url });
