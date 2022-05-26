import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AudioService } from './services/audio.service';
import { MimeType } from './core/types/mime-type.enum';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  private acceptType!: MimeType;

  constructor(
    private fileUploadService: FileUploadService,
    private audioService: AudioService
  ) {}

  ngOnInit(): void {
    this.registerFileUploadService();
    this.registerAudioService();
  }

  ngAfterViewInit(): void {
    this.audioService.setPlayer(this.audioPlayer.nativeElement);
  }

  private registerFileUploadService() {
    this.fileUploadService.accept$.subscribe(
      (type) => (this.acceptType = type)
    );

    this.fileUploadService.files$.subscribe((files) => {
      let file = files[0];
      switch (this.acceptType) {
        case MimeType.AUIDO:
          this.audioService.setCurrentSrc(URL.createObjectURL(file));
          this.audioPlayer.nativeElement.controls = true;
          break;
      }
    });
  }

  private registerAudioService() {
    this.audioService.currentSrc$.subscribe(
      (currentSrc) => (this.audioPlayer.nativeElement.src = currentSrc)
    );

    this.audioService.canPlayThough$.subscribe(
      (canPlayThough) => canPlayThough && this.audioService.play()
    );

    this.audioService.currentTime$.subscribe(
      (currentTime) =>
        (this.audioPlayer.nativeElement.currentTime = currentTime)
    );

    this.audioService.played$.subscribe((played) =>
      played
        ? this.audioPlayer.nativeElement.play()
        : this.audioPlayer.nativeElement.pause()
    );
  }
}
