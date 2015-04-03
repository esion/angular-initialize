(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ngInitilize = "ngInitialize";

exports.ngInitilize = ngInitilize;

var ngInitializeDirective = require("./directive/ngInitializeDirective").ngInitializeDirective;

var ngInitializeService = require("./service/ngInitializeService").ngInitializeService;

angular.module(ngInitilize, []).directive("ngInitialize", ngInitializeDirective).service("$initialize", ngInitializeService);

},{"./directive/ngInitializeDirective":2,"./service/ngInitializeService":3}],2:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.ngInitializeDirective = ngInitializeDirective;
Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @ngInject */

var ngInitializeController = function ngInitializeController($initialize) {
    var _this = this;

    _classCallCheck(this, ngInitializeController);

    this.isReady = false;

    $initialize.getPromises().then(function () {
        _this.isReady = true;
    });
};
ngInitializeController.$inject = ["$initialize"];

function ngInitializeDirective() {
    return {
        controller: ngInitializeController,
        controllerAs: "ctrl",
        transclude: true,
        template: "<div ng-if=\"ctrl.isReady\" ng-transclude></div>"
    };
}

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var ngInitializeService = exports.ngInitializeService = (function () {
    function ngInitializeService($q) {
        _classCallCheck(this, ngInitializeService);

        this.$q = $q;
        this.stack = [];
    }

    _createClass(ngInitializeService, {
        setPromisesStack: {
            value: function setPromisesStack(stack) {
                this.stack = stack;
            }
        },
        addPromiseToStack: {
            value: function addPromiseToStack(promise) {
                this.stack.push(promise);
            }
        },
        clearStack: {
            value: function clearStack() {
                this.stack = [];
            }
        },
        getPromises: {
            value: function getPromises() {
                return this.$q.all(this.stack);
            }
        }
    });

    return ngInitializeService;
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS93b3Jrc3BhY2UvZXNpb24vYW5ndWxhci1pbml0aWFsaXplL3NyYy9qcy9tb2R1bGUuanMiLCIvaG9tZS93b3Jrc3BhY2UvZXNpb24vYW5ndWxhci1pbml0aWFsaXplL3NyYy9qcy9kaXJlY3RpdmUvbmdJbml0aWFsaXplRGlyZWN0aXZlLmpzIiwiL2hvbWUvd29ya3NwYWNlL2VzaW9uL2FuZ3VsYXItaW5pdGlhbGl6ZS9zcmMvanMvc2VydmljZS9uZ0luaXRpYWxpemVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBTyxJQUFJLFdBQVcsR0FBRyxjQUFjLENBQUM7O1FBQTdCLFdBQVcsR0FBWCxXQUFXOztJQUVkLHFCQUFxQixXQUFPLG1DQUFtQyxFQUEvRCxxQkFBcUI7O0lBQ3JCLG1CQUFtQixXQUFPLCtCQUErQixFQUF6RCxtQkFBbUI7O0FBRTNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUMxQixTQUFTLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDLENBQ2hELE9BQU8sQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7OztRQ0lqQyxxQkFBcUIsR0FBckIscUJBQXFCOzs7Ozs7SUFWL0Isc0JBQXNCLEdBQ2IsU0FEVCxzQkFBc0IsQ0FDWixXQUFXLEVBQUU7OzswQkFEdkIsc0JBQXNCOztBQUVwQixRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsZUFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ2pDLGNBQUssT0FBTyxHQUFHLElBQUksQ0FBQztLQUN2QixDQUFDLENBQUM7Q0FDTjs7QUFHRSxTQUFTLHFCQUFxQixHQUFJO0FBQ3JDLFdBQU87QUFDSCxrQkFBVSxFQUFFLHNCQUFzQjtBQUNsQyxvQkFBWSxFQUFFLE1BQU07QUFDcEIsa0JBQVUsRUFBRSxJQUFJO0FBQ2hCLGdCQUFRLEVBQUUsa0RBQWdEO0tBQzdELENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7OztJQ2xCWSxtQkFBbUIsV0FBbkIsbUJBQW1CO0FBQ2pCLGFBREYsbUJBQW1CLENBQ2hCLEVBQUUsRUFBRTs4QkFEUCxtQkFBbUI7O0FBRXhCLFlBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLG1CQUFtQjtBQU01Qix3QkFBZ0I7bUJBQUEsMEJBQUMsS0FBSyxFQUFFO0FBQ3BCLG9CQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7QUFFRCx5QkFBaUI7bUJBQUEsMkJBQUMsT0FBTyxFQUFFO0FBQ3ZCLG9CQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1Qjs7QUFFRCxrQkFBVTttQkFBQSxzQkFBRztBQUNULG9CQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNuQjs7QUFFRCxtQkFBVzttQkFBQSx1QkFBRztBQUNWLHVCQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQzs7OztXQXBCUSxtQkFBbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IHZhciBuZ0luaXRpbGl6ZSA9ICduZ0luaXRpYWxpemUnO1xuXG5pbXBvcnQge25nSW5pdGlhbGl6ZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUvbmdJbml0aWFsaXplRGlyZWN0aXZlJztcbmltcG9ydCB7bmdJbml0aWFsaXplU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL25nSW5pdGlhbGl6ZVNlcnZpY2UnO1xuXG5hbmd1bGFyLm1vZHVsZShuZ0luaXRpbGl6ZSwgW10pXG4gICAgLmRpcmVjdGl2ZSgnbmdJbml0aWFsaXplJywgbmdJbml0aWFsaXplRGlyZWN0aXZlKVxuICAgIC5zZXJ2aWNlKCckaW5pdGlhbGl6ZScsIG5nSW5pdGlhbGl6ZVNlcnZpY2UpO1xuIiwiLyoqIEBuZ0luamVjdCAqL1xuY2xhc3MgbmdJbml0aWFsaXplQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJGluaXRpYWxpemUpIHtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG5cbiAgICAgICAgJGluaXRpYWxpemUuZ2V0UHJvbWlzZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5nSW5pdGlhbGl6ZURpcmVjdGl2ZSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogbmdJbml0aWFsaXplQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pZj1cImN0cmwuaXNSZWFkeVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+J1xuICAgIH07XG59XG4iLCJleHBvcnQgY2xhc3MgbmdJbml0aWFsaXplU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoJHEpIHtcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xuICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgfVxuXG4gICAgc2V0UHJvbWlzZXNTdGFjayhzdGFjaykge1xuICAgICAgICB0aGlzLnN0YWNrID0gc3RhY2s7XG4gICAgfVxuXG4gICAgYWRkUHJvbWlzZVRvU3RhY2socHJvbWlzZSkge1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgY2xlYXJTdGFjaygpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIH1cblxuICAgIGdldFByb21pc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcS5hbGwodGhpcy5zdGFjayk7XG4gICAgfVxufVxuIl19
