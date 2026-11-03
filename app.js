// ========================================================
// CEN315 Test Engineering - Vize Sınav Uygulaması
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
    document.getElementById('questionText').innerText = "Hata: Sorular yüklenemedi. Lütfen questions.js dosyasını kontrol edin.";
    return;
  }

  const totalQuestions = QUESTIONS.length;
  let normalOrder = Array.from({ length: totalQuestions }, (_, i) => i);
  let order = [...normalOrder];
  let currentIndex = 0;
  let isShuffle = false;

  // Kullanıcının verdiği cevapların kaydı: { [questionId]: { solved: boolean, wrongAttempts: number[] } }
  let userAnswers = {};

  // DOM Elemanları
  const counterEl = document.getElementById('questionCounter');
  const questionTextEl = document.getElementById('questionText');
  const optionsContainerEl = document.getElementById('optionsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const shuffleText = document.getElementById('shuffleText');
  const resetShuffleBtn = document.getElementById('resetShuffleBtn');
  const jumpDropdownBtn = document.getElementById('jumpDropdownBtn');
  const jumpMenu = document.getElementById('jumpMenu');
  const closeJumpMenu = document.getElementById('closeJumpMenu');
  const jumpGrid = document.getElementById('jumpGrid');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const explainBtn = document.getElementById('explainBtn');
  const explainBtnText = document.getElementById('explainBtnText');
  const explanationBox = document.getElementById('explanationBox');
  const explanationContent = document.getElementById('explanationContent');
  let isExplanationOpen = false;

  // Harf Etiketleri
  const optionLetters = ['A', 'B', 'C', 'D'];

  // Tema Yönetimi
  const savedTheme = localStorage.getItem('test_eng_theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('test_eng_theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('test_eng_theme', 'dark');
    }
  });

  // Açıklama Kutusu Yönetimi
  function setExplanationState(open) {
    isExplanationOpen = open;
    if (!explainBtn || !explanationBox || !explanationContent) return;

    if (isExplanationOpen) {
      const qIndex = order[currentIndex];
      const q = QUESTIONS[qIndex];
      explanationContent.innerHTML = q.explanation || "Bu soru için ek açıklama bulunmuyor.";
      explanationBox.style.display = 'block';
      if (explainBtnText) explainBtnText.innerText = "Açıklamayı Gizle";
      explainBtn.classList.add('active');
    } else {
      explanationBox.style.display = 'none';
      if (explainBtnText) explainBtnText.innerText = "Açıklamayı Göster";
      explainBtn.classList.remove('active');
    }
  }

  if (explainBtn) {
    explainBtn.addEventListener('click', () => {
      setExplanationState(!isExplanationOpen);
    });
  }

  // Fisher-Yates Karıştırma Algoritması
  function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Kaldığı Soruyu ve İlerlemeyi LocalStorage'a Kaydetme
  function saveCurrentState() {
    try {
      localStorage.setItem('test_eng_current_index', currentIndex.toString());
      localStorage.setItem('test_eng_user_answers', JSON.stringify(userAnswers));
      localStorage.setItem('test_eng_is_shuffle', isShuffle ? 'true' : 'false');
      if (isShuffle) {
        localStorage.setItem('test_eng_order', JSON.stringify(order));
      } else {
        localStorage.removeItem('test_eng_order');
      }
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // Kaydedilen Durumu Geri Yükleme
  function restoreSavedState() {
    try {
      // 1. Cevapları geri yükle
      const savedAnswers = localStorage.getItem('test_eng_user_answers');
      if (savedAnswers) {
        userAnswers = JSON.parse(savedAnswers) || {};
      }

      // 2. Karışık sıra modunu geri yükle
      const savedShuffle = localStorage.getItem('test_eng_is_shuffle');
      if (savedShuffle === 'true') {
        const savedOrder = localStorage.getItem('test_eng_order');
        if (savedOrder) {
          const parsedOrder = JSON.parse(savedOrder);
          if (Array.isArray(parsedOrder) && parsedOrder.length === totalQuestions) {
            order = parsedOrder;
            isShuffle = true;
            shuffleBtn.classList.add('active');
            shuffleText.innerText = "Karışık Sıra: Açık";
            resetShuffleBtn.style.display = "inline-flex";
          }
        }
      }

      // 3. Kaldığı sorunun indeksini geri yükle (Örn: 38. soruda kaldıysa direkt 38'den başlasın)
      const savedIndex = localStorage.getItem('test_eng_current_index');
      if (savedIndex !== null) {
        const parsedIdx = parseInt(savedIndex, 10);
        if (!isNaN(parsedIdx) && parsedIdx >= 0 && parsedIdx < totalQuestions) {
          currentIndex = parsedIdx;
        }
      }
    } catch (e) {
      console.warn('LocalStorage restore error:', e);
    }
  }

  // Karışık Sıra Değişimi
  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    if (isShuffle) {
      order = shuffleArray(normalOrder);
      shuffleBtn.classList.add('active');
      shuffleText.innerText = "Karışık Sıra: Açık";
      resetShuffleBtn.style.display = "inline-flex";
      currentIndex = 0;
    } else {
      order = [...normalOrder];
      shuffleBtn.classList.remove('active');
      shuffleText.innerText = "Karışık Sıra: Kapalı";
      resetShuffleBtn.style.display = "none";
      currentIndex = 0;
    }
    saveCurrentState();
    renderQuestion();
    updateJumpGridStatus();
  });

  // Yeniden Karıştır Butonu
  resetShuffleBtn.addEventListener('click', () => {
    if (isShuffle) {
      order = shuffleArray(normalOrder);
      currentIndex = 0;
      saveCurrentState();
      renderQuestion();
      updateJumpGridStatus();
    }
  });

  // Sonraki Soruya Güvenli Geçiş (Çift atlamayı engelleyen kilitleme sistemi)
  let isTransitioning = false;
  function goToNextQuestion() {
    if (isTransitioning) return;
    if (currentIndex < totalQuestions - 1) {
      isTransitioning = true;
      currentIndex++;
      saveCurrentState();
      renderQuestion();
      setTimeout(() => {
        isTransitioning = false;
      }, 300);
    }
  }

  // Soruyu Ekrana Çizme
  function renderQuestion() {
    const qIndex = order[currentIndex];
    const q = QUESTIONS[qIndex];

    // Yeni soruya geçerken açıklamayı kapat
    setExplanationState(false);

    // Sayaç ve Soru Metni
    counterEl.innerText = `Soru: ${currentIndex + 1} / ${totalQuestions}`;
    questionTextEl.innerText = `${q.id}. ${q.question}`;

    // Seçenekleri Temizle ve Oluştur
    optionsContainerEl.innerHTML = '';
    const state = userAnswers[q.id] || { solved: false, wrongAttempts: [] };

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('data-index', optIdx);

      const letterSpan = document.createElement('span');
      letterSpan.style.fontWeight = 'bold';
      letterSpan.innerText = `${optionLetters[optIdx]}) `;

      const textSpan = document.createElement('span');
      textSpan.innerText = optText;

      btn.appendChild(letterSpan);
      btn.appendChild(textSpan);

      // Daha önce çözülmüş veya denenmişse durumunu yükle
      if (state.solved) {
        if (optIdx === q.answer) {
          btn.classList.add('correct');
        } else {
          btn.disabled = true;
          if (state.wrongAttempts && state.wrongAttempts.includes(optIdx)) {
            btn.classList.add('wrong');
          }
        }
      } else if (state.wrongAttempts && state.wrongAttempts.includes(optIdx)) {
        btn.classList.add('wrong');
        btn.disabled = true;
      }

      // Her butona tek ve standart tıklama dinleyicisi
      btn.addEventListener('click', () => handleOptionSelect(q, optIdx));

      optionsContainerEl.appendChild(btn);
    });

    // Navigasyon Buton Durumları
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === totalQuestions - 1);

    updateJumpGridStatus();
  }

  // Seçenek Tıklama Mantığı
  function handleOptionSelect(q, selectedIdx) {
    if (!userAnswers[q.id]) {
      userAnswers[q.id] = { solved: false, wrongAttempts: [] };
    }
    const state = userAnswers[q.id];
    const buttons = optionsContainerEl.querySelectorAll('.option-btn');
    const clickedBtn = buttons[selectedIdx];

    if (selectedIdx === q.answer) {
      if (!state.solved) {
        // 1. TIKLAMA: Doğru cevap işaretlendi, yeşile döner
        state.solved = true;
        clickedBtn.classList.remove('wrong');
        clickedBtn.classList.add('correct');

        // Diğer şıkları devre dışı bırak
        buttons.forEach((btn, idx) => {
          if (idx !== q.answer) {
            btn.disabled = true;
          }
        });

        saveCurrentState();
        updateJumpGridStatus();
      } else {
        // 2. TIKLAMA: Zaten yeşil olan doğru cevaba tekrar tıklandı -> YALNIZCA 1 soru ilerle
        goToNextQuestion();
      }
    } else {
      // Yanlış cevap tıklandı
      // Soru henüz çözülmemişse tıklanan şık kırmızı olur, doğru cevap gizli kalır
      if (!state.solved) {
        if (!state.wrongAttempts.includes(selectedIdx)) {
          state.wrongAttempts.push(selectedIdx);
        }
        clickedBtn.classList.add('wrong');
        clickedBtn.disabled = true;
        saveCurrentState();
        updateJumpGridStatus();
      }
    }
  }

  // Önceki / Sonraki Butonları
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      saveCurrentState();
      renderQuestion();
    }
  });

  nextBtn.addEventListener('click', () => {
    goToNextQuestion();
  });

  // Klavye Kısayolları (Sol ok: Önceki, Sağ ok: Sonraki, A/B/C/D veya 1/2/3/4: Seçenekler)
  document.addEventListener('keydown', (e) => {
    // Menü açıksa klavye engellensin
    if (jumpMenu.classList.contains('open')) return;

    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      currentIndex--;
      saveCurrentState();
      renderQuestion();
    } else if (e.key === 'ArrowRight' && currentIndex < totalQuestions - 1) {
      goToNextQuestion();
    } else {
      const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, '1': 0, '2': 1, '3': 2, '4': 3 };
      const selectedIndex = keyMap[e.key.toLowerCase()];
      if (selectedIndex !== undefined) {
        const qIndex = order[currentIndex];
        const q = QUESTIONS[qIndex];
        handleOptionSelect(q, selectedIndex);
      }
    }
  });

  // Hızlı Soru Atlama Menüsü
  function buildJumpGrid() {
    jumpGrid.innerHTML = '';
    for (let i = 0; i < totalQuestions; i++) {
      const itemBtn = document.createElement('div');
      itemBtn.className = 'jump-item';
      itemBtn.innerText = i + 1;
      itemBtn.setAttribute('data-target-index', i);

      itemBtn.addEventListener('click', () => {
        currentIndex = i;
        saveCurrentState();
        renderQuestion();
        jumpMenu.classList.remove('open');
      });

      jumpGrid.appendChild(itemBtn);
    }
    updateJumpGridStatus();
  }

  function updateJumpGridStatus() {
    const items = jumpGrid.querySelectorAll('.jump-item');
    items.forEach((item, i) => {
      const qIndex = order[i];
      const q = QUESTIONS[qIndex];
      const answerState = userAnswers[q.id];

      item.className = 'jump-item';
      if (i === currentIndex) {
        item.classList.add('current');
      }
      if (answerState) {
        if (answerState.solved) {
          item.classList.add('answered-correct');
        } else if (answerState.wrongAttempts && answerState.wrongAttempts.length > 0) {
          item.classList.add('answered-wrong');
        }
      }
    });
  }

  jumpDropdownBtn.addEventListener('click', () => {
    const isOpen = jumpMenu.classList.toggle('open');
    if (isOpen) {
      updateJumpGridStatus();
    }
  });

  closeJumpMenu.addEventListener('click', () => {
    jumpMenu.classList.remove('open');
  });

  // Dışarı tıklayınca menüyü kapat
  document.addEventListener('click', (e) => {
    if (!jumpDropdownBtn.contains(e.target) && !jumpMenu.contains(e.target)) {
      jumpMenu.classList.remove('open');
    }
  });

  // Başlangıç çalıştırması: Önce kaydedilen durumu geri yükle, sonra UI kur
  buildJumpGrid();
  restoreSavedState();
  renderQuestion();
});
