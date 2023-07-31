import { readFile } from "fs/promises";

import Configstore from "configstore";
const myJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));

class KeyManager {
	constructor() {
		this.conf = new Configstore(myJson.name);
	}

	setKey(key) {
		this.conf.set("apiKey", key);
		return key;
	}

	getKey() {
		const key = this.conf.get("apiKey");
		if (!key) {
			throw new Error("No API Key Found - Get a key at https://coinmarketcap.com/api/");
		}
		return key;
	}

	deleteKey() {
		const key = this.conf.get("apiKey");
		if (!key) {
			throw new Error("No API Key Found - Get a key at https://coinmarketcap.com/api/");
		}
		this.conf.delete("apiKey");
		return;
	}
}

export default KeyManager;
