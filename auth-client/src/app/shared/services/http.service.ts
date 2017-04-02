import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable, Subject} from "rxjs";

@Injectable()
export class HttpService{

    private headers: Headers = new Headers({
        'X-Requested-With': 'XMLHttpRequest'
    });
    private requestCount: number;
    private _loading: Subject<boolean>;

    public get loading(): Observable<boolean>{
        return this._loading.asObservable();
    }

    constructor(private http: Http) {
        this.requestCount = 0;
        this._loading = new Subject<boolean>();
        this._loading.next(false);
    }

    public get(url: string): Observable<any> {
        this.setLoading(true);
        return this.http.get(url, {headers: this.headers})
            .map(this.mapRequest)
            .finally(() => this.setLoading(false))
            .catch(error => HttpService.handleError(error, url));
    }

    public delete(url: string): Observable<any> {
        this.setLoading(true);
        return this.http.delete(url, {headers: this.headers})
            .map(this.mapRequest)
            .finally(() => this.setLoading(false))
            .catch(error => HttpService.handleError(error, url));
    }

    public post(url: string, data?: any): Observable<any> {
        this.setLoading(true);
        return this.http.post(url, data, {headers: this.headers})
            .map(this.mapRequest)
            .finally(() => this.setLoading(false))
            .catch(error => HttpService.handleError(error, url));
    }

    public put(url: string, data?: any): Observable<any> {
        this.setLoading(true);
        return this.http.put(url, data, {headers: this.headers})
            .map(this.mapRequest)
            .finally(() => this.setLoading(false))
            .catch(error => HttpService.handleError(error, url));
    }

    private setLoading(loading: boolean){
        let lastVal = this.requestCount;

        if(loading) this.requestCount++;
        else this.requestCount--;

        if(this.requestCount == 0) this._loading.next(false);
        if(this.requestCount == 1 && lastVal == 0) this._loading.next(true);
    }

    private mapRequest(res: Response): any{
        try {
            return res.json();
        }catch (e){
            return {};
        }
    }

    private static handleError(error: any, url: string): Observable<any> {
        console.error('An error occurred with request to ', url);
        return Observable.of();
    }
}