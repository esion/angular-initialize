(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ngInitilize = "ng-initialize";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS93b3Jrc3BhY2UvZXNpb24vYW5ndWxhci1pbml0aWFsaXplL3NyYy9qcy9tb2R1bGUuanMiLCIvaG9tZS93b3Jrc3BhY2UvZXNpb24vYW5ndWxhci1pbml0aWFsaXplL3NyYy9qcy9kaXJlY3RpdmUvbmdJbml0aWFsaXplRGlyZWN0aXZlLmpzIiwiL2hvbWUvd29ya3NwYWNlL2VzaW9uL2FuZ3VsYXItaW5pdGlhbGl6ZS9zcmMvanMvc2VydmljZS9uZ0luaXRpYWxpemVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBTyxJQUFJLFdBQVcsR0FBRyxlQUFlLENBQUM7O1FBQTlCLFdBQVcsR0FBWCxXQUFXOztJQUVkLHFCQUFxQixXQUFPLG1DQUFtQyxFQUEvRCxxQkFBcUI7O0lBQ3JCLG1CQUFtQixXQUFPLCtCQUErQixFQUF6RCxtQkFBbUI7O0FBRTNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUMxQixTQUFTLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDLENBQ2hELE9BQU8sQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7OztRQ0lqQyxxQkFBcUIsR0FBckIscUJBQXFCOzs7Ozs7SUFWL0Isc0JBQXNCLEdBQ2IsU0FEVCxzQkFBc0IsQ0FDWixXQUFXLEVBQUU7OzswQkFEdkIsc0JBQXNCOztBQUVwQixRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsZUFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ2pDLGNBQUssT0FBTyxHQUFHLElBQUksQ0FBQztLQUN2QixDQUFDLENBQUM7Q0FDTjs7QUFHRSxTQUFTLHFCQUFxQixHQUFJO0FBQ3JDLFdBQU87QUFDSCxrQkFBVSxFQUFFLHNCQUFzQjtBQUNsQyxvQkFBWSxFQUFFLE1BQU07QUFDcEIsa0JBQVUsRUFBRSxJQUFJO0FBQ2hCLGdCQUFRLEVBQUUsa0RBQWdEO0tBQzdELENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7OztJQ2xCWSxtQkFBbUIsV0FBbkIsbUJBQW1CO0FBQ2pCLGFBREYsbUJBQW1CLENBQ2hCLEVBQUUsRUFBRTs4QkFEUCxtQkFBbUI7O0FBRXhCLFlBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpRLG1CQUFtQjtBQU01Qix3QkFBZ0I7bUJBQUEsMEJBQUMsS0FBSyxFQUFFO0FBQ3BCLG9CQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7QUFFRCx5QkFBaUI7bUJBQUEsMkJBQUMsT0FBTyxFQUFFO0FBQ3ZCLG9CQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1Qjs7QUFFRCxrQkFBVTttQkFBQSxzQkFBRztBQUNULG9CQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNuQjs7QUFFRCxtQkFBVzttQkFBQSx1QkFBRztBQUNWLHVCQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQzs7OztXQXBCUSxtQkFBbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IHZhciBuZ0luaXRpbGl6ZSA9ICduZy1pbml0aWFsaXplJztcblxuaW1wb3J0IHtuZ0luaXRpYWxpemVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlL25nSW5pdGlhbGl6ZURpcmVjdGl2ZSc7XG5pbXBvcnQge25nSW5pdGlhbGl6ZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9uZ0luaXRpYWxpemVTZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUobmdJbml0aWxpemUsIFtdKVxuICAgIC5kaXJlY3RpdmUoJ25nSW5pdGlhbGl6ZScsIG5nSW5pdGlhbGl6ZURpcmVjdGl2ZSlcbiAgICAuc2VydmljZSgnJGluaXRpYWxpemUnLCBuZ0luaXRpYWxpemVTZXJ2aWNlKTtcbiIsIi8qKiBAbmdJbmplY3QgKi9cbmNsYXNzIG5nSW5pdGlhbGl6ZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRpbml0aWFsaXplKSB7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuXG4gICAgICAgICRpbml0aWFsaXplLmdldFByb21pc2VzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZ0luaXRpYWxpemVEaXJlY3RpdmUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IG5nSW5pdGlhbGl6ZUNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaWY9XCJjdHJsLmlzUmVhZHlcIiBuZy10cmFuc2NsdWRlPjwvZGl2PidcbiAgICB9O1xufVxuIiwiZXhwb3J0IGNsYXNzIG5nSW5pdGlhbGl6ZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCRxKSB7XG4gICAgICAgIHRoaXMuJHEgPSAkcTtcbiAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHNldFByb21pc2VzU3RhY2soc3RhY2spIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHN0YWNrO1xuICAgIH1cblxuICAgIGFkZFByb21pc2VUb1N0YWNrKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGNsZWFyU3RhY2soKSB7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRQcm9taXNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHEuYWxsKHRoaXMuc3RhY2spO1xuICAgIH1cbn1cbiJdfQ==
