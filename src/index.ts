import { GameEngine } from './gameEngine';
import { WebPlatform } from './platforms/web';
import { MobilePlatform } from './platforms/mobile';
import { DesktopPlatform } from './platforms/desktop';

// Create a new instance of the game engine
const gameEngine = new GameEngine();

// Create platform instances
const webPlatform = new WebPlatform();
const mobilePlatform = new MobilePlatform();
const desktopPlatform = new DesktopPlatform();

// Register platforms with the game engine
gameEngine.registerPlatform(webPlatform);
gameEngine.registerPlatform(mobilePlatform);
gameEngine.registerPlatform(desktopPlatform);

// Start the game engine
gameEngine.start();
