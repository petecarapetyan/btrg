import{x as s,i as h,a as p,r as u,t as g}from"./index-BWQJ4HYf.js";import{e as f,t as m,f as c,g as b,b as v,i as y,u as x}from"./select-option-8Dnlijv-.js";import"./df-file-delete-D6-3lj6g.js";var D=Object.defineProperty,w=Object.getOwnPropertyDescriptor,d=(e,i,t,o)=>{for(var r=o>1?void 0:o?w(i,t):i,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(o?l(i,t,r):l(r))||r);return o&&r&&D(i,t,r),r};let a=class extends f(h){constructor(){super(...arguments),this.initialized=!1,this.initError=null}connectedCallback(){super.connectedCallback(),this.initializeStore()}render(){const e=m.get(),t=c.get().authUser!==null;return t&&!this.initialized&&this.initializeStore(),!t&&!this.initialized?s`
        <div class="container">
          <header>
            <h2>Firestore CRUD Pattern</h2>
            <p>
              This teaching demo initialises the shared Firestore store, enables IndexedDB persistence, and connects to
              the emulator so you can explore create, read, update, delete flows in real-time.
            </p>
          </header>

          <div class="callout" style="background: rgba(59, 130, 246, 0.12); color: #1d4ed8;">
            ℹ️ Please sign in using the Authentication widget above to access Firestore todos.
          </div>
        </div>
      `:s`
      <div class="container">
        <header>
          <h2>Firestore CRUD Pattern</h2>
          <p>
            This teaching demo initialises the shared Firestore store, enables IndexedDB persistence, and connects to
            the emulator so you can explore create, read, update, delete flows in real-time.
          </p>
        </header>

        <div class="callouts">
          <div class="callout">Status: ${e.status}</div>
          <div class="callout">Query: ${e.queryDescription??"Default"}</div>
          <div class="callout">Docs in view: ${e.documents.length}</div>
        </div>

        ${this.initError?s`<div class="callout" style="background: rgba(220, 38, 38, 0.16); color: #b91c1c;">
              ${this.initError}
            </div>`:s`<df-firestore-list></df-firestore-list>`}
      </div>
    `}async initializeStore(){if(!this.initialized)try{if(!c.get().authUser)return;const i=b(),t=v(i);await y(t,x()),this.initialized=!0}catch(e){console.error("[df-firestore-demo] Failed to initialise Firestore demo:",e),this.initError="Unable to initialise Firestore demo. Ensure the emulators are running and reload the page."}}};a.styles=p`
    :host {
      display: block;
      font-family: var(--df-font-family, system-ui, sans-serif);
      width: min(1200px, 90vw);
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 2rem;
    }

    .container {
      display: grid;
      gap: 1.5rem;
    }

    header {
      background: linear-gradient(130deg, rgba(99, 102, 241, 0.08), rgba(79, 70, 229, 0.06));
      border-radius: 24px;
      padding: 2rem;
      border: 1px solid rgba(99, 102, 241, 0.2);
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.85rem;
      color: #1e293b;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: #475569;
      line-height: 1.6;
    }

    .callouts {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .callout {
      border-radius: 16px;
      padding: 1rem 1.25rem;
      background: rgba(241, 245, 249, 0.92);
      border: 1px solid rgba(148, 163, 184, 0.28);
      color: #0f172a;
      font-weight: 600;
      text-align: center;
    }
  `;d([u()],a.prototype,"initialized",2);d([u()],a.prototype,"initError",2);a=d([g("df-firestore-demo")],a);export{a as DfFirestoreDemo};
