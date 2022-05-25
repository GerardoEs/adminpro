import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npagefound',
  templateUrl: './npagefound.component.html',
  styleUrls: ['./npagefound.component.css' ]
})
export class NpagefoundComponent implements OnInit {
  year= new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
