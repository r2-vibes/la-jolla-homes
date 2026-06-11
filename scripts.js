const listings = [
  {
    "address": "7784 Lookout Dr, La Jolla, CA 92037",
    "price": 4395000,
    "beds": 5,
    "baths": 5.5,
    "sqft": 3597,
    "description": "MOTIVATED Sellers! A premium opportunity in La Jolla Shores, this light-filled residence captures sweeping ocean views from multiple levels, with view-forward living spaces that open to generous terra...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/7784-Lookout-Dr-92037/home/4919897",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "466 Westbourne St, La Jolla, CA 92037",
    "price": 5350000,
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
    "address": "2505 Hidden Valley Pl, La Jolla, CA 92037",
    "price": 4450000,
    "beds": 5,
    "baths": 4.0,
    "sqft": 3527,
    "description": "Experience the ultimate coastal lifestyle in this sprawling entertainer\u2019s oasis, perfectly situated on a prime corner lot just minutes from La Jolla Shores Beach, top-rated restaurants, and high...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/2505-Hidden-Valley-Pl-92037/home/4879564",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "5435 Parkview Dr, La Jolla, CA 92037",
    "price": 5350000,
    "beds": 5,
    "baths": 6.5,
    "sqft": 4588,
    "description": "5435 Parkview Dr, La Jolla, CA 92037",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/5435-Parkview-Dr-92037/home/4939731",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "242 Playa Del Norte St, La Jolla, CA 92037",
    "price": 5075000,
    "beds": 5,
    "baths": 5.5,
    "sqft": 3100,
    "description": "Steps from iconic Windansea Beach, in the highly sought after Beach Barber tract neighborhood, this brand-new custom-built masterpiece blends modern luxury with timeless coastal charm",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/242-Playa-del-Norte-92037/home/185186843",
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
