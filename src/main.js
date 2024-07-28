import kaplay from "kaplay";
import "kaplay/global";
import { loadAssets } from "./loadAssets";
import { makeMenu } from "./makeMenu";
import { makeGame } from "./makeGame";
import { makeGameOver } from "./makeGameOver";

const k = kaplay({
	letterbox: true,
	width: 1280,
	height: 720,
	crisp: true,
	global: false,
})

k.setBackground(k.Color.fromHex("#134B70"))

loadAssets(k);
makeMenu(k);
makeGame(k);
makeGameOver(k);

// Init Game
k.go("menu");