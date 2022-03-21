import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSourcesComponent } from './icon-sources.component';

describe('IconSourcesComponent', () => {
  let component: IconSourcesComponent;
  let fixture: ComponentFixture<IconSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
