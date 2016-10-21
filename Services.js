app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts = [
      {
        title: 'Free pizza at club meetings',
        upvotes: 12,
        comments: [],
      },
      {
        title: 'Sing Living on a Prayer to open the meeting',
        upvotes: 4,
        comments: [],
      },
      {
        title: 'One minute dance party',
        upvotes: 3,
        comments: [],
      },
    ]
  };
  return demoSuggestions;
}]);
