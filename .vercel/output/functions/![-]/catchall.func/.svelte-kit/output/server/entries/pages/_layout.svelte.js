import "clsx";
import { a4 as attr_class, a5 as attr, e as escape_html, a6 as ensure_array_like, a7 as stringify } from "../../chunks/index.js";
import { W as WaButton, s as site, h as html, w as waLink, a as waSvg, i as igSvg, t as tiktokSvg } from "../../chunks/WaButton.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let scrolled = false;
    let menuOpen = false;
    const nav = [
      { href: "#tours", label: "Tours" },
      { href: "#how", label: "How it works" },
      { href: "#about", label: "About" },
      { href: "#reviews", label: "Reviews" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" }
    ];
    $$renderer2.push(`<header${attr_class("hdr svelte-1elxaub", void 0, {
      "scrolled": scrolled,
      "solid": menuOpen,
      "at-top": !menuOpen
    })}><div class="container hdr__inner svelte-1elxaub"><a href="#top" class="logo svelte-1elxaub"${attr("aria-label", `${stringify(site.brand)} home`)}><span class="logo__mark svelte-1elxaub" aria-hidden="true">🌴</span> <span class="logo__text svelte-1elxaub"><strong class="svelte-1elxaub">${escape_html(site.brand)}</strong> <small class="svelte-1elxaub">${escape_html(site.tagline)}</small></span></a> <nav class="nav svelte-1elxaub" aria-label="Primary"><!--[-->`);
    const each_array = ensure_array_like(nav);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)} class="svelte-1elxaub">${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="hdr__cta svelte-1elxaub">`);
    WaButton($$renderer2, { label: "WhatsApp" });
    $$renderer2.push(`<!----></div> <button class="burger svelte-1elxaub" aria-label="Toggle menu"${attr("aria-expanded", menuOpen)}><span${attr_class("svelte-1elxaub", void 0, { "open": menuOpen })}></span></button></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const nav = [
      { href: "#tours", label: "Tours" },
      { href: "#how", label: "How it works" },
      { href: "#about", label: "About Kadek" },
      { href: "#reviews", label: "Reviews" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
      { href: "#plan", label: "Plan my tour" }
    ];
    $$renderer2.push(`<footer class="footer svelte-jz8lnl"><div class="container footer__grid svelte-jz8lnl"><div class="footer__brand"><div class="logo svelte-jz8lnl"><span aria-hidden="true">🌴</span> <strong>${escape_html(site.brand)}</strong></div> <p class="slogan svelte-jz8lnl">“${escape_html(site.slogan)}”</p> <p class="eco svelte-jz8lnl">🌱 Eco-friendly private tours in Bali.</p></div> <nav class="footer__nav svelte-jz8lnl" aria-label="Footer"><h4 class="svelte-jz8lnl">Explore</h4> <!--[-->`);
    const each_array = ensure_array_like(nav);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)} class="svelte-jz8lnl">${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="footer__contact"><h4 class="svelte-jz8lnl">Get in touch</h4> <a class="line svelte-jz8lnl"${attr("href", waLink())} target="_blank" rel="noopener noreferrer">${html(waSvg)} ${escape_html(site.phoneDisplay)}</a> <div class="socials svelte-jz8lnl"><a${attr("href", site.instagram)} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="svelte-jz8lnl">${html(igSvg)}</a> <a${attr("href", site.tiktok)} target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="svelte-jz8lnl">${html(tiktokSvg)}</a></div></div></div> <div class="container footer__bottom svelte-jz8lnl"><p class="svelte-jz8lnl">© 2026 ${escape_html(site.brand)}. All rights reserved.</p> <p class="svelte-jz8lnl">${escape_html(site.guide)} — ${escape_html(site.tagline)}</p></div></footer>`);
  });
}
function FloatingWhatsApp($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let show = false;
    $$renderer2.push(`<a${attr_class("fab svelte-17nyh1w", void 0, { "show": show })}${attr("href", waLink())} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">${html(waSvg)} <span class="fab__label svelte-17nyh1w">Chat on WhatsApp</span> <span class="fab__pulse svelte-17nyh1w" aria-hidden="true"></span></a>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  Header($$renderer);
  $$renderer.push(`<!----> <main>`);
  children($$renderer);
  $$renderer.push(`<!----></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----> `);
  FloatingWhatsApp($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
