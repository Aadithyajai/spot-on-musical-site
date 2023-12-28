import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { PlayComponent } from './play/play.component';
import { PlaylistsComponent } from './playlists/playlists.component';



const routes:Routes =[
  
  {path:'one',component:OneComponent},
  {path:'play',component:PlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
