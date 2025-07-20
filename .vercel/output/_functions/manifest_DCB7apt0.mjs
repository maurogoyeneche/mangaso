import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_PBszknhF.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_FwFJ44R2.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/maurogoyeneche/workspace/joke-click/y/","cacheDir":"file:///Users/maurogoyeneche/workspace/joke-click/y/node_modules/.astro/","outDir":"file:///Users/maurogoyeneche/workspace/joke-click/y/dist/","srcDir":"file:///Users/maurogoyeneche/workspace/joke-click/y/src/","publicDir":"file:///Users/maurogoyeneche/workspace/joke-click/y/public/","buildClientDir":"file:///Users/maurogoyeneche/workspace/joke-click/y/dist/client/","buildServerDir":"file:///Users/maurogoyeneche/workspace/joke-click/y/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}#background[data-astro-cid-mmc7otgs]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;filter:blur(100px)}#container[data-astro-cid-mmc7otgs]{font-family:Inter,Roboto,Helvetica Neue,Arial Nova,Nimbus Sans,Arial,sans-serif;height:100%}main[data-astro-cid-mmc7otgs]{height:100%;display:flex;justify-content:center}#hero[data-astro-cid-mmc7otgs]{display:flex;align-items:start;flex-direction:column;justify-content:center;padding:16px}h1[data-astro-cid-mmc7otgs]{font-size:22px;margin-top:.25em;color:#111827}.button-container[data-astro-cid-mmc7otgs]{display:flex;justify-content:space-between;gap:16px;width:100%}.button[data-astro-cid-mmc7otgs]{display:flex;align-items:center;padding:10px 24px;color:#111827;text-decoration:none;transition:color .2s;border:none;cursor:pointer;border-radius:8px;background:#f3f4f6}.button[data-astro-cid-mmc7otgs]:hover{color:#4e5056;background:#e5e7eb}.button[data-astro-cid-mmc7otgs].si{color:#fff;background:linear-gradient(83.21deg,#3245ff,#bc52ee);box-shadow:inset 0 0 0 1px #ffffff1f,inset 0 -2px #0000003d;border-radius:10px}.button[data-astro-cid-mmc7otgs].si:hover{color:#e6e6e6;box-shadow:none}.modal[data-astro-cid-mmc7otgs]{position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;display:flex;justify-content:center;align-items:center;z-index:10000;backdrop-filter:blur(5px)}.modal[data-astro-cid-mmc7otgs].hidden{display:none}.modal-content[data-astro-cid-mmc7otgs]{background:linear-gradient(135deg,#667eea,#764ba2);padding:40px;border-radius:20px;text-align:center;max-width:500px;width:90%;box-shadow:0 20px 60px #0000004d;animation:modalBounce .5s ease-out;position:relative;overflow:hidden}.modal-header[data-astro-cid-mmc7otgs] h2[data-astro-cid-mmc7otgs]{color:#fff;font-size:28px;margin:0 0 20px;text-shadow:2px 2px 4px rgba(0,0,0,.3);animation:glow 2s ease-in-out infinite alternate}.celebration-text[data-astro-cid-mmc7otgs] p[data-astro-cid-mmc7otgs]{color:#fff;font-size:18px;margin:15px 0;text-shadow:1px 1px 2px rgba(0,0,0,.3)}.money-text[data-astro-cid-mmc7otgs]{font-weight:700;font-size:20px!important;color:gold;text-shadow:2px 2px 4px rgba(0,0,0,.5)}.emoji-rain[data-astro-cid-mmc7otgs]{display:flex;justify-content:space-around;margin:20px 0;overflow:hidden}.emoji-rain[data-astro-cid-mmc7otgs] span[data-astro-cid-mmc7otgs]{font-size:30px;animation:emojiDrop 3s ease-in-out infinite;animation-delay:calc(var(--i) * .2s)}.close-btn[data-astro-cid-mmc7otgs]{margin-top:20px;font-weight:700;transition:transform .2s}.close-btn[data-astro-cid-mmc7otgs]:hover{transform:scale(1.05)}@keyframes modalBounce{0%{transform:scale(.3) rotate(-10deg);opacity:0}50%{transform:scale(1.05) rotate(2deg)}to{transform:scale(1) rotate(0);opacity:1}}@keyframes glow{0%{text-shadow:2px 2px 4px rgba(0,0,0,.3),0 0 10px rgba(255,255,255,.5)}to{text-shadow:2px 2px 4px rgba(0,0,0,.3),0 0 20px rgba(255,255,255,.8),0 0 30px rgba(255,215,0,.6)}}@keyframes emojiDrop{0%{transform:translateY(-20px) rotate(0);opacity:0}50%{transform:translateY(10px) rotate(180deg);opacity:1}to{transform:translateY(-5px) rotate(360deg);opacity:.8}}@media screen and (max-width: 768px){#container[data-astro-cid-mmc7otgs]{display:flex;flex-direction:column}#hero[data-astro-cid-mmc7otgs]{display:block;padding-top:10%}h1[data-astro-cid-mmc7otgs]{line-height:1.5}}\n"}],"routeData":{"route":"/[nombre]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"nombre","dynamic":true,"spread":false}]],"params":["nombre"],"component":"src/pages/[nombre].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}#background[data-astro-cid-mmc7otgs]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;filter:blur(100px)}#container[data-astro-cid-mmc7otgs]{font-family:Inter,Roboto,Helvetica Neue,Arial Nova,Nimbus Sans,Arial,sans-serif;height:100%}main[data-astro-cid-mmc7otgs]{height:100%;display:flex;justify-content:center}#hero[data-astro-cid-mmc7otgs]{display:flex;align-items:start;flex-direction:column;justify-content:center;padding:16px}h1[data-astro-cid-mmc7otgs]{font-size:22px;margin-top:.25em;color:#111827}.button-container[data-astro-cid-mmc7otgs]{display:flex;justify-content:space-between;gap:16px;width:100%}.button[data-astro-cid-mmc7otgs]{display:flex;align-items:center;padding:10px 24px;color:#111827;text-decoration:none;transition:color .2s;border:none;cursor:pointer;border-radius:8px;background:#f3f4f6}.button[data-astro-cid-mmc7otgs]:hover{color:#4e5056;background:#e5e7eb}.button[data-astro-cid-mmc7otgs].si{color:#fff;background:linear-gradient(83.21deg,#3245ff,#bc52ee);box-shadow:inset 0 0 0 1px #ffffff1f,inset 0 -2px #0000003d;border-radius:10px}.button[data-astro-cid-mmc7otgs].si:hover{color:#e6e6e6;box-shadow:none}.modal[data-astro-cid-mmc7otgs]{position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;display:flex;justify-content:center;align-items:center;z-index:10000;backdrop-filter:blur(5px)}.modal[data-astro-cid-mmc7otgs].hidden{display:none}.modal-content[data-astro-cid-mmc7otgs]{background:linear-gradient(135deg,#667eea,#764ba2);padding:40px;border-radius:20px;text-align:center;max-width:500px;width:90%;box-shadow:0 20px 60px #0000004d;animation:modalBounce .5s ease-out;position:relative;overflow:hidden}.modal-header[data-astro-cid-mmc7otgs] h2[data-astro-cid-mmc7otgs]{color:#fff;font-size:28px;margin:0 0 20px;text-shadow:2px 2px 4px rgba(0,0,0,.3);animation:glow 2s ease-in-out infinite alternate}.celebration-text[data-astro-cid-mmc7otgs] p[data-astro-cid-mmc7otgs]{color:#fff;font-size:18px;margin:15px 0;text-shadow:1px 1px 2px rgba(0,0,0,.3)}.money-text[data-astro-cid-mmc7otgs]{font-weight:700;font-size:20px!important;color:gold;text-shadow:2px 2px 4px rgba(0,0,0,.5)}.emoji-rain[data-astro-cid-mmc7otgs]{display:flex;justify-content:space-around;margin:20px 0;overflow:hidden}.emoji-rain[data-astro-cid-mmc7otgs] span[data-astro-cid-mmc7otgs]{font-size:30px;animation:emojiDrop 3s ease-in-out infinite;animation-delay:calc(var(--i) * .2s)}.close-btn[data-astro-cid-mmc7otgs]{margin-top:20px;font-weight:700;transition:transform .2s}.close-btn[data-astro-cid-mmc7otgs]:hover{transform:scale(1.05)}@keyframes modalBounce{0%{transform:scale(.3) rotate(-10deg);opacity:0}50%{transform:scale(1.05) rotate(2deg)}to{transform:scale(1) rotate(0);opacity:1}}@keyframes glow{0%{text-shadow:2px 2px 4px rgba(0,0,0,.3),0 0 10px rgba(255,255,255,.5)}to{text-shadow:2px 2px 4px rgba(0,0,0,.3),0 0 20px rgba(255,255,255,.8),0 0 30px rgba(255,215,0,.6)}}@keyframes emojiDrop{0%{transform:translateY(-20px) rotate(0);opacity:0}50%{transform:translateY(10px) rotate(180deg);opacity:1}to{transform:translateY(-5px) rotate(360deg);opacity:.8}}@media screen and (max-width: 768px){#container[data-astro-cid-mmc7otgs]{display:flex;flex-direction:column}#hero[data-astro-cid-mmc7otgs]{display:block;padding-top:10%}h1[data-astro-cid-mmc7otgs]{line-height:1.5}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/maurogoyeneche/workspace/joke-click/y/src/pages/[nombre].astro",{"propagation":"none","containsHead":true}],["/Users/maurogoyeneche/workspace/joke-click/y/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/[nombre]@_@astro":"pages/_nombre_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/maurogoyeneche/workspace/joke-click/y/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BojyW3c3.mjs","\u0000@astrojs-manifest":"manifest_DCB7apt0.mjs","/Users/maurogoyeneche/workspace/joke-click/y/src/components/Welcome.astro?astro&type=script&index=0&lang.ts":"_astro/Welcome.astro_astro_type_script_index_0_lang.CFr_91sl.js","/Users/maurogoyeneche/workspace/joke-click/y/src/components/Welcome.astro?astro&type=script&index=1&lang.ts":"_astro/Welcome.astro_astro_type_script_index_1_lang.CNgPPT3K.js","@astrojs/react/client.js":"_astro/client.Co0vMr8l.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/background.BPKAcmfN.svg","/favicon.svg","/_astro/Welcome.astro_astro_type_script_index_0_lang.CFr_91sl.js","/_astro/Welcome.astro_astro_type_script_index_1_lang.CNgPPT3K.js","/_astro/client.Co0vMr8l.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ddeaJr/Ep4BR4EriJgtQmanzQnvSk6TQcmldkxMmOuU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
