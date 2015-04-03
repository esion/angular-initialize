# Angular-initialize

Provides a simple solution in order to bootstrap an angular app without [manually][1] [start it][2]. This way it is possible to synchronize promises in run blocks.

[![Build Status](https://travis-ci.org/esion/angular-initialize.svg?branch=master)](https://travis-ci.org/esion/angular-initialize)

## Installation

Load

~~~
bower install angular-initialize
~~~

Include in your project

~~~html
<script src="bower_components/angular-initialize/dist/angular-initialize.js" />
~~~

_**note**: sources are written in es6, you can import it directly with browserify + babel_

Configuration

~~~javascript
angular.module('myApp', ['ngInitialize']);
~~~

~~~html
<body ng-app="myApp">
    <div ng-initialize>
        ...
    </div>
</body>
~~~

## Usage

For example you can load some app configs before rendering

~~~javascript
angular.module('myApp').run(['$initialize', '$http', function($initialize, $http) {
    var myGlobalConfig;
    $initialize.addPromiseToStack($http('/load/things/and/wait/before/start').then(function(response) {
        myGlobalConfig = response.data;
    });
}]);
~~~

[1]: http://stackoverflow.com/questions/21697598/how-to-wait-for-a-promise-in-a-run-block-in-angular
[2]: http://stackoverflow.com/a/16404207/536174
