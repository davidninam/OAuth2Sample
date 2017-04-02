import {Component} from "@angular/core";
import {HttpService} from "../shared/services/http.service";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent {

    data: any[] = [];

    constructor(
        private http: HttpService
    ){}

    getData(): void{
        this.http.get('/api/data')
            .subscribe(data => this.data = this.data.concat(data));
    }
}
