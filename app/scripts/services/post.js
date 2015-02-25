'use strict';

app.factory('Post', function($resource) {
  return $resource('https://tgbooks.firebaseIO.com/posts/:id.json');
});
