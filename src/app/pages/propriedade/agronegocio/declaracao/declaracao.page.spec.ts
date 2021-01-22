import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeclaracaoPage } from './declaracao.page';

describe('DeclaracaoPage', () => {
  let component: DeclaracaoPage;
  let fixture: ComponentFixture<DeclaracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeclaracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
