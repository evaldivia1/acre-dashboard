import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'acre-dashboard';
  year = signal<number>(2023);

  incrementYear(){
    console.log(this.year)
    this.year.update(value=>value+1);
  }
  decrementYear(){
    this.year.update(value=>value-1);
  }
}
