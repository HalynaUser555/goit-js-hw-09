function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},t=o.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in i){var o=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){i[e]=o},o.parcelRequired7c6=t);var r=t("7Y9D8");function s(e,o){return new Promise(((n,i)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}const l=document.querySelector(".form");l.addEventListener("submit",(o=>{o.preventDefault();const n=l.delay.value,i=l.step.value,t=l.amount.value;for(position=0;position<t;position+=1)s(position,+n+ +i*+position).then((({position:o,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.warning(`❌ Rejected promise ${o} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.6241b1e3.js.map
