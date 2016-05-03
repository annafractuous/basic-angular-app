System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var YouTubeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            YouTubeService = (function () {
                function YouTubeService(http) {
                    this.http = http;
                    this.dataURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=tutsplus&type=video&key=AIzaSyC3Y6aE7ZEAQHgyEu8qqVPxEPl6pgd2XSE';
                }
                YouTubeService.prototype.getVideos = function () {
                    return this.http.get(this.dataURL)
                        .map(function (res) { return res.json().items; })
                        .do(function (data) { return console.log(data); })
                        .catch(this.errorHandler);
                };
                YouTubeService.prototype.errorHandler = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server Error');
                };
                YouTubeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], YouTubeService);
                return YouTubeService;
            }());
            exports_1("YouTubeService", YouTubeService);
        }
    }
});
//# sourceMappingURL=youtube.service.js.map