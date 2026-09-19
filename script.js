// ================= Mock data =================
const PRICE_PER_NIGHT = 5700;
const CLEANING_FEE = 800;
const SERVICE_FEE_RATE = 0.10;
const TAX_RATE = 0.05;

const fullDescription = `🌴 Plan your relaxing holiday at Amor de Goa by Mirashya Homes! ✨ Stay in this cozy ` +
  `1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy ` +
  `high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes ` +
  `from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹 — it's ideal for couples ` +
  `seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴`;

const fullNeighbourhood = `Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy ` +
  `access to beaches, cafés, and popular attractions. Candolim Beach is a 5-minute walk, with ` +
  `Calangute and Baga just a short ride away for nightlife and water sports.`;

const amenities = [
  { icon: "fa-hot-tub-person", label: "Private jacuzzi" },
  { icon: "fa-wifi", label: "Fast wifi" },
  { icon: "fa-tv", label: "Smart TV" },
  { icon: "fa-snowflake", label: "Air conditioning" },
  { icon: "fa-utensils", label: "Full kitchen" },
  { icon: "fa-square-parking", label: "Free parking" },
  { icon: "fa-paw", label: "Pets allowed" },
  { icon: "fa-lock", label: "Self check-in" },
  { icon: "fa-jug-detergent", label: "Washer" },
  { icon: "fa-fan", label: "Ceiling fan" },
  { icon: "fa-person-swimming", label: "Pool access" },
  { icon: "fa-pump-soap", label: "Shampoo & soap" },
];

const ratingCategories = [
  { label: "Cleanliness", value: 5.0, icon: "fa-spray-can-sparkles" },
  { label: "Accuracy", value: 5.0, icon: "fa-circle-check" },
  { label: "Check-in", value: 5.0, icon: "fa-key" },
  { label: "Communication", value: 5.0, icon: "fa-comment" },
  { label: "Location", value: 4.8, icon: "fa-map-location-dot" },
  { label: "Value", value: 4.8, icon: "fa-tag" },
];

const overallDistribution = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 0 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

const tags = [
  { label: "Comfort", count: 6, icon: "fa-bed" },
  { label: "Accuracy", count: 5, icon: "fa-circle-check" },
  { label: "Hot tub", count: 5, icon: "fa-hot-tub-person" },
  { label: "Condition", count: 4, icon: "fa-clipboard-list" },
  { label: "Hospitality", count: 8, icon: "fa-gift" },
  { label: "Cleanliness", count: 4, icon: "fa-spray-can-sparkles" },
  { label: "Amenities", count: 2, icon: "fa-suitcase-rolling" },
];

