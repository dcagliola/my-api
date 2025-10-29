/**
 * Copyright 2025 dcagliola
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `my-api`
 *
 * @demo index.html
 * @element my-api
 */
export class MyApi extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "my-api";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: var(--ddd-theme-accent, #f4f4f8);
        font-family: var(--ddd-font-navigation, Arial, sans-serif);
      }

      .card {
        width: 350px;
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .image-holder {
        width: 100%;
        height: 300px;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }

      .image-holder img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .author-info {
        display: flex;
        align-items: center;
        padding: 16px;
      }

      .author-info img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
      }

      .username {
        font-weight: bold;
        font-size: 1rem;
        color: #222;
      }

      .interact-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px;
        gap: 10px;
      }

      .left-actions,
      .right-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      button {
        cursor: pointer;
        border: none;
        background: #ff6600;
        color: white;
        font-size: 1rem;
        width: 44px;
        height: 44px;
      }

      button:hover {
        background: #e65500;
      }

      .share-btn {
        width: auto;
        height: auto;
        padding: 6px 10px;
        font-size: 0.85rem;
        background: #444;
      }

      .arrows button {
        width: 34px;
        height: 34px;
        font-size: 1.2rem;
        background: #ff6600;
      }

      .arrows button[disabled] {
        opacity: 0.4;
        cursor: default;
      }

      .copied-msg {
        text-align: center;
        font-size: 0.8rem;
        color: green;
        padding-bottom: 10px;
      }
    `];
  }

  render() {
    return html`
      <div class="card">
      <div class="author-info">
          <img src="" alt="profile" />
          <span class="username">Username</span>
        </div>

        <div class="image-holder">
          <img src="" alt="image">
        </div>

        <div class="interact-box">
          <div class="left-actions">
            <button class="like-btn">Like</button>
            <button class="dislike-btn">Dislike</button>
          </div>
          <button class="share-btn">Share</button>

          <div class="right-actions arrows">
            <button class="prev">←</button>
            <button class="next">→</button>
          </div>
        </div>

        <div class="copied-msg">Copied!</div>
      </div>
    `;
  }
}

customElements.define(MyApi.tag, MyApi);
