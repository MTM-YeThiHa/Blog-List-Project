import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-download-svg',
  templateUrl: './download-svg.component.html',
  styleUrls: ['./download-svg.component.scss']
})
export class DownloadSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      name: "Test-1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'content here, content here' "
    },
    {
      name: "Test-2",
      age: 17,
      average: 9.2,
      approved: true,
      description: "using 'content here, content here' "
    },
    {
      name: "Test-5",
      age: 20,
      average: 11,
      approved: true,
      description: "using 'content here, content here' "
    },
  ];

  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Report Data',
      useBom: true,
      noDownload: true,
      headers: ["Name", "Age", "Average", "Approved", "Description"]
    };
    new ngxCsv(this.data, "Report", options);
  }

  arrayOfObjects = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
  ];
  arrayOfArrays = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ];

}
