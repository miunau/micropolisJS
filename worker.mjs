var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index-5f038599.js
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css5) => css5.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, escaped, missing_component, on_destroy;
var init_index_5f038599 = __esm({
  ".svelte-kit/output/server/chunks/index-5f038599.js"() {
    Promise.resolve();
    escaped = {
      '"': "&quot;",
      "'": "&#39;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;"
    };
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/hooks-1c45ba0b.js
var hooks_1c45ba0b_exports = {};
var init_hooks_1c45ba0b = __esm({
  ".svelte-kit/output/server/chunks/hooks-1c45ba0b.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
var _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_5f038599();
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/stylesheets/0.js
var __default;
var init__ = __esm({
  ".svelte-kit/output/server/stylesheets/0.js"() {
    __default = '@import"https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,300italic,400italic";*{padding:0;margin:0}@font-face{font-family:Chunk;font-style:normal;font-weight:400;src:local("ChunkFive"),url(/css/chunk.woff) format("woff")}body{background-image:url(/images/dirtbg.png)}button,input[type=submit]{width:140px;height:19px;border-radius:3px;cursor:pointer;border:none;font-family:sans-serif}footer{position:absolute;left:0;right:0;bottom:0px;height:35px;background-color:#2f4f4f}header{background-color:#2f4f4f;font-family:Chunk,serif;height:35px}header h1{margin-left:0}main{position:absolute;top:0;bottom:55px;width:100%;overflow:hidden}nav a,nav a:link,nav a:visited,nav a:hover,footer a,footer a:link,footer a:visited,footer a:hover #aboutHeader a,#aboutHeader a:link,#aboutHeader a:visited,#aboutHeader a:hover{text-decoration:none;color:#fff}footer a,footer a:link,footer a:visited,footer a:hover{text-decoration:underline;margin-left:5px}nav li{display:inline}.alignCenter{text-align:center}.awaitGeneration,.hidden,.initialHidden,.imageData{display:none}.bad{background-color:red;color:#ff0}.block{display:block}.bold{font-weight:700}.border-bottom{border-bottom:1px solid black}.budgetRight{margin-left:7px}.cancel,#debugRequest,#pauseRequest{background-color:#2f4f4f;color:#fff}.centred,#tooSmallInner{position:absolute;top:50%;left:50%;border:1px solid black;width:400px;transform:translate(-50%,-50%)}.chunk{font-family:Chunk,serif;font-weight:400}.dialogOK{color:#fff;background-color:green}.difficulty{margin-left:10px}.elided{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fontlarge{font-size:24px}.good{background-color:#90ee90;color:#000}.helpPointer{cursor:help}.inline{display:inline}.inlineblock{display:inline-block}.left{float:left}.leftedge{left:50px}.loadSave,.saveHeader{background-color:#5f9ea0;color:#fff}.loadSave:disabled{background-color:#a9a9a9;color:silver;cursor:not-allowed}.margin10{margin:10px 0}.modal{position:fixed;top:50%;left:50%;border:1px solid black;transform:translate(-50%,-50%);z-index:20;background-color:#fff;width:500px}.modal header{height:18px}.mintcream,.neutral{background-color:#f5fffa}.neutral{color:#000}.open{font-family:Open Sans,sans-serif}.opinion,.statistics{font-size:12px}.opinionList dd{font-style:italic}.padding10{padding:10px}.pointer{cursor:pointer}.queryItem,.statisticsItem{display:inline-block;width:200px}.queryList dt{font-weight:600}.right{float:right}.rightedge{right:50px}.row button{display:inline-block}.selected{font-weight:700;border:1px solid black}.semibold{font-weight:600px}.shadow,.controlShadow{-ms-box-shadow:10px 0px 35px 0px rgba(31,28,31,.8);-webkit-box-shadow:10px 0px 35px 0px rgba(31,28,31,.8);-moz-box-shadow:10px 0px 35px 0px rgba(31,28,31,.8);box-shadow:10px 0 35px #1f1c1fcc}.statisticsItem{display:inline-block;width:200px}.statisticsRight{display:inline-block;width:150px}.unselected{font-weight:400}.white{color:#fff}.width140{width:140px}.z1{z-index:1}#budgetForm>div:nth-child(9){align:center;width:100%}#budgetForm>div,#budgetForm>fieldset{display:inline-block;width:230px}#budgetForm input[type=range]{max-width:210px;padding:5px}#budgetReset{color:#fff;background-color:#1e90ff}#congratsHeader{background-color:#32cd32}#controls{user-select:none;position:absolute;top:0px;left:0px;width:118px;padding:10px 0;background:rgb(40,40,40);border-bottom:1px solid #666;border-right:1px solid #666;text-align:center}.toolButton{width:48px;height:48px;padding:0;border-radius:0;display:inline-block;border:0}.toolButton img{pointer-events:none;width:100%;height:100%;display:block;image-rendering:pixelated}#debug{position:absolute;top:580px;width:280px;display:none}#difficultyLabel{margin-right:5px}#disasterLabel{display:block}#evalContainer{font-size:14px}#flagsTable{text-align:center;padding:5px;margin:0 auto;border:1px solid black}#flagsTable td,#flagsTable th{padding:0 5px}#infobar{background:rgb(40,40,40);position:fixed;bottom:0px;height:25px;left:0;width:100%;color:#fff;padding:15px 10px}#infobar .inner{display:flex;align-items:center;justify-content:center;gap:10px;flex-direction:row;flex-wrap:nowrap;font-size:14px;color:#ccc}#loadingBanner[data-hasscript=false]{display:none}#miscButtons{position:fixed;top:0;left:0;width:100%;height:34px;padding:5px 0;background:rgb(40,40,40);border-bottom:1px solid #666}#miscButtons .inner{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;gap:5px;padding:0 10px}#miscButtons .inner button{width:auto;height:auto;padding:10px;border-radius:0;background:#666;font-size:14px;line-height:14px}#monstertv{position:absolute;top:364px;width:200px;background-color:red}#monsterTVForm{margin-top:5px}#nameForm{font-size:18px;width:150px}#notifications{position:fixed;top:0;right:0;left:50%;padding:14px 10px 0 0;font-weight:700;font-size:12px;background:transparent;color:#ccc;text-align:right}#opaque{position:absolute;top:0;left:0;bottom:0;right:0;opacity:.7;filter:Alpha(Opacity=70);background-color:gray;z-index:10}#playit{background-color:green;color:#fff;font-size:18px;height:24px}#RCIContainer{position:absolute;border-bottom:1px solid #666;border-right:1px solid #666;top:444px;left:0;width:118px;height:118px;margin:0;background:rgb(40,40,40)}#RCIContainer canvas{width:100%}#screenshotLink,#screenshotLink:link,#screenshotLink:visited,#screenshotLink:hover{text-decoration:none;color:#1e90ff}#splash{position:absolute;width:540px;height:460px}#splash p{margin-bottom:12px}#splashButton{margin-bottom:10px}#splashButtons{position:absolute;left:10px;top:105px}#splashButtonContainer{position:absolute;top:90px;left:390px}#splashContainer{position:absolute;top:150px;left:20px}#splashGenerate{background-color:#1e90ff;color:#fff}#splashPlay{background-color:#90ee90}#start{display:none;text-align:center;font-size:18px}#statisticsList,.queryList{width:400px;margin:0 auto;padding:0 110px}#tooSmall{position:absolute;top:0;bottom:0;left:0;right:0;display:none;z-index:200}#tw{position:absolute;top:300px}#tvContainer{width:177px;height:128px;margin:0 auto}#wrapper{position:absolute;top:45px;left:0px;right:0px;bottom:0px}#budgetRequest,#budgetHeader{background-color:#1e90ff;color:#fff}#disasterRequest,#disasterHeader{background-color:red;color:#ff0}#evalRequest,#evalHeader{background-color:#228b22;color:#fff}.screenshotHeader,#screenshotRequest{background-color:tomato;color:#fff}#settingsHeader,#settingsRequest{background-color:#639;color:#fff}#airportButton{background-color:violet}#bulldozerButton{background-color:salmon}#coalButton{background-color:gray}#commercialButton{background-color:#00f;color:#fff}#fireButton{background-color:red}#industrialButton{background-color:#ff0}#nuclearButton{background-color:#ffe4e1}#parkButton{background-color:#006400;color:#fff}#policeButton{background-color:#00008b;color:#fff}#portButton{background-color:#1e90ff;color:#fff}#queryButton,#queryHeader{background-color:#0ff}#railButton{background-color:brown;color:#fff}#residentialButton{background-color:#0f0}#roadButton{background-color:#000;color:#fff}#stadiumButton{background-color:indigo;color:#fff}#wireButton{background-color:khaki}@media (max-height: 742px){footer{height:15px}header{height:15px}main{bottom:35px}.border-bottom{border:none}.fontlarge{font-size:16px}#author{display:none}#notifications{bottom:unset;border:none;top:593px}#wrapper{top:35px}}@media (max-height: 702px){#debug{top:544px}#monstertv{top:324px}#tw{top:280px}}@media (max-height: 672px){#debug{top:504px}#monstertv{top:304px}#tw{top:260px}}@media (max-height: 642px){#debug{top:460px}#monstertv{top:274px}#tw{top:240px}}@media (max-height: 612px){#debug{top:396px}#monstertv{top:220px}#tw{display:none}}@media (max-height: 582px){#tooSmall[data-hasscript=true]{display:block}}@media (max-width: 850px){.leftedge{left:20px}.rightedge{right:20px}#notifications{bottom:40px;left:unset;right:0;transform:unset}}@media (max-width: 750px){.leftedge{left:10px}.rightedge{right:10px}}@media (max-width: 650px){.leftedge{left:0px}.rightedge{right:0px}}@media (max-width: 590px){#tooSmall[data-hasscript=true]{display:block}}#aboutMain{position:relative;top:50px;margin-bottom:100px}#aboutContainer{position:relative;left:50%;border:1px solid black;width:75%;line-height:1.7em;text-align:justify;transform:translate(-50%)}#aboutContainer p,#aboutContainer li,#aboutContainer h3{margin:10px}#aboutContainer h3{margin-top:20px}#aboutContainer ul{margin-left:50px}#aboutFooter{position:relative}#appeal{border:1px dotted grey;font-size:12px;width:50%;margin:auto;line-height:1.5em;background-color:#ffffe0}#aboutMain a,#aboutMain a:link,#aboutMain a:visited,#aboutMain a:hover #nagContainer a,#nagContainer a:link,#nagContainer a:visited,#nagContainer a:hover{text-decoration:none;color:#1e90ff}.info{width:20%;text-align:centre}#build{position:absolute;left:5px;bottom:5px}\n';
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => layout_svelte_exports,
  styles: () => styles
});
var entry, js, css, styles;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_svelte();
    init__();
    entry = "pages/__layout.svelte-f020407b.js";
    js = ["pages/__layout.svelte-f020407b.js", "chunks/index-b6926417.js"];
    css = ["assets/pages/__layout.svelte-75f6f174.css"];
    styles = {
      "assets/pages/__layout.svelte-75f6f174.css": __default
    };
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2,
  load: () => load
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index_5f038599();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  css: () => css2,
  entry: () => entry2,
  js: () => js2,
  module: () => error_svelte_exports
});
var entry2, js2, css2;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_error_svelte();
    entry2 = "error.svelte-d7861ee7.js";
    js2 = ["error.svelte-d7861ee7.js", "chunks/index-b6926417.js"];
    css2 = [];
  }
});

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.6.0", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      };
      jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        guid: 1,
        support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      var Sizzle = function(window3) {
        var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
          var i2 = 0, len = list.length;
          for (; i2 < len; i2++) {
            if (list[i2] === elem) {
              return i2;
            }
          }
          return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape2, nonHex) {
          var high = "0x" + escape2.slice(1) - 65536;
          return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
          return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, { dir: "parentNode", next: "legend" });
        try {
          push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
          arr2[preferredDoc.childNodes.length].nodeType;
        } catch (e2) {
          push2 = {
            apply: arr2.length ? function(target, els) {
              pushNative.apply(target, slice2.call(els));
            } : function(target, els) {
              var j = target.length, i2 = 0;
              while (target[j++] = els[i2++]) {
              }
              target.length = j - 1;
            }
          };
        }
        function Sizzle2(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext !== context || !support2.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rcssescape, fcssescape);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrim2, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key2, value) {
            if (keys.push(key2 + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key2 + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e2) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function addHandle(attrs, handler) {
          var arr3 = attrs.split("|"), i2 = arr3.length;
          while (i2--) {
            Expr.attrHandle[arr3[i2]] = handler;
          }
        }
        function siblingCheck(a, b) {
          var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
          if (diff) {
            return diff;
          }
          if (cur) {
            while (cur = cur.nextSibling) {
              if (cur === b) {
                return -1;
              }
            }
          }
          return a ? 1 : -1;
        }
        function createInputPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support2 = Sizzle2.support = {};
        isXML = Sizzle2.isXML = function(elem) {
          var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
        };
        setDocument = Sizzle2.setDocument = function(node) {
          var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          docElem = document3.documentElement;
          documentIsHTML = !isXML(document3);
          if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false);
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          }
          support2.scope = assert(function(el) {
            docElem.appendChild(el).appendChild(document3.createElement("div"));
            return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
          });
          support2.attributes = assert(function(el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          support2.getElementsByTagName = assert(function(el) {
            el.appendChild(document3.createComment(""));
            return !el.getElementsByTagName("*").length;
          });
          support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
          support2.getById = assert(function(el) {
            docElem.appendChild(el).id = expando;
            return !document3.getElementsByName || !document3.getElementsByName(expando).length;
          });
          if (support2.getById) {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else if (support2.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function(tag, context) {
            var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
            if (tag === "*") {
              while (elem = results[i2++]) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }
              return tmp;
            }
            return results;
          };
          Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyMatches = [];
          rbuggyQSA = [];
          if (support2.qsa = rnative.test(document3.querySelectorAll)) {
            assert(function(el) {
              var input;
              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
              }
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              el.querySelectorAll("\\\f");
              rbuggyQSA.push("[\\r\\n\\f]");
            });
            assert(function(el) {
              el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              }
              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              docElem.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }
          if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
            assert(function(el) {
              support2.disconnectedMatch = matches.call(el, "*");
              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          hasCompare = rnative.test(docElem.compareDocumentPosition);
          contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function(a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          };
          sortOrder = hasCompare ? function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }
              if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          } : function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
            if (!aup || !bup) {
              return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
            } else if (aup === bup) {
              return siblingCheck(a, b);
            }
            cur = a;
            while (cur = cur.parentNode) {
              ap.unshift(cur);
            }
            cur = b;
            while (cur = cur.parentNode) {
              bp.unshift(cur);
            }
            while (ap[i2] === bp[i2]) {
              i2++;
            }
            return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
          };
          return document3;
        };
        Sizzle2.matches = function(expr, elements) {
          return Sizzle2(expr, null, null, elements);
        };
        Sizzle2.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e2) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return Sizzle2(expr, document3, null, [elem]).length > 0;
        };
        Sizzle2.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return contains(context, elem);
        };
        Sizzle2.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle2.escape = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle2.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support2.detectDuplicates;
          sortInput = !support2.sortStable && results.slice(0);
          results.sort(sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              results.splice(duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        getText = Sizzle2.getText = function(elem) {
          var node, ret = "", i2 = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i2++]) {
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        };
        Expr = Sizzle2.selectors = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            "ATTR": function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            "CHILD": function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  Sizzle2.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                Sizzle2.error(match[0]);
              }
              return match;
            },
            "PSEUDO": function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            "TAG": function(nodeNameSelector) {
              var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
              };
            },
            "CLASS": function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            "ATTR": function(name, operator, check) {
              return function(elem) {
                var result = Sizzle2.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
              };
            },
            "CHILD": function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? function(elem) {
                return !!elem.parentNode;
              } : function(elem, _context, xml) {
                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            "PSEUDO": function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf2(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            "not": markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            "has": markFunction(function(selector) {
              return function(elem) {
                return Sizzle2(selector, elem).length > 0;
              };
            }),
            "contains": markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || getText(elem)).indexOf(text) > -1;
              };
            }),
            "lang": markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                Sizzle2.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            "target": function(elem) {
              var hash2 = window3.location && window3.location.hash;
              return hash2 && hash2.slice(1) === elem.id;
            },
            "root": function(elem) {
              return elem === docElem;
            },
            "focus": function(elem) {
              return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            "enabled": createDisabledPseudo(false),
            "disabled": createDisabledPseudo(true),
            "checked": function(elem) {
              var nodeName2 = elem.nodeName.toLowerCase();
              return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
            },
            "selected": function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            "empty": function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            "parent": function(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            "header": function(elem) {
              return rheader.test(elem.nodeName);
            },
            "input": function(elem) {
              return rinputs.test(elem.nodeName);
            },
            "button": function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            "text": function(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            "first": createPositionalPseudo(function() {
              return [0];
            }),
            "last": createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            "even": createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            "odd": createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rcombinators.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: match[0].replace(rtrim2, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base3) {
          var dir2 = combinator.dir, skip = combinator.next, key2 = skip || dir2, checkNonElements = base3 && key2 === "parentNode", doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
            return false;
          } : function(elem, context, xml) {
            var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir2] || elem;
                  } else if ((oldCache = uniqueCache[key2]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  } else {
                    uniqueCache[key2] = newCache;
                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            Sizzle2(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf2(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle2.compile = function(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            cached.selector = selector;
          }
          return cached;
        };
        select = Sizzle2.select = function(selector, context, results, seed) {
          var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find = Expr.find[type]) {
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        };
        support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support2.detectDuplicates = !!hasDuplicate;
        setDocument();
        support2.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        if (!assert(function(el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function(elem, name, isXML2) {
            if (!isXML2) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        }
        if (!support2.attributes || !assert(function(el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function(elem, _name, isXML2) {
            if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        }
        if (!assert(function(el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function(elem, name, isXML2) {
            var val;
            if (!isXML2) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }
        return Sizzle2;
      }(window2);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery.filter(qualifier, elements, not);
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init3 = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
        }
        return jQuery.makeArray(selector, this);
      };
      init3.prototype = jQuery.fn;
      rootjQuery = jQuery(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }
          return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve2, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve2).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve2, reject);
          } else {
            resolve2.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [
            [
              "notify",
              "progress",
              jQuery.Callbacks("memory"),
              jQuery.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve2(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(returned, resolve2(maxDepth, deferred2, Identity, special), resolve2(maxDepth, deferred2, Thrower, special));
                      } else {
                        maxDepth++;
                        then.call(returned, resolve2(maxDepth, deferred2, Identity, special), resolve2(maxDepth, deferred2, Thrower, special), resolve2(maxDepth, deferred2, Identity, deferred2.notifyWith));
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e2) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(e2, process.stackTrace);
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e2];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(resolve2(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve2(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve2(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error2, stack) {
        if (window2.console && window2.console.warn && error2 && rerrorNames.test(error2.name)) {
          window2.console.warn("jQuery.Deferred exception: " + error2.message, error2.stack, stack);
        }
      };
      jQuery.readyException = function(error2) {
        window2.setTimeout(function() {
          throw error2;
        });
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error2) {
          jQuery.readyException(error2);
        });
        return this;
      };
      jQuery.extend({
        isReady: false,
        readyWait: 1,
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key2, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key2 == null;
        if (toType(key2) === "object") {
          chainable = true;
          for (i in key2) {
            access(elems, fn, i, key2[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key2, raw ? value : value.call(elems[i], i, fn(elems[i], key2)));
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key2) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key2) {
          return key2 === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key2)];
        },
        access: function(owner, key2, value) {
          if (key2 === void 0 || key2 && typeof key2 === "string" && value === void 0) {
            return this.get(owner, key2);
          }
          this.set(owner, key2, value);
          return value !== void 0 ? value : key2;
        },
        remove: function(owner, key2) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key2 !== void 0) {
            if (Array.isArray(key2)) {
              key2 = key2.map(camelCase);
            } else {
              key2 = camelCase(key2);
              key2 = key2 in cache ? [key2] : key2.match(rnothtmlwhite) || [];
            }
            i = key2.length;
            while (i--) {
              delete cache[key2[i]];
            }
          }
          if (key2 === void 0 || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key2, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key2.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e2) {
            }
            dataUser.set(elem, key2, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key2, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key2 === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key2 === "object") {
            return this.each(function() {
              dataUser.set(this, key2);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key2);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key2);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key2, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key2) {
          return this.each(function() {
            dataUser.remove(this, key2);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
            jQuery.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        _queueHooks: function(elem, type) {
          var key2 = type + "queueHooks";
          return dataPriv.get(elem, key2) || dataPriv.access(elem, key2, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key2]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve2 = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve2);
            }
          }
          resolve2();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      }
      function safeActiveElement() {
        try {
          return document2.activeElement;
        } catch (err) {
        }
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e2) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e2.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            noBubble: true
          },
          click: {
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", returnTrue);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, expectSync2) {
        if (!expectSync2) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var notAsync, result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved.length) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                notAsync = expectSync2(this, type);
                this[type]();
                result = dataPriv.get(this, type);
                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result && result.value;
                }
              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved.length) {
              dataPriv.set(this, type, {
                value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
              });
              event.stopImmediatePropagation();
            }
          }
        });
      }
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e2 = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e2 && !this.isSimulated) {
            e2.preventDefault();
          }
        },
        stopPropagation: function() {
          var e2 = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e2 && !this.isSimulated) {
            e2.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e2 = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e2 && !this.isSimulated) {
            e2.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery.event.addProp);
      jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        jQuery.event.special[type] = {
          setup: function() {
            leverageNative(this, type, expectSync);
            return false;
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          _default: function() {
            return true;
          },
          delegateType
        };
      });
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e2) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width2, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width2 = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width2;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? ret + "" : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles2, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles2);
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles2);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles2);
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles2);
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles2);
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles2);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        }
        return delta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles2 = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles2) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles2), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles2) === "inline") && elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles2) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles2, val) + "px";
      }
      jQuery.extend({
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "gridArea": true,
          "gridColumn": true,
          "gridColumnEnd": true,
          "gridColumnStart": true,
          "gridRow": true,
          "gridRowEnd": true,
          "gridRowStart": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
        },
        cssProps: {},
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles2) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles2);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each(["height", "width"], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles2 = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles2.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles2) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles2) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles2[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles2) - 0.5);
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix2, suffix) {
        jQuery.cssHooks[prefix2 + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix2 + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix2 !== "margin") {
          jQuery.cssHooks[prefix2 + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles2, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles2 = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery.css(elem, name2[i], false, styles2);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery.fx.stop = function() {
        inProgress = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j2) {
              jQuery(this).addClass(value.call(this, j2, getClass(this)));
            });
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        removeClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j2) {
              jQuery(this).removeClass(value.call(this, j2, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          if (isFunction(value)) {
            return this.each(function(i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }
          return this.each(function() {
            var className, i, self, classNames;
            if (isValidValue) {
              i = 0;
              self = jQuery(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : stripAndCollapse(jQuery.text(elem));
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      support.focusin = "onfocusin" in window2;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
        e2.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        simulate: function(type, elem, event) {
          var e2 = jQuery.extend(new jQuery.Event(), event, {
            type,
            isSimulated: true
          });
          jQuery.event.trigger(e2, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
          var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e2) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix2, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix2)) {
              add(prefix2, v);
            } else {
              buildParams(prefix2 + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix2 + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix2, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix2, s2 = [], add = function(key2, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s2[s2.length] = encodeURIComponent(key2) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix2 in a) {
            buildParams(prefix2, a[prefix2], traditional, add);
          }
        }
        return s2.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key2, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key2 in src) {
          if (src[key2] !== void 0) {
            (flatOptions[key2] ? target : deep || (deep = {}))[key2] = src[key2];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s2, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s2.contents, dataTypes = s2.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s2, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s2.converters) {
            converters[conv.toLowerCase()] = s2.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s2.responseFields[current]) {
            jqXHR[s2.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s2.dataFilter) {
            response = s2.dataFilter(response, s2.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s2.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e2) {
                    return {
                      state: "parsererror",
                      error: conv ? e2 : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s2 = jQuery.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            getResponseHeader: function(key2) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key2.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s2.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s2.url = ((url || s2.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s2.type = options.method || options.type || s2.method || s2.type;
          s2.dataTypes = (s2.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s2.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s2.url;
              urlAnchor.href = urlAnchor.href;
              s2.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e2) {
              s2.crossDomain = true;
            }
          }
          if (s2.data && s2.processData && typeof s2.data !== "string") {
            s2.data = jQuery.param(s2.data, s2.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s2.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s2.type = s2.type.toUpperCase();
          s2.hasContent = !rnoContent.test(s2.type);
          cacheURL = s2.url.replace(rhash, "");
          if (!s2.hasContent) {
            uncached = s2.url.slice(cacheURL.length);
            if (s2.data && (s2.processData || typeof s2.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
              delete s2.data;
            }
            if (s2.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s2.url = cacheURL + uncached;
          } else if (s2.data && s2.processData && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s2.data = s2.data.replace(r20, "+");
          }
          if (s2.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s2.contentType);
          }
          jqXHR.setRequestHeader("Accept", s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]);
          for (i in s2.headers) {
            jqXHR.setRequestHeader(i, s2.headers[i]);
          }
          if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s2.complete);
          jqXHR.done(s2.success);
          jqXHR.fail(s2.error);
          transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s2.async && s2.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s2.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e2) {
              if (completed2) {
                throw e2;
              }
              done(-1, e2);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error2, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s2, jqXHR, responses);
            }
            if (!isSuccess && jQuery.inArray("script", s2.dataTypes) > -1 && jQuery.inArray("json", s2.dataTypes) < 0) {
              s2.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s2, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s2.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s2.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error2 = response.error;
                isSuccess = !error2;
              }
            } else {
              error2 = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error2]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s2, isSuccess ? success : error2]);
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery.ajax(jQuery.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function(s2) {
        var i;
        for (i in s2.headers) {
          if (i.toLowerCase() === "content-type") {
            s2.contentType = s2.headers[i] || "";
          }
        }
      });
      jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
          url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery.globalEval(response, options, doc);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e2) {
        }
      };
      var xhrSuccessStatus = {
        0: 200,
        1223: 204
      }, xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e2) {
                if (callback) {
                  throw e2;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s2) {
        if (s2.crossDomain) {
          s2.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s2) {
        if (s2.cache === void 0) {
          s2.cache = false;
        }
        if (s2.crossDomain) {
          s2.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s2) {
        if (s2.crossDomain || s2.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").attr(s2.scriptAttrs || {}).prop({ charset: s2.scriptCharset, src: s2.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
        if (jsonProp || s2.dataTypes[0] === "jsonp") {
          callbackName = s2.jsonpCallback = isFunction(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
          if (jsonProp) {
            s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s2.jsonp !== false) {
            s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
          }
          s2.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s2.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s2[callbackName]) {
              s2.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base3, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base3 = context.createElement("base");
            base3.href = document2.location.href;
            context.head.appendChild(base3);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery.ajax({
            url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = prop === "pageYOffset";
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        });
      });
      jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }
              return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        jQuery.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;
      jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
      };
      jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery.noConflict = function(deep) {
        if (window2.$ === jQuery) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery) {
          window2.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery;
      }
      return jQuery;
    });
  }
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes
});
function getChance(chance, rng = getRandom16) {
  return (rng() & chance) === 0;
}
function getERandom(max, rng) {
  const firstCandidate = rng(max);
  const secondCandidate = rng(max);
  return Math.min(firstCandidate, secondCandidate);
}
function getRandom(max, mathGlobal = Math) {
  return mathGlobal.floor(mathGlobal.random() * (max + 1));
}
function getRandom16(rng = getRandom) {
  return rng(65535);
}
function getRandom16Signed(rng = getRandom16) {
  const value = rng();
  if (value < 32768) {
    return value;
  } else {
    return -(2 ** 16) + value;
  }
}
function WorldEffects(map) {
  this._map = map;
  this._data = {};
}
function directionIndex(direction) {
  return allDirections.indexOf(direction);
}
function forEachCardinalDirection(callback) {
  cardinalDirections.forEach((dir) => callback(dir));
}
function getDeltaFor(direction) {
  switch (direction) {
    case NORTH:
      return new DirectionDelta(0, -1);
    case NORTHEAST:
      return new DirectionDelta(1, -1);
    case EAST:
      return new DirectionDelta(1, 0);
    case SOUTHEAST:
      return new DirectionDelta(1, 1);
    case SOUTH:
      return new DirectionDelta(0, 1);
    case SOUTHWEST:
      return new DirectionDelta(-1, 1);
    case WEST$1:
      return new DirectionDelta(-1, 0);
    case NORTHWEST:
      return new DirectionDelta(-1, -1);
    default:
      throw new Error(`Unexpected direction!`);
  }
}
function Traffic(map, spriteManager) {
  this._map = map;
  this._stack = [];
  this._spriteManager = spriteManager;
}
function Census() {
  this.clearCensus();
  this.changed = false;
  this.crimeRamp = 0;
  this.pollutionRamp = 0;
  this.landValueAverage = 0;
  this.pollutionAverage = 0;
  this.crimeAverage = 0;
  this.totalPop = 0;
  var createArray = function(arrName) {
    this[arrName] = [];
    for (var a = 0; a < 120; a++)
      this[arrName][a] = 0;
  };
  for (var i = 0; i < arrs.length; i++) {
    var name10 = arrs[i] + "Hist10";
    var name120 = arrs[i] + "Hist120";
    createArray.call(this, name10);
    createArray.call(this, name120);
  }
}
function MapScanner(map) {
  this._map = map;
  this._actions = [];
}
function RepairManager(map) {
  this._map = map;
  this._actions = [];
}
function AirplaneSprite(map, spriteManager, x, y) {
  this.init(SPRITE_AIRPLANE, map, spriteManager, x, y);
  this.width = 48;
  this.height = 48;
  this.xOffset = -24;
  this.yOffset = -24;
  if (x > SpriteUtils.worldToPix(map.width - 20)) {
    this.destX = this.x - 200;
    this.frame = 7;
  } else {
    this.destX = this.x + 200;
    this.frame = 11;
  }
  this.destY = this.y;
}
function BoatSprite(map, spriteManager, x, y) {
  this.init(SPRITE_SHIP, map, spriteManager, x, y);
  this.width = 48;
  this.height = 48;
  this.xOffset = -24;
  this.yOffset = -24;
  if (x < SpriteUtils.worldToPix(4))
    this.frame = 3;
  else if (x >= SpriteUtils.worldToPix(map.width - 4))
    this.frame = 7;
  else if (y < SpriteUtils.worldToPix(4))
    this.frame = 5;
  else if (y >= SpriteUtils.worldToPix(map.height - 4))
    this.frame = 1;
  else
    this.frame = 3;
  this.newDir = this.frame;
  this.dir = 10;
  this.count = 1;
}
function CopterSprite(map, spriteManager, x, y) {
  this.init(SPRITE_HELICOPTER, map, spriteManager, x, y);
  this.width = 32;
  this.height = 32;
  this.xOffset = -16;
  this.yOffset = -16;
  this.frame = 5;
  this.count = 1500;
  this.destX = Random.getRandom(SpriteUtils.worldToPix(map.width)) + 8;
  this.destY = Random.getRandom(SpriteUtils.worldToPix(map.height)) + 8;
  this.origX = x;
  this.origY = y;
}
function ExplosionSprite(map, spriteManager, x, y) {
  this.init(SPRITE_EXPLOSION, map, spriteManager, x, y);
  this.width = 48;
  this.height = 48;
  this.xOffset = -24;
  this.yOffset = -24;
  this.frame = 1;
}
function MonsterSprite(map, spriteManager, x, y) {
  this.init(SPRITE_MONSTER, map, spriteManager, x, y);
  this.width = 48;
  this.height = 48;
  this.xOffset = -24;
  this.yOffset = -24;
  if (x > SpriteUtils.worldToPix(map.width) / 2) {
    if (y > SpriteUtils.worldToPix(map.height) / 2)
      this.frame = 10;
    else
      this.frame = 7;
  } else if (y > SpriteUtils.worldToPix(map.height) / 2) {
    this.frame = 1;
  } else {
    this.frame = 4;
  }
  this.flag = 0;
  this.count = 1e3;
  this.destX = SpriteUtils.worldToPix(map.pollutionMaxX);
  this.destY = SpriteUtils.worldToPix(map.pollutionMaxY);
  this.origX = this.x;
  this.origY = this.y;
  this._seenLand = false;
}
function TornadoSprite(map, spriteManager, x, y) {
  this.init(SpriteConstants.SPRITE_TORNADO, map, spriteManager, x, y);
  this.width = 48;
  this.height = 48;
  this.xOffset = -24;
  this.yOffset = -40;
  this.frame = 1;
  this.count = 200;
}
function TrainSprite(map, spriteManager, x, y) {
  this.init(SPRITE_TRAIN, map, spriteManager, x, y);
  this.width = 32;
  this.height = 32;
  this.xOffset = -16;
  this.yOffset = -16;
  this.frame = 1;
  this.dir = 4;
}
function TileHistory() {
  this.clear();
}
function AnimationManager(map, animationPeriod, blinkPeriod) {
  animationPeriod = animationPeriod || 50;
  blinkPeriod = blinkPeriod || 500;
  this._map = map;
  this.animationPeriod = animationPeriod;
  this.lastAnimation = new Date(1970, 1, 1);
  this.lastBlink = new Date(1970, 1, 1);
  this.blinkPeriod = blinkPeriod;
  this.shouldBlink = false;
  this._lastPainted = null;
  this._currentPainted = null;
  this._data = [];
  this.initArray();
  this.registerAnimations();
}
function GameCanvas(id, parentNode) {
  if (!(this instanceof GameCanvas))
    return new GameCanvas(id, parentNode, width, height);
  if (arguments.length < 1)
    throw new Error("Attempt to construct a GameCanvas with no parameters");
  if (parentNode === void 0) {
    parentNode = id;
    id = GameCanvas.DEFAULT_ID;
  }
  if (typeof parentNode === "string") {
    var orig = parentNode;
    parentNode = jq$a(MiscUtils.normaliseDOMid(parentNode));
    parentNode = parentNode.length === 0 ? null : parentNode[0];
    if (parentNode === null)
      throw new Error("Node " + orig + " not found");
  }
  this._canvas = document.createElement("canvas");
  this._canvas.id = id;
  var rect = parentNode.getBoundingClientRect();
  this._canvas.width = rect.width;
  this._canvas.height = rect.height;
  this._canvas.style.margin = "0";
  this._canvas.style.padding = "0";
  this._pendingTileSet = null;
  var current = document.getElementById(id);
  if (current !== null) {
    if (current.parentNode === parentNode)
      parentNode.replaceChild(this._canvas, current);
    else
      throw new Error("ID " + id + " already exists in document!");
  } else
    parentNode.appendChild(this._canvas);
  this.ready = false;
}
function GameTools(map) {
  var tools = EventEmitter({
    airport: new BuildingTool(1e4, AIRPORT, map, 6, false),
    bulldozer: new BulldozerTool(map),
    coal: new BuildingTool(3e3, POWERPLANT, map, 4, false),
    commercial: new BuildingTool(100, COMCLR, map, 3, false),
    fire: new BuildingTool(500, FIRESTATION, map, 3, false),
    industrial: new BuildingTool(100, INDCLR, map, 3, false),
    nuclear: new BuildingTool(5e3, NUCLEAR, map, 4, true),
    park: new ParkTool(map),
    police: new BuildingTool(500, POLICESTATION, map, 3, false),
    port: new BuildingTool(3e3, PORT, map, 4, false),
    rail: new RailTool(map),
    residential: new BuildingTool(100, FREEZ, map, 3, false),
    road: new RoadTool(map),
    query: new QueryTool(map),
    stadium: new BuildingTool(5e3, STADIUM, map, 4, false),
    wire: new WireTool(map)
  });
  tools.query.addEventListener(QUERY_WINDOW_NEEDED, MiscUtils.reflectEvent.bind(tools, QUERY_WINDOW_NEEDED));
  return tools;
}
function RCI(parentNode, eventSource, id) {
  if (arguments.length < 2)
    throw new Error("RCI constructor called with too few arguments " + [].toString.apply(arguments));
  if (id === void 0)
    id = RCI.DEFAULT_ID;
  if (typeof parentNode === "string") {
    var orig = parentNode;
    parentNode = jq$5(MiscUtils.normaliseDOMid(parentNode));
    parentNode = parentNode.length === 0 ? null : parentNode[0];
    if (parentNode === null)
      throw new Error("Node " + orig + " not found");
  }
  this._padding = 3;
  this._buckets = 10;
  this._rectSize = 4;
  this._scale = Math.floor(2e3 / this._buckets);
  this._canvas = jq$5("<canvas></canvas>", { id })[0];
  var elems = jq$5(MiscUtils.normaliseDOMid(id));
  var current = elems.length > 0 ? elems[0] : null;
  if (current !== null) {
    if (current.parentNode === parentNode)
      parentNode.replaceChild(this._canvas, current);
    else
      throw new Error("ID " + id + " already exists in document!");
  } else
    parentNode.appendChild(this._canvas);
  this._initialisedBounds = false;
  eventSource.addEventListener(VALVES_UPDATED, this.update.bind(this));
}
var jqueryProxy, AUTOBUDGET_CHANGED, BUDGET_NEEDED, BUDGET_REQUESTED, BUDGET_WINDOW_CLOSED, BLACKOUTS_REPORTED, CLASSIFICATION_UPDATED, CONGRATS_SHOWING, CONGRATS_WINDOW_CLOSED, DATE_UPDATED, DEBUG_WINDOW_REQUESTED, DEBUG_WINDOW_CLOSED, DISASTER_REQUESTED, DISASTER_WINDOW_CLOSED, EARTHQUAKE, EVAL_REQUESTED, EVAL_UPDATED, EVAL_WINDOW_CLOSED, EXPLOSION_REPORTED, FIRE_REPORTED, FIRE_STATION_NEEDS_FUNDING, FLOODING_REPORTED, FRONT_END_MESSAGE, FUNDS_CHANGED, HEAVY_TRAFFIC, HELICOPTER_CRASHED, HIGH_CRIME, HIGH_POLLUTION, MONSTER_SIGHTED, NAG_WINDOW_CLOSED, NEED_AIRPORT, NEED_ELECTRICITY, NEED_FIRE_STATION, NEED_MORE_COMMERCIAL, NEED_MORE_INDUSTRIAL, NEED_MORE_RAILS, NEED_MORE_RESIDENTIAL, NEED_MORE_ROADS, NEED_POLICE_STATION, NEED_SEAPORT, NEED_STADIUM, NO_MONEY, NOT_ENOUGH_POWER, NUCLEAR_MELTDOWN, PLANE_CRASHED, POLICE_NEEDS_FUNDING, POPULATION_UPDATED, QUERY_WINDOW_CLOSED, QUERY_WINDOW_NEEDED, REACHED_CAPITAL, REACHED_CITY, REACHED_METROPOLIS, REACHED_MEGALOPOLIS, REACHED_TOWN, REACHED_VILLAGE, ROAD_NEEDS_FUNDING, SAVE_REQUESTED, SAVE_WINDOW_CLOSED, SCORE_UPDATED, SCREENSHOT_LINK_CLOSED, SCREENSHOT_WINDOW_CLOSED, SCREENSHOT_WINDOW_REQUESTED, SETTINGS_WINDOW_CLOSED, SETTINGS_WINDOW_REQUESTED, SHIP_CRASHED, SOUND_EXPLOSIONHIGH, SOUND_EXPLOSIONLOW, SOUND_HEAVY_TRAFFIC, SOUND_HONKHONK, SOUND_MONSTER, SPEED_CHANGE, SPRITE_DYING, SPRITE_MOVED, TAX_TOO_HIGH, TOOL_CLICKED, TORNADO_SIGHTED, TOUCH_WINDOW_CLOSED, TRAFFIC_JAMS, TRAIN_CRASHED, VALVES_UPDATED, WELCOME, DISASTER_MESSAGES, CRASHES, Messages, clamp, makeConstantDescriptor, normaliseDOMid, reflectEvent, MiscUtils, Random, NOFLAGS, POWERBIT, CONDBIT, BURNBIT, BULLBIT, ANIMBIT, ZONEBIT, BLBNCNBIT, BNCNBIT, ASCBIT, ALLBITS, BIT_START, BIT_MASK, DIRT, RIVER, REDGE, CHANNEL, FIRSTRIVEDGE, LASTRIVEDGE, WATER_HIGH, TREEBASE, WOODS2, WOODS5, RUBBLE, LASTRUBBLE, FLOOD, LASTFLOOD, RADTILE, FIRE, FIREBASE, HBRIDGE, ROADBASE, VBRIDGE, ROADS, ROADS2, ROADS3, ROADS4, ROADS5, ROADS6, ROADS7, ROADS8, ROADS9, ROADS10, INTERSECTION, HROADPOWER, VROADPOWER, BRWH, LTRFBASE, BRWV, HTRFBASE, LASTROAD, HPOWER, VPOWER, LHPOWER, LVPOWER, LVPOWER2, LVPOWER3, LVPOWER4, LVPOWER5, LVPOWER6, LVPOWER7, LVPOWER8, LVPOWER9, LVPOWER10, RAILHPOWERV, RAILVPOWERH, POWERBASE, HRAIL, VRAIL, LHRAIL, LVRAIL, LVRAIL2, LVRAIL3, LVRAIL4, LVRAIL5, LVRAIL6, LVRAIL7, LVRAIL8, LVRAIL9, LVRAIL10, HRAILROAD, VRAILROAD, RAILBASE, LASTRAIL, RESBASE, FREEZ, HOUSE, LHTHR, HHTHR, RZB, HOSPITALBASE, HOSPITAL, COMBASE, COMCLR, CZB, INDBASE, INDCLR, LASTIND, IZB, PORTBASE, PORT, LASTPORT, AIRPORTBASE, RADAR, AIRPORT, COALBASE, POWERPLANT, LASTPOWERPLANT, FIRESTBASE, FIRESTATION, POLICESTBASE, POLICESTATION, STADIUMBASE, STADIUM, FULLSTADIUM, NUCLEARBASE, NUCLEAR, LASTZONE, LIGHTNINGBOLT, HBRDG0, HBRDG1, HBRDG2, HBRDG3, RADAR0, FOUNTAIN, INDBASE2, TINYEXP, LASTTINYEXP, COALSMOKE1, COALSMOKE3, FOOTBALLGAME1, FOOTBALLGAME2, VBRDG0, VBRDG1, VBRDG2, VBRDG3, CHURCH1BASE, CHURCH7LAST, TILE_COUNT, TILE_INVALID, Tile, unwrapTile, canBulldoze, isCommercial, isCommercialZone, isDriveable, isFire, isFlood, isIndustrial, isIndustrialZone, isManualExplosion, isRail, isResidential, isResidentialZone, isRoad, normalizeRoad, randomFire, randomRubble, TileUtils, toKey$1, fromKey, init$1, clear, addCost, doAutoBulldoze, apply, modifyIfEnoughFunding, TOOLRESULT_OK, TOOLRESULT_FAILED, TOOLRESULT_NO_MONEY, TOOLRESULT_NEEDS_BULLDOZE, BaseToolConstructor, save, load2, makeTool$3, BaseTool, EventEmitter, jq$g, ModalWindow, jq$f, BudgetWindow, dataKeys, spendKeys, budgetResetID, budgetCancelID, budgetFormID, setSpendRangeText, onFundingUpdate, onTaxUpdate, resetItems, cancel$4, submit$b, jq$e, CongratsWindow, congratsFormID, congratsMessageID, congratsOKID, submit$a, jq$d, DebugWindow, debugCancelID, debugFormID, cancel$3, submit$9, defineAction$2, jq$c, disasterSelectID, disasterCancelID, disasterFormID, DisasterWindow, cancel$2, submit$8, PROBLEMS, NUMPROBLEMS, NUM_COMPLAINTS, problemData, Evaluation, saveProps$3, getTrafficAverage, getUnemployment, getFireSeverity, ID, BlockMap, DirectionValue, NORTH, NORTHEAST, EAST, SOUTHEAST, SOUTH, SOUTHWEST, WEST$1, NORTHWEST, allDirections, cardinalDirections, DirectionDelta, Position, SPRITE_TRAIN, SPRITE_HELICOPTER, SPRITE_AIRPLANE, SPRITE_SHIP, SPRITE_MONSTER, SPRITE_TORNADO, SPRITE_EXPLOSION, SpriteConstants, checkBigZone, checkZoneSize, fireZone, getLandPollutionValue, incRateOfGrowth, putZone, ZoneUtils, pixToWorld, worldToPix, turnTo, getTileValue, directionTable, getDir, absoluteDistance, checkWet, destroyMapTile, getDistance, checkSpriteCollision, SpriteUtils, perimX, perimY, MAX_TRAFFIC_DISTANCE, getZonePopulation$2, placeCommercial, growZone$2, degradeZone$2, commercialFound, Commercial, getZonePopulation$1, placeIndustrial, growZone$1, degradeZone$1, animated, xDelta$7, yDelta$7, setAnimation, industrialFound, Industrial, placeResidential, getFreeZonePopulation, getZonePopulation, evalLot, buildHouse, growZone, freeZone, degradeZone, evalResidential, residentialFound, makeHospital, hospitalFound, Residential, SMOOTH_NEIGHBOURS_THEN_BLOCK, SMOOTH_ALL_THEN_CLAMP, smoothMap, neutraliseRateOfGrowthMap, neutraliseTrafficMap, getPollutionValue, getCityCentreDistance, pollutionTerrainLandValueScan, crimeScan, fillCityCentreDistScoreMap, getPopulationDensity, populationDensityScan, fireAnalysis, BlockMapUtils, policeMaintenanceCost, fireMaintenanceCost, roadMaintenanceCost, railMaintenanceCost, Budget, saveProps$2, RLevels, FLevels, arrs, rotate10Arrays, rotate120Arrays, saveProps$1, DisasterManager, DisChance, vulnerable, Dx, Dy, handleService, policeStationFound, fireStationFound, EmergencyServices, tile$1, isCallable$1, xDelta$6, yDelta$6, fireFound, radiationFound, floodFound, MiscTiles, COAL_POWER_STRENGTH, NUCLEAR_POWER_STRENGTH, PowerManager, meltdownTable, isCallable, openBridge, closeBridge, verticalDeltaX, verticalDeltaY, openVertical, closeVertical, horizontalDeltaX, horizontalDeltaY, openHorizontal, closeHorizontal, doBridge, densityTable, roadFound, Road, init2, getFileName, spriteNotInBounds, base2, BaseSprite, xDelta$5, yDelta$5, oppositeAndUnderwater, tileDeltaX$1, tileDeltaY$1, xDelta$4, yDelta$4, tileWhiteList, CANTMOVE$1, xDelta$3, yDelta$3, xDelta$2, yDelta$2, cardinals1, cardinals2, diagonals1, diagonals2, xDelta$1, yDelta$1, tileDeltaX, tileDeltaY, xDelta, yDelta, TrainPic2, NWSE, NESW, UNDERWATER, WEST, CANTMOVE, SpriteManager, constructors, emptyStadiumFound, fullStadiumFound, Stadia, railFound, airportFound, portFound, Transport, Valves, RES_VALVE_RANGE, COM_VALVE_RANGE, IND_VALVE_RANGE, taxTable, extMarketParamTable, Simulation, saveProps, speedPowerScan, speedPollutionTerrainLandValueScan, speedCrimeScan, speedPopulationDensityScan, speedFireAnalysis, CENSUS_FREQUENCY_10, CENSUS_FREQUENCY_120, TAX_FREQUENCY, simulate, densityStrings, landValueStrings, crimeStrings, pollutionStrings, rateStrings, zoneTypes, gameLevel, cityClass, problems, months, toolMessages, neutralMessages, badMessages, goodMessages, messageText, Text, jq$b, EvaluationWindow, evaluationFormID, submit$7, toKey, MouseBox, jq$a, RoadTable, RailTable, WireTable, fixSingle, checkZoneConnections, checkBorder, Connector, makeTool$2, ConnectingTool, BuildingTool, BulldozerTool, makeTool$1, ParkTool, RailTool, RoadTool, jq$9, makeTool, QueryTool, WireTool, jq$8, InputStatus, canvasID, toolOutputID, keyDownHandler, keyUpHandler, getRelativeCoordinates, mouseEnterHandler, mouseDownHandler, mouseUpHandler, mouseLeaveHandler, mouseMoveHandler, canvasClickHandler, toolButtonHandler, makeHandler, budgetHandler, debugHandler, disasterHandler, evalHandler, screenshotHandler, settingsHandler, saveHandler, jq$7, NagWindow, nagFormID, nagOKID, submit$6, jq$6, QueryWindow, queryFormID, queryOKID, submit$5, jq$5, jq$4, SaveWindow, saveFormID, saveOKID, submit$4, jq$3, ScreenshotLinkWindow, screenshotLinkFormID, screenshotLinkID, submit$3, jq$2, ScreenshotWindow, screenshotCancelID, screenshotFormID, cancel$1, submit$2, defineAction$1, jq$1, SettingsWindow, settingsCancelID, settingsFormID, autoBudgetYesID, autoBudgetNoID, autoBulldozeYesID, autoBulldozeNoID, speedSlowID, speedMedID, speedFastID, disastersYesID, disastersNoID, cancel, submit$1, defineAction, jq, TouchWarnWindow, touchFormID, touchOKID, submit, Routes;
var init_index_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
    init_index_5f038599();
    jqueryProxy = __toESM(require_jquery(), 1);
    AUTOBUDGET_CHANGED = "Autobudget changed";
    BUDGET_NEEDED = "User needs to budget";
    BUDGET_REQUESTED = "Budget window requested";
    BUDGET_WINDOW_CLOSED = "Budget window closed";
    BLACKOUTS_REPORTED = "Blackouts reported";
    CLASSIFICATION_UPDATED = "Classification updated";
    CONGRATS_SHOWING = "Congratulations showing";
    CONGRATS_WINDOW_CLOSED = "Congratulations window closed";
    DATE_UPDATED = "Date changed";
    DEBUG_WINDOW_REQUESTED = "Debug Window Requested";
    DEBUG_WINDOW_CLOSED = "Debug Window Closed";
    DISASTER_REQUESTED = "Disaster Requested";
    DISASTER_WINDOW_CLOSED = "Disaster window closed";
    EARTHQUAKE = "Earthquake";
    EVAL_REQUESTED = "Evaluation Requested";
    EVAL_UPDATED = "Evaluation Updated";
    EVAL_WINDOW_CLOSED = "Eval window closed";
    EXPLOSION_REPORTED = "Explosion Reported";
    FIRE_REPORTED = "Fire!";
    FIRE_STATION_NEEDS_FUNDING = "Fire station needs funding";
    FLOODING_REPORTED = "Flooding reported";
    FRONT_END_MESSAGE = "Front-end Message";
    FUNDS_CHANGED = "Total funds has changed";
    HEAVY_TRAFFIC = "Total funds has changed";
    HELICOPTER_CRASHED = "Helicopter crashed";
    HIGH_CRIME = "High crime";
    HIGH_POLLUTION = "High pollution";
    MONSTER_SIGHTED = "Monster sighted";
    NAG_WINDOW_CLOSED = "Nag window closed";
    NEED_AIRPORT = "Airport needed";
    NEED_ELECTRICITY = "More power needed";
    NEED_FIRE_STATION = "Fire station needed";
    NEED_MORE_COMMERCIAL = "More commercial zones needed";
    NEED_MORE_INDUSTRIAL = "More industrial zones needed";
    NEED_MORE_RAILS = "More railways needed";
    NEED_MORE_RESIDENTIAL = "More residential needed";
    NEED_MORE_ROADS = "More roads needed";
    NEED_POLICE_STATION = "Police station needed";
    NEED_SEAPORT = "Seaport needed";
    NEED_STADIUM = "Stadium needed";
    NO_MONEY = "No money";
    NOT_ENOUGH_POWER = "Not enough power";
    NUCLEAR_MELTDOWN = "Nuclear Meltdown";
    PLANE_CRASHED = "Plane crashed";
    POLICE_NEEDS_FUNDING = "Police need funding";
    POPULATION_UPDATED = "Population updated";
    QUERY_WINDOW_CLOSED = "Query window closed";
    QUERY_WINDOW_NEEDED = "Query window needed";
    REACHED_CAPITAL = "Now a capital";
    REACHED_CITY = "Now a city";
    REACHED_METROPOLIS = "Now a metropolis";
    REACHED_MEGALOPOLIS = "Now a megalopolis";
    REACHED_TOWN = "Now a town";
    REACHED_VILLAGE = "Now a village";
    ROAD_NEEDS_FUNDING = "Roads need funding";
    SAVE_REQUESTED = "Save requested";
    SAVE_WINDOW_CLOSED = "Save window closed";
    SCORE_UPDATED = "Scoe updated";
    SCREENSHOT_LINK_CLOSED = "Screenshot link closed";
    SCREENSHOT_WINDOW_CLOSED = "Screenshot window closed";
    SCREENSHOT_WINDOW_REQUESTED = "Screenshot window requested";
    SETTINGS_WINDOW_CLOSED = "Settings window closed";
    SETTINGS_WINDOW_REQUESTED = "Settings window requested";
    SHIP_CRASHED = "Shipwrecked";
    SOUND_EXPLOSIONHIGH = "Explosion! Bang!";
    SOUND_EXPLOSIONLOW = "Explosion! Bang!";
    SOUND_HEAVY_TRAFFIC = "Heavy Traffic sound";
    SOUND_HONKHONK = "HonkHonk sound";
    SOUND_MONSTER = "Monster sound";
    SPEED_CHANGE = "Speed change";
    SPRITE_DYING = "Sprite dying";
    SPRITE_MOVED = "Sprite move";
    TAX_TOO_HIGH = "Tax too high";
    TOOL_CLICKED = "Tool clicked";
    TORNADO_SIGHTED = "Tornado sighted";
    TOUCH_WINDOW_CLOSED = "Touch Window closed";
    TRAFFIC_JAMS = "Traffic jams reported";
    TRAIN_CRASHED = "Train crashed";
    VALVES_UPDATED = "Valves updated";
    WELCOME = "Welcome to micropolisJS";
    DISASTER_MESSAGES = [
      EARTHQUAKE,
      EXPLOSION_REPORTED,
      FIRE_REPORTED,
      FLOODING_REPORTED,
      MONSTER_SIGHTED,
      NUCLEAR_MELTDOWN,
      TORNADO_SIGHTED
    ];
    CRASHES = [
      HELICOPTER_CRASHED,
      PLANE_CRASHED,
      SHIP_CRASHED,
      TRAIN_CRASHED
    ];
    Messages = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      AUTOBUDGET_CHANGED,
      BUDGET_NEEDED,
      BUDGET_REQUESTED,
      BUDGET_WINDOW_CLOSED,
      BLACKOUTS_REPORTED,
      CLASSIFICATION_UPDATED,
      CONGRATS_SHOWING,
      CONGRATS_WINDOW_CLOSED,
      DATE_UPDATED,
      DEBUG_WINDOW_REQUESTED,
      DEBUG_WINDOW_CLOSED,
      DISASTER_REQUESTED,
      DISASTER_WINDOW_CLOSED,
      EARTHQUAKE,
      EVAL_REQUESTED,
      EVAL_UPDATED,
      EVAL_WINDOW_CLOSED,
      EXPLOSION_REPORTED,
      FIRE_REPORTED,
      FIRE_STATION_NEEDS_FUNDING,
      FLOODING_REPORTED,
      FRONT_END_MESSAGE,
      FUNDS_CHANGED,
      HEAVY_TRAFFIC,
      HELICOPTER_CRASHED,
      HIGH_CRIME,
      HIGH_POLLUTION,
      MONSTER_SIGHTED,
      NAG_WINDOW_CLOSED,
      NEED_AIRPORT,
      NEED_ELECTRICITY,
      NEED_FIRE_STATION,
      NEED_MORE_COMMERCIAL,
      NEED_MORE_INDUSTRIAL,
      NEED_MORE_RAILS,
      NEED_MORE_RESIDENTIAL,
      NEED_MORE_ROADS,
      NEED_POLICE_STATION,
      NEED_SEAPORT,
      NEED_STADIUM,
      NO_MONEY,
      NOT_ENOUGH_POWER,
      NUCLEAR_MELTDOWN,
      PLANE_CRASHED,
      POLICE_NEEDS_FUNDING,
      POPULATION_UPDATED,
      QUERY_WINDOW_CLOSED,
      QUERY_WINDOW_NEEDED,
      REACHED_CAPITAL,
      REACHED_CITY,
      REACHED_METROPOLIS,
      REACHED_MEGALOPOLIS,
      REACHED_TOWN,
      REACHED_VILLAGE,
      ROAD_NEEDS_FUNDING,
      SAVE_REQUESTED,
      SAVE_WINDOW_CLOSED,
      SCORE_UPDATED,
      SCREENSHOT_LINK_CLOSED,
      SCREENSHOT_WINDOW_CLOSED,
      SCREENSHOT_WINDOW_REQUESTED,
      SETTINGS_WINDOW_CLOSED,
      SETTINGS_WINDOW_REQUESTED,
      SHIP_CRASHED,
      SOUND_EXPLOSIONHIGH,
      SOUND_EXPLOSIONLOW,
      SOUND_HEAVY_TRAFFIC,
      SOUND_HONKHONK,
      SOUND_MONSTER,
      SPEED_CHANGE,
      SPRITE_DYING,
      SPRITE_MOVED,
      TAX_TOO_HIGH,
      TOOL_CLICKED,
      TORNADO_SIGHTED,
      TOUCH_WINDOW_CLOSED,
      TRAFFIC_JAMS,
      TRAIN_CRASHED,
      VALVES_UPDATED,
      WELCOME,
      DISASTER_MESSAGES,
      CRASHES
    }, Symbol.toStringTag, { value: "Module" }));
    clamp = function(value, min, max) {
      if (value < min)
        return min;
      if (value > max)
        return max;
      return value;
    };
    makeConstantDescriptor = function(value) {
      return {
        configurable: false,
        enumerable: false,
        writeable: false,
        value
      };
    };
    normaliseDOMid = function(id) {
      return (id[0] !== "#" ? "#" : "") + id;
    };
    reflectEvent = function(message, value) {
      this._emitEvent(message, value);
    };
    MiscUtils = {
      clamp,
      makeConstantDescriptor,
      normaliseDOMid,
      reflectEvent
    };
    Random = {
      getChance,
      getERandom,
      getRandom,
      getRandom16,
      getRandom16Signed
    };
    NOFLAGS = 0;
    POWERBIT = 32768;
    CONDBIT = 16384;
    BURNBIT = 8192;
    BULLBIT = 4096;
    ANIMBIT = 2048;
    ZONEBIT = 1024;
    BLBNCNBIT = BULLBIT | BURNBIT | CONDBIT;
    BNCNBIT = BURNBIT | CONDBIT;
    ASCBIT = ANIMBIT | CONDBIT | BURNBIT;
    ALLBITS = POWERBIT | CONDBIT | BURNBIT | BULLBIT | ANIMBIT | ZONEBIT;
    BIT_START = 1024;
    BIT_MASK = BIT_START - 1;
    DIRT = 0;
    RIVER = 2;
    REDGE = 3;
    CHANNEL = 4;
    FIRSTRIVEDGE = 5;
    LASTRIVEDGE = 20;
    WATER_HIGH = LASTRIVEDGE;
    TREEBASE = 21;
    WOODS2 = 40;
    WOODS5 = 43;
    RUBBLE = 44;
    LASTRUBBLE = 47;
    FLOOD = 48;
    LASTFLOOD = 51;
    RADTILE = 52;
    FIRE = 56;
    FIREBASE = FIRE;
    HBRIDGE = 64;
    ROADBASE = HBRIDGE;
    VBRIDGE = 65;
    ROADS = 66;
    ROADS2 = 67;
    ROADS3 = 68;
    ROADS4 = 69;
    ROADS5 = 70;
    ROADS6 = 71;
    ROADS7 = 72;
    ROADS8 = 73;
    ROADS9 = 74;
    ROADS10 = 75;
    INTERSECTION = 76;
    HROADPOWER = 77;
    VROADPOWER = 78;
    BRWH = 79;
    LTRFBASE = 80;
    BRWV = 95;
    HTRFBASE = 144;
    LASTROAD = 206;
    HPOWER = 208;
    VPOWER = 209;
    LHPOWER = 210;
    LVPOWER = 211;
    LVPOWER2 = 212;
    LVPOWER3 = 213;
    LVPOWER4 = 214;
    LVPOWER5 = 215;
    LVPOWER6 = 216;
    LVPOWER7 = 217;
    LVPOWER8 = 218;
    LVPOWER9 = 219;
    LVPOWER10 = 220;
    RAILHPOWERV = 221;
    RAILVPOWERH = 222;
    POWERBASE = HPOWER;
    HRAIL = 224;
    VRAIL = 225;
    LHRAIL = 226;
    LVRAIL = 227;
    LVRAIL2 = 228;
    LVRAIL3 = 229;
    LVRAIL4 = 230;
    LVRAIL5 = 231;
    LVRAIL6 = 232;
    LVRAIL7 = 233;
    LVRAIL8 = 234;
    LVRAIL9 = 235;
    LVRAIL10 = 236;
    HRAILROAD = 237;
    VRAILROAD = 238;
    RAILBASE = HRAIL;
    LASTRAIL = 238;
    RESBASE = 240;
    FREEZ = 244;
    HOUSE = 249;
    LHTHR = HOUSE;
    HHTHR = 260;
    RZB = 265;
    HOSPITALBASE = 405;
    HOSPITAL = 409;
    COMBASE = 423;
    COMCLR = 427;
    CZB = 436;
    INDBASE = 612;
    INDCLR = 616;
    LASTIND = 620;
    IZB = 625;
    PORTBASE = 693;
    PORT = 698;
    LASTPORT = 708;
    AIRPORTBASE = 709;
    RADAR = 711;
    AIRPORT = 716;
    COALBASE = 745;
    POWERPLANT = 750;
    LASTPOWERPLANT = 760;
    FIRESTBASE = 761;
    FIRESTATION = 765;
    POLICESTBASE = 770;
    POLICESTATION = 774;
    STADIUMBASE = 779;
    STADIUM = 784;
    FULLSTADIUM = 800;
    NUCLEARBASE = 811;
    NUCLEAR = 816;
    LASTZONE = 826;
    LIGHTNINGBOLT = 827;
    HBRDG0 = 828;
    HBRDG1 = 829;
    HBRDG2 = 830;
    HBRDG3 = 831;
    RADAR0 = 832;
    FOUNTAIN = 840;
    INDBASE2 = 844;
    TINYEXP = 860;
    LASTTINYEXP = 867;
    COALSMOKE1 = 916;
    COALSMOKE3 = 924;
    FOOTBALLGAME1 = 932;
    FOOTBALLGAME2 = 940;
    VBRDG0 = 948;
    VBRDG1 = 949;
    VBRDG2 = 950;
    VBRDG3 = 951;
    CHURCH1BASE = 956;
    CHURCH7LAST = 1018;
    TILE_COUNT = 1024;
    TILE_INVALID = -1;
    Tile = class {
      constructor(value = DIRT, flags = 0) {
        this.validateArguments(value, flags, "Tile constructor");
        this.value = value | flags;
      }
      getValue() {
        return this.valueFromCombinedValue(this.value);
      }
      getFlags() {
        return this.flagsFromCombinedValue(this.value);
      }
      getRawValue() {
        return this.value;
      }
      addFlags(flags) {
        this.validateFlags(flags, "addFlags");
        if (flags === NOFLAGS) {
          return;
        }
        this.value |= flags;
      }
      setValue(desiredValue) {
        if (desiredValue < TILE_INVALID) {
          throw new Error(`setValue called with out-of-range value ${desiredValue}`);
        }
        const value = this.valueFromCombinedValue(desiredValue);
        const bitMask = this.flagsToSetFromCombinedValue(desiredValue);
        this.set(value, bitMask);
      }
      setFlags(flags) {
        this.validateFlags(flags, "setFlags");
        const existingValue = this.value & ~ALLBITS;
        this.value = existingValue | flags;
      }
      removeFlags(flags) {
        this.validateFlags(flags, "removeFlags");
        if (flags === NOFLAGS) {
          return;
        }
        this.value &= ~flags;
      }
      setFrom(tile2) {
        this.value = tile2.value;
      }
      set(value, flags) {
        this.validateArguments(value, flags, "set");
        this.value = value | flags;
      }
      isAnimated() {
        return this.checkBits(ANIMBIT);
      }
      isBulldozable() {
        return this.checkBits(BULLBIT);
      }
      isConductive() {
        return this.checkBits(CONDBIT);
      }
      isCombustible() {
        return this.checkBits(BURNBIT);
      }
      isPowered() {
        return this.checkBits(POWERBIT);
      }
      isZone() {
        return this.checkBits(ZONEBIT);
      }
      toString() {
        const qualities = ["animated", "bulldozable", "combustible", "conductive", "powered", "zone"];
        const qualitiesText = qualities.map((quality) => this.getQualityText(quality)).join(", ");
        const tileValue = this.getValue();
        return `Tile# ${tileValue}: ${qualitiesText}`;
      }
      getQualityText(quality) {
        const predicate = this.predicateForQuality(quality);
        const qualityValue = this[predicate]();
        return `${quality}: ${this.summariseBoolean(qualityValue)}`;
      }
      predicateForQuality(quality) {
        return `is${quality[0].toUpperCase()}${quality.slice(1)}`;
      }
      summariseBoolean(bool) {
        return bool ? `\u2714` : `\u2718`;
      }
      valueFromCombinedValue(value) {
        return value & BIT_MASK;
      }
      flagsFromCombinedValue(value) {
        return value & ALLBITS;
      }
      flagsToSetFromCombinedValue(value) {
        const embeddedFlags = this.flagsFromCombinedValue(value);
        return embeddedFlags > 0 ? embeddedFlags : this.getFlags();
      }
      checkBits(flag) {
        return (this.value & flag) > 0;
      }
      validateArguments(value, flags, context) {
        this.validateValue(value, context);
        this.validateFlags(flags, context);
      }
      validateValue(value, context) {
        if (this.valueIsInvalid(value)) {
          throw new Error(`${context} called with out-of-range value ${value}`);
        }
      }
      validateFlags(flags, context) {
        if (this.flagsAreInvalid(flags)) {
          throw new Error(`${context} called with out-of-range flags 0x${flags.toString(16)}`);
        }
      }
      valueIsInvalid(value) {
        return value < TILE_INVALID || value >= TILE_COUNT;
      }
      flagsAreInvalid(flags) {
        return flags !== 0 && (flags < BIT_START || (flags & ~ALLBITS) !== 0);
      }
    };
    unwrapTile = function(f) {
      return function(tile2) {
        if (tile2 instanceof Tile)
          tile2 = tile2.getValue();
        return f.call(null, tile2);
      };
    };
    canBulldoze = unwrapTile(function(tileValue) {
      return tileValue >= FIRSTRIVEDGE && tileValue <= LASTRUBBLE || tileValue >= POWERBASE + 2 && tileValue <= POWERBASE + 12 || tileValue >= TINYEXP && tileValue <= LASTTINYEXP + 2;
    });
    isCommercial = unwrapTile(function(tile2) {
      return tile2 >= COMBASE && tile2 < INDBASE;
    });
    isCommercialZone = function(tile2) {
      return tile2.isZone() && isCommercial(tile2);
    };
    isDriveable = unwrapTile(function(tile2) {
      return tile2 >= ROADBASE && tile2 <= LASTROAD || tile2 >= RAILHPOWERV && tile2 <= LASTRAIL;
    });
    isFire = unwrapTile(function(tile2) {
      return tile2 >= FIREBASE && tile2 < ROADBASE;
    });
    isFlood = unwrapTile(function(tile2) {
      return tile2 >= FLOOD && tile2 < LASTFLOOD;
    });
    isIndustrial = unwrapTile(function(tile2) {
      return tile2 >= INDBASE && tile2 < PORTBASE;
    });
    isIndustrialZone = function(tile2) {
      return tile2.isZone() && isIndustrial(tile2);
    };
    isManualExplosion = unwrapTile(function(tile2) {
      return tile2 >= TINYEXP && tile2 <= LASTTINYEXP;
    });
    isRail = unwrapTile(function(tile2) {
      return tile2 >= RAILBASE && tile2 < RESBASE;
    });
    isResidential = unwrapTile(function(tile2) {
      return tile2 >= RESBASE && tile2 < HOSPITALBASE;
    });
    isResidentialZone = function(tile2) {
      return tile2.isZone() && isResidential(tile2);
    };
    isRoad = unwrapTile(function(tile2) {
      return tile2 >= ROADBASE && tile2 < POWERBASE;
    });
    normalizeRoad = unwrapTile(function(tile2) {
      return tile2 >= ROADBASE && tile2 <= LASTROAD + 1 ? (tile2 & 15) + 64 : tile2;
    });
    randomFire = function() {
      return new Tile(FIRE + (Random.getRandom16() & 3), ANIMBIT);
    };
    randomRubble = function() {
      return new Tile(RUBBLE + (Random.getRandom16() & 3), BULLBIT);
    };
    TileUtils = {
      canBulldoze,
      isCommercial,
      isCommercialZone,
      isDriveable,
      isFire,
      isFlood,
      isIndustrial,
      isIndustrialZone,
      isManualExplosion,
      isRail,
      isResidential,
      isResidentialZone,
      isRoad,
      normalizeRoad,
      randomFire,
      randomRubble
    };
    toKey$1 = function(x, y) {
      return [x, y].join(",");
    };
    fromKey = function(k) {
      k = k.split(",");
      return { x: k[0] - 0, y: k[1] - 0, toString: function() {
        return "World effect coord: (" + k[0] + ", " + k[1] + ")";
      } };
    };
    WorldEffects.prototype.clear = function() {
      this._data = [];
    };
    WorldEffects.prototype.getTile = function(x, y) {
      var key2 = toKey$1(x, y);
      var tile2 = this._data[key2];
      if (tile2 === void 0)
        tile2 = this._map.getTile(x, y);
      return tile2;
    };
    WorldEffects.prototype.getTileValue = function(x, y) {
      return this.getTile(x, y).getValue();
    };
    WorldEffects.prototype.setTile = function(x, y, value, flags) {
      if (flags !== void 0 && value instanceof Tile)
        throw new Error("Flags supplied with already defined tile");
      if (!this._map.testBounds(x, y))
        throw new Error("WorldEffects setTile called with invalid bounds " + x + ", " + y);
      if (flags === void 0 && !(value instanceof Tile))
        value = new Tile(value);
      else if (flags !== void 0)
        value = new Tile(value, flags);
      var key2 = toKey$1(x, y);
      this._data[key2] = value;
    };
    WorldEffects.prototype.apply = function() {
      var keys = Object.keys(this._data);
      for (var i = 0, l = keys.length; i < l; i++) {
        var coords = fromKey(keys[i]);
        this._map.setTo(coords, this._data[keys[i]]);
      }
    };
    init$1 = function(cost, map, shouldAutoBulldoze, isDraggable) {
      isDraggable = isDraggable || false;
      Object.defineProperty(this, "toolCost", MiscUtils.makeConstantDescriptor(cost));
      this.result = null;
      this.isDraggable = isDraggable;
      this._shouldAutoBulldoze = shouldAutoBulldoze;
      this._map = map;
      this._worldEffects = new WorldEffects(map);
      this._applicationCost = 0;
    };
    clear = function() {
      this._applicationCost = 0;
      this._worldEffects.clear();
    };
    addCost = function(cost) {
      this._applicationCost += cost;
    };
    doAutoBulldoze = function(x, y) {
      var tile2 = this._worldEffects.getTile(x, y);
      if (tile2.isBulldozable()) {
        tile2 = TileUtils.normalizeRoad(tile2.getValue());
        if (tile2 >= TINYEXP && tile2 <= LASTTINYEXP || tile2 < HBRIDGE && tile2 !== DIRT) {
          this.addCost(1);
          this._worldEffects.setTile(x, y, DIRT);
        }
      }
    };
    apply = function(budget2) {
      this._worldEffects.apply();
      budget2.spend(this._applicationCost);
      this.clear();
    };
    modifyIfEnoughFunding = function(budget2) {
      if (this.result !== this.TOOLRESULT_OK) {
        this.clear();
        return false;
      }
      if (budget2.totalFunds < this._applicationCost) {
        this.result = this.TOOLRESULT_NO_MONEY;
        this.clear();
        return false;
      }
      apply.call(this, budget2);
      this.clear();
      return true;
    };
    TOOLRESULT_OK = 0;
    TOOLRESULT_FAILED = 1;
    TOOLRESULT_NO_MONEY = 2;
    TOOLRESULT_NEEDS_BULLDOZE = 3;
    BaseToolConstructor = {
      addCost,
      autoBulldoze: true,
      bulldozerCost: 1,
      clear,
      doAutoBulldoze,
      init: init$1,
      modifyIfEnoughFunding,
      TOOLRESULT_OK,
      TOOLRESULT_FAILED,
      TOOLRESULT_NO_MONEY,
      TOOLRESULT_NEEDS_BULLDOZE
    };
    save = function(saveData) {
      saveData.autoBulldoze = BaseToolConstructor.autoBulldoze;
    };
    load2 = function(saveData) {
      BaseTool.autoBulldoze = saveData.autoBulldoze;
    };
    makeTool$3 = function(toolConstructor) {
      toolConstructor.prototype = Object.create(BaseToolConstructor);
      return toolConstructor;
    };
    BaseTool = {
      makeTool: makeTool$3,
      setAutoBulldoze: function(value) {
        BaseToolConstructor.autoBulldoze = value;
      },
      getAutoBulldoze: function() {
        return BaseToolConstructor.autoBulldoze;
      },
      save,
      load: load2
    };
    EventEmitter = function(obj) {
      var events = {};
      var addListener = function(event, listener) {
        if (!(event in events))
          events[event] = [];
        var listeners = events[event];
        if (listeners.indexOf(listener) === -1)
          listeners.push(listener);
      };
      var removeListener = function(event, listener) {
        if (!(event in events))
          events[event] = [];
        var listeners = events[event];
        var index = listeners.indexOf(listener);
        if (index !== -1)
          listeners.splice(index, 1);
      };
      var emitEvent = function(event, value) {
        if (event === void 0) {
          console.warn("Sending undefined event!");
        }
        if (!(event in events))
          events[event] = [];
        var listeners = events[event];
        for (var i = 0, l = listeners.length; i < l; i++)
          listeners[i](value);
      };
      var addProps = function(obj2, message) {
        var hasExistingProp = ["addEventListener", "removeEventListener", "_emitEvent"].some(function(prop) {
          return obj2[prop] !== void 0;
        });
        if (hasExistingProp)
          throw new Error("Cannot decorate " + message + ": existing properties would be overwritten!");
        obj2.addEventListener = addListener;
        obj2.removeEventListener = removeListener;
        obj2._emitEvent = emitEvent;
      };
      if (typeof obj === "object")
        addProps(obj, "object");
      else
        addProps(obj.prototype, "constructor");
      return obj;
    };
    jq$g = jqueryProxy.default || jqueryProxy;
    ModalWindow = function(constructorFunction, focusID) {
      focusID = focusID ? MiscUtils.normaliseDOMid(focusID) : null;
      var newConstructor = function(opacityLayerID, windowID) {
        this._opacityLayer = MiscUtils.normaliseDOMid(opacityLayerID);
        this._windowID = MiscUtils.normaliseDOMid(windowID);
        constructorFunction.call(this);
      };
      newConstructor.prototype._toggleDisplay = function() {
        var opacityLayer = jq$g(this._opacityLayer);
        opacityLayer = opacityLayer.length === 0 ? null : opacityLayer;
        if (opacityLayer === null)
          throw new Error("Node " + this._opacityLayer + " not found");
        var modalWindow = jq$g(this._windowID);
        modalWindow = modalWindow.length === 0 ? null : modalWindow;
        if (modalWindow === null)
          throw new Error("Node " + this._windowID + " not found");
        opacityLayer.toggle();
        modalWindow.toggle();
        if (focusID !== null)
          jq$g(focusID).focus();
        else
          jq$g(this._windowID + " input[type=submit]").focus();
      };
      return EventEmitter(newConstructor);
    };
    jq$f = jqueryProxy.default || jqueryProxy;
    BudgetWindow = ModalWindow(function() {
      jq$f(budgetCancelID).on("click", cancel$4.bind(this));
      jq$f(budgetResetID).on("click", resetItems.bind(this));
      jq$f(budgetFormID).on("submit", submit$b.bind(this));
    });
    dataKeys = ["roadMaintenanceBudget", "fireMaintenanceBudget", "policeMaintenanceBudget"];
    spendKeys = ["roadRate", "fireRate", "policeRate"];
    budgetResetID = "#budgetReset";
    budgetCancelID = "#budgetCancel";
    budgetFormID = "#budgetForm";
    setSpendRangeText = function(element, percentage, totalSpend) {
      var labelID = element + "Label";
      var cash = Math.floor(totalSpend * (percentage / 100));
      var text = [percentage, "% of $", totalSpend, " = $", cash].join("");
      jq$f(MiscUtils.normaliseDOMid(labelID)).text(text);
    };
    onFundingUpdate = function(elementID, e2) {
      var element = jq$f(MiscUtils.normaliseDOMid(elementID))[0];
      var percentage = element.value - 0;
      var dataSource = element.getAttribute("data-source");
      setSpendRangeText(elementID, percentage, this[dataSource]);
    };
    onTaxUpdate = function(e2) {
      var elem = jq$f("#taxRateLabel")[0];
      var sourceElem = jq$f("#taxRate")[0];
      jq$f(elem).text(["Tax rate: ", sourceElem.value, "%"].join(""));
    };
    resetItems = function(e2) {
      for (var i = 0; i < spendKeys.length; i++) {
        var original = this["original" + spendKeys[i]];
        jq$f(MiscUtils.normaliseDOMid(spendKeys[i]))[0].value = original;
        setSpendRangeText(spendKeys[i], original, this[dataKeys[i]]);
      }
      jq$f("#taxRate")[0].value = this.originaltaxRate;
      onTaxUpdate();
      e2.preventDefault();
    };
    BudgetWindow.prototype.close = function(data) {
      data = data || { cancelled: true };
      this._emitEvent(BUDGET_WINDOW_CLOSED, data);
      this._toggleDisplay();
    };
    cancel$4 = function(e2) {
      e2.preventDefault();
      this.close({ cancelled: true });
    };
    submit$b = function(e2) {
      e2.preventDefault();
      var roadPercent = jq$f("#roadRate")[0].value;
      var firePercent = jq$f("#fireRate")[0].value;
      var policePercent = jq$f("#policeRate")[0].value;
      var taxPercent = jq$f("#taxRate")[0].value;
      var data = {
        cancelled: false,
        roadPercent,
        firePercent,
        policePercent,
        taxPercent,
        e: e2,
        original: e2.type
      };
      this.close(data);
    };
    BudgetWindow.prototype.open = function(budgetData) {
      var i, elem;
      for (i = 0; i < dataKeys.length; i++) {
        if (budgetData[dataKeys[i]] === void 0)
          throw new Error("Missing budget data (" + dataKeys[i] + ")");
        this[dataKeys[i]] = budgetData[dataKeys[i]];
      }
      for (i = 0; i < spendKeys.length; i++) {
        if (budgetData[spendKeys[i]] === void 0)
          throw new Error("Missing budget data (" + spendKeys[i] + ")");
        elem = spendKeys[i];
        this["original" + elem] = budgetData[elem];
        setSpendRangeText(elem, budgetData[spendKeys[i]], this[dataKeys[i]]);
        elem = jq$f(MiscUtils.normaliseDOMid(elem));
        elem.on("change", onFundingUpdate.bind(this, spendKeys[i]));
        elem = elem[0];
        elem.value = budgetData[spendKeys[i]];
      }
      if (budgetData.taxRate === void 0)
        throw new Error("Missing budget data (taxRate)");
      this.originalTaxRate = budgetData.taxRate;
      elem = jq$f("#taxRate");
      elem.on("change", onTaxUpdate);
      elem = elem[0];
      elem.value = budgetData.taxRate;
      onTaxUpdate();
      var previousFunds = budgetData.totalFunds;
      if (previousFunds === void 0)
        throw new Error("Missing budget data (previousFunds)");
      var taxesCollected = budgetData.taxesCollected;
      if (taxesCollected === void 0)
        throw new Error("Missing budget data (taxesCollected)");
      var cashFlow = taxesCollected - this.roadMaintenanceBudget - this.fireMaintenanceBudget - this.policeMaintenanceBudget;
      var currentFunds = previousFunds + cashFlow;
      jq$f("#taxesCollected").text("$" + taxesCollected);
      jq$f("#cashFlow").text((cashFlow < 0 ? "-$" : "$") + cashFlow);
      jq$f("#previousFunds").text((previousFunds < 0 ? "-$" : "$") + previousFunds);
      jq$f("#currentFunds").text("$" + currentFunds);
      this._toggleDisplay();
    };
    jq$e = jqueryProxy.default || jqueryProxy;
    CongratsWindow = ModalWindow(function() {
      jq$e(congratsFormID).on("submit", submit$a.bind(this));
    });
    congratsFormID = "#congratsForm";
    congratsMessageID = "#congratsMessage";
    congratsOKID = "#congratsOK";
    submit$a = function(e2) {
      e2.preventDefault();
      this.close();
    };
    CongratsWindow.prototype.close = function() {
      this._toggleDisplay();
      this._emitEvent(CONGRATS_WINDOW_CLOSED);
    };
    CongratsWindow.prototype.open = function(message) {
      this._toggleDisplay();
      jq$e(congratsMessageID).text(message);
      jq$e(congratsOKID).focus();
    };
    jq$d = jqueryProxy.default || jqueryProxy;
    DebugWindow = ModalWindow(function() {
      jq$d(debugCancelID).on("click", cancel$3.bind(this));
      jq$d(debugFormID).on("submit", submit$9.bind(this));
    });
    debugCancelID = "#debugCancel";
    debugFormID = "#debugForm";
    DebugWindow.prototype.close = function(actions) {
      actions = actions || [];
      this._emitEvent(DEBUG_WINDOW_CLOSED, actions);
      this._toggleDisplay();
    };
    cancel$3 = function(e2) {
      e2.preventDefault();
      this.close([]);
    };
    submit$9 = function(e2) {
      e2.preventDefault();
      var actions = [];
      var shouldAdd = jq$d(".debugAdd:checked").val();
      if (shouldAdd === "true")
        actions.push({ action: DebugWindow.ADD_FUNDS, data: {} });
      this.close(actions);
    };
    DebugWindow.prototype.open = function() {
      this._toggleDisplay();
    };
    defineAction$2 = function() {
      var uid = 0;
      return function(name) {
        Object.defineProperty(DebugWindow, name, MiscUtils.makeConstantDescriptor(uid));
        uid += 1;
      };
    }();
    defineAction$2("ADD_FUNDS");
    jq$c = jqueryProxy.default || jqueryProxy;
    disasterSelectID = "#disasterSelect";
    disasterCancelID = "#disasterCancel";
    disasterFormID = "#disasterForm";
    DisasterWindow = ModalWindow(function() {
      jq$c(disasterFormID).on("submit", submit$8.bind(this));
      jq$c(disasterCancelID).on("click", cancel$2.bind(this));
    }, disasterSelectID);
    DisasterWindow.prototype.close = function(disaster) {
      disaster = disaster || DisasterWindow.DISASTER_NONE;
      this._toggleDisplay();
      this._emitEvent(DISASTER_WINDOW_CLOSED, disaster);
    };
    cancel$2 = function(e2) {
      e2.preventDefault();
      this.close();
    };
    submit$8 = function(e2) {
      e2.preventDefault();
      var requestedDisaster = jq$c(disasterSelectID)[0].value;
      this.close(requestedDisaster);
    };
    DisasterWindow.prototype.open = function() {
      jq$c("#disasterNone").attr("value", DisasterWindow.DISASTER_NONE);
      jq$c("#disasterMonster").attr("value", DisasterWindow.DISASTER_MONSTER);
      jq$c("#disasterFire").attr("value", DisasterWindow.DISASTER_FIRE);
      jq$c("#disasterFlood").attr("value", DisasterWindow.DISASTER_FLOOD);
      jq$c("#disasterCrash").attr("value", DisasterWindow.DISASTER_CRASH);
      jq$c("#disasterMeltdown").attr("value", DisasterWindow.DISASTER_MELTDOWN);
      jq$c("#disasterTornado").attr("value", DisasterWindow.DISASTER_TORNADO);
      this._toggleDisplay();
    };
    Object.defineProperties(DisasterWindow, {
      DISASTER_NONE: MiscUtils.makeConstantDescriptor("None"),
      DISASTER_MONSTER: MiscUtils.makeConstantDescriptor("Monster"),
      DISASTER_FIRE: MiscUtils.makeConstantDescriptor("Fire"),
      DISASTER_FLOOD: MiscUtils.makeConstantDescriptor("Flood"),
      DISASTER_CRASH: MiscUtils.makeConstantDescriptor("Crash"),
      DISASTER_MELTDOWN: MiscUtils.makeConstantDescriptor("Meltdown"),
      DISASTER_TORNADO: MiscUtils.makeConstantDescriptor("Tornado")
    });
    PROBLEMS = [
      "CVP_CRIME",
      "CVP_POLLUTION",
      "CVP_HOUSING",
      "CVP_TAXES",
      "CVP_TRAFFIC",
      "CVP_UNEMPLOYMENT",
      "CVP_FIRE"
    ];
    NUMPROBLEMS = PROBLEMS.length;
    NUM_COMPLAINTS = 4;
    problemData = [];
    Evaluation = EventEmitter(function(gameLevel2) {
      this.problemVotes = [];
      this.problemOrder = [];
      this.evalInit();
      this.gameLevel = "" + gameLevel2;
    });
    Evaluation.prototype.cityEvaluation = function(simData) {
      var census = simData.census;
      if (census.totalPop > 0) {
        for (var i = 0; i < NUMPROBLEMS; i++)
          problemData.push(0);
        this.getAssessedValue(census);
        this.getPopulation(census);
        this.doProblems(simData.census, simData.budget, simData.blockMaps);
        this.getScore(simData);
        this.doVotes();
      } else {
        this.evalInit();
        this.cityYes = 50;
      }
    };
    Evaluation.prototype.evalInit = function() {
      this.cityYes = 0;
      this.cityPop = 0;
      this.cityPopDelta = 0;
      this.cityAssessedValue = 0;
      this.cityClass = Evaluation.CC_VILLAGE;
      this.cityClassLast = Evaluation.CC_VILLAGE;
      this.cityScore = 500;
      this.cityScoreDelta = 0;
      for (var i = 0; i < NUMPROBLEMS; i++)
        this.problemVotes[i] = { index: i, voteCount: 0 };
      for (i = 0; i < NUM_COMPLAINTS; i++)
        this.problemOrder[i] = NUMPROBLEMS;
    };
    saveProps$3 = ["cityClass", "cityScore"];
    Evaluation.prototype.save = function(saveData) {
      for (var i = 0, l = saveProps$3.length; i < l; i++)
        saveData[saveProps$3[i]] = this[saveProps$3[i]];
    };
    Evaluation.prototype.load = function(saveData) {
      for (var i = 0, l = saveProps$3.length; i < l; i++)
        this[saveProps$3[i]] = saveData[saveProps$3[i]];
    };
    Evaluation.prototype.getAssessedValue = function(census) {
      var value;
      value = census.roadTotal * 5;
      value += census.railTotal * 10;
      value += census.policeStationPop * 1e3;
      value += census.fireStationPop * 1e3;
      value += census.hospitalPop * 400;
      value += census.stadiumPop * 3e3;
      value += census.seaportPop * 5e3;
      value += census.airportPop * 1e4;
      value += census.coalPowerPop * 3e3;
      value += census.nuclearPowerPop * 6e3;
      this.cityAssessedValue = value * 1e3;
    };
    Evaluation.prototype.getPopulation = function(census) {
      var oldPopulation = this.cityPop;
      this.cityPop = (census.resPop + (census.comPop + census.indPop) * 8) * 20;
      this.cityPopDelta = this.cityPop - oldPopulation;
      if (this.cityPopDelta !== 0)
        this._emitEvent(POPULATION_UPDATED, this.cityPop);
      return this.cityPop;
    };
    Evaluation.prototype.getCityClass = function(cityPopulation) {
      this.cityClass = Evaluation.CC_VILLAGE;
      if (cityPopulation > 2e3)
        this.cityClass = Evaluation.CC_TOWN;
      if (cityPopulation > 1e4)
        this.cityClass = Evaluation.CC_CITY;
      if (cityPopulation > 5e4)
        this.cityClass = Evaluation.CC_CAPITAL;
      if (cityPopulation > 1e5)
        this.cityClass = Evaluation.CC_METROPOLIS;
      if (cityPopulation > 5e5)
        this.cityClass = Evaluation.CC_MEGALOPOLIS;
      if (this.cityClass !== this.cityClassLast) {
        this.cityClassLast = this.cityClass;
        this._emitEvent(CLASSIFICATION_UPDATED, this.cityClass);
      }
      return this.cityClass;
    };
    Evaluation.prototype.voteProblems = function() {
      for (var i = 0; i < NUMPROBLEMS; i++) {
        this.problemVotes[i].index = i;
        this.problemVotes[i].voteCount = 0;
      }
      var problem = 0;
      var voteCount = 0;
      var loopCount = 0;
      while (voteCount < 100 && loopCount < 600) {
        var voterProblemTolerance = Random.getRandom(300);
        if (problemData[problem] > voterProblemTolerance) {
          this.problemVotes[problem].voteCount += 1;
          voteCount++;
        }
        problem = (problem + 1) % NUMPROBLEMS;
        loopCount++;
      }
    };
    getTrafficAverage = function(blockMaps, census) {
      var trafficDensityMap = blockMaps.trafficDensityMap;
      var landValueMap = blockMaps.landValueMap;
      var trafficTotal = 0;
      var count = 1;
      for (var x = 0; x < landValueMap.gameMapWidth; x += landValueMap.blockSize) {
        for (var y = 0; y < landValueMap.gameMapHeight; y += landValueMap.blockSize) {
          if (landValueMap.worldGet(x, y) > 0) {
            trafficTotal += trafficDensityMap.worldGet(x, y);
            count++;
          }
        }
      }
      var trafficAverage = census.trafficAverage = Math.floor(trafficTotal / count) * 2.4;
      return trafficAverage;
    };
    getUnemployment = function(census) {
      var b = (census.comPop + census.indPop) * 8;
      if (b === 0)
        return 0;
      var r = census.resPop / b;
      b = Math.round((r - 1) * 255);
      return Math.min(b, 255);
    };
    getFireSeverity = function(census) {
      return Math.min(census.firePop * 5, 255);
    };
    Evaluation.prototype.doProblems = function(census, budget2, blockMaps) {
      problemData[Evaluation.CRIME] = census.crimeAverage;
      problemData[Evaluation.POLLUTION] = census.pollutionAverage;
      problemData[Evaluation.HOUSING] = census.landValueAverage * 7 / 10;
      problemData[Evaluation.TAXES] = budget2.cityTax * 10;
      problemData[Evaluation.TRAFFIC] = getTrafficAverage(blockMaps, census);
      problemData[Evaluation.UNEMPLOYMENT] = getUnemployment(census);
      problemData[Evaluation.FIRE] = getFireSeverity(census);
      this.voteProblems();
      this.problemVotes.sort(function(a, b) {
        return b.voteCount - a.voteCount;
      });
      this.problemOrder = this.problemVotes.map(function(pv, i) {
        if (i >= NUM_COMPLAINTS || pv.voteCount === 0)
          return null;
        return pv.index;
      });
    };
    Evaluation.prototype.getScore = function(simData) {
      var census = simData.census;
      var budget2 = simData.budget;
      var valves = simData.valves;
      var cityScoreLast = this.cityScore;
      var score = 0;
      for (var i = 0; i < NUMPROBLEMS; i++)
        score += problemData[i];
      score = Math.floor(score / 3);
      score = (250 - Math.min(score, 250)) * 4;
      var demandPenalty = 0.85;
      if (valves.resCap)
        score = Math.round(score * demandPenalty);
      if (valves.comCap)
        score = Math.round(score * demandPenalty);
      if (valves.indCap)
        score = Math.round(score * demandPenalty);
      if (budget2.roadEffect < budget2.MAX_ROAD_EFFECT)
        score -= budget2.MAX_ROAD_EFFECT - budget2.roadEffect;
      if (budget2.policeEffect < budget2.MAX_POLICE_STATION_EFFECT)
        score = Math.round(score * (0.9 + budget2.policeEffect / (10 * budget2.MAX_POLICE_STATION_EFFECT)));
      if (budget2.fireEffect < budget2.MAX_FIRE_STATION_EFFECT)
        score = Math.round(score * (0.9 + budget2.fireEffect / (10 * budget2.MAX_FIRE_STATION_EFFECT)));
      if (valves.resValve < -1e3)
        score = Math.round(score * 0.85);
      if (valves.comValve < -1e3)
        score = Math.round(score * 0.85);
      if (valves.indValve < -1e3)
        score = Math.round(score * 0.85);
      var scale = 1;
      if (this.cityPop === 0 || this.cityPopDelta === 0 || this.cityPopDelta === this.cityPop) {
        scale = 1;
      } else if (this.cityPopDelta > 0) {
        scale = this.cityPopDelta / this.cityPop + 1;
      } else if (this.cityPopDelta < 0) {
        scale = 0.95 + Math.floor(this.cityPopDelta / (this.cityPop - this.cityPopDelta));
      }
      score = Math.round(score * scale);
      score = score - getFireSeverity(census) - budget2.cityTax;
      scale = census.unpoweredZoneCount + census.poweredZoneCount;
      if (scale > 0)
        score = Math.round(score * (census.poweredZoneCount / scale));
      score = MiscUtils.clamp(score, 0, 1e3);
      this.cityScore = Math.round((this.cityScore + score) / 2);
      this.cityScoreDelta = this.cityScore - cityScoreLast;
      if (this.cityScoreDelta !== 0)
        this._emitEvent(SCORE_UPDATED, this.cityScore);
    };
    Evaluation.prototype.doVotes = function() {
      this.cityYes = 0;
      for (var i = 0; i < 100; i++) {
        var voterExpectation = Random.getRandom(1e3);
        if (this.cityScore > voterExpectation)
          this.cityYes++;
      }
    };
    Evaluation.prototype.getProblemNumber = function(i) {
      if (i < 0 || i >= NUM_COMPLAINTS)
        return null;
      return this.problemOrder[i];
    };
    Object.defineProperties(Evaluation, {
      CC_VILLAGE: MiscUtils.makeConstantDescriptor("VILLAGE"),
      CC_TOWN: MiscUtils.makeConstantDescriptor("TOWN"),
      CC_CITY: MiscUtils.makeConstantDescriptor("CITY"),
      CC_CAPITAL: MiscUtils.makeConstantDescriptor("CAPITAL"),
      CC_METROPOLIS: MiscUtils.makeConstantDescriptor("METROPOLIS"),
      CC_MEGALOPOLIS: MiscUtils.makeConstantDescriptor("MEGALOPOLIS"),
      CRIME: MiscUtils.makeConstantDescriptor(0),
      POLLUTION: MiscUtils.makeConstantDescriptor(1),
      HOUSING: MiscUtils.makeConstantDescriptor(2),
      TAXES: MiscUtils.makeConstantDescriptor(3),
      TRAFFIC: MiscUtils.makeConstantDescriptor(4),
      UNEMPLOYMENT: MiscUtils.makeConstantDescriptor(5),
      FIRE: MiscUtils.makeConstantDescriptor(6)
    });
    ID = (n) => n;
    BlockMap = class {
      constructor(gameMapWidth, gameMapHeight, blockSize) {
        this.gameMapWidth = gameMapWidth;
        this.gameMapHeight = gameMapHeight;
        this.blockSize = blockSize;
        this.data = [];
        this._width = this.convertToBlockCount(this.gameMapWidth);
        this._height = this.convertToBlockCount(this.gameMapHeight);
        this.clear();
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
      get(blockX, blockY) {
        const index = this.toIndex(blockX, blockY);
        return this.data[index];
      }
      set(blockX, blockY, value) {
        const index = this.toIndex(blockX, blockY);
        this.data[index] = value;
      }
      worldGet(worldX, worldY) {
        const { x, y } = this.toBlockCoordinate(worldX, worldY);
        return this.get(x, y);
      }
      worldSet(worldX, worldY, value) {
        const { x, y } = this.toBlockCoordinate(worldX, worldY);
        this.set(x, y, value);
      }
      clear() {
        this.forEach((x, y) => this.set(x, y, 0));
      }
      copyFrom(source, transform = ID) {
        if (this.hasIncompatibleDimensions(source)) {
          console.warn("Copying from incompatible blockMap!");
        }
        this.forEach((x, y) => this.set(x, y, transform(source.get(x, y))));
      }
      forEach(fn) {
        const maxWidth = this.width;
        const maxHeight = this.height;
        for (let x = 0; x < maxWidth; x++) {
          for (let y = 0; y < maxHeight; y++) {
            fn(x, y);
          }
        }
      }
      convertToBlockCount(value) {
        return Math.floor((value + this.blockSize - 1) / this.blockSize);
      }
      hasIncompatibleDimensions(map) {
        return map.gameMapHeight !== this.gameMapHeight || map.gameMapWidth !== this.gameMapWidth || map.blockSize !== this.blockSize;
      }
      toBlockCoordinate(worldX, worldY) {
        const x = this.toBlockIndex(worldX);
        const y = this.toBlockIndex(worldY);
        return { x, y };
      }
      toBlockIndex(worldIndex) {
        return Math.floor(worldIndex / this.blockSize);
      }
      toIndex(blockX, blockY) {
        return this.width * blockY + blockX;
      }
    };
    DirectionValue = class {
      constructor(name) {
        this.name = name;
      }
      oppositeDirection() {
        return this.transform(4);
      }
      rotateClockwise() {
        return this.transform(1);
      }
      rotateCounterClockwise() {
        return this.transform(allDirections.length - 1);
      }
      toString() {
        return this.name;
      }
      transform(delta) {
        const ourIndex = directionIndex(this);
        const desired = ourIndex + delta;
        return allDirections[desired % allDirections.length];
      }
    };
    NORTH = Object.freeze(new DirectionValue("NORTH"));
    NORTHEAST = Object.freeze(new DirectionValue("NORTHEAST"));
    EAST = Object.freeze(new DirectionValue("EAST"));
    SOUTHEAST = Object.freeze(new DirectionValue("SOUTHEAST"));
    SOUTH = Object.freeze(new DirectionValue("SOUTH"));
    SOUTHWEST = Object.freeze(new DirectionValue("SOUTHWEST"));
    WEST$1 = Object.freeze(new DirectionValue("WEST"));
    NORTHWEST = Object.freeze(new DirectionValue("NORTHWEST"));
    allDirections = [
      NORTH,
      NORTHEAST,
      EAST,
      SOUTHEAST,
      SOUTH,
      SOUTHWEST,
      WEST$1,
      NORTHWEST
    ];
    cardinalDirections = [
      NORTH,
      EAST,
      SOUTH,
      WEST$1
    ];
    DirectionDelta = class {
      constructor(xDelta2, yDelta2) {
        this.xDelta = xDelta2;
        this.yDelta = yDelta2;
      }
    };
    Position = class {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      static move(position, direction) {
        const { x, y } = position;
        const { xDelta: xDelta2, yDelta: yDelta2 } = getDeltaFor(direction);
        return new Position(x + xDelta2, y + yDelta2);
      }
      static origin() {
        return new Position(0, 0);
      }
      toString() {
        return `(${this.x}, ${this.y})`;
      }
    };
    SPRITE_TRAIN = 1;
    SPRITE_HELICOPTER = 2;
    SPRITE_AIRPLANE = 3;
    SPRITE_SHIP = 4;
    SPRITE_MONSTER = 5;
    SPRITE_TORNADO = 6;
    SPRITE_EXPLOSION = 7;
    SpriteConstants = {
      SPRITE_TRAIN,
      SPRITE_HELICOPTER,
      SPRITE_AIRPLANE,
      SPRITE_SHIP,
      SPRITE_MONSTER,
      SPRITE_TORNADO,
      SPRITE_EXPLOSION
    };
    checkBigZone = function(tileValue) {
      var result;
      switch (tileValue) {
        case POWERPLANT:
        case PORT:
        case NUCLEAR:
        case STADIUM:
          result = { zoneSize: 4, deltaX: 0, deltaY: 0 };
          break;
        case POWERPLANT + 1:
        case COALSMOKE3:
        case COALSMOKE3 + 1:
        case COALSMOKE3 + 2:
        case PORT + 1:
        case NUCLEAR + 1:
        case STADIUM + 1:
          result = { zoneSize: 4, deltaX: -1, deltaY: 0 };
          break;
        case POWERPLANT + 4:
        case PORT + 4:
        case NUCLEAR + 4:
        case STADIUM + 4:
          result = { zoneSize: 4, deltaX: 0, deltaY: -1 };
          break;
        case POWERPLANT + 5:
        case PORT + 5:
        case NUCLEAR + 5:
        case STADIUM + 5:
          result = { zoneSize: 4, deltaX: -1, deltaY: -1 };
          break;
        case AIRPORT:
          result = { zoneSize: 6, deltaX: 0, deltaY: 0 };
          break;
        case AIRPORT + 1:
          result = { zoneSize: 6, deltaX: -1, deltaY: 0 };
          break;
        case AIRPORT + 2:
          result = { zoneSize: 6, deltaX: -2, deltaY: 0 };
          break;
        case AIRPORT + 3:
          result = { zoneSize: 6, deltaX: -3, deltaY: 0 };
          break;
        case AIRPORT + 6:
          result = { zoneSize: 6, deltaX: 0, deltaY: -1 };
          break;
        case AIRPORT + 7:
          result = { zoneSize: 6, deltaX: -1, deltaY: -1 };
          break;
        case AIRPORT + 8:
          result = { zoneSize: 6, deltaX: -2, deltaY: -1 };
          break;
        case AIRPORT + 9:
          result = { zoneSize: 6, deltaX: -3, deltaY: -1 };
          break;
        case AIRPORT + 12:
          result = { zoneSize: 6, deltaX: 0, deltaY: -2 };
          break;
        case AIRPORT + 13:
          result = { zoneSize: 6, deltaX: -1, deltaY: -2 };
          break;
        case AIRPORT + 14:
          result = { zoneSize: 6, deltaX: -2, deltaY: -2 };
          break;
        case AIRPORT + 15:
          result = { zoneSize: 6, deltaX: -3, deltaY: -2 };
          break;
        case AIRPORT + 18:
          result = { zoneSize: 6, deltaX: 0, deltaY: -3 };
          break;
        case AIRPORT + 19:
          result = { zoneSize: 6, deltaX: -1, deltaY: -3 };
          break;
        case AIRPORT + 20:
          result = { zoneSize: 6, deltaX: -2, deltaY: -3 };
          break;
        case AIRPORT + 21:
          result = { zoneSize: 6, deltaX: -3, deltaY: -3 };
          break;
        default:
          result = { zoneSize: 0, deltaX: 0, deltaY: 0 };
          break;
      }
      return result;
    };
    checkZoneSize = function(tileValue) {
      if (tileValue >= RESBASE - 1 && tileValue <= PORTBASE - 1 || tileValue >= LASTPOWERPLANT + 1 && tileValue <= POLICESTATION + 4 || tileValue >= CHURCH1BASE && tileValue <= CHURCH7LAST) {
        return 3;
      }
      if (tileValue >= PORTBASE && tileValue <= LASTPORT || tileValue >= COALBASE && tileValue <= LASTPOWERPLANT || tileValue >= STADIUMBASE && tileValue <= LASTZONE) {
        return 4;
      }
      return 0;
    };
    fireZone = function(map, x, y, blockMaps) {
      var tileValue = map.getTileValue(x, y);
      var zoneSize = 2;
      var value = blockMaps.rateOfGrowthMap.worldGet(x, y);
      value = MiscUtils.clamp(value - 20, -200, 200);
      blockMaps.rateOfGrowthMap.worldSet(x, y, value);
      if (tileValue === AIRPORT)
        zoneSize = 5;
      else if (tileValue >= PORTBASE)
        zoneSize = 3;
      else if (tileValue < PORTBASE)
        zoneSize = 2;
      for (var xDelta2 = -1; xDelta2 < zoneSize; xDelta2++) {
        for (var yDelta2 = -1; yDelta2 < zoneSize; yDelta2++) {
          var xTem = x + xDelta2;
          var yTem = y + yDelta2;
          if (!map.testBounds(xTem, yTem))
            continue;
          if (map.getTileValue(xTem, yTem >= ROADBASE))
            map.addTileFlags(xTem, yTem, BULLBIT);
        }
      }
    };
    getLandPollutionValue = function(blockMaps, x, y) {
      var landValue = blockMaps.landValueMap.worldGet(x, y);
      landValue -= blockMaps.pollutionDensityMap.worldGet(x, y);
      if (landValue < 30)
        return 0;
      if (landValue < 80)
        return 1;
      if (landValue < 150)
        return 2;
      return 3;
    };
    incRateOfGrowth = function(blockMaps, x, y, growthDelta) {
      var currentRate = blockMaps.rateOfGrowthMap.worldGet(x, y);
      var newValue = MiscUtils.clamp(currentRate + growthDelta * 4, -200, 200);
      blockMaps.rateOfGrowthMap.worldSet(x, y, newValue);
    };
    putZone = function(map, x, y, centreTile, isPowered) {
      for (var dY = -1; dY < 2; dY++) {
        for (var dX = -1; dX < 2; dX++) {
          var tileValue = map.getTileValue(x + dX, y + dY);
          if (tileValue >= FLOOD && tileValue < ROADBASE)
            return;
        }
      }
      map.putZone(x, y, centreTile, 3);
      map.addTileFlags(x, y, BULLBIT);
      if (isPowered)
        map.addTileFlags(x, y, POWERBIT);
    };
    ZoneUtils = {
      checkBigZone,
      checkZoneSize,
      fireZone,
      getLandPollutionValue,
      incRateOfGrowth,
      putZone
    };
    pixToWorld = function(p) {
      return p >> 4;
    };
    worldToPix = function(w) {
      return w << 4;
    };
    turnTo = function(presentDir, desiredDir) {
      if (presentDir === desiredDir)
        return presentDir;
      if (presentDir < desiredDir) {
        if (desiredDir - presentDir < 4)
          presentDir++;
        else
          presentDir--;
      } else {
        if (presentDir - desiredDir < 4)
          presentDir--;
        else
          presentDir++;
      }
      if (presentDir > 8)
        presentDir = 1;
      if (presentDir < 1)
        presentDir = 8;
      return presentDir;
    };
    getTileValue = function(map, x, y) {
      var wX = pixToWorld(x);
      var wY = pixToWorld(y);
      if (wX < 0 || wX >= map.width || wY < 0 || wY >= map.height)
        return -1;
      return map.getTileValue(wX, wY);
    };
    directionTable = [0, 3, 2, 1, 3, 4, 5, 7, 6, 5, 7, 8, 1];
    getDir = function(orgX, orgY, destX, destY) {
      var deltaX = destX - orgX;
      var deltaY = destY - orgY;
      var i;
      if (deltaX < 0) {
        if (deltaY < 0) {
          i = 11;
        } else {
          i = 8;
        }
      } else {
        if (deltaY < 0) {
          i = 2;
        } else {
          i = 5;
        }
      }
      deltaX = Math.abs(deltaX);
      deltaY = Math.abs(deltaY);
      if (deltaX * 2 < deltaY)
        i++;
      else if (deltaY * 2 < deltaX)
        i--;
      if (i < 0 || i > 12)
        i = 0;
      return directionTable[i];
    };
    absoluteDistance = function(orgX, orgY, destX, destY) {
      var deltaX = destX - orgX;
      var deltaY = destY - orgY;
      return Math.abs(deltaX) + Math.abs(deltaY);
    };
    checkWet = function(tileValue) {
      if (tileValue === HPOWER || tileValue === VPOWER || tileValue === HRAIL || tileValue === VRAIL || tileValue === BRWH || tileValue === BRWV)
        return true;
      else
        return false;
    };
    destroyMapTile = function(spriteManager, map, blockMaps, ox, oy) {
      var x = pixToWorld(ox);
      var y = pixToWorld(oy);
      if (!map.testBounds(x, y))
        return;
      var tile2 = map.getTile(x, y);
      var tileValue = tile2.getValue();
      if (tileValue < TREEBASE)
        return;
      if (!tile2.isCombustible()) {
        if (tileValue >= ROADBASE && tileValue <= LASTROAD)
          map.setTile(x, y, RIVER, 0);
        return;
      }
      if (tile2.isZone()) {
        ZoneUtils.fireZone(map, x, y, blockMaps);
        if (tileValue > RZB)
          spriteManager.makeExplosionAt(ox, oy);
      }
      if (checkWet(tileValue))
        map.setTile(x, y, RIVER, 0);
      else
        map.setTile(x, y, TINYEXP, BULLBIT | ANIMBIT);
    };
    getDistance = function(x1, y1, x2, y2) {
      return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };
    checkSpriteCollision = function(s1, s2) {
      return s1.frame !== 0 && s2.frame !== 0 && getDistance(s1.x, s1.y, s2.x, s2.y) < 30;
    };
    SpriteUtils = {
      absoluteDistance,
      checkSpriteCollision,
      destroyMapTile,
      getDir,
      getTileValue,
      turnTo,
      pixToWorld,
      worldToPix
    };
    Traffic.prototype.makeTraffic = function(x, y, blockMaps, destFn) {
      this._stack = [];
      var pos2 = new Position(x, y);
      if (this.findPerimeterRoad(pos2)) {
        if (this.tryDrive(pos2, destFn)) {
          this.addToTrafficDensityMap(blockMaps);
          return Traffic.ROUTE_FOUND;
        }
        return Traffic.NO_ROUTE_FOUND;
      } else {
        return Traffic.NO_ROAD_FOUND;
      }
    };
    Traffic.prototype.addToTrafficDensityMap = function(blockMaps) {
      var trafficDensityMap = blockMaps.trafficDensityMap;
      while (this._stack.length > 0) {
        var pos2 = this._stack.pop();
        if (!this._map.testBounds(pos2.x, pos2.y))
          continue;
        var tileValue = this._map.getTileValue(pos2.x, pos2.y);
        if (tileValue >= ROADBASE && tileValue < POWERBASE) {
          var traffic = trafficDensityMap.worldGet(pos2.x, pos2.y);
          traffic += 50;
          traffic = Math.min(traffic, 240);
          trafficDensityMap.worldSet(pos2.x, pos2.y, traffic);
          if (traffic >= 240 && Random.getRandom(5) === 0) {
            var sprite = this._spriteManager.getSprite(SPRITE_HELICOPTER);
            if (sprite !== null) {
              sprite.destX = SpriteUtils.worldToPix(pos2.x);
              sprite.destY = SpriteUtils.worldToPix(pos2.y);
            }
          }
        }
      }
    };
    perimX = [-1, 0, 1, 2, 2, 2, 1, 0, -1, -2, -2, -2];
    perimY = [-2, -2, -2, -1, 0, 1, 2, 2, 2, 1, 0, -1];
    Traffic.prototype.findPerimeterRoad = function(pos2) {
      for (var i = 0; i < 12; i++) {
        var xx = pos2.x + perimX[i];
        var yy = pos2.y + perimY[i];
        if (this._map.testBounds(xx, yy)) {
          if (TileUtils.isDriveable(this._map.getTileValue(xx, yy))) {
            pos2.x = xx;
            pos2.y = yy;
            return true;
          }
        }
      }
      return false;
    };
    MAX_TRAFFIC_DISTANCE = 30;
    Traffic.prototype.tryDrive = function(startPos, destFn) {
      var dirLast;
      var drivePos = new Position(startPos);
      for (var dist = 0; dist < MAX_TRAFFIC_DISTANCE; dist++) {
        var dir = this.tryGo(drivePos, dirLast);
        if (dir) {
          drivePos = Position.move(pos, dir);
          dirLast = dir.oppositeDirection();
          if (dist & 1)
            this._stack.push(new Position(drivePos));
          if (this.driveDone(drivePos, destFn))
            return true;
        } else {
          if (this._stack.length > 0) {
            this._stack.pop();
            dist += 3;
          } else {
            return false;
          }
        }
      }
      return false;
    };
    Traffic.prototype.tryGo = function(pos2, dirLast) {
      var directions = [];
      var count = 0;
      forEachCardinalDirection((dir) => {
        if (dir != dirLast && TileUtils.isDriveable(this._map.getTileFromMapOrDefault(pos2, dir, DIRT))) {
          directions.push(dir);
          count++;
        }
      });
      if (count === 0) {
        return;
      }
      if (count === 1) {
        return directions[0];
      }
      const index = Random.getRandom(directions.length - 1);
      return directions[index];
    };
    Traffic.prototype.driveDone = function(pos2, destFn) {
      if (pos2.y > 0) {
        if (destFn(this._map.getTileValue(pos2.x, pos2.y - 1)))
          return true;
      }
      if (pos2.x < this._map.width - 1) {
        if (destFn(this._map.getTileValue(pos2.x + 1, pos2.y)))
          return true;
      }
      if (pos2.y < this._map.height - 1) {
        if (destFn(this._map.getTileValue(pos2.x, pos2.y + 1)))
          return true;
      }
      if (pos2.x > 0) {
        if (destFn(this._map.getTileValue(pos2.x - 1, pos2.y)))
          return true;
      }
      return false;
    };
    Object.defineProperties(Traffic, {
      ROUTE_FOUND: MiscUtils.makeConstantDescriptor(1),
      NO_ROUTE_FOUND: MiscUtils.makeConstantDescriptor(0),
      NO_ROAD_FOUND: MiscUtils.makeConstantDescriptor(-1)
    });
    getZonePopulation$2 = function(map, x, y, tileValue) {
      if (tileValue === COMCLR)
        return 0;
      return Math.floor((tileValue - CZB) / 9) % 5 + 1;
    };
    placeCommercial = function(map, x, y, population, lpValue, zonePower) {
      var centreTile = (lpValue * 5 + population) * 9 + CZB;
      ZoneUtils.putZone(map, x, y, centreTile, zonePower);
    };
    growZone$2 = function(map, x, y, blockMaps, population, lpValue, zonePower) {
      var landValue = blockMaps.landValueMap.worldGet(x, y);
      landValue = landValue >> 5;
      if (population > landValue)
        return;
      if (population < 5) {
        placeCommercial(map, x, y, population, lpValue, zonePower);
        ZoneUtils.incRateOfGrowth(blockMaps, x, y, 8);
      }
    };
    degradeZone$2 = function(map, x, y, blockMaps, populationCategory, lpCategory, zonePower) {
      if (populationCategory > 1) {
        placeCommercial(map, x, y, populationCategory - 2, lpCategory, zonePower);
      } else {
        ZoneUtils.putZone(map, x, y, COMCLR, zonePower);
      }
      ZoneUtils.incRateOfGrowth(blockMaps, x, y, -8);
    };
    commercialFound = function(map, x, y, simData) {
      var lpValue;
      simData.census.comZonePop += 1;
      var tileValue = map.getTileValue(x, y);
      var population = getZonePopulation$2(map, x, y, tileValue);
      simData.census.comPop += population;
      var zonePower = map.getTile(x, y).isPowered();
      var trafficOK = Traffic.ROUTE_FOUND;
      if (population > Random.getRandom(5)) {
        trafficOK = simData.trafficManager.makeTraffic(x, y, simData.blockMaps, TileUtils.isIndustrial);
        if (trafficOK === Traffic.NO_ROAD_FOUND) {
          lpValue = ZoneUtils.getLandPollutionValue(simData.blockMaps, x, y);
          degradeZone$2(map, x, y, simData.blockMaps, population, lpValue, zonePower);
          return;
        }
      }
      if (Random.getChance(7)) {
        var locationScore = trafficOK === Traffic.NO_ROAD_FOUND ? -3e3 : simData.blockMaps.cityCentreDistScoreMap.worldGet(x, y);
        var zoneScore = simData.valves.comValve + locationScore;
        if (!zonePower)
          zoneScore = -500;
        if (zonePower && zoneScore > -350 && zoneScore - 26380 > Random.getRandom16Signed()) {
          lpValue = ZoneUtils.getLandPollutionValue(simData.blockMaps, x, y);
          growZone$2(map, x, y, simData.blockMaps, population, lpValue, zonePower);
          return;
        }
        if (zoneScore < 350 && zoneScore + 26380 < Random.getRandom16Signed()) {
          lpValue = ZoneUtils.getLandPollutionValue(simData.blockMaps, x, y);
          degradeZone$2(map, x, y, simData.blockMaps, population, lpValue, zonePower);
        }
      }
    };
    Commercial = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(TileUtils.isCommercialZone, commercialFound);
      },
      getZonePopulation: getZonePopulation$2
    };
    getZonePopulation$1 = function(map, x, y, tileValue) {
      if (tileValue === INDCLR)
        return 0;
      return Math.floor((tileValue - IZB) / 9) % 4 + 1;
    };
    placeIndustrial = function(map, x, y, populationCategory, valueCategory, zonePower) {
      var centreTile = (valueCategory * 4 + populationCategory) * 9 + IZB;
      ZoneUtils.putZone(map, x, y, centreTile, zonePower);
    };
    growZone$1 = function(map, x, y, blockMaps, population, valueCategory, zonePower) {
      if (population < 4) {
        placeIndustrial(map, x, y, population, valueCategory, zonePower);
        ZoneUtils.incRateOfGrowth(blockMaps, x, y, 8);
      }
    };
    degradeZone$1 = function(map, x, y, blockMaps, populationCategory, valueCategory, zonePower) {
      if (populationCategory > 1)
        placeIndustrial(map, x, y, populationCategory - 2, valueCategory, zonePower);
      else
        ZoneUtils.putZone(map, x, y, INDCLR, zonePower);
      ZoneUtils.incRateOfGrowth(blockMaps, x, y, -8);
    };
    animated = [true, false, true, true, false, false, true, true];
    xDelta$7 = [-1, 0, 1, 0, 0, 0, 0, 1];
    yDelta$7 = [-1, 0, -1, -1, 0, 0, -1, -1];
    setAnimation = function(map, x, y, tileValue, isPowered) {
      if (tileValue < IZB)
        return;
      var i = tileValue - IZB >> 3;
      if (animated[i] && isPowered) {
        map.addTileFlags(x + xDelta$7[i], y + yDelta$7[i], ASCBIT);
      } else {
        map.addTileFlags(x + xDelta$7[i], y + yDelta$7[i], BNCNBIT);
        map.removeTileFlags(x + xDelta$7[i], y + yDelta$7[i], ANIMBIT);
      }
    };
    industrialFound = function(map, x, y, simData) {
      simData.census.indZonePop += 1;
      var tileValue = map.getTileValue(x, y);
      var population = getZonePopulation$1(map, x, y, tileValue);
      simData.census.indPop += population;
      var zonePower = map.getTile(x, y).isPowered();
      setAnimation(map, x, y, tileValue, zonePower);
      var trafficOK = Traffic.ROUTE_FOUND;
      if (population > Random.getRandom(5)) {
        trafficOK = simData.trafficManager.makeTraffic(x, y, simData.blockMaps, TileUtils.isResidential);
        if (trafficOK === Traffic.NO_ROAD_FOUND) {
          var newValue = Random.getRandom16() & 1;
          degradeZone$1(map, x, y, simData.blockMaps, population, newValue, zonePower);
          return;
        }
      }
      if (Random.getChance(7)) {
        var zoneScore = simData.valves.indValve + (trafficOK === Traffic.NO_ROAD_FOUND ? -1e3 : 0);
        if (!zonePower)
          zoneScore = -500;
        if (zoneScore > -350 && zoneScore - 26380 > Random.getRandom16Signed()) {
          growZone$1(map, x, y, simData.blockMaps, population, Random.getRandom16() & 1, zonePower);
          return;
        }
        if (zoneScore < 350 && zoneScore + 26380 < Random.getRandom16Signed())
          degradeZone$1(map, x, y, simData.blockMaps, population, Random.getRandom16() & 1, zonePower);
      }
    };
    Industrial = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(TileUtils.isIndustrialZone, industrialFound);
      },
      getZonePopulation: getZonePopulation$1
    };
    placeResidential = function(map, x, y, population, lpValue, zonePower) {
      var centreTile = (lpValue * 4 + population) * 9 + RZB;
      ZoneUtils.putZone(map, x, y, centreTile, zonePower);
    };
    getFreeZonePopulation = function(map, x, y, tileValue) {
      var count = 0;
      for (var xx = x - 1; xx <= x + 1; xx++) {
        for (var yy = y - 1; yy <= y + 1; yy++) {
          if (xx === x && yy === y)
            continue;
          tileValue = map.getTileValue(xx, yy);
          if (tileValue >= LHTHR && tileValue <= HHTHR)
            count += 1;
        }
      }
      return count;
    };
    getZonePopulation = function(map, x, y, tileValue) {
      if (tileValue instanceof Tile)
        tileValue = tile.getValue();
      if (tileValue === FREEZ)
        return getFreeZonePopulation(map, x, y, tileValue);
      var populationIndex = Math.floor((tileValue - RZB) / 9) % 4 + 1;
      return populationIndex * 8 + 16;
    };
    evalLot = function(map, x, y) {
      var xDelta2 = [0, 1, 0, -1];
      var yDelta2 = [-1, 0, 1, 0];
      if (!map.testBounds(x, y))
        return -1;
      var tileValue = map.getTileValue(x, y);
      if (tileValue < RESBASE || tileValue > RESBASE + 8)
        return -1;
      var score = 1;
      for (var i = 0; i < 4; i++) {
        var edgeX = x + xDelta2[i];
        var edgeY = y + yDelta2[i];
        if (edgeX < 0 || edgeX >= map.width || edgeY < 0 || edgeY >= map.height)
          continue;
        tileValue = map.getTileValue(edgeX, edgeY);
        if (tileValue !== DIRT && tileValue <= LASTROAD)
          score += 1;
      }
      return score;
    };
    buildHouse = function(map, x, y, lpValue) {
      var best = 0;
      var bestScore = 0;
      var xDelta2 = [0, -1, 0, 1, -1, 1, -1, 0, 1];
      var yDelta2 = [0, -1, -1, -1, 0, 0, 1, 1, 1];
      for (var i = 0; i < 9; i++) {
        var xx = x + xDelta2[i];
        var yy = y + yDelta2[i];
        var score = evalLot(map, xx, yy);
        if (score > bestScore) {
          bestScore = score;
          best = i;
        } else if (score === bestScore && Random.getChance(7)) {
          best = i;
        }
      }
      if (best > 0 && map.testBounds(x + xDelta2[best], y + yDelta2[best]))
        map.setTile(x + xDelta2[best], y + yDelta2[best], HOUSE + Random.getRandom(2) + lpValue * 3, BLBNCNBIT);
    };
    growZone = function(map, x, y, blockMaps, population, lpValue, zonePower) {
      var pollution = blockMaps.pollutionDensityMap.worldGet(x, y);
      if (pollution > 128)
        return;
      var tileValue = map.getTileValue(x, y);
      if (tileValue === FREEZ) {
        if (population < 8) {
          buildHouse(map, x, y, lpValue);
          ZoneUtils.incRateOfGrowth(blockMaps, x, y, 1);
        } else if (blockMaps.populationDensityMap.worldGet(x, y) > 64) {
          placeResidential(map, x, y, 0, lpValue, zonePower);
          ZoneUtils.incRateOfGrowth(blockMaps, x, y, 8);
        }
        return;
      }
      if (population < 40) {
        placeResidential(map, x, y, Math.floor(population / 8) - 1, lpValue, zonePower);
        ZoneUtils.incRateOfGrowth(blockMaps, x, y, 8);
      }
    };
    freeZone = [0, 3, 6, 1, 4, 7, 2, 5, 8];
    degradeZone = function(map, x, y, blockMaps, population, lpValue, zonePower) {
      var xx, yy;
      if (population === 0)
        return;
      if (population > 16) {
        placeResidential(map, x, y, Math.floor((population - 24) / 8), lpValue, zonePower);
        ZoneUtils.incRateOfGrowth(blockMaps, x, y, -8);
        return;
      }
      if (population === 16) {
        map.setTile(x, y, FREEZ, BLBNCNBIT | ZONEBIT);
        for (yy = y - 1; yy <= y + 1; yy++) {
          for (xx = x - 1; xx <= x + 1; xx++) {
            if (xx === x && yy === y)
              continue;
            map.setTile(x, y, LHTHR + lpValue + Random.getRandom(2), BLBNCNBIT);
          }
        }
        ZoneUtils.incRateOfGrowth(blockMaps, x, y, -8);
        return;
      }
      var i = 0;
      ZoneUtils.incRateOfGrowth(blockMaps, x, y, -1);
      for (xx = x - 1; xx <= x + 1; xx++) {
        for (yy = y - 1; yy <= y + 1; yy++, i++) {
          var currentValue = map.getTileValue(xx, yy);
          if (currentValue >= LHTHR && currentValue <= HHTHR) {
            map.setTile(xx, yy, freeZone[i] + RESBASE, BLBNCNBIT);
            return;
          }
        }
      }
    };
    evalResidential = function(blockMaps, x, y, traffic) {
      if (traffic === Traffic.NO_ROAD_FOUND)
        return -3e3;
      var landValue = blockMaps.landValueMap.worldGet(x, y);
      landValue -= blockMaps.pollutionDensityMap.worldGet(x, y);
      if (landValue < 0)
        landValue = 0;
      else
        landValue = Math.min(landValue * 32, 6e3);
      return landValue - 3e3;
    };
    residentialFound = function(map, x, y, simData) {
      var lpValue;
      simData.census.resZonePop += 1;
      var tileValue = map.getTileValue(x, y);
      var population = getZonePopulation(map, x, y, tileValue);
      simData.census.resPop += population;
      var zonePower = map.getTile(x, y).isPowered();
      var trafficOK = Traffic.ROUTE_FOUND;
      if (population > Random.getRandom(35)) {
        trafficOK = simData.trafficManager.makeTraffic(x, y, simData.blockMaps, TileUtils.isCommercial);
        if (trafficOK === Traffic.NO_ROAD_FOUND) {
          lpValue = ZoneUtils.getLandPollutionValue(simData.blockMaps, x, y);
          degradeZone(map, x, y, simData.blockMaps, population, lpValue, zonePower);
          return;
        }
      }
      if (tileValue === FREEZ || Random.getChance(7)) {
        var locationScore = evalResidential(simData.blockMaps, x, y, trafficOK);
        var zoneScore = simData.valves.resValve + locationScore;
        if (!zonePower)
          zoneScore = -500;
        if (zoneScore > -350 && zoneScore - 26380 > Random.getRandom16Signed()) {
          if (population === 0 && Random.getChance(3)) {
            makeHospital(map, x, y, simData, zonePower);
            return;
          }
          lpValue = ZoneUtils.getLandPollutionValue(simData.blockMaps, x, y);
          growZone(map, x, y, simData.blockMaps, population, lpValue, zonePower);
          return;
        }
        if (zoneScore < 350 && zoneScore + 26380 < Random.getRandom16Signed()) {
          lpValue = ZoneUtils.getLandPollutionValue(simData.blockMaps, x, y);
          degradeZone(map, x, y, simData.blockMaps, population, lpValue, zonePower);
        }
      }
    };
    makeHospital = function(map, x, y, simData, zonePower) {
      if (simData.census.needHospital > 0) {
        ZoneUtils.putZone(map, x, y, HOSPITAL, zonePower);
        simData.census.needHospital = 0;
        return;
      }
    };
    hospitalFound = function(map, x, y, simData) {
      simData.census.hospitalPop += 1;
      if (simData.census.needHospital === -1) {
        if (Random.getRandom(20) === 0)
          ZoneUtils.putZone(map, x, y, FREEZ, map.getTile(x, y).isPowered());
      }
    };
    Residential = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(TileUtils.isResidentialZone, residentialFound);
        mapScanner.addAction(HOSPITAL, hospitalFound);
        repairManager.addAction(HOSPITAL, 15, 3);
      },
      getZonePopulation
    };
    SMOOTH_NEIGHBOURS_THEN_BLOCK = 0;
    SMOOTH_ALL_THEN_CLAMP = 1;
    smoothMap = function(src, dest, smoothStyle) {
      for (var x = 0, width2 = src.width; x < width2; x++) {
        for (var y = 0, height2 = src.height; y < height2; y++) {
          var edges = 0;
          if (x > 0)
            edges += src.get(x - 1, y);
          if (x < src.width - 1)
            edges += src.get(x + 1, y);
          if (y > 0)
            edges += src.get(x, y - 1);
          if (y < src.height - 1)
            edges += src.get(x, y + 1);
          if (smoothStyle === SMOOTH_NEIGHBOURS_THEN_BLOCK) {
            edges = src.get(x, y) + Math.floor(edges / 4);
            dest.set(x, y, Math.floor(edges / 2));
          } else {
            edges = edges + src.get(x, y) >> 2;
            if (edges > 255)
              edges = 255;
            dest.set(x, y, edges);
          }
        }
      }
    };
    neutraliseRateOfGrowthMap = function(blockMaps) {
      var rateOfGrowthMap = blockMaps.rateOfGrowthMap;
      for (var x = 0, width2 = rateOfGrowthMap.width; x < width2; x++) {
        for (var y = 0, height2 = rateOfGrowthMap.height; y < height2; y++) {
          var rate = rateOfGrowthMap.get(x, y);
          if (rate === 0)
            continue;
          if (rate > 0)
            rate--;
          else
            rate++;
          rate = MiscUtils.clamp(rate, -200, 200);
          rateOfGrowthMap.set(x, y, rate);
        }
      }
    };
    neutraliseTrafficMap = function(blockMaps) {
      var trafficDensityMap = blockMaps.trafficDensityMap;
      for (var x = 0, width2 = trafficDensityMap.width; x < width2; x++) {
        for (var y = 0, height2 = trafficDensityMap.height; y < height2; y++) {
          var trafficDensity = trafficDensityMap.get(x, y);
          if (trafficDensity === 0)
            continue;
          if (trafficDensity <= 24)
            trafficDensity = 0;
          else if (trafficDensity > 200)
            trafficDensity = trafficDensity - 34;
          else
            trafficDensity = trafficDensity - 24;
          trafficDensityMap.set(x, y, trafficDensity);
        }
      }
    };
    getPollutionValue = function(tileValue) {
      if (tileValue < POWERBASE) {
        if (tileValue >= HTRFBASE)
          return 75;
        if (tileValue >= LTRFBASE)
          return 50;
        if (tileValue < ROADBASE) {
          if (tileValue > FIREBASE)
            return 90;
          if (tileValue >= RADTILE)
            return 255;
        }
        return 0;
      }
      if (tileValue <= LASTIND)
        return 0;
      if (tileValue < PORTBASE)
        return 50;
      if (tileValue <= LASTPOWERPLANT)
        return 100;
      return 0;
    };
    getCityCentreDistance = function(map, x, y) {
      var xDis, yDis;
      if (x > map.cityCentreX)
        xDis = x - map.cityCentreX;
      else
        xDis = map.cityCentreX - x;
      if (y > map.cityCentreY)
        yDis = y - map.cityCentreY;
      else
        yDis = map.cityCentreY - y;
      return Math.min(xDis + yDis, 64);
    };
    pollutionTerrainLandValueScan = function(map, census, blockMaps) {
      var tempMap1 = blockMaps.tempMap1;
      var tempMap2 = blockMaps.tempMap2;
      var tempMap3 = blockMaps.tempMap3;
      tempMap3.clear();
      var landValueMap = blockMaps.landValueMap;
      var terrainDensityMap = blockMaps.terrainDensityMap;
      var pollutionDensityMap = blockMaps.pollutionDensityMap;
      var crimeRateMap = blockMaps.crimeRateMap;
      var x, y, width2, height2;
      var totalLandValue = 0;
      var developedTileCount = 0;
      for (x = 0, width2 = landValueMap.width; x < width2; x++) {
        for (y = 0, height2 = landValueMap.height; y < height2; y++) {
          var pollutionLevel = 0;
          var developed = false;
          var worldX = x * 2;
          var worldY = y * 2;
          for (var mapX = worldX; mapX <= worldX + 1; mapX++) {
            for (var mapY = worldY; mapY <= worldY + 1; mapY++) {
              var tileValue = map.getTileValue(mapX, mapY);
              if (tileValue === DIRT)
                continue;
              if (tileValue < RUBBLE) {
                var terrainValue = tempMap3.worldGet(mapX, mapY);
                tempMap3.worldSet(mapX, mapY, terrainValue + 15);
                continue;
              }
              pollutionLevel += getPollutionValue(tileValue);
              if (tileValue >= ROADBASE)
                developed = true;
            }
          }
          pollutionLevel = Math.min(pollutionLevel, 255);
          tempMap1.set(x, y, pollutionLevel);
          if (developed) {
            var landValue = 34 - Math.floor(getCityCentreDistance(map, worldX, worldY) / 2);
            landValue = landValue << 2;
            landValue += terrainDensityMap.get(x >> 1, y >> 1);
            landValue -= pollutionDensityMap.get(x, y);
            if (crimeRateMap.get(x, y) > 190)
              landValue -= 20;
            landValue = MiscUtils.clamp(landValue, 1, 250);
            landValueMap.set(x, y, landValue);
            totalLandValue += landValue;
            developedTileCount++;
          } else {
            landValueMap.set(x, y, 0);
          }
        }
      }
      if (developedTileCount > 0)
        census.landValueAverage = Math.floor(totalLandValue / developedTileCount);
      else
        census.landValueAverage = 0;
      smoothMap(tempMap1, tempMap2, SMOOTH_ALL_THEN_CLAMP);
      smoothMap(tempMap2, tempMap1, SMOOTH_ALL_THEN_CLAMP);
      var maxPollution = 0;
      var pollutedTileCount = 0;
      var totalPollution = 0;
      for (x = 0, width2 = map.width; x < width2; x += pollutionDensityMap.blockSize) {
        for (y = 0, height2 = map.height; y < height2; y += pollutionDensityMap.blockSize) {
          var pollution = tempMap1.worldGet(x, y);
          pollutionDensityMap.worldSet(x, y, pollution);
          if (pollution !== 0) {
            pollutedTileCount++;
            totalPollution += pollution;
            if (pollution > maxPollution || pollution === maxPollution && Random.getChance(3)) {
              maxPollution = pollution;
              map.pollutionMaxX = x;
              map.pollutionMaxY = y;
            }
          }
        }
      }
      if (pollutedTileCount)
        census.pollutionAverage = Math.floor(totalPollution / pollutedTileCount);
      else
        census.pollutionAverage = 0;
      smoothMap(tempMap3, terrainDensityMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
    };
    crimeScan = function(census, blockMaps) {
      var policeStationMap = blockMaps.policeStationMap;
      var policeStationEffectMap = blockMaps.policeStationEffectMap;
      var crimeRateMap = blockMaps.crimeRateMap;
      var landValueMap = blockMaps.landValueMap;
      var populationDensityMap = blockMaps.populationDensityMap;
      smoothMap(policeStationMap, policeStationEffectMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
      smoothMap(policeStationEffectMap, policeStationMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
      smoothMap(policeStationMap, policeStationEffectMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
      var totalCrime = 0;
      var crimeZoneCount = 0;
      for (var x = 0, width2 = crimeRateMap.mapWidth, blockSize = crimeRateMap.blockSize; x < width2; x += blockSize) {
        for (var y = 0, height2 = crimeRateMap.mapHeight, b; y < height2; y += blockSize) {
          var value = landValueMap.worldGet(x, y);
          if (value > 0) {
            crimeZoneCount += 1;
            value = 128 - value;
            value += populationDensityMap.worldGet(x, y);
            value = Math.min(value, 300);
            value -= policeStationMap.worldGet(x, y);
            value = MiscUtils.clamp(value, 0, 250);
            crimeRateMap.worldSet(x, y, value);
            totalCrime += value;
          } else {
            crimeRateMap.worldSet(x, y, 0);
          }
        }
      }
      if (crimeZoneCount > 0)
        census.crimeAverage = Math.floor(totalCrime / crimeZoneCount);
      else
        census.crimeAverage = 0;
    };
    fillCityCentreDistScoreMap = function(map, blockMaps) {
      var cityCentreDistScoreMap = blockMaps.cityCentreDistScoreMap;
      for (var x = 0, width2 = cityCentreDistScoreMap.width; x < width2; x++) {
        for (var y = 0, height2 = cityCentreDistScoreMap.height; y < height2; y++) {
          var value = Math.floor(getCityCentreDistance(map, x * 8, y * 8) / 2);
          value = value * 4;
          value = 64 - value;
          cityCentreDistScoreMap.set(x, y, value);
        }
      }
    };
    getPopulationDensity = function(map, x, y, tile2) {
      if (tile2 < COMBASE)
        return Residential.getZonePopulation(map, x, y, tile2);
      if (tile2 < INDBASE)
        return Commercial.getZonePopulation(map, x, y, tile2) * 8;
      if (tile2 < PORTBASE)
        return Industrial.getZonePopulation(map, x, y, tile2) * 8;
      return 0;
    };
    populationDensityScan = function(map, blockMaps) {
      var tempMap1 = blockMaps.tempMap1;
      var tempMap2 = blockMaps.tempMap2;
      blockMaps.populationDensityMap;
      var xTot = 0;
      var yTot = 0;
      var zoneTotal = 0;
      tempMap1.clear();
      for (var x = 0, width2 = map.width; x < width2; x++) {
        for (var y = 0, height2 = map.height; y < height2; y++) {
          var tile2 = map.getTile(x, y);
          if (tile2.isZone()) {
            var tileValue = tile2.getValue();
            var population = getPopulationDensity(map, x, y, tileValue) * 8;
            population = Math.min(population, 254);
            tempMap1.worldSet(x, y, population);
            xTot += x;
            yTot += y;
            zoneTotal++;
          }
        }
      }
      smoothMap(tempMap1, tempMap2, SMOOTH_ALL_THEN_CLAMP);
      smoothMap(tempMap2, tempMap1, SMOOTH_ALL_THEN_CLAMP);
      smoothMap(tempMap1, tempMap2, SMOOTH_ALL_THEN_CLAMP);
      blockMaps.populationDensityMap.copyFrom(tempMap2, function(x2) {
        return x2 * 2;
      });
      fillCityCentreDistScoreMap(map, blockMaps);
      if (zoneTotal > 0) {
        map.cityCentreX = Math.floor(xTot / zoneTotal);
        map.cityCentreY = Math.floor(yTot / zoneTotal);
      } else {
        map.cityCentreX = Math.floor(map.width / 2);
        map.cityCentreY = Math.floor(map.height / 2);
      }
    };
    fireAnalysis = function(blockMaps) {
      var fireStationMap = blockMaps.fireStationMap;
      var fireStationEffectMap = blockMaps.fireStationEffectMap;
      smoothMap(fireStationMap, fireStationEffectMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
      smoothMap(fireStationEffectMap, fireStationMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
      smoothMap(fireStationMap, fireStationEffectMap, SMOOTH_NEIGHBOURS_THEN_BLOCK);
    };
    BlockMapUtils = {
      crimeScan,
      fireAnalysis,
      neutraliseRateOfGrowthMap,
      neutraliseTrafficMap,
      pollutionTerrainLandValueScan,
      populationDensityScan
    };
    policeMaintenanceCost = 100;
    fireMaintenanceCost = 100;
    roadMaintenanceCost = 1;
    railMaintenanceCost = 2;
    Budget = EventEmitter(function() {
      Object.defineProperties(this, {
        MAX_ROAD_EFFECT: MiscUtils.makeConstantDescriptor(32),
        MAX_POLICESTATION_EFFECT: MiscUtils.makeConstantDescriptor(1e3),
        MAX_FIRESTATION_EFFECT: MiscUtils.makeConstantDescriptor(1e3)
      });
      this.roadEffect = this.MAX_ROAD_EFFECT;
      this.policeEffect = this.MAX_POLICESTATION_EFFECT;
      this.fireEffect = this.MAX_FIRESTATION_EFFECT;
      this.totalFunds = 0;
      this.cityTax = 7;
      this.cashFlow = 0;
      this.taxFund = 0;
      this.roadMaintenanceBudget = 0;
      this.fireMaintenanceBudget = 0;
      this.policeMaintenanceBudget = 0;
      this.roadPercent = 1;
      this.firePercent = 1;
      this.policePercent = 1;
      this.roadSpend = 0;
      this.fireSpend = 0;
      this.policeSpend = 0;
      this.awaitingValues = false;
      this.autoBudget = true;
    });
    saveProps$2 = [
      "autoBudget",
      "totalFunds",
      "policePercent",
      "roadPercent",
      "firePercent",
      "roadSpend",
      "policeSpend",
      "fireSpend",
      "roadMaintenanceBudget",
      "policeMaintenanceBudget",
      "fireMaintenanceBudget",
      "cityTax",
      "roadEffect",
      "policeEffect",
      "fireEffect"
    ];
    Budget.prototype.save = function(saveData) {
      for (var i = 0, l = saveProps$2.length; i < l; i++)
        saveData[saveProps$2[i]] = this[saveProps$2[i]];
    };
    Budget.prototype.load = function(saveData) {
      for (var i = 0, l = saveProps$2.length; i < l; i++)
        this[saveProps$2[i]] = saveData[saveProps$2[i]];
      this._emitEvent(AUTOBUDGET_CHANGED, this.autoBudget);
      this._emitEvent(FUNDS_CHANGED, this.totalFunds);
    };
    Budget.prototype.setAutoBudget = function(value) {
      this.autoBudget = value;
      this._emitEvent(AUTOBUDGET_CHANGED, this.autoBudget);
    };
    RLevels = [0.7, 0.9, 1.2];
    FLevels = [1.4, 1.2, 0.8];
    Budget.prototype._calculateBestPercentages = function() {
      this.roadSpend = Math.round(this.roadMaintenanceBudget * this.roadPercent);
      this.fireSpend = Math.round(this.fireMaintenanceBudget * this.firePercent);
      this.policeSpend = Math.round(this.policeMaintenanceBudget * this.policePercent);
      var total = this.roadSpend + this.fireSpend + this.policeSpend;
      if (total === 0) {
        this.roadPercent = 1;
        this.firePercent = 1;
        this.policePercent = 1;
        return { road: 1, fire: 1, police: 1 };
      }
      var roadCost = 0;
      var fireCost = 0;
      var policeCost = 0;
      var cashRemaining = this.totalFunds + this.taxFund;
      if (cashRemaining >= this.roadSpend)
        roadCost = this.roadSpend;
      else
        roadCost = cashRemaining;
      cashRemaining -= roadCost;
      if (cashRemaining >= this.fireSpend)
        fireCost = this.fireSpend;
      else
        fireCost = cashRemaining;
      cashRemaining -= fireCost;
      if (cashRemaining >= this.policeSpend)
        policeCost = this.policeSpend;
      else
        policeCost = cashRemaining;
      cashRemaining -= policeCost;
      if (this.roadMaintenanceBudget > 0)
        this.roadPercent = (roadCost / this.roadMaintenanceBudget).toPrecision(2) - 0;
      else
        this.roadPercent = 1;
      if (this.fireMaintenanceBudget > 0)
        this.firePercent = (fireCost / this.fireMaintenanceBudget).toPrecision(2) - 0;
      else
        this.firePercent = 1;
      if (this.policeMaintenanceBudget > 0)
        this.policePercent = (policeCost / this.policeMaintenanceBudget).toPrecision(2) - 0;
      else
        this.policePercent = 1;
      return { road: roadCost, police: policeCost, fire: fireCost };
    };
    Budget.prototype.doBudgetWindow = function() {
      return this.doBudgetNow(true);
    };
    Budget.prototype.doBudgetNow = function(fromWindow) {
      var costs = this._calculateBestPercentages();
      if (!this.autoBudget && !fromWindow) {
        this.autoBudget = false;
        this.awaitingValues = true;
        this._emitEvent(BUDGET_NEEDED);
        return;
      }
      var roadCost = costs.road;
      var policeCost = costs.police;
      var fireCost = costs.fire;
      var totalCost = roadCost + policeCost + fireCost;
      var cashRemaining = this.totalFunds + this.taxFund - totalCost;
      if (cashRemaining > 0 && this.autoBudget || fromWindow) {
        this.awaitingValues = false;
        this.doBudgetSpend(roadCost, fireCost, policeCost);
        return;
      }
      this.setAutoBudget(false);
      this.awaitingValues = true;
      this._emitEvent(BUDGET_NEEDED);
      this._emitEvent(NO_MONEY);
    };
    Budget.prototype.doBudgetSpend = function(roadValue, fireValue, policeValue) {
      this.roadSpend = roadValue;
      this.fireSpend = fireValue;
      this.policeSpend = policeValue;
      var total = this.roadSpend + this.fireSpend + this.policeSpend;
      this.spend(-(this.taxFund - total));
      this.updateFundEffects();
    };
    Budget.prototype.updateFundEffects = function() {
      this.roadSpend = Math.round(this.roadMaintenanceBudget * this.roadPercent);
      this.fireSpend = Math.round(this.fireMaintenanceBudget * this.firePercent);
      this.policeSpend = Math.round(this.policeMaintenanceBudget * this.policePercent);
      this.roadEffect = this.MAX_ROAD_EFFECT;
      this.policeEffect = this.MAX_POLICESTATION_EFFECT;
      this.fireEffect = this.MAX_FIRESTATION_EFFECT;
      if (this.roadMaintenanceBudget > 0)
        this.roadEffect = Math.floor(this.roadEffect * this.roadSpend / this.roadMaintenanceBudget);
      if (this.fireMaintenanceBudget > 0)
        this.fireEffect = Math.floor(this.fireEffect * this.fireSpend / this.fireMaintenanceBudget);
      if (this.policeMaintenanceBudget > 0)
        this.policeEffect = Math.floor(this.policeEffect * this.policeSpend / this.policeMaintenanceBudget);
    };
    Budget.prototype.collectTax = function(gameLevel2, census) {
      this.cashFlow = 0;
      this.policeMaintenanceBudget = census.policeStationPop * policeMaintenanceCost;
      this.fireMaintenanceBudget = census.fireStationPop * fireMaintenanceCost;
      var roadCost = census.roadTotal * roadMaintenanceCost;
      var railCost = census.railTotal * railMaintenanceCost;
      this.roadMaintenanceBudget = Math.floor((roadCost + railCost) * RLevels[gameLevel2]);
      this.taxFund = Math.floor(Math.floor(census.totalPop * census.landValueAverage / 120) * this.cityTax * FLevels[gameLevel2]);
      if (census.totalPop > 0) {
        this.cashFlow = this.taxFund - (this.policeMaintenanceBudget + this.fireMaintenanceBudget + this.roadMaintenanceBudget);
        this.doBudgetNow(false);
      } else {
        this.roadEffect = this.MAX_ROAD_EFFECT;
        this.policeEffect = this.MAX_POLICESTATION_EFFECT;
        this.fireEffect = this.MAX_FIRESTATION_EFFECT;
      }
    };
    Budget.prototype.setTax = function(amount) {
      if (amount === this.cityTax)
        return;
      this.cityTax = amount;
    };
    Budget.prototype.setFunds = function(amount) {
      if (amount === this.totalFunds)
        return;
      this.totalFunds = Math.max(0, amount);
      this._emitEvent(FUNDS_CHANGED, this.totalFunds);
      if (this.totalFunds === 0)
        this._emitEvent(NO_MONEY);
    };
    Budget.prototype.spend = function(amount) {
      this.setFunds(this.totalFunds - amount);
    };
    Budget.prototype.shouldDegradeRoad = function() {
      return this.roadEffect < Math.floor(15 * this.MAX_ROAD_EFFECT / 16);
    };
    arrs = [
      "res",
      "com",
      "ind",
      "crime",
      "money",
      "pollution"
    ];
    rotate10Arrays = function() {
      for (var i = 0; i < arrs.length; i++) {
        var name10 = arrs[i] + "Hist10";
        this[name10].pop();
        this[name10].unshift(0);
      }
    };
    rotate120Arrays = function() {
      for (var i = 0; i < arrs.length; i++) {
        var name120 = arrs[i] + "Hist120";
        this[name120].pop();
        this[name120].unshift(0);
      }
    };
    Census.prototype.clearCensus = function() {
      this.poweredZoneCount = 0;
      this.unpoweredZoneCount = 0;
      this.firePop = 0;
      this.roadTotal = 0;
      this.railTotal = 0;
      this.resPop = 0;
      this.comPop = 0;
      this.indPop = 0;
      this.resZonePop = 0;
      this.comZonePop = 0;
      this.indZonePop = 0;
      this.hospitalPop = 0;
      this.churchPop = 0;
      this.policeStationPop = 0;
      this.fireStationPop = 0;
      this.stadiumPop = 0;
      this.coalPowerPop = 0;
      this.nuclearPowerPop = 0;
      this.seaportPop = 0;
      this.airportPop = 0;
    };
    saveProps$1 = [
      "resPop",
      "comPop",
      "indPop",
      "crimeRamp",
      "pollutionRamp",
      "landValueAverage",
      "pollutionAverage",
      "crimeAverage",
      "totalPop",
      "resHist10",
      "resHist120",
      "comHist10",
      "comHist120",
      "indHist10",
      "indHist120",
      "crimeHist10",
      "crimeHist120",
      "moneyHist10",
      "moneyHist120",
      "pollutionHist10",
      "pollutionHist120"
    ];
    Census.prototype.save = function(saveData) {
      for (var i = 0, l = saveProps$1.length; i < l; i++)
        saveData[saveProps$1[i]] = this[saveProps$1[i]];
    };
    Census.prototype.load = function(saveData) {
      for (var i = 0, l = saveProps$1.length; i < l; i++)
        this[saveProps$1[i]] = saveData[saveProps$1[i]];
    };
    Census.prototype.take10Census = function(budget2) {
      var resPopDenom = 8;
      rotate10Arrays.call(this);
      this.resHist10[0] = Math.floor(this.resPop / resPopDenom);
      this.comHist10[0] = this.comPop;
      this.indHist10[0] = this.indPop;
      this.crimeRamp += Math.floor((this.crimeAverage - this.crimeRamp) / 4);
      this.crimeHist10[0] = Math.min(this.crimeRamp, 255);
      this.pollutionRamp += Math.floor((this.pollutionAverage - this.pollutionRamp) / 4);
      this.pollutionHist10[0] = Math.min(this.pollutionRamp, 255);
      var x = Math.floor(budget2.cashFlow / 20) + 128;
      this.moneyHist10[0] = MiscUtils.clamp(x, 0, 255);
      this.resPop >> 8;
      if (this.hospitalPop < this.resPopScaled)
        this.needHospital = 1;
      else if (this.hospitalPop > this.resPopScaled)
        this.needHospital = -1;
      else if (this.hospitalPop === this.resPopScaled)
        this.needHospital = 0;
      this.changed = true;
    };
    Census.prototype.take120Census = function() {
      rotate120Arrays.call(this);
      var resPopDenom = 8;
      this.resHist120[0] = Math.floor(this.resPop / resPopDenom);
      this.comHist120[0] = this.comPop;
      this.indHist120[0] = this.indPop;
      this.crimeHist120[0] = this.crimeHist10[0];
      this.pollutionHist120[0] = this.pollutionHist10[0];
      this.moneyHist120[0] = this.moneyHist10[0];
      this.changed = true;
    };
    DisasterManager = EventEmitter(function(map, spriteManager, gameLevel2) {
      this._map = map;
      this._spriteManager = spriteManager;
      this._gameLevel = gameLevel2;
      this._floodCount = 0;
      this.disastersEnabled = false;
    });
    DisChance = [479, 239, 59];
    DisasterManager.prototype.doDisasters = function(census) {
      if (this._floodCount)
        this._floodCount--;
      if (!this.disastersEnabled)
        return;
      if (!Random.getRandom(DisChance[this._gameLevel])) {
        switch (Random.getRandom(8)) {
          case 0:
          case 1:
            this.setFire();
            break;
          case 2:
          case 3:
            this.makeFlood();
            break;
          case 4:
            break;
          case 5:
            this._spriteManager.makeTornado();
            break;
          case 6:
            break;
          case 7:
          case 8:
            if (census.pollutionAverage > 60)
              this._spriteManager.makeMonster();
            break;
        }
      }
    };
    DisasterManager.prototype.scenarioDisaster = function() {
    };
    DisasterManager.prototype.makeMeltdown = function() {
      for (var x = 0; x < this._map.width - 1; x++) {
        for (var y = 0; y < this._map.height - 1; y++) {
          if (this._map.getTileValue(x, y) === NUCLEAR) {
            this.doMeltdown(x, y);
            return;
          }
        }
      }
    };
    vulnerable = function(tile2) {
      var tileValue = tile2.getValue();
      if (tileValue < RESBASE || tileValue > LASTZONE || tile2.isZone())
        return false;
      return true;
    };
    DisasterManager.prototype.makeEarthquake = function() {
      var strength = Random.getRandom(700) + 300;
      this.doEarthquake(strength);
      this._emitEvent(EARTHQUAKE, { x: this._map.cityCenterX, y: this._map.cityCenterY });
      for (var i = 0; i < strength; i++) {
        var x = Random.getRandom(this._map.width - 1);
        var y = Random.getRandom(this._map.height - 1);
        if (!this._map.testBounds(x, y))
          continue;
        if (vulnerable(this._map.getTile(x, y))) {
          if ((i & 3) !== 0)
            this._map.setTo(x, y, TileUtils.randomRubble());
          else
            this._map.setTo(x, y, TileUtils.randomFire());
        }
      }
    };
    DisasterManager.prototype.setFire = function(times, zonesOnly) {
      times = times || 1;
      zonesOnly = zonesOnly || false;
      for (var i = 0; i < times; i++) {
        var x = Random.getRandom(this._map.width - 1);
        var y = Random.getRandom(this._map.height - 1);
        if (!this._map.testBounds(x, y))
          continue;
        var tile2 = this._map.getTile(x, y);
        if (!tile2.isZone()) {
          tile2 = tile2.getValue();
          var lowerLimit = zonesOnly ? LHTHR : TREEBASE;
          if (tile2 > lowerLimit && tile2 < LASTZONE) {
            this._map.setTo(x, y, TileUtils.randomFire());
            this._emitEvent(FIRE_REPORTED, { showable: true, x, y });
            return;
          }
        }
      }
    };
    DisasterManager.prototype.makeCrash = function() {
      var s2 = this._spriteManager.getSprite(SPRITE_AIRPLANE);
      if (s2 !== null) {
        s2.explodeSprite();
        return;
      }
      var x = Random.getRandom(this._map.width - 1);
      var y = Random.getRandom(this._map.height - 1);
      this._spriteManager.generatePlane(x, y);
      s2 = this._spriteManager.getSprite(SPRITE_AIRPLANE);
      s2.explodeSprite();
    };
    DisasterManager.prototype.makeFire = function() {
      this.setFire(40, false);
    };
    Dx = [0, 1, 0, -1];
    Dy = [-1, 0, 1, 0];
    DisasterManager.prototype.makeFlood = function() {
      for (var i = 0; i < 300; i++) {
        var x = Random.getRandom(this._map.width - 1);
        var y = Random.getRandom(this._map.height - 1);
        if (!this._map.testBounds(x, y))
          continue;
        var tileValue = this._map.getTileValue(x, y);
        if (tileValue > CHANNEL && tileValue <= WATER_HIGH) {
          for (var j = 0; j < 4; j++) {
            var xx = x + Dx[j];
            var yy = y + Dy[j];
            if (!this._map.testBounds(xx, yy))
              continue;
            var tile2 = this._map.getTile(xx, yy);
            tileValue = tile2.getValue();
            if (tile2 === DIRT || tile2.isBulldozable() && tile2.isCombustible) {
              this._map.setTile(xx, yy, FLOOD, 0);
              this._floodCount = 30;
              this._emitEvent(FLOODING_REPORTED, { showable: true, x: xx, y: yy });
              return;
            }
          }
        }
      }
    };
    DisasterManager.prototype.doFlood = function(x, y, blockMaps) {
      if (this._floodCount > 0) {
        for (var i = 0; i < 4; i++) {
          if (Random.getChance(7)) {
            var xx = x + Dx[i];
            var yy = y + Dy[i];
            if (this._map.testBounds(xx, yy)) {
              var tile2 = this._map.getTile(xx, yy);
              var tileValue = tile2.getValue();
              if (tile2.isCombustible() || tileValue === DIRT || tileValue >= WOODS5 && tileValue < FLOOD) {
                if (tile2.isZone())
                  ZoneUtils.fireZone(this._map, xx, yy, blockMaps);
                this._map.setTile(xx, yy, FLOOD + Random.getRandom(2), 0);
              }
            }
          }
        }
      } else {
        if (Random.getChance(15))
          this._map.setTile(x, y, DIRT, 0);
      }
    };
    DisasterManager.prototype.doMeltdown = function(x, y) {
      this._spriteManager.makeExplosion(x - 1, y - 1);
      this._spriteManager.makeExplosion(x - 1, y + 2);
      this._spriteManager.makeExplosion(x + 2, y - 1);
      this._spriteManager.makeExplosion(x + 2, y + 2);
      var dY, dX;
      for (dX = x - 1; dX < x + 3; dX++) {
        for (dY = y - 1; dY < y + 3; dY++) {
          this._map.setTo(dX, dY, TileUtils.randomFire());
        }
      }
      for (var i = 0; i < 200; i++) {
        dX = x - 20 + Random.getRandom(40);
        dY = y - 15 + Random.getRandom(30);
        if (!this._map.testBounds(dX, dY))
          continue;
        var tile2 = this._map.getTile(dX, dY);
        if (tile2.isZone())
          continue;
        if (tile2.isCombustible() || tile2.getValue() === DIRT)
          this._map.setTile(dX, dY, RADTILE, 0);
      }
      this._emitEvent(NUCLEAR_MELTDOWN, { showable: true, x, y });
    };
    handleService = function(censusStat, budgetEffect, blockMap) {
      return function(map, x, y, simData) {
        simData.census[censusStat] += 1;
        var effect = simData.budget[budgetEffect];
        var isPowered = map.getTile(x, y).isPowered();
        if (!isPowered)
          effect = Math.floor(effect / 2);
        var pos2 = new Position(x, y);
        var connectedToRoads = simData.trafficManager.findPerimeterRoad(pos2);
        if (!connectedToRoads)
          effect = Math.floor(effect / 2);
        var currentEffect = simData.blockMaps[blockMap].worldGet(x, y);
        currentEffect += effect;
        simData.blockMaps[blockMap].worldSet(x, y, currentEffect);
      };
    };
    policeStationFound = handleService("policeStationPop", "policeEffect", "policeStationMap");
    fireStationFound = handleService("fireStationPop", "fireEffect", "fireStationMap");
    EmergencyServices = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(POLICESTATION, policeStationFound);
        mapScanner.addAction(FIRESTATION, fireStationFound);
      }
    };
    tile$1 = new Tile();
    isCallable$1 = function(f) {
      return typeof f === "function";
    };
    MapScanner.prototype.addAction = function(criterion, action) {
      this._actions.push({ criterion, action });
    };
    MapScanner.prototype.mapScan = function(startX, maxX, simData) {
      for (var y = 0; y < this._map.height; y++) {
        for (var x = startX; x < maxX; x++) {
          this._map.getTile(x, y, tile$1);
          var tileValue = tile$1.getValue();
          if (tileValue < FLOOD)
            continue;
          if (tile$1.isConductive())
            simData.powerManager.setTilePower(x, y);
          if (tile$1.isZone()) {
            simData.repairManager.checkTile(x, y, simData.cityTime);
            var powered = tile$1.isPowered();
            if (powered)
              simData.census.poweredZoneCount += 1;
            else
              simData.census.unpoweredZoneCount += 1;
          }
          for (var i = 0, l = this._actions.length; i < l; i++) {
            var current = this._actions[i];
            var callable = isCallable$1(current.criterion);
            if (callable && current.criterion.call(null, tile$1)) {
              current.action.call(null, this._map, x, y, simData);
              break;
            } else if (!callable && current.criterion === tileValue) {
              current.action.call(null, this._map, x, y, simData);
              break;
            }
          }
        }
      }
    };
    xDelta$6 = [-1, 0, 1, 0];
    yDelta$6 = [0, -1, 0, 1];
    fireFound = function(map, x, y, simData) {
      simData.census.firePop += 1;
      if ((Random.getRandom16() & 3) !== 0)
        return;
      for (var i = 0; i < 4; i++) {
        if (Random.getChance(7)) {
          var xTem = x + xDelta$6[i];
          var yTem = y + yDelta$6[i];
          if (map.testBounds(xTem, yTem)) {
            var tile2 = map.getTile(x, y);
            if (!tile2.isCombustible())
              continue;
            if (tile2.isZone()) {
              ZoneUtils.fireZone(map, x, y, simData.blockMaps);
              if (tile2.getValue() > IZB)
                simData.spriteManager.makeExplosionAt(x, y);
            }
            map.setTo(tileUtils.randomFire());
          }
        }
      }
      var rate = 10;
      i = simData.blockMaps.fireStationEffectMap.worldGet(x, y);
      if (i > 100)
        rate = 1;
      else if (i > 20)
        rate = 2;
      else if (i > 0)
        rate = 3;
      if (Random.getRandom(rate) === 0)
        map.setTo(x, y, TileUtils.randomRubble());
    };
    radiationFound = function(map, x, y, simData) {
      if (Random.getChance(4095))
        map.setTile(x, y, DIRT, 0);
    };
    floodFound = function(map, x, y, simData) {
      simData.disasterManager.doFlood(x, y, simData.blockMaps);
    };
    MiscTiles = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(TileUtils.isFire, fireFound, true);
        mapScanner.addAction(RADTILE, radiationFound, true);
        mapScanner.addAction(TileUtils.isFlood, floodFound, true);
      }
    };
    COAL_POWER_STRENGTH = 700;
    NUCLEAR_POWER_STRENGTH = 2e3;
    PowerManager = EventEmitter(function(map) {
      this._map = map;
      this._powerStack = [];
      this.powerGridMap = new BlockMap(this._map.width, this._map.height, 1);
    });
    PowerManager.prototype.setTilePower = function(x, y) {
      var tile2 = this._map.getTile(x, y);
      var tileValue = tile2.getValue();
      if (tileValue === NUCLEAR || tileValue === POWERPLANT || this.powerGridMap.worldGet(x, y) > 0) {
        tile2.addFlags(POWERBIT);
        return;
      }
      tile2.removeFlags(POWERBIT);
    };
    PowerManager.prototype.clearPowerStack = function() {
      this._powerStackPointer = 0;
      this._powerStack = [];
    };
    PowerManager.prototype.testForConductive = function(pos2, testDir) {
      var movedPos = Position.move(pos2, testDir);
      if (this._map.isPositionInBounds(movedPos)) {
        if (this._map.getTile(movedPos.x, movedPos.y).isConductive()) {
          if (this.powerGridMap.worldGet(movedPos.x, movedPos.y) === 0)
            return true;
        }
      }
      return false;
    };
    PowerManager.prototype.doPowerScan = function(census) {
      this.powerGridMap.clear();
      var maxPower = census.coalPowerPop * COAL_POWER_STRENGTH + census.nuclearPowerPop * NUCLEAR_POWER_STRENGTH;
      var powerConsumption = 0;
      while (this._powerStack.length > 0) {
        var pos2 = this._powerStack.pop();
        var anyDir = void 0;
        var conNum;
        do {
          powerConsumption++;
          if (powerConsumption > maxPower) {
            this._emitEvent(NOT_ENOUGH_POWER);
            return;
          }
          if (anyDir)
            pos2 = Position.move(pos2, anyDir);
          this.powerGridMap.worldSet(pos2.x, pos2.y, 1);
          conNum = 0;
          forEachCardinalDirection((dir) => {
            if (conNum >= 2) {
              return;
            }
            if (this.testForConductive(pos2, dir)) {
              conNum++;
              anyDir = dir;
            }
          });
          if (conNum > 1)
            this._powerStack.push(new Position(pos2.x, pos2.y));
        } while (conNum);
      }
    };
    PowerManager.prototype.coalPowerFound = function(map, x, y, simData) {
      simData.census.coalPowerPop += 1;
      this._powerStack.push(new Position(x, y));
      var dX = [-1, 2, 1, 2];
      var dY = [-1, -1, 0, 0];
      for (var i = 0; i < 4; i++)
        map.addTileFlags(x + dX[i], y + dY[i], ANIMBIT);
    };
    meltdownTable = [3e4, 2e4, 1e4];
    PowerManager.prototype.nuclearPowerFound = function(map, x, y, simData) {
      if (simData.disasterManager.disastersEnabled && Random.getRandom(meltdownTable[simData.gameLevel]) === 0) {
        simData.disasterManager.doMeltdown(x, y);
        return;
      }
      simData.census.nuclearPowerPop += 1;
      this._powerStack.push(new Position(x, y));
      for (var i = 0; i < 4; i++)
        map.addTileFlags(x, y, ANIMBIT | CONDBIT | POWERBIT | BURNBIT);
    };
    PowerManager.prototype.registerHandlers = function(mapScanner, repairManager) {
      mapScanner.addAction(POWERPLANT, this.coalPowerFound.bind(this));
      mapScanner.addAction(NUCLEAR, this.nuclearPowerFound.bind(this));
      repairManager.addAction(POWERPLANT, 7, 4);
      repairManager.addAction(NUCLEAR, 7, 4);
    };
    isCallable = function(f) {
      return typeof f === "function";
    };
    RepairManager.prototype.addAction = function(criterion, period, zoneSize) {
      this._actions.push({ criterion, period, zoneSize });
    };
    RepairManager.prototype.repairZone = function(x, y, zoneSize) {
      var centre = this._map.getTileValue(x, y);
      var tileValue = centre - zoneSize - 2;
      for (var yy = -1; yy < zoneSize - 1; yy++) {
        for (var xx = -1; xx < zoneSize - 1; xx++) {
          tileValue++;
          var current = this._map.getTile(x + xx, y + yy);
          if (current.isZone() || current.isAnimated())
            continue;
          var currentValue = current.getValue();
          if (currentValue < RUBBLE || currentValue >= ROADBASE)
            this._map.setTile(x + xx, y + yy, tileValue, CONDBIT | BURNBIT);
        }
      }
    };
    RepairManager.prototype.checkTile = function(x, y, cityTime) {
      for (var i = 0, l = this._actions.length; i < l; i++) {
        var current = this._actions[i];
        var period = current.period;
        if ((cityTime & period) !== 0)
          continue;
        var tile2 = this._map.getTile(x, y);
        var tileValue = tile2.getValue();
        var callable = isCallable(current.criterion);
        if (callable && current.criterion.call(null, tile2))
          this.repairZone(x, y, current.zoneSize);
        else if (!callable && current.criterion === tileValue)
          this.repairZone(x, y, current.zoneSize);
      }
    };
    openBridge = function(map, origX, origY, xDelta2, yDelta2, oldTiles, newTiles) {
      for (var i = 0; i < 7; i++) {
        var x = origX + xDelta2[i];
        var y = origY + yDelta2[i];
        if (map.testBounds(x, y)) {
          if (map.getTileValue(x, y) === (oldTiles[i] & BIT_MASK))
            map.setTileValue(x, y, newTiles[i]);
        }
      }
    };
    closeBridge = function(map, origX, origY, xDelta2, yDelta2, oldTiles, newTiles) {
      for (var i = 0; i < 7; i++) {
        var x = origX + xDelta2[i];
        var y = origY + yDelta2[i];
        if (map.testBounds(x, y)) {
          var tileValue = map.getTileValue(x, y);
          if (tileValue === CHANNEL || (tileValue & 15) === (oldTiles[i] & 15))
            map.setTileValue(x, y, newTiles[i]);
        }
      }
    };
    verticalDeltaX = [0, 1, 0, 0, 0, 0, 1];
    verticalDeltaY = [-2, -2, -1, 0, 1, 2, 2];
    openVertical = [
      VBRDG0 | BULLBIT,
      VBRDG1 | BULLBIT,
      RIVER,
      BRWV | BULLBIT,
      RIVER,
      VBRDG2 | BULLBIT,
      VBRDG3 | BULLBIT
    ];
    closeVertical = [
      VBRIDGE | BULLBIT,
      RIVER,
      VBRIDGE | BULLBIT,
      VBRIDGE | BULLBIT,
      VBRIDGE | BULLBIT,
      VBRIDGE | BULLBIT,
      RIVER
    ];
    horizontalDeltaX = [-2, 2, -2, -1, 0, 1, 2];
    horizontalDeltaY = [-1, -1, 0, 0, 0, 0, 0];
    openHorizontal = [
      HBRDG1 | BULLBIT,
      HBRDG3 | BULLBIT,
      HBRDG0 | BULLBIT,
      RIVER,
      BRWH | BULLBIT,
      RIVER,
      HBRDG2 | BULLBIT
    ];
    closeHorizontal = [
      RIVER,
      RIVER,
      HBRIDGE | BULLBIT,
      HBRIDGE | BULLBIT,
      HBRIDGE | BULLBIT,
      HBRIDGE | BULLBIT,
      HBRIDGE | BULLBIT
    ];
    doBridge = function(map, x, y, currentTile, simData) {
      if (currentTile === BRWV) {
        if (Random.getChance(3) && simData.spriteManager.getBoatDistance(x, y) > 340)
          closeBridge(map, x, y, verticalDeltaX, verticalDeltaY, openVertical, closeVertical);
        return true;
      }
      if (currentTile == BRWH) {
        if (Random.getChance(3) && simData.spriteManager.getBoatDistance(x, y) > 340)
          closeBridge(map, x, y, horizontalDeltaX, horizontalDeltaY, openHorizontal, closeHorizontal);
        return true;
      }
      if (simData.spriteManager.getBoatDistance(x, y) < 300 || Random.getChance(7)) {
        if (currentTile & 1) {
          if (x < map.width - 1) {
            if (map.getTileValue(x + 1, y) === CHANNEL) {
              openBridge(map, x, y, verticalDeltaX, verticalDeltaY, closeVertical, openVertical);
              return true;
            }
          }
          return false;
        } else {
          if (y > 0) {
            if (map.getTileValue(x, y - 1) === CHANNEL) {
              openBridge(map, x, y, horizontalDeltaX, horizontalDeltaY, closeHorizontal, openHorizontal);
              return true;
            }
          }
        }
      }
      return false;
    };
    densityTable = [ROADBASE, LTRFBASE, HTRFBASE];
    roadFound = function(map, x, y, simData) {
      simData.census.roadTotal += 1;
      var currentTile = map.getTile(x, y);
      var tileValue = currentTile.getValue();
      if (simData.budget.shouldDegradeRoad()) {
        if (Random.getChance(511)) {
          currentTile = map.getTile(x, y);
          if (!currentTile.isConductive()) {
            if (simData.budget.roadEffect < (Random.getRandom16() & 31)) {
              currentTile.getValue();
              if ((tileValue & 15) < 2 || (tileValue & 15) === 15)
                map.setTile(x, y, RIVER, 0);
              else
                map.setTo(x, y, TileUtils.randomRubble());
              return;
            }
          }
        }
      }
      if (!currentTile.isCombustible()) {
        simData.census.roadTotal += 4;
        if (doBridge(map, x, y, tileValue, simData))
          return;
      }
      var density = 0;
      if (tileValue < LTRFBASE) {
        density = 0;
      } else if (tileValue < HTRFBASE) {
        density = 1;
      } else {
        simData.census.roadTotal += 1;
        density = 2;
      }
      var currentDensity = simData.blockMaps.trafficDensityMap.worldGet(x, y) >> 6;
      if (currentDensity > 1)
        currentDensity -= 1;
      if (currentDensity === density)
        return;
      var newValue = (tileValue - ROADBASE & 15) + densityTable[currentDensity];
      var newFlags = currentTile.getFlags() & ~ANIMBIT;
      if (currentDensity > 0)
        newFlags |= ANIMBIT;
      map.setTo(x, y, new Tile(newValue, newFlags));
    };
    Road = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(TileUtils.isRoad, roadFound);
      }
    };
    init2 = function(type, map, spriteManager, x, y) {
      this.type = type;
      this.map = map;
      this.spriteManager = spriteManager;
      var pixX = x;
      var pixY = y;
      var worldX = x >> 4;
      var worldY = y >> 4;
      Object.defineProperty(this, "x", {
        configurable: false,
        enumerable: true,
        set: function(val) {
          pixX = val;
          worldX = val >> 4;
        },
        get: function() {
          return pixX;
        }
      });
      Object.defineProperty(this, "y", {
        configurable: false,
        enumerable: true,
        set: function(val) {
          pixY = val;
          worldY = val >> 4;
        },
        get: function() {
          return pixY;
        }
      });
      Object.defineProperty(this, "worldX", {
        configurable: false,
        enumerable: true,
        set: function(val) {
          worldX = val;
          pixX = val << 4;
        },
        get: function() {
          return worldX;
        }
      });
      Object.defineProperty(this, "worldY", {
        configurable: false,
        enumerable: true,
        set: function(val) {
          worldY = val;
          pixY = val << 4;
        },
        get: function() {
          return worldY;
        }
      });
      this.origX = 0;
      this.origY = 0;
      this.destX = 0;
      this.destY = 0;
      this.count = 0;
      this.soundCount = 0;
      this.dir = 0;
      this.newDir = 0;
      this.step = 0;
      this.flag = 0;
      this.turn = 0;
      this.accel = 0;
      this.speed = 100;
    };
    getFileName = function() {
      return ["obj", this.type, "-", this.frame - 1].join("");
    };
    spriteNotInBounds = function() {
      var x = this.worldX;
      var y = this.worldY;
      return x < 0 || y < 0 || x >= this.map.width || y >= this.map.height;
    };
    base2 = {
      init: init2,
      getFileName,
      spriteNotInBounds
    };
    BaseSprite = function(spriteConstructor) {
      spriteConstructor.prototype = Object.create(base2);
      EventEmitter(spriteConstructor);
    };
    BaseSprite(AirplaneSprite);
    xDelta$5 = [0, 0, 6, 8, 6, 0, -6, -8, -6, 8, 8, 8];
    yDelta$5 = [0, -8, -6, 0, 6, 8, 6, 0, -6, 0, 0, 0];
    AirplaneSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      var frame = this.frame;
      if (spriteCycle % 5 === 0) {
        if (frame > 8) {
          frame--;
          if (frame < 9) {
            frame = 3;
          }
          this.frame = frame;
        } else {
          var d = SpriteUtils.getDir(this.x, this.y, this.destX, this.destY);
          frame = SpriteUtils.turnTo(frame, d);
          this.frame = frame;
        }
      }
      var absDist = SpriteUtils.absoluteDistance(this.x, this.y, this.destX, this.destY);
      if (absDist < 50) {
        this.destX = Random.getRandom(SpriteUtils.worldToPix(this.map.width)) + 8;
        this.destY = Random.getRandom(SpriteUtils.worldToPix(this.map.height)) + 8;
      }
      if (disasterManager.enableDisasters) {
        var explode = false;
        var spriteList = this.spriteManager.getSpriteList();
        for (var i = 0; i < spriteList.length; i++) {
          var s2 = spriteList[i];
          if (s2.frame === 0 || s2 === this)
            continue;
          if ((s2.type === SPRITE_HELICOPTER || s2.type === SPRITE_AIRPLANE) && SpriteUtils.checkSpriteCollision(this, s2)) {
            s2.explodeSprite();
            explode = true;
          }
        }
        if (explode)
          this.explodeSprite();
      }
      this.x += xDelta$5[frame];
      this.y += yDelta$5[frame];
      if (this.spriteNotInBounds())
        this.frame = 0;
    };
    AirplaneSprite.prototype.explodeSprite = function() {
      this.frame = 0;
      this.spriteManager.makeExplosionAt(this.x, this.y);
      this._emitEvent(PLANE_CRASHED, { showable: true, x: this.worldX, y: this.worldY });
    };
    Object.defineProperties(AirplaneSprite, {
      ID: MiscUtils.makeConstantDescriptor(3),
      width: MiscUtils.makeConstantDescriptor(48),
      frames: MiscUtils.makeConstantDescriptor(11)
    });
    BaseSprite(BoatSprite);
    oppositeAndUnderwater = function(tileValue, oldDir, newDir) {
      var opposite = oldDir + 4;
      if (opposite > 8)
        opposite -= 8;
      if (newDir != opposite)
        return false;
      if (tileValue == POWERBASE || tileValue == POWERBASE + 1 || tileValue == RAILBASE || tileValue == RAILBASE + 1)
        return true;
      return false;
    };
    tileDeltaX$1 = [0, 0, 1, 1, 1, 0, -1, -1, -1];
    tileDeltaY$1 = [0, -1, -1, 0, 1, 1, 1, 0, -1];
    xDelta$4 = [0, 0, 2, 2, 2, 0, -2, -2, -2];
    yDelta$4 = [0, -2, -2, 0, 2, 2, 2, 0, -2];
    tileWhiteList = [
      RIVER,
      CHANNEL,
      POWERBASE,
      POWERBASE + 1,
      RAILBASE,
      RAILBASE + 1,
      BRWH,
      BRWV
    ];
    CANTMOVE$1 = 10;
    BoatSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      var tile2 = RIVER;
      var frame, x, y;
      if (this.soundCount > 0)
        this.soundCount--;
      if (this.soundCount === 0) {
        if ((Random.getRandom16() & 3) === 1) {
          this._emitEvent(SOUND_HONKHONK);
        }
        this.soundCount = 200;
      }
      if (this.count > 0)
        this.count--;
      if (this.count === 0) {
        this.count = 9;
        if (this.frame !== this.newDir) {
          this.frame = SpriteUtils.turnTo(this.frame, this.newDir);
          return;
        }
        var startDir = Random.getRandom16() & 7;
        for (var dir = startDir; dir < startDir + 8; dir++) {
          frame = (dir & 7) + 1;
          if (frame === this.dir)
            continue;
          x = this.worldX + tileDeltaX$1[frame];
          y = this.worldY + tileDeltaY$1[frame];
          if (this.map.testBounds(x, y)) {
            tile2 = this.map.getTileValue(x, y);
            if (tile2 === CHANNEL || tile2 === BRWH || tile2 === BRWV || oppositeAndUnderwater(tile2, this.dir, frame)) {
              this.newDir = frame;
              this.frame = SpriteUtils.turnTo(this.frame, this.newDir);
              this.dir = frame + 4;
              if (this.dir > 8)
                this.dir -= 8;
              break;
            }
          }
        }
        if (dir === startDir + 8) {
          this.dir = CANTMOVE$1;
          this.newDir = (Random.getRandom16() & 7) + 1;
        }
      } else {
        frame = this.frame;
        if (frame === this.newDir) {
          this.x += xDelta$4[frame];
          this.y += yDelta$4[frame];
        }
      }
      if (this.spriteNotInBounds()) {
        this.frame = 0;
        return;
      }
      for (var i = 0; i < 8; i++) {
        if (tile2 === tileWhiteList[i]) {
          break;
        }
        if (i === 7) {
          this.explodeSprite();
          SpriteUtils.destroyMapTile(this.spriteManager, this.map, blockMaps, this.x, this.y);
        }
      }
    };
    BoatSprite.prototype.explodeSprite = function() {
      this.frame = 0;
      this.spriteManager.makeExplosionAt(this.x, this.y);
      this._emitEvent(SHIP_CRASHED, { showable: true, x: this.worldX, y: this.worldY });
    };
    Object.defineProperties(BoatSprite, {
      ID: MiscUtils.makeConstantDescriptor(4),
      width: MiscUtils.makeConstantDescriptor(48),
      frames: MiscUtils.makeConstantDescriptor(8)
    });
    BaseSprite(CopterSprite);
    xDelta$3 = [0, 0, 3, 5, 3, 0, -3, -5, -3];
    yDelta$3 = [0, -5, -3, 0, 3, 5, 3, 0, -3];
    CopterSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      if (this.soundCount > 0)
        this.soundCount--;
      if (this.count > 0)
        this.count--;
      if (this.count === 0) {
        var s2 = this.spriteManager.getSprite(SPRITE_MONSTER);
        if (s2 !== null) {
          this.destX = s2.x;
          this.destY = s2.y;
        } else {
          s2 = this.spriteManager.getSprite(SPRITE_TORNADO);
          if (s2 !== null) {
            this.destX = s2.x;
            this.destY = s2.y;
          } else {
            this.destX = this.origX;
            this.destY = this.origY;
          }
        }
        var absDist = SpriteUtils.absoluteDistance(this.x, this.y, this.origX, this.origY);
        if (absDist < 30) {
          this.frame = 0;
          return;
        }
      }
      if (this.soundCount === 0) {
        var x = this.worldX;
        var y = this.worldY;
        if (x >= 0 && x < this.map.width && y >= 0 && y < this.map.height) {
          if (blockMaps.trafficDensityMap.worldGet(x, y) > 170 && (Random.getRandom16() & 7) === 0) {
            this._emitEvent(HEAVY_TRAFFIC, { x, y });
            this._emitEvent(SOUND_HEAVY_TRAFFIC);
            this.soundCount = 200;
          }
        }
      }
      var frame = this.frame;
      if ((spriteCycle & 3) === 0) {
        var dir = SpriteUtils.getDir(this.x, this.y, this.destX, this.destY);
        frame = SpriteUtils.turnTo(frame, dir);
        this.frame = frame;
      }
      this.x += xDelta$3[frame];
      this.y += yDelta$3[frame];
    };
    CopterSprite.prototype.explodeSprite = function() {
      this.frame = 0;
      this.spriteManager.makeExplosionAt(this.x, this.y);
      this._emitEvent(HELICOPTER_CRASHED, { x: this.worldX, y: this.worldY });
    };
    Object.defineProperties(CopterSprite, {
      ID: MiscUtils.makeConstantDescriptor(2),
      width: MiscUtils.makeConstantDescriptor(32),
      frames: MiscUtils.makeConstantDescriptor(8)
    });
    BaseSprite(ExplosionSprite);
    ExplosionSprite.prototype.startFire = function(x, y) {
      x = this.worldX;
      y = this.worldY;
      if (!this.map.testBounds(x, y))
        return;
      var tile2 = this.map.getTile(x, y);
      var tileValue = tile2.getValue();
      if (!tile2.isCombustible() && tileValue !== DIRT)
        return;
      if (tile2.isZone())
        return;
      this.map.setTo(x, y, TileUtils.randomFire());
    };
    ExplosionSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      if ((spriteCycle & 1) === 0) {
        if (this.frame === 1) {
          var explosionX = this.worldX;
          var explosionY = this.worldY;
          this._emitEvent(SOUND_EXPLOSIONHIGH);
          this._emitEvent(EXPLOSION_REPORTED, { x: explosionX, y: explosionY });
        }
        this.frame++;
      }
      if (this.frame > 6) {
        this.frame = 0;
        this.startFire(this.x, this.y);
        this.startFire(this.x - 16, this.y - 16);
        this.startFire(this.x + 16, this.y + 16);
        this.startFire(this.x - 16, this.y + 16);
        this.startFire(this.x + 16, this.y + 16);
      }
    };
    Object.defineProperties(ExplosionSprite, {
      ID: MiscUtils.makeConstantDescriptor(7),
      width: MiscUtils.makeConstantDescriptor(48),
      frames: MiscUtils.makeConstantDescriptor(6)
    });
    BaseSprite(MonsterSprite);
    xDelta$2 = [2, 2, -2, -2, 0];
    yDelta$2 = [-2, 2, 2, -2, 0];
    cardinals1 = [0, 1, 2, 3];
    cardinals2 = [1, 2, 3, 0];
    diagonals1 = [2, 5, 8, 11];
    diagonals2 = [11, 2, 5, 8];
    MonsterSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      if (this.soundCount > 0)
        this.soundCount--;
      var currentDir = Math.floor((this.frame - 1) / 3);
      var frame, dir;
      if (currentDir < 4) {
        frame = (this.frame - 1) % 3;
        if (frame === 2)
          this.step = 0;
        if (frame === 0)
          this.step = 1;
        if (this.step)
          frame++;
        else
          frame--;
        var absDist = SpriteUtils.absoluteDistance(this.x, this.y, this.destX, this.destY);
        if (absDist < 60) {
          if (this.flag === 0) {
            this.flag = 1;
            this.destX = this.origX;
            this.destY = this.origY;
          } else {
            this.frame = 0;
            this._emitEvent(SPRITE_DYING);
            return;
          }
        }
        dir = SpriteUtils.getDir(this.x, this.y, this.destX, this.destY);
        dir = Math.floor((dir - 1) / 2);
        if (dir !== currentDir && Random.getChance(10)) {
          if (Random.getRandom16() & 1)
            frame = cardinals1[currentDir];
          else
            frame = cardinals2[currentDir];
          currentDir = 4;
          if (!this.soundCount) {
            this._emitEvent(SOUND_MONSTER);
            this.soundCount = 50 + Random.getRandom(100);
          }
        }
      } else {
        currentDir = 4;
        dir = this.frame;
        frame = dir - 13 & 3;
        if (!(Random.getRandom16() & 3)) {
          if (Random.getRandom16() & 1)
            frame = diagonals1[frame];
          else
            frame = diagonals2[frame];
          currentDir = Math.floor((frame - 1) / 3);
          frame = (frame - 1) % 3;
        }
      }
      frame = currentDir * 3 + frame + 1;
      if (frame > 16)
        frame = 16;
      this.frame = frame;
      this.x += xDelta$2[currentDir];
      this.y += yDelta$2[currentDir];
      if (this.count > 0)
        this.count--;
      var tileValue = SpriteUtils.getTileValue(this.map, this.x, this.y);
      if (tileValue === -1 || tileValue === RIVER && this.count < 500)
        this.frame = 0;
      if (tileValue === DIRT || tileValue > WATER_HIGH)
        this._seenLand = true;
      var spriteList = this.spriteManager.getSpriteList();
      for (var i = 0; i < spriteList.length; i++) {
        var s2 = spriteList[i];
        if (s2.frame !== 0 && (s2.type === SPRITE_AIRPLANE || s2.type === SPRITE_HELICOPTER || s2.type === SPRITE_SHIP || s2.type === SPRITE_TRAIN) && SpriteUtils.checkSpriteCollision(this, s2))
          s2.explodeSprite();
      }
      if (this.frame === 0)
        this._emitEvent(SPRITE_DYING);
      SpriteUtils.destroyMapTile(this.spriteManager, this.map, blockMaps, this.x, this.y);
      this._emitEvent(SPRITE_MOVED, { x: this.worldX, y: this.worldY });
    };
    Object.defineProperties(MonsterSprite, {
      ID: MiscUtils.makeConstantDescriptor(5),
      width: MiscUtils.makeConstantDescriptor(48),
      frames: MiscUtils.makeConstantDescriptor(16)
    });
    BaseSprite(TornadoSprite);
    xDelta$1 = [2, 3, 2, 0, -2, -3];
    yDelta$1 = [-2, 0, 2, 3, 2, 0];
    TornadoSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      var frame = this.frame;
      if (frame === 2) {
        if (this.flag)
          frame = 3;
        else
          frame = 1;
      } else {
        if (frame === 1)
          this.flag = 1;
        else
          this.flag = 0;
        frame = 2;
      }
      if (this.count > 0)
        this.count--;
      this.frame = frame;
      var spriteList = this.spriteManager.getSpriteList();
      for (var i = 0; i < spriteList.length; i++) {
        var s2 = spriteList[i];
        if (s2.frame !== 0 && (s2.type === SpriteConstants.SPRITE_AIRPLANE || s2.type === SpriteConstants.SPRITE_HELICOPTER || s2.type === SpriteConstants.SPRITE_SHIP || s2.type === SpriteConstants.SPRITE_TRAIN) && SpriteUtils.checkSpriteCollision(this, s2)) {
          s2.explodeSprite();
        }
      }
      frame = Random.getRandom(5);
      this.x += xDelta$1[frame];
      this.y += yDelta$1[frame];
      if (this.spriteNotInBounds())
        this.frame = 0;
      if (this.count !== 0 && Random.getRandom(500) === 0)
        this.frame = 0;
      if (this.frame === 0)
        this._emitEvent(SPRITE_DYING);
      SpriteUtils.destroyMapTile(this.spriteManager, this.map, blockMaps, this.x, this.y);
      this._emitEvent(SPRITE_MOVED, { x: this.worldX, y: this.worldY });
    };
    Object.defineProperties(TornadoSprite, {
      ID: MiscUtils.makeConstantDescriptor(6),
      width: MiscUtils.makeConstantDescriptor(48),
      frames: MiscUtils.makeConstantDescriptor(3)
    });
    BaseSprite(TrainSprite);
    tileDeltaX = [0, 16, 0, -16];
    tileDeltaY = [-16, 0, 16, 0];
    xDelta = [0, 4, 0, -4, 0];
    yDelta = [-4, 0, 4, 0, 0];
    TrainPic2 = [1, 2, 1, 2, 5];
    NWSE = 3;
    NESW = 4;
    UNDERWATER = 5;
    WEST = 3;
    CANTMOVE = 4;
    TrainSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
      if (this.frame === NWSE || this.frame === NESW)
        this.frame = TrainPic2[this.dir];
      this.x += xDelta[this.dir];
      this.y += yDelta[this.dir];
      if ((spriteCycle & 3) === 0) {
        var dir = Random.getRandom16() & 3;
        for (var i = dir; i < dir + 4; i++) {
          var dir2 = i & 3;
          if (this.dir !== CANTMOVE) {
            if (dir2 === (this.dir + 2 & 3))
              continue;
          }
          var tileValue = SpriteUtils.getTileValue(this.map, this.x + tileDeltaX[dir2], this.y + tileDeltaY[dir2]);
          if (tileValue >= RAILBASE && tileValue <= LASTRAIL || tileValue === RAILVPOWERH || tileValue === RAILHPOWERV) {
            if (this.dir !== dir2 && this.dir !== CANTMOVE) {
              if (this.dir + dir2 === WEST)
                this.frame = NWSE;
              else
                this.frame = NESW;
            } else {
              this.frame = TrainPic2[dir2];
            }
            if (tileValue === HRAIL || tileValue === VRAIL)
              this.frame = UNDERWATER;
            this.dir = dir2;
            return;
          }
        }
        if (this.dir === CANTMOVE) {
          this.frame = 0;
          return;
        }
        this.dir = CANTMOVE;
      }
    };
    TrainSprite.prototype.explodeSprite = function() {
      this.frame = 0;
      this.spriteManager.makeExplosionAt(this.x, this.y);
      this._emitEvent(TRAIN_CRASHED, { showable: true, x: this.worldX, y: this.worldY });
    };
    Object.defineProperties(TrainSprite, {
      ID: MiscUtils.makeConstantDescriptor(1),
      width: MiscUtils.makeConstantDescriptor(32),
      frames: MiscUtils.makeConstantDescriptor(5)
    });
    SpriteManager = EventEmitter(function(map) {
      this.spriteList = [];
      this.map = map;
      this.spriteCycle = 0;
    });
    SpriteManager.prototype.getSprite = function(type) {
      var filteredList = this.spriteList.filter(function(s2) {
        return s2.frame !== 0 && s2.type === type;
      });
      if (filteredList.length === 0)
        return null;
      return filteredList[0];
    };
    SpriteManager.prototype.getSpriteList = function() {
      return this.spriteList.slice();
    };
    SpriteManager.prototype.getSpritesInView = function(startX, startY, pixelWidth, pixelHeight) {
      startX = SpriteUtils.worldToPix(startX);
      startY = SpriteUtils.worldToPix(startY);
      var lastX = startX + pixelWidth;
      var lastY = startY + pixelHeight;
      return this.spriteList.filter(function(s2) {
        var spriteLeft = s2.x + s2.xOffset;
        var spriteTop = s2.y + s2.yOffset;
        var spriteRight = s2.x + s2.xOffset + s2.width;
        var spriteBottom = s2.y + s2.yOffset + s2.width;
        var leftInBounds = spriteLeft >= startX && spriteLeft < lastX;
        var rightInBounds = spriteRight >= startX && spriteRight < lastX;
        var topInBounds = spriteTop >= startY && spriteTop < lastY;
        var bottomInBounds = spriteBottom >= startY && spriteBottom < lastY;
        return (leftInBounds || rightInBounds) && (topInBounds || bottomInBounds);
      });
    };
    SpriteManager.prototype.moveObjects = function(simData) {
      var disasterManager = simData.disasterManager;
      var blockMaps = simData.blockMaps;
      this.spriteCycle += 1;
      var list = this.spriteList.slice();
      for (var i = 0, l = list.length; i < l; i++) {
        var sprite = list[i];
        if (sprite.frame === 0)
          continue;
        sprite.move(this.spriteCycle, disasterManager, blockMaps);
      }
      this.pruneDeadSprites();
    };
    SpriteManager.prototype.makeSprite = function(type, x, y) {
      var newSprite = new constructors[type](this.map, this, x, y);
      for (var i = 0, l = CRASHES.length; i < l; i++)
        newSprite.addEventListener(CRASHES[i], MiscUtils.reflectEvent.bind(this, CRASHES[i]));
      if (type == SPRITE_HELICOPTER)
        newSprite.addEventListener(HEAVY_TRAFFIC, MiscUtils.reflectEvent.bind(this, HEAVY_TRAFFIC));
      this.spriteList.push(newSprite);
      return newSprite;
    };
    SpriteManager.prototype.makeTornado = function() {
      var sprite = this.getSprite(SPRITE_TORNADO);
      if (sprite !== null) {
        sprite.count = 200;
        this._emitEvent(TORNADO_SIGHTED, { trackable: true, x: sprite.worldX, y: sprite.worldY, sprite });
        return;
      }
      var x = Random.getRandom(SpriteUtils.worldToPix(this.map.width) - 800) + 400;
      var y = Random.getRandom(SpriteUtils.worldToPix(this.map.height) - 200) + 100;
      sprite = this.makeSprite(SPRITE_TORNADO, x, y);
      this._emitEvent(TORNADO_SIGHTED, { trackable: true, x: sprite.worldX, y: sprite.worldY, sprite });
    };
    SpriteManager.prototype.makeExplosion = function(x, y) {
      if (this.map.testBounds(x, y))
        this.makeExplosionAt(SpriteUtils.worldToPix(x), SpriteUtils.worldToPix(y));
    };
    SpriteManager.prototype.makeExplosionAt = function(x, y) {
      this.makeSprite(SPRITE_EXPLOSION, x, y);
    };
    SpriteManager.prototype.generatePlane = function(x, y) {
      if (this.getSprite(SPRITE_AIRPLANE) !== null)
        return;
      this.makeSprite(SPRITE_AIRPLANE, SpriteUtils.worldToPix(x), SpriteUtils.worldToPix(y));
    };
    SpriteManager.prototype.generateTrain = function(census, x, y) {
      if (census.totalPop > 10 && this.getSprite(SPRITE_TRAIN) === null && Random.getRandom(25) === 0)
        this.makeSprite(SPRITE_TRAIN, SpriteUtils.worldToPix(x) + 8, SpriteUtils.worldToPix(y) + 8);
    };
    SpriteManager.prototype.generateShip = function() {
      var x, y;
      if (Random.getChance(3)) {
        for (x = 4; x < this.map.width - 2; x++) {
          if (this.map.getTileValue(x, 0) === CHANNEL) {
            this.makeShipHere(x, 0);
            return;
          }
        }
      }
      if (Random.getChance(3)) {
        for (y = 1; y < this.map.height - 2; y++) {
          if (this.map.getTileValue(0, y) === CHANNEL) {
            this.makeShipHere(0, y);
            return;
          }
        }
      }
      if (Random.getChance(3)) {
        for (x = 4; x < this.map.width - 2; x++) {
          if (this.map.getTileValue(x, this.map.height - 1) === CHANNEL) {
            this.makeShipHere(x, this.map.height - 1);
            return;
          }
        }
      }
      if (Random.getChance(3)) {
        for (y = 1; y < this.map.height - 2; y++) {
          if (this.map.getTileValue(this.map.width - 1, y) === CHANNEL) {
            this.makeShipHere(this.map.width - 1, y);
            return;
          }
        }
      }
    };
    SpriteManager.prototype.getBoatDistance = function(x, y) {
      var dist = 99999;
      var pixelX = SpriteUtils.worldToPix(x) + 8;
      var pixelY = SpriteUtils.worldToPix(y) + 8;
      for (var i = 0, l = this.spriteList.length; i < l; i++) {
        var sprite = this.spriteList[i];
        if (sprite.type === SPRITE_SHIP && sprite.frame !== 0) {
          var sprDist = Math.abs(sprite.x - pixelX) + Math.abs(sprite.y - pixelY);
          dist = Math.min(dist, sprDist);
        }
      }
      return dist;
    };
    SpriteManager.prototype.makeShipHere = function(x, y) {
      this.makeSprite(SPRITE_SHIP, SpriteUtils.worldToPix(x), SpriteUtils.worldToPix(y));
    };
    SpriteManager.prototype.generateCopter = function(x, y) {
      if (this.getSprite(SPRITE_HELICOPTER) !== null)
        return;
      this.makeSprite(SPRITE_HELICOPTER, SpriteUtils.worldToPix(x), SpriteUtils.worldToPix(y));
    };
    SpriteManager.prototype.makeMonsterAt = function(x, y) {
      var sprite = this.makeSprite(SPRITE_MONSTER, SpriteUtils.worldToPix(x), SpriteUtils.worldToPix(y));
      this._emitEvent(MONSTER_SIGHTED, { trackable: true, x, y, sprite });
    };
    SpriteManager.prototype.makeMonster = function() {
      var sprite = this.getSprite(SPRITE_MONSTER);
      if (sprite !== null) {
        sprite.soundCount = 1;
        sprite.count = 1e3;
        sprite.destX = SpriteUtils.worldToPix(this.map.pollutionMaxX);
        sprite.destY = SpriteUtils.worldToPix(this.map.pollutionMaxY);
      }
      var done = 0;
      for (var i = 0; i < 300; i++) {
        var x = Random.getRandom(this.map.width - 20) + 10;
        var y = Random.getRandom(this.map.height - 10) + 5;
        var tile2 = this.map.getTile(x, y);
        if (tile2.getValue() === RIVER) {
          this.makeMonsterAt(x, y);
          done = 1;
          break;
        }
      }
      if (done === 0)
        this.makeMonsterAt(60, 50);
    };
    SpriteManager.prototype.pruneDeadSprites = function(type) {
      this.spriteList = this.spriteList.filter(function(s2) {
        return s2.frame !== 0;
      });
    };
    constructors = {};
    constructors[SPRITE_TRAIN] = TrainSprite;
    constructors[SPRITE_SHIP] = BoatSprite;
    constructors[SPRITE_MONSTER] = MonsterSprite;
    constructors[SPRITE_HELICOPTER] = CopterSprite;
    constructors[SPRITE_AIRPLANE] = AirplaneSprite;
    constructors[SPRITE_TORNADO] = TornadoSprite;
    constructors[SPRITE_EXPLOSION] = ExplosionSprite;
    emptyStadiumFound = function(map, x, y, simData) {
      simData.census.stadiumPop += 1;
      if (map.getTile(x, y).isPowered()) {
        if ((simData.cityTime + x + y & 31) === 0) {
          map.putZone(x, y, FULLSTADIUM, 4);
          map.addTileFlags(x, y, POWERBIT);
          map.setTile(x + 1, y, FOOTBALLGAME1, ANIMBIT);
          map.setTile(x + 1, y + 1, FOOTBALLGAME2, ANIMBIT);
        }
      }
    };
    fullStadiumFound = function(map, x, y, simData) {
      simData.census.stadiumPop += 1;
      var isPowered = map.getTile(x, y).isPowered();
      if ((simData.cityTime + x + y & 7) === 0) {
        map.putZone(x, y, STADIUM, 4);
        if (isPowered)
          map.addTileFlags(x, y, POWERBIT);
      }
    };
    Stadia = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(STADIUM, emptyStadiumFound);
        mapScanner.addAction(FULLSTADIUM, fullStadiumFound);
        repairManager.addAction(STADIUM, 15, 4);
      }
    };
    railFound = function(map, x, y, simData) {
      simData.census.railTotal += 1;
      simData.spriteManager.generateTrain(simData.census, x, y);
      if (simData.budget.shouldDegradeRoad()) {
        if (Random.getChance(511)) {
          var currentTile = map.getTile(x, y);
          if (currentTile.isConductive())
            return;
          if (simData.budget.roadEffect < (Random.getRandom16() & 31)) {
            var mapValue = currentTile.getValue();
            if (mapValue < RAILBASE + 2)
              map.setTile(x, y, RIVER, 0);
            else
              map.setTo(x, y, TileUtils.randomRubble());
          }
        }
      }
    };
    airportFound = function(map, x, y, simData) {
      simData.census.airportPop += 1;
      var tile2 = map.getTile(x, y);
      if (tile2.isPowered()) {
        if (map.getTileValue(x + 1, y - 1) === RADAR)
          map.setTile(x + 1, y - 1, RADAR0, CONDBIT | ANIMBIT | BURNBIT);
        if (Random.getRandom(5) === 0) {
          simData.spriteManager.generatePlane(x, y);
          return;
        }
        if (Random.getRandom(12) === 0)
          simData.spriteManager.generateCopter(x, y);
      } else {
        map.setTile(x + 1, y - 1, RADAR, CONDBIT | BURNBIT);
      }
    };
    portFound = function(map, x, y, simData) {
      simData.census.seaportPop += 1;
      var tile2 = map.getTile(x, y);
      if (tile2.isPowered() && simData.spriteManager.getSprite(SPRITE_SHIP) === null)
        simData.spriteManager.generateShip();
    };
    Transport = {
      registerHandlers: function(mapScanner, repairManager) {
        mapScanner.addAction(TileUtils.isRail, railFound);
        mapScanner.addAction(PORT, portFound);
        mapScanner.addAction(AIRPORT, airportFound);
        repairManager.addAction(PORT, 15, 4);
        repairManager.addAction(AIRPORT, 7, 6);
      }
    };
    Valves = EventEmitter(function() {
      this.resValve = 0;
      this.comValve = 0;
      this.indValve = 0;
      this.resCap = false;
      this.comCap = false;
      this.indCap = false;
    });
    RES_VALVE_RANGE = 2e3;
    COM_VALVE_RANGE = 1500;
    IND_VALVE_RANGE = 1500;
    taxTable = [
      200,
      150,
      120,
      100,
      80,
      50,
      30,
      0,
      -10,
      -40,
      -100,
      -150,
      -200,
      -250,
      -300,
      -350,
      -400,
      -450,
      -500,
      -550,
      -600
    ];
    extMarketParamTable = [1.2, 1.1, 0.98];
    Valves.prototype.save = function(saveData) {
      saveData.resValve = this.resValve;
      saveData.comValve = this.comValve;
      saveData.indValve = this.indValve;
    };
    Valves.prototype.load = function(saveData) {
      this.resValve = saveData.resValve;
      this.comValve = saveData.comValve;
      this.indValve = saveData.indValve;
      this._emitEvent(VALVES_UPDATED);
    };
    Valves.prototype.setValves = function(gameLevel2, census, budget2) {
      var resPopDenom = 8;
      var birthRate = 0.02;
      var labourBaseMax = 1.3;
      var internalMarketDenom = 3.7;
      var projectedIndPopMin = 5;
      var resRatioDefault = 1.3;
      var resRatioMax = 2;
      var comRatioMax = 2;
      var indRatioMax = 2;
      var taxMax = 20;
      var taxTableScale = 600;
      var employment, labourBase;
      var normalizedResPop = census.resPop / resPopDenom;
      census.totalPop = Math.round(normalizedResPop + census.comPop + census.indPop);
      if (census.resPop > 0)
        employment = (census.comHist10[1] + census.indHist10[1]) / normalizedResPop;
      else
        employment = 1;
      var migration = normalizedResPop * (employment - 1);
      var births = normalizedResPop * birthRate;
      var projectedResPop = normalizedResPop + migration + births;
      labourBase = census.comHist10[1] + census.indHist10[1];
      if (labourBase > 0)
        labourBase = census.resHist10[1] / labourBase;
      else
        labourBase = 1;
      labourBase = MiscUtils.clamp(labourBase, 0, labourBaseMax);
      var internalMarket = (normalizedResPop + census.comPop + census.indPop) / internalMarketDenom;
      var projectedComPop = internalMarket * labourBase;
      var projectedIndPop = census.indPop * labourBase * extMarketParamTable[gameLevel2];
      projectedIndPop = Math.max(projectedIndPop, projectedIndPopMin);
      var resRatio;
      if (normalizedResPop > 0)
        resRatio = projectedResPop / normalizedResPop;
      else
        resRatio = resRatioDefault;
      var comRatio;
      if (census.comPop > 0)
        comRatio = projectedComPop / census.comPop;
      else
        comRatio = projectedComPop;
      var indRatio;
      if (census.indPop > 0)
        indRatio = projectedIndPop / census.indPop;
      else
        indRatio = projectedIndPop;
      resRatio = Math.min(resRatio, resRatioMax);
      comRatio = Math.min(comRatio, comRatioMax);
      indRatio = Math.min(indRatio, indRatioMax);
      var z = Math.min(budget2.cityTax + gameLevel2, taxMax);
      resRatio = (resRatio - 1) * taxTableScale + taxTable[z];
      comRatio = (comRatio - 1) * taxTableScale + taxTable[z];
      indRatio = (indRatio - 1) * taxTableScale + taxTable[z];
      this.resValve = MiscUtils.clamp(this.resValve + Math.round(resRatio), -RES_VALVE_RANGE, RES_VALVE_RANGE);
      this.comValve = MiscUtils.clamp(this.comValve + Math.round(comRatio), -COM_VALVE_RANGE, COM_VALVE_RANGE);
      this.indValve = MiscUtils.clamp(this.indValve + Math.round(indRatio), -IND_VALVE_RANGE, IND_VALVE_RANGE);
      if (this.resCap && this.resValve > 0)
        this.resValve = 0;
      if (this.comCap && this.comValve > 0)
        this.comValve = 0;
      if (this.indCap && this.indValve > 0)
        this.indValve = 0;
      this._emitEvent(VALVES_UPDATED);
    };
    Simulation = EventEmitter(function(gameMap, gameLevel2, speed, savedGame) {
      this._map = gameMap;
      this.setLevel(gameLevel2);
      this.setSpeed(speed);
      this._phaseCycle = 0;
      this._simCycle = 0;
      this._cityTime = 0;
      this._cityPopLast = 0;
      this._messageLast = void 0;
      this._startingYear = 1900;
      this._cityYearLast = -1;
      this._cityMonthLast = -1;
      this._lastPowerMessage = null;
      this.evaluation = new Evaluation(this._gameLevel);
      this._valves = new Valves();
      this.budget = new Budget();
      this._census = new Census();
      this._powerManager = new PowerManager(this._map);
      this.spriteManager = new SpriteManager(this._map);
      this._mapScanner = new MapScanner(this._map);
      this._repairManager = new RepairManager(this._map);
      this._traffic = new Traffic(this._map, this.spriteManager);
      this.disasterManager = new DisasterManager(this._map, this.spriteManager, this._gameLevel);
      this.blockMaps = {
        cityCentreDistScoreMap: new BlockMap(this._map.width, this._map.height, 8),
        crimeRateMap: new BlockMap(this._map.width, this._map.height, 2),
        fireStationMap: new BlockMap(this._map.width, this._map.height, 8),
        fireStationEffectMap: new BlockMap(this._map.width, this._map.height, 8),
        landValueMap: new BlockMap(this._map.width, this._map.height, 2),
        policeStationMap: new BlockMap(this._map.width, this._map.height, 8),
        policeStationEffectMap: new BlockMap(this._map.width, this._map.height, 8),
        pollutionDensityMap: new BlockMap(this._map.width, this._map.height, 2),
        populationDensityMap: new BlockMap(this._map.width, this._map.height, 2),
        rateOfGrowthMap: new BlockMap(this._map.width, this._map.height, 8),
        terrainDensityMap: new BlockMap(this._map.width, this._map.height, 4),
        trafficDensityMap: new BlockMap(this._map.width, this._map.height, 2),
        tempMap1: new BlockMap(this._map.width, this._map.height, 2),
        tempMap2: new BlockMap(this._map.width, this._map.height, 2),
        tempMap3: new BlockMap(this._map.width, this._map.height, 4)
      };
      this._clearCensus();
      if (savedGame) {
        this.load(savedGame);
      } else {
        this.budget.setFunds(2e4);
        this._census.totalPop = 1;
      }
      this.init();
    });
    Simulation.prototype.setLevel = function(l) {
      if (l !== Simulation.LEVEL_EASY && l !== Simulation.LEVEL_MED && l !== Simulation.LEVEL_HARD)
        throw new Error("Invalid level!");
      this._gameLevel = l;
    };
    Simulation.prototype.setSpeed = function(s2) {
      if (s2 !== Simulation.SPEED_PAUSED && s2 !== Simulation.SPEED_SLOW && s2 !== Simulation.SPEED_MED && s2 !== Simulation.SPEED_FAST)
        throw new Error("Invalid speed!");
      this._speed = s2;
    };
    Simulation.prototype.isPaused = function() {
      return this._speed === Simulation.SPEED_PAUSED;
    };
    saveProps = ["_cityTime", "_speed", "_gameLevel"];
    Simulation.prototype.save = function(saveData) {
      for (var i = 0, l = saveProps.length; i < l; i++)
        saveData[saveProps[i]] = this[saveProps[i]];
      this._map.save(saveData);
      this.evaluation.save(saveData);
      this._valves.save(saveData);
      this.budget.save(saveData);
      this._census.save(saveData);
    };
    Simulation.prototype.load = function(saveData) {
      for (var i = 0, l = saveProps.length; i < l; i++)
        this[saveProps[i]] = saveData[saveProps[i]];
      this._map.load(saveData);
      this.evaluation.load(saveData);
      this._valves.load(saveData);
      this.budget.load(saveData);
      this._census.load(saveData);
    };
    Simulation.prototype.simTick = function() {
      this._simFrame();
      this._updateTime();
    };
    Simulation.prototype._simFrame = function() {
      if (this.budget.awaitingValues)
        return;
      var threshold = 100;
      switch (this._speed) {
        case Simulation.SPEED_PAUSED:
          return;
        case Simulation.SPEED_SLOW:
          break;
        case Simulation.SPEED_MED:
          threshold = 50;
          break;
        case Simulation.SPEED_FAST:
          threshold = 10;
          break;
        default:
          console.warn("Unexpected speed (" + this._speed + "): defaulting to slow");
      }
      var d = new Date();
      if (d - this._lastTickTime < threshold)
        return;
      var simData = this._constructSimData();
      this._simulate(simData);
      this._lastTickTime = new Date();
    };
    Simulation.prototype._clearCensus = function() {
      this._census.clearCensus();
      this._powerManager.clearPowerStack();
      this.blockMaps.fireStationMap.clear();
      this.blockMaps.policeStationMap.clear();
    };
    Simulation.prototype._constructSimData = function() {
      return {
        blockMaps: this.blockMaps,
        budget: this.budget,
        census: this._census,
        cityTime: this._cityTime,
        disasterManager: this.disasterManager,
        gameLevel: this._gameLevel,
        repairManager: this._repairManager,
        powerManager: this._powerManager,
        simulator: this,
        spriteManager: this.spriteManager,
        trafficManager: this._traffic,
        valves: this._valves
      };
    };
    Simulation.prototype.init = function() {
      this._lastTickTime = -1;
      var evaluationEvents = ["CLASSIFICATION_UPDATED", "POPULATION_UPDATED", "SCORE_UPDATED"].map(function(m) {
        return Messages[m];
      });
      for (var i = 0, l = evaluationEvents.length; i < l; i++)
        this.evaluation.addEventListener(evaluationEvents[i], MiscUtils.reflectEvent.bind(this, evaluationEvents[i]));
      this._powerManager.addEventListener(NOT_ENOUGH_POWER, function(e2) {
        var d = new Date();
        if (this._lastPowerMessage === null || d - this._lastPowerMessage > 1e3 * 60 * 2) {
          this._emitEvent(FRONT_END_MESSAGE, { subject: NOT_ENOUGH_POWER });
          this._lastPowerMessage = d;
        }
      }.bind(this));
      this.budget.addEventListener(FUNDS_CHANGED, MiscUtils.reflectEvent.bind(this, FUNDS_CHANGED));
      this.budget.addEventListener(BUDGET_NEEDED, MiscUtils.reflectEvent.bind(this, BUDGET_NEEDED));
      this.budget.addEventListener(NO_MONEY, this._wrapMessage.bind(this, NO_MONEY));
      this._valves.addEventListener(VALVES_UPDATED, this._onValveChange.bind(this));
      for (i = 0, l = DISASTER_MESSAGES.length; i < l; i++) {
        this.spriteManager.addEventListener(DISASTER_MESSAGES[i], this._wrapMessage.bind(this, DISASTER_MESSAGES[i]));
        this.disasterManager.addEventListener(DISASTER_MESSAGES[i], this._wrapMessage.bind(this, DISASTER_MESSAGES[i]));
      }
      for (i = 0, l = CRASHES.length; i < l; i++)
        this.spriteManager.addEventListener(CRASHES[i], this._wrapMessage.bind(this, CRASHES[i]));
      this.spriteManager.addEventListener(HEAVY_TRAFFIC, this._wrapMessage.bind(this, HEAVY_TRAFFIC));
      Commercial.registerHandlers(this._mapScanner, this._repairManager);
      EmergencyServices.registerHandlers(this._mapScanner, this._repairManager);
      Industrial.registerHandlers(this._mapScanner, this._repairManager);
      MiscTiles.registerHandlers(this._mapScanner, this._repairManager);
      this._powerManager.registerHandlers(this._mapScanner, this._repairManager);
      Road.registerHandlers(this._mapScanner, this._repairManager);
      Residential.registerHandlers(this._mapScanner, this._repairManager);
      Stadia.registerHandlers(this._mapScanner, this._repairManager);
      Transport.registerHandlers(this._mapScanner, this._repairManager);
      var simData = this._constructSimData();
      this._mapScanner.mapScan(0, this._map.width, simData);
      this._powerManager.doPowerScan(this._census);
      BlockMapUtils.pollutionTerrainLandValueScan(this._map, this._census, this.blockMaps);
      BlockMapUtils.crimeScan(this._census, this.blockMaps);
      BlockMapUtils.populationDensityScan(this._map, this.blockMaps);
      BlockMapUtils.fireAnalysis(this.blockMaps);
    };
    speedPowerScan = [2, 4, 5];
    speedPollutionTerrainLandValueScan = [2, 7, 17];
    speedCrimeScan = [1, 8, 18];
    speedPopulationDensityScan = [1, 9, 19];
    speedFireAnalysis = [1, 10, 20];
    CENSUS_FREQUENCY_10 = 4;
    CENSUS_FREQUENCY_120 = CENSUS_FREQUENCY_10 * 10;
    TAX_FREQUENCY = 48;
    simulate = function(simData) {
      this._phaseCycle &= 15;
      var speedIndex = this._speed - 1;
      switch (this._phaseCycle) {
        case 0:
          if (++this._simCycle > 1023)
            this._simCycle = 0;
          this._cityTime++;
          if ((this._simCycle & 1) === 0)
            this._valves.setValves(this._gameLevel, this._census, this.budget);
          this._clearCensus();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          this._mapScanner.mapScan((this._phaseCycle - 1) * this._map.width / 8, this._phaseCycle * this._map.width / 8, simData);
          break;
        case 9:
          if (this._cityTime % CENSUS_FREQUENCY_10 === 0)
            this._census.take10Census(budget);
          if (this._cityTime % CENSUS_FREQUENCY_120 === 0)
            this._census.take120Census(budget);
          if (this._cityTime % TAX_FREQUENCY === 0) {
            this.budget.collectTax(this._gameLevel, this._census);
            this.evaluation.cityEvaluation(simData);
          }
          break;
        case 10:
          if (this._simCycle % 5 === 0)
            BlockMapUtils.neutraliseRateOfGrowthMap(simData.blockMaps);
          BlockMapUtils.neutraliseTrafficMap(this.blockMaps);
          this._sendMessages();
          break;
        case 11:
          if (this._simCycle % speedPowerScan[speedIndex] === 0)
            this._powerManager.doPowerScan(this._census);
          break;
        case 12:
          if (this._simCycle % speedPollutionTerrainLandValueScan[speedIndex] === 0)
            BlockMapUtils.pollutionTerrainLandValueScan(this._map, this._census, this.blockMaps);
          break;
        case 13:
          if (this._simCycle % speedCrimeScan[speedIndex] === 0)
            BlockMapUtils.crimeScan(this._census, this.blockMaps);
          break;
        case 14:
          if (this._simCycle % speedPopulationDensityScan[speedIndex] === 0)
            BlockMapUtils.populationDensityScan(this._map, this.blockMaps);
          break;
        case 15:
          if (this._simCycle % speedFireAnalysis[speedIndex] === 0)
            BlockMapUtils.fireAnalysis(this.blockMaps);
          this.disasterManager.doDisasters(this._census);
          break;
      }
      this._phaseCycle = this._phaseCycle + 1 & 15;
    };
    Simulation.prototype._simulate = function(simData) {
      this.evaluation.cityEvaluation(simData);
      this._simulate = simulate;
      this._simulate(simData);
    };
    Simulation.prototype._wrapMessage = function(message, data) {
      this._emitEvent(FRONT_END_MESSAGE, { subject: message, data });
    };
    Simulation.prototype._sendMessages = function() {
      this._checkGrowth();
      var totalZonePop = this._census.resZonePop + this._census.comZonePop + this._census.indZonePop;
      var powerPop = this._census.nuclearPowerPop + this._census.coalPowerPop;
      switch (this._cityTime & 63) {
        case 1:
          if (Math.floor(totalZonePop / 4) >= this._census.resZonePop)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_MORE_RESIDENTIAL });
          break;
        case 5:
          if (Math.floor(totalZonePop / 8) >= this._census.comZonePop)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_MORE_COMMERCIAL });
          break;
        case 10:
          if (Math.floor(totalZonePop / 8) >= this._census.indZonePop)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_MORE_INDUSTRIAL });
          break;
        case 14:
          if (totalZonePop > 10 && totalZonePop * 2 > this._census.roadTotal)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_MORE_ROADS });
          break;
        case 18:
          if (totalZonePop > 50 && totalZonePop > this._census.railTotal)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_MORE_RAILS });
          break;
        case 22:
          if (totalZonePop > 10 && powerPop === 0)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_ELECTRICITY });
          break;
        case 26:
          if (this._census.resPop > 500 && this._census.stadiumPop === 0) {
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_STADIUM });
            this._valves.resCap = true;
          } else {
            this._valves.resCap = false;
          }
          break;
        case 28:
          if (this._census.indPop > 70 && this._census.seaportPop === 0) {
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_SEAPORT });
            this._valves.indCap = true;
          } else {
            this._valves.indCap = false;
          }
          break;
        case 30:
          if (this._census.comPop > 100 && this._census.airportPop === 0) {
            this._emitEvent(FRONT_END_MESSAGE, { subject: void 0 });
            this._valves.comCap = true;
          } else {
            this._valves.comCap = false;
          }
          break;
        case 32:
          var zoneCount = this._census.unpoweredZoneCount + this._census.poweredZoneCount;
          if (zoneCount > 0) {
            if (this._census.poweredZoneCount / zoneCount < 0.7 && powerPop > 0) {
              var d = new Date();
              if (this._lastPowerMessage === null || d - this._lastPowerMessage > 1e3 * 60 * 2) {
                this._emitEvent(FRONT_END_MESSAGE, { subject: BLACKOUTS_REPORTED });
                this._lastPowerMessage = d;
              }
            }
          }
          break;
        case 35:
          if (this._census.pollutionAverage > 60)
            this._emitEvent(FRONT_END_MESSAGE, { subject: HIGH_POLLUTION, data: { x: this._map.pollutionMaxX, y: this._map.pollutionMaxY } });
          break;
        case 42:
          if (this._census.crimeAverage > 100)
            this._emitEvent(FRONT_END_MESSAGE, { subject: HIGH_CRIME });
          break;
        case 45:
          if (this._census.totalPop > 60 && this._census.fireStationPop === 0)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_FIRE_STATION });
          break;
        case 48:
          if (this._census.totalPop > 60 && this._census.policeStationPop === 0)
            this._emitEvent(FRONT_END_MESSAGE, { subject: NEED_POLICE_STATION });
          break;
        case 51:
          if (this.budget.cityTax > 12)
            this._emitEvent(FRONT_END_MESSAGE, { subject: TAX_TOO_HIGH });
          break;
        case 54:
          if (this.budget.roadEffect < Math.floor(5 * this.budget.MAX_ROAD_EFFECT / 8) && this._census.roadTotal > 30)
            this._emitEvent(FRONT_END_MESSAGE, { subject: ROAD_NEEDS_FUNDING });
          break;
        case 57:
          if (this.budget.fireEffect < Math.floor(7 * this.budget.MAX_FIRE_STATION_EFFECT / 10) && this._census.totalPop > 20)
            this._emitEvent(FRONT_END_MESSAGE, { subject: FIRE_STATION_NEEDS_FUNDING });
          break;
        case 60:
          if (this.budget.policeEffect < Math.floor(7 * this.budget.MAX_POLICE_STATION_EFFECT / 10) && this._census.totalPop > 20)
            this._emitEvent(FRONT_END_MESSAGE, { subject: POLICE_NEEDS_FUNDING });
          break;
        case 63:
          if (this._census.trafficAverage > 60)
            this._emitEvent(FRONT_END_MESSAGE, { subject: TRAFFIC_JAMS });
          break;
      }
    };
    Simulation.prototype._checkGrowth = function() {
      if ((this._cityTime & 3) !== 0)
        return;
      var message = "";
      var cityPop = this.evaluation.getPopulation(this._census);
      if (cityPop !== this._cityPopLast) {
        var lastClass = this.evaluation.getCityClass(this._cityPopLast);
        var newClass = this.evaluation.getCityClass(cityPop);
        if (lastClass !== newClass) {
          switch (newClass) {
            case Evaluation.CC_VILLAGE:
              break;
            case Evaluation.CC_TOWN:
              message = REACHED_TOWN;
              break;
            case Evaluation.CC_CITY:
              message = REACHED_CITY;
              break;
            case Evaluation.CC_CAPITAL:
              message = REACHED_CAPITAL;
              break;
            case Evaluation.CC_METROPOLIS:
              message = REACHED_METROPOLIS;
              break;
            case Evaluation.CC_MEGALOPOLIS:
              message = REACHED_MEGALOPOLIS;
              break;
          }
        }
      }
      if (message !== "" && message !== this._messageLast) {
        this._emitEvent(FRONT_END_MESSAGE, { subject: message });
        this._messageLast = message;
      }
      this._cityPopLast = cityPop;
    };
    Simulation.prototype._onValveChange = function() {
      this._resLast = this._valves.resValve;
      this._comLast = this._valves.comValve;
      this._indLast = this._valves.indValve;
      this._emitEvent(VALVES_UPDATED, {
        residential: this._valves.resValve,
        commercial: this._valves.comValve,
        industrial: this._valves.indValve
      });
    };
    Simulation.prototype.getDate = function() {
      var year = Math.floor(this._cityTime / 48) + this._startingYear;
      var month = Math.floor(this._cityTime % 48) >> 2;
      return { month, year };
    };
    Simulation.prototype._setYear = function(year) {
      if (year < this._startingYear)
        year = this._startingYear;
      year = year - this._startingYear - this._cityTime / 48;
      this._cityTime += year * 48;
      this._updateTime();
    };
    Simulation.prototype._updateTime = function() {
      var megalinium = 1e6;
      var cityYear = Math.floor(this._cityTime / 48) + this._startingYear;
      var cityMonth = Math.floor(this._cityTime % 48) >> 2;
      if (cityYear >= megalinium) {
        this.setYear(startingYear);
        return;
      }
      if (this._cityYearLast !== cityYear || this._cityMonthLast !== cityMonth) {
        this._cityYearLast = cityYear;
        this._cityMonthLast = cityMonth;
        this._emitEvent(DATE_UPDATED, { month: cityMonth, year: cityYear });
      }
    };
    Object.defineProperties(Simulation, {
      LEVEL_EASY: MiscUtils.makeConstantDescriptor(0),
      LEVEL_MED: MiscUtils.makeConstantDescriptor(1),
      LEVEL_HARD: MiscUtils.makeConstantDescriptor(2),
      SPEED_PAUSED: MiscUtils.makeConstantDescriptor(0),
      SPEED_SLOW: MiscUtils.makeConstantDescriptor(1),
      SPEED_MED: MiscUtils.makeConstantDescriptor(2),
      SPEED_FAST: MiscUtils.makeConstantDescriptor(3)
    });
    densityStrings = ["Low", "Medium", "High", "Very High"];
    landValueStrings = ["Slum", "Lower Class", "Middle Class", "High"];
    crimeStrings = ["Safe", "Light", "Moderate", "Dangerous"];
    pollutionStrings = ["None", "Moderate", "Heavy", "Very Heavy"];
    rateStrings = ["Declining", "Stable", "Slow Growth", "Fast Growth"];
    zoneTypes = [
      "Clear",
      "Water",
      "Trees",
      "Rubble",
      "Flood",
      "Radioactive Waste",
      "Fire",
      "Road",
      "Power",
      "Rail",
      "Residential",
      "Commercial",
      "Industrial",
      "Seaport",
      "Airport",
      "Coal Power",
      "Fire Department",
      "Police Department",
      "Stadium",
      "Nuclear Power",
      "Draw Bridge",
      "Radar Dish",
      "Fountain",
      "Industrial",
      "Steelers 38  Bears 3",
      "Draw Bridge",
      "Ur 238"
    ];
    gameLevel = {};
    gameLevel["" + Simulation.LEVEL_EASY] = "Easy";
    gameLevel["" + Simulation.LEVEL_MED] = "Medium";
    gameLevel["" + Simulation.LEVEL_HARD] = "Hard";
    cityClass = {};
    cityClass[Evaluation.CC_VILLAGE] = "VILLAGE";
    cityClass[Evaluation.CC_TOWN] = "TOWN";
    cityClass[Evaluation.CC_CITY] = "CITY";
    cityClass[Evaluation.CC_CAPITAL] = "CAPITAL";
    cityClass[Evaluation.CC_METROPOLIS] = "METROPOLIS";
    cityClass[Evaluation.CC_MEGALOPOLIS] = "MEGALOPOLIS";
    problems = {};
    problems[Evaluation.CRIME] = "Crime";
    problems[Evaluation.POLLUTION] = "Pollution";
    problems[Evaluation.HOUSING] = "Housing";
    problems[Evaluation.TAXES] = "Taxes";
    problems[Evaluation.TRAFFIC] = "Traffic";
    problems[Evaluation.UNEMPLOYMENT] = "Unemployment";
    problems[Evaluation.FIRE] = "Fire";
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    toolMessages = {
      noMoney: "Insufficient funds to build that",
      needsDoze: "Area must be bulldozed first"
    };
    neutralMessages = {};
    neutralMessages[FIRE_STATION_NEEDS_FUNDING] = true;
    neutralMessages[NEED_AIRPORT] = true;
    neutralMessages[NEED_FIRE_STATION] = true;
    neutralMessages[NEED_ELECTRICITY] = true;
    neutralMessages[NEED_MORE_INDUSTRIAL] = true;
    neutralMessages[NEED_MORE_COMMERCIAL] = true;
    neutralMessages[NEED_MORE_RESIDENTIAL] = true;
    neutralMessages[NEED_MORE_RAILS] = true;
    neutralMessages[NEED_MORE_ROADS] = true;
    neutralMessages[NEED_POLICE_STATION] = true;
    neutralMessages[NEED_SEAPORT] = true;
    neutralMessages[NEED_STADIUM] = true;
    neutralMessages[ROAD_NEEDS_FUNDING] = true;
    neutralMessages[POLICE_NEEDS_FUNDING] = true;
    neutralMessages[WELCOME] = true;
    badMessages = {};
    badMessages[BLACKOUTS_REPORTED] = true;
    badMessages[EARTHQUAKE] = true;
    badMessages[EXPLOSION_REPORTED] = true;
    badMessages[FLOODING_REPORTED] = true;
    badMessages[FIRE_REPORTED] = true;
    badMessages[HEAVY_TRAFFIC] = true;
    badMessages[HELICOPTER_CRASHED] = true;
    badMessages[HIGH_CRIME] = true;
    badMessages[HIGH_POLLUTION] = true;
    badMessages[MONSTER_SIGHTED] = true;
    badMessages[NO_MONEY] = true;
    badMessages[NOT_ENOUGH_POWER] = true;
    badMessages[NUCLEAR_MELTDOWN] = true;
    badMessages[PLANE_CRASHED] = true;
    badMessages[SHIP_CRASHED] = true;
    badMessages[TAX_TOO_HIGH] = true;
    badMessages[TORNADO_SIGHTED] = true;
    badMessages[TRAFFIC_JAMS] = true;
    badMessages[TRAIN_CRASHED] = true;
    goodMessages = {};
    goodMessages[REACHED_CAPITAL] = true;
    goodMessages[REACHED_CITY] = true;
    goodMessages[REACHED_MEGALOPOLIS] = true;
    goodMessages[REACHED_METROPOLIS] = true;
    goodMessages[REACHED_TOWN] = true;
    messageText = {};
    messageText[FIRE_STATION_NEEDS_FUNDING] = "Fire departments need funding";
    messageText[NEED_AIRPORT] = "Commerce requires an Airport";
    messageText[NEED_FIRE_STATION] = "Citizens demand a Fire Department";
    messageText[NEED_ELECTRICITY] = "Build a Power Plant";
    messageText[NEED_MORE_INDUSTRIAL] = "More industrial zones needed";
    messageText[NEED_MORE_COMMERCIAL] = "More commercial zones needed";
    messageText[NEED_MORE_RESIDENTIAL] = "More residential zones needed";
    messageText[NEED_MORE_RAILS] = "Inadequate rail system";
    messageText[NEED_MORE_ROADS] = "More roads required";
    messageText[NEED_POLICE_STATION] = "Citizens demand a Police Department";
    messageText[NEED_SEAPORT] = "Industry requires a Sea Port";
    messageText[NEED_STADIUM] = "Residents demand a Stadium";
    messageText[ROAD_NEEDS_FUNDING] = "Roads deteriorating, due to lack of funds";
    messageText[POLICE_NEEDS_FUNDING] = "Police departments need funding";
    messageText[WELCOME] = "Welcome to micropolisJS";
    messageText[BLACKOUTS_REPORTED] = "Brownouts, build another Power Plant";
    messageText[EARTHQUAKE] = "Major earthquake reported !!";
    messageText[EXPLOSION_REPORTED] = "Explosion detected ";
    messageText[FLOODING_REPORTED] = "Flooding reported !";
    messageText[FIRE_REPORTED] = "Fire reported ";
    messageText[HEAVY_TRAFFIC] = "Heavy Traffic reported";
    messageText[HELICOPTER_CRASHED] = "A helicopter crashed ";
    messageText[HIGH_CRIME] = "Crime very high";
    messageText[HIGH_POLLUTION] = "Pollution very high";
    messageText[MONSTER_SIGHTED] = "A Monster has been sighted !";
    messageText[NO_MONEY] = "YOUR CITY HAS GONE BROKE";
    messageText[NOT_ENOUGH_POWER] = "Blackouts reported: insufficient power capacity";
    messageText[NUCLEAR_MELTDOWN] = "A Nuclear Meltdown has occurred !!";
    messageText[PLANE_CRASHED] = "A plane has crashed ";
    messageText[SHIP_CRASHED] = "Shipwreck reported ";
    messageText[TAX_TOO_HIGH] = "Citizens upset. The tax rate is too high";
    messageText[TORNADO_SIGHTED] = "Tornado reported !";
    messageText[TRAFFIC_JAMS] = "Frequent traffic jams reported";
    messageText[TRAIN_CRASHED] = "A train crashed ";
    messageText[REACHED_CAPITAL] = "Population has reached 50,000";
    messageText[REACHED_CITY] = "Population has reached 10,000";
    messageText[REACHED_MEGALOPOLIS] = "Population has reached 500,000";
    messageText[REACHED_METROPOLIS] = "Population has reached 100,000";
    messageText[REACHED_TOWN] = "Population has reached 2,000";
    Text = {
      badMessages,
      cityClass,
      crimeStrings,
      densityStrings,
      gameLevel,
      goodMessages,
      landValueStrings,
      messageText,
      months,
      neutralMessages,
      problems,
      pollutionStrings,
      rateStrings,
      toolMessages,
      zoneTypes
    };
    jq$b = jqueryProxy.default || jqueryProxy;
    EvaluationWindow = ModalWindow(function() {
      jq$b(evaluationFormID).on("submit", submit$7.bind(this));
    });
    evaluationFormID = "#evalButtons";
    EvaluationWindow.prototype.close = function() {
      this._emitEvent(EVAL_WINDOW_CLOSED);
      this._toggleDisplay();
    };
    submit$7 = function(e2) {
      e2.preventDefault();
      this.close();
    };
    EvaluationWindow.prototype._populateWindow = function(evaluation) {
      jq$b("#evalYes").text(evaluation.cityYes);
      jq$b("#evalNo").text(100 - evaluation.cityYes);
      for (var i = 0; i < 4; i++) {
        var problemNo = evaluation.getProblemNumber(i);
        if (problemNo !== null) {
          var text = Text.problems[problemNo];
          jq$b("#evalProb" + (i + 1)).text(text);
          jq$b("#evalProb" + (i + 1)).show();
        } else {
          jq$b("#evalProb" + (i + 1)).hide();
        }
      }
      jq$b("#evalPopulation").text(evaluation.cityPop);
      jq$b("#evalMigration").text(evaluation.cityPopDelta);
      jq$b("#evalValue").text(evaluation.cityAssessedValue);
      jq$b("#evalLevel").text(Text.gameLevel[evaluation.gameLevel]);
      jq$b("#evalClass").text(Text.cityClass[evaluation.cityClass]);
      jq$b("#evalScore").text(evaluation.cityScore);
      jq$b("#evalScoreDelta").text(evaluation.cityScoreDelta);
    };
    EvaluationWindow.prototype.open = function(evaluation) {
      this._populateWindow(evaluation);
      this._toggleDisplay();
    };
    toKey = function(x, y) {
      return [x, y].join(",");
    };
    TileHistory.prototype.clear = function() {
      this.data = {};
    };
    TileHistory.prototype.getTile = function(x, y) {
      var key2 = toKey(x, y);
      return this.data[key2];
    };
    TileHistory.prototype.setTile = function(x, y, value) {
      var key2 = toKey(x, y);
      this.data[key2] = value;
    };
    AnimationManager.prototype.initArray = function() {
      for (var i = 0; i < TILE_COUNT; i++)
        this._data[i] = i;
    };
    AnimationManager.prototype.inSequence = function(tileValue, lastValue) {
      var seen = [tileValue];
      var current = this._data[tileValue];
      while (seen.indexOf(current) === -1) {
        if (current === lastValue)
          return true;
        seen.push(current);
        current = this._data[current];
      }
      return false;
    };
    AnimationManager.prototype.getTiles = function(tileValues, offsetX, offsetY, xBound, yBound, isPaused) {
      isPaused = isPaused || false;
      var shouldChangeAnimation = false;
      var d = new Date();
      var shouldBlink = this.shouldBlink;
      if (d - this.lastBlink > this.blinkPeriod) {
        shouldBlink = this.shouldBlink = !this.shouldBlink;
        this.lastBlink = d;
      }
      if (!isPaused) {
        if (d - this.lastAnimation > this.animationPeriod) {
          shouldChangeAnimation = true;
          this.lastAnimation = d;
        }
      }
      var newPainted = this._currentPainted === null ? new TileHistory() : this._currentPainted;
      for (var y = 0; y < yBound; y++) {
        for (var x = 0; x < xBound; x++) {
          var mapX = x + offsetX;
          var mapY = y + offsetY;
          var index = y * xBound + x;
          if (mapX < 0 || mapX >= this._map.width || mapY < 0 || mapY >= this._map.height)
            continue;
          var tile2 = tileValues[index];
          if (tile2 === TILE_INVALID)
            continue;
          if (shouldBlink && tile2 & ZONEBIT && !(tile2 & POWERBIT)) {
            tileValues[index] = LIGHTNINGBOLT;
            continue;
          }
          if (!(tile2 & ANIMBIT)) {
            tileValues[index] = tile2 & BIT_MASK;
            continue;
          }
          var tileValue = tile2 & BIT_MASK;
          var newTile = TILE_INVALID;
          var last;
          if (this._lastPainted)
            last = this._lastPainted.getTile(x, y);
          if (shouldChangeAnimation) {
            if (last && this.inSequence(tileValue, last)) {
              if (last === LASTTINYEXP) {
                this._map.setTo(mapX, mapY, TileUtils.randomRubble());
                newTile = this._map.getTileValue(mapX, mapY);
              } else {
                newTile = this._data[last];
              }
            } else {
              newTile = this._data[tileValue];
            }
          } else {
            if (last && this.inSequence(tileValue, last))
              newTile = last;
          }
          if (newTile === TILE_INVALID) {
            tileValues[index] = tileValue;
            continue;
          }
          tileValues[index] = newTile;
          newPainted.setTile(x, y, newTile);
        }
      }
      var temp = this._lastPainted;
      this._lastPainted = newPainted;
      if (temp !== null)
        temp.clear();
      this._currentPainted = temp;
    };
    AnimationManager.prototype.registerSingleAnimation = function(arr) {
      for (var i = 1; i < arr.length; i++)
        this._data[arr[i - 1]] = arr[i];
    };
    AnimationManager.prototype.registerAnimations = function() {
      this.registerSingleAnimation([56, 57, 58, 59, 60, 61, 62, 63, 56]);
      this.registerSingleAnimation([80, 128, 112, 96, 80]);
      this.registerSingleAnimation([81, 129, 113, 97, 81]);
      this.registerSingleAnimation([82, 130, 114, 98, 82]);
      this.registerSingleAnimation([83, 131, 115, 99, 83]);
      this.registerSingleAnimation([84, 132, 116, 100, 84]);
      this.registerSingleAnimation([85, 133, 117, 101, 85]);
      this.registerSingleAnimation([86, 134, 118, 102, 86]);
      this.registerSingleAnimation([87, 135, 119, 103, 87]);
      this.registerSingleAnimation([88, 136, 120, 104, 88]);
      this.registerSingleAnimation([89, 137, 121, 105, 89]);
      this.registerSingleAnimation([90, 138, 122, 106, 90]);
      this.registerSingleAnimation([91, 139, 123, 107, 91]);
      this.registerSingleAnimation([92, 140, 124, 108, 92]);
      this.registerSingleAnimation([93, 141, 125, 109, 93]);
      this.registerSingleAnimation([94, 142, 126, 110, 94]);
      this.registerSingleAnimation([95, 143, 127, 111, 95]);
      this.registerSingleAnimation([144, 192, 176, 160, 144]);
      this.registerSingleAnimation([145, 193, 177, 161, 145]);
      this.registerSingleAnimation([146, 194, 178, 162, 146]);
      this.registerSingleAnimation([147, 195, 179, 163, 147]);
      this.registerSingleAnimation([148, 196, 180, 164, 148]);
      this.registerSingleAnimation([149, 197, 181, 165, 149]);
      this.registerSingleAnimation([150, 198, 182, 166, 150]);
      this.registerSingleAnimation([151, 199, 183, 167, 151]);
      this.registerSingleAnimation([152, 200, 184, 168, 152]);
      this.registerSingleAnimation([153, 201, 185, 169, 153]);
      this.registerSingleAnimation([154, 202, 186, 170, 154]);
      this.registerSingleAnimation([155, 203, 187, 171, 155]);
      this.registerSingleAnimation([156, 204, 188, 172, 156]);
      this.registerSingleAnimation([157, 205, 189, 173, 157]);
      this.registerSingleAnimation([158, 206, 190, 174, 158]);
      this.registerSingleAnimation([159, 207, 191, 175, 159]);
      this.registerSingleAnimation([621, 852, 853, 854, 855, 856, 857, 858, 859, 852]);
      this.registerSingleAnimation([641, 884, 885, 886, 887, 884]);
      this.registerSingleAnimation([644, 888, 889, 890, 891, 888]);
      this.registerSingleAnimation([649, 892, 893, 894, 895, 892]);
      this.registerSingleAnimation([650, 896, 897, 898, 899, 896]);
      this.registerSingleAnimation([676, 900, 901, 902, 903, 900]);
      this.registerSingleAnimation([677, 904, 905, 906, 907, 904]);
      this.registerSingleAnimation([686, 908, 909, 910, 911, 908]);
      this.registerSingleAnimation([689, 912, 913, 914, 915, 912]);
      this.registerSingleAnimation([747, 916, 917, 918, 919, 916]);
      this.registerSingleAnimation([748, 920, 921, 922, 923, 920]);
      this.registerSingleAnimation([751, 924, 925, 926, 927, 924]);
      this.registerSingleAnimation([752, 928, 929, 930, 931, 928]);
      this.registerSingleAnimation([820, 952, 953, 954, 955, 952]);
      this.registerSingleAnimation([832, 833, 834, 835, 836, 837, 838, 839, 832]);
      this.registerSingleAnimation([840, 841, 842, 843, 840]);
      this.registerSingleAnimation([844, 845, 846, 847, 848, 849, 850, 851, 844]);
      this.registerSingleAnimation([860, 861, 862, 863, 864, 865, 866, 867]);
      this.registerSingleAnimation([932, 933, 934, 935, 936, 937, 938, 939, 932]);
      this.registerSingleAnimation([940, 941, 942, 943, 944, 945, 946, 947, 940]);
    };
    MouseBox = {
      draw: function(c, pos2, width2, height2, options) {
        var lineWidth = options.lineWidth || 3;
        var strokeStyle = options.colour || "yellow";
        var shouldOutline = "outline" in options && options.outline === true || false;
        var startModifier = -1;
        var endModifier = 1;
        if (!shouldOutline) {
          startModifier = 1;
          endModifier = -1;
        }
        var startX = pos2.x + startModifier * lineWidth / 2;
        width2 = width2 + endModifier * lineWidth;
        var startY = pos2.y + startModifier * lineWidth / 2;
        height2 = height2 + endModifier * lineWidth;
        var ctx = c.getContext("2d");
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect(startX, startY, width2, height2);
      }
    };
    jq$a = jqueryProxy.default || jqueryProxy;
    GameCanvas.prototype.init = function(map, tileSet, spriteSheet, animationManager) {
      animationManager = animationManager || new AnimationManager(map);
      if (arguments.length < 3)
        throw new Error("GameCanvas constructor called with too few arguments " + [].toString.apply(arguments));
      if (!tileSet.isValid)
        throw new Error("TileSet not ready!");
      this._spriteSheet = spriteSheet;
      this._tileSet = tileSet;
      var w = this._tileSet.tileWidth;
      this._map = map;
      this.animationManager = new AnimationManager(map);
      if (this._canvas.width < w || this._canvas.height < w)
        throw new Error("Canvas too small!");
      this._allowScrolling = true;
      this._lastPaintedTiles = null;
      this._currentPaintedTiles = [];
      this._lastPaintedWidth = -1;
      this._lastPaintedHeight = -1;
      this._lastCanvasWidth = -1;
      this._lastCanvasHeight = -1;
      this._lastCanvasData = null;
      this._calculateDimensions();
      this._pendingDimensionChange = false;
      var onResize = function(e2) {
        this._pendingDimensionChange = true;
      }.bind(this);
      window.addEventListener("resize", onResize, false);
      this.ready = true;
      this.centreOn(Math.floor(this._map.width / 2), Math.floor(this._map.height / 2));
      this.paint(null, null);
    };
    GameCanvas.prototype._calculateDimensions = function(force) {
      force = force || false;
      var canvasWidth = this.canvasWidth = this._canvas.parentNode.clientWidth;
      var canvasHeight = this.canvasHeight = this._canvas.parentNode.clientHeight;
      if (canvasHeight === this._lastCanvasHeight && canvasWidth === this._lastCanvasWidth && !force)
        return;
      this._canvas.width = canvasWidth;
      this._canvas.height = canvasHeight;
      var w = this._tileSet.tileWidth;
      this._wholeTilesInViewX = Math.floor(canvasWidth / w);
      this._wholeTilesInViewY = Math.floor(canvasHeight / w);
      this._totalTilesInViewX = Math.ceil(canvasWidth / w);
      this._totalTilesInViewY = Math.ceil(canvasHeight / w);
      if (this._allowScrolling) {
        this.minX = 0 - Math.ceil(Math.floor(canvasWidth / w) / 2);
        this.maxX = this._map.width - 1 - Math.ceil(Math.floor(canvasWidth / w) / 2);
        this.minY = 0 - Math.ceil(Math.floor(canvasHeight / w) / 2);
        this.maxY = this._map.height - 1 - Math.ceil(Math.floor(canvasHeight / w) / 2);
        this._totalTilesInViewY = Math.ceil(canvasHeight / w);
      } else {
        this.minX = 0;
        this.minY = 0;
        this.maxX = this._map.width - this._totalTilesInViewX;
        this.maxY = this._map.height - this._totalTilesInViewY;
      }
      this._pendingDimensionChange = true;
    };
    GameCanvas.prototype.disallowOffMap = function() {
      this._allowScrolling = false;
      this._lastPaintedTiles = null;
      this._calculateDimensions(true);
    };
    GameCanvas.prototype.moveNorth = function() {
      if (!this.ready)
        throw new Error("Not ready!");
      if (this._originY > this.minY)
        this._originY--;
    };
    GameCanvas.prototype.moveEast = function() {
      if (!this.ready)
        throw new Error("Not ready!");
      if (this._originX < this.maxX)
        this._originX++;
    };
    GameCanvas.prototype.moveSouth = function() {
      if (!this.ready)
        throw new Error("Not ready!");
      if (this._originY < this.maxY)
        this._originY++;
    };
    GameCanvas.prototype.moveWest = function() {
      if (!this.ready)
        throw new Error("Not ready!");
      if (this._originX > this.minX)
        this._originX--;
    };
    GameCanvas.prototype.moveTo = function(x, y) {
      if (arguments.length < 1)
        throw new Error("GameCanvas moveTo called with no arguments");
      if (!this.ready)
        throw new Error("Not ready!");
      if (x < this.minX || x > this.maxX || y < this.minY || y > this.maxY)
        throw new Error("Coordinates out of bounds");
      this._originX = x;
      this._originY = y;
    };
    GameCanvas.prototype.centreOn = function(x, y) {
      if (arguments.length < 1)
        throw new Error("GameCanvas centreOn called with no arguments");
      if (!this.ready)
        throw new Error("Not ready!");
      if (y === void 0) {
        y = x.y;
        x = x.x;
      }
      var originX = Math.floor(x) - Math.ceil(this._wholeTilesInViewX / 2);
      var originY = Math.floor(y) - Math.ceil(this._wholeTilesInViewY / 2);
      if (originX > this.maxX)
        originX = this.maxX;
      if (originX < this.minX)
        originX = this.minX;
      if (originY > this.maxY)
        originY = this.maxY;
      if (originY < this.minY)
        originY = this.minY;
      this._originX = originX;
      this._originY = originY;
    };
    GameCanvas.prototype.getTileOrigin = function() {
      var e2 = new Error("Not ready!");
      if (!this.ready)
        throw e2;
      return { x: this._originX, y: this._originY };
    };
    GameCanvas.prototype.getMaxTile = function() {
      var e2 = new Error("Not ready!");
      if (!this.ready)
        throw e2;
      return { x: this._originX + this._totalTilesInViewX - 1, y: this._originY + this._totalTilesInViewY - 1 };
    };
    GameCanvas.prototype.canvasCoordinateToTileOffset = function(x, y) {
      if (arguments.length < 2)
        throw new Error("GameCanvas canvasCoordinateToTileOffset called with too few arguments " + [].toString.apply(arguments));
      if (!this.ready)
        throw new Error("Not ready!");
      return {
        x: Math.floor(x / this._tileSet.tileWidth),
        y: Math.floor(y / this._tileSet.tileWidth)
      };
    };
    GameCanvas.prototype.canvasCoordinateToTileCoordinate = function(x, y) {
      if (arguments.length < 2)
        throw new Error("GameCanvas canvasCoordinateToTileCoordinate called with too few arguments " + [].toString.apply(arguments));
      if (!this.ready)
        throw new Error("Not ready!");
      if (x >= this.canvasWidth || y >= this.canvasHeight)
        return null;
      return {
        x: this._originX + Math.floor(x / this._tileSet.tileWidth),
        y: this._originY + Math.floor(y / this._tileSet.tileWidth)
      };
    };
    GameCanvas.prototype.canvasCoordinateToPosition = function(x, y) {
      if (arguments.length < 2)
        throw new Error("GameCanvas canvasCoordinateToPosition called with too few arguments " + [].toString.apply(arguments));
      if (!this.ready)
        throw new Error("Not ready!");
      if (x >= this.canvasWidth || y >= this.canvasHeight)
        return null;
      x = this._originX + Math.floor(x / this._tileSet.tileWidth);
      y = this._originY + Math.floor(y / this._tileSet.tileWidth);
      if (x < 0 || x >= this._map.width || y < 0 || y >= this._map.height)
        return null;
      return new Position(x, y);
    };
    GameCanvas.prototype.positionToCanvasCoordinate = function(p) {
      if (arguments.length < 1)
        throw new Error("GameCanvas positionToCanvasCoordinate called with too few arguments " + [].toString.apply(arguments));
      return this.tileToCanvasCoordinate(p);
    };
    GameCanvas.prototype.tileToCanvasCoordinate = function(x, y) {
      if (arguments.length < 1)
        throw new Error("GameCanvas tileToCanvasCoordinate  called with too few arguments " + [].toString.apply(arguments));
      if (!this.ready)
        throw new Error("Not ready!");
      if (y === void 0) {
        y = x.y;
        x = x.x;
      }
      if (x === void 0 || y === void 0 || x < this.minX || y < this.minY || x > this.maxX + this._totalTilesInViewX - 1 || y > this.maxY + this._totalTilesInViewY - 1)
        throw e;
      if (x < this._originX || x >= this._originX + this._totalTilesInViewX || y < this._originY || y >= this._originY + this._totalTilesInViewY)
        return null;
      return {
        x: (x - this._originX) * this._tileSet.tileWidth,
        y: (y - this._originY) * this._tileSet.tileWidth
      };
    };
    GameCanvas.prototype.changeTileSet = function(tileSet) {
      if (!this.ready)
        throw new Error("Not ready!");
      if (!tileSet.isValid)
        throw new Error("new tileset not loaded");
      this._pendingTileSet = tileSet;
    };
    GameCanvas.prototype._screenshot = function(onlyVisible) {
      if (onlyVisible)
        return this._canvas.toDataURL();
      var tempCanvas = document.createElement("canvas");
      tempCanvas.width = this._map.width * this._tileSet.tileWidth;
      tempCanvas.height = this._map.height * this._tileSet.tileWidth;
      var ctx = tempCanvas.getContext("2d");
      for (var x = 0; x < this._map.width; x++) {
        for (var y = 0; y < this._map.height; y++) {
          this._paintOne(ctx, this._map.getTileValue(x, y), x, y);
        }
      }
      return tempCanvas.toDataURL();
    };
    GameCanvas.prototype.screenshotMap = function() {
      return this._screenshot(false);
    };
    GameCanvas.prototype.screenshotVisible = function() {
      return this._screenshot(true);
    };
    GameCanvas.prototype.shoogle = function() {
    };
    GameCanvas.prototype._processSprites = function(ctx, spriteList) {
      var spriteDamage = [];
      var tileWidth = this._tileSet.tileWidth;
      for (var i = 0, l = spriteList.length; i < l; i++) {
        var sprite = spriteList[i];
        try {
          ctx.drawImage(this._spriteSheet, (sprite.frame - 1) * 48, (sprite.type - 1) * 48, sprite.width, sprite.width, sprite.x + sprite.xOffset - this._originX * 16, sprite.y + sprite.yOffset - this._originY * 16, sprite.width, sprite.width);
        } catch (e2) {
          throw new Error("Failed to draw sprite " + sprite.type + " frame " + sprite.frame + " at " + sprite.x + ", " + sprite.y);
        }
        spriteDamage.push({
          x: Math.floor((sprite.x + sprite.xOffset - this._originX * 16) / tileWidth),
          xBound: Math.ceil((sprite.x + sprite.xOffset + sprite.width - this._originX * 16) / tileWidth),
          y: Math.floor((sprite.y + sprite.yOffset - this._originY * 16) / tileWidth),
          yBound: Math.ceil((sprite.y + sprite.yOffset + sprite.height - this._originY * 16) / tileWidth)
        });
      }
      return spriteDamage;
    };
    GameCanvas.prototype._processMouse = function() {
      var damage = { x: 0, xBound: 0, y: 0, yBound: 0 };
      return function(mouse) {
        if (mouse.width === 0 || mouse.height === 0)
          return;
        var mouseX = mouse.x;
        var mouseY = mouse.y;
        var mouseWidth = mouse.width;
        var mouseHeight = mouse.height;
        var options = { colour: mouse.colour, outline: true };
        if (mouseWidth > 2)
          mouseX -= 1;
        if (mouseHeight > 2)
          mouseY -= 1;
        var offMap = this._originX + mouseX < 0 && this._originX + mouseX + mouseWidth <= 0 || this._originY + mouseY < 0 && this._originY + mouseY + mouseHeight <= 0 || this._originX + mouseX >= this._map.width || this._originY + mouseY >= this._map.height;
        if (offMap) {
          damage.x = damage.xBound = mouseX;
          damage.y = damage.yBound = mouseY;
          return damage;
        }
        var pos2 = { x: mouseX * this._tileSet.tileWidth, y: mouseY * this._tileSet.tileWidth };
        var width2 = mouseWidth * this._tileSet.tileWidth;
        var height2 = mouseHeight * this._tileSet.tileWidth;
        MouseBox.draw(this._canvas, pos2, width2, height2, options);
        damage.x = mouseX - 1;
        damage.xBound = mouseX + mouseWidth + 2;
        damage.y = mouseY - 1;
        damage.yBound = mouseY + mouseWidth + 2;
        return damage;
      };
    }();
    GameCanvas.prototype._paintVoid = function(ctx, x, y) {
      var w = this._tileSet.tileWidth;
      ctx.fillStyle = "black";
      ctx.fillRect(x * w, y * w, w, w);
    };
    GameCanvas.prototype._paintOne = function(ctx, tileVal, x, y) {
      if (tileVal === TILE_INVALID) {
        this._paintVoid(ctx, x, y);
        return;
      }
      var src = this._tileSet[tileVal];
      try {
        ctx.drawImage(src, x * this._tileSet.tileWidth, y * this._tileSet.tileWidth);
      } catch (e2) {
        var mapX = this._originX + x;
        var mapY = this._originY + y;
        throw new Error("Failed to draw tile " + tileVal + " at " + x + ", " + y + " (map " + mapX + ", " + mapY + " tile " + (this._map.testBounds(mapX, mapY) ? this._map.getTileValue(mapX, mapY) : "?? (Out of bounds)") + ")");
      }
    };
    GameCanvas.prototype._paintTiles = function(ctx, paintData) {
      var x, y, index;
      var lastPaintedTiles = this._lastPaintedTiles;
      var width2 = this._totalTilesInViewX;
      var height2 = this._totalTilesInViewY;
      if (lastPaintedTiles !== null) {
        var xBound = Math.min(this._lastPaintedWidth, width2);
        var yBound = Math.min(this._lastPaintedHeight, height2);
        for (y = 0; y < yBound; y++) {
          for (x = 0; x < xBound; x++) {
            index = y * xBound + x;
            if (lastPaintedTiles[index] === paintData[index])
              continue;
            this._paintOne(ctx, paintData[index], x, y);
          }
        }
        if (width2 > this._lastPaintedWidth) {
          for (y = 0; y < height2; y++) {
            for (x = this._lastPaintedWidth; x < width2; x++) {
              index = y * width2 + x;
              this._paintOne(ctx, paintData[index], x, y);
            }
          }
        }
        if (height2 > this._lastPaintedHeight) {
          for (y = this._lastPaintedHeight; y < height2; y++) {
            for (x = 0; x < width2; x++) {
              index = y * width2 + x;
              this._paintOne(ctx, paintData[index], x, y);
            }
          }
        }
      } else {
        for (y = 0; y < height2; y++) {
          for (x = 0; x < width2; x++) {
            index = y * width2 + x;
            this._paintOne(ctx, paintData[index], x, y);
          }
        }
      }
      this._lastPaintedWidth = width2;
      this._lastPaintedHeight = height2;
      var temp = this._lastPaintedTiles;
      this._lastPaintedTiles = paintData;
      this._currentPaintedTiles = temp;
    };
    GameCanvas.prototype.paint = function(mouse, sprites, isPaused) {
      var i, l, x, y, damaged, xBound, yBound, index;
      if (!this.ready)
        throw new Error("Not ready!");
      var ctx = this._canvas.getContext("2d");
      var lastPaintedTiles = this._lastPaintedTiles;
      if (this._pendingDimensionChange || this._pendingTileSet) {
        this._calculateDimensions();
        this._pendingDimensionChange = false;
        if (this._pendingTileSet !== null)
          this._tileSet = this._pendingTileSet;
        if (this._pendingTileSet || this.canvasWidth !== this._lastCanvasWidth || this.canvasHeight !== this._lastCanvasHeight) {
          ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          for (y = 0, l = lastPaintedTiles !== null ? lastPaintedTiles.length : 0; y < l; y++)
            lastPaintedTiles[y] = -2;
        }
        this._pendingTileSet = null;
      }
      var paintWidth = this._totalTilesInViewX;
      var paintHeight = this._totalTilesInViewY;
      var tileValues = this._map.getTileValuesForPainting(this._originX, this._originY, paintWidth, paintHeight, this._currentPaintedTiles);
      this.animationManager.getTiles(tileValues, this._originX, this._originY, paintWidth, paintHeight, isPaused);
      this._paintTiles(ctx, tileValues);
      lastPaintedTiles = this._lastPaintedTiles;
      this._lastCanvasWidth = this.canvasWidth;
      this._lastCanvasHeight = this.canvasHeight;
      if (!mouse && !sprites) {
        return;
      }
      if (mouse) {
        damaged = this._processMouse(mouse);
        for (y = Math.max(0, damaged.y), yBound = Math.min(paintHeight, damaged.yBound); y < yBound; y++) {
          for (x = Math.max(0, damaged.x), xBound = Math.min(paintWidth, damaged.xBound); x < xBound; x++) {
            index = [y * paintWidth + x];
            lastPaintedTiles[index] = -2;
          }
        }
      }
      if (sprites) {
        damaged = this._processSprites(ctx, sprites);
        for (i = 0, l = damaged.length; i < l; i++) {
          var damagedArea = damaged[i];
          for (y = Math.max(0, damagedArea.y), yBound = Math.min(damagedArea.yBound, paintHeight); y < yBound; y++) {
            for (x = Math.max(0, damagedArea.x), xBound = Math.min(damagedArea.xBound, paintWidth); x < xBound; x++) {
              index = [y * paintWidth + x];
              this._lastPaintedTiles[index] = -2;
            }
          }
        }
      }
    };
    GameCanvas.DEFAULT_ID = "MicropolisCanvas";
    RoadTable = [
      ROADS,
      ROADS2,
      ROADS,
      ROADS3,
      ROADS2,
      ROADS2,
      ROADS4,
      ROADS8,
      ROADS,
      ROADS6,
      ROADS,
      ROADS7,
      ROADS5,
      ROADS10,
      ROADS9,
      INTERSECTION
    ];
    RailTable = [
      LHRAIL,
      LVRAIL,
      LHRAIL,
      LVRAIL2,
      LVRAIL,
      LVRAIL,
      LVRAIL3,
      LVRAIL7,
      LHRAIL,
      LVRAIL5,
      LHRAIL,
      LVRAIL6,
      LVRAIL4,
      LVRAIL9,
      LVRAIL8,
      LVRAIL10
    ];
    WireTable = [
      LHPOWER,
      LVPOWER,
      LHPOWER,
      LVPOWER2,
      LVPOWER,
      LVPOWER,
      LVPOWER3,
      LVPOWER7,
      LHPOWER,
      LVPOWER5,
      LHPOWER,
      LVPOWER6,
      LVPOWER4,
      LVPOWER9,
      LVPOWER8,
      LVPOWER10
    ];
    fixSingle = function(x, y) {
      var adjTile = 0;
      var tile2 = this._worldEffects.getTile(x, y);
      tile2 = TileUtils.normalizeRoad(tile2);
      if (tile2 >= ROADS && tile2 <= INTERSECTION) {
        if (y > 0) {
          tile2 = this._worldEffects.getTileValue(x, y - 1);
          tile2 = TileUtils.normalizeRoad(tile2);
          if ((tile2 === HRAILROAD || tile2 >= ROADBASE && tile2 <= VROADPOWER) && tile2 !== HROADPOWER && tile2 !== VRAILROAD && tile2 !== ROADBASE)
            adjTile |= 1;
        }
        if (x < this._map.width - 1) {
          tile2 = this._worldEffects.getTileValue(x + 1, y);
          tile2 = TileUtils.normalizeRoad(tile2);
          if ((tile2 === VRAILROAD || tile2 >= ROADBASE && tile2 <= VROADPOWER) && tile2 !== VROADPOWER && tile2 !== HRAILROAD && tile2 !== VBRIDGE)
            adjTile |= 2;
        }
        if (y < this._map.height - 1) {
          tile2 = this._worldEffects.getTileValue(x, y + 1);
          tile2 = TileUtils.normalizeRoad(tile2);
          if ((tile2 === HRAILROAD || tile2 >= ROADBASE && tile2 <= VROADPOWER) && tile2 !== HROADPOWER && tile2 !== VRAILROAD && tile2 !== ROADBASE)
            adjTile |= 4;
        }
        if (x > 0) {
          tile2 = this._worldEffects.getTileValue(x - 1, y);
          tile2 = TileUtils.normalizeRoad(tile2);
          if ((tile2 === VRAILROAD || tile2 >= ROADBASE && tile2 <= VROADPOWER) && tile2 !== VROADPOWER && tile2 !== HRAILROAD && tile2 !== VBRIDGE)
            adjTile |= 8;
        }
        this._worldEffects.setTile(x, y, RoadTable[adjTile], BULLBIT | BURNBIT);
        return;
      }
      if (tile2 >= LHRAIL && tile2 <= LVRAIL10) {
        if (y > 0) {
          tile2 = this._worldEffects.getTileValue(x, y - 1);
          tile2 = TileUtils.normalizeRoad(tile2);
          if (tile2 >= RAILHPOWERV && tile2 <= VRAILROAD && tile2 !== RAILHPOWERV && tile2 !== HRAILROAD && tile2 !== HRAIL)
            adjTile |= 1;
        }
        if (x < this._map.width - 1) {
          tile2 = this._worldEffects.getTileValue(x + 1, y);
          tile2 = TileUtils.normalizeRoad(tile2);
          if (tile2 >= RAILHPOWERV && tile2 <= VRAILROAD && tile2 !== RAILVPOWERH && tile2 !== VRAILROAD && tile2 !== VRAIL)
            adjTile |= 2;
        }
        if (y < this._map.height - 1) {
          tile2 = this._worldEffects.getTileValue(x, y + 1);
          tile2 = TileUtils.normalizeRoad(tile2);
          if (tile2 >= RAILHPOWERV && tile2 <= VRAILROAD && tile2 !== RAILHPOWERV && tile2 !== HRAILROAD && tile2 !== HRAIL)
            adjTile |= 4;
        }
        if (x > 0) {
          tile2 = this._worldEffects.getTileValue(x - 1, y);
          tile2 = TileUtils.normalizeRoad(tile2);
          if (tile2 >= RAILHPOWERV && tile2 <= VRAILROAD && tile2 !== RAILVPOWERH && tile2 !== VRAILROAD && tile2 !== VRAIL)
            adjTile |= 8;
        }
        this._worldEffects.setTile(x, y, RailTable[adjTile], BULLBIT | BURNBIT);
        return;
      }
      if (tile2 >= LHPOWER && tile2 <= LVPOWER10) {
        if (y > 0) {
          tile2 = this._worldEffects.getTile(x, y - 1);
          if (tile2.isConductive()) {
            tile2 = tile2.getValue();
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 !== VPOWER && tile2 !== VROADPOWER && tile2 !== RAILVPOWERH)
              adjTile |= 1;
          }
        }
        if (x < this._map.width - 1) {
          tile2 = this._worldEffects.getTile(x + 1, y);
          if (tile2.isConductive()) {
            tile2 = tile2.getValue();
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 !== HPOWER && tile2 !== HROADPOWER && tile2 !== RAILHPOWERV)
              adjTile |= 2;
          }
        }
        if (y < this._map.height - 1) {
          tile2 = this._worldEffects.getTile(x, y + 1);
          if (tile2.isConductive()) {
            tile2 = tile2.getValue();
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 !== VPOWER && tile2 !== VROADPOWER && tile2 !== RAILVPOWERH)
              adjTile |= 4;
          }
        }
        if (x > 0) {
          tile2 = this._worldEffects.getTile(x - 1, y);
          if (tile2.isConductive()) {
            tile2 = tile2.getValue();
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 !== HPOWER && tile2 !== HROADPOWER && tile2 !== RAILHPOWERV)
              adjTile |= 8;
          }
        }
        this._worldEffects.setTile(x, y, WireTable[adjTile], BLBNCNBIT);
        return;
      }
    };
    checkZoneConnections = function(x, y) {
      this.fixSingle(x, y);
      if (y > 0)
        this.fixSingle(x, y - 1);
      if (x < this._map.width - 1)
        this.fixSingle(x + 1, y);
      if (y < this._map.height - 1)
        this.fixSingle(x, y + 1);
      if (x > 0)
        this.fixSingle(x - 1, y);
    };
    checkBorder = function(x, y, size) {
      x = x - 1;
      y = y - 1;
      var i;
      for (i = 0; i < size; i++)
        this.fixZone(x + i, y - 1);
      for (i = 0; i < size; i++)
        this.fixZone(x - 1, y + i);
      for (i = 0; i < size; i++)
        this.fixZone(x + i, y + size);
      for (i = 0; i < size; i++)
        this.fixZone(x + size, y + i);
    };
    Connector = function(toolConstructor) {
      toolConstructor.prototype.checkZoneConnections = checkZoneConnections;
      toolConstructor.prototype.fixSingle = fixSingle;
      toolConstructor.prototype.checkBorder = checkBorder;
      return toolConstructor;
    };
    makeTool$2 = BaseTool.makeTool;
    ConnectingTool = function(toolConstructor) {
      return Connector(makeTool$2(toolConstructor));
    };
    BuildingTool = ConnectingTool(function(cost, centreTile, map, size, animated2) {
      this.init(cost, map, false);
      this.centreTile = centreTile;
      this.size = size;
      this.animated = animated2;
    });
    BuildingTool.prototype.putBuilding = function(leftX, topY) {
      var posX, posY, tileValue, tileFlags;
      var baseTile = this.centreTile - this.size - 1;
      for (var dy = 0; dy < this.size; dy++) {
        posY = topY + dy;
        for (var dx = 0; dx < this.size; dx++) {
          posX = leftX + dx;
          tileValue = baseTile;
          tileFlags = BNCNBIT;
          if (dx === 1) {
            if (dy === 1)
              tileFlags |= ZONEBIT;
            else if (dy === 2 && this.animated)
              tileFlags |= ANIMBIT;
          }
          this._worldEffects.setTile(posX, posY, tileValue, tileFlags);
          baseTile++;
        }
      }
    };
    BuildingTool.prototype.prepareBuildingSite = function(leftX, topY) {
      if (leftX < 0 || leftX + this.size > this._map.width)
        return this.TOOLRESULT_FAILED;
      if (topY < 0 || topY + this.size > this._map.height)
        return this.TOOLRESULT_FAILED;
      var posX, posY, tileValue;
      for (var dy = 0; dy < this.size; dy++) {
        posY = topY + dy;
        for (var dx = 0; dx < this.size; dx++) {
          posX = leftX + dx;
          tileValue = this._worldEffects.getTileValue(posX, posY);
          if (tileValue === DIRT)
            continue;
          if (!this.autoBulldoze) {
            return this.TOOLRESULT_NEEDS_BULLDOZE;
          }
          if (!TileUtils.canBulldoze(tileValue)) {
            return this.TOOLRESULT_NEEDS_BULLDOZE;
          }
          this._worldEffects.setTile(posX, posY, DIRT);
          this.addCost(this.bulldozerCost);
        }
      }
      return this.TOOLRESULT_OK;
    };
    BuildingTool.prototype.buildBuilding = function(x, y) {
      x--;
      y--;
      var prepareResult = this.prepareBuildingSite(x, y);
      if (prepareResult !== this.TOOLRESULT_OK)
        return prepareResult;
      this.addCost(this.toolCost);
      this.putBuilding(x, y);
      this.checkBorder(x, y);
      return this.TOOLRESULT_OK;
    };
    BuildingTool.prototype.doTool = function(x, y, blockMaps) {
      this.result = this.buildBuilding(x, y);
    };
    BulldozerTool = EventEmitter(ConnectingTool(function(map) {
      this.init(10, map, true);
    }));
    BulldozerTool.prototype.putRubble = function(x, y, size) {
      for (var xx = x; xx < x + size; xx++) {
        for (var yy = y; yy < y + size; yy++) {
          if (this._map.testBounds(xx, yy)) {
            var tile2 = this._worldEffects.getTileValue(xx, yy);
            if (tile2 != RADTILE && tile2 != DIRT)
              this._worldEffects.setTile(xx, yy, TINYEXP + Random.getRandom(2), ANIMBIT | BULLBIT);
          }
        }
      }
    };
    BulldozerTool.prototype.layDoze = function(x, y) {
      var tile2 = this._worldEffects.getTile(x, y);
      if (!tile2.isBulldozable())
        return this.TOOLRESULT_FAILED;
      tile2 = tile2.getValue();
      tile2 = TileUtils.normalizeRoad(tile2);
      switch (tile2) {
        case HBRIDGE:
        case VBRIDGE:
        case BRWV:
        case BRWH:
        case HBRDG0:
        case HBRDG1:
        case HBRDG2:
        case HBRDG3:
        case VBRDG0:
        case VBRDG1:
        case VBRDG2:
        case VBRDG3:
        case HPOWER:
        case VPOWER:
        case HRAIL:
        case VRAIL:
          this._worldEffects.setTile(x, y, RIVER);
          break;
        default:
          this._worldEffects.setTile(x, y, DIRT);
          break;
      }
      this.addCost(1);
      return this.TOOLRESULT_OK;
    };
    BulldozerTool.prototype.doTool = function(x, y, blockMaps) {
      if (!this._map.testBounds(x, y))
        this.result = this.TOOLRESULT_FAILED;
      var tile2 = this._worldEffects.getTile(x, y);
      var tileValue = tile2.getValue();
      var zoneSize = 0;
      var deltaX;
      var deltaY;
      if (tile2.isZone()) {
        zoneSize = ZoneUtils.checkZoneSize(tileValue);
        deltaX = 0;
        deltaY = 0;
      } else {
        var result = ZoneUtils.checkBigZone(tileValue);
        zoneSize = result.zoneSize;
        deltaX = result.deltaX;
        deltaY = result.deltaY;
      }
      if (zoneSize > 0) {
        this.addCost(this.bulldozerCost);
        var centerX = x + deltaX;
        var centerY = y + deltaY;
        switch (zoneSize) {
          case 3:
            this._emitEvent(SOUND_EXPLOSIONHIGH);
            this.putRubble(centerX - 1, centerY - 1, 3);
            break;
          case 4:
            this._emitEvent(SOUND_EXPLOSIONLOW);
            this.putRubble(centerX - 1, centerY - 1, 4);
            break;
          case 6:
            this._emitEvent(SOUND_EXPLOSIONHIGH);
            this._emitEvent(SOUND_EXPLOSIONLOW);
            this.putRubble(centerX - 1, centerY - 1, 6);
            break;
        }
        this.result = this.TOOLRESULT_OK;
      } else {
        var toolResult;
        if (tileValue === RIVER || tileValue === REDGE || tileValue === CHANNEL) {
          toolResult = this.layDoze(x, y);
          if (tileValue !== this._worldEffects.getTileValue(x, y))
            this.addCost(5);
        } else {
          toolResult = this.layDoze(x, y);
          this.checkZoneConnections(x, y);
        }
        this.result = toolResult;
      }
    };
    makeTool$1 = BaseTool.makeTool;
    ParkTool = makeTool$1(function(map) {
      this.init(10, map, true);
    });
    ParkTool.prototype.doTool = function(x, y, blockMaps) {
      if (this._worldEffects.getTileValue(x, y) !== DIRT) {
        this.result = this.TOOLRESULT_NEEDS_BULLDOZE;
        return;
      }
      var value = Random.getRandom(4);
      var tileFlags = BURNBIT | BULLBIT;
      var tileValue;
      if (value === 4) {
        tileValue = FOUNTAIN;
        tileFlags |= ANIMBIT;
      } else {
        tileValue = value + WOODS2;
      }
      this._worldEffects.setTile(x, y, tileValue, tileFlags);
      this.addCost(10);
      this.result = this.TOOLRESULT_OK;
    };
    RailTool = ConnectingTool(function(map) {
      this.init(20, map, true, true);
    });
    RailTool.prototype.layRail = function(x, y) {
      this.doAutoBulldoze(x, y);
      var tile2 = this._worldEffects.getTileValue(x, y);
      tile2 = TileUtils.normalizeRoad(tile2);
      var cost = this.toolCost;
      switch (tile2) {
        case DIRT:
          this._worldEffects.setTile(x, y, LHRAIL, BULLBIT | BURNBIT);
          break;
        case RIVER:
        case REDGE:
        case CHANNEL:
          cost = 100;
          if (x < this._map.width - 1) {
            tile2 = this._worldEffects.getTileValue(x + 1, y);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 == RAILHPOWERV || tile2 == HRAIL || tile2 >= LHRAIL && tile2 <= HRAILROAD) {
              this._worldEffects.setTile(x, y, HRAIL, BULLBIT);
              break;
            }
          }
          if (x > 0) {
            tile2 = this._worldEffects.getTileValue(x - 1, y);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 == RAILHPOWERV || tile2 == HRAIL || tile2 > VRAIL && tile2 < VRAILROAD) {
              this._worldEffects.setTile(x, y, HRAIL, BULLBIT);
              break;
            }
          }
          if (y < this._map.height - 1) {
            tile2 = this._worldEffects.getTileValue(x, y + 1);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 == RAILVPOWERH || tile2 == VRAILROAD || tile2 > HRAIL && tile2 < HRAILROAD) {
              this._worldEffects.setTile(x, y, VRAIL, BULLBIT);
              break;
            }
          }
          if (y > 0) {
            tile2 = this._worldEffects.getTileValue(x, y - 1);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 == RAILVPOWERH || tile2 == VRAILROAD || tile2 > HRAIL && tile2 < HRAILROAD) {
              this._worldEffects.setTile(x, y, VRAIL, BULLBIT);
              break;
            }
          }
          return this.TOOLRESULT_FAILED;
        case LHPOWER:
          this._worldEffects.setTile(x, y, RAILVPOWERH, CONDBIT | BURNBIT | BULLBIT);
          break;
        case LVPOWER:
          this._worldEffects.setTile(x, y, RAILHPOWERV, CONDBIT | BURNBIT | BULLBIT);
          break;
        case ROADS:
          this._worldEffects.setTile(x, y, VRAILROAD, BURNBIT | BULLBIT);
          break;
        case ROADS2:
          this._worldEffects.setTile(x, y, HRAILROAD, BURNBIT | BULLBIT);
          break;
        default:
          return this.TOOLRESULT_FAILED;
      }
      this.addCost(cost);
      this.checkZoneConnections(x, y);
      return this.TOOLRESULT_OK;
    };
    RailTool.prototype.doTool = function(x, y, blockMaps) {
      this.result = this.layRail(x, y);
    };
    RoadTool = ConnectingTool(function(map) {
      this.init(10, map, true, true);
    });
    RoadTool.prototype.layRoad = function(x, y) {
      this.doAutoBulldoze(x, y);
      var tile2 = this._worldEffects.getTileValue(x, y);
      var cost = this.toolCost;
      switch (tile2) {
        case DIRT:
          this._worldEffects.setTile(x, y, ROADS, BULLBIT | BURNBIT);
          break;
        case RIVER:
        case REDGE:
        case CHANNEL:
          cost = 50;
          if (x < this._map.width - 1) {
            tile2 = this._worldEffects.getTileValue(x + 1, y);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 === VRAILROAD || tile2 === HBRIDGE || tile2 >= ROADS && tile2 <= HROADPOWER) {
              this._worldEffects.setTile(x, y, HBRIDGE, BULLBIT);
              break;
            }
          }
          if (x > 0) {
            tile2 = this._worldEffects.getTileValue(x - 1, y);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 === VRAILROAD || tile2 === HBRIDGE || tile2 >= ROADS && tile2 <= INTERSECTION) {
              this._worldEffects.setTile(x, y, HBRIDGE, BULLBIT);
              break;
            }
          }
          if (y < this._map.height - 1) {
            tile2 = this._worldEffects.getTileValue(x, y + 1);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 === HRAILROAD || tile2 === VROADPOWER || tile2 >= VBRIDGE && tile2 <= INTERSECTION) {
              this._worldEffects.setTile(x, y, VBRIDGE, BULLBIT);
              break;
            }
          }
          if (y > 0) {
            tile2 = this._worldEffects.getTileValue(x, y - 1);
            tile2 = TileUtils.normalizeRoad(tile2);
            if (tile2 === HRAILROAD || tile2 === VROADPOWER || tile2 >= VBRIDGE && tile2 <= INTERSECTION) {
              this._worldEffects.setTile(x, y, VBRIDGE, BULLBIT);
              break;
            }
          }
          return this.TOOLRESULT_FAILED;
        case LHPOWER:
          this._worldEffects.setTile(x, y, VROADPOWER, CONDBIT | BURNBIT | BULLBIT);
          break;
        case LVPOWER:
          this._worldEffects.setTile(x, y, HROADPOWER, CONDBIT | BURNBIT | BULLBIT);
          break;
        case LHRAIL:
          this._worldEffects.setTile(x, y, HRAILROAD, BURNBIT | BULLBIT);
          break;
        case LVRAIL:
          this._worldEffects.setTile(x, y, VRAILROAD, BURNBIT | BULLBIT);
          break;
        default:
          return this.TOOLRESULT_FAILED;
      }
      this.addCost(cost);
      this.checkZoneConnections(x, y);
      return this.TOOLRESULT_OK;
    };
    RoadTool.prototype.doTool = function(x, y, blockMaps) {
      this.result = this.layRoad(x, y);
    };
    jq$9 = jqueryProxy.default || jqueryProxy;
    makeTool = BaseTool.makeTool;
    QueryTool = EventEmitter(makeTool(function(map) {
      this.init(0, map, false, false);
    }));
    QueryTool.prototype.classifyPopulationDensity = function(x, y, blockMaps) {
      var density = blockMaps.populationDensityMap.worldGet(x, y);
      density = density >> 6;
      density = density & 3;
      jq$9("#queryDensity").text(Text.densityStrings[density]);
    };
    QueryTool.prototype.classifyLandValue = function(x, y, blockMaps) {
      var landValue = blockMaps.landValueMap.worldGet(x, y);
      var i = 0;
      if (landValue >= 150)
        i = 3;
      else if (landValue >= 80)
        i = 2;
      else if (landValue >= 30)
        i = 1;
      var text = Text.landValueStrings[i];
      jq$9("#queryLandValue").text(text);
    };
    QueryTool.prototype.classifyCrime = function(x, y, blockMaps) {
      var crime = blockMaps.crimeRateMap.worldGet(x, y);
      crime = crime >> 6;
      crime = crime & 3;
      jq$9("#queryCrime").text(Text.crimeStrings[crime]);
    };
    QueryTool.prototype.classifyPollution = function(x, y, blockMaps) {
      var pollution = blockMaps.pollutionDensityMap.worldGet(x, y);
      pollution = pollution >> 6;
      pollution = pollution & 3;
      jq$9("#queryPollution").text(Text.pollutionStrings[pollution]);
    };
    QueryTool.prototype.classifyRateOfGrowth = function(x, y, blockMaps) {
      var rate = blockMaps.rateOfGrowthMap.worldGet(x, y);
      rate = rate >> 6;
      rate = rate & 3;
      jq$9("#queryRate").text(Text.rateStrings[rate]);
    };
    QueryTool.prototype.classifyDebug = function(x, y, blockMaps) {
      return;
    };
    QueryTool.prototype.classifyZone = function(x, y) {
      var baseTiles = [
        DIRT,
        RIVER,
        TREEBASE,
        RUBBLE,
        FLOOD,
        RADTILE,
        FIRE,
        ROADBASE,
        POWERBASE,
        RAILBASE,
        RESBASE,
        COMBASE,
        INDBASE,
        PORTBASE,
        AIRPORTBASE,
        COALBASE,
        FIRESTBASE,
        POLICESTBASE,
        STADIUMBASE,
        NUCLEARBASE,
        HBRDG0,
        RADAR0,
        FOUNTAIN,
        INDBASE2,
        FOOTBALLGAME1,
        VBRDG0,
        952
      ];
      var tileValue = this._map.getTileValue(x, y);
      if (tileValue >= COALSMOKE1 && tileValue < FOOTBALLGAME1)
        tileValue = COALBASE;
      var index, l;
      for (index = 0, l = baseTiles.length - 1; index < l; index++) {
        if (tileValue < baseTiles[index + 1])
          break;
      }
      jq$9("#queryZoneType").text(Text.zoneTypes[index]);
    };
    QueryTool.prototype.doTool = function(x, y, blockMaps) {
      var text = "Position (" + x + ", " + y + ")";
      text += " TileValue: " + this._map.getTileValue(x, y);
      this.classifyZone(x, y);
      this.classifyPopulationDensity(x, y, blockMaps);
      this.classifyLandValue(x, y, blockMaps);
      this.classifyCrime(x, y, blockMaps);
      this.classifyPollution(x, y, blockMaps);
      this.classifyRateOfGrowth(x, y, blockMaps);
      this.classifyDebug(x, y, blockMaps);
      this._emitEvent(QUERY_WINDOW_NEEDED);
      this.result = this.TOOLRESULT_OK;
    };
    WireTool = ConnectingTool(function(map) {
      this.init(5, map, true, true);
    });
    WireTool.prototype.layWire = function(x, y) {
      this.doAutoBulldoze(x, y);
      var cost = this.toolCost;
      var tile2 = this._worldEffects.getTileValue(x, y);
      tile2 = TileUtils.normalizeRoad(tile2);
      switch (tile2) {
        case DIRT:
          this._worldEffects.setTile(x, y, LHPOWER, CONDBIT | BURNBIT | BULLBIT);
          break;
        case RIVER:
        case REDGE:
        case CHANNEL:
          cost = 25;
          if (x < this._map.width - 1) {
            tile2 = this._worldEffects.getTile(x + 1, y);
            if (tile2.isConductive()) {
              tile2 = tile2.getValue();
              tile2 = TileUtils.normalizeRoad(tile2);
              if (tile2 != HROADPOWER && tile2 != RAILHPOWERV && tile2 != HPOWER) {
                this._worldEffects.setTile(x, y, VPOWER, CONDBIT | BULLBIT);
                break;
              }
            }
          }
          if (x > 0) {
            tile2 = this._worldEffects.getTile(x - 1, y);
            if (tile2.isConductive()) {
              tile2 = tile2.getValue();
              tile2 = TileUtils.normalizeRoad(tile2);
              if (tile2 != HROADPOWER && tile2 != RAILHPOWERV && tile2 != HPOWER) {
                this._worldEffects.setTile(x, y, VPOWER, CONDBIT | BULLBIT);
                break;
              }
            }
          }
          if (y < this._map.height - 1) {
            tile2 = this._worldEffects.getTile(x, y + 1);
            if (tile2.isConductive()) {
              tile2 = tile2.getValue();
              tile2 = TileUtils.normalizeRoad(tile2);
              if (tile2 != VROADPOWER && tile2 != RAILVPOWERH && tile2 != VPOWER) {
                this._worldEffects.setTile(x, y, HPOWER, CONDBIT | BULLBIT);
                break;
              }
            }
          }
          if (y > 0) {
            tile2 = this._worldEffects.getTile(x, y - 1);
            if (tile2.isConductive()) {
              tile2 = tile2.getValue();
              tile2 = TileUtils.normalizeRoad(tile2);
              if (tile2 != VROADPOWER && tile2 != RAILVPOWERH && tile2 != VPOWER) {
                this._worldEffects.setTile(x, y, HPOWER, CONDBIT | BULLBIT);
                break;
              }
            }
          }
          return this.TOOLRESULT_FAILED;
        case ROADS:
          this._worldEffects.setTile(x, y, HROADPOWER, CONDBIT | BURNBIT | BULLBIT);
          break;
        case ROADS2:
          this._worldEffects.setTile(x, y, VROADPOWER, CONDBIT | BURNBIT | BULLBIT);
          break;
        case LHRAIL:
          this._worldEffects.setTile(x, y, RAILHPOWERV, CONDBIT | BURNBIT | BULLBIT);
          break;
        case LVRAIL:
          this._worldEffects.setTile(x, y, RAILVPOWERH, CONDBIT | BURNBIT | BULLBIT);
          break;
        default:
          return this.TOOLRESULT_FAILED;
      }
      this.addCost(cost);
      this.checkZoneConnections(x, y);
      return this.TOOLRESULT_OK;
    };
    WireTool.prototype.doTool = function(x, y, blockMaps) {
      this.result = this.layWire(x, y);
    };
    jq$8 = jqueryProxy.default || jqueryProxy;
    InputStatus = EventEmitter(function(map, tileWidth) {
      this.gameTools = new GameTools(map);
      this.gameTools.addEventListener(QUERY_WINDOW_NEEDED, MiscUtils.reflectEvent.bind(this, QUERY_WINDOW_NEEDED));
      this.canvasID = MiscUtils.normaliseDOMid(canvasID);
      this._tileWidth = tileWidth;
      this.up = false;
      this.down = false;
      this.left = false;
      this.right = false;
      this.escape = false;
      this.mouseX = -1;
      this.mouseY = -1;
      this._dragging = false;
      this._lastdragX = -1;
      this._lastdragY = -1;
      this.toolName = null;
      this.currentTool = null;
      this.toolWidth = 0;
      this.toolColour = "";
      jq$8(document).keydown(keyDownHandler.bind(this));
      jq$8(document).keyup(keyUpHandler.bind(this));
      this.getRelativeCoordinates = getRelativeCoordinates.bind(this);
      jq$8(this.canvasID).on("mouseenter", mouseEnterHandler.bind(this));
      jq$8(this.canvasID).on("mouseleave", mouseLeaveHandler.bind(this));
      this.mouseDownHandler = mouseDownHandler.bind(this);
      this.mouseMoveHandler = mouseMoveHandler.bind(this);
      this.mouseUpHandler = mouseUpHandler.bind(this);
      this.canvasClickHandler = canvasClickHandler.bind(this);
      jq$8(".toolButton").click(toolButtonHandler.bind(this));
      jq$8("#budgetRequest").click(budgetHandler.bind(this));
      jq$8("#evalRequest").click(evalHandler.bind(this));
      jq$8("#disasterRequest").click(disasterHandler.bind(this));
      jq$8("#pauseRequest").click(this.speedChangeHandler.bind(this));
      jq$8("#screenshotRequest").click(screenshotHandler.bind(this));
      jq$8("#settingsRequest").click(settingsHandler.bind(this));
      jq$8("#saveRequest").click(saveHandler.bind(this));
      jq$8("#debugRequest").click(debugHandler.bind(this));
    });
    canvasID = "#" + GameCanvas.DEFAULT_ID;
    toolOutputID = "#toolOutput";
    keyDownHandler = function(e2) {
      var handled = false;
      switch (e2.keyCode) {
        case 38:
        case 87:
          this.up = true;
          handled = true;
          break;
        case 40:
        case 83:
          this.down = true;
          handled = true;
          break;
        case 39:
        case 68:
          this.right = true;
          handled = true;
          break;
        case 37:
        case 65:
          this.left = true;
          handled = true;
          break;
        case 27:
          this.escape = true;
          handled = true;
      }
      if (handled)
        e2.preventDefault();
    };
    keyUpHandler = function(e2) {
      switch (e2.keyCode) {
        case 38:
        case 87:
          this.up = false;
          break;
        case 40:
        case 83:
          this.down = false;
          break;
        case 39:
        case 68:
          this.right = false;
          break;
        case 37:
        case 65:
          this.left = false;
          break;
        case 27:
          this.escape = false;
      }
    };
    getRelativeCoordinates = function(e2) {
      var cRect = document.querySelector(this.canvasID).getBoundingClientRect();
      return { x: e2.clientX - cRect.left, y: e2.clientY - cRect.top };
    };
    mouseEnterHandler = function(e2) {
      console.log(this);
      if (this.currentTool === null || this.currentTool === void 0)
        return;
      jq$8(this.canvasID).on("mousemove", this.mouseMoveHandler);
      if (this.currentTool.isDraggable)
        jq$8(this.canvasID).on("mousedown", this.mouseDownHandler);
      else
        jq$8(this.canvasID).on("click", this.canvasClickHandler);
    };
    mouseDownHandler = function(e2) {
      if (e2.which !== 1 || e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey)
        return;
      var coords = this.getRelativeCoordinates(e2);
      this.mouseX = coords.x;
      this.mouseY = coords.y;
      this._dragging = true;
      this._emitEvent(TOOL_CLICKED, { x: this.mouseX, y: this.mouseY });
      this._lastDragX = Math.floor(this.mouseX / this._tileWidth);
      this._lastDragY = Math.floor(this.mouseY / this._tileWidth);
      jq$8(this.canvasID).on("mouseup", this.mouseUpHandler);
      e2.preventDefault();
    };
    mouseUpHandler = function(e2) {
      this._dragging = false;
      this._lastDragX = -1;
      this._lastDragY = -1;
      jq$8(this.canvasID).off("mouseup");
      e2.preventDefault();
    };
    mouseLeaveHandler = function(e2) {
      jq$8(this.canvasID).off("mousedown");
      jq$8(this.canvasID).off("mousemove");
      jq$8(this.canvasID).off("mouseup");
      if (this._dragging) {
        this._dragging = false;
        this._lastDragX = -1;
        this._lastDragY = -1;
      }
      jq$8(this.canvasID).off("click");
      this.mouseX = -1;
      this.mouseY = -1;
    };
    mouseMoveHandler = function(e2) {
      var coords = this.getRelativeCoordinates(e2);
      this.mouseX = coords.x;
      this.mouseY = coords.y;
      if (this._dragging) {
        var x = Math.floor(this.mouseX / this._tileWidth);
        var y = Math.floor(this.mouseY / this._tileWidth);
        var lastX = this._lastDragX;
        var lastY = this._lastDragY;
        if (x !== lastX || y !== lastY) {
          this._emitEvent(TOOL_CLICKED, { x: this.mouseX, y: this.mouseY });
          this._lastDragX = x;
          this._lastDragY = y;
        }
      }
    };
    canvasClickHandler = function(e2) {
      if (e2.which !== 1 || e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey || this.mouseX === -1 || this._mouseY === -1 || this._dragging)
        return;
      this._emitEvent(TOOL_CLICKED, { x: this.mouseX, y: this.mouseY });
      e2.preventDefault();
    };
    toolButtonHandler = function(e2) {
      jq$8(".selected").each(function() {
        jq$8(this).removeClass("selected");
        jq$8(this).addClass("unselected");
      });
      jq$8(e2.target).removeClass("unselected");
      jq$8(e2.target).addClass("selected");
      this.toolName = jq$8(e2.target).attr("data-tool");
      this.toolWidth = jq$8(e2.target).attr("data-size");
      this.currentTool = this.gameTools[this.toolName];
      this.toolColour = jq$8(e2.target).attr("data-colour");
      jq$8(toolOutputID).html("Tools");
      if (this.toolName !== "query") {
        jq$8(this.canvasID).removeClass("helpPointer");
        jq$8(this.canvasID).addClass("pointer");
      } else {
        jq$8(this.canvasID).removeClass("pointer");
        jq$8(this.canvasID).addClass("helpPointer");
      }
      e2.preventDefault();
    };
    InputStatus.prototype.speedChangeHandler = function(e2) {
      var requestedSpeed = jq$8("#pauseRequest").text();
      var newRequest = requestedSpeed === "Pause" ? "Play" : "Pause";
      jq$8("#pauseRequest").text(newRequest);
      this._emitEvent(SPEED_CHANGE, requestedSpeed);
    };
    InputStatus.prototype.clearTool = function() {
      if (this.toolName === "query") {
        jq$8(this.canvasID).removeClass("helpPointer");
        jq$8(this.canvasID).addClass("pointer");
      }
      this.currentTool = null;
      this.toolWidth = 0;
      this.toolColour = "";
      jq$8(".selected").removeClass("selected");
    };
    makeHandler = function(message) {
      var m = Messages[message];
      return function(e2) {
        this._emitEvent(m);
      };
    };
    budgetHandler = makeHandler("BUDGET_REQUESTED");
    debugHandler = makeHandler("DEBUG_WINDOW_REQUESTED");
    disasterHandler = makeHandler("DISASTER_REQUESTED");
    evalHandler = makeHandler("EVAL_REQUESTED");
    screenshotHandler = makeHandler("SCREENSHOT_WINDOW_REQUESTED");
    settingsHandler = makeHandler("SETTINGS_WINDOW_REQUESTED");
    saveHandler = makeHandler("SAVE_REQUESTED");
    jq$7 = jqueryProxy.default || jqueryProxy;
    NagWindow = ModalWindow(function() {
      jq$7(nagFormID).on("submit", submit$6.bind(this));
    });
    nagFormID = "#nagForm";
    nagOKID = "#nagOK";
    submit$6 = function(e2) {
      e2.preventDefault();
      this.close();
    };
    NagWindow.prototype.close = function() {
      this._toggleDisplay();
      this._emitEvent(NAG_WINDOW_CLOSED);
    };
    NagWindow.prototype.open = function() {
      this._toggleDisplay();
      jq$7(nagOKID).focus();
    };
    jq$6 = jqueryProxy.default || jqueryProxy;
    QueryWindow = ModalWindow(function() {
      this._debugToggled = false;
      jq$6(queryFormID).on("submit", submit$5.bind(this));
    });
    queryFormID = "#queryForm";
    queryOKID = "#queryOK";
    submit$5 = function(e2) {
      e2.preventDefault();
      this.close();
    };
    QueryWindow.prototype.close = function() {
      this._toggleDisplay();
      this._emitEvent(QUERY_WINDOW_CLOSED);
    };
    QueryWindow.prototype.open = function() {
      this._toggleDisplay();
      jq$6(queryOKID).focus();
    };
    jq$5 = jqueryProxy.default || jqueryProxy;
    RCI.prototype._clear = function(ctx) {
      ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    RCI.prototype._drawRect = function(ctx) {
      var boxLeft = this._padding * this._rectSize;
      var boxTop = (this._buckets + this._padding) * this._rectSize;
      var boxWidth = 7 * this._padding * this._rectSize;
      var boxHeight = this._padding * this._rectSize;
      ctx.fillStyle = "rgb(192, 192, 192)";
      ctx.fillRect(boxLeft, boxTop, boxWidth, boxHeight);
    };
    RCI.prototype._drawValue = function(ctx, index, value) {
      if (index > 1)
        value = Math.floor(2e3 / 1500 * value);
      var colours = ["rgb(0,255,0)", "rgb(90, 90, 243)", "rgb(255, 255, 0)"];
      var barHeightRect = Math.floor(Math.abs(value) / this._scale);
      var barStartY = value >= 0 ? this._buckets + this._padding - barHeightRect : this._buckets + 2 * this._padding;
      var barStartX = 2 * this._padding + index * 2 * this._padding;
      ctx.fillStyle = colours[index];
      ctx.fillRect(barStartX * this._rectSize, barStartY * this._rectSize, this._padding * this._rectSize, barHeightRect * this._rectSize);
    };
    RCI.prototype._drawLabel = function(ctx, index) {
      var labels = ["R", "C", "I"];
      var textLeft = 2 * this._padding + index * 2 * this._padding + Math.floor(this._padding / 2);
      ctx.font = "normal xx-small sans-serif";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.textBaseline = "bottom";
      ctx.fillText(labels[index], textLeft * this._rectSize, (this._buckets + 2 * this._padding) * this._rectSize);
    };
    RCI.prototype.update = function(data) {
      if (!this._initialised) {
        var rect = this._canvas.parentNode.getBoundingClientRect();
        console.log("rect", rect, this._canvas.parentNode);
        this._canvas.width = rect.width;
        this._canvas.height = rect.height;
        this._canvas.style.margin = "0";
        this._canvas.style.padding = "0";
        this._intialised = true;
      }
      var ctx = this._canvas.getContext("2d");
      this._clear(ctx);
      this._drawRect(ctx);
      var values = [data.residential, data.commercial, data.industrial];
      for (var i = 0; i < 3; i++) {
        this._drawValue(ctx, i, values[i]);
        this._drawLabel(ctx, i);
      }
    };
    Object.defineProperty(RCI, "DEFAULT_ID", MiscUtils.makeConstantDescriptor("RCICanvas"));
    jq$4 = jqueryProxy.default || jqueryProxy;
    SaveWindow = ModalWindow(function() {
      jq$4(saveFormID).on("submit", submit$4.bind(this));
    });
    saveFormID = "#saveForm";
    saveOKID = "#saveOK";
    submit$4 = function(e2) {
      e2.preventDefault();
      this.close();
    };
    SaveWindow.prototype.close = function() {
      this._toggleDisplay();
      this._emitEvent(SAVE_WINDOW_CLOSED);
    };
    SaveWindow.prototype.open = function() {
      this._toggleDisplay();
      jq$4(saveOKID).focus();
    };
    jq$3 = jqueryProxy.default || jqueryProxy;
    ScreenshotLinkWindow = ModalWindow(function() {
      jq$3(screenshotLinkFormID).on("submit", submit$3.bind(this));
    });
    screenshotLinkFormID = "#screenshotLinkForm";
    screenshotLinkID = "#screenshotLink";
    ScreenshotLinkWindow.prototype.close = function() {
      this._toggleDisplay();
      this._emitEvent(SCREENSHOT_LINK_CLOSED);
    };
    submit$3 = function(e2) {
      e2.preventDefault();
      this.close();
    };
    ScreenshotLinkWindow.prototype.open = function(screenshotLink) {
      jq$3(screenshotLinkID).attr("href", screenshotLink);
      this._toggleDisplay();
    };
    jq$2 = jqueryProxy.default || jqueryProxy;
    ScreenshotWindow = ModalWindow(function() {
      jq$2(screenshotCancelID).on("click", cancel$1.bind(this));
      jq$2(screenshotFormID).on("submit", submit$2.bind(this));
    });
    screenshotCancelID = "#screenshotCancel";
    screenshotFormID = "#screenshotForm";
    ScreenshotWindow.prototype.close = function(action) {
      action = action || null;
      this._toggleDisplay();
      this._emitEvent(SCREENSHOT_WINDOW_CLOSED, action);
    };
    cancel$1 = function(e2) {
      e2.preventDefault();
      this.close(null);
    };
    submit$2 = function(e2) {
      e2.preventDefault();
      var action = null;
      var screenshotType = jq$2(".screenshotType:checked").val();
      if (screenshotType === "visible")
        action = ScreenshotWindow.SCREENSHOT_VISIBLE;
      else
        action = ScreenshotWindow.SCREENSHOT_ALL;
      this.close(action);
    };
    ScreenshotWindow.prototype.open = function(screenshotData) {
      this._toggleDisplay();
    };
    defineAction$1 = function() {
      var uid = 1;
      return function(name) {
        Object.defineProperty(ScreenshotWindow, name, MiscUtils.makeConstantDescriptor(uid));
        uid += 1;
      };
    }();
    defineAction$1("SCREENSHOT_VISIBLE");
    defineAction$1("SCREENSHOT_ALL");
    jq$1 = jqueryProxy.default || jqueryProxy;
    SettingsWindow = ModalWindow(function() {
      jq$1(settingsCancelID).on("click", cancel.bind(this));
      jq$1(settingsFormID).on("submit", submit$1.bind(this));
    });
    settingsCancelID = "#settingsCancel";
    settingsFormID = "#settingsForm";
    autoBudgetYesID = "#autoBudgetYes";
    autoBudgetNoID = "#autoBudgetNo";
    autoBulldozeYesID = "#autoBulldozeYes";
    autoBulldozeNoID = "#autoBulldozeNo";
    speedSlowID = "#speedSlow";
    speedMedID = "#speedMed";
    speedFastID = "#speedFast";
    disastersYesID = "#disastersYes";
    disastersNoID = "#disastersNo";
    SettingsWindow.prototype.close = function(actions) {
      actions = actions || [];
      this._emitEvent(SETTINGS_WINDOW_CLOSED, actions);
      this._toggleDisplay();
    };
    cancel = function(e2) {
      e2.preventDefault();
      this.close([]);
    };
    submit$1 = function(e2) {
      e2.preventDefault();
      var actions = [];
      var shouldAutoBudget = jq$1(".autoBudgetSetting:checked").val();
      if (shouldAutoBudget === "true")
        shouldAutoBudget = true;
      else
        shouldAutoBudget = false;
      actions.push({ action: SettingsWindow.AUTOBUDGET, data: shouldAutoBudget });
      var shouldAutoBulldoze = jq$1(".autoBulldozeSetting:checked").val();
      if (shouldAutoBulldoze === "true")
        shouldAutoBulldoze = true;
      else
        shouldAutoBulldoze = false;
      actions.push({ action: SettingsWindow.AUTOBULLDOZE, data: shouldAutoBulldoze });
      var speed = jq$1(".speedSetting:checked").val() - 0;
      actions.push({ action: SettingsWindow.SPEED, data: speed });
      var shouldEnableDisasters = jq$1(".enableDisastersSetting:checked").val();
      if (shouldEnableDisasters === "true")
        shouldEnableDisasters = true;
      else
        shouldEnableDisasters = false;
      actions.push({ action: SettingsWindow.DISASTERS_CHANGED, data: shouldEnableDisasters });
      this.close(actions);
    };
    SettingsWindow.prototype.open = function(settingsData) {
      if (settingsData.autoBudget)
        jq$1(autoBudgetYesID).prop("checked", true);
      else
        jq$1(autoBudgetNoID).prop("checked", true);
      if (settingsData.autoBulldoze)
        jq$1(autoBulldozeYesID).prop("checked", true);
      else
        jq$1(autoBulldozeNoID).prop("checked", true);
      if (settingsData.speed === Simulation.SPEED_SLOW)
        jq$1(speedSlowID).prop("checked", true);
      else if (settingsData.speed === Simulation.SPEED_MED)
        jq$1(speedMedID).prop("checked", true);
      else
        jq$1(speedFastID).prop("checked", true);
      if (settingsData.disasters)
        jq$1(disastersYesID).prop("checked", true);
      else
        jq$1(disastersNoID).prop("checked", true);
      this._toggleDisplay();
    };
    defineAction = function() {
      var uid = 0;
      return function(name) {
        Object.defineProperty(SettingsWindow, name, MiscUtils.makeConstantDescriptor(uid));
        uid += 1;
      };
    }();
    defineAction("AUTOBUDGET");
    defineAction("AUTOBULLDOZE");
    defineAction("SPEED");
    defineAction("DISASTERS_CHANGED");
    jq = jqueryProxy.default || jqueryProxy;
    TouchWarnWindow = ModalWindow(function() {
      jq(touchFormID).on("submit", submit.bind(this));
    });
    touchFormID = "#touchForm";
    touchOKID = "#touchOK";
    submit = function(e2) {
      e2.preventDefault();
      this.close();
    };
    TouchWarnWindow.prototype.close = function() {
      this._toggleDisplay();
      this._emitEvent(TOUCH_WINDOW_CLOSED);
    };
    TouchWarnWindow.prototype.open = function() {
      this._toggleDisplay();
      jq(touchOKID).focus();
    };
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<img id="${"tiles"}" class="${"imageData"}" src="${"images/tiles.png"}" alt="${"These are the game's principal tiles"}">
<img id="${"snowtiles"}" class="${"imageData"}" src="${"images/tilessnow.png"}" alt="${"These are the game's alternate tiles"}">
<img id="${"sprites"}" class="${"imageData"}" src="${"images/sprites.png"}" alt="${"These are the game's sprites"}">
<header id="${"header"}" class="${"chunk border-bottom padding10"}"><div class="${"left inlineblock"}"><h1 id="${"title"}" class="${"white fontlarge"}">micropolisJS Online</h1></div>
  <nav class="${"white right padding10 inlineblock"}"><ul><li class="${"padding10"}"><a href="${"/about"}" target="${"_blank"}">About</a></li>
      <li class="${"padding10"}"><a href="${"https://github.com/miunau/micropolisJS"}" target="${"_blank"}">GitHub</a></li></ul></nav></header>
<div id="${"wrapper"}"><main id="${"canvasContainer"}"><div class="${"hidden"}" id="${"opaque"}"></div>
    <div data-hasscript="${"false"}" id="${"loadingBanner"}" class="${"alignCenter padding10 mintcream chunk shadow centred"}">Loading</div>
    <div id="${"splash"}" class="${"mintcream awaitGeneration open shadow padding10 centred"}"><h2 class="${"chunk alignCenter"}">Welcome!</h2>
      <p>micropolisJS is Graeme McCutcheon&#39;s handmade Javascript port of the open-source city simulator <cite>Micropolis</cite> by Don Hopkins.</p>
      <p>This is an experimental online version by miunau.</p>
      <div id="${"splashContainer"}"></div>
      <div id="${"splashButtonContainer"}"><div id="${"splashButtons"}"><button id="${"splashLoad"}" class="${"width140 block loadSave splashButton"}" disabled>Load game</button>
          <button id="${"splashPlay"}" class="${"width140 block margin10 splashButton"}">Play this map</button>
          <button id="${"splashGenerate"}" class="${"width140 block margin10 splashButton"}">Generate another</button></div></div></div>
    <div id="${"start"}" class="${"mintcream open shadow padding10 centred"}"><h2 class="${"chunk alignCenter"}">New Game</h2>
      <form id="${"playForm"}"><label for="${"nameForm"}">City name (max 15 letters)</label>
        <input id="${"nameForm"}" autofocus required class="${"margin10"}" type="${"text"}" maxlength="${"15"}" autocomplete="${"off"}">
        Difficulty
        <input type="${"radio"}" class="${"difficulty"}" name="${"difficulty"}" id="${"difficultyEasy"}" value="${"0"}" checked="${"checked"}"><label for="${"difficultyEasy"}">Easy</label>
        <input type="${"radio"}" class="${"difficulty"}" name="${"difficulty"}" id="${"difficultyMed"}" value="${"1"}"><label for="${"difficultyMed"}">Medium</label>
        <input type="${"radio"}" class="${"difficulty"}" name="${"difficulty"}" id="${"difficultyHard"}" value="${"2"}"><label for="${"difficultyHard"}">Hard</label>
        <div id="${"playSubmitDiv"}"><input id="${"playit"}" type="${"submit"}" value="${"Play!"}"></div></form></div>
    <div id="${"infobar"}" class="${"alignCenter open z1 initialHidden"}"><div class="${"inner"}"><div><span id="${"name"}">Your Name Here</span></div>
        <div><span id="${"date"}">Jan 1900</span></div>
        <div class="${"elided"}">Funds $<span id="${"funds"}">20000</span></div>
        <div class="${"elided"}">Score: <span id="${"score"}">0</span></div>
        <div><span id="${"cclass"}">VILLAGE</span></div>
        <div class="${"elided"}">Population: <span id="${"population"}">0</span></div></div></div>
    <div id="${"miscButtons"}" class="${"alignCenter leftedge open controlShadow width140 padding10 mintcream z1 initialHidden"}"><div class="${"inner"}"><div><button id="${"budgetRequest"}" class="${"miscButton"}">Budget</button></div>
        <div><button id="${"evalRequest"}" class="${"miscButton"}">Evaluation</button></div>
        <div><button id="${"disasterRequest"}" class="${"miscButton"}">Disasters</button></div>
        <div><button id="${"saveRequest"}" class="${"miscButton loadSave"}" disabled>Save</button></div>
        <div><button id="${"settingsRequest"}" class="${"miscButton"}">Settings</button></div>
        <div><button id="${"screenshotRequest"}" class="${"miscButton"}">Take Picture</button></div>
        <div><button id="${"pauseRequest"}" class="${"miscButton"}">Pause</button></div></div></div>
    <div id="${"RCIContainer"}" class="${"z1 initialHidden"}"></div>
    <div id="${"controls"}" class="${"z1 initialHidden rightedge open"}"><div id="${"buttons"}"><button id="${"residentialButton"}" data-size="${"3"}" data-tool="${"residential"}" data-colour="${"lime"}" class="${"toolButton unselected"}"><img src="${"/icons/residential.png"}" width="${"24"}" height="${"24"}" alt="${"Residential ($100)"}"></button>
        <button id="${"nuclearButton"}" data-size="${"4"}" data-tool="${"nuclear"}" data-colour="${"mistyrose"}" class="${"toolButton unselected"}"><img src="${"/icons/nuclear.png"}" width="${"24"}" height="${"24"}" alt="${"Nuclear ($1000)"}"></button>
        <button id="${"commercialButton"}" data-size="${"3"}" data-tool="${"commercial"}" data-colour="${"blue"}" class="${"toolButton unselected"}"><img src="${"/icons/commercial.png"}" width="${"24"}" height="${"24"}" alt="${"Commercial ($100)"}"></button>
        <button id="${"coalButton"}" data-size="${"4"}" data-tool="${"coal"}" data-colour="${"gray"}" class="${"toolButton unselected"}"><img src="${"/icons/coal.png"}" width="${"24"}" height="${"24"}" alt="${"Coal ($300)"}"></button>
        <button id="${"industrialButton"}" data-size="${"3"}" data-tool="${"industrial"}" data-colour="${"yellow"}" class="${"toolButton unselected"}"><img src="${"/icons/industrial.png"}" width="${"24"}" height="${"24"}" alt="${"Industrial ($100)"}"></button>
        <button id="${"policeButton"}" data-size="${"3"}" data-tool="${"police"}" data-colour="${"darkblue"}" class="${"toolButton unselected"}"><img src="${"/icons/police.png"}" width="${"24"}" height="${"24"}" alt="${"Police ($500)"}"></button>
        <button id="${"roadButton"}" data-size="${"1"}" data-tool="${"road"}" data-colour="${"black"}" class="${"toolButton unselected"}"><img src="${"/icons/road.png"}" width="${"24"}" height="${"24"}" alt="${"Road ($10)"}"></button>
        <button id="${"fireButton"}" data-size="${"3"}" data-tool="${"fire"}" data-colour="${"red"}" class="${"toolButton unselected"}"><img src="${"/icons/fire.png"}" width="${"24"}" height="${"24"}" alt="${"Fire ($500)"}"></button>
        <button id="${"railButton"}" data-size="${"1"}" data-tool="${"rail"}" data-colour="${"brown"}" class="${"toolButton unselected"}"><img src="${"/icons/rail.png"}" width="${"24"}" height="${"24"}" alt="${"Rail ($10)"}"></button>
        <button id="${"portButton"}" data-size="${"4"}" data-tool="${"port"}" data-colour="${"dodgerblue"}" class="${"toolButton unselected"}"><img src="${"/icons/port.png"}" width="${"24"}" height="${"24"}" alt="${"Port ($3000)"}"></button>
        <button id="${"wireButton"}" data-size="${"1"}" data-tool="${"wire"}" data-colour="${"khaki"}" class="${"toolButton unselected"}"><img src="${"/icons/wire.png"}" width="${"24"}" height="${"24"}" alt="${"Wire ($5)"}"></button>
        <button id="${"stadiumButton"}" data-size="${"4"}" data-tool="${"stadium"}" data-colour="${"indigo"}" class="${"toolButton unselected"}"><img src="${"/icons/stadium.png"}" width="${"24"}" height="${"24"}" alt="${"Stadium ($5000)"}"></button>
        <button id="${"bulldozerButton"}" data-size="${"1"}" data-tool="${"bulldozer"}" data-colour="${"salmon"}" class="${"toolButton unselected"}"><img src="${"/icons/bulldozer.png"}" width="${"24"}" height="${"24"}" alt="${"Bulldozer ($1)"}"></button>
        <button id="${"airportButton"}" data-size="${"6"}" data-tool="${"airport"}" data-colour="${"violet"}" class="${"toolButton unselected"}"><img src="${"/icons/airport.png"}" width="${"24"}" height="${"24"}" alt="${"Airport ($10000)"}"></button>
        <button id="${"queryButton"}" data-size="${"1"}" data-tool="${"query"}" data-colour="${"cyan"}" class="${"toolButton unselected"}"><img src="${"/icons/query.png"}" width="${"24"}" height="${"24"}" alt="${"Query"}"></button>
        <button id="${"parkButton"}" data-size="${"1"}" data-tool="${"park"}" data-colour="${"darkgreen"}" class="${"toolButton unselected"}"><img src="${"/icons/park.png"}" width="${"24"}" height="${"24"}" alt="${"Park ($10)"}"></button></div></div>
    <div id="${"tw"}" class="${"z1 rightedge initialHidden"}"><a class="${"twitter-share-button"}" href="${"https://twitter.com/share?count=none"}" data-text="${"I'm city-building like it's 1989! Playing micropolisJS, a HTML5 retro city-builder https://graememcc.github.io/micropolisJS"}">Tweet</a><script type="${"text/javascript"}">window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));<\/script></div>
    <div id="${"monstertv"}" class="${"alignCenter z1 hidden rightedge padding10 controlShadow open"}"><div id="${"monsterTVContainer"}"><div id="${"tvContainer"}"></div>
        <form id="${"monsterTVForm"}"><input type="${"submit"}" value="${"Close"}" class="${"width140 cancel"}"></form></div></div>
    <div id="${"debug"}" class="${"alignCenter z1 rightedge padding10 mintcream controlShadow open"}"><div id="${"fps"}"><span id="${"fpsValue"}">0</span> FPS
      </div>
      <div><button id="${"debugRequest"}">Debug</button></div></div>
    <div id="${"notifications"}" class="${"open initialHidden z1 elided"}"></div>
    <div id="${"tooSmall"}" data-hasscript="${"false"}" class="${"mintcream open"}"><div id="${"tooSmallInner"}" class="${"alignCenter padding10"}"><h2 class="${"chunk"}">Uh-oh!</h2><p>This screen is too small\u2014I won&#39;t be able to fit in all the controls, buttons and gizmos! Sorry!</p></div></div>
    <noscript><div id="${"noscript"}" class="${"open mintcream centred padding10"}"><h1 class="${"chunk alignCenter"}">micropolisJS</h1>
        <p class="${"padding10"}">Hey, thanks for your interest in micropolisJS!</p>
        <p class="${"padding10"}">Unfortunately, the <abbr title="${"Javascript"}">JS</abbr> stands for &quot;<em>Javascript</em>&quot;, which appears to be disabled on your system. Consult your browser&#39;s documentation on how to enable Javascript!</p></div></noscript></main>
  <footer id="${"footer"}" class="${"alignCenter chunk white padding10"}">Enjoyed micropolisJS online? <a target="${"_blank"}" href="${"https://transequality.org/ways-to-give"}">Support an organisation we love!</a>
    <div id="${"author"}" class="${"open"}">micropolisJS is by <a rel="${"author"}" href="${"http://www.graememcc.co.uk"}" target="${"_blank"}">Graeme McCutcheon</a><i><a rel="${"author"}" href="${"https://twitter.com/graememcc"}" target="${"_blank"}">(@graememcc)</a></i> and <a rel="${"author"}" href="${"https://github.com/graememcc/micropolisJS/graphs/contributors"}" target="${"_blank"}">contributors</a> - this version by  <a rel="${"author"}" href="${"http://www.miunau.com"}" target="${"_blank"}">miunau</a><i><a rel="${"author"}" href="${"https://twitter.com/miuott"}" target="${"_blank"}">(@miuott)</a></i>
      </div></footer>
  <div class="${"hidden modal shadow"}" id="${"budget"}"><header id="${"budgetHeader"}" class="${"budgetHeader padding10 chunk alignCenter"}">Budget
    </header>
    <div id="${"budgetFormContainer"}" class="${"padding10 open"}"><form id="${"budgetForm"}"><div id="${"taxInfo"}" class="${"elided budgetData"}">Tax Collected: <span id="${"taxesCollected"}"></span></div>
        <div id="${"cashInfo"}" class="${"elided budgetRight budgetData"}">Cashflow: <span id="${"cashFlow"}"></span></div>
        <div id="${"previousInfo"}" class="${"elided budgetData"}">Previous funds: <span id="${"previousFunds"}"></span></div>
        <div id="${"currentInfo"}" class="${"elided budgetRight budgetData"}">Current funds: <span id="${"currentFunds"}"></span></div>
        <fieldset><legend>Roads</legend>
          <input type="${"range"}" id="${"roadRate"}" min="${"0"}" max="${"100"}" step="${"1"}" data-source="${"roadMaintenanceBudget"}">
          <div><label for="${"roadRate"}" class="${"elided budgetData"}" id="${"roadRateLabel"}">100% of $100 = $100</label></div></fieldset>
        <fieldset class="${"budgetRight"}"><legend>Fire</legend>
          <input type="${"range"}" id="${"fireRate"}" min="${"0"}" max="${"100"}" step="${"1"}" data-source="${"fireMaintenanceBudget"}">
          <div><label for="${"fireRate"}" class="${"elided budgetData"}" id="${"fireRateLabel"}">100% of $100 = $100</label></div></fieldset>
        <fieldset><legend>Police</legend>
          <input type="${"range"}" id="${"policeRate"}" min="${"0"}" max="${"100"}" step="${"1"}" data-source="${"policeMaintenanceBudget"}">
          <div><label for="${"policeRate"}" class="${"elided budgetData"}" id="${"policeRateLabel"}">100% of $100 = $100</label></div></fieldset>
        <fieldset class="${"budgetRight"}"><legend>Tax</legend>
          <input type="${"range"}" id="${"taxRate"}" min="${"0"}" max="${"20"}" step="${"1"}">
          <div><label for="${"taxRate"}" class="${"elided budgetData"}" id="${"taxRateLabel"}">100% of $100 = $100</label></div></fieldset>
        <div id="${"budgetButtons"}" class="${"alignCenter"}"><button id="${"budgetReset"}">Reset</button>
          <button id="${"budgetCancel"}" class="${"width140 cancel"}">Cancel</button>
          <input type="${"submit"}" id="${"budgetOK"}" class="${"width140 dialogOK"}" value="${"OK"}"></div></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"evalWindow"}"><header id="${"evalHeader"}" class="${"evalHeader padding10 chunk alignCenter"}">Evaluation
    </header>
    <div id="${"evalContainer"}" class="${"padding10 open"}"><section id="${"opinion"}"><h2 class="${"alignCenter"}">Public opinion</h2>
        <dl class="${"opinionList alignCenter"}"><dt class="${"evalItem opinionItem"}">Is the mayor doing a good job?</dt><dd class="${"evalItem opinionItem opinionRight"}">Yes: <span id="${"evalYes"}"></span>% No: <span id="${"evalNo"}"></span>%</dd><dt>What are the worst problems?</dt><dd class="${"evalItem opinionItem opinionRight"}"><ol id="${"problemList"}"><li id="${"evalProb1"}"></li> <li id="${"evalProb2"}"></li>
            <li id="${"evalProb3"}"></li> <li id="${"evalProb4"}"></li></ol></dd></dl></section>
      <section id="${"statistics"}"><h2 class="${"alignCenter"}">Statistics</h2>
        <dl id="${"statisticsList"}"><dt class="${"evalItem statisticsItem"}">Population:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalPopulation"}"></dd><dt class="${"evalItem statisticsItem"}">Net Migration:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalMigration"}"></dd><dt class="${"evalItem statisticsItem"}">Assessed Value:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalValue"}"></dd><dt class="${"evalItem statisticsItem"}">Category:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalClass"}"></dd><dt class="${"evalItem statisticsItem"}">Game Level:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalLevel"}"></dd><dt class="${"evalItem statisticsItem"}">Score:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalScore"}"></dd><dt class="${"evalItem statisticsItem"}">Annual change:</dt><dd class="${"elided statisticsRight evalItem evalRight"}" id="${"evalScoreDelta"}"></dd></dl></section>
      <form id="${"evalButtons"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"evalOK"}" class="${"width140 dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"disasterWindow"}"><header id="${"disasterHeader"}" class="${"disasterHeader padding10 chunk alignCenter"}">Disasters
    </header>
    <div id="${"disasterContainer"}" class="${"padding10 open"}"><form id="${"disasterForm"}"><div id="${"disasterSelectContainer"}" class="${"alignCenter"}"><label id="${"disasterLabel"}" for="${"disasterSelect"}">What disaster do you want to befall this unsuspecting world?</label>
          <select id="${"disasterSelect"}"><option id="${"disasterNone"}" value="${"None"}">None</option><option id="${"disasterMonster"}" value="${"Monster"}">Monster</option><option id="${"disasterFire"}" value="${"None"}">Fire</option><option id="${"disasterFlood"}" value="${"Flood"}">Flood</option><option id="${"disasterCrash"}" value="${"Crash"}">Crash</option><option id="${"disasterMeltdown"}" value="${"Meltdown"}">Meltdown</option><option id="${"disasterTornado"}" value="${"Tornado"}">Tornado</option></select></div>
        <div id="${"disasterButtons"}" class="${"alignCenter margin10"}"><button id="${"disasterCancel"}" class="${"cancel"}">Cancel</button>
          <input type="${"submit"}" id="${"disasterOK"}" class="${"dialogOK"}" value="${"OK"}"></div></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"queryWindow"}"><header id="${"queryHeader"}" class="${"queryHeader padding10 chunk alignCenter"}">Query
    </header>
    <div id="${"queryContainer"}" class="${"padding10 open"}"><div class="${"queryList"}"><dl><dt class="${"queryItem"}">Zone</dt><dd class="${"queryItem queryRight"}" id="${"queryZoneType"}"></dd><dt class="${"queryItem"}">Density</dt><dd class="${"queryItem queryRight"}" id="${"queryDensity"}"></dd><dt class="${"queryItem"}">Value</dt><dd class="${"queryItem queryRight"}" id="${"queryLandValue"}"></dd><dt class="${"queryItem"}">Crime</dt><dd class="${"queryItem queryRight"}" id="${"queryCrime"}"></dd><dt class="${"queryItem"}">Pollution</dt><dd class="${"queryItem queryRight"}" id="${"queryPollution"}"></dd><dt class="${"queryItem"}">Growth</dt><dd class="${"queryItem queryRight"}" id="${"queryRate"}"></dd></dl>
        <div id="${"queryDebugList"}" class="${"queryDebug hidden"}"><dl><dt class="${"queryItem"}">Tile</dt><dd class="${"queryItem queryRight"}" id="${"queryTile"}"></dd><dt class="${"queryItem"}">TileValue</dt><dd class="${"queryItem queryRight"}" id="${"queryTileValue"}"></dd><dt class="${"queryItem"}">FireStation</dt><dd class="${"queryItem queryRight"}" id="${"queryFireStationRaw"}"></dd><dt class="${"queryItem"}">FireStationEffect</dt><dd class="${"queryItem queryRight"}" id="${"queryFireStationEffectRaw"}"></dd><dt class="${"queryItem"}">TerrainDensity</dt><dd class="${"queryItem queryRight"}" id="${"queryTerrainDensityRaw"}"></dd><dt class="${"queryItem"}">PoliceStation</dt><dd class="${"queryItem queryRight"}" id="${"queryPoliceStationRaw"}"></dd><dt class="${"queryItem"}">PoliceStationEffect</dt><dd class="${"queryItem queryRight"}" id="${"queryPoliceStationEffectRaw"}"></dd><dt class="${"queryItem"}">ComRate</dt><dd class="${"queryItem queryRight"}" id="${"queryComRateRaw"}"></dd><dt class="${"queryItem"}">RateOfGrowth</dt><dd class="${"queryItem queryRight"}" id="${"queryRateRaw"}"></dd><dt class="${"queryItem"}">Pollution</dt><dd class="${"queryItem queryRight"}" id="${"queryPollutionRaw"}"></dd><dt class="${"queryItem"}">Crime</dt><dd class="${"queryItem queryRight"}" id="${"queryCrimeRaw"}"></dd><dt class="${"queryItem"}">LandValue</dt><dd class="${"queryItem queryRight"}" id="${"queryLandValueRaw"}"></dd><dt class="${"queryItem"}">Traffic Density</dt><dd class="${"queryItem queryRight"}" id="${"queryTrafficDensityRaw"}"></dd><dt class="${"queryItem"}">Density</dt><dd class="${"queryItem queryRight"}" id="${"queryDensityRaw"}"></dd></dl></div></div>
      <div id="${"queryDebugTable"}" class="${"margin10 queryDebug hidden"}"><table id="${"flagsTable"}"><thead><tr><th>Burn</th>
              <th>Bull</th>
              <th>Cond</th>
              <th>Anim</th>
              <th>Pow</th>
              <th>Zone</th></tr></thead>
          <tbody><tr><td id="${"queryTileBurnable"}"></td>
              <td id="${"queryTileBulldozable"}"></td>
              <td id="${"queryTileCond"}"></td>
              <td id="${"queryTileAnim"}"></td>
              <td id="${"queryTilePowered"}"></td>
  <td id="${"queryTileZone"}"></td></tr></tbody></table></div>
      <form id="${"queryForm"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"queryOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"congratsWindow"}"><header id="${"congratsHeader"}" class="${"congratsHeader padding10 chunk alignCenter"}">Congratulations!
    </header>
    <div id="${"congratsContainer"}" class="${"padding10 open"}"><div id="${"congratsMessage"}" class="${"alignCenter"}">Congratulations!</div>
      <form id="${"congratsForm"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"congratsOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"nagWindow"}"><header id="${"nagHeader"}" class="${"nagHeader padding10 chunk white alignCenter"}">micropolisJS
    </header>
    <div id="${"nagContainer"}" class="${"padding10 open"}"><div id="${"nagMessage"}" class="${"alignCenter"}">-            Whoa! You&#39;ve been playing this thing for half an hour?!? This is the point I used to solicit donations, back when life was less kind. These days I&#39;d prefer to see your money reach <a class="${"nag"}" href="${"https://www.refuweegee.co.uk/your-donations"}" target="${"_blank"}">Refuweegee</a>, a charity whose work I admire!
      </div>
      <form id="${"nagForm"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"nagOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"saveWindow"}"><header id="${"saveHeader"}" class="${"saveHeader padding10 chunk alignCenter"}">Save
    </header>
    <div id="${"saveContainer"}" class="${"alignCenter padding10 open"}">Game Saved!
      <form id="${"saveForm"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"saveOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"screenshotLinkWindow"}"><header id="${"screenshotLinkHeader"}" class="${"screenshotHeader padding10 chunk alignCenter"}">Take Picture
    </header>
    <div id="${"screenshotLinkContainer"}" class="${"padding10 open"}"><div id="${"screenshotLinkMessage"}" class="${"alignCenter"}">Click <a id="${"screenshotLink"}" target="${"_blank"}">here</a> to view your picture (right-click to save)
      </div>
      <form id="${"screenshotLinkForm"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"screenshotLinkOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"screenshotWindow"}"><header id="${"screenshotHeader"}" class="${"screenshotHeader white padding10 chunk alignCenter"}">Take Picture
    </header>
    <div id="${"screenshotContainer"}" class="${"padding10 open"}"><form id="${"screenshotForm"}" class="${"alignCenter margin10"}"><div id="${"screenshotContainerDiv"}">Area to take picture of:
          <input type="${"radio"}" class="${"screenshotType"}" name="${"screenshotType"}" id="${"screenshotVisible"}" value="${"visible"}" checked="${"checked"}"><label for="${"screenshotVisible"}">Visible Map</label>
          <input type="${"radio"}" class="${"screenshotType"}" name="${"screenshotType"}" id="${"screenshotAll"}" value="${"all"}"><label for="${"screenshotAll"}">Full map</label></div>
        <button id="${"screenshotCancel"}" class="${"cancel"}">Cancel</button>
        <input type="${"submit"}" id="${"screenshotOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"settingsWindow"}"><header id="${"settingsHeader"}" class="${"settingsHeader white padding10 chunk alignCenter"}">Settings
    </header>
    <div id="${"settingsContainer"}" class="${"padding10 open"}"><form id="${"settingsForm"}" class="${"alignCenter margin10"}"><div id="${"settingsFormContainer"}"><div id="${"autoBudgetSelect"}" class="${"padding10"}">Autobudget:
            <input type="${"radio"}" class="${"autoBudgetSetting"}" name="${"autoBudgetSetting"}" id="${"autoBudgetYes"}" value="${"true"}" checked="${"checked"}"><label for="${"autoBudgetYes"}">Yes</label>
            <input type="${"radio"}" class="${"autoBudgetSetting"}" name="${"autoBudgetSetting"}" id="${"autoBudgetNo"}" value="${"false"}"><label for="${"autoBudgetNo"}">No</label></div>
          <div id="${"autoBulldozeSelect"}" class="${"padding10"}">Autobulldoze:
            <input type="${"radio"}" class="${"autoBulldozeSetting"}" name="${"autoBulldozeSetting"}" id="${"autoBulldozeYes"}" value="${"true"}" checked="${"checked"}"><label for="${"autoBulldozeYes"}">Yes</label>
            <input type="${"radio"}" class="${"autoBulldozeSetting"}" name="${"autoBulldozeSetting"}" id="${"autoBulldozeNo"}" value="${"false"}"><label for="${"autoBulldozeNo"}">No</label></div>
          <div id="${"speedSelect"}" class="${"padding10"}">Speed:
            <input type="${"radio"}" class="${"speedSetting"}" name="${"speedSetting"}" id="${"speedSlow"}" value="${"1"}" checked="${"checked"}"><label for="${"speedSlow"}">Slow</label>
            <input type="${"radio"}" class="${"speedSetting"}" name="${"speedSetting"}" id="${"speedMed"}" value="${"2"}"><label for="${"speedMed"}">Medium</label>
            <input type="${"radio"}" class="${"speedSetting"}" name="${"speedSetting"}" id="${"speedFast"}" value="${"3"}"><label for="${"speedFast"}">Fast</label></div>
          <div id="${"disastersSelect"}" class="${"padding10"}">Disasters:
            <input type="${"radio"}" class="${"enableDisastersSetting"}" name="${"disastersSetting"}" id="${"disastersYes"}" value="${"true"}" checked="${"checked"}"><label for="${"disastersYes"}">Yes</label>
            <input type="${"radio"}" class="${"enableDisastersSetting"}" name="${"disastersSetting"}" id="${"disastersNo"}" value="${"false"}"><label for="${"disastersNo"}">No</label></div></div>
        <button id="${"settingsCancel"}" class="${"cancel"}">Cancel</button>
        <input type="${"submit"}" id="${"settingsOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"debugWindow"}"><header id="${"debugHeader"}" class="${"debugHeader white padding10 chunk alignCenter"}">Debug
    </header>
    <div id="${"debugContainer"}" class="${"padding10 open"}"><form id="${"debugForm"}" class="${"alignCenter margin10"}"><div id="${"debugFundContainer"}">Add funds:
          <input type="${"radio"}" class="${"debugAdd"}" name="${"debugAdd"}" id="${"fundsYes"}" value="${"true"}" checked="${"checked"}"><label for="${"fundsYes"}">Yes</label>
          <input type="${"radio"}" class="${"debugAdd"}" name="${"debugAdd"}" id="${"fundsNo"}" value="${"false"}"><label for="${"fundsNo"}">No</label></div>
        <button id="${"debugCancel"}" class="${"cancel"}">Cancel</button>
        <input type="${"submit"}" id="${"debugOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div>
  <div class="${"hidden modal shadow"}" id="${"touchWarnWindow"}"><header id="${"touchHeader"}" class="${"touchHeader white padding10 chunk alignCenter"}">Hello, touchscreen user!
    </header>
    <div id="${"touchContainer"}" class="${"padding10 open"}"><h2 class="${"alignCenter"}">Hi!</h2>
      <p class="${"padding10"}">It seems you&#39;re using a touchscreen device!
      </p>
      <p class="${"padding10"}">Just to warn you, micropolisJS isn&#39;t really geared towards touch devices\u2014I don&#39;t own a tablet\u2014so you might be in for a bad time.
      </p>
      <p class="${"padding10"}">However, if you&#39;re wanting to give it a shot, I won&#39;t stop you!
      </p>
      <form id="${"touchForm"}" class="${"alignCenter margin10"}"><input type="${"submit"}" id="${"touchOK"}" class="${"dialogOK"}" value="${"OK"}"></form></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports3 = {};
__export(__exports3, {
  css: () => css3,
  entry: () => entry3,
  js: () => js3,
  module: () => index_svelte_exports
});
var entry3, js3, css3;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_index_svelte();
    entry3 = "pages/index.svelte-154a549b.js";
    js3 = ["pages/index.svelte-154a549b.js", "chunks/index-b6926417.js"];
    css3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/about.svelte.js
var about_svelte_exports = {};
__export(about_svelte_exports, {
  default: () => About
});
var About;
var init_about_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/about.svelte.js"() {
    init_index_5f038599();
    About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<header id="${"aboutHeader"}" class="${"chunk border-bottom padding10"}"><div class="${"left inlineblock"}"><h1 id="${"title"}" class="${"white fontlarge"}"><a href="${"index.html"}">micropolisJS</a></h1></div>
  <nav class="${"white right padding10 inlineblock"}"><ul><li class="${"padding10"}"><a href="${"about.html"}">About</a></li>
      <li class="${"padding10"}"><a href="${"https://github.com/miunau/micropolisJS"}">GitHub</a></li></ul></nav></header>
<main id="${"aboutMain"}"><div id="${"aboutContainer"}" class="${"mintcream open padding10"}"><div id="${"appeal"}" class="${"padding10"}"><h2 class="${"alignCenter chunk"}">Support micropolisJS</h2>
      <p><a href="${"http://www.graememcc.co.uk/2013/10/27/reticulating-splines"}">This is just the beginning</a>. <s>Please <a href="${"https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=TV83GP5CJGL3Q&lc=GB&item_name=micropolisJS&no_note=1&no_shipping=1&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"}">support micropolisJS</a>. Allow me to develop it further and make it better! Let&#39;s make it the best old-school-retro-but-really-running-on-modern-open-web-technologies city simulator\u2122 anywhere!</s>. Edit: Mar 7, 2022: I no longer need donations to keep this alive, and can&#39;t promise to get back to it any time soon. However, if it entertained you then a donation to <a href="${"https://www.refuweegee.co.uk/your-donations"}">Refuweegee</a>, a charity that does great work assisting refugees in Scotland, would be welcomed.</p>
      <p>Oh, and you absolutely should donate to <a href="${"https://one.laptop.org/action/donate"}">One Laptop Per Child</a> too.</p></div>
    <h3 class="${"alignCenter chunk"}">Welcome to your city!</h3>
    <p>micropolisJS is a handmade port of <a href="${"http://code.google.com/p/micropolis/"}">Micropolis</a> to Javascript. (Micropolis is the open-source release of a commercial game once sold by Electronic Arts). The aim is to grow your city, balancing the various competing demands. Use the buttons in the toolbox to select the various zones and buildings, and then click on the desired location to build.
    </p>
      <ul><li><strong>Residential zones:</strong> Your citizens need somewhere to live! Use this tool to lay out residential zones, and watch people move in. Watch out though: no-one wants to live anywhere polluted!</li>
      <li><strong>Commercial zones:</strong>Sometimes your citizens need to pop round to the shops for some milk. However, they&#39;re screwed if there are no shops! Commercial zones contain the shops and offices that will power the economy.</li>
      <li><strong>Industrial zones:</strong> There&#39;s only so much daytime television your citizens can watch. Provide industrial zones and put those shirkers to work!</li>
      <li><strong>Police Stations:</strong> There are always some bad apples. Build some police stations to bring down the hammer of justice and keep crime under control!</li>
      <li><strong>Fire Stations:</strong> Some people just want to play with matches. Sometimes a great big freaking monster comes along and stomps all over your town. Put out the flames by building fire stations.</li>
      <li><strong>Coal Power:</strong> Show your dominion over nature by filling that fresh air with honking big dusty clouds of smoke, and keep those lights on!</li>
      <li><strong>Nuclear Power:</strong> More expensive than coal power, but less polluting. These things are totally safe. Right?</li>
      <li><strong>Stadium:</strong> After a day struggling at those infernal industrial workhouses you erected, your citizens deserve to relax by watching the big game!</li>
      <li><strong>Airport:</strong> As your creation grows, your citizens will be seduced by the romantic dream of flying. Build an airport and let them meet the reality of weather delays and lousy service!</li>
      <li><strong>Seaport:</strong> Making stuff is hard work! As your town grows, your citizens will want huge container ships importing finished goods from halfway across the world.</li>
      <li><strong>Park:</strong> Sometimes you need to get away from it all. Parks provide a place to relax, get back to nature, and stare at the clouds of smoke from the power plant in the middle distance.</li>
      <li><strong>Road, Rail:</strong> Your citizens are going places. Unless you neglect to lay these.</li>
      <li><strong>Wire:</strong> Plug your citizens into the matrix. And to 240v AC.</li></ul>
    <h3 class="${"alignCenter chunk"}">Tips</h3>
    <p>If you&#39;re starting to run out of money, use the budget tool to modify the tax rate, and funding for various city services. Don&#39;t cut things too much, or things will start to fall apart!</p>
    <p>The evaluation tool can provide insight into the opinion of the city&#39;s inhabitants, and the query tool offers finer-grained insight.
    </p>
    <h3 class="${"alignCenter chunk"}">Disasters</h3>
    <p>Some people just want to watch the world burn. If you&#39;re one of them, then the disasters button on the left hand side will give you the matches. Choose one of the options to unleash mayhem!
    </p>
    <ul><li><strong>Fire:</strong> Turn your city into an advert for smoke detectors.</li>
      <li><strong>Flood:</strong> I hope your citizens can swim</li>
      <li><strong>Meltdown:</strong> <i>Nervously pats the nuclear reactor</i> <q>These things are safe\u2014right?</q></li>
      <li><strong>Monster:</strong> Is it a bird? Is it a plane? Well, it&#39;s big, red and scary, so I&#39;m not waiting to find out!</li>
      <li><strong>Plane crash:</strong> What goes up...</li>
      <li><strong>Tornado:</strong> Your citizens won&#39;t want to watch <cite>Twister</cite> on NetFlix for a while</li></ul>
    <h3 class="${"alignCenter chunk"}">Settings</h3>
    <p>You will find assorted helpful controls by clicking the settings button on the left.
    </p>
    <ul><li><strong>Auto-budget:</strong> The simulator takes care of finances for you\u2014well, until you go broke at least\u2014. If you prefer more control, you can switch this on or off here, and spend spend spend every January.</li>
      <li><strong>Auto-bulldoze:</strong> When building on areas that contain terrain other than plain dirt, these must be cleared first, at a cost. You can turn this off, and prepare your building sites manually.</li>
      <li><strong>Auto-disasters:</strong> What&#39;s more fun than manually unleashing mayhem? Why having it unleashed by surprise of course!</li>
      <li><strong>Speed:</strong> Time flies when you max out the game speed</li></ul></div></main>
<footer id="${"aboutFooter"}" class="${"alignCenter chunk white padding10"}">Enjoyed micropolisJS? <a href="${"https://www.refuweegee.co.uk/your-donations"}">Click here to donate to a charity whose work I love!</a>
    <div id="${"author"}" class="${"open"}">Brought to you by <a rel="${"author"}" href="${"http://www.graememcc.co.uk"}" target="${"_blank"}">Graeme McCutcheon</a><i><a rel="${"author"}" href="${"https://twitter.com/graememcc"}" target="${"_blank"}">(@graememcc)</a></i> and <a rel="${"author"}" href="${"https://github.com/graememcc/micropolisJS/graphs/contributors"}" target="${"_blank"}">contributors</a></div></footer>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports4 = {};
__export(__exports4, {
  css: () => css4,
  entry: () => entry4,
  js: () => js4,
  module: () => about_svelte_exports
});
var entry4, js4, css4;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_about_svelte();
    entry4 = "pages/about.svelte-8079984a.js";
    js4 = ["pages/about.svelte-8079984a.js", "chunks/index-b6926417.js"];
    css4 = [];
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js
var require_other = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js
var require_mime = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js
var require_types = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
    var KVError = class extends Error {
      constructor(message, status = 500) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = KVError.name;
        this.status = status;
      }
    };
    exports.KVError = KVError;
    var MethodNotAllowedError = class extends KVError {
      constructor(message = `Not a valid request method`, status = 405) {
        super(message, status);
      }
    };
    exports.MethodNotAllowedError = MethodNotAllowedError;
    var NotFoundError = class extends KVError {
      constructor(message = `Not Found`, status = 404) {
        super(message, status);
      }
    };
    exports.NotFoundError = NotFoundError;
    var InternalError = class extends KVError {
      constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
        super(message, status);
      }
    };
    exports.InternalError = InternalError;
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js
var require_dist = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
    var mime = require_mime();
    var types_1 = require_types();
    Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
      return types_1.MethodNotAllowedError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return types_1.NotFoundError;
    } });
    Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
      return types_1.InternalError;
    } });
    var defaultCacheControl = {
      browserTTL: null,
      edgeTTL: 2 * 60 * 60 * 24,
      bypassCache: false
    };
    var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
    var getAssetFromKVDefaultOptions = {
      ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
      ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
      cacheControl: defaultCacheControl,
      defaultMimeType: "text/plain",
      defaultDocument: "index.html"
    };
    function assignOptions(options) {
      return Object.assign({}, getAssetFromKVDefaultOptions, options);
    }
    var mapRequestToAsset2 = (request, options) => {
      options = assignOptions(options);
      const parsedUrl = new URL(request.url);
      let pathname = parsedUrl.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.concat(options.defaultDocument);
      } else if (!mime.getType(pathname)) {
        pathname = pathname.concat("/" + options.defaultDocument);
      }
      parsedUrl.pathname = pathname;
      return new Request(parsedUrl.toString(), request);
    };
    exports.mapRequestToAsset = mapRequestToAsset2;
    function serveSinglePageApp(request, options) {
      options = assignOptions(options);
      request = mapRequestToAsset2(request, options);
      const parsedUrl = new URL(request.url);
      if (parsedUrl.pathname.endsWith(".html")) {
        return new Request(`${parsedUrl.origin}/${options.defaultDocument}`, request);
      } else {
        return request;
      }
    }
    exports.serveSinglePageApp = serveSinglePageApp;
    var getAssetFromKV2 = (event, options) => __awaiter(void 0, void 0, void 0, function* () {
      options = assignOptions(options);
      const request = event.request;
      const ASSET_NAMESPACE = options.ASSET_NAMESPACE;
      const ASSET_MANIFEST = parseStringAsObject(options.ASSET_MANIFEST);
      if (typeof ASSET_NAMESPACE === "undefined") {
        throw new types_1.InternalError(`there is no KV namespace bound to the script`);
      }
      const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
      let pathIsEncoded = false;
      let requestKey;
      if (options.mapRequestToAsset) {
        requestKey = options.mapRequestToAsset(request);
      } else if (ASSET_MANIFEST[rawPathKey]) {
        requestKey = request;
      } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
        pathIsEncoded = true;
        requestKey = request;
      } else {
        const mappedRequest = mapRequestToAsset2(request);
        const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
        if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
          pathIsEncoded = true;
          requestKey = mappedRequest;
        } else {
          requestKey = mapRequestToAsset2(request, options);
        }
      }
      const SUPPORTED_METHODS = ["GET", "HEAD"];
      if (!SUPPORTED_METHODS.includes(requestKey.method)) {
        throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
      }
      const parsedUrl = new URL(requestKey.url);
      const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
      let pathKey = pathname.replace(/^\/+/, "");
      const cache = caches.default;
      let mimeType = mime.getType(pathKey) || options.defaultMimeType;
      if (mimeType.startsWith("text") || mimeType === "application/javascript") {
        mimeType += "; charset=utf-8";
      }
      let shouldEdgeCache = false;
      if (typeof ASSET_MANIFEST !== "undefined") {
        if (ASSET_MANIFEST[pathKey]) {
          pathKey = ASSET_MANIFEST[pathKey];
          shouldEdgeCache = true;
        }
      }
      let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
      const evalCacheOpts = (() => {
        switch (typeof options.cacheControl) {
          case "function":
            return options.cacheControl(request);
          case "object":
            return options.cacheControl;
          default:
            return defaultCacheControl;
        }
      })();
      const formatETag = (entityId = pathKey, validatorType = "strong") => {
        if (!entityId) {
          return "";
        }
        switch (validatorType) {
          case "weak":
            if (!entityId.startsWith("W/")) {
              return `W/${entityId}`;
            }
            return entityId;
          case "strong":
            if (entityId.startsWith(`W/"`)) {
              entityId = entityId.replace("W/", "");
            }
            if (!entityId.endsWith(`"`)) {
              entityId = `"${entityId}"`;
            }
            return entityId;
          default:
            return "";
        }
      };
      options.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
      if (options.cacheControl.bypassCache || options.cacheControl.edgeTTL === null || request.method == "HEAD") {
        shouldEdgeCache = false;
      }
      const shouldSetBrowserCache = typeof options.cacheControl.browserTTL === "number";
      let response = null;
      if (shouldEdgeCache) {
        response = yield cache.match(cacheKey);
      }
      if (response) {
        if (response.status > 300 && response.status < 400) {
          if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
            response.body.cancel();
            console.log("Body exists and environment supports readable streams. Body cancelled");
          } else {
            console.log("Environment doesnt support readable streams");
          }
          response = new Response(null, response);
        } else {
          let opts = {
            headers: new Headers(response.headers),
            status: 0,
            statusText: ""
          };
          opts.headers.set("cf-cache-status", "HIT");
          if (response.status) {
            opts.status = response.status;
            opts.statusText = response.statusText;
          } else if (opts.headers.has("Content-Range")) {
            opts.status = 206;
            opts.statusText = "Partial Content";
          } else {
            opts.status = 200;
            opts.statusText = "OK";
          }
          response = new Response(response.body, opts);
        }
      } else {
        const body = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
        if (body === null) {
          throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
        }
        response = new Response(body);
        if (shouldEdgeCache) {
          response.headers.set("Accept-Ranges", "bytes");
          response.headers.set("Content-Length", body.length);
          if (!response.headers.has("etag")) {
            response.headers.set("etag", formatETag(pathKey, "strong"));
          }
          response.headers.set("Cache-Control", `max-age=${options.cacheControl.edgeTTL}`);
          event.waitUntil(cache.put(cacheKey, response.clone()));
          response.headers.set("CF-Cache-Status", "MISS");
        }
      }
      response.headers.set("Content-Type", mimeType);
      if (response.status === 304) {
        let etag = formatETag(response.headers.get("etag"), "strong");
        let ifNoneMatch = cacheKey.headers.get("if-none-match");
        let proxyCacheStatus = response.headers.get("CF-Cache-Status");
        if (etag) {
          if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
            response.headers.set("CF-Cache-Status", "EXPIRED");
          } else {
            response.headers.set("CF-Cache-Status", "REVALIDATED");
          }
          response.headers.set("etag", formatETag(etag, "weak"));
        }
      }
      if (shouldSetBrowserCache) {
        response.headers.set("Cache-Control", `max-age=${options.cacheControl.browserTTL}`);
      } else {
        response.headers.delete("Cache-Control");
      }
      return response;
    });
    exports.getAssetFromKV = getAssetFromKV2;
  }
});

// .svelte-kit/output/server/index.js
init_index_5f038599();
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp2(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
function to_headers(object) {
  const headers = new Headers();
  if (object) {
    for (const key2 in object) {
      const value = object[key2];
      if (!value)
        continue;
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          headers.append(key2, value2);
        });
      } else {
        headers.set(key2, value);
      }
    }
  }
  return headers;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
function lowercase_keys(obj) {
  const clone = {};
  for (const key2 in obj) {
    clone[key2.toLowerCase()] = obj[key2];
  }
  return clone;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
function is_pojo(body) {
  if (typeof body !== "object")
    return false;
  if (body) {
    if (body instanceof Uint8Array)
      return false;
    if (body._readableState && typeof body.pipe === "function")
      return false;
    if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream)
      return false;
  }
  return true;
}
function normalize_request_method(event) {
  const method = event.request.method.toLowerCase();
  return method === "delete" ? "del" : method;
}
function error(body) {
  return new Response(body, {
    status: 500
  });
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
var text_types = /* @__PURE__ */ new Set([
  "application/xml",
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data"
]);
function is_text(content_type) {
  if (!content_type)
    return true;
  const type = content_type.split(";")[0].toLowerCase();
  return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
}
async function render_endpoint(event, mod) {
  const method = normalize_request_method(event);
  let handler = mod[method];
  if (!handler && method === "head") {
    handler = mod.get;
  }
  if (!handler) {
    const allowed = [];
    for (const method2 in ["get", "post", "put", "patch"]) {
      if (mod[method2])
        allowed.push(method2.toUpperCase());
    }
    if (mod.del)
      allowed.push("DELETE");
    if (mod.get || mod.head)
      allowed.push("HEAD");
    return event.request.headers.get("x-sveltekit-load") ? new Response(void 0, {
      status: 204
    }) : new Response(`${event.request.method} method not allowed`, {
      status: 405,
      headers: {
        allow: allowed.join(", ")
      }
    });
  }
  const response = await handler(event);
  const preface = `Invalid response from route ${event.url.pathname}`;
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  if (response.fallthrough) {
    throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
  }
  const { status = 200, body = {} } = response;
  const headers = response.headers instanceof Headers ? new Headers(response.headers) : to_headers(response.headers);
  const type = headers.get("content-type");
  if (!is_text(type) && !(body instanceof Uint8Array || is_string(body))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
    headers.set("content-type", "application/json; charset=utf-8");
    normalized_body = JSON.stringify(body);
  } else {
    normalized_body = body;
  }
  if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
    const cache_control = headers.get("cache-control");
    if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
      headers.set("etag", `"${hash(normalized_body)}"`);
    }
  }
  return new Response(method !== "head" ? normalized_body : void 0, {
    status,
    headers
  });
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped2 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry5) {
    return entry5[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry5, i) {
    names.set(entry5[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped2[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped2) {
      result += escaped2[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
var render_json_payload_script_dict = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var render_json_payload_script_regex = new RegExp(`[${Object.keys(render_json_payload_script_dict).join("")}]`, "g");
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(render_json_payload_script_regex, (match) => render_json_payload_script_dict[match]);
  let safe_attrs = "";
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0)
      continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(`[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var s = JSON.stringify;
function create_prerendering_url_proxy(url) {
  return new Proxy(url, {
    get: (target, prop, receiver) => {
      if (prop === "search" || prop === "searchParams") {
        throw new Error(`Cannot access url.${prop} on a page with prerendering enabled`);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array = encode$1(data);
  for (let i = 0; i < array.length; i += 16) {
    const w = array.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var csp_ready;
var generate_nonce;
var generate_hash;
if (typeof crypto !== "undefined") {
  const array = new Uint8Array(16);
  generate_nonce = () => {
    crypto.getRandomValues(array);
    return base64(array);
  };
  generate_hash = sha256;
} else {
  const name = "crypto";
  csp_ready = import(name).then((crypto2) => {
    generate_nonce = () => {
      return crypto2.randomBytes(16).toString("base64");
    };
    generate_hash = (input) => {
      return crypto2.createHash("sha256").update(input, "utf-8").digest().toString("base64");
    };
  });
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _dev, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src;
var Csp = class {
  constructor({ mode, directives }, { dev, prerender, needs_nonce }) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _dev, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateSet(this, _use_hashes, mode === "hash" || mode === "auto" && prerender);
    __privateSet(this, _directives, dev ? __spreadValues({}, directives) : directives);
    __privateSet(this, _dev, dev);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    if (this.script_needs_nonce || this.style_needs_nonce || needs_nonce) {
      this.nonce = generate_nonce();
    }
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${generate_hash(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${this.nonce}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${generate_hash(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${this.nonce}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = __spreadValues({}, __privateGet(this, _directives));
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
_use_hashes = new WeakMap();
_dev = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
var updated = __spreadProps(__spreadValues({}, readable(false)), {
  check: () => false
});
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  stuff
}) {
  if (state.prerender) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %svelte.nonce%");
    }
  }
  const stylesheets = new Set(options.manifest._.entry.css);
  const modulepreloads = new Set(options.manifest._.entry.js);
  const styles2 = /* @__PURE__ */ new Map();
  const serialized_data = [];
  let shadow_props;
  let rendered;
  let is_private = false;
  let cache;
  if (error2) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    branch.forEach(({ node, props: props2, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => stylesheets.add(url));
      if (node.js)
        node.js.forEach((url) => modulepreloads.add(url));
      if (node.styles)
        Object.entries(node.styles).forEach(([k, v]) => styles2.set(k, v));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (props2)
        shadow_props = props2;
      cache = loaded == null ? void 0 : loaded.cache;
      is_private = (cache == null ? void 0 : cache.private) ?? uses_credentials;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session: __spreadProps(__spreadValues({}, session), {
          subscribe: (fn) => {
            is_private = (cache == null ? void 0 : cache.private) ?? true;
            return session.subscribe(fn);
          }
        }),
        updated
      },
      page: {
        error: error2,
        params: event.params,
        routeId: event.routeId,
        status,
        stuff,
        url: state.prerender ? create_prerendering_url_proxy(event.url) : event.url
      },
      components: branch.map(({ node }) => node.module.default)
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    rendered = options.root.render(props);
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const inlined_style = Array.from(styles2.values()).join("\n");
  await csp_ready;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerender,
    needs_nonce: options.template_contains_nonce
  });
  const target = hash(body);
  const init_app = `
		import { start } from ${s(options.prefix + options.manifest._.entry.file)};
		start({
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			session: ${try_serialize($session, (error3) => {
    throw new Error(`Failed to serialize session data: ${error3.message}`);
  })},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${serialize_error(error2)},
				nodes: [
					${(branch || []).map(({ node }) => `import(${s(options.prefix + node.entry)})`).join(",\n						")}
				],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', () => {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (options.amp) {
    const styles22 = `${inlined_style}
${rendered.css.code}`;
    head += `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>

		<style amp-custom>${styles22}</style>`;
    if (options.service_worker) {
      head += '<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>';
      body += `<amp-install-serviceworker src="${options.service_worker}" layout="nodisplay"></amp-install-serviceworker>`;
    }
  } else {
    if (inlined_style) {
      const attributes = [];
      if (options.dev)
        attributes.push(" data-sveltekit");
      if (csp.style_needs_nonce)
        attributes.push(` nonce="${csp.nonce}"`);
      csp.add_style(inlined_style);
      head += `
	<style${attributes.join("")}>${inlined_style}</style>`;
    }
    head += Array.from(stylesheets).map((dep) => {
      const attributes = [
        'rel="stylesheet"',
        `href="${options.prefix + dep}"`
      ];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (styles2.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      }
      return `
	<link ${attributes.join(" ")}>`;
    }).join("");
    if (page_config.router || page_config.hydrate) {
      head += Array.from(modulepreloads).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
      const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
      csp.add_script(init_app);
      if (csp.script_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
      body += serialized_data.map(({ url, body: body2, response }) => render_json_payload_script({ type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 }, response)).join("\n	");
      if (shadow_props) {
        body += render_json_payload_script({ type: "props" }, shadow_props);
      }
    }
    if (options.service_worker) {
      csp.add_script(init_service_worker);
      head += `
				<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
    }
  }
  if (state.prerender && !options.amp) {
    const http_equiv = [];
    const csp_headers = csp.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${cache.maxage}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
  const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
  const html = await resolve_opts.transformPage({
    html: options.template({ head, body, assets: assets2, nonce: csp.nonce })
  });
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (cache) {
    headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${cache.maxage}`);
  }
  if (!options.floc) {
    headers.set("permissions-policy", "interest-cohort=()");
  }
  if (!state.prerender) {
    const csp_header = csp.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize(__spreadProps(__spreadValues({}, error2), { name, message, stack }));
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index, eqIdx).trim();
    if (obj[key2] === void 0) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (opt.maxAge != null) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e2) {
    return str;
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValue = parts.shift().split("=");
  var name = nameValue.shift();
  var value = nameValue.join("=");
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e2) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e2);
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos2 = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos2 < cookiesString.length && /\s/.test(cookiesString.charAt(pos2))) {
      pos2 += 1;
    }
    return pos2 < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos2);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos2 < cookiesString.length) {
    start = pos2;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos2);
      if (ch === ",") {
        lastComma = pos2;
        pos2 += 1;
        skipWhitespace();
        nextStart = pos2;
        while (pos2 < cookiesString.length && notSpecialChar()) {
          pos2 += 1;
        }
        if (pos2 < cookiesString.length && cookiesString.charAt(pos2) === "=") {
          cookiesSeparatorFound = true;
          pos2 = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos2;
        } else {
          pos2 = lastComma + 1;
        }
      } else {
        pos2 += 1;
      }
    }
    if (!cookiesSeparatorFound || pos2 >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function normalize(loaded) {
  if (loaded.fallthrough) {
    throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
  }
  if ("maxage" in loaded) {
    throw new Error("maxage should be replaced with cache: { maxage }");
  }
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return { status: status || 500, error: new Error() };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.dependencies) {
    if (!Array.isArray(loaded.dependencies) || loaded.dependencies.some((dep) => typeof dep !== "string")) {
      return {
        status: 500,
        error: new Error('"dependencies" property returned from load() must be of type string[]')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base22, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base22);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base22}"`);
  }
  const baseparts = path_match ? [] : base22.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix2}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
async function load_node({
  event,
  options,
  state,
  route,
  node,
  $session,
  stuff,
  is_error: is_error2,
  is_leaf,
  status,
  error: error2
}) {
  const { module } = node;
  let uses_credentials = false;
  const fetched = [];
  const cookies = parse_1(event.request.headers.get("cookie") || "");
  const new_cookies = [];
  let loaded;
  const shadow = is_leaf ? await load_shadow_data(route, event, options, !!state.prerender) : {};
  if (shadow.cookies) {
    shadow.cookies.forEach((header) => {
      new_cookies.push(parseString_1(header));
    });
  }
  if (shadow.error) {
    loaded = {
      status: shadow.status,
      error: shadow.error
    };
  } else if (shadow.redirect) {
    loaded = {
      status: shadow.status,
      redirect: shadow.redirect
    };
  } else if (module.load) {
    const load_input = {
      url: state.prerender ? create_prerendering_url_proxy(event.url) : event.url,
      params: event.params,
      props: shadow.body || {},
      routeId: event.routeId,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === "string") {
          requested = resource;
        } else {
          requested = resource.url;
          opts = __spreadValues({
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity
          }, opts);
        }
        opts.headers = new Headers(opts.headers);
        for (const [key2, value] of event.request.headers) {
          if (key2 !== "authorization" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
            opts.headers.set(key2, value);
          }
        }
        const resolved = resolve(event.url.pathname, requested.split("?")[0]);
        let response;
        let dependency;
        const prefix2 = options.paths.assets || options.paths.base;
        const filename = decodeURIComponent(resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(`${event.url.origin}/${file}`, opts);
          }
        } else if (is_root_relative(resolved)) {
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            const authorization = event.request.headers.get("authorization");
            const combined_cookies = __spreadValues({}, cookies);
            for (const cookie2 of new_cookies) {
              if (!domain_matches(event.url.hostname, cookie2.domain))
                continue;
              if (!path_matches(resolved, cookie2.path))
                continue;
              combined_cookies[cookie2.name] = cookie2.value;
            }
            const cookie = Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
            if (cookie) {
              opts.headers.set("cookie", cookie);
            }
            if (authorization && !opts.headers.has("authorization")) {
              opts.headers.set("authorization", authorization);
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          response = await respond(new Request(new URL(requested, event.url).href, __spreadProps(__spreadValues({}, opts), { credentials: void 0 })), options, __spreadProps(__spreadValues({}, state), {
            initiator: route
          }));
          if (state.prerender) {
            dependency = { response, body: null };
            state.prerender.dependencies.set(resolved, dependency);
          }
        } else {
          if (resolved.startsWith("//")) {
            requested = event.url.protocol + requested;
          }
          if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
            uses_credentials = true;
            const cookie = event.request.headers.get("cookie");
            if (cookie)
              opts.headers.set("cookie", cookie);
          }
          const external_request = new Request(requested, opts);
          response = await options.hooks.externalFetch.call(null, external_request);
        }
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          new_cookies.push(...splitCookiesString_1(set_cookie).map((str) => parseString_1(str)));
        }
        const proxy = new Proxy(response, {
          get(response2, key2, _receiver) {
            async function text() {
              const body = await response2.text();
              const headers = {};
              for (const [key3, value] of response2.headers) {
                if (key3 !== "set-cookie" && key3 !== "etag") {
                  headers[key3] = value;
                }
              }
              if (!opts.body || typeof opts.body === "string") {
                const status_number = Number(response2.status);
                if (isNaN(status_number)) {
                  throw new Error(`response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`);
                }
                fetched.push({
                  url: requested,
                  body: opts.body,
                  response: {
                    status: status_number,
                    statusText: response2.statusText,
                    headers,
                    body
                  }
                });
              }
              if (dependency) {
                dependency.body = body;
              }
              return body;
            }
            if (key2 === "arrayBuffer") {
              return async () => {
                const buffer = await response2.arrayBuffer();
                if (dependency) {
                  dependency.body = new Uint8Array(buffer);
                }
                return buffer;
              };
            }
            if (key2 === "text") {
              return text;
            }
            if (key2 === "json") {
              return async () => {
                return JSON.parse(await text());
              };
            }
            return Reflect.get(response2, key2, response2);
          }
        });
        return proxy;
      },
      stuff: __spreadValues({}, stuff),
      status: is_error2 ? status ?? null : null,
      error: is_error2 ? error2 ?? null : null
    };
    if (options.dev) {
      Object.defineProperty(load_input, "page", {
        get: () => {
          throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
        }
      });
    }
    loaded = await module.load.call(null, load_input);
    if (!loaded) {
      throw new Error(`load function must return a value${options.dev ? ` (${node.entry})` : ""}`);
    }
  } else if (shadow.body) {
    loaded = {
      props: shadow.body
    };
  } else {
    loaded = {};
  }
  if (shadow.body && state.prerender) {
    const pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
    const dependency = {
      response: new Response(void 0),
      body: JSON.stringify(shadow.body)
    };
    state.prerender.dependencies.set(pathname, dependency);
  }
  return {
    node,
    props: shadow.body,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers: new_cookies.map((new_cookie) => {
      const _a = new_cookie, { name, value } = _a, options2 = __objRest(_a, ["name", "value"]);
      return serialize_1(name, value, options2);
    }),
    uses_credentials
  };
}
async function load_shadow_data(route, event, options, prerender) {
  if (!route.shadow)
    return {};
  try {
    const mod = await route.shadow();
    if (prerender && (mod.post || mod.put || mod.del || mod.patch)) {
      throw new Error("Cannot prerender pages that have endpoints with mutative methods");
    }
    const method = normalize_request_method(event);
    const is_get = method === "head" || method === "get";
    const handler = method === "head" ? mod.head || mod.get : mod[method];
    if (!handler && !is_get) {
      return {
        status: 405,
        error: new Error(`${method} method not allowed`)
      };
    }
    const data = {
      status: 200,
      cookies: [],
      body: {}
    };
    if (!is_get) {
      const result = await handler(event);
      if (result.fallthrough) {
        throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
      }
      const { status, headers, body } = validate_shadow_output(result);
      data.status = status;
      add_cookies(data.cookies, headers);
      if (status >= 300 && status < 400) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = body;
    }
    const get = method === "head" && mod.head || mod.get;
    if (get) {
      const result = await get(event);
      if (result.fallthrough) {
        throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
      }
      const { status, headers, body } = validate_shadow_output(result);
      add_cookies(data.cookies, headers);
      data.status = status;
      if (status >= 400) {
        data.error = new Error("Failed to load data");
        return data;
      }
      if (status >= 300) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = __spreadValues(__spreadValues({}, body), data.body);
    }
    return data;
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    options.handle_error(error2, event);
    return {
      status: 500,
      error: error2
    };
  }
}
function add_cookies(target, headers) {
  const cookies = headers["set-cookie"];
  if (cookies) {
    if (Array.isArray(cookies)) {
      target.push(...cookies);
    } else {
      target.push(cookies);
    }
  }
}
function validate_shadow_output(result) {
  const { status = 200, body = {} } = result;
  let headers = result.headers || {};
  if (headers instanceof Headers) {
    if (headers.has("set-cookie")) {
      throw new Error("Endpoint request handler cannot use Headers interface with Set-Cookie headers");
    }
  } else {
    headers = lowercase_keys(headers);
  }
  if (!is_pojo(body)) {
    throw new Error("Body returned from endpoint request handler must be a plain object");
  }
  return { status, headers, body };
}
async function respond_with_error({
  event,
  options,
  state,
  $session,
  status,
  error: error2,
  resolve_opts
}) {
  try {
    const branch = [];
    let stuff = {};
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const default_error = await options.manifest._.nodes[1]();
      const layout_loaded = await load_node({
        event,
        options,
        state,
        route: null,
        node: default_layout,
        $session,
        stuff: {},
        is_error: false,
        is_leaf: false
      });
      const error_loaded = await load_node({
        event,
        options,
        state,
        route: null,
        node: default_error,
        $session,
        stuff: layout_loaded ? layout_loaded.stuff : {},
        is_error: true,
        is_leaf: false,
        status,
        error: error2
      });
      branch.push(layout_loaded, error_loaded);
      stuff = error_loaded.stuff;
    }
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      stuff,
      status,
      error: error2,
      branch,
      event,
      resolve_opts
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
async function respond$1(opts) {
  const { event, options, state, $session, route, resolve_opts } = opts;
  let nodes;
  if (!resolve_opts.ssr) {
    return await render_response(__spreadProps(__spreadValues({}, opts), {
      branch: [],
      page_config: {
        hydrate: true,
        router: true
      },
      status: 200,
      error: null,
      event,
      stuff: {}
    }));
  }
  try {
    nodes = await Promise.all(route.a.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return await respond_with_error({
      event,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      resolve_opts
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (state.prerender) {
    const should_prerender = leaf.prerender ?? state.prerender.default;
    if (!should_prerender) {
      return new Response(void 0, {
        status: 204
      });
    }
  }
  let branch = [];
  let status = 200;
  let error2 = null;
  let set_cookie_headers = [];
  let stuff = {};
  ssr: {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      let loaded;
      if (node) {
        try {
          loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
            node,
            stuff,
            is_error: false,
            is_leaf: i === nodes.length - 1
          }));
          set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
          if (loaded.loaded.redirect) {
            return with_cookies(new Response(void 0, {
              status: loaded.loaded.status,
              headers: {
                location: loaded.loaded.redirect
              }
            }), set_cookie_headers);
          }
          if (loaded.loaded.error) {
            ({ status, error: error2 } = loaded.loaded);
          }
        } catch (err) {
          const e2 = coalesce_to_error(err);
          options.handle_error(e2, event);
          status = 500;
          error2 = e2;
        }
        if (loaded && !error2) {
          branch.push(loaded);
        }
        if (error2) {
          while (i--) {
            if (route.b[i]) {
              const index = route.b[i];
              const error_node = await options.manifest._.nodes[index]();
              let node_loaded;
              let j = i;
              while (!(node_loaded = branch[j])) {
                j -= 1;
              }
              try {
                const error_loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
                  node: error_node,
                  stuff: node_loaded.stuff,
                  is_error: true,
                  is_leaf: false,
                  status,
                  error: error2
                }));
                if (error_loaded.loaded.error) {
                  continue;
                }
                page_config = get_page_config(error_node.module, options);
                branch = branch.slice(0, j + 1).concat(error_loaded);
                stuff = __spreadValues(__spreadValues({}, node_loaded.stuff), error_loaded.stuff);
                break ssr;
              } catch (err) {
                const e2 = coalesce_to_error(err);
                options.handle_error(e2, event);
                continue;
              }
            }
          }
          return with_cookies(await respond_with_error({
            event,
            options,
            state,
            $session,
            status,
            error: error2,
            resolve_opts
          }), set_cookie_headers);
        }
      }
      if (loaded && loaded.loaded.stuff) {
        stuff = __spreadValues(__spreadValues({}, stuff), loaded.loaded.stuff);
      }
    }
  }
  try {
    return with_cookies(await render_response(__spreadProps(__spreadValues({}, opts), {
      stuff,
      event,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    })), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return with_cookies(await respond_with_error(__spreadProps(__spreadValues({}, opts), {
      status: 500,
      error: error3
    })), set_cookie_headers);
  }
}
function get_page_config(leaf, options) {
  if ("ssr" in leaf) {
    throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle");
  }
  return {
    router: "router" in leaf ? !!leaf.router : options.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    set_cookie_headers.forEach((value) => {
      response.headers.append("set-cookie", value);
    });
  }
  return response;
}
async function render_page(event, route, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (route.shadow) {
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (type === "application/json") {
      return render_endpoint(event, await route.shadow());
    }
  }
  const $session = await options.hooks.getSession(event);
  return respond$1({
    event,
    options,
    state,
    $session,
    resolve_opts,
    route
  });
}
function negotiate(accept, types) {
  const parts = accept.split(",").map((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      return { type, subtype, q: +q, i };
    }
    throw new Error(`Invalid Accept header: ${accept}`);
  }).sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex((part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*"));
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
var DATA_SUFFIX = "/__data.json";
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c;
  let url = new URL(request.url);
  const { parameter, allowed } = options.method_override;
  const method_override = (_a = url.searchParams.get(parameter)) == null ? void 0 : _a.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded = decodeURI(url.pathname);
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerender) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response(void 0, { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
    url = new URL(url.origin + url.pathname.slice(0, -DATA_SUFFIX.length) + url.search);
  }
  if (!state.prerender || !state.prerender.fallback) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.type) === "page") {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_c = state.prerender) == null ? void 0 : _c.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(`${"@sveltejs/adapter-cloudflare-workers"} does not specify getClientAddress. Please raise an issue`);
      }
      Object.defineProperty(event, "clientAddress", {
        value: state.getClientAddress()
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error("To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details);
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    ssr: true,
    transformPage: default_transform
  };
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        if (opts) {
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPage: opts.transformPage || default_transform
          };
        }
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            $session: await options.hooks.getSession(event2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            error: null,
            branch: [],
            resolve_opts: __spreadProps(__spreadValues({}, resolve_opts), {
              ssr: false
            })
          });
        }
        if (route) {
          let response2;
          if (is_data_request && route.type === "page" && route.shadow) {
            response2 = await render_endpoint(event2, await route.shadow());
            if (request.headers.has("x-sveltekit-load")) {
              if (response2.status >= 300 && response2.status < 400) {
                const location = response2.headers.get("location");
                if (location) {
                  const headers = new Headers(response2.headers);
                  headers.set("x-sveltekit-location", location);
                  response2 = new Response(void 0, {
                    status: 204,
                    headers
                  });
                }
              }
            }
          } else {
            response2 = route.type === "endpoint" ? await render_endpoint(event2, await route.load()) : await render_page(event2, route, options, state, resolve_opts);
          }
          if (response2) {
            if (response2.status === 200 && response2.headers.has("etag")) {
              let if_none_match_value = request.headers.get("if-none-match");
              if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                if_none_match_value = if_none_match_value.substring(2);
              }
              const etag = response2.headers.get("etag");
              if (if_none_match_value === etag) {
                const headers = new Headers({ etag });
                for (const key2 of [
                  "cache-control",
                  "content-location",
                  "date",
                  "expires",
                  "vary"
                ]) {
                  const value = response2.headers.get(key2);
                  if (value)
                    headers.set(key2, value);
                }
                return new Response(void 0, {
                  status: 304,
                  headers
                });
              }
            }
            return response2;
          }
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(event2);
          return await respond_with_error({
            event: event2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts
          });
        }
        if (state.prerender) {
          return new Response("not found", { status: 404 });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    options.handle_error(error2, event);
    try {
      const $session = await options.hooks.getSession(event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        resolve_opts
      });
    } catch (e22) {
      const error3 = coalesce_to_error(e22);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + "</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      amp: false,
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      floc: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/_app/",
      prerender: true,
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks_1c45ba0b(), hooks_1c45ba0b_exports));
      this.options.hooks = {
        getSession: module.getSession || (() => ({})),
        handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module.externalFetch || fetch
      };
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/cloudflare-workers-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "about.html", "css/.DS_Store", "css/FONT_LICENSE.markdown", "css/chunk.woff", "favicon.png", "icons/airport.png", "icons/bulldozer.png", "icons/coal.png", "icons/commercial.png", "icons/fire.png", "icons/industrial.png", "icons/nuclear.png", "icons/park.png", "icons/police.png", "icons/port.png", "icons/query.png", "icons/rail.png", "icons/residential.png", "icons/road.png", "icons/stadium.png", "icons/wire.png", "images/dirtbg.png", "images/sprites.png", "images/tiles.png", "images/tilessnow.png", "sprites/obj1-0.png", "sprites/obj1-1.png", "sprites/obj1-2.png", "sprites/obj1-3.png", "sprites/obj1-4.png", "sprites/obj2-0.png", "sprites/obj2-1.png", "sprites/obj2-2.png", "sprites/obj2-3.png", "sprites/obj2-4.png", "sprites/obj2-5.png", "sprites/obj2-6.png", "sprites/obj2-7.png", "sprites/obj3-0.png", "sprites/obj3-1.png", "sprites/obj3-10.png", "sprites/obj3-2.png", "sprites/obj3-3.png", "sprites/obj3-4.png", "sprites/obj3-5.png", "sprites/obj3-6.png", "sprites/obj3-7.png", "sprites/obj3-8.png", "sprites/obj3-9.png", "sprites/obj4-0.png", "sprites/obj4-1.png", "sprites/obj4-2.png", "sprites/obj4-3.png", "sprites/obj4-4.png", "sprites/obj4-5.png", "sprites/obj4-6.png", "sprites/obj4-7.png", "sprites/obj5-0.png", "sprites/obj5-1.png", "sprites/obj5-10.png", "sprites/obj5-11.png", "sprites/obj5-12.png", "sprites/obj5-13.png", "sprites/obj5-14.png", "sprites/obj5-15.png", "sprites/obj5-2.png", "sprites/obj5-3.png", "sprites/obj5-4.png", "sprites/obj5-5.png", "sprites/obj5-6.png", "sprites/obj5-7.png", "sprites/obj5-8.png", "sprites/obj5-9.png", "sprites/obj6-0.png", "sprites/obj6-1.png", "sprites/obj6-2.png", "sprites/obj7-0.png", "sprites/obj7-1.png", "sprites/obj7-2.png", "sprites/obj7-3.png", "sprites/obj7-4.png", "sprites/obj7-5.png", "sprites/obj8-0.png", "sprites/obj8-1.png", "sprites/obj8-2.png", "sprites/obj8-3.png"]),
  mimeTypes: { ".html": "text/html", ".markdown": "text/markdown", ".woff": "font/woff", ".png": "image/png" },
  _: {
    entry: { "file": "start-f39db8b3.js", "js": ["start-f39db8b3.js", "chunks/index-b6926417.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__2(), __exports)),
      () => Promise.resolve().then(() => (init__3(), __exports2)),
      () => Promise.resolve().then(() => (init__4(), __exports3)),
      () => Promise.resolve().then(() => (init__5(), __exports4))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Map([]);

// .svelte-kit/cloudflare-workers-tmp/entry.js
var import_kv_asset_handler = __toESM(require_dist());
import static_asset_manifest_json from "__STATIC_CONTENT_MANIFEST";
var static_asset_manifest = JSON.parse(static_asset_manifest_json);
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
var entry_default = {
  async fetch(req, env, context) {
    const url = new URL(req.url);
    if (url.pathname.startsWith(prefix)) {
      const res = await get_asset_from_kv(req, env, context);
      if (is_error(res.status))
        return res;
      return new Response(res.body, {
        headers: {
          "cache-control": "public, immutable, max-age=31536000",
          "content-type": res.headers.get("content-type"),
          "x-robots-tag": "noindex"
        }
      });
    }
    const pathname = url.pathname.replace(/\/$/, "");
    let file = pathname.substring(1);
    try {
      file = decodeURIComponent(file);
    } catch (err) {
    }
    if (manifest.assets.has(file) || manifest.assets.has(file + "/index.html") || prerendered.has(pathname || "/")) {
      return get_asset_from_kv(req, env, context, (request, options) => {
        if (prerendered.has(pathname || "/")) {
          url.pathname = "/" + prerendered.get(pathname || "/").file;
          return new Request(url.toString(), request);
        }
        return (0, import_kv_asset_handler.mapRequestToAsset)(request, options);
      });
    }
    return await server.respond(req, {
      platform: { env, context },
      getClientAddress() {
        return req.headers.get("cf-connecting-ip");
      }
    });
  }
};
async function get_asset_from_kv(req, env, context, map = import_kv_asset_handler.mapRequestToAsset) {
  return await (0, import_kv_asset_handler.getAssetFromKV)({
    request: req,
    waitUntil(promise) {
      return context.waitUntil(promise);
    }
  }, {
    ASSET_NAMESPACE: env.__STATIC_CONTENT,
    ASSET_MANIFEST: static_asset_manifest,
    mapRequestToAsset: map
  });
}
function is_error(status) {
  return status > 399;
}
export {
  entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
