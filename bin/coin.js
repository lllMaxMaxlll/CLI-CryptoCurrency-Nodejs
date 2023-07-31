#!/usr/bin/env node

import { program } from "commander";
import { readFile } from "fs/promises";

const myJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));

program
	.version(myJson.version)
	.command("key", "Set API key -- Get at https://coinmarketcap.com/api/")
	.command("check", "Check price of a coin")
	.parse(process.argv);
