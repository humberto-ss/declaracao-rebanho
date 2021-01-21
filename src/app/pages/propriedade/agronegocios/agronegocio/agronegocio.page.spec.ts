import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgronegocioPage } from './agronegocio.page';

describe('AgronegocioPage', () => {
  let component: AgronegocioPage;
  let fixture: ComponentFixture<AgronegocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgronegocioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgronegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
