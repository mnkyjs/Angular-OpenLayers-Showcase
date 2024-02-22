import { AfterViewInit, Component } from '@angular/core';
import { GeoService } from './domain/services/geo.service';
import { ControlStateService } from './domain/state/control.state.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LayerControlComponent } from './feature/layer-control/layer-control.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MatIcon, MatMiniFabButton],
})
export class AppComponent implements AfterViewInit {
    isControlsOpened = this.controlStateService.sheetState;

    constructor(
        private controlStateService: ControlStateService,
        private geoService: GeoService,
        private bottomSheet: MatBottomSheet,
    ) {}

    ngAfterViewInit(): void {
        this.geoService.updateView();
        this.geoService.setTileSource();
        this.geoService.updateSize();
    }

    openControls(): void {
        this.bottomSheet.open(LayerControlComponent, { autoFocus: false });
    }
}
