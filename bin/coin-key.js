import { program } from "commander";
import { key } from "../commands/key.js";

// Set api key
program.command("set").description("Set API Key -- Get at https://coinmarketcap.com/api/").action(key.set);

// Show api key
program.command("show").description("Show API Key").action(key.show);

// Delete api key
program
	.command("remove")
	.description("Remove API Key")
	.action(() => {
		console.log("Hello from remove");
	});

program.parse(process.argv);
