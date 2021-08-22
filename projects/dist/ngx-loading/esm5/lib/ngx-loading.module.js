import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxLoadingComponent } from './ngx-loading.component';
var NgxLoadingModule = /** @class */ (function () {
    function NgxLoadingModule() {
    }
    NgxLoadingModule_1 = NgxLoadingModule;
    NgxLoadingModule.forRoot = function (loadingConfig) {
        return {
            ngModule: NgxLoadingModule_1,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    };
    var NgxLoadingModule_1;
    NgxLoadingModule = NgxLoadingModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [NgxLoadingComponent],
            exports: [NgxLoadingComponent]
        })
    ], NgxLoadingModule);
    return NgxLoadingModule;
}());
export { NgxLoadingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvbmd4LWxvYWRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPOUQ7SUFBQTtJQU9BLENBQUM7eUJBUFksZ0JBQWdCO0lBQ3BCLHdCQUFPLEdBQWQsVUFBZSxhQUFnQztRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztJQU5VLGdCQUFnQjtRQUw1QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDL0IsQ0FBQztPQUNXLGdCQUFnQixDQU81QjtJQUFELHVCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTmd4TG9hZGluZ0NvbmZpZyB9IGZyb20gJy4uL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgTmd4TG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWxvYWRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05neExvYWRpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd4TG9hZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGxvYWRpbmdDb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hMb2FkaW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnbG9hZGluZ0NvbmZpZycsIHVzZVZhbHVlOiBsb2FkaW5nQ29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl19