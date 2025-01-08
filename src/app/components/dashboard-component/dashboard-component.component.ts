import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent {

  dataSource : TableDataSource[] = [];

   mockCompanies = [
    {
      "name": "Capgemini",
      "emails": [
        "shaikmuzammilbasha03@gmail.com",
        "shaikmuzammilbasha@gmail.com"
      ],
      "location": "Bangalore",
      "ph-numbers": [
        "9676135628"
      ],
      "comments": "Good",
      "communication-periodicity": 1,
      "id": "3367"
    },
    {
      "id": "ef0c",
      "name": "Shaik Muzamil Basha",
      "emails": [
        "shaikmuzammilbasha03@gmail.com"
      ],
      "location": "Bangalore",
      "ph-numbers": [
        "9676135628"
      ],
      "comments": "Good",
      "communication-periodicity": 1
    }
  ]

  mockUserCompanies = [
    {
      "id": "1d82",
      "name": "Capgemini",
      "allcommunications": [
        {
          "communicationType": "linkedInPost",
          "date": "01-01-2025",
          "notes": "some notes"
        },
        {
          "communicationType": "Visit",
          "date": "01-01-2024",
          "notes": "some notes"
        },
        {
          "communicationType": "Other",
          "date": "01-02-2024",
          "notes": "some notes"
        },
        {
          "communicationType": "Other",
          "date": "01-03-2024",
          "notes": "some notes"
        },

      ]
    }
  ]

  displayedColumns:string[] = [];

  ngOnInit(){
    this.displayedColumns = ['Select',"CompanyName","LastFiveComminications","NextCommunications"]
    this.getdataSource(this.mockCompanies)
  }

  getdataSource(companyData:any){
    companyData.forEach((element:any) => {
      let companyRow : TableDataSource;
      companyRow = {
        icon:"checkbox",
        companyName:element?.name,
        lastFiveComminications:this.getLastFiveCommincationsAndNextCommincation(this.mockUserCompanies,element?.name,"last"),
        nextCommunications:this.getLastFiveCommincationsAndNextCommincation(this.mockUserCompanies,element?.name,"next")
      }
      this.dataSource.push(companyRow)
    });
    
  }

  getLastFiveCommincationsAndNextCommincation(userCompanies:any,companyName:string,type:string):string[]{
    let usercompany = userCompanies.find((x:any)=>x.name === companyName);
    let lastFiveComminications = usercompany?.allcommunications?.filter((x:any)=>new Date(x.date) < new Date());
    let nextComminications = usercompany?.allcommunications?.filter((x:any)=>new Date(x.date) >= new Date());
    if(type === 'last' && lastFiveComminications && lastFiveComminications.length !== 0){
      return lastFiveComminications.map(
        (comm:any) => `${comm.communicationType} - ${comm.date}`
      );;
    }
    else if(type === 'next' && nextComminications && nextComminications.length !== 0){
      return nextComminications.map(
        (comm:any) => `${comm.communicationType} - ${comm.date}`
      );;
    }
    else {
      return [];
    }
  
  }



}

interface TableDataSource {
  icon:string;
  companyName:string;
  lastFiveComminications:string[];
  nextCommunications:string[];
}
