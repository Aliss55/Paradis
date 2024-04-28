import {Injectable} from '@angular/core';
import {Theme, ThemeSwitcherService} from "./theme-switcher.service";

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private themeService: ThemeSwitcherService) {}

    public getImagePathAccordingToTheme(image_name: string, image_path: string): string {
        if (this.themeService.currentAppTheme === Theme.LIGHT) {
            return image_path + '/' + image_name
        } else {
            return image_path + '/' + "Dark-Mode-" + image_name
        }
    }
}
