import { Component } from '@angular/core';
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public imageService: ImageService){}

}
