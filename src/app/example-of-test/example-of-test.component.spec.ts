import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ExampleOfTestComponent } from './example-of-test.component';

describe('ExampleOfTestComponent', () => {
  let comp: ExampleOfTestComponent;
  let fixture: ComponentFixture<ExampleOfTestComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOfTestComponent ],  // declare the test component

      // providers:    [ UserService ]  // NO! Don't provide the real service!
                                        // Provide a test-double instead
                                        // if a service was used ofc.
      // providers:    [ {provide: UserService, useValue: userServiceStub } ]
    })
    .compileComponents();
  }));
// synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOfTestComponent);
    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
});
