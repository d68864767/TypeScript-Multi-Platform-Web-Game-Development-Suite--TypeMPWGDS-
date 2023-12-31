import { WebPlatform } from './platforms/web';
import { MobilePlatform } from './platforms/mobile';
import { DesktopPlatform } from './platforms/desktop';

export class GameEngine {
    private platforms: (WebPlatform | MobilePlatform | DesktopPlatform)[] = [];

    registerPlatform(platform: WebPlatform | MobilePlatform | DesktopPlatform): void {
        this.platforms.push(platform);
    }

    start(): void {
        this.platforms.forEach(platform => {
            platform.initialize();
            platform.start();
        });
    }
}
