/** @ngInject */
class ngInitializeController {
    constructor($initialize) {
        this.isReady = false;

        $initialize.getPromises().then(() => {
            this.isReady = true;
        });
    }
}

export function ngInitializeDirective () {
    return {
        controller: ngInitializeController,
        controllerAs: 'ctrl',
        transclude: true,
        template: '<div ng-if="ctrl.isReady" ng-transclude></div>'
    };
}
