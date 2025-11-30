import{i as x,a as g,x as n,n as m,r as h,t as b}from"./index-BWQJ4HYf.js";import{e as w,s as S,B as $,c as z,d as A,h as E,g as C,b as V,u as v,j as F,k as I,l as y,f as k}from"./select-option-8Dnlijv-.js";import"./df-file-delete-D6-3lj6g.js";var c=function(t,e,o,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var f=t.length-1;f>=0;f--)(l=t[f])&&(i=(a<3?l(i):a>3?l(e,o,i):l(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},d;let s=(d=class extends w(x){constructor(){super(...arguments),this.buttonText="Sign in with Google",this.scopes=[],this.showIcon=!0,this.loading=!1,this.errorMessage=null}async handleSignIn(){this.loading=!0,this.errorMessage=null;try{await S(this.scopes),this.dispatchEvent(new CustomEvent("google-signin-success",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0}))}catch(e){let o="Failed to sign in with Google";if(e&&typeof e=="object"&&"code"in e){const r=e.code;r==="auth/popup-blocked"?o="Popup blocked. Please allow popups for this site.":r==="auth/popup-closed-by-user"?o="Sign-in cancelled.":r==="auth/unauthorized-domain"&&(o="This domain is not authorized. Add it in Firebase Console.")}this.errorMessage=o,this.dispatchEvent(new CustomEvent("google-signin-error",{detail:{error:e instanceof Error?e:new Error(o),message:o},bubbles:!0,composed:!0})),console.error("Google sign-in error:",e)}finally{this.loading=!1}}render(){return n`
      <div class="google-signin-container">
        ${this.loading?n`
              <div class="loading-container">
                <md-circular-progress indeterminate></md-circular-progress>
                <span>Signing in...</span>
              </div>
            `:n`
              <md-filled-button @click=${this.handleSignIn}>
                ${this.showIcon?n`
                      <span class="google-icon" slot="icon">
                        <svg viewBox="0 0 18 18" width="18" height="18">
                          <path
                            fill="#4285F4"
                            d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                          />
                          <path
                            fill="#34A853"
                            d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
                          />
                          <path
                            fill="#EA4335"
                            d="M9 3.582c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.29C4.672 5.163 6.656 3.582 9 3.582z"
                          />
                        </svg>
                      </span>
                    `:""}
                ${this.buttonText}
              </md-filled-button>
            `}
      </div>
      ${this.errorMessage?n` <div class="error-message">${this.errorMessage}</div> `:""}
    `}},d.styles=g`
    :host {
      display: inline-block;
    }

    .google-signin-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    md-filled-button {
      --md-filled-button-container-color: #4285f4;
      --md-filled-button-label-text-color: #ffffff;
      --md-filled-button-hover-container-color: #357ae8;
      --md-filled-button-pressed-container-color: #2a66c7;
    }

    md-filled-button::part(button) {
      padding: 8px 24px;
      border-radius: 4px;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.25px;
    }

    .google-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      margin-right: 8px;
      background: white;
      border-radius: 2px;
      padding: 2px;
    }

    .loading-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    md-circular-progress {
      --md-circular-progress-size: 24px;
      --md-circular-progress-active-indicator-color: #ffffff;
    }

    .error-message {
      color: var(--md-sys-color-error, #b3261e);
      font-size: 12px;
      margin-top: 8px;
    }
  `,d);c([m({type:String,attribute:"button-text"})],s.prototype,"buttonText",void 0);c([m({type:Array})],s.prototype,"scopes",void 0);c([m({type:Boolean,attribute:"show-icon"})],s.prototype,"showIcon",void 0);c([h()],s.prototype,"loading",void 0);c([h()],s.prototype,"errorMessage",void 0);s=c([b("df-google-signin")],s);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class P extends ${renderElevationOrOutline(){return n`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const M=g`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let p=class extends P{};p.styles=[z,A,M];p=E([b("md-filled-tonal-button")],p);var G=Object.defineProperty,B=Object.getOwnPropertyDescriptor,_=(t,e,o,r)=>{for(var a=r>1?void 0:r?B(e,o):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(a=(r?l(e,o,a):l(a))||a);return r&&a&&G(e,o,a),a};let u=class extends w(x){constructor(){super(),this.currentView="sign-in"}connectedCallback(){super.connectedCallback(),this._initializeFirebaseAuth()}async _initializeFirebaseAuth(){try{const t=C(),e=V(t);if(v())try{if((await fetch("http://127.0.0.1:5400")).ok){const r=F(e);I(r,{host:"127.0.0.1",port:9155}),y(e)}else console.warn("[df-auth-demo] Emulator not available. Auth demo will not be functional.")}catch(o){console.warn("[df-auth-demo] Emulator not available. Auth demo will not be functional.",o)}else y(e)}catch(t){console.error("[df-auth-demo] Failed to initialize Firebase Auth:",t)}}render(){let t=!1;try{t=k.get().authState==="authenticated"}catch{t=!1}return n`
      <div class="header">
        <h1 class="title">Authentication Pattern Demo</h1>
        <p class="subtitle">
          Firebase Authentication with signals-first architecture
        </p>
      </div>

      ${this._renderInfoBox()}

      <div class="layout">
        <aside class="sidebar">
          ${t?n`
            <div class="user-info">
              <df-user-profile></df-user-profile>
            </div>
            <df-sign-out></df-sign-out>
          `:""}

          <nav class="nav">
            <md-filled-tonal-button
              data-active=${this.currentView==="sign-in"}
              @click=${()=>this.currentView="sign-in"}
            >
              Sign In
            </md-filled-tonal-button>
            <md-filled-tonal-button
              data-active=${this.currentView==="sign-up"}
              @click=${()=>this.currentView="sign-up"}
            >
              Sign Up
            </md-filled-tonal-button>
            <md-filled-tonal-button
              data-active=${this.currentView==="reset"}
              @click=${()=>this.currentView="reset"}
            >
              Reset Password
            </md-filled-tonal-button>
            ${t?n`
              <md-filled-tonal-button
                data-active=${this.currentView==="profile"}
                @click=${()=>this.currentView="profile"}
              >
                Protected Content
              </md-filled-tonal-button>
            `:""}
          </nav>
        </aside>

        <main class="main-content">
          ${this._renderCurrentView()}
        </main>
      </div>
    `}_renderInfoBox(){return n`
      <div class="info-box">
        <h3>Test Credentials</h3>
        <p>
          Use any user from the seed data:<br />
          <strong>Email:</strong> alice.anderson@example.com (or any other seeded user)<br />
          <strong>Password:</strong> password123
        </p>
      </div>
    `}_renderCurrentView(){const t=v();switch(this.currentView){case"sign-in":return n`
          <df-sign-in
            @df-sign-in-success=${this._handleSignInSuccess}
            @df-sign-in-error=${this._handleAuthError}
          ></df-sign-in>

          ${t?n`
            <div style="margin-top: 2rem; padding: 1rem; background: #fff3e0; border: 1px solid #ffb74d; border-radius: 8px;">
              <p style="margin: 0; font-size: 0.875rem; color: #e65100;">
                <strong>Emulator Mode:</strong> Google Sign-In is available in production only.
                Deploy to Firebase Hosting to test real Google OAuth.
              </p>
            </div>
          `:n`
            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e0e0e0;">
              <h3 style="margin-bottom: 1rem; color: #1976d2;">Or sign in with Google</h3>
              <df-google-signin
                @google-signin-success=${this._handleGoogleSignInSuccess}
                @google-signin-error=${this._handleAuthError}
              ></df-google-signin>
              <p style="margin-top: 1rem; font-size: 0.875rem; color: #666;">
                <strong>Note:</strong> Google Sign-In works in production only.
                In emulator mode, use email/password authentication above.
              </p>
            </div>
          `}
        `;case"sign-up":return n`
          <df-sign-up
            @df-sign-up-success=${this._handleSignUpSuccess}
            @df-sign-up-error=${this._handleAuthError}
          ></df-sign-up>
        `;case"reset":return n`
          <df-password-reset
            @df-password-reset-success=${this._handleResetSuccess}
            @df-password-reset-error=${this._handleAuthError}
          ></df-password-reset>
        `;case"profile":return n`
          <div class="protected-content">
            <h3>🎉 Protected Content</h3>
            <p>You can only see this because you're authenticated!</p>
          </div>
          <br />
          <df-user-profile></df-user-profile>
        `;default:return n`<p>Unknown view</p>`}}_handleSignInSuccess(){console.log("[df-auth-demo] Sign in successful"),this.currentView="profile"}_handleSignUpSuccess(){console.log("[df-auth-demo] Sign up successful"),this.currentView="profile"}_handleResetSuccess(){console.log("[df-auth-demo] Password reset email sent")}_handleGoogleSignInSuccess(){console.log("[df-auth-demo] Google sign in successful"),this.currentView="profile"}_handleAuthError(t){console.error("[df-auth-demo] Auth error:",t.detail.error)}};u.styles=g`
    :host {
      display: block;
      font-family: var(--df-font-family, system-ui, sans-serif);
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--df-spacing-4, 1.5rem);
      background: white;
      border-radius: 16px;
    }

    .header {
      margin-bottom: var(--df-spacing-6, 2rem);
    }

    .title {
      margin: 0 0 var(--df-spacing-2, 0.5rem) 0;
      font-size: var(--df-title-size, 2rem);
      font-weight: var(--df-title-weight, 700);
      color: var(--df-text-primary, #000);
    }

    .subtitle {
      margin: 0;
      font-size: var(--df-subtitle-size, 1.125rem);
      color: var(--df-text-secondary, #666);
    }

    .layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: var(--df-spacing-6, 2rem);
      align-items: start;
    }

    @media (max-width: 768px) {
      .layout {
        grid-template-columns: 1fr;
      }
    }

    .sidebar {
      position: sticky;
      top: var(--df-spacing-4, 1.5rem);
    }

    .user-info {
      margin-bottom: var(--df-spacing-4, 1.5rem);
    }

    .nav {
      display: flex;
      flex-direction: column;
      gap: var(--df-spacing-2, 0.5rem);
    }

    md-filled-tonal-button {
      width: 100%;
      justify-content: flex-start;
    }

    md-filled-tonal-button[data-active='true'] {
      --md-filled-tonal-button-container-color: var(--md-sys-color-primary-container, #e0e7ff);
      --md-filled-tonal-button-label-text-color: var(--md-sys-color-on-primary-container, #1d4ed8);
    }

    .main-content {
      min-height: 400px;
    }

    .info-box {
      padding: var(--df-spacing-4, 1.5rem);
      border-radius: var(--df-border-radius, 8px);
      background: var(--df-info-bg, #e3f2fd);
      border: 1px solid var(--df-info-border, #90caf9);
      margin-bottom: var(--df-spacing-4, 1.5rem);
    }

    .info-box h3 {
      margin: 0 0 var(--df-spacing-2, 0.5rem) 0;
      font-size: 1.125rem;
      color: var(--df-info-title, #1976d2);
    }

    .info-box p {
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--df-info-text, #0d47a1);
    }

    .protected-content {
      padding: var(--df-spacing-6, 2rem);
      border-radius: var(--df-border-radius, 8px);
      background: var(--df-success-bg, #e8f5e9);
      border: 2px dashed var(--df-success-border, #4caf50);
      text-align: center;
    }

    .protected-content h3 {
      margin: 0 0 var(--df-spacing-2, 0.5rem) 0;
      font-size: 1.5rem;
      color: var(--df-success-text, #2e7d32);
    }

    .protected-content p {
      margin: 0;
      color: var(--df-success-text-secondary, #388e3c);
    }
  `;_([h()],u.prototype,"currentView",2);u=_([b("df-auth-demo")],u);export{u as DfAuthDemo};
