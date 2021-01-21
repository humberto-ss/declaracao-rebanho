import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropriedadePage } from './propriedade.page';

describe('PropriedadePage', () => {
  let component: PropriedadePage;
  let fixture: ComponentFixture<PropriedadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropriedadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
