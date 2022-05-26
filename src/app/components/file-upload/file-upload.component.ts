import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent implements OnInit {
  mimes: string[] = [];

  @ViewChild('inputFile') inputFile!: ElementRef<HTMLInputElement>;

  constructor(private readonly fileUploadService: FileUploadService) {}

  ngOnInit(): void {
    this.fileUploadService.click$.subscribe((click) => click && this.click());
    this.fileUploadService.mimes$.subscribe((mimes) => (this.mimes = mimes));
  }

  onChange({ target }: Event): void {
    let files = (<HTMLInputElement>target).files;
    files && this.fileUploadService.change(files);
  }

  private click() {
    setTimeout(() => this.inputFile.nativeElement.click());
  }
}
