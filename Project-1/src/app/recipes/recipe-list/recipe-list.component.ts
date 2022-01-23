import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://image.shutterstock.com/image-vector/caprese-salad-recipe-step-by-260nw-1201271428.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
