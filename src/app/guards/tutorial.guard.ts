import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class TutorialGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isTutorialComplete = await this.storage.get("tutorialComplete");
    if (!isTutorialComplete) {
      this.router.navigate(["/tutorial"]);
    }
    return isTutorialComplete;
  }
}
