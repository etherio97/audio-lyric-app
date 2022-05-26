import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MIME_TYPES } from 'src/app/app.config';
import { MimeType } from '../core/types/mime-type.enum';

@Injectable({
  providedIn: 'any',
})
export class FileUploadService {
  private readonly _mimeTypes: {
    [key: string]: string[];
  } = MIME_TYPES;

  private readonly _click$: Subject<boolean> = new Subject();

  private readonly _mimes$: Subject<string[]> = new Subject();

  private readonly _accept$: Subject<MimeType> = new Subject();

  private readonly _files$: Subject<FileList> = new Subject();

  accept(type: MimeType) {
    this._accept$.next(type);
    this._mimes$.next(this._mimeTypes[type] ?? []);
  }

  click(): void {
    this._click$.next(true);
  }

  change(files: FileList): void {
    this._click$.next(false);
    this._files$.next(files);
  }

  get mimes$() {
    return this._mimes$.asObservable();
  }

  get accept$() {
    return this._accept$.asObservable();
  }

  get click$() {
    return this._click$.asObservable();
  }

  get files$() {
    return this._files$.asObservable();
  }
}
