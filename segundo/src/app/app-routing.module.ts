import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'equipo/:id', 
    component: EquipoComponent
  },
  { path: 'contacto', 
    component: ContactoComponent
  },
  { path: 'nosotros', 
    component: NosotrosComponent
  },
  { path: '',
    component: NosotrosComponent,
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'nosotros',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
