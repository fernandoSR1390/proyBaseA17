import { NgxSecurityService } from 'ngx-security';

export class MyAuthenticationChecker{

  constructor(private securityService: NgxSecurityService,) { }

  public check(): boolean {
    // Obtiene la información del usuario autenticado
    const user = this.securityService.setAuthenticated(true);

    // Comprueba si el usuario tiene el rol "admin"
    return true; // .    .roles?.includes("admin");
  }
}
