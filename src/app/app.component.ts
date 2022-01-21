import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  list = { 
    "users": [
      {'name': 'coco1', 'surname': 'Hello' },
      {'name': 'coco2', 'surname': 'Hello2' },
      {'name': 'coco3', 'surname': 'Hello3' }
    ],
    "article": [
      {'title': 'Title 1', 'surname': 'Hello' },
      {'title': 'Title 1', 'surname': 'Hello2' },
      {'title': 'Title 1', 'surname': 'Hello3' }
    ]
  }
}
