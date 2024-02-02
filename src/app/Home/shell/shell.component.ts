import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [MenuComponent,RouterModule ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  pageTitle: string = 'Welcome'
}
