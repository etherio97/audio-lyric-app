import { Injectable } from '@angular/core';
import { from, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private readonly _currentSrc$ = new Subject<string>();

  private readonly _currentTime$ = new Subject<number>();

  private readonly _volume$ = new Subject<number>();

  private readonly _played$ = new Subject<boolean>();

  private readonly _ended$ = new Subject<boolean>();

  private readonly _canPlayThough$ = new Subject<boolean>();

  setPlayer(player: HTMLAudioElement) {
    player.addEventListener('change', () => {
      this._played$.next(false);
      this._canPlayThough$.next(false);
      this._ended$.next(false);
    });
    player.addEventListener('canplaythrough', () => {
      this._canPlayThough$.next(true);
    });
    player.addEventListener('play', () => {
      this._played$.next(true);
    });
    player.addEventListener('pause', () => {
      this._played$.next(false);
    });
    player.addEventListener('ended', () => {
      this._played$.next(false);
      this._ended$.next(true);
    });
  }

  setVolume(value: number) {
    this._volume$.next(value);
  }

  setCurrentTime(value: number) {
    this._currentTime$.next(value);
  }

  setCurrentSrc(value: any) {
    this._currentSrc$.next(value);
  }

  play() {
    this._played$.next(true);
  }

  paused() {
    this._played$.next(false);
  }

  get canPlayThough$() {
    return this._canPlayThough$.asObservable();
  }

  get played$() {
    return this._played$.asObservable();
  }

  get currentSrc$() {
    return this._currentSrc$.asObservable();
  }

  get currentTime$() {
    return this._currentTime$.asObservable();
  }

  get volume$() {
    return this._volume$.asObservable();
  }

  get ended$() {
    return this._ended$.asObservable();
  }
}
