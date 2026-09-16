import { TestBed } from '@angular/core/testing';
import { LangService } from './lang.service';

describe('LangService', () => {
  let service: LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to Polish', () => {
    expect(service.lang()).toBe('pl');
  });

  it('should switch language and update text()', () => {
    const copy = { pl: 'Cześć', en: 'Hello' };
    expect(service.text(copy)).toBe('Cześć');
    service.set('en');
    expect(service.lang()).toBe('en');
    expect(service.text(copy)).toBe('Hello');
  });

  it('should pass plain strings through text()', () => {
    expect(service.text('plain')).toBe('plain');
    expect(service.text(null)).toBe('');
    expect(service.text(undefined)).toBe('');
  });
});
