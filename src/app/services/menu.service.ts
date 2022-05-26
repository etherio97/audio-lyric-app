import { Injectable } from '@angular/core';
import { MimeType } from '../core/types/mime-type.enum';
import { FileUploadService } from './file-upload.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private readonly fileUploadService: FileUploadService) {}

  dispatch(action: string) {
    switch (action) {
      case 'import-audio':
        this.fileUploadService.accept(MimeType.AUIDO);
        this.fileUploadService.click();
        break;
      case 'import-video':
        this.fileUploadService.accept(MimeType.VIDEO);
        this.fileUploadService.click();
        break;
      case 'import-subtitle':
        this.fileUploadService.accept(MimeType.LYRIC);
        this.fileUploadService.click();
        break;
    }
  }
}
