angular.module('myApp').controller('CommentCtrl', function ($scope) {
    $scope.latestComments = [{
      id: 1,
      txt: 'I was here too.',
    }];
    $scope.comment = {
      txt: '',
    };
    $scope.addComment = function () {
      $scope.latestComments.push(angular.extend(angular.copy($scope.comment), {
        id: $scope.latestComments.length + 1,
      }));
      $scope.comment.txt = '';
    };
  })
  .directive('commentList', function ($parse) {
    return {
      scope: {
        comments: '=',
      },
      template: `<div ng-repeat="currentComment in comments">
								 <p>{{currentComment.txt}}</p>
								 <hr style="border-top: dotted 1px;">
							 </div>`,
    };
  });
