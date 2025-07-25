import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import { addSeconds } from 'date-fns';
import { CountdownConfig } from 'ngx-countdown';

import { createTestContext } from '@yelon/testing';

import { CountDownComponent } from './count-down.component';

describe('abc: count-down', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));
  });

  it('should be create an instance via [config]', fakeAsync(() => {
    spyOn(context, 'handleEvent');
    context.config = {
      leftTime: 2,
      notify: [1.5]
    };
    fixture.detectChanges();
    tick(2001);
    expect(context.handleEvent).toHaveBeenCalled();
  }));

  it('should be create an instance via [target]', fakeAsync(() => {
    spyOn(context, 'handleEvent');
    context.target = 1;
    fixture.detectChanges();
    tick(1001);
    expect(context.handleEvent).toHaveBeenCalled();
  }));

  it('should be create an instance when target is date', fakeAsync(() => {
    spyOn(context, 'handleEvent');
    context.target = addSeconds(new Date(), 1);
    fixture.detectChanges();
    tick(1001);
    expect(context.handleEvent).toHaveBeenCalled();
  }));
});

@Component({
  template: `
    @if (config) {
      <div>
        <count-down [config]="config" (event)="handleEvent()" style="font-size: 20px" />
      </div>
    }
    @if (target) {
      <div>
        <count-down [target]="target" (event)="handleEvent()" style="font-size: 20px" />
      </div>
    }
  `,
  imports: [CountDownComponent]
})
class TestComponent {
  config?: CountdownConfig;
  target?: number | Date;
  handleEvent(): void {}
}
