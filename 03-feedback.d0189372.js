function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire4c75;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire4c75=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form"),i=document.querySelector("input"),s=document.querySelector("textarea");l.addEventListener("input",e(a).throttle((()=>{const{email:e,message:t}=l.elements;let o={email:e.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500));const d=JSON.parse(localStorage.getItem("feedback-form-state"));l.addEventListener("submit",(e=>{e.preventDefault(),console.log(d),localStorage.clear(),l.reset()})),window.addEventListener("load",(()=>{i.value=d.email||"",s.value=d.message||""}));
//# sourceMappingURL=03-feedback.d0189372.js.map
