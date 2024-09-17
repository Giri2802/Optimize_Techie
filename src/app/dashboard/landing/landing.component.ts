import { Component } from '@angular/core';
import { SolidFooterComponent } from '../solid-footer/solid-footer.component';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SolidFooterComponent, MatButtonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
