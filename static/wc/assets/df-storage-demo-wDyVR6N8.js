import{i as w,a as x,x as n,n as v,t as U,r as p}from"./index-BWQJ4HYf.js";import{r as k,m as T,n as F,o as E,p as A,q as R,e as L,f as z,g as P,b as I,v as _,u as D}from"./select-option-8Dnlijv-.js";import"./df-file-delete-D6-3lj6g.js";const q=k(null),u=k(0);async function N(r){const e=q.get();if(!e)throw new Error("No file to upload");return new Promise((t,i)=>{try{const o=T(),s=Date.now(),h=`uploads/${r.replace(/\|/g,"/")}/${s}_${e.name}`,O=F(o,h),S=E(O,e);S.on("state_changed",c=>{const C=c.bytesTransferred/c.totalBytes;u.set(C===1?0:Math.min(C+.1,1))},c=>{console.error("[df-upload-link-store] Upload failed:",c),u.set(0),i(c)},async()=>{try{const c=await A(S.snapshot.ref);u.set(0),t(c)}catch(c){console.error("[df-upload-link-store] Failed to get download URL:",c),u.set(0),i(c)}})}catch(o){console.error("[df-upload-link-store] Upload initialization failed:",o),u.set(0),i(o)}})}var $=function(r,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var h=r.length-1;h>=0;h--)(l=r[h])&&(s=(o<3?l(s):o>3?l(e,t,s):l(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s},g;let y=(g=class extends w{constructor(){super(),this.selected="0",this.disabledOptions=[]}handleSelect(e){this.selected=e,this.dispatchEvent(new CustomEvent("df-segmented-button-change",{detail:{id:e},bubbles:!0,composed:!0}))}render(){const e=[{value:"0",label:"",icon:n`
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        `},{value:"Upload",label:"",icon:n`
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960">
            <path
              d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"
            />
          </svg>
        `},{value:"Site",label:"",icon:n`
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960">
            <path
              d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
            />
          </svg>
        `},{value:"Add",label:"",icon:n`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        `}];return n`
      <div class="container">
        ${e.filter(({value:t})=>!this.disabledOptions.includes(t)).map(({value:t,label:i,icon:o})=>n`
              <button
                class=${R({button:!0,selected:this.selected===t})}
                type="button"
                role="radio"
                aria-checked=${this.selected===t}
                @click=${()=>this.handleSelect(t)}
              >
                ${o?n`<span class="icon">${o}</span>`:""} ${i}
              </button>
            `)}
      </div>
    `}},g.styles=x`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }

    .container {
      display: flex;
      border: 1px solid var(--md-sys-color-outline, #c6c6c6);
      border-radius: 12px;
      overflow: hidden;
    }

    .button {
      flex: 1;
      padding: 2px 8px;
      text-align: center;
      cursor: pointer;
      background-color: var(--md-sys-color-surface, #ffffff);
      color: var(--md-sys-color-on-surface, #000000);
      border: none;
      outline: none;
      font-size: 14px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .button.selected {
      background-color: var(--md-sys-color-primary, #6200ea);
      color: var(--md-sys-color-on-primary, #ffffff);
    }

    .button:not(.selected):hover {
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
    }

    .button:not(:last-child) {
      border-right: 1px solid var(--md-sys-color-outline, #c6c6c6);
    }

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,g);$([v({type:String})],y.prototype,"selected",void 0);$([v({type:Array})],y.prototype,"disabledOptions",void 0);y=$([U("df-segmented-button")],y);const j=k(!0);var d=function(r,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var h=r.length-1;h>=0;h--)(l=r[h])&&(s=(o<3?l(s):o>3?l(e,t,s):l(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s},m;let a=(m=class extends L(w){constructor(){super(),this.resourceLinkType="void",this.resourcePageType="void",this.linkUrl="",this.imageValid=!1,this.showUrlContainer=!1,this.showUploader=!1,this.showContent=!1,this.showLinkInput=!1,this.fileName="Select File to Upload",this.generatedLink="",this.disabledOptions=["Add","0"]}async uploadFile(e){const t=e.target,i=t.files?t.files[0]:null;if(i&&j.get()){const o=this.resourcePageType+"|"+this.resourceLinkType;this.fileName=i?i.name:"No screenshot chosen",q.set(i),this.generatedLink=await N(o),this.linkUrl=this.generatedLink,this.showUrlContainer=!0,this.imageValid=!0,this.disabledOptions=["Site","Upload"],this.dispatchEvent(new CustomEvent("upload-link-gather-url",{detail:{linkUrl:this.linkUrl}}))}else console.error("No file selected or user not authenticated.")}handleInput(e){const t=e.target;this.linkUrl=t.value,this.validateImage()}validateImage(){const e=new Image;e.src=this.linkUrl,e.onload=()=>{this.imageValid=!0,this.showUrlContainer=!0,this.requestUpdate(),this.disabledOptions=["Site","Upload"],this.dispatchEvent(new CustomEvent("upload-link-gather-url",{detail:{linkUrl:this.linkUrl}}))},e.onerror=()=>{console.error("ERROR ON IMAGE"),this.imageValid=!1,this.requestUpdate()}}isValidUrl(e){try{return new URL(e),this.linkUrl=e,!0}catch{return!1}}handleSelectionChange(e){switch(e.detail.id){case"Upload":this.triggerUpload();break;case"Site":this.triggerLink();break;case"Add":this.triggerAdd();break;default:this.triggerNone();break}}triggerUpload(){this.showContent=!0,this.showUrlContainer=!1,this.showUploader=!0,this.showLinkInput=!1}triggerLink(){this.showUrlContainer=!0,this.showUploader=!1,this.showContent=!0,this.showLinkInput=!0}triggerAdd(){this.dispatchEvent(new CustomEvent("upload-link-allocate",{detail:{linkUrl:this.linkUrl}})),this.disabledOptions=["Add","0"]}triggerNone(){this.showUrlContainer=!1,this.showUploader=!1,this.showContent=!1,this.showLinkInput=!1,this.disabledOptions=["Add","0"]}render(){return this.showUrlContainer=this.isValidUrl(this.generatedLink),this.showUrlContainer=!0,n`
      <div>Gather [${this.resourceLinkType}s]:
        <df-segmented-button
          @df-segmented-button-change=${this.handleSelectionChange}
          .disabledOptions=${this.disabledOptions}
        ></df-segmented-button>
        <div style="display: ${this.showContent?"flex":"none"};">
          <div style="display: ${this.showUploader?"block":"none"};">
            <label class="file-label">
              <span>${this.fileName}</span>
              <!-- md3-gap: native file input required to invoke OS file picker per MD3 upload guidelines -->
              <input type="file" class="file-input" @change="${this.uploadFile}"/>
            </label>
          </div>
          <a href="${this.generatedLink.valueOf()}" style="display: ${this.showUrlContainer?"block":"none"};"
             target="_blank"><img
            class="thumbnail" ${this.imageValid?"":"hidden"}"
              src=${this.imageValid?this.linkUrl:""}
            /></a>
          <md-outlined-text-field
            style="display: ${this.showLinkInput?"block":"none"};"
            label="URL" .value=${this.linkUrl}
            @input=${this.handleInput}></md-outlined-text-field>
          <md-circular-progress four-color value="${u.get()}"></md-circular-progress>
        </div>
      </div>
    `}},m.styles=x`
    :host {
      display: block;
      padding: 10px;
      font-family: 'Roboto', sans-serif;
      margin-top: 3px;
      --md-sys-color-primary: #5f9ea0;
    }

    div:first-of-type {
      display: flex;
      flex-direction: row; /* Aligns children in a row */
      align-items: center; /* Aligns items vertically in the center */
      gap: 10px; /* Adds space between elements */
    }

    .file-input-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      border-radius: 12px;
    }

    .file-label {
      height: 70px;
      border-radius: 12px;
      cursor: pointer;
      margin-right: 10px;
      font-size: 14px;
      white-space: nowrap;
      padding: 8px 16px;
      text-align: center;
      background-color: var(--md-sys-color-primary, #6200ea);
      color: var(--md-sys-color-on-primary, #ffffff);
      border: none;
      outline: none;
      line-height: 20px;
    }

    .file-input {
      display: none;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: 350px;
    }

    .thumbnail {
      height: 50px;
      object-fit: contain;
      border-radius: 12px;
      display: block;
    }

    .thumbnail.hidden {
      display: none;
    }

    df-segmented-button {
      display: inline-flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      width: auto; /* Set width to auto to fit content */
    }
  `,m);d([v()],a.prototype,"resourceLinkType",void 0);d([v()],a.prototype,"resourcePageType",void 0);d([v({type:String})],a.prototype,"linkUrl",void 0);d([v({type:Boolean})],a.prototype,"imageValid",void 0);d([p()],a.prototype,"showUrlContainer",void 0);d([p()],a.prototype,"showUploader",void 0);d([p()],a.prototype,"showContent",void 0);d([p()],a.prototype,"showLinkInput",void 0);d([p()],a.prototype,"fileName",void 0);d([p()],a.prototype,"generatedLink",void 0);d([p()],a.prototype,"disabledOptions",void 0);a=d([U("df-upload-link")],a);var B=Object.defineProperty,V=Object.getOwnPropertyDescriptor,b=(r,e,t,i)=>{for(var o=i>1?void 0:i?V(e,t):e,s=r.length-1,l;s>=0;s--)(l=r[s])&&(o=(i?l(e,t,o):l(o))||o);return i&&o&&B(e,t,o),o};let f=class extends L(w){constructor(){super(...arguments),this.initialized=!1,this.initError=null,this.selectedFile=null,this.uploadedUrl=""}connectedCallback(){super.connectedCallback(),this.initializeStorageStore()}render(){const r=u.get(),e=z.get(),t=e.authState==="authenticated",i=e.authState==="loading"||!e.initialized;return n`
      <div class="container">
        <header>
          <h2>Storage Pattern</h2>
          <p>
            This teaching demo demonstrates Firebase Storage patterns including file upload with
            progress tracking, file listing, and deletion. Uses the df-upload-link component for
            uploads with inline preview. All operations work with the Firebase Storage emulator.
          </p>
        </header>

        <div class="callouts">
          <div class="callout">Upload Progress: ${Math.round(r*100)}%</div>
          <div class="callout">
            ${this.uploadedUrl?`Last Upload: ${this.uploadedUrl.split("/").pop()}`:"No file uploaded yet"}
          </div>
        </div>

        ${this.initError?n`<div class="callout" style="background: rgba(220, 38, 38, 0.16); color: #b91c1c;">
              ${this.initError}
            </div>`:n`
              <div class="two-column">
                <div class="demo-section">
                  <h3>Upload Files</h3>
                  <df-upload-link
                    resourcePageType="storage"
                    resourceLinkType="image"
                    @upload-link-gather-url=${this.handleUploadComplete}
                  ></df-upload-link>
                </div>

                <div class="demo-section">
                  <h3>Uploaded Files</h3>
                  ${t?n`
                        <df-file-list
                          id="file-list"
                          directory="uploads/storage/image"
                          showDelete
                          showPreviews
                          @file-select=${this.handleFileSelect}
                          @file-delete=${this.handleFileDelete}
                        ></df-file-list>
                      `:n`
                        <div class="auth-hint">
                          <strong>Authentication required</strong>
                          ${i?n`Connecting to Firebase Authentication...`:n`Sign in using the Authentication demo (e.g.
                                <code>alice.anderson@example.com</code>) to view the
                                seeded Storage files.`}
                        </div>
                      `}
                </div>
              </div>
            `}
      </div>
    `}async initializeStorageStore(){if(!this.initialized)try{const r=P(),e=I(r);_(e,D()),this.initialized=!0}catch(r){console.error("[df-storage-demo] Failed to initialize Storage demo:",r),this.initError="Unable to initialize Storage demo. Ensure the emulators are running and reload the page."}}async handleUploadComplete(r){var t;console.log("[df-storage-demo] Upload complete:",r.detail),this.uploadedUrl=r.detail.linkUrl;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("#file-list");e&&typeof e.refresh=="function"&&await e.refresh()}handleFileSelect(r){this.selectedFile=r.detail.file}async handleFileDelete(r){const{file:e}=r.detail,t=document.createElement("df-file-delete");t.file=e,t.showButton=!1,t.addEventListener("delete-complete",async()=>{var o,s;console.log("[df-storage-demo] File deleted:",e);const i=(o=this.shadowRoot)==null?void 0:o.querySelector("#file-list");i&&typeof i.refresh=="function"&&await i.refresh(),((s=this.selectedFile)==null?void 0:s.path)===e.path&&(this.selectedFile=null),document.body.removeChild(t)}),t.addEventListener("delete-cancel",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.open()}};f.styles=x`
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

    .demo-section {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      border: 1px solid rgba(148, 163, 184, 0.28);
    }

    .demo-section h3 {
      margin: 0 0 1rem;
      color: #1e1b4b;
      font-size: 1.25rem;
    }

    .two-column {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: 1fr 1fr;
    }

    .auth-hint {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: flex-start;
      padding: 1.25rem;
      border-radius: 12px;
      border: 1px dashed rgba(99, 102, 241, 0.4);
      background: rgba(99, 102, 241, 0.08);
      color: #312e81;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .auth-hint strong {
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .two-column {
        grid-template-columns: 1fr;
      }
    }

    .file-preview-area {
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;b([p()],f.prototype,"initialized",2);b([p()],f.prototype,"initError",2);b([p()],f.prototype,"selectedFile",2);b([p()],f.prototype,"uploadedUrl",2);f=b([U("df-storage-demo")],f);export{f as DfStorageDemo};
