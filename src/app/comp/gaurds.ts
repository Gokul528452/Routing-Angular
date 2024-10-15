import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, provideRoutes, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable,of } from "rxjs";

@Injectable({
     providedIn: 'root'
})

export class gaurds implements CanActivate {


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        return true
    }

}

@Injectable({
    providedIn:"root"
})

export class Testcanload implements CanLoad{
    canLoad(route: Route):Observable<any> {
        if(route.path == "noloadtest"){
            return of (false);
        }else{
            return of (true)
        }
    }
}