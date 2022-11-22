import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SongUploadComponent } from './components/song-upload/song-upload.component';
import { GameComponent } from './components/game/game.component';
import { PlaylistDisplayComponent } from './components/playlist-display/playlist-display.component';
import { SongsDisplayComponent } from './components/songs-display/songs-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    PlaylistComponent,
    HomePageComponent,
    LoginPageComponent,
    SongUploadComponent,
    GameComponent,
    PlaylistDisplayComponent,
    SongsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
