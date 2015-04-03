'use strict';

describe('ngInitialize', function() {

    var $initialize,
        $q,
        $rootScope;

    beforeEach(module('ngInitialize'));
    beforeEach(inject(function(_$initialize_, _$q_, _$rootScope_){
        $initialize = _$initialize_;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    it('defined', function() {
        expect($initialize).toBeDefined();
    })

    it('setPromisesStack', function() {
        $initialize.setPromisesStack([$q.when(true), $q.when(false)]);

        $initialize.getPromises().then(function(resolved) {
            expect(resolved.length).toEqual(2);
        });

        $rootScope.$digest();
    });

    it('addPromiseToStack', function() {
        $initialize.addPromiseToStack($q.when(true));
        $initialize.addPromiseToStack($q.when(false));
        $initialize.getPromises().then(function(resolved) {
            expect(resolved.length).toEqual(2);
        });

        $rootScope.$digest();
    })
});
