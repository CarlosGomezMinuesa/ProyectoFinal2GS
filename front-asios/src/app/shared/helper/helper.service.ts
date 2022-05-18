import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ToasterComponent } from '../../components/toaster/toaster.component';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private snackBar: MatSnackBar) { }

  //Funcion generica que muestra toast messages de alerta donde sea
  createSnackBar(message: String) {
    this.snackBar.openFromComponent(ToasterComponent, {
      data: {
        message: message
      },
      duration: 3* 1000,
      panelClass: 'center',
      horizontalPosition: 'center'
    })
  }
}
