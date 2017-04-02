import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";


@Component({
    selector: 'loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit{

    loading: boolean;

    constructor(private http: HttpService) {
        this.loading = false;
    }

    ngOnInit(){
        this.http.loading.subscribe(loading => {
            this.loading = loading;
        });
    }
}