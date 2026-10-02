import { n as head, l as escape_html, c as pop, p as push } from "../../../chunks/index.js";
import { C as Container } from "../../../chunks/Container.js";
import { h as html } from "../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.attributes.title)} - Pura Verdura</title>`;
  });
  Container($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<h1>${escape_html(data.attributes.title)}</h1> ${html(data.body)}`;
    }
  });
  pop();
}
export {
  _page as default
};
