export default {
  init(el) {
    this.el = el;
  },
  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  },
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
    return this;
  },
};
