import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ApiDataComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}