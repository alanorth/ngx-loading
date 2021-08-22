import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { NgxLoadingConfig } from './ngx-loading-config';
import * as i0 from "@angular/core";
let NgxLoadingService = class NgxLoadingService {
    constructor(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
};
NgxLoadingService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['loadingConfig',] }] }
];
NgxLoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxLoadingService_Factory() { return new NgxLoadingService(i0.ɵɵinject("loadingConfig", 8)); }, token: NgxLoadingService, providedIn: "root" });
NgxLoadingService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Optional()), __param(0, Inject('loadingConfig'))
], NgxLoadingService);
export { NgxLoadingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL25neC1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXFCLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBSzNFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBRzVCLFlBQXlELE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDN0QsQ0FBQztDQUNGLENBQUE7OzRDQUhjLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTs7O0FBSHBDLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBSWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0dBSHJDLGlCQUFpQixDQU03QjtTQU5ZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nU2VydmljZSB7XG4gIHB1YmxpYyBsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdsb2FkaW5nQ29uZmlnJykgcHJpdmF0ZSBjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnKSB7XG4gICAgdGhpcy5sb2FkaW5nQ29uZmlnID0gdGhpcy5jb25maWcgfHwgbmV3IE5neExvYWRpbmdDb25maWcoKTtcbiAgfVxufVxuIl19