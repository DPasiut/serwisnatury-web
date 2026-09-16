import { Component } from '@angular/core';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-about',
  imports: [TPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly heading = { pl: 'O nas', en: 'About us' };
  readonly body = {
    pl:
      '<p><strong>Profesjonalna wycinka i pielęgnacja zieleni – Poznaj nas!</strong></p>' +
      '<p>Działamy lokalnie na terenie powiatów: <strong>limanowskiego</strong>, <strong>nowosądeckiego</strong>, <strong>Krakowa i okolic</strong></p>' +
      '<p>Specjalizujemy się w zaawansowanych pracach arborystycznych oraz kompleksowym utrzymaniu ogrodów.</p>' +
      '<p><strong>Bezpieczeństwo i jakość to nasz priorytet.</strong> Każde zlecenie realizujemy w ścisłej zgodzie z przepisami BHP. Jest to szczególnie ważne przy wycince drzew w trudnych warunkach – w bezpośrednim sąsiedztwie zabudowań, linii energetycznych czy kabli światłowodowych. Podejmujemy się zadań tam, gdzie inni widzą zbyt duże ryzyko.</p>' +
      '<p><strong>Czystość „w stanie sprzed roboty”.</strong> Pracujemy według Twoich życzeń. Nie zostawiamy po sobie bałaganu. Na życzenie klienta kompleksowo porządkujemy teren:</p>' +
      '<ul>' +
      '<li><strong>Frezowanie pni</strong> – usuwamy pozostałości po ściętych drzewach równo z ziemią.</li>' +
      '<li><strong>Praca z rębakiem</strong> – gałęzie rębakujemy na miejscu, a powstałe zrębki możemy zutylizować lub zostawić do podsypania rabat.</li>' +
      '<li><strong>Wywóz drewna</strong> – zabieramy wycięte drewno, zostawiając działkę czystą i gotową do dalszego zagospodarowania.</li>' +
      '</ul>' +
      '<p><strong>Nowoczesny sprzęt – Szacunek dla Twojego spokoju.</strong> Jako nieliczni inwestujemy w profesjonalny sprzęt akumulatorowy. Dzięki temu eliminujemy zbędny hałas i spaliny. Brak uciążliwego ryku silników spalinowych to ogromna zaleta, którą docenisz Ty oraz Twoi sąsiedzi – szczególnie w gęstej zabudowie jednorodzinnej.</p>',
    en:
      '<p><strong>Professional tree removal and green space care – Get to know us!</strong></p>' +
      '<p>We operate locally across the counties of: <strong>Limanowa</strong>, <strong>Nowy Sącz</strong>, <strong>Kraków and the surrounding area</strong></p>' +
      '<p>We specialize in advanced arboriculture work and complete garden upkeep.</p>' +
      '<p><strong>Safety and quality are our priority.</strong> Every job is carried out in strict compliance with health and safety regulations. This matters especially when felling trees in difficult conditions — right next to buildings, power lines or fibre-optic cables. We take on jobs where others see too much risk.</p>' +
      '<p><strong>Cleanliness — "as it was before the work".</strong> We work to your wishes. We leave no mess behind. On request, we fully clean up the site:</p>' +
      '<ul>' +
      '<li><strong>Stump grinding</strong> – we remove what is left of felled trees, flush with the ground.</li>' +
      '<li><strong>Wood chipping</strong> – we shred branches on site, and the resulting chips can be disposed of or left to mulch flower beds.</li>' +
      '<li><strong>Wood removal</strong> – we haul away the felled wood, leaving the plot clean and ready for further use.</li>' +
      '</ul>' +
      '<p><strong>Modern equipment – Respect for your peace and quiet.</strong> As one of the few, we invest in professional battery-powered equipment. This eliminates unnecessary noise and exhaust fumes. No annoying roar of combustion engines — a huge advantage you and your neighbors will appreciate, especially in dense residential areas.</p>'
  };
  readonly closing = {
    pl:
      '<p><strong>Oferujemy Tuje Szmaragd z własnej szkółki – Gwarancja przyjęcia!</strong><br>' +
      'W naszej ofercie znajdziesz <strong>Tuje Szmaragd pochodzące z własnej, lokalnej szkółki</strong> – dostępne zarówno w doniczkach, jak i kopane prosto z gruntu. Nasze rośliny rosną w naturalnie ciężkiej ziemi, dzięki czemu wykształciły <strong>wyjątkowo rozbudowany i mocny system korzeniowy</strong>. Są zahartowane, silne i odporne na trudne warunki. Jesteśmy tak pewni ich jakości, że na nasze drzewka <strong>dajemy pełną gwarancję przyjęcia po przesadzeniu</strong>.</p>',
    en:
      '<p><strong>We offer Emerald Thuja from our own nursery – Guaranteed to take root!</strong><br>' +
      'Our offer includes <strong>Emerald Thuja grown in our own local nursery</strong> – available both potted and dug straight from the ground. Our plants grow in naturally heavy soil, which gives them an <strong>exceptionally developed and strong root system</strong>. They are hardened, strong and resistant to difficult conditions. We are so confident in their quality that we <strong>guarantee our trees will take root after replanting</strong>.</p>'
  };
}
