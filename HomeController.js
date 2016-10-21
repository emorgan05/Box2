function HomeController($scope) { 
  
  $scope.addSuggestion = function() {
    $scope.suggestions.push({text:$scope.formSuggestionText, upvotes: 0});
    $scope.formSuggestionText = "";
  };
  
  $scope.getTotalSuggestions = function() {
    return $scope.suggestions.length;
  };
  
  $scope.addUpvote = function(index) {
     $scope.suggestions[index].upvotes += 1;
  };
}
