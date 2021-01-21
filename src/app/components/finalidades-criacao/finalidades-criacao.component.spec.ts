import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalidadesCriacaoComponent } from './finalidades-criacao.component';

describe('FinalidadesCriacaoComponent', () => {
  let component: FinalidadesCriacaoComponent;
  let fixture: ComponentFixture<FinalidadesCriacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalidadesCriacaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalidadesCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
