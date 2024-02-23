import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

class MockResizeObserver {
    constructor(callback: ResizeObserverCallback) {
        // Constructor implementation if needed
    }

    observe = jasmine.createSpy('observe');
    unobserve = jasmine.createSpy('unobserve');
    disconnect = jasmine.createSpy('disconnect');
}
describe('AppComponent', () => {
    beforeEach(async () => {
        window.ResizeObserver = MockResizeObserver as any;

        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
