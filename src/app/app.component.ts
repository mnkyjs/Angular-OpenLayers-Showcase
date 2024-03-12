import { Component } from '@angular/core';
import { MapComponent } from './feature/map/map.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MapComponent],
})
export class AppComponent {}
