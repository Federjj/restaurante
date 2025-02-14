import { Component } from '@angular/core';
import { InventarioComponent } from '../../components/inventario/inventario.component';

@Component({
  selector: 'app-dashboard',
  imports: [InventarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
