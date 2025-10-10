import { d as sanitize_props, e as rest_props, c as pop, p as push, f as ensure_array_like, g as stringify } from "../../chunks/index.js";
import { a as attr, c as clsx } from "../../chunks/attributes.js";
import "../../chunks/client.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Close($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  push();
  $$payload.out += `<svg${attr("class", clsx($$restProps.class))} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"></path></svg>`;
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  push();
  $$payload.out += `<svg${attr("class", clsx($$restProps.class))} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"></path><path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"></path><path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"></path></svg>`;
  pop();
}
function Header($$payload, $$props) {
  let {
    menuOpen = false,
    toggleMenu,
    class: className
  } = $$props;
  $$payload.out += `<header${attr("class", `${className} border-b-primary-100 border-b-[12px] md:border-b-[16px] flex sm:gap-x-[71px] md:gap-x-[142px] justify-between md:justify-center items-end pb-[19px] pt-[19px] shadow-lg shadow-gray-500 bg-white`)}><button class="mx-[20px] md:mx-0">`;
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
  $$payload.out += `<!--]--></button> <a href="/"><img src="/Pura_Verdura_Logo_Kopf.svg" alt="logo" class="w-[130px] md:w-[312px]"></a> <div class="flex gap-[13px] mx-[20px] md:mx-0 w-min"><a href="https://www.instagram.com/pura__verdura/" target="_blank" class="w-[28px]"><img src="/Insta_Icon_Green.png" alt="Instagram" class="h-[28px]"></a> <a href="https://www.facebook.com/puraverdura.ch" target="_blank" class="w-[28px]"><img src="/Facebook_Icon_Green.png" alt="Facebook" class="h-[28px]"></a></div></header>`;
}
function NavigationMenu($$payload, $$props) {
  push();
  let { class: className, toggleMenu } = $$props;
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
  const each_array = ensure_array_like(menuItems);
  $$payload.out += `<div${attr("class", `${stringify(className)} top-0 left-0 bottom-0 right-0 z-99 bg-background-100 overflow-y-auto overscroll-y-contain`)}>`;
  Header($$payload, { class: "z-100", menuOpen: true, toggleMenu });
  $$payload.out += `<!----> <div class="z-99 p-[40px] md:p-[80px]"><ul><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out += `<li class="h1 flex justify-center text-center border-b-[1px] border-b-primary-100 font-bold text-[32px] text-primary-100"><button class="cursor-pointer hover:text-primary-120"${attr("tabindex", index + 1)}>${escape_html(item.name)} »</button></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="flex gap-x-[13px] w-[100%] justify-center border-b-[1px] border-b-primary-100 pb-[15px] pt-[40px]"><a href="https://www.instagram.com/pura__verdura/"><img src="/Insta_Icon_Grey.png" alt="Instagram" class="h-[40px]"></a> <a href="https://www.facebook.com/puraverdura.ch/"><img src="/Facebook_Icon_Grey.png" alt="Facebook" class="h-[40px]"></a></div> <div class="flex w-[100%] justify-center pt-[30px] text-sm"><div class="text-center"><p class="font-bold !font-heading">Kontakt</p> <p class="!font-heading">Pura Verdura <br> Postfach 156<br> 8032 Zürich <br> info@puraverdura.ch <br></p></div></div></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  let menuOpen = false;
  $$payload.out += `<div${attr("class", `flex flex-col min-h-screen ${stringify(menuOpen ? "hidden" : "")}`)}>`;
  Header($$payload, {
    menuOpen: false,
    toggleMenu: () => {
      menuOpen = !menuOpen;
    }
  });
  $$payload.out += `<!----> <main class="grow-1 mt-[36px] mx-[36px] lg:mx-[72px] xl:mx-[108px]">`;
  children?.($$payload);
  $$payload.out += `<!----></main> <footer class="mt-[55px] md:mt-[110px]"><img src="/Footer_illu.png" alt="logo" class="w-[100vw] min-h-[50px] object-cover"> <div class="bg-footer-100 flex flex-wrap justify-between md:justify-center pt-11 pb-16 px-[36px] md:px-0 gap-x-[40px] md:gap-x-24 gap-y-[20px]"><div><p class="font-bold !text-[16px] !font-heading">Kontakt</p> <p class="!text-[16px] !font-heading">Pura Verdura <br> Postfach 156 <br> 8032 Zürich <br> info@puraverdura.ch <br></p></div> <div><p class="!text-[16px] mb-[3px] !font-heading">Folge uns auf Social Media</p> <div class="flex gap-x-[13px] !text-[16px]"><a href="https://www.instagram.com/pura__verdura/" target="_blank"><img src="/Insta_Icon_Grey.png" alt="Instagram" class="h-[28px]"></a> <a href="https://www.facebook.com/puraverdura.ch" target="_blank"><img src="/Facebook_Icon_Grey.png" alt="Facebook" class="h-[28px]"></a></div></div> <div class="flex flex-col"><a class="!font-normal !text-text-100 !text-[16px] !font-heading" href="/impressum">Impressum »</a> <a class="!font-normal !text-text-100 !text-[16px] !font-heading" href="/datenschutz">Datenschutz »</a></div></div></footer></div> `;
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
