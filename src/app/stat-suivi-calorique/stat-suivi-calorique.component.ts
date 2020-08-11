import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stat-suivi-calorique',
  templateUrl: './stat-suivi-calorique.component.html',
  styleUrls: ['./stat-suivi-calorique.component.css']
})
export class StatSuiviCaloriqueComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {display: false},
    animation: {easing: 'easeInCirc', duration: 2000}
  };
  public barChartLabels: Label[] = ['Proteine', 'Glucides', 'Lipides'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80], backgroundColor: ['rgba(127, 0, 0, 0.7)', 'rgba(100, 100, 200, 0.7)', 'rgba(255, 255, 0, 0.7)'] }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
