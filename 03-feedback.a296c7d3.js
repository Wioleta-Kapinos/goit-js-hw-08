!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire4c75=r);var l=r("1WSnx"),a=document.querySelector(".feedback-form"),i=document.querySelector("input"),u=document.querySelector("textarea"),d="feedback-form-state";a.addEventListener("input",e(l).throttle((function(){var e=a.elements,t=e.email,n=e.message,o={email:t.value,message:n.value};localStorage.setItem(d,JSON.stringify(o))}),500));var s=JSON.parse(localStorage.getItem(d));a.addEventListener("submit",(function(e){e.preventDefault(),console.log(s),localStorage.removeItem(d),a.reset()})),window.addEventListener("load",(function(){null!==s&&(i.value=s.email,u.value=s.message)}))}();
//# sourceMappingURL=03-feedback.a296c7d3.js.map