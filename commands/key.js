import colors from "colors";
import KeyManager from "../lib/KeyManager.js";

export const key = {
	async set() {
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: "input",
				name: "key",
				message: "Enter API Key ".green + "https://coinmarketcap.com/api/",
			},
		]);

		const key = keyManager.setKey(input.key);

		if (key) {
			console.log("API Key Set".blue);
		}
	},
	show() {
		console.log("SHOW");
	},
	remove() {
		console.log("REMOVE");
	},
};
