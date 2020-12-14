import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Wine } from "./model";

@Injectable()
export class WineService {

    constructor(
        private http: HttpClient
    ) {}

    async getCountryList(): Promise<string[]> {
        // const url = 'http://localhost:3000' + '/countries';
        const url = '/countries';
        return await this.http.get<string[]>(url).toPromise();
    }

    async getWineList(country: string): Promise<Wine[]> {
        // const url = 'http://localhost:3000/country/' + country;
        const url = '/country' + '/' + country;
        return await this.http.get<Wine[]>(url).toPromise();
    }

    async getWineInfo(id: string): Promise<Wine> {
        const url = '/wine' + '/' + id;
        const respone =  await this.http.get<Wine[]>(url).toPromise();
        return respone[0];
    }
}