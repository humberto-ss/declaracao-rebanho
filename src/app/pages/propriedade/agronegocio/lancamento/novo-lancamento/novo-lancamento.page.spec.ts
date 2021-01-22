import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoLancamentoPage } from './novo-lancamento.page';

describe('NovoLancamentoPage', () => {
  let component: NovoLancamentoPage;
  let fixture: ComponentFixture<NovoLancamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLancamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoLancamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