const reviews = [
  { name: "Amit", avatar: "https://ui-avatars.com/api/?name=Amit&background=f3d9b1&color=222", meta: "2 months on Airbnb", stars: 5, time: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. Loved everything about the property." },
  { name: "Aheesh", avatar: "https://i.pravatar.cc/80?img=13", meta: "3 years on Airbnb", stars: 5, time: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again." },
  { name: "Samiksha", avatar: "https://i.pravatar.cc/80?img=32", meta: "8 months on Airbnb", stars: 5, time: "May 2026",
    text: "The host Nitish was really great help." },
  { name: "Vedant", avatar: "https://ui-avatars.com/api/?name=Vedant&background=d9c2f0&color=222", meta: "4 years on Airbnb", stars: 5, time: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine." },
];

const cohosts = ["Sharath", "Aman Dev Pahwa", "Maria Karen Priyanka", "Simran", "Pallavi", "Sanyukta", "Shruti", "Amisha"];

const nearbyStays = [
  { name: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80" },
  { name: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", img: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&q=80" },
  { name: "Greentique Luxury Flat with plunge pool", price: "₹44,506", rating: "4.94", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80" },
  { name: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80" },
  { name: "Luxury Casa Bella 1BHK with plunge pool", price: "₹39,942", rating: "4.95", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80" },
];

// Photos grouped by room for the Photo Tour, in the order they appear in the tour.
// This same flattened list drives the single-photo Lightbox (prev/next + keyboard nav).
const photoRooms = [
  { room: "Living room", photos: [
      { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80", caption: "Living room 1", chips: [
        { icon: "fa-snowflake", label: "Air conditioning" }, { icon: "fa-wifi", label: "Wifi" }, { icon: "fa-tv", label: "TV" } ] },
      { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80", caption: "Living room 2", chips: [
        { icon: "fa-couch", label: "Seating for 4" } ] },
  ]},
  { room: "Jacuzzi", photos: [
      { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80", caption: "Private jacuzzi", chips: [
        { icon: "fa-hot-tub-person", label: "Hot tub" }, { icon: "fa-sun", label: "Outdoor deck" } ] },
  ]},
  { room: "Bedroom", photos: [
      { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80", caption: "Bedroom 1", chips: [
        { icon: "fa-bed", label: "Queen bed" }, { icon: "fa-snowflake", label: "Air conditioning" } ] },
  ]},
  { room: "Building", photos: [
      { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80", caption: "Building exterior", chips: [
        { icon: "fa-square-parking", label: "Free parking" }, { icon: "fa-lock", label: "Self check-in" } ] },
  ]},
];
const allPhotos = photoRooms.flatMap(r => r.photos.map(p => ({ ...p, room: r.room })));

// ================= Description show more/less =================
const descEl = document.getElementById("descText");
const shortDesc = fullDescription.slice(0, 130) + "...";
descEl.textContent = shortDesc;
let descExpanded = false;
document.getElementById("showMoreBtn").addEventListener("click", () => {
  descExpanded = !descExpanded;
  descEl.textContent = descExpanded ? fullDescription : shortDesc;
  document.getElementById("showMoreBtn").textContent = descExpanded ? "Show less" : "Show more";
});

// ================= Neighbourhood show more/less =================
const nbText = document.getElementById("neighbourhoodText");
const nbShort = fullNeighbourhood.slice(0, 95) + "...";
nbText.textContent = nbShort;
let nbExpanded = false;
document.getElementById("neighbourhoodMoreBtn").addEventListener("click", () => {
  nbExpanded = !nbExpanded;
  nbText.textContent = nbExpanded ? fullNeighbourhood : nbShort;
  document.getElementById("neighbourhoodMoreBtn").textContent = nbExpanded ? "Show less" : "Show more";
});

// ================= Amenities =================
document.getElementById("amenityPreview").innerHTML = amenities.slice(0, 6).map(a => `<li><i class="fa-solid ${a.icon}"></i> ${a.label}</li>`).join("");
document.getElementById("modalAmenities").innerHTML = amenities.map(a => `<div><i class="fa-solid ${a.icon}"></i> ${a.label}</div>`).join("");

// ================= Rating bars =================
const overallBarsHTML = overallDistribution.map(d => `
  <div class="bar-row"><span>${d.stars}</span>
    <div class="bar-track"><div class="bar-fill" data-pct="${d.pct}"></div></div>
  </div>
`).join("");

const categoryColsHTML = ratingCategories.map(c => `
  <div class="rating-bar-col"><span class="cat-label"><i class="fa-solid ${c.icon}"></i> ${c.label}</span><span class="cat-value">${c.value.toFixed(1)}</span></div>
`).join("");

document.getElementById("ratingBars").innerHTML = `
  <div class="rating-bar-col"><span class="cat-label">Overall rating</span><div class="bar-list">${overallBarsHTML}</div></div>
  ${categoryColsHTML}
`;

// ================= Tag pills =================
document.getElementById("tagPills").innerHTML = tags.map(t => `<div class="tag-pill"><i class="fa-solid ${t.icon}"></i> ${t.label} <strong>${t.count}</strong></div>`).join("");

// ================= Reviews =================
document.getElementById("reviewGrid").innerHTML = reviews.map(r => `
  <div class="review-card">
    <div class="review-head">
      <img src="${r.avatar}" alt="${r.name}">
      <div><div class="reviewer">${r.name}</div><div class="meta">${r.meta}</div></div>
    </div>
    <div class="stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)} · ${r.time}</div>
    <div class="text">${r.text}</div>
  </div>
`).join("");

// ================= Co-hosts =================
document.getElementById("cohostGrid").innerHTML = cohosts.map(name => `
  <div class="cohost"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=64" alt="${name}"><span>${name}</span></div>
`).join("");

// ================= Nearby carousel =================
const nearbyScroll = document.getElementById("nearbyScroll");
nearbyScroll.innerHTML = nearbyStays.map(s => `
  <div class="nearby-card">
    <img src="${s.img}" alt="${s.name}">
    <div class="name">${s.name}</div>
    <div class="price">${s.price} · ★ ${s.rating}</div>
  </div>
`).join("");
document.getElementById("nearbyPrev").addEventListener("click", () => nearbyScroll.scrollBy({ left: -220, behavior: "smooth" }));
document.getElementById("nearbyNext").addEventListener("click", () => nearbyScroll.scrollBy({ left: 220, behavior: "smooth" }));

// ================= Shared modal open/close helpers =================
function openModal(el) { el.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeModal(el) { el.classList.remove("open"); document.body.style.overflow = ""; }

// ================= Photo Tour (full gallery, grouped by room) =================
const photoTour = document.getElementById("photoTour");
const tourSidebar = document.getElementById("tourSidebar");
const tourMain = document.getElementById("tourMain");

// Build sidebar (one entry per room, jumps to that room's section)
tourSidebar.innerHTML = photoRooms.map((r, i) => `
  <div class="tour-sidebar-item" data-room="room-${i}">
    <img src="${r.photos[0].src}" alt="${r.room}">
    <span>${r.room}</span>
  </div>
`).join("");

// Build main content: one section per room, each photo with caption + amenity chips.
// data-index carries this photo's position in the flattened allPhotos array,
// so clicking it opens the Lightbox at the right spot.
let photoCursor = 0;
tourMain.innerHTML = photoRooms.map((r, i) => {
  const blocks = r.photos.map(p => {
    const idx = photoCursor++;
    return `
      <div class="tour-photo-block">
        <img src="${p.src}" alt="${p.caption}" data-index="${idx}">
        <div class="tour-caption">${p.caption}</div>
        <div class="tour-chips">${p.chips.map(c => `<span class="tour-chip"><i class="fa-solid ${c.icon}"></i> ${c.label}</span>`).join("")}</div>
      </div>`;
  }).join("");
  return `<section class="tour-room" id="room-${i}"><h3>${r.room}</h3>${blocks}</section>`;
}).join("");

// Clicking any photo inside the Photo Tour opens the single-photo Lightbox
tourMain.querySelectorAll("img[data-index]").forEach(img => {
  img.addEventListener("click", () => openLightbox(Number(img.dataset.index)));
});

// Sidebar click scrolls the tour's main pane to that room
tourSidebar.querySelectorAll(".tour-sidebar-item").forEach(item => {
  item.addEventListener("click", () => {
    document.getElementById(item.dataset.room).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Highlight the sidebar item for whichever room section is currently in view
const tourSidebarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tourSidebar.querySelectorAll(".tour-sidebar-item").forEach(el => el.classList.remove("active"));
      const match = tourSidebar.querySelector(`.tour-sidebar-item[data-room="${entry.target.id}"]`);
      if (match) match.classList.add("active");
    }
  });
}, { root: photoTour, threshold: 0.3 });
document.querySelectorAll(".tour-room").forEach(sec => tourSidebarObserver.observe(sec));

// "Show all photos" or clicking any hero image opens the Photo Tour
document.getElementById("showAllBtn").addEventListener("click", () => openModal(photoTour));
document.querySelectorAll(".gallery img").forEach(img => img.addEventListener("click", () => openModal(photoTour)));
document.getElementById("closePhotoTour").addEventListener("click", () => closeModal(photoTour));

// ================= Lightbox (single-photo viewer, prev/next + keyboard) =================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
let lightboxIndex = 0;

function renderLightbox() {
  const photo = allPhotos[lightboxIndex];
  lightboxImg.classList.remove("shown");
  // small delay so the fade/scale transition replays on every photo change
  setTimeout(() => {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    requestAnimationFrame(() => lightboxImg.classList.add("shown"));
  }, 120);
  lightboxCaption.textContent = `${photo.caption} · ${photo.room}`;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${allPhotos.length}`;
}

function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  openModal(lightbox);
}
function showNext() { lightboxIndex = (lightboxIndex + 1) % allPhotos.length; renderLightbox(); }
function showPrev() { lightboxIndex = (lightboxIndex - 1 + allPhotos.length) % allPhotos.length; renderLightbox(); }

document.getElementById("lbNext").addEventListener("click", showNext);
document.getElementById("lbPrev").addEventListener("click", showPrev);
document.getElementById("closeLightbox").addEventListener("click", () => closeModal(lightbox));

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") closeModal(lightbox);
  } else if (photoTour.classList.contains("open") && e.key === "Escape") {
    closeModal(photoTour);
  }
});

// ================= Amenities modal =================
const amenitiesModal = document.getElementById("amenitiesModal");
document.getElementById("showAllAmenitiesBtn").addEventListener("click", () => openModal(amenitiesModal));
document.getElementById("closeAmenities").addEventListener("click", () => closeModal(amenitiesModal));

// ================= Share / Save =================
document.getElementById("shareBtn").addEventListener("click", () => {
  navigator.clipboard?.writeText(window.location.href).catch(() => {});
  const btn = document.getElementById("shareBtn");
  const original = btn.textContent;
  btn.textContent = "Link copied!";
  setTimeout(() => (btn.textContent = original), 1500);
});

const heartIcon = document.getElementById("heartIcon");
let saved = false;
document.getElementById("saveBtn").addEventListener("click", () => {
  saved = !saved;
  heartIcon.classList.toggle("fa-regular", !saved);
  heartIcon.classList.toggle("fa-solid", saved);
  heartIcon.classList.toggle("active", saved);
});

// ================= Guest counter (max 3, matches house rules) =================
const guestBox = document.getElementById("guestBox");
const guestPopover = document.getElementById("guestPopover");
const guestSummary = document.getElementById("guestSummary");
let guestCount = 2;
const MAX_GUESTS = 3;

guestBox.addEventListener("click", () => guestPopover.classList.add("open"));
document.getElementById("guestDoneBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  guestPopover.classList.remove("open");
});
document.addEventListener("click", (e) => {
  if (!guestBox.contains(e.target)) guestPopover.classList.remove("open");
});
document.querySelectorAll(".counter button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const action = btn.dataset.action;
    if (action === "plus" && guestCount < MAX_GUESTS) guestCount++;
    if (action === "minus" && guestCount > 1) guestCount--;
    document.getElementById("guestCount").textContent = guestCount;
    guestSummary.textContent = `${guestCount} guest${guestCount !== 1 ? "s" : ""}`;
  });
});

// ================= Price calculation =================
const checkinEl = document.getElementById("checkin");
const checkoutEl = document.getElementById("checkout");
const breakdownEl = document.getElementById("breakdown");
const cardPriceEl = document.getElementById("cardPrice");
const subnavPriceEl = document.getElementById("subnavPrice");

function nightsBetween(startStr, endStr) {
  const diffMs = new Date(endStr) - new Date(startStr);
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}
function formatINR(n) { return "₹" + n.toLocaleString("en-IN"); }

function updateBreakdown() {
  const nights = nightsBetween(checkinEl.value, checkoutEl.value);
  if (!checkinEl.value || !checkoutEl.value || nights <= 0) {
    breakdownEl.innerHTML = "";
    return;
  }
  const subtotal = nights * PRICE_PER_NIGHT;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  const taxes = Math.round(subtotal * TAX_RATE);
  const total = subtotal + CLEANING_FEE + serviceFee + taxes;

  cardPriceEl.textContent = formatINR(total);
  document.querySelector(".per-night").textContent = `for ${nights} night${nights > 1 ? "s" : ""}`;
  subnavPriceEl.textContent = formatINR(total);
  document.querySelector(".subnav-price .muted").textContent = `for ${nights} night${nights > 1 ? "s" : ""}`;

  breakdownEl.innerHTML = `
    <div class="row"><span>${formatINR(PRICE_PER_NIGHT)} x ${nights} night${nights > 1 ? "s" : ""}</span><span>${formatINR(subtotal)}</span></div>
    <div class="row"><span>Cleaning fee</span><span>${formatINR(CLEANING_FEE)}</span></div>
    <div class="row"><span>Service fee</span><span>${formatINR(serviceFee)}</span></div>
    <div class="row"><span>Taxes</span><span>${formatINR(taxes)}</span></div>
    <div class="total"><span>Total</span><span>${formatINR(total)}</span></div>
  `;
}
checkinEl.addEventListener("change", updateBreakdown);
checkoutEl.addEventListener("change", updateBreakdown);
updateBreakdown();

// ================= Reserve =================
function handleReserve() {
  const nights = nightsBetween(checkinEl.value, checkoutEl.value);
  if (!checkinEl.value || !checkoutEl.value) { alert("Please select check-in and checkout dates."); return; }
  if (nights <= 0) { alert("Checkout date must be after check-in date."); return; }
  alert(`Reservation confirmed for ${nights} night(s), ${guestSummary.textContent}. (Demo only — no real booking.)`);
}
document.getElementById("reserveBtn").addEventListener("click", handleReserve);
document.getElementById("subnavReserveBtn").addEventListener("click", handleReserve);

// ================= Sticky subnav layout sync =================
// The header scrolls away normally now — only the Photos/Amenities/Reviews/Location
// bar stays pinned to the very top of the viewport while scrolling.
const subnavEl = document.getElementById("subnav");
const bookingColEl = document.querySelector(".booking-col");
let stickyOffset = 0;

function syncStickyOffsets() {
  stickyOffset = subnavEl.offsetHeight;
  if (bookingColEl) bookingColEl.style.top = stickyOffset + 16 + "px";
}
syncStickyOffsets();
window.addEventListener("resize", syncStickyOffsets);

// Subtle shadow on the sub-nav once it's actually pinned to the top
window.addEventListener("scroll", () => {
  const subnavStuck = subnavEl.getBoundingClientRect().top <= 0;
  subnavEl.classList.toggle("scrolled", subnavStuck && window.scrollY > 4);
}, { passive: true });

// ================= Sticky subnav: active tab + smooth scroll =================
const tabs = document.querySelectorAll(".subnav .tab");
const sectionIds = ["gallery", "amenities", "reviews", "location"];
const sections = sectionIds.map(id => document.getElementById(id));

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = tab.dataset.target;
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tabs.forEach(t => t.classList.remove("active"));
      const activeTab = document.querySelector(`.tab[data-target="${entry.target.id}"]`);
      if (activeTab) activeTab.classList.add("active");
    }
  });
}, { rootMargin: `-${stickyOffset + 10}px 0px -60% 0px`, threshold: 0 });

sections.forEach(sec => { if (sec) navObserver.observe(sec); });

// ================= Scroll reveal animations =================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Animate rating bar widths once the reviews section is visible
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".bar-fill").forEach(bar => {
        bar.style.width = bar.dataset.pct + "%";
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
const reviewsSection = document.getElementById("reviews");
if (reviewsSection) barObserver.observe(reviewsSection);
