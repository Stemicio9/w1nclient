import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "~/app/model/user";
import { HttpClient} from "@angular/common/http";


declare var java: any;
declare var android: any;

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    baseUrl: string = 'http://87.27.62.247/users/';
    token:any;


    constructor(private http: HttpClient) { }



    getToken(){
        return this.token;
    }

    setToken(tok){
        this.token = tok;
    }

    login(loginPayload) {

       const dacodificare = 'YWRtaW46Y2lhbw==';

        const headers = {
            'Authorization': 'Basic ' + dacodificare,
            'Content-type': 'application/x-www-form-urlencoded'
        }
        console.log("eseguo la post");
        console.log(loginPayload);
        return this.http.post('http://87.27.62.247/' + 'oauth/token', loginPayload, {headers});
    }

    chisono() {
        return this.http.get('http://87.27.62.247/users/user/chisono?' + 'access_token=' + JSON.parse(this.token).access_token);
    }

    getUsers() : Observable<any>{
        return this.http.get<any>(this.baseUrl + 'user?access_token=' + JSON.parse(this.token).access_token);
    }

    getUserById(id: number) {
        return this.http.get(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(this.token).access_token);
    }

    createUser(user: User){
        return this.http.post(this.baseUrl + 'user?access_token=' + JSON.parse(this.token).access_token, user);
    }

 /*   updateUser(user: User): Observable<HttpEvent<void>> {
        return this.http.put<void>(this.baseUrl + 'user/' + user.id + '?access_token=' + JSON.parse(this.token);
    }  */

    deleteUser(id: number){
        return this.http.delete(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(this.token).access_token);
    }


 /*     encode(dacodificare:string) {
        var text = new java.lang.String(dacodificare);
        var data = text.getBytes("UTF-8");
        var base64 = android.util.Base64.encodeToString(data, android.util.Base64.DEFAULT);
        return base64;
    } */

/*     decode() {
        var text = vm.get("baseString");

        var data = android.util.Base64.decode(text, android.util.Base64.DEFAULT);
        var decoded = new java.lang.String(data, java.nio.charset.StandardCharsets.UTF_8);

        vm.set("decoded", decoded);
    } */

}
