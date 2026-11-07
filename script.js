// ===========================================================
//  FERRARI DATA
//  This is just like an array of structs in C!
//  Each { ... } below is one car, like one "struct Car".
//  To add a car, copy one block, paste it with a comma, and edit it.
// ===========================================================
const cars = [
    {
        id: "f40",
        name: "F40",
        year: 1987,
        category: "Supercar",
        cyl: 8,
        hybrid: false,
        engine: "2.9L twin-turbo V8",
        hp: 471,
        zeroTo100: 4.7,
        topSpeed: 324,
        drivetrain: "Rear-wheel drive",
        transmission: "5-speed manual",
        tires: "Goodyear Eagle F1 (front 245/40 ZR17, rear 335/35 ZR17)",
        desc: "The last Ferrari approved by Enzo Ferrari himself. Raw, light and loud, with no driver aids at all."
    },
    {
        id: "testarossa",
        name: "Testarossa",
        year: 1984,
        category: "Classic",
        cyl: 12,
        hybrid: false,
        engine: "4.9L flat-12",
        hp: 385,
        zeroTo100: 5.8,
        topSpeed: 290,
        drivetrain: "Rear-wheel drive",
        transmission: "5-speed manual",
        tires: "Michelin TRX (front 240/45 VR415, rear 280/45 VR415)",
        desc: "The icon of the 1980s, famous for its wide body and the side strakes that feed its flat-12 engine."
    },
    {
        id: "enzo",
        name: "Enzo",
        year: 2002,
        category: "Hypercar",
        cyl: 12,
        hybrid: false,
        engine: "6.0L V12",
        hp: 651,
        zeroTo100: 3.3,
        topSpeed: 350,
        drivetrain: "Rear-wheel drive",
        transmission: "6-speed paddle-shift (F1)",
        tires: "Bridgestone Potenza (front 245/35 ZR19, rear 345/35 ZR19)",
        desc: "Named after the founder. Built with Formula 1 technology and carbon fibre, limited to 400 cars."
    },
    {
        id: "458-italia",
        name: "458 Italia",
        year: 2009,
        category: "Supercar",
        cyl: 8,
        hybrid: false,
        engine: "4.5L naturally aspirated V8",
        hp: 570,
        zeroTo100: 3.4,
        topSpeed: 325,
        drivetrain: "Rear-wheel drive",
        transmission: "7-speed dual-clutch",
        tires: "Pirelli P Zero (front 235/35 R20, rear 295/35 R20)",
        desc: "Loved for its screaming 9,000 rpm V8. Many fans call it the best-sounding modern Ferrari."
    },
    {
        id: "laferrari",
        name: "LaFerrari",
        year: 2013,
        category: "Hypercar",
        cyl: 12,
        hybrid: true,
        engine: "6.3L V12 + electric motor (HY-KERS)",
        hp: 963,
        zeroTo100: 2.9,
        topSpeed: 350,
        drivetrain: "Rear-wheel drive",
        transmission: "7-speed dual-clutch",
        tires: "Pirelli P Zero Corsa (front 265/30 R19, rear 345/30 R20)",
        desc: "Ferrari's first hybrid hypercar. The V12 and the electric motor together make almost 1,000 hp."
    },
    {
        id: "488-gtb",
        name: "488 GTB",
        year: 2015,
        category: "Supercar",
        cyl: 8,
        hybrid: false,
        engine: "3.9L twin-turbo V8",
        hp: 661,
        zeroTo100: 3.0,
        topSpeed: 330,
        drivetrain: "Rear-wheel drive",
        transmission: "7-speed dual-clutch",
        tires: "Pirelli P Zero (front 245/35 R20, rear 305/30 R20)",
        desc: "Brought turbochargers back to the mid-engined V8 line, with huge torque and sharp handling."
    },
    {
        id: "812-superfast",
        name: "812 Superfast",
        year: 2017,
        category: "Grand Tourer",
        cyl: 12,
        hybrid: false,
        engine: "6.5L naturally aspirated V12",
        hp: 789,
        zeroTo100: 2.9,
        topSpeed: 340,
        drivetrain: "Rear-wheel drive",
        transmission: "7-speed dual-clutch",
        tires: "Pirelli P Zero (front 275/35 R20, rear 315/35 R20)",
        desc: "One of the most powerful naturally aspirated road cars ever built, with a front-mounted V12."
    },
    {
        id: "roma",
        name: "Roma",
        year: 2020,
        category: "Grand Tourer",
        cyl: 8,
        hybrid: false,
        engine: "3.9L twin-turbo V8",
        hp: 612,
        zeroTo100: 3.4,
        topSpeed: 320,
        drivetrain: "Rear-wheel drive",
        transmission: "8-speed dual-clutch",
        tires: "Pirelli P Zero (front 245/35 R20, rear 285/35 R20)",
        desc: "An elegant front-engined coupe inspired by the 1950s and 60s 'La Dolce Vita' era of Rome."
    },
    {
        id: "sf90",
        name: "SF90 Stradale",
        year: 2019,
        category: "Hybrid Hypercar",
        cyl: 8,
        hybrid: true,
        engine: "4.0L twin-turbo V8 + 3 electric motors",
        hp: 986,
        zeroTo100: 2.5,
        topSpeed: 340,
        drivetrain: "All-wheel drive (plug-in hybrid)",
        transmission: "8-speed dual-clutch",
        tires: "Pirelli P Zero (front 255/35 R20, rear 315/35 R20)",
        desc: "Ferrari's first plug-in hybrid and first series-production car with all-wheel drive."
    },
    {
        id: "296-gtb",
        name: "296 GTB",
        year: 2022,
        category: "Hybrid Supercar",
        cyl: 6,
        hybrid: true,
        engine: "3.0L twin-turbo V6 + electric motor",
        hp: 819,
        zeroTo100: 2.9,
        topSpeed: 330,
        drivetrain: "Rear-wheel drive (plug-in hybrid)",
        transmission: "8-speed dual-clutch",
        tires: "Pirelli P Zero (front 245/35 R20, rear 305/30 R20)",
        desc: "A small V6 and an electric motor produce over 800 hp. It is a new chapter for Ferrari."
    }
];

