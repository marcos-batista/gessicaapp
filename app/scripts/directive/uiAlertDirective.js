angular.module("yapp").directive("uiAlert", function () {
	return {
		templateUrl: "view/dashboard/alert.html",
		replace: true,
		restrict: "AE",
		scope: {
			title: "@"
		},
		transclude: true
	};
});