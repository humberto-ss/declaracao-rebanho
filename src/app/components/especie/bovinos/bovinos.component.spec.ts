import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BovinosComponent } from './bovinos.component';

describe('BovinosComponent', () => {
  let component: BovinosComponent;
  let fixture: ComponentFixture<BovinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovinosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BovinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
