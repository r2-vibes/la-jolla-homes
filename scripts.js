const listings = [
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
    "address": "1570 Virginia Way, La Jolla, CA 92037",
    "price": 5750000,
    "beds": 5,
    "baths": 3.5,
    "sqft": 3500,
    "description": "An exceptional opportunity\udb40\udce2\udb40\udc81\udb40\udca3\udb40\udce2\udb40\udc81\udb40\udca3\udb40\udccd\udb40\udc8f\udb40\udce2\udb40\udc80\udb40\udc8b\udb40\udce2\udb40\udc81\udb40\udca4\udb40\udcf3\udb40\udca0\udb40\udc81\udb40\udc81 in the heart of La Jolla, this historically designated American Lodge, built by the Helms family, has been approved for the Mills Act \u2014an important t...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/1570-Virginia-Way-92037/home/95961539",
    "img": null,
    "view": 7,
    "value": 7,
    "remodel": 7
  },
  {
    "address": "2448 Sagebrush Ct, La Jolla, CA 92037",
    "price": 5950000,
    "beds": 5,
    "baths": 5.5,
    "sqft": 4467,
    "description": "A striking ground-up\udb40\udce2\udb40\udc81\udb40\udca3\udb40\udce2\udb40\udc81\udb40\udca3\udb40\udccd\udb40\udc8f\udb40\udce2\udb40\udc80\udb40\udc8b\udb40\udce2\udb40\udc81\udb40\udca4\udb40\udcf3\udb40\udca0\udb40\udc81\udb40\udc81 new construction , this soft contemporary residence blends refined design with exceptional craftsmanship on an expansive 27,442-square-foot lot, tucked away on a...",
    "highlights": [
      "La Jolla Elementary"
    ],
    "url": "https://www.redfin.com/CA/La-Jolla/2448-Sagebrush-Ct-92037/home/6638298",
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
