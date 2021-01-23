import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgronegociosComponent } from './agronegocios.component';

describe('AgronegociosComponent', () => {
  let component: AgronegociosComponent;
  let fixture: ComponentFixture<AgronegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgronegociosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgronegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
