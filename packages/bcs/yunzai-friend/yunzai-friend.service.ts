import {Injectable} from "@angular/core";
import {_HttpClient} from "@yelon/theme";
import {map, Observable} from "rxjs";
import {YunzaiResponse} from "@yelon/util";
import {YunzaiFriendGroup} from "./yunzai-friend.types";

@Injectable({
  providedIn: "root"
})
export class YunzaiFriendService {
  constructor(private http: _HttpClient) {
  }

  groups(): Observable<YunzaiFriendGroup[]> {
    return this.http.post("/contact/appcontact/findGroup", {}).pipe(
      map((response: YunzaiResponse<YunzaiFriendGroup[]>) => {
        return response.data
      })
    )
  }

}
