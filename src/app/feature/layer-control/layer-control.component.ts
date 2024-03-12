import { Component, OnInit } from '@angular/core';
import { ControlStateService } from '../../domain/state/control.state.service';
import { GeoService } from '../../domain/services/geo.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-layer-control',
    standalone: true,
    imports: [],
    templateUrl: './layer-control.component.html',
    styleUrl: './layer-control.component.scss',
})
export class LayerControlComponent {
    constructor(public geoService: GeoService) {}
}
