'use strict';

app.factory('Post', function($resource) {
  return $resource('https://tfbooks.firebaseIO.com/posts/:id.json');
});
