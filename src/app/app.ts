import { Component } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Services } from './sections/services/services';
import { Thuja } from './sections/thuja/thuja';
import { Area } from './sections/area/area';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Lightbox } from './shared/lightbox/lightbox';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Services, Thuja, Area, Contact, Footer, Lightbox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
