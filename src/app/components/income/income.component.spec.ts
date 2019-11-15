import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeComponent } from './income.component';
import { BsModalService } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeComponent ],
      providers: [BsModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
