import { Component } from '@angular/core';
import { menuItem } from '../../menuItem.models';
import { FoodService } from '../../food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  burgers:menuItem[] = []
  pizzas:menuItem[] = []
  drinks:menuItem[] = []
  constructor(public foodService:FoodService){
    this.burgers = foodService.getItems().burger
    this.pizzas = foodService.getItems().pizza
    this.drinks = foodService.getItems().drinks
  }
}
