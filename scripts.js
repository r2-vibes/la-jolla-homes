const listings = [
  {
    "address": "7145 Fairway Rd, La Jolla, CA 92037",
    "price": 5498000,
    "beds": 5,
    "baths": 6.5,
    "sqft": 6567,
    "description": "A rare and extraordinary opportunity in the heart of La Jolla\u2019s coveted Country Club neighborhood",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/7145-Fairway-Rd-92037/home/4921003",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "1121 Via Carolina, La Jolla, CA 92037",
    "price": 4995000,
    "beds": 5,
    "baths": 4.0,
    "sqft": 3816,
    "description": "Updated in 2024\udb40\udce2\udb40\udc81\udb40\udca3\udb40\udce2\udb40\udc81\udb40\udca3\udb40\udccd\udb40\udc8f\udb40\udce2\udb40\udc80\udb40\udc8b\udb40\udce2\udb40\udc81\udb40\udca4\udb40\udcf3\udb40\udca0\udb40\udc81\udb40\udc81 and move-in ready: a new kitchen, all-new baths and new floors throughout, in a single-level home on a quiet Lower Muirlands cul-de-sac",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/1121-Via-Carolina-92037/home/4919668",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "429-33 Nautilus St, La Jolla, CA 92037",
    "price": 4999995,
    "beds": 7,
    "baths": 5.0,
    "sqft": 3192,
    "description": "Coastal Windansea Compound | Steps to World-Famous Surf Offered on the open market for the first time in decades, this Beach Barber Tract property features two detached residences positioned west of L...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/429-Nautilus-St-92037/home/205326983",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "1570 Virginia Way, La Jolla, CA 92037",
    "price": 5300000,
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
