#!/usr/bin/env node

import { program } from "commander";
import { readFile } from "fs/promises";
import { check } from "../commands/check.js";

const myJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));

program.version(myJson.version).command("key", "Set API key -- Get at https://coinmarketcap.com/api/");

program
	.command("price")
	.description("Check price of coins")
	.option("--coin <type>", "Add specific coin types in CSV format")
	.option("--cur <currency>", "Change the currency", "USD")
	.action((cmd) => check.price(cmd));

program.parse(process.argv);
