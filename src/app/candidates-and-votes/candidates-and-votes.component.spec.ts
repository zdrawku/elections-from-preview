import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconComponent, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { IgxPieChartModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { CandidatesAndVotesComponent } from './candidates-and-votes.component';

describe('CandidatesAndVotesComponent', () => {
  let component: CandidatesAndVotesComponent;
  let fixture: ComponentFixture<CandidatesAndVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CandidatesAndVotesComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxIconComponent, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxPieChartModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesAndVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
