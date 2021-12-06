export const $ = (selector) => document.querySelector(selector);
export const getElementValue = (selector) => $(selector).value;
export const clearInput = (selector) => {
  $(selector).value = '';
  $(selector).focus();
};
export const createElementWithTemplate = (element = 'div', template) => {
  const el = document.createElement('div', element);
  el.innerHTML = template;
  return el;
};
export const formsPreventDefault = () => {
  document
    .querySelectorAll('form')
    .forEach((form) =>
      form.addEventListener('submit', (e) => e.preventDefault()),
    );
};
