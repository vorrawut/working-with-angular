import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeComponent } from './outcome.component';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('OutcomeComponent', () => {
  let component: OutcomeComponent;
  let fixture: ComponentFixture<OutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
      declarations: [ OutcomeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
