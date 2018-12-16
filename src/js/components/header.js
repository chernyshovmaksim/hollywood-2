export default class Header {
  static headerFullScreen() {
    const headerH = $("header").outerHeight();
    const topHeaderH = $(".top-header").outerHeight();
		const menuHeaderH = $(".menu-header").outerHeight();
		const imageHeaderH = headerH - topHeaderH - menuHeaderH;
		const imageHeader = $(".image-header").height(`${imageHeaderH}px`);
  }
}
