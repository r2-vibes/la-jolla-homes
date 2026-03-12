const listings = [
  {
    address: "5777 Desert View Dr, La Jolla, CA 92037",
    price: 2499000,
    beds: 5, baths: 3.5, sqft: 2904,
    description: "Casual elegance meets sweeping panoramic views atop Mt. Soledad. Remodeled showpiece kitchen with white oak cabinetry, 13-foot island, Taj Mahal quartz. Canyon, mountain, and city views from nearly every angle. 0.67 acre lot.",
    highlights: ["Remodeled kitchen", "Panoramic views", "0.67 acre lot", "Mt. Soledad"],
    url: "https://www.redfin.com/CA/La-Jolla/5777-Desert-View-Dr-92037/unit-358-381-14-00/home/200664507",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/438/genIslnoResize.260004438_1.webp",
    view: 9, value: 9, remodel: 9
  },
  {
    address: "619 Bonair Way, La Jolla, CA 92037",
    price: 2875000,
    beds: 5, baths: 3.5, sqft: 3123,
    description: "Short stroll to Wind N' Sea beach. Euro-inspired beach house plus 1bd/1ba ocean view ADU/guest house built 2018. Travertine floors, French doors, Zen room with stone mosaics, custom stained glass windows.",
    highlights: ["Walk to Wind N' Sea", "ADU/guest house", "Euro-inspired", "Zen room"],
    url: "https://www.redfin.com/CA/La-Jolla/619-Bonair-Way-92037/home/4916169",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/086/genIslnoResize.260002086_4.webp",
    view: 7, value: 8, remodel: 7
  },
  {
    address: "7784 Lookout Dr, La Jolla, CA 92037",
    price: 4985000,
    beds: 5, baths: 5.5, sqft: 3597,
    description: "Ocean views from multiple decks with floor-to-ceiling glass in premier Country Club enclave. Elevator shaft, attached guest apartment with private entrance. Chef's kitchen with premium appliances. Five en-suite bedrooms. Walkable to beach, dining, golf, shops.",
    highlights: ["Ocean views", "Country Club", "Guest apartment", "Elevator shaft", "En-suite bedrooms"],
    url: "https://www.redfin.com/CA/La-Jolla/7784-Lookout-Dr-92037/home/4919897",
    img: "https://ssl.cdn-redfin.com/photo/48/bigphoto/848/250043848_0.jpg",
    view: 9, value: 6, remodel: 8
  },
  {
    address: "5435 Parkview Dr, La Jolla, CA 92037",
    price: 5500000,
    beds: 5, baths: 6.5, sqft: 4588,
    description: "Expansive 4,588 sq ft home on Parkview Dr with 6.5 bathrooms. Generous lot in a prime La Jolla location with excellent views.",
    highlights: ["4,588 sq ft", "6.5 baths", "Parkview location"],
    url: "https://www.redfin.com/CA/La-Jolla/5435-Parkview-Dr-92037/home/4939731",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/315/genIslnoResize.250041315_F.webp",
    view: 7, value: 6, remodel: 5
  },
  {
    address: "466 Westbourne St, La Jolla, CA 92037",
    price: 5350000,
    beds: 5, baths: 4, sqft: 3473,
    description: "On Westbourne St steps from La Jolla High School. 5 bedrooms, 4 bathrooms, 3,473 sq ft in the heart of La Jolla Village.",
    highlights: ["Near La Jolla High", "Village location", "4 baths"],
    url: "https://www.redfin.com/CA/La-Jolla/466-Westbourne-St-92037/home/182884750",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/691/genIslnoResize.250042691_1.webp",
    view: 5, value: 5, remodel: 5
  },
  {
    address: "5515 Thunderbird Ln, La Jolla, CA 92037",
    price: 2690000,
    beds: 5, baths: 3, sqft: 2847,
    description: "La Jolla home on Thunderbird Ln. 5 bedrooms, 3 bathrooms, 2,847 sq ft. Strong value entry point in a desirable La Jolla neighborhood.",
    highlights: ["Value entry point", "5 bedrooms"],
    url: "https://www.redfin.com/CA/La-Jolla/5515-Thunderbird-Ln-92037/home/4940917",
    img: "https://ssl.cdn-redfin.com/photo/45/islphoto/498/genIslnoResize.PW25247498_6.webp",
    view: 6, value: 7, remodel: 5
  },
  {
    address: "6411 Dowling Dr, La Jolla, CA 92037",
    price: 4450000,
    beds: 5, baths: 4, sqft: 3068,
    description: "La Jolla home on Dowling Dr near Muirlands. 5 bedrooms, 4 bathrooms, 3,068 sq ft in a quiet residential setting.",
    highlights: ["Near Muirlands", "4 baths", "Quiet street"],
    url: "https://www.redfin.com/CA/La-Jolla/6411-Dowling-Dr-92037/home/4919610",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/924/genIslnoResize.250041924_12.webp",
    view: 7, value: 6, remodel: 5
  },
  {
    address: "242 Playa Del Norte St, La Jolla, CA 92037",
    price: 5075000,
    beds: 5, baths: 5.5, sqft: 3100,
    description: "La Jolla home on Playa Del Norte. 5 bedrooms, 5.5 bathrooms, 3,100 sq ft. Excellent location in the La Jolla Elementary school zone.",
    highlights: ["5.5 baths", "La Jolla Elementary zone"],
    url: "https://www.redfin.com/CA/La-Jolla/242-Playa-del-Norte-92037/home/185186843",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/232/genIslnoResize.250032232_8.webp",
    view: 7, value: 6, remodel: 5
  }
];

