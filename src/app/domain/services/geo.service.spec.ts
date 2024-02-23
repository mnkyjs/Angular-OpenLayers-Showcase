import { TestBed } from '@angular/core/testing';

import { GeoService } from './geo.service';

class MockResizeObserver {
    constructor(callback: ResizeObserverCallback) {
        // Constructor implementation if needed
    }

    observe = jasmine.createSpy('observe');
    unobserve = jasmine.createSpy('unobserve');
    disconnect = jasmine.createSpy('disconnect');
}

describe('GeoService', () => {
    let service: GeoService;

    beforeEach(() => {
        window.ResizeObserver = MockResizeObserver as any;
        TestBed.configureTestingModule({});
        service = TestBed.inject(GeoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
