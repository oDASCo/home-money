import {Injectable} from "@angular/core";
import {BaseApi} from "../../../shared/core/base-api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DASCEvent} from "../models/event.model";


@Injectable()
export class EventsService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    addEvent(event: DASCEvent): Observable<DASCEvent> {
        return this.post('events', event);
    }

}
