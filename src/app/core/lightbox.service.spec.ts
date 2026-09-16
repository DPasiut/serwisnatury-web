import { TestBed } from '@angular/core/testing';
import { LightboxService } from './lightbox.service';

describe('LightboxService', () => {
  let service: LightboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightboxService);
  });

  it('should be closed by default', () => {
    expect(service.isOpen()).toBeFalse();
  });

  it('should open at the given index and clamp out-of-range values', () => {
    service.open(['a', 'b', 'c'], 1);
    expect(service.isOpen()).toBeTrue();
    expect(service.current()).toBe('b');
    expect(service.position()).toBe(2);
    expect(service.total()).toBe(3);

    service.open(['a', 'b', 'c'], 99);
    expect(service.current()).toBe('c');
  });

  it('should step forward and wrap around', () => {
    service.open(['a', 'b', 'c'], 2);
    service.step(1);
    expect(service.current()).toBe('a');
    service.step(-1);
    expect(service.current()).toBe('c');
  });

  it('should close and reset', () => {
    service.open(['a', 'b'], 1);
    service.close();
    expect(service.isOpen()).toBeFalse();
    expect(service.total()).toBe(0);
  });
});
