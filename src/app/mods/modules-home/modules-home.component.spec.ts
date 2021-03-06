import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesHomeComponent } from './modules-home.component';

describe('ModulesHomeComponent', () => {
  let component: ModulesHomeComponent;
  let fixture: ComponentFixture<ModulesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
