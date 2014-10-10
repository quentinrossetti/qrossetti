'use strict';

var page = function (page, options) {
	$.get('pages/'+page+'.html')
  .fail(function (xhr) {
    return this;
  })
  .done(function (data) {
    var preload = $('#preload');
    preload.addClass('preload-start');
    setTimeout(function () { $('#content').html(data); }, 500);
    setTimeout(function () { preload.removeClass('preload-start'); }, 1000);
	});
};