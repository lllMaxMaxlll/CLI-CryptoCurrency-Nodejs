#!/usr/bin/env node

import { program } from "commander";
import { readFile } from "fs/promises";

const myJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));

program.version(myJson.version).command("key", "Set API key -- Get at https://coinmarketcap.com/api/").parse(process.argv);
