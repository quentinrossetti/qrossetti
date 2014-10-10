/* globals routie, page */
'use strict';

// Routing
routie({
  '/projects': function () { page('projects'); },
  '/contact' : function () { page('contact'); },
  '*'        : function () { page('home'); },
});