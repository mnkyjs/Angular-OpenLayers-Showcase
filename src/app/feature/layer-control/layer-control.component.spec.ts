import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerControlComponent } from './layer-control.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { EMPTY } from 'rxjs';

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
}));
describe('LayerControlComponent', () => {
    let component: LayerControlComponent;
    let fixture: ComponentFixture<LayerControlComponent>;

    beforeEach(async () => {
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
