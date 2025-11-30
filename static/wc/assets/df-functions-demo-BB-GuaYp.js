import{x as i,i as u,a as p,r as s,t as m}from"./index-BWQJ4HYf.js";import{e as g,Z as h,$ as v,a0 as f,g as b,b as x,a1 as y,u as $,a2 as C,a3 as F,a4 as T,a5 as w,a6 as E,a7 as D}from"./select-option-8Dnlijv-.js";var z=Object.defineProperty,P=Object.getOwnPropertyDescriptor,r=(t,e,n,d)=>{for(var a=d>1?void 0:d?P(e,n):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(a=(d?c(e,n,a):c(a))||a);return d&&a&&z(e,n,a),a};let o=class extends g(u){constructor(){super(...arguments),this.initialized=!1,this.initError=null,this.todoTitle="",this.todoDescription="",this.todoPriority="medium",this.cleanupDays=30,this.exportFormat="csv"}connectedCallback(){super.connectedCallback(),this.initializeStore()}render(){return this.initError?i`
        <div class="container">
          <header>
            <h2>Cloud Functions Pattern</h2>
            <p>Unable to initialize Cloud Functions demo.</p>
          </header>
          <div class="init-error">${this.initError}</div>
        </div>
      `:this.initialized?i`
      <div class="container">
        <header>
          <h2>Cloud Functions Pattern</h2>
          <p>
            This teaching demo demonstrates calling Cloud Functions from the client using signals-based state
            management. All functions run in the emulator for 100% offline development.
          </p>
        </header>

        <div class="callouts">
          <div class="callout">Callable Functions: 2</div>
          <div class="callout">HTTP Functions: 1</div>
          <div class="callout">Triggers: 3 (background)</div>
          <div class="callout">Scheduled: 1 (cron)</div>
        </div>

        ${this.renderCreateTodoFunction()} ${this.renderCleanupFunction()} ${this.renderExportFunction()}
      </div>
    `:i`
        <div class="container">
          <header>
            <h2>Cloud Functions Pattern</h2>
            <p>Initializing...</p>
          </header>
        </div>
      `}renderCreateTodoFunction(){const t=h.get();return i`
      <div class="function-section">
        <h3>1. Callable Function: createTodoAdvanced</h3>
        <p class="function-description">
          Demonstrates a callable function with server-side business logic. The function calculates estimated effort
          and urgency score based on the todo details.
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Title *</label>
            <md-outlined-text-field
              type="text"
              .value=${this.todoTitle}
              @input=${e=>{this.todoTitle=e.target.value}}
              placeholder="Enter todo title"
            ></md-outlined-text-field>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Description</label>
            <md-outlined-text-field
              type="textarea"
              rows="3"
              .value=${this.todoDescription}
              @input=${e=>{this.todoDescription=e.target.value}}
              placeholder="Enter todo description"
            ></md-outlined-text-field>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Priority</label>
            <md-filled-select
              .value=${this.todoPriority}
              @change=${e=>{this.todoPriority=e.target.value}}
            >
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
          </div>
        </div>

        <div class="button-group">
          <md-filled-button @click=${this.handleCreateTodo} ?disabled=${t.status==="loading"}>
            Call Function
          </md-filled-button>
          <md-outlined-button @click=${this.handleResetCreateTodo} ?disabled=${t.status==="loading"}>
            Reset
          </md-outlined-button>
        </div>

        ${t.status==="loading"?i`<div class="status loading">
              <md-circular-progress indeterminate></md-circular-progress>
              <span>Calling function...</span>
            </div>`:""}
        ${t.status==="success"&&t.data?i`<div class="status success">
                Success! Todo created with ID: ${t.data.todoId}
              </div>
              <div class="result">${JSON.stringify(t.data,null,2)}</div>`:""}
        ${t.status==="error"?i`<div class="status error">Error: ${t.error}</div>`:""}
      </div>
    `}renderCleanupFunction(){const t=v.get();return i`
      <div class="function-section">
        <h3>2. Callable Function: manualCleanupExpiredTodos</h3>
        <p class="function-description">
          Demonstrates an administrative callable function. Deletes completed todos older than the specified number of
          days. Requires authentication.
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Days Old (1-365)</label>
            <md-outlined-text-field
              type="number"
              .value=${String(this.cleanupDays)}
              @input=${e=>{this.cleanupDays=parseInt(e.target.value)||30}}
              min="1"
              max="365"
            ></md-outlined-text-field>
          </div>
        </div>

        <div class="button-group">
          <md-filled-button @click=${this.handleCleanup} ?disabled=${t.status==="loading"}>
            Trigger Cleanup
          </md-filled-button>
          <md-outlined-button @click=${this.handleResetCleanup} ?disabled=${t.status==="loading"}>
            Reset
          </md-outlined-button>
        </div>

        ${t.status==="loading"?i`<div class="status loading">
              <md-circular-progress indeterminate></md-circular-progress>
              <span>Running cleanup...</span>
            </div>`:""}
        ${t.status==="success"&&t.data?i`<div class="status success">${t.data.message}</div>
              <div class="result">${JSON.stringify(t.data,null,2)}</div>`:""}
        ${t.status==="error"?i`<div class="status error">Error: ${t.error}</div>`:""}
      </div>
    `}renderExportFunction(){const t=f.get();return i`
      <div class="function-section">
        <h3>3. HTTP Function: todosExportAPI</h3>
        <p class="function-description">
          Demonstrates an HTTP function accessed via standard fetch. Exports todos in CSV or JSON format. Uses query
          parameters for configuration.
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Export Format</label>
            <md-filled-select
              .value=${this.exportFormat}
              @change=${e=>{this.exportFormat=e.target.value}}
            >
              <md-select-option value="csv" selected>
                <div slot="headline">CSV</div>
              </md-select-option>
              <md-select-option value="json">
                <div slot="headline">JSON</div>
              </md-select-option>
            </md-filled-select>
          </div>
        </div>

        <div class="button-group">
          <md-filled-button @click=${this.handleExport} ?disabled=${t.status==="loading"}>
            Export Todos
          </md-filled-button>
          <md-outlined-button @click=${this.handleResetExport} ?disabled=${t.status==="loading"}>
            Reset
          </md-outlined-button>
        </div>

        ${t.status==="loading"?i`<div class="status loading">
              <md-circular-progress indeterminate></md-circular-progress>
              <span>Exporting...</span>
            </div>`:""}
        ${t.status==="success"&&t.data?i`<div class="status success">Export complete! ${t.data.split(`
`).length} lines returned</div>
              <div class="result">${t.data}</div>`:""}
        ${t.status==="error"?i`<div class="status error">Error: ${t.error}</div>`:""}
      </div>
    `}async initializeStore(){if(!this.initialized)try{const t=b(),e=x(t);y(e,$(),"127.0.0.1",5501),this.initialized=!0}catch(t){console.error("[df-functions-demo] Failed to initialize Functions demo:",t),this.initError="Unable to initialize Functions demo. Ensure the emulators are running and reload the page."}}async handleCreateTodo(){if(!this.todoTitle.trim())return;const t={title:this.todoTitle,description:this.todoDescription||void 0,priority:this.todoPriority,tags:["demo","functions"]};try{await C(t)}catch(e){console.error("Failed to create todo:",e)}}handleResetCreateTodo(){this.todoTitle="",this.todoDescription="",this.todoPriority="medium",F()}async handleCleanup(){try{await T({daysOld:this.cleanupDays})}catch(t){console.error("Failed to run cleanup:",t)}}handleResetCleanup(){this.cleanupDays=30,w()}async handleExport(){try{await E(this.exportFormat)}catch(t){console.error("Failed to export todos:",t)}}handleResetExport(){this.exportFormat="csv",D()}};o.styles=p`
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

    h3 {
      margin: 0 0 1rem;
      font-size: 1.35rem;
      color: #334155;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: #475569;
      line-height: 1.6;
    }

    .function-section {
      border-radius: 16px;
      padding: 1.5rem;
      background: rgba(241, 245, 249, 0.92);
      border: 1px solid rgba(148, 163, 184, 0.28);
    }

    .function-description {
      margin: 0 0 1.25rem;
      color: #64748b;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .form-row {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #475569;
    }

    md-outlined-text-field,
    md-filled-select {
      width: 100%;
    }

    .button-group {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      margin-top: 1rem;
    }

    .status {
      padding: 0.75rem 1rem;
      border-radius: 12px;
      font-size: 0.9rem;
      margin-top: 1rem;
    }

    .status.loading {
      background: rgba(59, 130, 246, 0.1);
      color: #1e40af;
      border: 1px solid rgba(59, 130, 246, 0.3);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .status.success {
      background: rgba(34, 197, 94, 0.1);
      color: #15803d;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }

    .status.error {
      background: rgba(239, 68, 68, 0.1);
      color: #b91c1c;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }

    .result {
      margin-top: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid rgba(148, 163, 184, 0.28);
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 300px;
      overflow-y: auto;
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

    .init-error {
      background: rgba(220, 38, 38, 0.16);
      color: #b91c1c;
      padding: 1rem;
      border-radius: 12px;
    }
  `;r([s()],o.prototype,"initialized",2);r([s()],o.prototype,"initError",2);r([s()],o.prototype,"todoTitle",2);r([s()],o.prototype,"todoDescription",2);r([s()],o.prototype,"todoPriority",2);r([s()],o.prototype,"cleanupDays",2);r([s()],o.prototype,"exportFormat",2);o=r([m("df-functions-demo")],o);export{o as DfFunctionsDemo};
