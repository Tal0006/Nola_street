import { Player } from './../../types/player.type';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  players: Player[] = [
    { id: 1, name: 'גלעד תנעמי', score: 5 },
    { id: 2, name: 'ויקטור פרץ', score: 5 },
    { id: 3, name: 'ערן אוחיון', score: 5 },
    { id: 4, name: 'אברהם אנקונינה', score: 5 },
    { id: 5, name: 'דותן אלפסי', score: 4 },
    { id: 6, name: 'מוטי ברהום', score: 4 },
    { id: 7, name: 'אמנון מלסה', score: 4 },
    { id: 8, name: 'קובי גבאי', score: 4 },
    { id: 9, name: 'טל אוחיון', score: 3 },
    { id: 10, name: 'יורם אלי', score: 3 },
    { id: 11, name: 'בן פלס', score: 3 },
    { id: 12, name: 'עידן סופר', score: 3 },
    { id: 13, name: 'דוד פלס', score: 2 },
    { id: 14, name: 'שלום אלי', score: 2 },
    { id: 15, name: 'איציק אלקיים', score: 2 },
    { id: 16, name: 'אבי חנונה', score: 2 },
    { id: 17, name: 'גרשון זכרוב', score: 1 },
    { id: 18, name: 'שילו עבדיאן', score: 1 },
    { id: 19, name: 'מאור פלולי', score: 1 },
    { id: 20, name: 'תמיר גבאי', score: 1 },
  ];
}
