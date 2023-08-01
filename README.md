# Cryptocurrency Price Checker CLI

## Description
This is a Command Line Interface (CLI) built with Node.js that allows you to check the prices of different cryptocurrencies using the CoinMarketCap API.

## Prerequisites
Before using this CLI, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm (Node Package Manager) (version 9 or higher)

## Installation
Clone this repository to your local machine:
```
git clone https://github.com/lllMaxMaxlll/coin.git
```

Navigate to the project directory:
```
cd coin
```
Install the project dependencies:
```
npm install
```
Create a global symbolic link (in Windows use CMD or Git Bash, *Powershell does't work*)
```
npm link
```

## Usage
- Get API Key in [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/)
- Open a terminal. Run the CLI with the following command to set the API Key:
```
coin key set
```

- You can show or remove API Key with this options:
```
coin key show
```
```
coin key remove
```

- This will display the current price of the 10 most relevant coins:
```
coin price
```
![Select C__Windows_system32_cmd exe  1_8_2023 09_47_26](https://github.com/lllMaxMaxlll/coin/assets/102885256/d020ce52-393a-47c4-b102-be15845a7a9b)

You can add two options: 
- **--coin <crypto_symbol>**
- **--cur <currency_symbol>**

Replace **<crypto_symbol>** with the symbol of the cryptocurrency you want to check the price for. You can add multiple options separated by comma (ETH,BTC,BNB)
```
coin price --coin BTC
```
![Select C__Windows_system32_cmd exe  1_8_2023 10_05_45](https://github.com/lllMaxMaxlll/coin/assets/102885256/5405f62e-d297-460d-a8a5-641b29ddb580)

```
coin price --coin BTC,ETH,DOGE
```
![Select C__Windows_system32_cmd exe  1_8_2023 10_09_05](https://github.com/lllMaxMaxlll/coin/assets/102885256/6499d630-0ab4-41d0-a90b-c3b9ecc763ff)

Replace **<currency_symbol>** with the symbol of the currency (USD or EUR or ARS...).
```
coin price --coin BTC,ETH --cur EUR
```
![C__Windows_system32_cmd exe  1_8_2023 10_15_01](https://github.com/lllMaxMaxlll/coin/assets/102885256/9257a663-ecde-4356-8e18-89c0d7a87e5f)

## Contributions
Contributions are welcome. If you find any issues or have an improvement to propose, please create an issue or submit a pull request.

## License
This project is licensed under the MIT License.

