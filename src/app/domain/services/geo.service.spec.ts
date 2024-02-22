import { TestBed } from '@angular/core/testing';

import { GeoService } from './geo.service';
window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
}));
describe('GeoService', () => {
    let service: GeoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GeoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
