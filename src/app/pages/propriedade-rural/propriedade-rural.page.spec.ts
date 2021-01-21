import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropriedadeRuralPage } from './propriedade-rural.page';

describe('PropriedadeRuralPage', () => {
  let component: PropriedadeRuralPage;
  let fixture: ComponentFixture<PropriedadeRuralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadeRuralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropriedadeRuralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
