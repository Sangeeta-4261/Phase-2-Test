import { ComponentFixture, TestBed } from '@angular/core/testing';

import { javascriptComponent } from './javascript.component';

describe('JavascriptComponent', () => {
  let component: javascriptComponent;
  let fixture: ComponentFixture<javascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ javascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(javascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
