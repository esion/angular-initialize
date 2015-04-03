'use strict';

describe('ngInitializeDirective', function() {

    var $initialize,
        $q,
        $compile,
        $rootScope;

    beforeEach(module('ngInitialize'));
    beforeEach(inject(function(_$compile_, _$rootScope_, _$initialize_, _$q_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $initialize = _$initialize_;
        $q = _$q_;
      }));

    it('is not ready', function() {
        $initialize.addPromiseToStack($q.when(true));
        var element = $compile("<div ng-initialize>Hello World</div>")($rootScope);
        expect(element.html()).toContain("");
    });

    it('is ready', function() {
        $initialize.addPromiseToStack($q.when(true));
        var element = $compile("<div ng-initialize>Hello World</div>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Hello World");
    });
});
