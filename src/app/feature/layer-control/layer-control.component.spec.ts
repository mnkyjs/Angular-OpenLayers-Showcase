import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlComponent } from './layer-control.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { EMPTY } from 'rxjs';

class MockResizeObserver {
    constructor(callback: ResizeObserverCallback) {
        // Constructor implementation if needed
    }

    observe = jasmine.createSpy('observe');
    unobserve = jasmine.createSpy('unobserve');
    disconnect = jasmine.createSpy('disconnect');
}

describe('LayerControlComponent', () => {
    let component: LayerControlComponent;
    let fixture: ComponentFixture<LayerControlComponent>;

    beforeEach(async () => {
        window.ResizeObserver = MockResizeObserver as any;

        await TestBed.configureTestingModule({
            imports: [LayerControlComponent],
            providers: [
                {
                    provide: MatBottomSheetRef,
                    useValue: {
                        afterOpened: () => EMPTY,
                        afterDismissed: () => EMPTY,
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LayerControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
