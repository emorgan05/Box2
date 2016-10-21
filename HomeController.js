function HomeController($scope) { 
  
  $scope.suggestions = [
    {text: 'Free pizza at club meetings',
    upvotes: 15
    },
    {text: 'End all the emails with a Laffy Taffy joke',
    upvotes: 7
    },
    {text: 'Sing Living on a Prayer to start each meeting',
    upvotes: 3
    }
    ];
  
  $scope.addSuggestion = function() {
    $scope.suggestions.push({text:$scope.formSuggestionText});
    $scope.formSuggestionText = "";
  };
  
  $scope.getTotalSuggestions = function() {
    return $scope.suggestions.length;
  };
  
  $scope.addUpvote = function(index) {
     $scope.suggestions[index].upvotes += 1;
  };
}
