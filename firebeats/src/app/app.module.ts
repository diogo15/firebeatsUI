import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SongUploadComponent } from './components/song-upload/song-upload.component';
import { GameComponent } from './components/game/game.component';
import { PlaylistDisplayComponent } from './components/playlist-display/playlist-display.component';
import { SongsDisplayComponent } from './components/songs-display/songs-display.component';
//Angular material library
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent } from './components/button/button.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule }  from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider'

import { MatIconModule } from '@angular/material/icon';
import { HeadsetComponent } from './components/headset/headset.component';
import { SongsFromPlaylistComponent } from './components/songs-from-playlist/songs-from-playlist.component';
import { TabberComponent } from './components/tabber/tabber.component';
import { TabComponent } from './components/tab/tab.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    HomePageComponent,
    LoginPageComponent,
    SongUploadComponent,
    GameComponent,
    PlaylistDisplayComponent,
    SongsDisplayComponent,
    ButtonComponent,
    IndexComponent,
    HeaderComponent,
    HeadsetComponent,
    SongsFromPlaylistComponent,
    TabberComponent,
    TabComponent,
    SongFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
