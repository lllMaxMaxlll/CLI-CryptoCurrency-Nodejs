import KeyManager from "../lib/KeyManager.js";
import chalk from "chalk";
import CryptoApi from "../lib/CryptoApi.js";

const log = console.log;

export const check = {
	async price(cmd) {
		try {
			let priceData;
			const keyManager = new KeyManager();
			const key = keyManager.getKey();
			const api = new CryptoApi(key);

			if (cmd.coin) {
				priceData = await api.getPriceCoin(cmd.coin, cmd.cur);
			} else {
				priceData = await api.getPriceLatest(cmd.cur);
			}

			log(priceData);
		} catch (error) {
			const { error_message } = error.response.data.status;
			log(chalk.redBright(error_message));
		}
	},
};
