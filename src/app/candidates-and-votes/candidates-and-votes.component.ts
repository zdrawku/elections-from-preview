import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { Subject, take, takeUntil } from 'rxjs';
import { VoteResult } from '../models/uselections-data/vote-result';
import { StateVoteResult } from '../models/uselections-data/state-vote-result';
import { Candidate } from '../models/uselections-data/candidate';
import { CandidateVoteResult } from '../models/uselections-data/candidate-vote-result';
import { VoteCountResult } from '../models/uselections-data/vote-count-result';
import { StateService } from '../services/state.service';
import { USElectionsDataService } from '../services/uselections-data.service';

@Component({
  selector: 'app-candidates-and-votes',
  imports: [IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxCategoryChartModule, IgxIconComponent, IgxPieChartModule],
  templateUrl: './candidates-and-votes.component.html',
  styleUrls: ['./candidates-and-votes.component.scss']
})
export class CandidatesAndVotesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public democratCandidate?: Candidate;
  public electoralVotesDemocrat?: VoteCountResult;
  public popularVotesDemocrat?: VoteCountResult;
  public republicanCandidate?: Candidate;
  public electoralVotesRepublican?: VoteCountResult;
  public popularVotesRepublican?: VoteCountResult;
  public uSElectionsDataVoteResult: VoteResult[] = [];
  public uSElectionsDataVoteResult1: VoteResult[] = [];
  public uSElectionsDataCandidateVoteResult: CandidateVoteResult[] = [];
  public uSElectionsDataStateVoteResult: StateVoteResult[] = [];

  constructor(private uSElectionsDataService: USElectionsDataService, protected stateService: StateService) { }

  ngOnInit() {
    this.uSElectionsDataService.democratCandidate.pipe(takeUntil(this.destroy$)).subscribe(x => this.democratCandidate = x);
    this.uSElectionsDataService.electoralVotesDemocrat.pipe(takeUntil(this.destroy$)).subscribe(x => this.electoralVotesDemocrat = x);
    this.uSElectionsDataService.popularVotesDemocrat.pipe(takeUntil(this.destroy$)).subscribe(x => this.popularVotesDemocrat = x);
    this.uSElectionsDataService.republicanCandidate.pipe(takeUntil(this.destroy$)).subscribe(x => this.republicanCandidate = x);
    this.uSElectionsDataService.electoralVotesRepublican.pipe(takeUntil(this.destroy$)).subscribe(x => this.electoralVotesRepublican = x);
    this.uSElectionsDataService.popularVotesRepublican.pipe(takeUntil(this.destroy$)).subscribe(x => this.popularVotesRepublican = x);
    this.stateService.currentlyChosenYear.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.uSElectionsDataService.getVoteResultList(this.stateService.currentlyChosenYear.value as any).pipe(take(1)).subscribe(data => this.uSElectionsDataVoteResult = data);
    });
    this.stateService.currentlyChosenYear.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.uSElectionsDataService.getVoteResultList1(this.stateService.currentlyChosenYear.value as any).pipe(take(1)).subscribe(data => this.uSElectionsDataVoteResult1 = data);
    });
    this.stateService.currentlyChosenYear.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.uSElectionsDataService.getCandidateVoteResultList(this.stateService.currentlyChosenYear.value as any).pipe(take(1)).subscribe(data => this.uSElectionsDataCandidateVoteResult = data);
    });
    this.stateService.currentlyChosenYear.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.uSElectionsDataService.getStateVoteResultList(this.stateService.currentlyChosenYear.value as any).pipe(take(1)).subscribe(data => this.uSElectionsDataStateVoteResult = data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
