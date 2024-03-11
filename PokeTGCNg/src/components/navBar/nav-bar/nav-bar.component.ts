import { Component } from '@angular/core';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxButtonModule,
  IgxNavbarActionDirective,
  IgxIconComponent,
} from 'igniteui-angular';
import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone: true,
  imports: [IgxIconModule, IgxNavbarModule, IgxButtonModule],
})
export class NavBarComponent {}
