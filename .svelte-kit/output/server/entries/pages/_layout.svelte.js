import { d as sanitize_props, e as rest_props, f as attr, g as clsx, c as pop, p as push, h as spread_attributes, j as stringify, k as ensure_array_like, l as escape_html } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { C as Container } from "../../chunks/Container.js";
function Close($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  push();
  $$payload.out += `<svg${attr("class", clsx($$restProps.class))} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"></path></svg>`;
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  push();
  $$payload.out += `<svg${attr("class", clsx($$restProps.class))} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"></path><path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"></path><path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"></path></svg>`;
  pop();
}
function Header($$payload, $$props) {
  let {
    menuOpen = false,
    toggleMenu,
    class: className
  } = $$props;
  $$payload.out += `<header${attr("class", `${className} border-b-primary-100 border-b-[12px] md:border-b-[16px] flex sm:gap-x-[71px] md:gap-x-[142px] justify-between md:justify-center items-end pb-[19px] pt-[19px] shadow-lg shadow-gray-500 bg-white`)}><button class="mx-[20px] md:mx-0"${attr("aria-label", menuOpen ? "Menü schliessen" : "Menü öffnen")}${attr("aria-expanded", menuOpen)} aria-controls="navigation-menu">`;
  if (!menuOpen) {
    $$payload.out += "<!--[-->";
    Menu($$payload, {
      class: "h-[27px] stroke-primary-100 cursor-pointer hover:stroke-primary-120"
    });
  } else {
    $$payload.out += "<!--[!-->";
    Close($$payload, {
      class: "h-[27px] stroke-primary-100 text-primary-100 stroke-[0.25px] cursor-pointer hover:stroke-primary-120 hover:text-primary-120"
    });
  }
  $$payload.out += `<!--]--></button> <a href="/"><img src="/Pura_Verdura_Logo_Kopf.svg" alt="Pura Verdura Logo" class="w-[130px] md:w-[312px]"></a> <div class="flex gap-[13px] mx-[20px] md:mx-0 w-min"><a href="https://www.instagram.com/pura__verdura/" target="_blank" rel="noopener noreferrer" class="w-[28px]"><img src="/Insta_Icon_Green.png" alt="Instagram Icon" class="h-[28px]"></a> <a href="https://www.facebook.com/puraverdura.ch" target="_blank" rel="noopener noreferrer" class="w-[28px]"><img src="/Facebook_Icon_Green.png" alt="Facebook Icon" class="h-[28px]"></a></div></header>`;
}
function BackToTop($$payload, $$props) {
  let {
    class: className = "",
    threshold = 400,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  let scrollY = 0;
  let visible = scrollY > threshold;
  if (visible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${spread_attributes(
      {
        type: "button",
        class: `fixed bottom-[24px] right-[24px] z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary-15 bg-white p-2 text-primary-100 shadow-md transition-colors hover:border-primary-70 hover:text-primary-120 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100 grow-on-hover ${stringify(className)}`,
        "aria-label": "Zum Seitenanfang scrollen",
        ...rest
      }
    )}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" class="h-8 w-8 shrink-0" aria-hidden="true" fill="currentColor"><path d="M10.5,1c5.24,0,9.5,4.26,9.5,9.5s-4.26,9.5-9.5,9.5S1,15.74,1,10.5,5.26,1,10.5,1M10.5,0C4.7,0,0,4.7,0,10.5s4.7,10.5,10.5,10.5,10.5-4.7,10.5-10.5S16.3,0,10.5,0h0Z"></path><path d="M11.01,3.92l4.89,5.73h-2.23l-3.16-3.72-3.16,3.72h-2.23l4.9-5.73h1Z"></path><line x1="10.5" y1="5.93" x2="10.5" y2="17.22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.8"></line></svg></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function NavigationMenu($$payload, $$props) {
  push();
  let { class: className, toggleMenu } = $$props;
  !className.includes("hidden");
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Was wir tun", href: "/was-wir-tun/" },
    {
      name: "Wo wir zu Hause sind",
      href: "/wo-wir-zu-hause-sind/"
    },
    {
      name: "Wer dahinter steht",
      href: "/wer-dahinter-steht/"
    },
    {
      name: "Wie du mitmachen kannst",
      href: "/wie-du-mitmachen-kannst/"
    },
    {
      name: "Wieviel es kostet",
      href: "/wieviel-es-kostet/"
    },
    {
      name: "Warum das eine gute Sache ist",
      href: "/warum-das-eine-gute-sache-ist/"
    },
    { name: "Agenda", href: "/agenda/" },
    { name: "Netzwerk", href: "/netzwerk/" },
    { name: "Pura Verdura Sozial", href: "/sozial/" },
    {
      name: "Login",
      href: "https://login.puraverdura.ch/"
    }
  ];
  const isExternal = (href) => href.startsWith("http");
  const isCurrentPage = (href) => {
    const current = page.url.pathname.replace(/\/$/, "") || "/";
    const target = href.replace(/\/$/, "") || "/";
    return current === target;
  };
  const each_array = ensure_array_like(menuItems);
  $$payload.out += `<div id="navigation-menu"${attr("class", `${stringify(className)} top-0 left-0 bottom-0 right-0 z-99 bg-background-100 overflow-y-auto overscroll-y-contain`)} style="scrollbar-width: none;" role="dialog" aria-modal="true" aria-label="Navigation">`;
  Header($$payload, {
    class: "z-100 sticky top-0",
    menuOpen: true,
    toggleMenu
  });
  $$payload.out += `<!----> <div class="z-99 p-[40px] md:p-[80px]"><nav aria-label="Hauptnavigation"><ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li class="flex justify-center text-center border-b-[1px] border-b-primary-100 font-bold text-[32px] text-primary-100 !py-[6px]">`;
    if (isExternal(item.href)) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", item.href)} target="_blank" rel="noopener noreferrer" class="h1 cursor-pointer hover:text-primary-120">${escape_html(item.name)} »</a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<a${attr("href", item.href)} class="h1 cursor-pointer hover:text-primary-120"${attr("aria-current", isCurrentPage(item.href) ? "page" : void 0)}>${escape_html(item.name)} »</a>`;
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></nav> <div class="flex gap-x-[13px] w-[100%] justify-center border-b-[1px] border-b-primary-100 pb-[15px] pt-[40px]"><a href="https://www.instagram.com/pura__verdura/" target="_blank" rel="noopener noreferrer"><img src="/Insta_Icon_Grey.png" alt="Instagram" class="h-[40px]"></a> <a href="https://www.facebook.com/puraverdura.ch/" target="_blank" rel="noopener noreferrer"><img src="/Facebook_Icon_Grey.png" alt="Facebook" class="h-[40px]"></a></div> <div class="flex w-[100%] justify-center pt-[30px] text-sm"><div class="text-center"><p class="font-bold !font-heading">Kontakt</p> <p class="!font-heading">Pura Verdura <br> Postfach 156<br> 8032 Zürich <br> <a href="mailto:info@puraverdura.ch">info@puraverdura.ch</a> <br></p></div></div></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  let menuOpen = false;
  const showNewsletter = (() => {
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    return path !== "/impressum" && path !== "/datenschutz" && path !== "/netzwerk";
  })();
  $$payload.out += `<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:top-2 focus:left-2 focus:bg-white focus:px-4 focus:py-2 focus:text-primary-100 focus:font-bold focus:rounded focus:shadow-lg">Zum Inhalt springen</a> <div${attr("class", `flex flex-col min-h-screen ${stringify(menuOpen ? "hidden" : "")}`)}>`;
  Header($$payload, {
    menuOpen,
    toggleMenu: () => {
      menuOpen = !menuOpen;
    }
  });
  $$payload.out += `<!----> <main id="main-content" class="grow-1 mt-[36px] mx-[36px] lg:mx-[72px] xl:mx-[108px]">`;
  children?.($$payload);
  $$payload.out += `<!----> `;
  if (showNewsletter) {
    $$payload.out += "<!--[-->";
    Container($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<div class="newsletter-container svelte-11cg3x3"><h2>Newsletter</h2> <p>Abonniere unseren Newsletter und erfahre erntefrische
						Neuigkeiten – direkt vom Acker</p> <script async src="https://eocampaign1.com/form/9c259302-247d-11f1-bafe-39cfecd4c004.js" data-form="9c259302-247d-11f1-bafe-39cfecd4c004"><\/script> <style>
						.newsletter-container div {
							padding: 0 !important;
							margin: 0 !important;
							max-width: 100% !important;

						}

						.newsletter-container .inline-container {
							max-width: 100% !important;
						}
					</style></div>`;
      }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main> <footer class="mt-[55px] md:mt-[110px]"><img src="/Footer_illu.png" alt="" aria-hidden="true" class="w-[100vw] min-h-[50px] object-cover"> <div class="bg-footer-100 flex flex-wrap justify-between md:justify-center pt-11 pb-16 px-[36px] md:px-0 gap-x-[40px] md:gap-x-24 gap-y-[20px]"><div><p class="font-bold !text-[16px] !font-heading">Kontakt</p> <p class="!text-[16px] !font-heading">Pura Verdura <br> Postfach 156 <br> 8032 Zürich <br> <a href="mailto:info@puraverdura.ch" class="!font-normal !text-text-100 !text-[16px] !font-heading">info@puraverdura.ch</a> <br></p></div> <div><p class="!text-[16px] mb-[3px] !font-heading">Folge uns auf Social Media</p> <div class="flex gap-x-[13px] !text-[16px]"><a href="https://www.instagram.com/pura__verdura/" target="_blank" rel="noopener noreferrer"><img src="/Insta_Icon_Grey.png" alt="Instagram" class="h-[28px]"></a> <a href="https://www.facebook.com/puraverdura.ch" target="_blank" rel="noopener noreferrer"><img src="/Facebook_Icon_Grey.png" alt="Facebook" class="h-[28px]"></a></div></div> <div class="flex flex-col"><a class="!font-normal !text-text-100 !text-[16px] !font-heading" href="/impressum">Impressum »</a> <a class="!font-normal !text-text-100 !text-[16px] !font-heading" href="/datenschutz">Datenschutz »</a></div></div></footer></div> `;
  BackToTop($$payload, {});
  $$payload.out += `<!----> `;
  NavigationMenu($$payload, {
    class: menuOpen ? "fixed " : "hidden",
    toggleMenu: () => {
      console.log("toggle menu");
      menuOpen = !menuOpen;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
