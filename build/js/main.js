'use strict';

$(window).on('load', function () {
    $('.demo1').UIparalax([{
        whence: 'top',
        koef: 0.1
    }, {
        whence: 'top',
        koef: -0.5
    }, {
        whence: 'top',
        koef: 0.2
    }], {
        desktop: true,
        smallscreen: true,
        tablet: false,
        phone: false
    });
    $('.demo2').UIparalax([{
        transition: '0',
        koef: 0.2
    }]);
});