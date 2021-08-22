import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { NgxLoadingConfig } from './ngx-loading-config';
import * as i0 from "@angular/core";
var NgxLoadingService = /** @class */ (function () {
    function NgxLoadingService(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
    NgxLoadingService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['loadingConfig',] }] }
    ]; };
    NgxLoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxLoadingService_Factory() { return new NgxLoadingService(i0.ɵɵinject("loadingConfig", 8)); }, token: NgxLoadingService, providedIn: "root" });
    NgxLoadingService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()), __param(0, Inject('loadingConfig'))
    ], NgxLoadingService);
    return NgxLoadingService;
}());
export { NgxLoadingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL25neC1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXFCLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBSzNFO0lBR0UsMkJBQXlELE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Z0RBRlksUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7SUFIcEMsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFJYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7T0FIckMsaUJBQWlCLENBTTdCOzRCQVpEO0NBWUMsQUFORCxJQU1DO1NBTlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU5neExvYWRpbmdDb25maWcsIE5neExvYWRpbmdDb25maWcgfSBmcm9tICcuL25neC1sb2FkaW5nLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neExvYWRpbmdTZXJ2aWNlIHtcbiAgcHVibGljIGxvYWRpbmdDb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoJ2xvYWRpbmdDb25maWcnKSBwcml2YXRlIGNvbmZpZzogSU5neExvYWRpbmdDb25maWcpIHtcbiAgICB0aGlzLmxvYWRpbmdDb25maWcgPSB0aGlzLmNvbmZpZyB8fCBuZXcgTmd4TG9hZGluZ0NvbmZpZygpO1xuICB9XG59XG4iXX0=