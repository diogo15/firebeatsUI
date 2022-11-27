import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ListsSelectionComponent } from './components/lists-selection/lists-selection.component';
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
    ListsSelectionComponent,
    ButtonComponent,
    IndexComponent,
    HeaderComponent,
    
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
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
