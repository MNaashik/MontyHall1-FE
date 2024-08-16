import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { AppServiceService } from './app-service.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

declare const google: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgIf,
    HttpClientModule,
    NgForOf,
    NgFor,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppServiceService],
})
export class AppComponent implements OnInit {
  title = 'MontyHall1';

  numberOfGames = 100;
  switchDoor = true;
  chosenDoor = 1;
  result: any;

  doors = [1, 2, 3];

  chartOptions: any;

  constructor(private AppServiceService: AppServiceService) {}

  ngOnInit() {}

  startSimulation(): void {
    this.AppServiceService.simulate(
      this.numberOfGames,
      this.switchDoor,
      this.chosenDoor
    ).subscribe(
      (data) => (this.result = data),
      (error) => console.error('Error:', error)
    );
  }
}
