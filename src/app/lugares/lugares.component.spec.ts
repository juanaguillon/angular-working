import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresComponent } from './lugares.component';

describe('LugaresComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[LugaresComponent]
    });
  })

  it('Should create the App', ()=>{
    let fixture = TestBed.createComponent(LugaresComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});
