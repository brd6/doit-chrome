app.controller('AppController', ['$scope', '$localStorage', function($scope, $localStorage) {

    $scope.$storage = $localStorage.$default({"tasks": []});
    $scope.$storage = $localStorage.$default({"tasksDone": []});

    $scope.taskActionsDisplay = false;

    $scope.addTask = function () {
        if (!$scope.task || $scope.$storage.tasks.length > 10)
            return;
        $scope.$storage.tasks.push({task: $scope.task});
        $scope.task = '';
    };
    
    $scope.doneTask = function (taskIndex) {
        $scope.$storage.tasksDone.push($scope.$storage.tasks[taskIndex].task);
        $scope.deleteTask(taskIndex);
    };

    $scope.deleteTask = function (taskIndex) {
        $scope.$storage.tasks.splice(taskIndex, 1);
    };
}]);