import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  type = 'bar';
  data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        backgroundColor: ['blue','red'],
        data: [59, 59]
      }
    ]
  };
  options = {
    legend:{
      display: false
    },
    title:"Gender Distribution",
    responsive: true,
    maintainAspectRatio: false
  };
}
