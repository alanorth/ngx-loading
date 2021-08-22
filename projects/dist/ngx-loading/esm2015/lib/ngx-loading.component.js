import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ngxLoadingAnimationTypes, NgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingService } from './ngx-loading.service';
let NgxLoadingComponent = class NgxLoadingComponent {
    constructor(LoadingService, changeDetectorRef) {
        this.LoadingService = LoadingService;
        this.changeDetectorRef = changeDetectorRef;
        this.config = new NgxLoadingConfig();
        this.defaultConfig = {
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        };
        this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    }
    ngOnInit() {
        this.setupConfig();
    }
    setupConfig() {
        for (const option in this.defaultConfig) {
            if (typeof this.config[option] === 'boolean') {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
            else {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
        }
    }
    setShow(show) {
        this.show = show;
        this.changeDetectorRef.markForCheck();
    }
};
NgxLoadingComponent.ctorParameters = () => [
    { type: NgxLoadingService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], NgxLoadingComponent.prototype, "show", void 0);
__decorate([
    Input()
], NgxLoadingComponent.prototype, "config", void 0);
__decorate([
    Input()
], NgxLoadingComponent.prototype, "template", void 0);
NgxLoadingComponent = __decorate([
    Component({
        selector: 'ngx-loading',
        template: `
    <div *ngIf="show">
      <div class="backdrop" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}" [ngStyle]="{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}"></div>

      <div [ngSwitch]="config?.animationType">
        <div class="spinner-circle" *ngSwitchCase="ngxLoadingAnimationTypes.circle" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}"
          [ngStyle]="{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}">
        </div>

        <div *ngSwitchCase="ngxLoadingAnimationTypes.cubeGrid" class="sk-cube-grid" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="sk-cube sk-cube1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube2" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube3" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube4" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube5" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube6" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube7" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube8" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube9" [ngStyle]="{'background-color': config?.primaryColour}"></div>
        </div>

        <div class="spinner-sk-rotateplane" *ngSwitchCase="ngxLoadingAnimationTypes.rotatingPlane" [ngStyle]="{'background-color': config?.primaryColour}" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}"></div>

        <div class="spinner-rectangle-bounce" *ngSwitchCase="ngxLoadingAnimationTypes.rectangleBounce" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="rect1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect2" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect3" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect4" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect5" [ngStyle]="{'background-color': config?.primaryColour}"></div>
        </div>

        <div class="spinner-wandering-cubes" *ngSwitchCase="ngxLoadingAnimationTypes.wanderingCubes" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="cube1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="cube2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
        </div>

        <div class="spinner-double-bounce" *ngSwitchCase="ngxLoadingAnimationTypes.doubleBounce" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="double-bounce1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="double-bounce2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
        </div>

        <div class="spinner-pulse" *ngSwitchCase="ngxLoadingAnimationTypes.pulse" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}" [ngStyle]="{'background-color': config?.primaryColour}"></div>

        <div class="spinner-chasing-dots" *ngSwitchCase="ngxLoadingAnimationTypes.chasingDots" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="dot1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="dot2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
        </div>

        <div class="spinner-circle-swish" *ngSwitchCase="ngxLoadingAnimationTypes.circleSwish" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}" [ngStyle]="{'color': config?.primaryColour}"></div>

        <div *ngSwitchCase="ngxLoadingAnimationTypes.none" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}"></div>

        <div *ngSwitchDefault class="spinner-three-bounce" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="bounce1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="bounce2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
          <div class="bounce3" [ngStyle]="{'background-color': config?.tertiaryColour}"></div>
        </div>
        
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template"></ng-container>
        </ng-container>
      </div>
    </div>
  `,
        styles: [`
      .backdrop {
        z-index: 1999;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }

      /* Spinner Circle styles */
      .spinner-circle,
      .spinner-circle:after {
          border-radius: 50%;
          width: 10em;
          height: 10em;
      }

      .spinner-circle {
          font-size: 6px;
          border-top: 1.1em solid rgba(255, 255, 255, 0.2);
          border-right: 1.1em solid rgba(255, 255, 255, 0.2);
          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 1.1s infinite linear;
          animation: load8 1.1s infinite linear;
      }
      @-webkit-keyframes load8 {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
          }
          100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
          }
      }
      @keyframes load8 {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
          }
          100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
          }
      }

      /* Circle Swish styles */
      .spinner-circle-swish {
          font-size: 60px;
          overflow: hidden;
          width: 1em;
          height: 1em;
          z-index: 2000;
          border-radius: 50%;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
          animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        }
        @-webkit-keyframes load6 {
          0% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          5%,
          95% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          10%,
          59% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
          }
          20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
          }
          38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
          }
          100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
        }
        @keyframes load6 {
          0% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          5%,
          95% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          10%,
          59% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
          }
          20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
          }
          38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
          }
          100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
        }
        @-webkit-keyframes round {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes round {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

      /* Cube Grid styles */
      .sk-cube-grid {
          width: 40px;
          height: 40px;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .sk-cube-grid .sk-cube {
          width: 33%;
          height: 33%;
          background-color: #333;
          float: left;
          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
      }

      .sk-cube-grid .sk-cube1 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }

      .sk-cube-grid .sk-cube2 {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
      }

      .sk-cube-grid .sk-cube3 {
          -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
      }

      .sk-cube-grid .sk-cube4 {
          -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
      }

      .sk-cube-grid .sk-cube5 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }

      .sk-cube-grid .sk-cube6 {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
      }

      .sk-cube-grid .sk-cube7 {
          -webkit-animation-delay: 0s;
          animation-delay: 0s;
      }

      .sk-cube-grid .sk-cube8 {
          -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
      }

      .sk-cube-grid .sk-cube9 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }

      @-webkit-keyframes sk-cubeGridScaleDelay {
          0%, 70%, 100% {
              -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
          } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
      }

      @keyframes sk-cubeGridScaleDelay {
          0%, 70%, 100% {
              -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
          } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
      }

      /* Double Bounce styles */
      .spinner-double-bounce {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #333;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
          animation: sk-bounce 2.0s infinite ease-in-out;
      }

      .double-bounce2 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
      }

      @-webkit-keyframes sk-bounce {
          0%, 100% { -webkit-transform: scale(0.0) }
          50% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bounce {
          0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
          } 50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
      }

      /* Pulse styles */
      .spinner-pulse {
          width: 40px;
          height: 40px;
          background-color: #333;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          border-radius: 100%;
          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
          animation: sk-scaleout 1.0s infinite ease-in-out;
      }

      @-webkit-keyframes sk-scaleout {
          0% { -webkit-transform: scale(0) }
          100% {
            -webkit-transform: scale(1.0);
            opacity: 0;
          }
      }

      @keyframes sk-scaleout {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          } 100% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
            opacity: 0;
          }
      }

      /* Three Bounce styles */
      .spinner-three-bounce {
          width: 70px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 20px;
          margin: auto;
          z-index: 2000;
      }

      .spinner-three-bounce > div {
          width: 18px;
          height: 18px;
          background-color: #ffffff;

          border-radius: 100%;
          display: inline-block;
          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
          animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .spinner-three-bounce .bounce1 {
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
      }

      .spinner-three-bounce .bounce2 {
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
          0%, 80%, 100% { -webkit-transform: scale(0) }
          40% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bouncedelay {
          0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
          } 40% {
              -webkit-transform: scale(1.0);
              transform: scale(1.0);
          }
      }

      /* Rotate Plane styles */
      .spinner-sk-rotateplane {
          width: 40px;
          height: 40px;
          background-color: #ffffff;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
          animation: sk-rotateplane 1.2s infinite ease-in-out;
      }

      @-webkit-keyframes sk-rotateplane {
          0% { -webkit-transform: perspective(120px) }
          50% { -webkit-transform: perspective(120px) rotateY(180deg) }
          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
      }

      @keyframes sk-rotateplane {
          0% {
              transform: perspective(120px) rotateX(0deg) rotateY(0deg);
              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
          } 50% {
              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
          } 100% {
              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          }
      }

      /* Rectangle Bounce styles*/
      .spinner-rectangle-bounce {
          width: 50px;
          height: 40px;
          font-size: 10px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .spinner-rectangle-bounce > div {
          background-color: #ffffff;
          height: 100%;
          width: 6px;
          display: inline-block;
          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
          animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }

      .spinner-rectangle-bounce .rect2 {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
      }

      .spinner-rectangle-bounce .rect3 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
      }

      .spinner-rectangle-bounce .rect4 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
      }

      .spinner-rectangle-bounce .rect5 {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
      }

      @-webkit-keyframes sk-stretchdelay {
          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
          20% { -webkit-transform: scaleY(1.0) }
      }

      @keyframes sk-stretchdelay {
          0%, 40%, 100% {
              transform: scaleY(0.4);
              -webkit-transform: scaleY(0.4);
          }  20% {
              transform: scaleY(1.0);
              -webkit-transform: scaleY(1.0);
          }
      }

      /* Wandering Cubes styles */
      .spinner-wandering-cubes {
          width: 60px;
          height: 58px;
          font-size: 10px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .cube1, .cube2 {
          background-color: #ffffff;
          width: 15px;
          height: 15px;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
          animation: sk-cubemove 1.8s infinite ease-in-out;
      }

      .cube2 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
      }

      @-webkit-keyframes sk-cubemove {
          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
          100% { -webkit-transform: rotate(-360deg) }
      }

      @keyframes sk-cubemove {
          25% {
              transform: translateX(42px) rotate(-90deg) scale(0.5);
              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
          } 50% {
              transform: translateX(42px) translateY(42px) rotate(-179deg);
              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
          } 50.1% {
              transform: translateX(42px) translateY(42px) rotate(-180deg);
              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
          } 75% {
              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
          } 100% {
              transform: rotate(-360deg);
              -webkit-transform: rotate(-360deg);
          }
      }

      /* Circle styles */
      .sk-circle {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
        }
        .sk-circle .sk-child {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        .sk-circle .sk-child:before {
          content: '';
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          background-color: #333;
          border-radius: 100%;
          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        }
        .sk-circle .sk-circle2 {
          -webkit-transform: rotate(30deg);
              -ms-transform: rotate(30deg);
                  transform: rotate(30deg); }
        .sk-circle .sk-circle3 {
          -webkit-transform: rotate(60deg);
              -ms-transform: rotate(60deg);
                  transform: rotate(60deg); }
        .sk-circle .sk-circle4 {
          -webkit-transform: rotate(90deg);
              -ms-transform: rotate(90deg);
                  transform: rotate(90deg); }
        .sk-circle .sk-circle5 {
          -webkit-transform: rotate(120deg);
              -ms-transform: rotate(120deg);
                  transform: rotate(120deg); }
        .sk-circle .sk-circle6 {
          -webkit-transform: rotate(150deg);
              -ms-transform: rotate(150deg);
                  transform: rotate(150deg); }
        .sk-circle .sk-circle7 {
          -webkit-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
                  transform: rotate(180deg); }
        .sk-circle .sk-circle8 {
          -webkit-transform: rotate(210deg);
              -ms-transform: rotate(210deg);
                  transform: rotate(210deg); }
        .sk-circle .sk-circle9 {
          -webkit-transform: rotate(240deg);
              -ms-transform: rotate(240deg);
                  transform: rotate(240deg); }
        .sk-circle .sk-circle10 {
          -webkit-transform: rotate(270deg);
              -ms-transform: rotate(270deg);
                  transform: rotate(270deg); }
        .sk-circle .sk-circle11 {
          -webkit-transform: rotate(300deg);
              -ms-transform: rotate(300deg);
                  transform: rotate(300deg); }
        .sk-circle .sk-circle12 {
          -webkit-transform: rotate(330deg);
              -ms-transform: rotate(330deg);
                  transform: rotate(330deg); }
        .sk-circle .sk-circle2:before {
          -webkit-animation-delay: -1.1s;
                  animation-delay: -1.1s; }
        .sk-circle .sk-circle3:before {
          -webkit-animation-delay: -1s;
                  animation-delay: -1s; }
        .sk-circle .sk-circle4:before {
          -webkit-animation-delay: -0.9s;
                  animation-delay: -0.9s; }
        .sk-circle .sk-circle5:before {
          -webkit-animation-delay: -0.8s;
                  animation-delay: -0.8s; }
        .sk-circle .sk-circle6:before {
          -webkit-animation-delay: -0.7s;
                  animation-delay: -0.7s; }
        .sk-circle .sk-circle7:before {
          -webkit-animation-delay: -0.6s;
                  animation-delay: -0.6s; }
        .sk-circle .sk-circle8:before {
          -webkit-animation-delay: -0.5s;
                  animation-delay: -0.5s; }
        .sk-circle .sk-circle9:before {
          -webkit-animation-delay: -0.4s;
                  animation-delay: -0.4s; }
        .sk-circle .sk-circle10:before {
          -webkit-animation-delay: -0.3s;
                  animation-delay: -0.3s; }
        .sk-circle .sk-circle11:before {
          -webkit-animation-delay: -0.2s;
                  animation-delay: -0.2s; }
        .sk-circle .sk-circle12:before {
          -webkit-animation-delay: -0.1s;
                  animation-delay: -0.1s; }

        @-webkit-keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
          } 40% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }

        @keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
          } 40% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }

        /* Chasing Dots styles */
        .spinner-chasing-dots {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          text-align: center;
          -webkit-animation: sk-rotate 2.0s infinite linear;
          animation: sk-rotate 2.0s infinite linear;
        }

        .dot1, .dot2 {
          width: 60%;
          height: 60%;
          display: inline-block;
          position: absolute;
          top: 0;
          background-color: #333;
          border-radius: 100%;
          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
          animation: sk-bounce 2.0s infinite ease-in-out;
        }

        .dot2 {
          top: auto;
          bottom: 0;
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
        }

        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

        @-webkit-keyframes sk-bounce {
          0%, 100% { -webkit-transform: scale(0.0) }
          50% { -webkit-transform: scale(1.0) }
        }

        @keyframes sk-bounce {
          0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
          } 50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
        }

      .full-screen {
          position: fixed;
          position: -ms-page;
      }
    `]
    })
], NgxLoadingComponent);
export { NgxLoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvbmd4LWxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXd3QjFELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBZTlCLFlBQW9CLGNBQWlDLEVBQVUsaUJBQW9DO1FBQS9FLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFiMUYsV0FBTSxHQUFzQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFcEQsa0JBQWEsR0FBc0I7WUFDekMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLFdBQVc7WUFDbkQsd0JBQXdCLEVBQUUsb0JBQW9CO1lBQzlDLG9CQUFvQixFQUFFLEtBQUs7WUFDM0Isa0JBQWtCLEVBQUUsS0FBSztZQUN6QixhQUFhLEVBQUUsU0FBUztZQUN4QixlQUFlLEVBQUUsU0FBUztZQUMxQixjQUFjLEVBQUUsU0FBUztTQUMxQixDQUFDO1FBQ0ssNkJBQXdCLEdBQUcsd0JBQXdCLENBQUM7SUFFNEMsQ0FBQztJQUV4RyxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQy9CLFNBQVM7aUJBQ1Y7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xKO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQy9CLFNBQVM7aUJBQ1Y7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xKO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBOztZQTVCcUMsaUJBQWlCO1lBQTZCLGlCQUFpQjs7QUFkMUY7SUFBUixLQUFLLEVBQUU7aURBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTttREFBb0Q7QUFDbkQ7SUFBUixLQUFLLEVBQUU7cURBQTRCO0FBSHpCLG1CQUFtQjtJQXR3Qi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0RUO2lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdzQkM7S0FFSixDQUFDO0dBQ1csbUJBQW1CLENBMkMvQjtTQTNDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLCBJTmd4TG9hZGluZ0NvbmZpZywgTmd4TG9hZGluZ0NvbmZpZyB9IGZyb20gJy4vbmd4LWxvYWRpbmctY29uZmlnJztcbmltcG9ydCB7IE5neExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWxvYWRpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydib3JkZXItcmFkaXVzJzogY29uZmlnPy5iYWNrZHJvcEJvcmRlclJhZGl1cywgJ2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LmJhY2tkcm9wQmFja2dyb3VuZENvbG91cn1cIj48L2Rpdj5cblxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29uZmlnPy5hbmltYXRpb25UeXBlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNpcmNsZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuY2lyY2xlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiXG4gICAgICAgICAgW25nU3R5bGVdPVwieydib3JkZXItdG9wLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItcmlnaHQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91ciwgJ2JvcmRlci1ib3R0b20tY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91ciwgJ2JvcmRlci1sZWZ0LWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuY3ViZUdyaWRcIiBjbGFzcz1cInNrLWN1YmUtZ3JpZFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlM1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlN1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlOFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlOVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItc2stcm90YXRlcGxhbmVcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnJvdGF0aW5nUGxhbmVcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXJlY3RhbmdsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnJlY3RhbmdsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdDFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0M1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdDRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci13YW5kZXJpbmctY3ViZXNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLndhbmRlcmluZ0N1YmVzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3ViZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItZG91YmxlLWJvdW5jZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuZG91YmxlQm91bmNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcHVsc2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnB1bHNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaGFzaW5nLWRvdHNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNoYXNpbmdEb3RzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3QyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNpcmNsZS1zd2lzaFwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuY2lyY2xlU3dpc2hcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydjb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMubm9uZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJzcGlubmVyLXRocmVlLWJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy50ZXJ0aWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYmFja2Ryb3Age1xuICAgICAgICB6LWluZGV4OiAxOTk5O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgfVxuXG4gICAgICAvKiBTcGlubmVyIENpcmNsZSBzdHlsZXMgKi9cbiAgICAgIC5zcGlubmVyLWNpcmNsZSxcbiAgICAgIC5zcGlubmVyLWNpcmNsZTphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgICAgIGhlaWdodDogMTBlbTtcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICBmb250LXNpemU6IDZweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgbG9hZDgge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBDaXJjbGUgU3dpc2ggc3R5bGVzICovXG4gICAgICAuc3Bpbm5lci1jaXJjbGUtc3dpc2gge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ2IHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1JSxcbiAgICAgICAgICA5NSUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAlLFxuICAgICAgICAgIDU5JSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMzglIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWQ2IHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1JSxcbiAgICAgICAgICA5NSUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAlLFxuICAgICAgICAgIDU5JSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMzglIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHJvdW5kIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLyogQ3ViZSBHcmlkIHN0eWxlcyAqL1xuICAgICAgLnNrLWN1YmUtZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgIH1cblxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XG4gICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICBoZWlnaHQ6IDMzJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMiB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgfVxuXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgICB9XG5cbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU4IHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgICB9XG5cbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICAgIH0gMzUlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAgICAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICB9IDM1JSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBEb3VibGUgQm91bmNlIHN0eWxlcyAqL1xuICAgICAgLnNwaW5uZXItZG91YmxlLWJvdW5jZSB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICB9XG5cbiAgICAgIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgICAgICAgMCUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgICAgfSA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBQdWxzZSBzdHlsZXMgKi9cbiAgICAgIC5zcGlubmVyLXB1bHNlIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1zY2FsZW91dCAxLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stc2NhbGVvdXQge1xuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgfSAxMDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFRocmVlIEJvdW5jZSBzdHlsZXMgKi9cbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSB7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgfVxuXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgPiBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UxIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgfVxuXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTIge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XG4gICAgICAgICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgIH0gNDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFJvdGF0ZSBQbGFuZSBzdHlsZXMgKi9cbiAgICAgIC5zcGlubmVyLXNrLXJvdGF0ZXBsYW5lIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XG4gICAgICAgICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIH1cbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSB9XG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpICByb3RhdGVYKDE4MGRlZykgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylcbiAgICAgICAgICB9IDUwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpXG4gICAgICAgICAgfSAxMDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBSZWN0YW5nbGUgQm91bmNlIHN0eWxlcyovXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgfVxuXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSAucmVjdDIge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICAgICAgfVxuXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MyB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gICAgICB9XG5cbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q0IHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSAucmVjdDUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcbiAgICAgICAgICAwJSwgNDAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpIH1cbiAgICAgICAgICAyMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCkgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICAgICAgICB9ICAyMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjApO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBXYW5kZXJpbmcgQ3ViZXMgc3R5bGVzICovXG4gICAgICAuc3Bpbm5lci13YW5kZXJpbmctY3ViZXMge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICB9XG5cbiAgICAgIC5jdWJlMSwgLmN1YmUyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuY3ViZTIge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZW1vdmUge1xuICAgICAgICAgIDI1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSkgfVxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpIH1cbiAgICAgICAgICA3NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSkgfVxuICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XG4gICAgICAgICAgMjUlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfSA1MCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xuICAgICAgICAgIH0gNTAuMSUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xuICAgICAgICAgIH0gNzUlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH0gMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogQ2lyY2xlIHN0eWxlcyAqL1xuICAgICAgLnNrLWNpcmNsZSB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2hpbGQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2hpbGQ6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgIH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMyB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNyB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTAge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xczsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45czsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44czsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43czsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42czsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41czsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40czsgfVxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7IH1cbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzOyB9XG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xczsgfVxuXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgfSA0MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgIH0gNDAlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDaGFzaW5nIERvdHMgc3R5bGVzICovXG4gICAgICAgIC5zcGlubmVyLWNoYXNpbmctZG90cyB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZG90MSwgLmRvdDIge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvdDIge1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stcm90YXRlIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB9fVxuICAgICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgICAgICAgMCUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgICAgfSA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC5mdWxsLXNjcmVlbiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHBvc2l0aW9uOiAtbXMtcGFnZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbmZpZzogSU5neExvYWRpbmdDb25maWcgPSBuZXcgTmd4TG9hZGluZ0NvbmZpZygpO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHtcbiAgICBhbmltYXRpb25UeXBlOiBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMudGhyZWVCb3VuY2UsXG4gICAgYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgICBiYWNrZHJvcEJvcmRlclJhZGl1czogJzBweCcsXG4gICAgZnVsbFNjcmVlbkJhY2tkcm9wOiBmYWxzZSxcbiAgICBwcmltYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXG4gICAgc2Vjb25kYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXG4gICAgdGVydGlhcnlDb2xvdXI6ICcjZmZmZmZmJ1xuICB9O1xuICBwdWJsaWMgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0gbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgTG9hZGluZ1NlcnZpY2U6IE5neExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXR1cENvbmZpZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cENvbmZpZygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiB0aGlzLmRlZmF1bHRDb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWdbb3B0aW9uXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tvcHRpb25dICE9IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnW29wdGlvbl0gPSB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSAhPSBudWxsID8gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gOiB0aGlzLmRlZmF1bHRDb25maWdbb3B0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1tvcHRpb25dICE9IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnW29wdGlvbl0gPSB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSAhPSBudWxsID8gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gOiB0aGlzLmRlZmF1bHRDb25maWdbb3B0aW9uXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U2hvdyhzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93ID0gc2hvdztcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=