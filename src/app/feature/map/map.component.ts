import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { ControlStateService } from '../../domain/state/control.state.service';
import { GeoService } from '../../domain/services/geo.service';
import { LayerControlComponent } from '../layer-control/layer-control.component';

@Component({
    selector: 'app-map',
    standalone: true,
    imports: [LayerControlComponent],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
    isControlsOpened = this.controlStateService.sheetState;

    constructor(
        private controlStateService: ControlStateService,
        private geoService: GeoService,
    ) {}

    ngAfterViewInit(): void {
        this.geoService.updateView();
        this.geoService.setTileSource();
        this.geoService.updateSize();
    }
}
