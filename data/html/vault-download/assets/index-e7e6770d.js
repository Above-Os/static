(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=()=>{const o=navigator.userAgent;(/android/i.test(o)||/iPad|iPhone|iPod/i.test(o))&&(window.location.href="https://github.com/Above-Os/DIDVault/releases")},l=()=>{window.location.href="https://github.com/Above-Os/DIDVault/releases"};document.querySelector("#app").innerHTML=`
  <div>
    <h1>vault-download</h1>
    <div class="card">
      <button id="counter" type="button" onclick="locationTo" > Download </button>
    </div>
  </div>
`;window.onload=c;document.querySelector("#counter").onclick=l;
