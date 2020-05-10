import { Component } from '@angular/core';
import { EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    
})
export class AppComponent {
    public eventData: EventSettingsModel = {
        dataSource: [{
            Id: 1,
            Subject: 'Board Meeting',
            StartTime: new Date(2020, 4, 4, 9, 0),
            EndTime: new Date(2020, 4, 4, 11, 0)
        },
            {
                Id: 2,
                Subject: 'Training session on JSP',
                StartTime: new Date(2020, 4, 6, 15, 0),
                EndTime: new Date(2020, 4, 6, 17, 0)
            },
            {
                Id: 3,
                Subject: 'Sprint Planning with Team members',
                StartTime: new Date(2020, 4, 8, 9, 30),
                EndTime: new Date(2020, 4, 8, 11, 0)
            }]
    }
}