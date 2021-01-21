import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropriedadesRuraisComponent } from './propriedades-rurais.component';

describe('PropriedadesRuraisComponent', () => {
  let component: PropriedadesRuraisComponent;
  let fixture: ComponentFixture<PropriedadesRuraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadesRuraisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropriedadesRuraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
