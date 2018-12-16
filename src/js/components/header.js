export default class Header {
  static headerFullScreen() {
    const headerH = $("header").height();
    const topHeaderH = $(".top-header").height();
		const menuHeaderH = $(".menu-header").height();
		const imageHeaderH = headerH - topHeaderH - menuHeaderH;
		const imageHeader = $(".image-header").height(`${imageHeaderH}px`);
  }
}
