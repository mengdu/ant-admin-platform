webpackJsonp([2],{374:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),c=n.n(o),u=n(38),i=n(204),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"handleClick",value:function(e){console.log("click",e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.b,{style:{margin:"16px 16px"}},c.a.createElement(u.b.Item,null,"Components"),c.a.createElement(u.b.Item,null,"MButton")),c.a.createElement("div",{className:"m-box"},c.a.createElement("div",null,c.a.createElement(i.default,{click:function(t){return e.handleClick(t)}},"Default"),c.a.createElement(i.default,{type:"info"},"Info"),c.a.createElement(i.default,{type:"primary"},"Primary"),c.a.createElement(i.default,{type:"success"},"Success"),c.a.createElement(i.default,{type:"danger"},"Danger"),c.a.createElement(i.default,{type:"warning"},"Warning")),c.a.createElement("p",null),c.a.createElement("div",null,c.a.createElement(i.default,{type:"info",round:!0},"test"),c.a.createElement(i.default,{type:"info",plain:!0},"test"))))}}]),t}(c.a.Component);t.default=p}});
//# sourceMappingURL=2.33b39996.chunk.js.map