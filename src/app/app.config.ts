import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ServiceEquipos } from './services/service.equipos';

import { routes } from './app.routes';
import { ServiceAlumnos } from './services/service.alumnos';
import { ServiceEmpleados } from './services/service.empleados';
import { ServiceFicheros } from './services/service.ficheros';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ServiceEquipos,
    ServiceAlumnos,
    ServiceEmpleados,
    ServiceFicheros
  ]
};
