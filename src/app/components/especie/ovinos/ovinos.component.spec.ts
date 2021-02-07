import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvinosComponent } from './ovinos.component';

describe('OvinosComponent', () => {
  let component: OvinosComponent;
  let fixture: ComponentFixture<OvinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvinosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
