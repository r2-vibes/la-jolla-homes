const listings = [
  {
    "address": "1865 El Camino Del Teatro, La Jolla, CA 92037",
    "price": 3600000,
    "beds": 6,
    "baths": 4.0,
    "sqft": 3133,
    "description": "1865 El Camino Del Teatro, La Jolla, CA 92037",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/1865-El-Camino-del-Teatro-92037/home/4923071",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "5713 Desert View Dr, La Jolla, CA 92037",
    "price": 2795000,
    "beds": 5,
    "baths": 4.0,
    "sqft": 3350,
    "description": "5713 Desert View Dr, La Jolla, CA 92037",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/5713-Desert-View-Dr-92037/home/4940712",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "466 Westbourne St, La Jolla, CA 92037",
    "price": 5325000,
    "beds": 5,
    "baths": 4.0,
    "sqft": 3473,
    "description": "Only one 5BR New Construction Home Left - 3 sold - ideal Summer Lock n Go Luxury Home in La Jolla! Experience the pinnacle of coastal luxury in this brand-new 5BR, 3,473 sq ft detached 'Lock-n-Go' Bea...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/466-Westbourne-St-92037/home/182884750",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
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
