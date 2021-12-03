export const $ = (selector) => document.querySelector(selector);
export const getElementValue = (selector) => $(selector).value;
export const clearInput = (selector) => {
  $(selector).value = '';
  $(selector).focus();
};
