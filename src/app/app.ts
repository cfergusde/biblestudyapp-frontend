import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestService } from './services/test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'Bible Study App';
  backendResponse = '';
  loading = true;
  error = '';

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.testBackend().subscribe({
      next: (response) => {
        this.backendResponse = response;
        this.loading = false;
        console.log('Backend response:', response);
      },
      error: (error) => {
        this.error = 'Failed to connect to backend';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }
}