function formatPrice(p) {
  if (p >= 1000000) return '$' + (p / 1000000).toFixed(p % 1000000 === 0 ? 0 : 2) + 'M';
  return '$' + p.toLocaleString();
}

function totalScore(l) { return l.view + l.value + l.remodel; }

function pricePerSqft(l) { return l.sqft > 0 ? Math.round(l.price / l.sqft) : 0; }

function renderListings(sorted) {
  const container = document.getElementById('listings');
  container.innerHTML = sorted.map((l, i) => `
    <a class="card" href="${l.url}" target="_blank" rel="noopener">
      ${l.img ? `<div class="card-img"><img src="${l.img}" alt="${l.address}" loading="lazy"></div>` : ''}
      <div class="card-header">
        <div class="card-rank">${i + 1}</div>
        <div class="card-price">${formatPrice(l.price)}</div>
        <div class="card-address">${l.address}</div>
      </div>
      <div class="card-body">
        <div class="card-stats">
          <div class="stat"><strong>${l.beds}</strong> bed</div>
          <div class="stat"><strong>${l.baths}</strong> bath</div>
          <div class="stat"><strong>${l.sqft.toLocaleString()}</strong> sqft</div>
          <div class="stat"><strong>$${pricePerSqft(l)}</strong>/sqft</div>
        </div>
        <div class="card-desc">${l.description}</div>
        <div class="card-highlights">
          ${l.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
        <div class="card-scores">
          <span class="score-badge score-view">👁 View ${l.view}/10</span>
          <span class="score-badge score-value">💰 Value ${l.value}/10</span>
          <span class="score-badge score-remodel">🔨 Remodel ${l.remodel}/10</span>
        </div>
        <span class="view-link">View on Redfin →</span>
      </div>
    </a>
  `).join('');
}

function sortListings(method) {
  let sorted = [...listings];
  switch (method) {
    case 'score': sorted.sort((a, b) => totalScore(b) - totalScore(a)); break;
    case 'price-asc': sorted.sort((a, b) => a.price - b.price); break;
    case 'price-desc': sorted.sort((a, b) => b.price - a.price); break;
    case 'view': sorted.sort((a, b) => b.view - a.view || totalScore(b) - totalScore(a)); break;
    case 'value': sorted.sort((a, b) => b.value - a.value || totalScore(b) - totalScore(a)); break;
  }
  renderListings(sorted);
}

document.querySelectorAll('.sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sortListings(btn.dataset.sort);
  });
});

sortListings('score');
