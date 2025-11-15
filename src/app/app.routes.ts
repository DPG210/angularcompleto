import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponents } from './components/equipos-components/equipos-components';
import { LoginComponent } from './components/login-component/login-component';
import { EmpleadosToken } from './components/empleados-token/empleados-token';
import { AlumnosToken } from './components/alumnos-token/alumnos-token';
import { FindJugador } from './components/find-jugador/find-jugador';
import { DetallesJugador } from './components/detalles-jugador/detalles-jugador';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"equipos/:idequipo", component:EquiposComponents},
    {path:"empleados", component:EmpleadosToken},
    {path:"alumnos", component:AlumnosToken},
    {path:"find/:nombre", component:FindJugador},
    {path:"detalles/:idjugador", component:DetallesJugador}
];
