/**
 * Single source of truth for site-wide contact details and brand info —
 * phone numbers, email, social links, map, brand name. Change a value here
 * and it updates everywhere it's used.
 */

export const SITE_NAME = 'serwisnatury';
export const SITE_TLD = '.pl';
export const SITE_DOMAIN = `${SITE_NAME}${SITE_TLD}`;

export const PHONE_DOMINIK = '+48 453 022 647';
export const PHONE_SZYMON = '+48 665 922 627';
export const EMAIL = 'cis.uslugi@gmail.com';

export const INSTAGRAM = 'https://instagram.com/';
export const FACEBOOK = 'https://facebook.com/';
/** No Facebook page yet — flip to true once one exists and the link is set. */
export const SHOW_FACEBOOK = false;

export const MAP_LINK = 'https://maps.app.goo.gl/VC9dYLZAV62jdvC38';
export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d279.5255481385446!2d20.557557718917085!3d49.62589646041277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2sus!4v1789054529174!5m2!1spl!2sus';

/** `tel:` href for a display phone number, e.g. '+48 453 022 647' -> 'tel:+48453022647'. */
export const tel = (display: string) => 'tel:' + display.replace(/\s/g, '');
