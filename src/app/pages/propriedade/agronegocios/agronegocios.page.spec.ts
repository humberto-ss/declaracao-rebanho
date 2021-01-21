import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgronegociosPage } from './agronegocios.page';

describe('AgronegociosPage', () => {
  let component: AgronegociosPage;
  let fixture: ComponentFixture<AgronegociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgronegociosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgronegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
