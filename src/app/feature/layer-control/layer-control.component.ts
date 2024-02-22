import { Component, OnInit } from '@angular/core';
import { ControlStateService } from '../../domain/state/control.state.service';
import { GeoService } from '../../domain/services/geo.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-layer-control',
    standalone: true,
    imports: [MatButton, MatIcon, MatIconButton],
    templateUrl: './layer-control.component.html',
    styleUrl: './layer-control.component.scss',
})
export class LayerControlComponent implements OnInit {
    constructor(
        private controlStateService: ControlStateService,
        public geoService: GeoService,
        private bottomSheetRef: MatBottomSheetRef<LayerControlComponent>,
    ) {}
    ngOnInit(): void {
        this.bottomSheetRef.afterOpened().subscribe(() => this.controlStateService.set(true));
        this.bottomSheetRef.afterDismissed().subscribe(() => this.controlStateService.set(false));
    }

    close(): void {
        this.bottomSheetRef.dismiss();
    }
}
