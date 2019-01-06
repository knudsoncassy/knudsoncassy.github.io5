var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: 'Friends',
		image: '1.jpg'
	},{
		name: 'Free',
		image: '2img/2.jpg'
	},{
		name: 'Explore',
		image: '2img/3.jpg'
	}, {
		name: 'Vast',
		image: '2img/4.jpg'
	}, {
		name: 'Playful',
		image: '2img/5.jpg'
	}, {
		name: 'Grand',
		image: '2img/6.jpg'
	}, {
		name: 'Mist',
		image: '2img/7.jpg'
	}, {
		name: 'Sea',
		image: '2img/8.jpg'
	}, {
		name: 'Reach',
		image: '2img/9.jpg'
	}, {
		name: 'Awe',
		image: '2img/10.jpg'
	}, {
		name: 'Surf',
		image: '2img/11.jpg'
	}, {
		name: 'Thrill',
		image: '2img/12.jpg'
	}, ];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
		$scope.selected = [];
	}
})

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
			})
		}
	}
})

app.directive('bigBox', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '50%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '80%',
					height: '100%'
				})
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
			}, 800)
		}
	}
})