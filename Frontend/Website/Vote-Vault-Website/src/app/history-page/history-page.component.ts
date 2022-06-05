import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type = 'bar';
  data = {
    labels: ["Party1", "Party2", "Party3", "Party4", "Party5", "Party6", "Party7"],
    datasets: [
      {
        backgroundColor: ['green','blue','red','yellow','purple','grey','black'],
        data: [70, 59, 50, 81, 56, 55, 50]
      }
    ]
  };
  options = {
    scales:{
      yAxis: {
        min: 40,
        max: 100
      }
    },
    legend:{
      display: false
    },
    title:{
      display: true,
      text:"Election Results"
    },
    responsive: true,
    maintainAspectRatio: false
  };
}
