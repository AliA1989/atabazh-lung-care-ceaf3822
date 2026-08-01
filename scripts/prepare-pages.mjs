import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDirectory = resolve("dist");
const routes = [
  "device",
  "clinical-evidence",
  "long-term-care",
  "about",
  "news",
  "contact",
  "privacy",
  "terms",
];

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = resolve(distDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(resolve(distDirectory, "index.html"), resolve(routeDirectory, "index.html"));
  }),
);

await copyFile(resolve(distDirectory, "index.html"), resolve(distDirectory, "404.html"));
await writeFile(resolve(distDirectory, ".nojekyll"), "");
