import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ControlStateService {
    private _sheetState = signal(false);

    sheetState = this._sheetState.asReadonly();

    set(state: boolean) {
        this._sheetState.set(state);
    }
}
