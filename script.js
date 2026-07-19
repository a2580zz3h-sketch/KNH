// ============================================================
// بيانات الأذكار
// ============================================================
const azkarData = {
  afterPrayer: {
    title: "أذكار بعد الصلاة",
    icon: "🕌",
    desc: "تُقال عقب كل صلاة مكتوبة",
    items: [
      { text: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ", count: 3 },
      { text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", count: 1 },
      { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", count: 1 },
      { text: "سُبْحَانَ اللَّهِ", count: 33, fadl: "ثم يُكمل المئة بقوله: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير" },
      { text: "الْحَمْدُ لِلَّهِ", count: 33 },
      { text: "اللَّهُ أَكْبَرُ", count: 33 },
      { text: "آيَةُ الْكُرْسِيِّ: اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...", count: 1, fadl: "من قالها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت" },
      { text: "قُلْ هُوَ اللَّهُ أَحَدٌ (سورة الإخلاص كاملة)", count: 1 },
      { text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (سورة الفلق كاملة)", count: 1 },
      { text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ (سورة الناس كاملة)", count: 1, fadl: "تُقرأ المعوذتان والإخلاص ثلاث مرات بعد الفجر والمغرب، ومرة بعد باقي الصلوات" }
    ]
  },
  morning: {
    title: "أذكار الصباح",
    icon: "☀️",
    desc: "من بعد صلاة الفجر إلى شروق الشمس",
    items: [
      { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ", count: 1 },
      { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ", count: 1 },
      { text: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", count: 1 },
      { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ", count: 3 },
      { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", count: 3 },
      { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", count: 7 },
      { text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ", count: 4, fadl: "من قالها أعتقه الله من النار" },
      { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100, fadl: "حُطّت خطاياه وإن كانت مثل زبد البحر" },
      { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", count: 10 },
      { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", count: 100 },
      { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", count: 3, fadl: "كان حقاً على الله أن يُرضيه يوم القيامة" },
      { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count: 3, fadl: "لم يضره شيء حتى يمسي" },
      { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", count: 10 }
    ]
  },
  evening: {
    title: "أذكار المساء",
    icon: "🌙",
    desc: "من بعد صلاة العصر إلى غروب الشمس",
    items: [
      { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا", count: 1 },
      { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ", count: 1 },
      { text: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", count: 1 },
      { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ", count: 3 },
      { text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", count: 7 },
      { text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ", count: 4 },
      { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100 },
      { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", count: 3, fadl: "لم يضره شيء حتى يصبح" },
      { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", count: 100 },
      { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", count: 3 },
      { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", count: 10 }
    ]
  },
  sleep: {
    title: "أذكار النوم",
    icon: "🌟",
    desc: "تُقال عند إرادة النوم",
    items: [
      { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", count: 1 },
      { text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ", count: 1 },
      { text: "آيَةُ الْكُرْسِيِّ: اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...", count: 1, fadl: "من قرأها عند النوم لم يزل عليه من الله حافظ ولا يقربه شيطان حتى يصبح" },
      { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، وَالْمُعَوِّذَتَيْنِ (مع النفث في اليدين ومسح الجسد)", count: 3 },
      { text: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ ذِي شَرٍّ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ...", count: 1 },
      { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", count: 3 },
      { text: "سُبْحَانَ اللَّهِ", count: 33 },
      { text: "الْحَمْدُ لِلَّهِ", count: 33 },
      { text: "اللَّهُ أَكْبَرُ", count: 34, fadl: "خير لكما من خادم تسألانه" },
      { text: "اللَّهُمَّ إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ", count: 1 }
    ]
  }
};

// ============================================================
// حالة التطبيق
// ============================================================
let currentCat = "afterPrayer";
const STORAGE_KEY = "azkar_progress_v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) { return {}; }
}
function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
}
let progress = loadProgress();

function getItemProgress(cat, idx) {
  return (progress[cat] && progress[cat][idx]) || 0;
}
function setItemProgress(cat, idx, val) {
  if (!progress[cat]) progress[cat] = {};
  progress[cat][idx] = val;
  saveProgress(progress);
}

// ============================================================
// عرض الأذكار
// ============================================================
const azkarList = document.getElementById("azkarList");
const catTitle = document.getElementById("catTitle");
const catDesc = document.getElementById("catDesc");
const catIcon = document.getElementById("catIcon");
const progressFill = document.getElementById("progressFill");

function renderCategory(cat) {
  currentCat = cat;
  const data = azkarData[cat];
  catTitle.textContent = data.title;
  catDesc.textContent = data.desc;
  catIcon.textContent = data.icon;
  azkarList.innerHTML = "";

  data.items.forEach((item, idx) => {
    const done = getItemProgress(cat, idx);
    const li = document.createElement("li");
    li.className = "zikr-card" + (done >= item.count ? " done" : "");
    li.dataset.idx = idx;

    li.innerHTML = `
      <span class="zikr-index">${idx + 1} / ${data.items.length}</span>
      <p class="zikr-text">${item.text}</p>
      ${item.fadl ? `<p class="zikr-fadl">${item.fadl}</p>` : ""}
      <div class="zikr-footer">
        <button class="count-btn" data-idx="${idx}">
          عدّ الذكر <span class="count-badge">${done} / ${item.count}</span>
        </button>
        <div class="mini-beads">${renderMiniBeads(item.count, done)}</div>
      </div>
    `;
    azkarList.appendChild(li);
  });

  updateProgressBar();
}

function renderMiniBeads(total, done) {
  const shown = Math.min(total, 10);
  let html = "";
  for (let i = 0; i < shown; i++) {
    const on = total <= 10 ? i < done : (i + 1) / shown <= done / total;
    html += `<span class="mini-bead ${on ? "on" : ""}"></span>`;
  }
  return html;
}

function updateProgressBar() {
  const data = azkarData[currentCat];
  let totalDone = 0, totalNeeded = 0;
  data.items.forEach((item, idx) => {
    totalNeeded += item.count;
    totalDone += Math.min(getItemProgress(currentCat, idx), item.count);
  });
  const pct = totalNeeded ? (totalDone / totalNeeded) * 100 : 0;
  progressFill.style.width = pct + "%";
}

azkarList.addEventListener("click", (e) => {
  const btn = e.target.closest(".count-btn");
  if (!btn) return;
  const idx = parseInt(btn.dataset.idx, 10);
  const item = azkarData[currentCat].items[idx];
  let done = getItemProgress(currentCat, idx);
  done = done >= item.count ? 0 : done + 1;
  setItemProgress(currentCat, idx, done);
  if (navigator.vibrate) navigator.vibrate(15);
  renderCategory(currentCat);
});

document.getElementById("resetCatBtn").addEventListener("click", () => {
  if (!confirm("هل تريد إعادة ضبط عدّادات هذا القسم؟")) return;
  progress[currentCat] = {};
  saveProgress(progress);
  renderCategory(currentCat);
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCategory(btn.dataset.cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

renderCategory(currentCat);

// ============================================================
// المسبحة الإلكترونية
// ============================================================
const tasbihOverlay = document.getElementById("tasbihOverlay");
const openTasbihBtn = document.getElementById("openTasbih");
const closeTasbihBtn = document.getElementById("closeTasbih");
const dragBead = document.getElementById("dragBead");
const beadsTrack = document.getElementById("beadsTrack");
const counterNumber = document.getElementById("counterNumber");
const counterRound = document.getElementById("counterRound");
const ringFg = document.getElementById("ringFg");
const currentDhikrText = document.getElementById("currentDhikrText");
const dhikrChips = document.querySelectorAll(".dhikr-chip");

const RING_CIRC = 2 * Math.PI * 52; // ≈ 326.7
const ROUND_TARGET = 33;

let tasbihCount = 0;
let tasbihRound = 1;

function updateTasbihDisplay() {
  counterNumber.textContent = tasbihCount;
  counterRound.textContent = "الدورة: " + tasbihRound;
  const withinRound = tasbihCount % ROUND_TARGET;
  const offset = RING_CIRC - (withinRound / ROUND_TARGET) * RING_CIRC;
  ringFg.style.strokeDasharray = RING_CIRC;
  ringFg.style.strokeDashoffset = tasbihCount > 0 && withinRound === 0 ? 0 : offset;
}

function incrementTasbih() {
  tasbihCount++;
  if (tasbihCount % ROUND_TARGET === 0) {
    tasbihRound++;
    if (navigator.vibrate) navigator.vibrate([20, 40, 20]);
  } else if (navigator.vibrate) {
    navigator.vibrate(12);
  }
  updateTasbihDisplay();
}

function openTasbih() {
  tasbihOverlay.classList.add("open");
}
function closeTasbihFn() {
  tasbihOverlay.classList.remove("open");
}

openTasbihBtn.addEventListener("click", openTasbih);
closeTasbihBtn.addEventListener("click", closeTasbihFn);
tasbihOverlay.addEventListener("click", (e) => {
  if (e.target === tasbihOverlay) closeTasbihFn();
});

dhikrChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    dhikrChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentDhikrText.textContent = chip.dataset.text;
  });
});

document.getElementById("counterMinus").addEventListener("click", () => {
  if (tasbihCount > 0) tasbihCount--;
  updateTasbihDisplay();
});
document.getElementById("counterReset").addEventListener("click", () => {
  tasbihCount = 0;
  tasbihRound = 1;
  updateTasbihDisplay();
});

// --- سحب الخرزة للأسفل ---
let dragging = false;
let startY = 0;
const trackTop = 14;
let trackHeight = 0;

function getTrackHeight() {
  return beadsTrack.clientHeight - dragBead.offsetHeight - 24;
}

function pointerDown(e) {
  dragging = true;
  startY = (e.touches ? e.touches[0].clientY : e.clientY);
  dragBead.classList.remove("snap-back");
  trackHeight = getTrackHeight();
}

function pointerMove(e) {
  if (!dragging) return;
  const clientY = (e.touches ? e.touches[0].clientY : e.clientY);
  let delta = clientY - startY;
  delta = Math.max(0, Math.min(delta, trackHeight));
  dragBead.style.top = (trackTop + delta) + "px";
}

function pointerUp(e) {
  if (!dragging) return;
  dragging = false;
  const currentTop = parseFloat(dragBead.style.top || trackTop);
  const threshold = trackHeight * 0.65;

  dragBead.classList.add("snap-back");
  if (currentTop - trackTop >= threshold) {
    incrementTasbih();
  }
  dragBead.style.top = trackTop + "px";
}

dragBead.addEventListener("mousedown", pointerDown);
document.addEventListener("mousemove", pointerMove);
document.addEventListener("mouseup", pointerUp);

dragBead.addEventListener("touchstart", pointerDown, { passive: true });
document.addEventListener("touchmove", pointerMove, { passive: true });
document.addEventListener("touchend", pointerUp);

// النقر المباشر على الخرزة يعدّ أيضاً (لمن يفضل الضغط بدل السحب)
dragBead.addEventListener("click", (e) => {
  // فقط إذا لم يكن سحباً فعلياً (نفّذ سحب صغير جداً)
  if (Math.abs(parseFloat(dragBead.style.top || trackTop) - trackTop) < 4) {
    incrementTasbih();
  }
});

updateTasbihDisplay();
