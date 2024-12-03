import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { YearModel } from './models/uselections-data/year-model';
import { StateService } from './services/state.service';
import { USElectionsDataService } from './services/uselections-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public uSElectionsDataYearModel: YearModel[] = [];

  constructor(private uSElectionsDataService: USElectionsDataService, private stateService: StateService) { }

  ngOnInit() {
    this.uSElectionsDataService.getYearModelList().pipe(takeUntil(this.destroy$)).subscribe(data => this.uSElectionsDataYearModel = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public navDrawerItemClick(item: YearModel) {
    this.stateService.currentlyChosenYear.next(item.year);
  }
}
