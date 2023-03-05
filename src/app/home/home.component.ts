import { Component } from '@angular/core';
import * as jsonData from '../../assets/cards.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeTab = 'პროტოკოლები';
  tabs: Record<string, boolean> = {
    პროტოკოლები: true,
    აპლიკაციები: false,
  };

  data: any = jsonData;
  cards!: any[];
  filter = '';

  ngOnInit() {
    this.cards = this.data['პროტოკოლები'];
  }

  display(event: any) {
    this.activeTab = event.currentTarget.value;
    this.cards = this.data[this.activeTab];
    this.filter = '';
    for (let key in this.tabs) {
      if (this.activeTab == key) {
        this.tabs[key] = true;
      } else {
        this.tabs[key] = false;
      }
    }
  }

  postman() {
    alert('Postman works!');
  }
  
  filterCards(event: any) {
    let filter = event.currentTarget.value as string;
    this.cards = this.data[this.activeTab].filter((card: any) =>
      card.name.includes(filter)
    );
  }
}