// ===========================================================
//  PAGE LOGIC
// ===========================================================
const grid = document.getElementById("grid");
const searchBox = document.getElementById("search");
const sortBox = document.getElementById("sort");
const noResults = document.getElementById("no-results");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

let currentFilter = "all";

// Does this car match the selected filter button?
function matchesFilter(car) {
    if (currentFilter === "all") return true;
    if (currentFilter === "v12") return car.cyl === 12;
    if (currentFilter === "v8") return car.cyl === 8;
    if (currentFilter === "hybrid") return car.hybrid;
    return true;
}

// Picture area: shows a photo from the images folder if it exists,
// otherwise shows the model name in big faded letters.
function imageHTML(car) {
    return `
        <div class="car-img">
            <span class="badge">${car.category}</span>
            <span class="ghost">${car.name}</span>
            <img src="images/${car.id}.jpg" alt="Ferrari ${car.name}"
                 onerror="this.remove()">
        </div>`;
}

// Build and show all the cards
function showCars() {
    const text = searchBox.value.toLowerCase();

    // 1. Pick the cars that match search + filter
    let list = cars.filter(function (car) {
        return car.name.toLowerCase().includes(text) && matchesFilter(car);
    });

    // 2. Sort them
    const sortType = sortBox.value;
    list.sort(function (a, b) {
        if (sortType === "year-new") return b.year - a.year;
        if (sortType === "year-old") return a.year - b.year;
        if (sortType === "hp-high") return b.hp - a.hp;
        if (sortType === "speed-high") return b.topSpeed - a.topSpeed;
        return 0;
    });

    // 3. Draw them
    grid.innerHTML = list.map(function (car) {
        return `
            <article class="car-card" onclick="openModal('${car.id}')">
                ${imageHTML(car)}
                <div class="car-info">
                    <div class="car-year">${car.year}</div>
                    <h2>${car.name}</h2>
                    <p class="car-engine">${car.engine}</p>
                    <div class="mini-stats">
                        <div><strong>${car.hp}</strong><span>hp</span></div>
                        <div><strong>${car.zeroTo100}s</strong><span>0-100</span></div>
                        <div><strong>${car.topSpeed}</strong><span>km/h</span></div>
                    </div>
                </div>
            </article>`;
    }).join("");

    noResults.hidden = list.length > 0;
}

// Open the pop-up with every detail of one car
function openModal(id) {
    const car = cars.find(function (c) { return c.id === id; });

    // Bars are shown relative to the best values among all cars
    const hpPercent = Math.round((car.hp / 1000) * 100);
    const speedPercent = Math.round((car.topSpeed / 360) * 100);
    const accelPercent = Math.round(((6 - car.zeroTo100) / 3.5) * 100);

    modalContent.innerHTML = `
        ${imageHTML(car)}
        <div class="modal-body">
            <div class="car-year">${car.year}</div>
            <h2>Ferrari ${car.name}</h2>
            <p class="modal-desc">${car.desc}</p>

            <div class="bar-row">
                <div class="bar-label">${car.hp} hp <span>Power</span></div>
                <div class="bar-track"><div class="bar-fill" style="width:${hpPercent}%"></div></div>
            </div>
            <div class="bar-row">
                <div class="bar-label">${car.topSpeed} km/h <span>Top speed</span></div>
                <div class="bar-track"><div class="bar-fill" style="width:${speedPercent}%"></div></div>
            </div>
            <div class="bar-row">
                <div class="bar-label">${car.zeroTo100} s <span>0-100 km/h (shorter bar = slower)</span></div>
                <div class="bar-track"><div class="bar-fill" style="width:${accelPercent}%"></div></div>
            </div>

            <div class="spec-table">
                <div class="spec"><small>Type</small><p>${car.category}</p></div>
                <div class="spec"><small>Year</small><p>${car.year}</p></div>
                <div class="spec wide"><small>Engine</small><p>${car.engine}</p></div>
                <div class="spec"><small>Drivetrain</small><p>${car.drivetrain}</p></div>
                <div class="spec"><small>Transmission</small><p>${car.transmission}</p></div>
                <div class="spec wide"><small>Tires</small><p>${car.tires}</p></div>
            </div>
        </div>`;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
}

// ----- Events: what happens when the user clicks or types -----
searchBox.addEventListener("input", showCars);
sortBox.addEventListener("change", showCars);

document.querySelectorAll(".filter-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");
        currentFilter = button.dataset.filter;
        showCars();
    });
});

document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();   // click outside the box
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});

// Show everything when the page first loads
showCars();