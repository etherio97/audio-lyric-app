import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from './core/icons/icons.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [FileUploadComponent, AppComponent, AppTopBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
