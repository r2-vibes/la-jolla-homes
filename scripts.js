const listings = [
  {
    address: "5777 Desert View Dr, La Jolla, CA 92037",
    price: 2499000,
    beds: 5, baths: 3.5, sqft: 2904,
    description: "Casual elegance meets sweeping panoramic views atop Mt. Soledad. Remodeled showpiece kitchen with white oak cabinetry, 13-foot island, Taj Mahal quartz. Canyon, mountain, and city views from nearly every angle. 0.67 acre lot.",
    highlights: ["Remodeled kitchen", "Panoramic views", "0.67 acre lot", "Mt. Soledad"],
    url: "https://www.redfin.com/CA/San-Diego/5777-Desert-View-Dr-92037/home/5398818",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/438/genIslnoResize.260004438_1.webp",
    view: 9, value: 9, remodel: 9
  },

  {
    address: "619 Bonair Way, La Jolla, CA 92037",
    price: 2875000,
    beds: 5, baths: 3.5, sqft: 3123,
    description: "Short stroll to Wind N' Sea beach. Euro-inspired beach house plus 1bd/1ba ocean view ADU/guest house built 2018. Travertine floors, French doors, Zen room with stone mosaics, custom stained glass windows.",
    highlights: ["Walk to Wind N' Sea", "ADU/guest house", "Euro-inspired", "Zen room"],
    url: "https://www.redfin.com/CA/San-Diego/619-Bonair-Way-92037/home/5383942",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/537/genIslnoResize.260001537_1.webp",
    view: 7, value: 8, remodel: 7
  },
  {
    address: "3129 Bremerton Pl, La Jolla, CA 92037",
    price: 3495000,
    beds: 6, baths: 3, sqft: 3662,
    description: "Mid-century Leonard Drogin residence on cul-de-sac in La Jolla Heights. Largest usable lot at 0.76 acres. Architectural pedigree, multiple fireplaces, skylights, built-in library, wine storage, 5+ car garage with workshop.",
    highlights: ["Architectural pedigree", "0.76 acre lot", "Wine storage", "5+ car garage"],
    url: "https://www.redfin.com/CA/San-Diego/3129-Bremerton-Pl-92037/home/5392655",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/307/genIslnoResize.260004307_1.webp",
    view: 6, value: 8, remodel: 4
  },

  {
    address: "466 Westbourne St, La Jolla, CA 92037",
    price: 2690000,
    beds: 5, baths: 3, sqft: 2847,
    description: "Classic La Jolla home on Westbourne St. 5 bedrooms, 3 bathrooms with 2,847 sq ft of living space. Strong value entry point in La Jolla.",
    highlights: ["La Jolla location", "Value entry point"],
    url: "https://www.redfin.com/CA/San-Diego/466-Westbourne-St-92037/home/5385102",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/691/genIslnoResize.250042691_1.webp",
    view: 5, value: 7, remodel: 5
  },
  {
    address: "5515 Thunderbird, La Jolla, CA 92037",
    price: 4450000,
    beds: 5, baths: 4, sqft: 3068,
    description: "La Jolla home on Thunderbird. 5 bedrooms, 4 bathrooms, 3,068 sq ft in a desirable La Jolla neighborhood.",
    highlights: ["4 bathrooms", "Desirable location"],
    url: "https://www.redfin.com/CA/San-Diego/5515-Thunderbird-92037/home/5399832",
    img: "https://ssl.cdn-redfin.com/photo/45/islphoto/498/genIslnoResize.PW25247498_6.webp",
    view: 6, value: 6, remodel: 5
  },
  {
    address: "6617 Muirlands Dr, La Jolla, CA 92037",
    price: 5500000,
    beds: 5, baths: 6.5, sqft: 4588,
    description: "Prestigious Muirlands location. 5 bedrooms, 6.5 bathrooms, 4,588 sq ft. One of La Jolla's most coveted neighborhoods.",
    highlights: ["Muirlands", "6.5 baths", "4,588 sq ft"],
    url: "https://www.redfin.com/CA/San-Diego/6617-Muirlands-Dr-92037/home/5404860",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/798/genIslnoResize.250043798_1.webp",
    view: 8, value: 6, remodel: 5
  },
  {
    address: "541 Gravilla St, La Jolla, CA 92037",
    price: 5295000,
    beds: 5, baths: 6, sqft: 5182,
    description: "Substantial La Jolla home on Gravilla St. 5 bedrooms, 6 bathrooms, 5,182 sq ft. Largest home in this price range.",
    highlights: ["5,182 sq ft", "6 baths", "Largest in range"],
    url: "https://www.redfin.com/CA/San-Diego/541-Gravilla-St-92037/home/5383810",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/015/genIslnoResize.2600015_1.webp",
    view: 7, value: 6, remodel: 5
  },
  {
    address: "5435 Parkview Dr, La Jolla, CA 92037",
    price: 5350000,
    beds: 5, baths: 4, sqft: 3473,
    description: "La Jolla home on Parkview Dr. 5 bedrooms, 4 bathrooms, 3,473 sq ft with views.",
    highlights: ["Parkview location", "4 baths"],
    url: "https://www.redfin.com/CA/San-Diego/5435-Parkview-Dr-92037/home/5399452",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/315/genIslnoResize.250041315_F.webp",
    view: 7, value: 6, remodel: 5
  },

  {
    address: "6411 Dowling Dr, La Jolla, CA 92037",
    price: 5075000,
    beds: 5, baths: 5.5, sqft: 3100,
    description: "La Jolla home on Dowling Dr. 5 bedrooms, 5.5 bathrooms, 3,100 sq ft.",
    highlights: ["5.5 baths", "Dowling Dr"],
    url: "https://www.redfin.com/CA/San-Diego/6411-Dowling-Dr-92037/home/5404132",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/924/genIslnoResize.250041924_12.webp",
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
