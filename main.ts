import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });

const entry =
  "Have you tried turning it off and on again? I did — the user turned off the lights, unplugged the fridge, and now we're in the dark and the printer still won't print.";

writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
