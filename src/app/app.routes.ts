import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponents } from './components/equipos-components/equipos-components';
import { LoginComponent } from './components/login-component/login-component';
import { EmpleadosToken } from './components/empleados-token/empleados-token';
import { AlumnosToken } from './components/alumnos-token/alumnos-token';
import { FindJugador } from './components/find-jugador/find-jugador';
import { DetallesJugador } from './components/detalles-jugador/detalles-jugador';
import { SubirFichero } from './components/subir-fichero/subir-fichero';
import { DepartamentosComponent } from './components/departamentos-home/departamentos-home';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';
import { UpdateDepartamento } from './components/update-departamento/update-departamento';
import { DetallesDepartamento } from './components/detalles-departamento/detalles-departamento';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"equipos/:idequipo", component:EquiposComponents},
    {path:"empleados", component:EmpleadosToken},
    {path:"alumnos", component:AlumnosToken},
    {path:"find/:nombre", component:FindJugador},
    {path:"detalles/:idjugador", component:DetallesJugador},
    {path:"ficheros", component:SubirFichero},
    {path:"departamentoshome" , component:DepartamentosComponent},
    {path:"crear", component:CrearDepartamento},
    {path:"update/:id", component:UpdateDepartamento},
    {path:"detalles/:id/:nombre/:localidad", component:DetallesDepartamento},
    {path:"**", component:NotFound}
];
