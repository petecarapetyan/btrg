import{i as g,a as m,E as p,x as a,r as c,t as f,n as h}from"./index-BWQJ4HYf.js";import{e as V,f as H,w as Se,h as d,x as Fe,B as Te,c as Ie,y as Pe,z as ze,A as ye,C as Oe,D as Ae,E as fe,F as ve,q as xe,G as Re,t as ee,H as Le,I as te,J as Me,K as je,L as ge,M as Ne,N as Be,O as Ve,P as qe,Q as He,R as We,S as Ue,T as Ye,U as Ge,V as Y,W as x,X as Ke,Y as Ze}from"./select-option-8Dnlijv-.js";var de=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},I;let G=(I=class extends V(g){constructor(){super(),this.email="",this.password=""}render(){const e=H.get(),t=e.authState==="loading",o=e.error;return a`
      <div class="surface">
        <h2>Sign In</h2>
        ${o?a`<div class="error" role="alert">${o}</div>`:p}

        <form @submit=${this._handleSubmit}>
          <md-outlined-text-field
            type="email"
            label="Email"
            .value=${this.email}
            autocomplete="email"
            ?disabled=${t}
            required
            @input=${this._handleEmailInput}
          ></md-outlined-text-field>

          <md-outlined-text-field
            type="password"
            label="Password"
            .value=${this.password}
            autocomplete="current-password"
            ?disabled=${t}
            required
            @input=${this._handlePasswordInput}
          ></md-outlined-text-field>

          <md-filled-button type="submit" ?disabled=${t}>
            ${t?"Signing In…":"Sign In"}
          </md-filled-button>

          ${t?a`<md-circular-progress indeterminate></md-circular-progress>`:p}
        </form>
      </div>
    `}_handleEmailInput(e){this.email=e.target.value??""}_handlePasswordInput(e){this.password=e.target.value??""}async _handleSubmit(e){e.preventDefault();const t={email:this.email,password:this.password};try{await Se(t),this.dispatchEvent(new CustomEvent("df-sign-in-success",{detail:{email:this.email},bubbles:!0,composed:!0})),this.email="",this.password=""}catch(o){this.dispatchEvent(new CustomEvent("df-sign-in-error",{detail:{error:o instanceof Error?o.message:"Sign in failed"},bubbles:!0,composed:!0}))}}},I.styles=m`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .surface {
      max-width: 420px;
      padding: 24px;
      border-radius: 16px;
      background: var(--md-sys-color-surface, #ffffff);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
    }

    h2 {
      margin: 0 0 20px;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    md-circular-progress {
      display: block;
      margin: 16px auto 0;
    }

    .error {
      padding: 12px;
      border-radius: 12px;
      background: var(--md-sys-color-error-container, rgba(186, 26, 26, 0.12));
      color: var(--md-sys-color-on-error-container, #410e0b);
      font-size: 0.9rem;
    }
  `,I);de([c()],G.prototype,"email",void 0);de([c()],G.prototype,"password",void 0);G=de([f("df-sign-in")],G);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class X extends g{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}d([h({type:Boolean,reflect:!0})],X.prototype,"inset",void 0);d([h({type:Boolean,reflect:!0,attribute:"inset-start"})],X.prototype,"insetStart",void 0);d([h({type:Boolean,reflect:!0,attribute:"inset-end"})],X.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xe=m`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ie=class extends X{};ie.styles=[Xe];ie=d([f("md-divider")],ie);var D=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},P;let _=(P=class extends V(g){constructor(){super(),this.email="",this.password="",this.confirmPassword="",this.displayName="",this.validationError="",this.isSubmitting=!1}render(){const t=H.get().error;return a`
      <div class="surface">
        <h2>Create an account</h2>
        <p class="description">
          Provide your email address and a strong password. You can optionally add a display name now or update it later.
        </p>

        ${t?a`<div class="feedback error" role="alert">${t}</div>`:p}
        ${this.validationError?a`<div class="feedback error" role="alert">${this.validationError}</div>`:p}

        <form @submit=${this._handleSubmit}>
          <md-outlined-text-field
            label="Display name"
            supporting-text="Optional"
            .value=${this.displayName}
            ?disabled=${this.isSubmitting}
            @input=${this._handleDisplayNameInput}
          ></md-outlined-text-field>

          <md-divider></md-divider>

          <md-outlined-text-field
            type="email"
            label="Email"
            .value=${this.email}
            autocomplete="email"
            ?disabled=${this.isSubmitting}
            required
            @input=${this._handleEmailInput}
          ></md-outlined-text-field>

          <md-outlined-text-field
            type="password"
            label="Password"
            supporting-text="Minimum 6 characters"
            .value=${this.password}
            autocomplete="new-password"
            ?disabled=${this.isSubmitting}
            required
            minlength="6"
            @input=${this._handlePasswordInput}
          ></md-outlined-text-field>

          <md-outlined-text-field
            type="password"
            label="Confirm password"
            .value=${this.confirmPassword}
            autocomplete="new-password"
            ?disabled=${this.isSubmitting}
            required
            minlength="6"
            @input=${this._handleConfirmPasswordInput}
          ></md-outlined-text-field>

          <md-filled-button type="submit" ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?"Creating account…":"Sign Up"}
          </md-filled-button>

          ${this.isSubmitting?a`<md-circular-progress indeterminate></md-circular-progress>`:p}
        </form>
      </div>
    `}_handleDisplayNameInput(e){this.displayName=e.target.value??""}_handleEmailInput(e){this.email=e.target.value??"",this._clearValidationError()}_handlePasswordInput(e){this.password=e.target.value??"",this._clearValidationError()}_handleConfirmPasswordInput(e){this.confirmPassword=e.target.value??"",this._clearValidationError()}_clearValidationError(){this.validationError=""}async _handleSubmit(e){if(e.preventDefault(),this.password!==this.confirmPassword){this.validationError="Passwords do not match";return}const t={email:this.email,password:this.password,displayName:this.displayName||void 0};this.isSubmitting=!0;try{await Fe(t),this.dispatchEvent(new CustomEvent("df-sign-up-success",{detail:{email:this.email,displayName:this.displayName},bubbles:!0,composed:!0})),this.email="",this.password="",this.confirmPassword="",this.displayName="",this.validationError=""}catch(o){this.dispatchEvent(new CustomEvent("df-sign-up-error",{detail:{error:o instanceof Error?o.message:"Sign up failed"},bubbles:!0,composed:!0}))}finally{this.isSubmitting=!1}}},P.styles=m`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .surface {
      max-width: 480px;
      padding: 28px;
      border-radius: 18px;
      background: var(--md-sys-color-surface, #ffffff);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
    }

    h2 {
      margin: 0;
      font-size: 1.7rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    p.description {
      margin: 12px 0 24px;
      font-size: 0.95rem;
      color: var(--md-sys-color-on-surface-variant, #4b5563);
      line-height: 1.6;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .feedback {
      padding: 12px;
      border-radius: 12px;
      font-size: 0.9rem;
    }

    .feedback.error {
      background: var(--md-sys-color-error-container, rgba(186, 26, 26, 0.12));
      color: var(--md-sys-color-on-error-container, #410e0b);
    }

    md-circular-progress {
      display: block;
      margin: 16px auto 0;
    }
  `,P);D([c()],_.prototype,"email",void 0);D([c()],_.prototype,"password",void 0);D([c()],_.prototype,"confirmPassword",void 0);D([c()],_.prototype,"displayName",void 0);D([c()],_.prototype,"validationError",void 0);D([c()],_.prototype,"isSubmitting",void 0);_=D([f("df-sign-up")],_);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Je extends Te{}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qe=m`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let oe=class extends Je{};oe.styles=[Ie,Qe];oe=d([f("md-text-button")],oe);var we=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},z;let re=(z=class extends V(g){constructor(){super(),this.variant="button"}render(){const e=H.get(),t=e.authState==="authenticated",o=e.authState==="loading";if(!t&&!o)return p;const r=o?"Signing Out…":"Sign Out";return this.variant==="link"?a`
        <md-text-button @click=${this._handleClick} ?disabled=${o}>
          ${r}
        </md-text-button>
      `:a`
      <md-filled-button @click=${this._handleClick} ?disabled=${o}>
        ${r}
      </md-filled-button>
    `}async _handleClick(){try{await Pe(),this.dispatchEvent(new CustomEvent("df-sign-out-success",{bubbles:!0,composed:!0}))}catch(e){this.dispatchEvent(new CustomEvent("df-sign-out-error",{detail:{error:e instanceof Error?e.message:"Sign out failed"},bubbles:!0,composed:!0}))}}},z.styles=m`
    :host {
      display: inline-flex;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }
  `,z);we([h({type:String})],re.prototype,"variant",void 0);re=we([f("df-sign-out")],re);var $e=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},O;let ae=(O=class extends V(g){constructor(){super(),this.compact=!1}render(){const e=H.get(),t=e.authUser;if(!(e.authState==="authenticated")||!t)return a`<div class="not-authenticated">Not signed in</div>`;const r=t.displayName||"Anonymous",i=t.email||"",s=t.photoURL,l=t.emailVerified,F=r.charAt(0).toUpperCase(),W=this.compact?"profile-container compact":"profile-container",U=this.compact?"avatar compact":"avatar",T=this.compact?"avatar-fallback compact":"avatar-fallback";return a`
      <div class=${W}>
        <div class=${U}>
          ${s?a`<img src=${s} alt=${r} />`:a`<span class=${T}>${F}</span>`}
        </div>

        ${this.compact?a`
          <div class="profile-info">
            <div class="display-name">${r}</div>
          </div>
        `:a`
          <div class="profile-info">
            <div class="display-name">
              ${r}
              ${l?a`<span class="badge">Verified</span>`:""}
            </div>
            <div class="email">${i}</div>
          </div>
        `}
      </div>
    `}},O.styles=m`
    :host {
      display: block;
      font-family: var(--df-font-family, system-ui, sans-serif);
    }

    .profile-container {
      display: flex;
      align-items: center;
      gap: var(--df-spacing-3, 1rem);
      padding: var(--df-spacing-3, 1rem);
      border: 1px solid var(--df-border-color, #e0e0e0);
      border-radius: var(--df-border-radius, 8px);
      background: var(--df-surface-color, #fff);
    }

    .profile-container.compact {
      padding: var(--df-spacing-2, 0.5rem);
      border: none;
    }

    .avatar {
      width: var(--df-avatar-size, 48px);
      height: var(--df-avatar-size, 48px);
      border-radius: 50%;
      background: var(--df-avatar-bg, #e0e0e0);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .avatar.compact {
      width: var(--df-avatar-size-compact, 32px);
      height: var(--df-avatar-size-compact, 32px);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-fallback {
      font-size: var(--df-avatar-fallback-size, 1.5rem);
      font-weight: var(--df-avatar-fallback-weight, 600);
      color: var(--df-avatar-fallback-color, #666);
    }

    .avatar-fallback.compact {
      font-size: var(--df-avatar-fallback-size-compact, 1rem);
    }

    .profile-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--df-spacing-1, 0.25rem);
    }

    .display-name {
      font-size: var(--df-display-name-size, 1rem);
      font-weight: var(--df-display-name-weight, 600);
      color: var(--df-text-primary, #000);
    }

    .email {
      font-size: var(--df-email-size, 0.875rem);
      color: var(--df-text-secondary, #666);
    }

    .badge {
      display: inline-block;
      padding: var(--df-badge-padding, 0.125rem 0.5rem);
      border-radius: var(--df-badge-radius, 12px);
      background: var(--df-badge-bg, #e3f2fd);
      color: var(--df-badge-color, #1976d2);
      font-size: var(--df-badge-size, 0.75rem);
      font-weight: var(--df-badge-weight, 500);
    }

    .not-authenticated {
      padding: var(--df-spacing-3, 1rem);
      text-align: center;
      color: var(--df-text-secondary, #666);
      font-size: var(--df-not-auth-size, 0.875rem);
    }
  `,O);$e([h({type:Boolean})],ae.prototype,"compact",void 0);ae=$e([f("df-user-profile")],ae);var J=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},A;let q=(A=class extends V(g){constructor(){super(),this.email="",this.isSubmitting=!1,this.successMessage=""}render(){const t=H.get().error;return a`
      <div class="surface">
        <h2>Reset Password</h2>
        <p class="description">
          Enter your email address and we'll send you a secure link to reset your password.
        </p>

        ${t?a`<div class="feedback error" role="alert">${t}</div>`:p}
        ${this.successMessage?a`<div class="feedback success">${this.successMessage}</div>`:p}

        <form @submit=${this._handleSubmit}>
          <md-outlined-text-field
            type="email"
            label="Email"
            .value=${this.email}
            autocomplete="email"
            ?disabled=${this.isSubmitting}
            required
            @input=${this._handleEmailInput}
          ></md-outlined-text-field>

          <md-filled-button type="submit" ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?"Sending…":"Send Reset Link"}
          </md-filled-button>

          ${this.isSubmitting?a`<md-circular-progress indeterminate></md-circular-progress>`:p}
        </form>
      </div>
    `}_handleEmailInput(e){this.email=e.target.value??"",this.successMessage=""}async _handleSubmit(e){e.preventDefault(),this.isSubmitting=!0,this.successMessage="";const t={email:this.email};try{await ze(t),this.successMessage=`Password reset email sent to ${this.email}. Check your inbox.`,this.dispatchEvent(new CustomEvent("df-password-reset-success",{detail:{email:this.email},bubbles:!0,composed:!0})),this.email=""}catch(o){this.dispatchEvent(new CustomEvent("df-password-reset-error",{detail:{error:o instanceof Error?o.message:"Password reset failed"},bubbles:!0,composed:!0}))}finally{this.isSubmitting=!1}}},A.styles=m`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .surface {
      max-width: 440px;
      padding: 24px;
      border-radius: 16px;
      background: var(--md-sys-color-surface, #ffffff);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      box-shadow: 0 12px 32px rgba(15, 23, 42, 0.09);
    }

    h2 {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    p.description {
      margin: 12px 0 24px;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--md-sys-color-on-surface-variant, #475569);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    md-circular-progress {
      display: block;
      margin: 16px auto 0;
    }

    .feedback {
      padding: 12px;
      border-radius: 12px;
      font-size: 0.9rem;
    }

    .feedback.error {
      background: var(--md-sys-color-error-container, rgba(186, 26, 26, 0.12));
      color: var(--md-sys-color-on-error-container, #410e0b);
    }

    .feedback.success {
      background: var(--md-sys-color-secondary-container, rgba(63, 81, 181, 0.12));
      color: var(--md-sys-color-on-secondary-container, #1e1b4b);
    }
  `,A);J([c()],q.prototype,"email",void 0);J([c()],q.prototype,"isSubmitting",void 0);J([c()],q.prototype,"successMessage",void 0);q=J([f("df-password-reset")],q);var ce=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},R;let K=(R=class extends g{constructor(){super(),this.todo=null,this.actions=!0}render(){if(!this.todo)return a`<p>Todo data unavailable.</p>`;const e=this.getDueState();return a`
      <header>
        <div>
          <h3>${this.todo.title}</h3>
          <div class="meta">
            <span class="priority" data-priority=${this.todo.priority}>Priority: ${this.todo.priority}</span>
            ${this.todo.dueDate?a`<span class="status-pill" data-state=${e}>Due ${this.formatDate(this.todo.dueDate)}</span>`:a``}
            <span>Created ${this.formatDate(this.todo.createdAt)}</span>
            ${this.todo.updatedAt?a`<span>Updated ${this.formatDate(this.todo.updatedAt)}</span>`:a``}
          </div>
        </div>
        <span class="status-pill" data-state=${this.todo.completed?"completed":"active"}>
          ${this.todo.completed?"Completed":"In progress"}
        </span>
      </header>

      <p class="body">${this.todo.description}</p>

      ${this.todo.tags.length?a`<div class="meta">${this.todo.tags.map(t=>a`<span class="tag">${t}</span>`)}</div>`:a``}

      ${this.actions?a`
            <footer>
              <md-outlined-button @click=${this.handleToggle}>
                ${this.todo.completed?"Mark incomplete":"Mark complete"}
              </md-outlined-button>
              <md-outlined-button @click=${this.handleEdit}>Edit</md-outlined-button>
              <md-outlined-button @click=${this.handleDelete}>Delete</md-outlined-button>
            </footer>
          `:a``}
    `}handleToggle(){this.todo&&this.dispatchEvent(new CustomEvent("df-firestore-item-toggle",{detail:{id:this.todo.id,completed:!this.todo.completed},bubbles:!0,composed:!0}))}handleEdit(){this.todo&&this.dispatchEvent(new CustomEvent("df-firestore-item-edit",{detail:this.todo,bubbles:!0,composed:!0}))}handleDelete(){this.todo&&this.dispatchEvent(new CustomEvent("df-firestore-item-delete",{detail:{id:this.todo.id,title:this.todo.title},bubbles:!0,composed:!0}))}formatDate(e){return e?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(e):"N/A"}getDueState(){return this.todo?this.todo.completed?"completed":this.todo.dueDate&&this.todo.dueDate.getTime()<Date.now()?"overdue":"active":"active"}},R.styles=m`
    :host {
      display: block;
      border: 1px solid var(--df-border-color, rgba(15, 23, 42, 0.12));
      border-radius: 12px;
      padding: var(--df-spacing-4, 1.25rem);
      background: var(--df-surface-color, #fff);
      box-shadow: var(--df-shadow-md, 0 10px 30px rgba(15, 23, 42, 0.08));
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    h3 {
      margin: 0;
      font-size: 1.125rem;
      color: var(--df-text-primary, #0f172a);
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0;
      color: var(--df-text-secondary, #475569);
      font-size: 0.9rem;
    }

    .tag {
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      background: rgba(99, 102, 241, 0.12);
      color: #4338ca;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .priority[data-priority='high'] {
      color: #b91c1c;
    }

    .priority[data-priority='medium'] {
      color: #b45309;
    }

    .priority[data-priority='low'] {
      color: #0f766e;
    }

    .body {
      margin: 0;
      color: var(--df-text-secondary, #475569);
      line-height: 1.55;
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
      align-items: center;
    }

    /* MD3 buttons handle their own styling */

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.14);
      color: #047857;
      font-size: 0.78rem;
      font-weight: 600;
    }

    .status-pill[data-state='completed'] {
      background: rgba(16, 185, 129, 0.14);
      color: #047857;
    }

    .status-pill[data-state='active'] {
      background: rgba(59, 130, 246, 0.14);
      color: #1d4ed8;
    }

    .status-pill[data-state='overdue'] {
      background: rgba(185, 28, 28, 0.14);
      color: #b91c1c;
    }
  `,R);ce([h({attribute:!1})],K.prototype,"todo",void 0);ce([h({type:Boolean})],K.prototype,"actions",void 0);K=ce([f("df-firestore-item")],K);var $=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},L;let y=(L=class extends g{constructor(){super(),this._title="",this._description="",this._priority="medium",this._tagsInput="",this._dueDateValue="",this._error=null,this.mode="create",this.todo=null}updated(e){e.has("todo")&&this.syncFromTodo(),e.has("mode")&&this.mode==="create"&&e.get("mode")!=="create"&&this.reset()}firstUpdated(){this.syncFromTodo()}render(){return a`
      <h2>${this.mode==="create"?"Create todo":"Edit todo"}</h2>
      ${this._error?a`<div class="error">${this._error}</div>`:p}
      <form @submit=${this.handleSubmit}>
        <md-outlined-text-field
          label="Title"
          required
          name="title"
          .value=${this._title}
          @input=${e=>this._title=e.target.value}
          supporting-text="Describe the task succinctly">
        </md-outlined-text-field>

        <md-outlined-text-field
          label="Description"
          type="textarea"
          rows="4"
          required
          name="description"
          .value=${this._description}
          @input=${e=>this._description=e.target.value}
          supporting-text="Explain the purpose or teaching prompt">
        </md-outlined-text-field>

        <md-filled-select
          label="Priority"
          name="priority"
          .value=${this._priority}
          @change=${e=>this._priority=e.target.value}>
          <md-select-option value="low">
            <div slot="headline">Low</div>
          </md-select-option>
          <md-select-option value="medium" selected>
            <div slot="headline">Medium</div>
          </md-select-option>
          <md-select-option value="high">
            <div slot="headline">High</div>
          </md-select-option>
        </md-filled-select>

        <md-outlined-text-field
          label="Tags"
          name="tags"
          .value=${this._tagsInput}
          @input=${e=>this._tagsInput=e.target.value}
          supporting-text="Comma separated, e.g. teaching, realtime">
        </md-outlined-text-field>

        <md-outlined-text-field
          label="Due date"
          type="date"
          name="due"
          .value=${this._dueDateValue}
          @input=${e=>this._dueDateValue=e.target.value}
          supporting-text="Optional">
        </md-outlined-text-field>

        <div class="actions">
          <md-outlined-button type="button" @click=${this.handleCancel}>
            Cancel
          </md-outlined-button>
          <md-filled-button type="submit">
            ${this.mode==="create"?"Create todo":"Save changes"}
          </md-filled-button>
        </div>
      </form>
    `}handleSubmit(e){var r;if(e.preventDefault(),this._error=null,!this._title.trim()){this._error="Title is required.";return}if(!this._description.trim()){this._error="Description is required.";return}const t=this._tagsInput.split(",").map(i=>i.trim()).filter(Boolean),o={mode:this.mode,todoId:(r=this.todo)==null?void 0:r.id,draft:{title:this._title.trim(),description:this._description.trim(),priority:this._priority,tags:t,dueDate:this._dueDateValue?new Date(this._dueDateValue):null}};this.dispatchEvent(new CustomEvent("df-firestore-form-submit",{bubbles:!0,composed:!0,detail:o})),this.mode==="create"&&this.reset()}handleCancel(){this.dispatchEvent(new CustomEvent("df-firestore-form-cancel",{bubbles:!0,composed:!0})),this.mode==="create"&&this.reset()}reset(){this._title="",this._description="",this._priority="medium",this._tagsInput="",this._dueDateValue="",this._error=null}syncFromTodo(){!this.todo||this.mode!=="edit"||(this._title=this.todo.title,this._description=this.todo.description,this._priority=this.todo.priority,this._tagsInput=this.todo.tags.join(", "),this._dueDateValue=this.todo.dueDate?this.formatDateInput(this.todo.dueDate):"")}formatDateInput(e){const t=e.getFullYear(),o=`${e.getMonth()+1}`.padStart(2,"0"),r=`${e.getDate()}`.padStart(2,"0");return`${t}-${o}-${r}`}},L.styles=m`
    :host {
      display: block;
      padding: var(--df-spacing-5, 1.5rem);
      background: var(--md-sys-color-surface, #fff);
      border-radius: 16px;
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.1));
      box-shadow: 0 15px 45px rgba(15, 23, 42, 0.12);
      max-width: 520px;
    }

    h2 {
      margin: 0 0 1.5rem;
      font-size: 1.4rem;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    md-outlined-text-field {
      width: 100%;
    }

    md-filled-select {
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .error {
      padding: 0.75rem 1rem;
      border-radius: 12px;
      background: var(--md-sys-color-error-container, rgba(220, 38, 38, 0.14));
      color: var(--md-sys-color-on-error-container, #b91c1c);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  `,L);$([h({type:String})],y.prototype,"mode",void 0);$([h({attribute:!1})],y.prototype,"todo",void 0);$([c()],y.prototype,"_title",void 0);$([c()],y.prototype,"_description",void 0);$([c()],y.prototype,"_priority",void 0);$([c()],y.prototype,"_tagsInput",void 0);$([c()],y.prototype,"_dueDateValue",void 0);$([c()],y.prototype,"_error",void 0);y=$([f("df-firestore-form")],y);var pe=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},M;let Z=(M=class extends g{constructor(){super(),this.todoId="",this.todoTitle=""}render(){return a`
      <h3>Delete todo</h3>
      <p>
        Are you sure you want to delete <strong>${this.todoTitle||"this todo"}</strong>? This action cannot be
        undone.
      </p>
      <footer>
        <md-outlined-button @click=${this.handleCancel}>Cancel</md-outlined-button>
        <md-filled-button @click=${this.handleConfirm}>Delete</md-filled-button>
      </footer>
    `}handleConfirm(){this.dispatchEvent(new CustomEvent("df-firestore-delete-confirm",{detail:{id:this.todoId},bubbles:!0,composed:!0}))}handleCancel(){this.dispatchEvent(new CustomEvent("df-firestore-delete-cancel",{bubbles:!0,composed:!0}))}},M.styles=m`
    :host {
      display: block;
      background: var(--md-sys-color-surface, #fff);
      border-radius: 16px;
      border: 1px solid var(--md-sys-color-error, rgba(185, 28, 28, 0.3));
      padding: 1.25rem;
      max-width: 420px;
      box-shadow: 0 16px 40px rgba(185, 28, 28, 0.15);
    }

    h3 {
      margin: 0 0 0.6rem;
      color: var(--md-sys-color-error, #991b1b);
    }

    p {
      margin: 0 0 1rem;
      color: var(--md-sys-color-on-surface-variant, #475569);
      line-height: 1.5;
    }

    footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    /* MD3 buttons handle their own styling */
  `,M);pe([h({type:String})],Z.prototype,"todoId",void 0);pe([h({type:String})],Z.prototype,"todoTitle",void 0);Z=pe([f("df-firestore-delete")],Z);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class et extends g{render(){return a`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tt=m`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let se=class extends et{};se.styles=[tt];se=d([f("md-icon")],se);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function be(n,e=!0){return e&&getComputedStyle(n).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const it=ye(Oe(g));class v extends it{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[fe].form}get labels(){return this[fe].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=be(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const e=this.href?ve`div`:ve`button`,{ariaLabel:t,ariaHasPopup:o,ariaExpanded:r}=this,i=t&&this.ariaLabelSelected,s=this.toggle?this.selected:p;let l=p;return this.href||(l=i&&this.selected?this.ariaLabelSelected:t),Re`<${e}
        class="icon-button ${xe(this.getRenderClasses())}"
        id="button"
        aria-label="${l||p}"
        aria-haspopup="${!this.href&&o||p}"
        aria-expanded="${!this.href&&r||p}"
        aria-pressed="${s}"
        aria-disabled=${!this.href&&this.softDisabled||p}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?p:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():p}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return a`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||p}"
        target="${this.target||p}"
        aria-label="${e||p}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return a`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return a`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return a`<span class="touch"></span>`}renderFocusRing(){return a`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const e=!this.href&&(this.disabled||this.softDisabled);return a`<md-ripple
      for=${this.href?"link":p}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=be(this,this.flipIconInRtl),super.connectedCallback()}handleClick(e){if(!this.href&&this.softDisabled){e.stopImmediatePropagation(),e.preventDefault();return}}async handleClickOnChild(e){await 0,!(!this.toggle||this.disabled||this.softDisabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Ae(v);v.formAssociated=!0;v.shadowRootOptions={mode:"open",delegatesFocus:!0};d([h({type:Boolean,reflect:!0})],v.prototype,"disabled",void 0);d([h({type:Boolean,attribute:"soft-disabled",reflect:!0})],v.prototype,"softDisabled",void 0);d([h({type:Boolean,attribute:"flip-icon-in-rtl"})],v.prototype,"flipIconInRtl",void 0);d([h()],v.prototype,"href",void 0);d([h()],v.prototype,"download",void 0);d([h()],v.prototype,"target",void 0);d([h({attribute:"aria-label-selected"})],v.prototype,"ariaLabelSelected",void 0);d([h({type:Boolean})],v.prototype,"toggle",void 0);d([h({type:Boolean,reflect:!0})],v.prototype,"selected",void 0);d([h()],v.prototype,"type",void 0);d([h({reflect:!0})],v.prototype,"value",void 0);d([c()],v.prototype,"flipIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ot=m`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rt=m`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ne=class extends v{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};ne.styles=[ot,rt];ne=d([f("md-icon-button")],ne);var w=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},j;let b=(j=class extends V(g){constructor(){super(...arguments),this.searchTerm="",this.isFormOpen=!1,this.formMode="create",this.editingTodo=null,this.deleteTarget=null,this.realtimeEnabled=!1,this.isOnline=typeof navigator<"u"?navigator.onLine:!0,this.localError=null,this.isLoadingMore=!1,this.onlineListener=()=>this.isOnline=!0,this.offlineListener=()=>this.isOnline=!1}connectedCallback(){super.connectedCallback(),this.updateRealtimeFromState(),window.addEventListener("online",this.onlineListener),window.addEventListener("offline",this.offlineListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("online",this.onlineListener),window.removeEventListener("offline",this.offlineListener)}render(){const e=ee.get(),t=Le.get(),o=this.collectTags(e),r=this.applySearch(e.documents,this.searchTerm);return a`
      <header>
        <div>
          <h2>Firestore Todos</h2>
          <div class="controls">
            <span class="status-indicator" data-offline=${!this.isOnline}>${this.isOnline?"Online":"Offline"}</span>
            <span class="status-indicator" data-offline=${!this.realtimeEnabled}
              >${this.realtimeEnabled?"Real-time: ON":"Real-time: OFF"}</span
            >
          </div>
        </div>
        <div class="controls">
          <md-outlined-button @click=${this.handleToggleRealtime}>
            ${this.realtimeEnabled?"Disable real-time":"Enable real-time"}
          </md-outlined-button>
          <md-filled-button @click=${this.openCreateForm}>Create todo</md-filled-button>
        </div>
      </header>

      ${e.error?a`<div class="error-state">${e.error}</div>`:p}

      <section class="filters">
        <label>
          Priority
          <md-filled-select .value=${t.priority} @change=${this.handlePriorityChange}>
            <md-select-option value="all">
              <div slot="headline">All priorities</div>
            </md-select-option>
            <md-select-option value="low">
              <div slot="headline">Low</div>
            </md-select-option>
            <md-select-option value="medium">
              <div slot="headline">Medium</div>
            </md-select-option>
            <md-select-option value="high">
              <div slot="headline">High</div>
            </md-select-option>
          </md-filled-select>
        </label>

        <label>
          Tag
          <md-filled-select .value=${t.tag} @change=${this.handleTagChange}>
            <md-select-option value="all">
              <div slot="headline">All tags</div>
            </md-select-option>
            ${o.map(i=>a`
              <md-select-option value=${i}>
                <div slot="headline">${i}</div>
              </md-select-option>
            `)}
          </md-filled-select>
        </label>

        <label>
          Show completed
          <md-filled-select .value=${t.showCompleted?"yes":"no"} @change=${this.handleCompletedChange}>
            <md-select-option value="yes">
              <div slot="headline">Yes</div>
            </md-select-option>
            <md-select-option value="no">
              <div slot="headline">No</div>
            </md-select-option>
          </md-filled-select>
        </label>

        <label>
          Search title
          <md-outlined-text-field
            type="search"
            .value=${this.searchTerm}
            placeholder="Search displayed results"
            @input=${i=>this.searchTerm=i.target.value}
          ></md-outlined-text-field>
        </label>

        <md-outlined-button type="button" @click=${this.handleResetFilters}>Reset filters</md-outlined-button>
      </section>

      <section class="toolbar">
        <div class="toolbar-controls">
          <span>Page ${e.currentPage}</span>
          <label class="toolbar-select">
            Page size
            <md-filled-select .value=${String(e.pageSize)} @change=${this.handlePageSizeChange}>
              <md-select-option value="5">
                <div slot="headline">5 per page</div>
              </md-select-option>
              <md-select-option value="10">
                <div slot="headline">10 per page</div>
              </md-select-option>
              <md-select-option value="15">
                <div slot="headline">15 per page</div>
              </md-select-option>
            </md-filled-select>
          </label>
        </div>

        <div class="pagination">
          <md-outlined-button type="button" ?disabled=${!e.hasPreviousPage} @click=${this.loadPrevious}>
            Previous page
          </md-outlined-button>
          <md-outlined-button type="button" ?disabled=${!e.hasNextPage} @click=${this.loadNext}>
            Next page
          </md-outlined-button>
        </div>
      </section>

      ${e.status==="loading"?a`<div class="empty-state">Loading todos...</div>`:r.length?a`
              <section class="list">
                ${r.map(i=>a`
                    <df-firestore-item
                      .todo=${i}
                      @df-firestore-item-toggle=${this.handleToggleTodo}
                      @df-firestore-item-edit=${this.handleEditTodo}
                      @df-firestore-item-delete=${this.handleDeleteRequest}
                    ></df-firestore-item>
                  `)}
              </section>
              
              ${e.hasNextPage?a`
                <div class="load-more-container">
                  <md-outlined-button 
                    class="load-more-button"
                    @click=${this.handleLoadMore}
                    ?disabled=${this.isLoadingMore}
                  >
                    ${this.isLoadingMore?"Loading...":"Load more todos"}
                  </md-outlined-button>
                  <p class="load-more-hint">
                    Progressive loading: Click to append ${e.pageSize} more items
                  </p>
                </div>
              `:p}
            `:a`<div class="empty-state">No todos match the current filters.</div>`}

      ${this.isFormOpen?this.renderFormModal():p}
      ${this.deleteTarget?this.renderDeleteModal():p}

      ${this.localError?a`<div class="error-state">${this.localError}</div>`:p}
    `}renderFormModal(){return a`
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="modal-content">
          <md-icon-button class="modal-close" @click=${this.closeForm} aria-label="Close">
            <md-icon>close</md-icon>
          </md-icon-button>
          <df-firestore-form
            .mode=${this.formMode}
            .todo=${this.editingTodo}
            @df-firestore-form-submit=${this.handleFormSubmit}
            @df-firestore-form-cancel=${this.closeForm}
          ></df-firestore-form>
        </div>
      </div>
    `}renderDeleteModal(){return this.deleteTarget?a`
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="modal-content">
          <md-icon-button class="modal-close" @click=${this.closeDeleteModal} aria-label="Close">
            <md-icon>close</md-icon>
          </md-icon-button>
          <df-firestore-delete
            .todoId=${this.deleteTarget.id}
            .todoTitle=${this.deleteTarget.title}
            @df-firestore-delete-confirm=${this.confirmDelete}
            @df-firestore-delete-cancel=${this.closeDeleteModal}
          ></df-firestore-delete>
        </div>
      </div>
    `:p}handlePriorityChange(e){const t=e.target.value;te({priority:t})}handleTagChange(e){const t=e.target.value;te({tag:t})}handleCompletedChange(e){const t=e.target.value;te({showCompleted:t==="yes"})}handleResetFilters(){Me(),this.searchTerm=""}async handlePageSizeChange(e){const t=Number(e.target.value);await je(t)}async loadNext(){try{await ge()}catch(e){this.showLocalError(e)}}async loadPrevious(){try{await Ne()}catch(e){this.showLocalError(e)}}async handleLoadMore(){this.isLoadingMore=!0;try{await ge()}catch(e){this.showLocalError(e)}finally{this.isLoadingMore=!1}}showLocalError(e){this.localError=e instanceof Error?e.message:"Unexpected error occurred.",setTimeout(()=>{this.localError=null},4e3)}handleToggleRealtime(){this.realtimeEnabled=!this.realtimeEnabled,this.realtimeEnabled?Be():Ve()}updateRealtimeFromState(){const{isListening:e}=ee.get();this.realtimeEnabled=e}openCreateForm(){this.formMode="create",this.editingTodo=null,this.isFormOpen=!0}handleEditTodo(e){this.formMode="edit",this.editingTodo=e.detail,this.isFormOpen=!0}closeForm(){this.isFormOpen=!1,this.editingTodo=null}async handleFormSubmit(e){const{mode:t,draft:o,todoId:r}=e.detail;try{t==="create"?await qe(o):r&&await He(r,o),this.isFormOpen=!1,this.editingTodo=null}catch(i){this.showLocalError(i)}}handleDeleteRequest(e){const{id:t,title:o}=e.detail,r=ee.get().documents.find(i=>i.id===t)??{id:t,title:o,description:"",priority:"medium",tags:[],createdAt:null,updatedAt:null,completed:!1,dueDate:null};this.deleteTarget=r}closeDeleteModal(){this.deleteTarget=null}async confirmDelete(e){try{await We(e.detail.id),this.closeDeleteModal()}catch(t){this.showLocalError(t)}}async handleToggleTodo(e){try{await Ue(e.detail.id,e.detail.completed)}catch(t){this.showLocalError(t)}}applySearch(e,t){const o=t.trim().toLowerCase();return o?e.filter(r=>r.title.toLowerCase().includes(o)):e}collectTags(e){const t=new Set;for(const o of e.documents)for(const r of o.tags)t.add(r);return Array.from(t).sort((o,r)=>o.localeCompare(r))}},j.styles=m`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-radius: 24px;
      padding: 2rem;
      background: var(--md-sys-color-surface-container-low, linear-gradient(160deg, rgba(241, 245, 249, 0.92), rgba(226, 232, 240, 0.82)));
      border: 1px solid var(--md-sys-color-outline-variant, rgba(148, 163, 184, 0.35));
    }

    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }

    h2 {
      margin: 0;
      font-size: 1.85rem;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin: 1.5rem 0 2rem;
    }

    .filters label {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #475569);
      font-weight: 600;
    }

    /* MD3 components handle their own styling */
    md-filled-select,
    md-outlined-text-field {
      min-width: 160px;
    }

    .list {
      display: grid;
      gap: 1.25rem;
    }

    .empty-state {
      padding: 2.5rem;
      border: 2px dashed var(--md-sys-color-primary, rgba(59, 130, 246, 0.35));
      border-radius: 18px;
      text-align: center;
      color: var(--md-sys-color-on-surface-variant, #475569);
      background: var(--md-sys-color-primary-container, rgba(191, 219, 254, 0.18));
    }

    .error-state {
      padding: 1rem 1.25rem;
      border-radius: 14px;
      background: var(--md-sys-color-error-container, rgba(220, 38, 38, 0.16));
      color: var(--md-sys-color-on-error-container, #b91c1c);
      margin-bottom: 1.5rem;
    }

    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0 1.5rem;
      flex-wrap: wrap;
    }

    /* MD3 buttons handle their own styling - removed custom button CSS */

    .toolbar-controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .toolbar-select {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #475569);
      font-weight: 600;
    }

    .pagination {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .status-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
      padding: 0.4rem 0.75rem;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.14);
      color: #047857;
    }

    .status-indicator[data-offline='true'] {
      background: rgba(220, 38, 38, 0.14);
      color: #b91c1c;
    }

    .load-more-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      margin-top: 2rem;
      padding: 1.5rem;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
      border: 1px dashed var(--md-sys-color-primary, rgba(99, 102, 241, 0.3));
    }

    .load-more-button {
      min-width: 200px;
    }

    .load-more-hint {
      margin: 0;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #64748b);
      text-align: center;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      z-index: 99;
    }

    .modal-content {
      position: relative;
      max-width: min(95vw, 640px);
      width: 100%;
    }

    /* MD3 icon button handles its own styling */
    md-icon-button.modal-close {
      position: absolute;
      top: -3.5rem;
      right: 0;
      --md-icon-button-icon-color: #fff;
    }

    @media (max-width: 900px) {
      :host {
        padding: 1.25rem;
      }

      header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `,j);w([c()],b.prototype,"searchTerm",void 0);w([c()],b.prototype,"isFormOpen",void 0);w([c()],b.prototype,"formMode",void 0);w([c()],b.prototype,"editingTodo",void 0);w([c()],b.prototype,"deleteTarget",void 0);w([c()],b.prototype,"realtimeEnabled",void 0);w([c()],b.prototype,"isOnline",void 0);w([c()],b.prototype,"localError",void 0);w([c()],b.prototype,"isLoadingMore",void 0);b=w([f("df-firestore-list")],b);var k=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},N;let C=(N=class extends g{constructor(){super(),this.directory="uploads",this.showDelete=!0,this.showPreviews=!0,this.files=[],this.loading=!1,this.error=null}connectedCallback(){super.connectedCallback(),this.loadFiles()}updated(e){super.updated(e),e.has("directory")&&this.loadFiles()}async loadFiles(){this.loading=!0,this.error=null;try{this.files=await Ye(this.directory)}catch(e){e instanceof Ge&&e.code==="storage/unauthorized"?this.error="Sign in is required to view files in this directory.":e instanceof Error?this.error=e.message:this.error="Failed to load files"}finally{this.loading=!1}}async refresh(){await this.loadFiles()}handleFileClick(e){this.dispatchEvent(new CustomEvent("file-select",{detail:{file:e},bubbles:!0,composed:!0}))}handleDeleteClick(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("file-delete",{detail:{file:t},bubbles:!0,composed:!0}))}formatFileSize(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}formatDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}isImage(e){return e.startsWith("image/")}getFileIcon(e){return e.startsWith("image/")?"image":e.startsWith("video/")?"movie":e.startsWith("audio/")?"audio_file":e.includes("pdf")?"picture_as_pdf":e.includes("zip")||e.includes("archive")?"folder_zip":"insert_drive_file"}render(){return this.loading?a`
        <div class="loading-container">
          <md-circular-progress indeterminate></md-circular-progress>
          <span>Loading files...</span>
        </div>
      `:this.error?a`
        <div class="error-container">
          <md-icon>error</md-icon>
          <strong>Error loading files</strong>
          <span>${this.error}</span>
        </div>
      `:this.files.length===0?a`
        <div class="empty-container">
          <md-icon>folder_open</md-icon>
          <span>No files found in ${this.directory}</span>
        </div>
      `:a`
      <div class="file-list-container">
        ${this.files.map(e=>a`
            <div class="file-item" @click=${()=>this.handleFileClick(e)}>
              ${this.showPreviews&&this.isImage(e.contentType)?a`<img src="${e.downloadUrl}" alt="${e.name}" class="file-preview" />`:a`
                    <div class="file-icon">
                      <md-icon>${this.getFileIcon(e.contentType)}</md-icon>
                    </div>
                  `}

              <div class="file-info">
                <div class="file-name">${e.name}</div>
                <div class="file-meta">
                  <span>${this.formatFileSize(e.size)}</span>
                  <span>•</span>
                  <span>${this.formatDate(e.uploadedAt)}</span>
                </div>
              </div>

              ${this.showDelete?a`
                    <div class="file-actions">
                      <md-text-button @click=${t=>this.handleDeleteClick(t,e)}>
                        <md-icon slot="icon">delete</md-icon>
                        Delete
                      </md-text-button>
                    </div>
                  `:""}
            </div>
          `)}
      </div>
    `}},N.styles=m`
    :host {
      display: block;
      --md-sys-color-primary: #5f9ea0;
    }

    .file-list-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .loading-container,
    .error-container,
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px;
      gap: 12px;
      color: var(--md-sys-color-on-surface-variant, #666);
    }

    .error-container {
      color: var(--md-sys-color-error, #b00020);
      background-color: var(--md-sys-color-error-container, #fdecea);
      border-radius: 8px;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--md-sys-color-outline, #ccc);
      border-radius: 8px;
      background-color: var(--md-sys-color-surface, #fff);
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .file-item:hover {
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
      border-color: var(--md-sys-color-primary, #5f9ea0);
    }

    .file-preview {
      width: 48px;
      height: 48px;
      border-radius: 6px;
      object-fit: cover;
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
    }

    .file-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--md-sys-color-primary-container, #e0f2f1);
    }

    .file-icon md-icon {
      color: var(--md-sys-color-primary, #5f9ea0);
      font-size: 32px;
    }

    .file-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .file-name {
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-meta {
      display: flex;
      gap: 12px;
      font-size: 0.875rem;
      color: var(--md-sys-color-on-surface-variant, #666);
    }

    .file-actions {
      display: flex;
      gap: 4px;
    }

    md-text-button {
      --md-text-button-label-text-color: var(--md-sys-color-error, #b00020);
    }
  `,N);k([h({type:String})],C.prototype,"directory",void 0);k([h({type:Boolean})],C.prototype,"showDelete",void 0);k([h({type:Boolean})],C.prototype,"showPreviews",void 0);k([c()],C.prototype,"files",void 0);k([c()],C.prototype,"loading",void 0);k([c()],C.prototype,"error",void 0);C=k([f("df-file-list")],C);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const at={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Y.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Y.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},st={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Y.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Y.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nt=ye(g);class u extends nt{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>at,this.getCloseAnimation=()=>st,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var o;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(o=this.querySelector("[autofocus]"))==null||o.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const t=this.dialog;if(!t.open||this.isOpening){this.open=!1;return}const o=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=o;return}await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},o=this.open&&!this.noFocusTrap,r=a`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:i}=this;return a`
      <div class="scrim"></div>
      <dialog
        class=${xe(t)}
        aria-label=${i||p}
        aria-labelledby=${this.hasHeadline?"headline":p}
        role=${this.type==="alert"?"alertdialog":p}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||p}>
        ${o?r:p}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||p}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${o?r:p}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const t of e)this.handleAnchorIntersection(t)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const t=e.target,{submitter:o}=e;t.getAttribute("method")!=="dialog"||!o||this.close(o.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const t=!Ke(this,e);e.preventDefault(),!t&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var ue;if((ue=this.cancelAnimations)==null||ue.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:t,scrim:o,container:r,headline:i,content:s,actions:l}=this;if(!t||!o||!r||!i||!s||!l)return;const{container:F,dialog:W,scrim:U,headline:T,content:_e,actions:Ce}=e,Ee=[[t,W??[]],[o,U??[]],[r,F??[]],[i,T??[]],[s,_e??[]],[l,Ce??[]]],he=[];for(const[Q,De]of Ee)for(const ke of De){const me=Q.animate(...ke);this.cancelAnimations.signal.addEventListener("abort",()=>{me.cancel()}),he.push(me)}await Promise.all(he.map(Q=>Q.finished.catch(()=>{})))}handleHeadlineChange(e){const t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){const t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){const{target:t,isIntersecting:o}=e;t===this.topAnchor&&(this.isAtScrollTop=o),t===this.bottomAnchor&&(this.isAtScrollBottom=o)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var T;const[t,o]=this.getFirstAndLastFocusableChildren();if(!t||!o){(T=this.dialog)==null||T.focus();return}const r=e.target===this.firstFocusTrap,i=!r,s=e.relatedTarget===t,l=e.relatedTarget===o,F=!s&&!l;if(i&&l||r&&F){t.focus();return}if(r&&s||i&&F){o.focus();return}}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let e=null,t=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const o=this.treewalker.currentNode;lt(o)&&(e||(e=o),t=o)}return[e,t]}}d([h({type:Boolean})],u.prototype,"open",null);d([h({type:Boolean})],u.prototype,"quick",void 0);d([h({attribute:!1})],u.prototype,"returnValue",void 0);d([h()],u.prototype,"type",void 0);d([h({type:Boolean,attribute:"no-focus-trap"})],u.prototype,"noFocusTrap",void 0);d([x("dialog")],u.prototype,"dialog",void 0);d([x(".scrim")],u.prototype,"scrim",void 0);d([x(".container")],u.prototype,"container",void 0);d([x(".headline")],u.prototype,"headline",void 0);d([x(".content")],u.prototype,"content",void 0);d([x(".actions")],u.prototype,"actions",void 0);d([c()],u.prototype,"isAtScrollTop",void 0);d([c()],u.prototype,"isAtScrollBottom",void 0);d([x(".scroller")],u.prototype,"scroller",void 0);d([x(".top.anchor")],u.prototype,"topAnchor",void 0);d([x(".bottom.anchor")],u.prototype,"bottomAnchor",void 0);d([x(".focus-trap")],u.prototype,"firstFocusTrap",void 0);d([c()],u.prototype,"hasHeadline",void 0);d([c()],u.prototype,"hasActions",void 0);d([c()],u.prototype,"hasIcon",void 0);function lt(n){var i;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",t=":not(:disabled,[disabled])";return n.matches(e+t+':not([tabindex^="-"])')?!0:!n.localName.includes("-")||!n.matches(t)?!1:((i=n.shadowRoot)==null?void 0:i.delegatesFocus)??!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dt=m`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let le=class extends u{};le.styles=[dt];le=d([f("md-dialog")],le);var S=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},B;let E=(B=class extends g{constructor(){super(),this.file=null,this.showButton=!0,this.buttonLabel="Delete",this.dialogOpen=!1,this.deleting=!1,this.error=null}open(){this.dialogOpen=!0,this.error=null}close(){this.dialogOpen=!1,this.error=null}handleButtonClick(){this.open()}handleCancel(){this.close(),this.dispatchEvent(new CustomEvent("delete-cancel",{bubbles:!0,composed:!0}))}async handleConfirm(){if(this.file){this.dispatchEvent(new CustomEvent("delete-confirm",{detail:{file:this.file},bubbles:!0,composed:!0})),this.deleting=!0,this.error=null;try{await Ze(this.file.path),this.dispatchEvent(new CustomEvent("delete-complete",{detail:{file:this.file},bubbles:!0,composed:!0})),this.close()}catch(e){this.error=e instanceof Error?e.message:"Failed to delete file",this.dispatchEvent(new CustomEvent("delete-error",{detail:{file:this.file,error:this.error},bubbles:!0,composed:!0}))}finally{this.deleting=!1}}}getFileIcon(e){return e.startsWith("image/")?"image":e.startsWith("video/")?"movie":e.startsWith("audio/")?"audio_file":e.includes("pdf")?"picture_as_pdf":e.includes("zip")||e.includes("archive")?"folder_zip":"insert_drive_file"}render(){return a`
      ${this.showButton?a`
            <md-text-button class="delete-button" @click=${this.handleButtonClick}>
              <md-icon slot="icon">delete</md-icon>
              ${this.buttonLabel}
            </md-text-button>
          `:""}
      ${this.dialogOpen?this.renderDialog():""}
    `}renderDialog(){return this.file?a`
      <div class="dialog-content">
        <div class="dialog-header">
          <md-icon>warning</md-icon>
          <div class="dialog-title">Delete File?</div>
        </div>

        <div class="file-info">
          <div class="file-icon">
            <md-icon>${this.getFileIcon(this.file.contentType)}</md-icon>
          </div>
          <div class="file-details">
            <div class="file-name">${this.file.name}</div>
            <div class="file-path">${this.file.path}</div>
          </div>
        </div>

        <div class="warning-message">
          <strong>Warning:</strong> This action cannot be undone. The file will be permanently
          deleted from storage.
        </div>

        ${this.error?a` <div class="error-message"><strong>Error:</strong> ${this.error}</div> `:""}

        <div class="dialog-actions">
          <md-text-button @click=${this.handleCancel} ?disabled=${this.deleting}>
            Cancel
          </md-text-button>
          <md-filled-button
            class="delete-action"
            @click=${this.handleConfirm}
            ?disabled=${this.deleting}
          >
            <md-icon slot="icon">${this.deleting?"hourglass_empty":"delete"}</md-icon>
            ${this.deleting?"Deleting...":"Delete"}
          </md-filled-button>
        </div>
      </div>
    `:a`
        <div class="dialog-content">
          <div class="error-message">No file selected for deletion</div>
          <div class="dialog-actions">
            <md-text-button @click=${this.handleCancel}>Close</md-text-button>
          </div>
        </div>
      `}},B.styles=m`
    :host {
      display: inline-block;
      --md-sys-color-primary: #5f9ea0;
    }

    .delete-button {
      --md-text-button-label-text-color: var(--md-sys-color-error, #b00020);
    }

    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      min-width: 300px;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .dialog-header md-icon {
      font-size: 32px;
      color: var(--md-sys-color-error, #b00020);
    }

    .dialog-title {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .file-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
      border-radius: 8px;
    }

    .file-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--md-sys-color-error-container, #fdecea);
    }

    .file-icon md-icon {
      color: var(--md-sys-color-error, #b00020);
    }

    .file-details {
      flex: 1;
      min-width: 0;
    }

    .file-name {
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-path {
      font-size: 0.875rem;
      color: var(--md-sys-color-on-surface-variant, #666);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .warning-message {
      color: var(--md-sys-color-error, #b00020);
      font-size: 0.875rem;
      padding: 12px;
      background-color: var(--md-sys-color-error-container, #fdecea);
      border-radius: 8px;
    }

    .error-message {
      color: var(--md-sys-color-error, #b00020);
      padding: 12px;
      background-color: var(--md-sys-color-error-container, #fdecea);
      border-radius: 8px;
      font-size: 0.875rem;
    }

    .dialog-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding-top: 8px;
    }

    md-filled-button.delete-action {
      --md-filled-button-container-color: var(--md-sys-color-error, #b00020);
    }
  `,B);S([h({type:Object})],E.prototype,"file",void 0);S([h({type:Boolean})],E.prototype,"showButton",void 0);S([h({type:String})],E.prototype,"buttonLabel",void 0);S([c()],E.prototype,"dialogOpen",void 0);S([c()],E.prototype,"deleting",void 0);S([c()],E.prototype,"error",void 0);E=S([f("df-file-delete")],E);
