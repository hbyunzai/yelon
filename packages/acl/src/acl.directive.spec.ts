import { Component, DebugElement, inject } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';

const CLS = 'acl__hide';
describe('acl: directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = dl.componentInstance;
    fixture.detectChanges();
  });

  it('should show when full', () => {
    context.srv.setFull(true);
    context.role = 'user';
    fixture.detectChanges();
    expect(dl.queryAll(By.css(`.${CLS}`)).length).toBe(0);
  });

  it('should hide when not full', () => {
    context.srv.setFull(false);
    context.role = 'user';
    fixture.detectChanges();
    expect(dl.queryAll(By.css(`.${CLS}`)).length).toBe(1);
  });

  it('should show when ability', () => {
    context.srv.setAbility([1, 2, 3]);
    context.ability = 2;
    fixture.detectChanges();
    expect(dl.queryAll(By.css(`.${CLS}`)).length).toBe(0);
  });

  it('should hide when not ability', () => {
    context.srv.setAbility([1, 2, 3]);
    context.ability = 4;
    fixture.detectChanges();
    expect(dl.queryAll(By.css(`.${CLS}`)).length).toBe(1);
  });
});

@Component({
  template: ` <button [acl]="role" [acl-ability]="ability"></button> `,
  imports: [ACLDirective]
})
class TestComponent {
  readonly srv = inject(ACLService);
  role = 'admin';
  ability = 1;
}
