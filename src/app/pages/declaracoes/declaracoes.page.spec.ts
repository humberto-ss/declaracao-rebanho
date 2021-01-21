import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeclaracoesPage } from './declaracoes.page';

describe('DeclaracoesPage', () => {
  let component: DeclaracoesPage;
  let fixture: ComponentFixture<DeclaracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeclaracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
