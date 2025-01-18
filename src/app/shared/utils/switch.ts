export class Switch {
  private _isOpened: boolean;

  get isOpened() {
    return this._isOpened;
  }

  constructor(isOpened = false) {
    this._isOpened = isOpened;
  }

  toggle() {
    this._isOpened = !this._isOpened;
  }

  open() {
    this._isOpened = true;
  }

  close() {
    this._isOpened = false;
  }
}
