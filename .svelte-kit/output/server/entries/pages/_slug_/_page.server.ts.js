import { readFileSync } from "fs";
import fm from "front-matter";
import { marked } from "marked";
const load = async ({ params }) => {
  const buffer = readFileSync(
    `./src/content/pages/${params.slug}.md`,
    "utf-8"
  );
  const content = fm(buffer.toString());
  const parsedBody = await marked.parse(content.body);
  return {
    attributes: content.attributes,
    //structuredBody: structuredBody,
    body: parsedBody
  };
};
export {
  load
};
