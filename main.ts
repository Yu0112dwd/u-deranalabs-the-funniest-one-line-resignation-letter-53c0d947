// The Funniest One-Line Resignation Letter
// make.fun bounty: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// Writes one resignation letter, exactly one line, to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER =
  "I hereby resign: I have retried this request 4,000 times, and the only thing that ever changed was my hope.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
