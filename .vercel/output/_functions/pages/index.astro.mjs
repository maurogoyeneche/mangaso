import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_PBszknhF.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$Welcome } from '../chunks/Welcome_BffZMANt.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xBFMe prest\xE1s $500? - P\xE1gina Principal" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, { "nombre": "Amigo" })} ` })}`;
}, "/Users/maurogoyeneche/workspace/joke-click/y/src/pages/index.astro", void 0);

const $$file = "/Users/maurogoyeneche/workspace/joke-click/y/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
