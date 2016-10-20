function HomeController($scope) { 
  
  $scope.suggestions = [
    {text: 'Free pizza at club meetings'},
    {text: 'End all the emails with a Laffy Taffy joke'},
    {text: 'Sing Living on a Prayer to start each meeting'}
    ];
  
  $scope.addSuggestion = function() {
    $scope.suggestions.push({text:$scope.formSuggestionText});
    $scope.formSuggestionText = "";
  };
  
  $scope.getTotalSuggestions = function () {
    return $scope.suggestions.length;
  };
}
