#    My Magenta v1.0
## Requirements:
install the react native development environment on your system following the react native documents: <https://reactnative.dev/docs/environment-setup>
node.js 16.x, npm, android debugging bridge, android device or emulator
## How to run the app in debug mode
### From the command line interface:
1. clone the repo:
```
git clone https://github.com/kduongthb/cs526-mymagenta.git
cd cs526-mymagenta
```
2. install yarn globally:
```
npm i -g yarn
```
3. use yarn to install dependencies
```
yarn
```
4. run the app on android device or emulator
```
yarn run android
```
*Note: if the JS debugging server doesn't start automatically, run `yarn start` in a separate command window before command number 4.
