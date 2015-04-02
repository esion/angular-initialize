export var ngInitilize = 'ng-initialize';

import {ngInitializeDirective} from './directive/ngInitializeDirective';
import {ngInitializeService} from './service/ngInitializeService';

angular.module(ngInitilize, [])
    .directive('ngInitialize', ngInitializeDirective)
    .service('$initialize', ngInitializeService);
