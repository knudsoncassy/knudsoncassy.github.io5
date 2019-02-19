var omegausa = function () {

    var javalar = function () {
        $('html').attr('lang', 'en')
    };

    /* === Run Javascript === */

    this.run = function () {

    };

    this.load = function () {
        javalar();
    };

    this.resize = function () {
    };
};
var omegausa = new omegausa();

$(window).load(function () {
    omegausa.load();
});