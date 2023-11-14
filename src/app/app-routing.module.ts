import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AccesoireTelephoniqueComponent } from './accesoire-telephonique/accesoire-telephonique.component';


const routes: Routes = [
  {path: '', component: HomeComponent ,pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'accesoire-telephonique', component: AccesoireTelephoniqueComponent},
  {path: '**' ,  redirectTo :  'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
