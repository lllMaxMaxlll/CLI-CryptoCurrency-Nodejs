import KeyManager from "../lib/KeyManager.js";
import chalk from "chalk";
import inquirer from "inquirer";
import { isRequired } from "../utils/validation.js";

const log = console.log;

export const key = {
	async set() {
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: "input",
				name: "key",
				message: chalk.green("Enter API Key"),
				validate: isRequired,
			},
		]);

		const key = keyManager.setKey(input.key);

		if (key) {
			log(chalk.blue("API Key set successfully"));
		}
	},
	show() {
		try {
			const keyManager = new KeyManager();
			const key = keyManager.getKey();

			log("Current API Key: " + chalk.cyan(key));
			return key;
		} catch (error) {
			console.error(error.message);
		}
	},
	remove() {
		try {
			const keyManager = new KeyManager();
			keyManager.deleteKey();

			log(chalk.red("Key removed successfully"));
		} catch (error) {
			console.error(error.message);
		}
	},
};
