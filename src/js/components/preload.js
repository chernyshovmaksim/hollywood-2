export default () => {
    setTimeout(() => {
        $('.wrapper').css({
            'opacity': '1'
        });
        $('.preload').hide();
    }, 2000);
}