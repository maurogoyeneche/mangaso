import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_PBszknhF.mjs';
import 'kleur/colors';
import { $ as $$Welcome, a as $$Layout } from '../chunks/Welcome_BffZMANt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$nombre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$nombre;
  const { nombre } = Astro2.params;
  const nombreCapitalizado = nombre ? nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase() : "Amigo";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\xBFMe prest\xE1s $500? - ${nombreCapitalizado}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, { "nombre": nombre })} ` })}`;
}, "/Users/maurogoyeneche/workspace/joke-click/y/src/pages/[nombre].astro", void 0);

const $$file = "/Users/maurogoyeneche/workspace/joke-click/y/src/pages/[nombre].astro";
const $$url = "/[nombre]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$nombre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
