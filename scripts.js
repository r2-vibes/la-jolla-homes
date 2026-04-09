const listings = [
  {
    address: "5777 Desert View Dr, La Jolla, CA 92037",
    price: 2499000,
    beds: 5, baths: 3.5, sqft: 2904,
    description: "Casual-elegant Mt. Soledad home with sweeping canyon, mountain, and city views on an expansive 29,400 sq ft lot.",
    highlights: ["Panoramic views", "Mt. Soledad", "Large lot", "La Jolla Elementary"],
    url: "https://www.redfin.com/CA/La-Jolla/5777-Desert-View-Dr-92037/unit-358-381-14-00/home/200664507",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/438/genIslnoResize.260004438_3.webp",
    view: 8, value: 8, remodel: 8
  },
  {
    address: "5515 Thunderbird Ln, La Jolla, CA 92037",
    price: 2690000,
    beds: 5, baths: 3, sqft: 2847,
    description: "Single-story remodeled La Jolla home on a spacious lot with new kitchen, new baths, and no HOA.",
    highlights: ["No HOA", "Single-story", "Remodeled", "Value entry point"],
    url: "https://www.redfin.com/CA/La-Jolla/5515-Thunderbird-Ln-92037/home/4940917",
    img: "https://ssl.cdn-redfin.com/photo/45/islphoto/498/genIslnoResize.PW25247498_6.webp",
    view: 6, value: 8, remodel: 8
  },
  {
    address: "7753 Via Capri, La Jolla, CA 92037",
    price: 4155000,
    beds: 5, baths: 3.5, sqft: 3445,
    description: "Hidden Valley estate on nearly half an acre with panoramic northwest-facing views over La Jolla Shores and the Pacific.",
    highlights: ["Panoramic ocean views", "Hidden Valley", "Half-acre lot", "La Jolla Shores proximity"],
    url: "https://www.redfin.com/CA/La-Jolla/7753-Via-Capri-92037/home/4924905",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/373/genIslnoResize.260007373_0.webp",
    view: 9, value: 7, remodel: 6
  },
  {
    address: "6411 Dowling Dr, La Jolla, CA 92037",
    price: 4250000,
    beds: 5, baths: 4, sqft: 3068,
    description: "Private newer-construction Beach Barber Tract home near Windansea, the Village, and Bird Rock, with no HOA dues listed on Redfin.",
    highlights: ["Beach Barber Tract", "Newer construction", "Walk to Windansea", "No HOA"],
    url: "https://www.redfin.com/CA/La-Jolla/6411-Dowling-Dr-92037/home/4919610",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/924/genIslnoResize.250041924_15.webp",
    view: 7, value: 6, remodel: 6
  },
  {
    address: "2505 Hidden Valley Pl, La Jolla, CA 92037",
    price: 4450000,
    beds: 5, baths: 4, sqft: 3527,
    description: "Corner-lot entertainer's home minutes from La Jolla Shores with pool, spa, flexible layout, and a rare three-car garage.",
    highlights: ["Pool and spa", "Corner lot", "Near La Jolla Shores", "Three-car garage"],
    url: "https://www.redfin.com/CA/La-Jolla/2505-Hidden-Valley-Pl-92037/home/4879564",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/168/genIslnoResize.260007168_0.webp",
    view: 6, value: 7, remodel: 6
  },
  {
    address: "242 Playa Del Norte St, La Jolla, CA 92037",
    price: 5075000,
    beds: 5, baths: 5.5, sqft: 3100,
    description: "Brand-new custom Beach Barber Tract build steps from Windansea, with a detached 1 bed, 1 bath ADU and no HOA dues listed on Redfin.",
    highlights: ["Brand new", "Detached ADU", "Windansea access", "No HOA"],
    url: "https://www.redfin.com/CA/La-Jolla/242-Playa-del-Norte-92037/home/185186843",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/232/genIslnoResize.250032232_8.webp",
    view: 8, value: 6, remodel: 9
  },
  {
    address: "466 Westbourne St, La Jolla, CA 92037",
    price: 5350000,
    beds: 5, baths: 4, sqft: 3473,
    description: "New-construction lock-and-go beach house in the Beach Barber Tract, moments from Windansea, Little Point, and the Village.",
    highlights: ["New construction", "Beach Barber Tract", "Walk to Windansea", "Lock-and-go"],
    url: "https://www.redfin.com/CA/La-Jolla/466-Westbourne-St-92037/home/182884750",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/545/genIslnoResize.260007545_0.webp",
    view: 6, value: 5, remodel: 9
  },
  {
    address: "5435 Parkview Dr, La Jolla, CA 92037",
    price: 5500000,
    beds: 5, baths: 6.5, sqft: 4588,
    description: "Recently remodeled 4,588 sq ft La Jolla home with six and a half baths, two bedrooms on the main level, and partial ocean views.",
    highlights: ["Recently remodeled", "4,588 sq ft", "6.5 baths", "Partial ocean views"],
    url: "https://www.redfin.com/CA/La-Jolla/5435-Parkview-Dr-92037/home/4939731",
    img: "https://ssl.cdn-redfin.com/photo/48/islphoto/315/genIslnoResize.250041315_G.webp",
    view: 7, value: 6, remodel: 7
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
