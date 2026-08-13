const listings = [
  {
    "address": "521 Arenas St, La Jolla, CA 92037",
    "price": 3295000,
    "beds": 6,
    "baths": 4.0,
    "sqft": 2206,
    "description": "Variance granted for Alternate Property Class! Exceptional coastal investment opportunity just blocks away from iconic Windansea Beach! This versatile property features two spacious 3BR/2BA units, cur...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/521-Arenas-St-92037/home/4914411",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "1703 Castellana Rd, La Jolla, CA 92037",
    "price": 3599000,
    "beds": 5,
    "baths": 3.0,
    "sqft": 2320,
    "description": "Perched above La Jolla\u2019s iconic coastline, 1703 Castellana Road presents a rare opportunity to own a panoramic view property overlooking the Pacific Ocean, Torrey Pines Golf Course, Blacks Beach...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/1703-Castellana-Rd-92037/home/4911408",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "1570 Virginia Way, La Jolla, CA 92037",
    "price": 5750000,
    "beds": 5,
    "baths": 3.5,
    "sqft": 3500,
    "description": "An exceptional opportunity in the heart of La Jolla, this historically designated American Lodge, built by the Helms family, has been approved for the Mills Act \u2014an important tax benefit for buy...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/1570-Virginia-Way-92037/home/95961539",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
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
