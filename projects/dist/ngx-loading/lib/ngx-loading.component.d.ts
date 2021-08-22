import { ChangeDetectorRef, OnInit, TemplateRef } from '@angular/core';
import { INgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingService } from './ngx-loading.service';
export declare class NgxLoadingComponent implements OnInit {
    private LoadingService;
    private changeDetectorRef;
    show: boolean;
    config: INgxLoadingConfig;
    template: TemplateRef<any>;
    private defaultConfig;
    ngxLoadingAnimationTypes: {
        chasingDots: string;
        circle: string;
        circleSwish: string;
        cubeGrid: string;
        doubleBounce: string;
        none: string;
        pulse: string;
        rectangleBounce: string;
        rotatingPlane: string;
        threeBounce: string;
        wanderingCubes: string;
    };
    constructor(LoadingService: NgxLoadingService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    private setupConfig;
    setShow(show: boolean): void;
}
