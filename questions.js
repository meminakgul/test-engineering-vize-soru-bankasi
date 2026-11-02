// ========================================================
// CEN315 Test Engineering Vize Soru Bankası (200 Soru)
// Bölüm 1 - 6 Kapsamı (Slaytlardan Birebir Çıkarılmıştır)
// ========================================================

const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "topic": "Test Mühendisliği Tanımı",
    "question": "Modern Test Mühendisliği (Test Engineering) kavramının en doğru tanımı aşağıdakilerden hangisidir?",
    "options": [
      "Yazılım geliştirme tamamlandıktan sonra kodda kalan hataları bulup geliştiricilere bildirme sürecidir.",
      "Yazılım geliştirme yaşam döngüsünün tamamına kaliteyi entegre eden, hataları önlemeye odaklanan proaktif bir kalite güvence disiplinidir.",
      "Yalnızca kullanıcı arayüzünü (UI) test ederek sistemin görsel doğruluğunu onaylama yöntemidir.",
      "Geliştiricilerin yazdığı birim testlerin doğruluğunu denetleyen manuel bir kalite kontrol sürecidir."
    ],
    "answer": 1
  },
  {
    "id": 2,
    "chapter": 1,
    "topic": "QA ve QC Ayrımı",
    "question": "Kalite Güvence (Quality Assurance - QA) ve Kalite Kontrol (Quality Control - QC) arasındaki temel fark nedir?",
    "options": [
      "QA ürün odaklıdır ve bitmiş ürünü inceler; QC ise süreç odaklıdır ve süreçleri denetler.",
      "QA dinamik testleri kapsar; QC sadece statik kod incelemelerinden oluşur.",
      "QA kalitenin elde edileceğine dair güven oluşturan süreç odaklı faaliyettir; QC ise teslimatın gereksinimleri karşılayıp karşılamadığını inceleyen ürün odaklı faaliyettir.",
      "QA yalnızca yöneticiler tarafından yapılır; QC ise müşteriler tarafından gerçekleştirilir."
    ],
    "answer": 2
  },
  {
    "id": 3,
    "chapter": 1,
    "topic": "Verification vs Validation",
    "question": "Doğrulama (Verification) ve Geçerleme (Validation) kavramlarını özetleyen temel sorular hangi seçenekte doğru eşleştirilmiştir?",
    "options": [
      "Verification: 'Doğru ürünü mü yapıyoruz?' | Validation: 'Ürünü doğru mu yapıyoruz?'",
      "Verification: 'Ürünü doğru mu yapıyoruz?' | Validation: 'Doğru ürünü mü yapıyoruz?'",
      "Verification: 'Kod hızlı çalışıyor mu?' | Validation: 'Kod hatasız derleniyor mu?'",
      "Verification: 'Testler otomatik koşuyor mu?' | Validation: 'Test kapsamı yeterli mi?'"
    ],
    "answer": 1
  },
  {
    "id": 4,
    "chapter": 1,
    "topic": "Testing ve Risk",
    "question": "Yazılım testi hakkında aşağıda verilen ifadelerden hangisi ISTQB ve ders slaytlarına göre doğrudur?",
    "options": [
      "Yazılım testi sistemin %100 hatasız olduğunu kesin olarak kanıtlar.",
      "Yazılım testi sistemin kalitesi ve riskleri hakkında bilgi sağlar, ancak hatasızlık garantisi veremez.",
      "Tüm test senaryoları geçtiğinde yazılımda hiçbir güvenlik açığı kalmadığı doğrulanmış olur.",
      "Test mühendisliği yalnızca fonksiyonel gereksinimlerin test edilmesiyle ilgilenir."
    ],
    "answer": 1
  },
  {
    "id": 5,
    "chapter": 1,
    "topic": "Statik ve Dinamik Test",
    "question": "Aşağıdakilerden hangisi Statik Test (Static Testing) yöntemlerine örnek olarak verilemez?",
    "options": [
      "Gereksinim walkthrough (üzerinden geçme) toplantıları ve tasarım incelemeleri.",
      "Statik Kod Analizi (SAST), linter kontrolleri ve kod incelemeleri (Code Review).",
      "Sistemi canlı ortamda çalıştırıp REST API uç noktalarına HTTP istekleri göndermek.",
      "Gizli anahtar (Secret scanning) ve bağımlılık/SBOM (Yazılım Malzeme Listesi) taramaları."
    ],
    "answer": 2
  },
  {
    "id": 6,
    "chapter": 1,
    "topic": "Shift-Left Yaklaşımı",
    "question": "Yazılım testinde 'Shift-Left' (Sola Kaydırma) yaklaşımının temel amacı nedir?",
    "options": [
      "Test aktivitelerini yazılım geliştirme sürecinin son aşamasına, dağıtım öncesine kaydırmak.",
      "Testleri gereksinim analizi ve tasarım gibi yaşam döngüsünün en erken aşamalarına çekerek hataları erkenden ve düşük maliyetle önlemek.",
      "Birim testlerinin tamamını geliştiriciler yerine müşteriye yaptırmak.",
      "Yalnızca kullanıcı kabul testlerine odaklanarak teknik testleri sol tarafa bırakmak."
    ],
    "answer": 1
  },
  {
    "id": 7,
    "chapter": 1,
    "topic": "ISO/IEC 25010 Kalite Modeli",
    "question": "ISO/IEC 25010 Ürün Kalite Modeli'nde toplam kaç temel ürün kalite karakteristiği tanımlanmıştır?",
    "options": [
      "4 temel karakteristik",
      "6 temel karakteristik",
      "8 temel karakteristik",
      "12 temel karakteristik"
    ],
    "answer": 2
  },
  {
    "id": 8,
    "chapter": 1,
    "topic": "ISO 25010 - Functional Suitability",
    "question": "ISO/IEC 25010'a göre 'Functional Suitability' (Fonksiyonel Uygunluk) karakteristiğinin alt özellikleri hangileridir?",
    "options": [
      "Zaman davranışı (Time behavior), Kaynak kullanımı, Kapasite",
      "Tamlık (Completeness), Doğruluk (Correctness), Uygunluk (Appropriateness)",
      "Gizlilik, Bütünlük, İnkar Edilemezlik",
      "Öğrenilebilirlik, Kullanılabilirlik, Estetik"
    ],
    "answer": 1
  },
  {
    "id": 9,
    "chapter": 1,
    "topic": "ISO 25010 - Performance Efficiency",
    "question": "Sistemin yanıt süresi, işlem hacmi ve kaynak tüketimini inceleyen ISO/IEC 25010 kalite karakteristiği hangisidir?",
    "options": [
      "Maintainability (Bakım Yapılabilirlik)",
      "Reliability (Güvenilirlik)",
      "Performance Efficiency (Performans Verimliliği)",
      "Portability (Taşınabilirlik)"
    ],
    "answer": 2
  },
  {
    "id": 10,
    "chapter": 1,
    "topic": "ISO 25010 - Reliability",
    "question": "Hata toleransı (Fault tolerance), olgunluk (maturity), kullanılabilirlik (availability) ve kurtarılabilirlik (recoverability) hangi kalite özelliğinin alt dallarıdır?",
    "options": [
      "Reliability (Güvenilirlik)",
      "Security (Güvenlik)",
      "Compatibility (Uyumluluk)",
      "Functional Suitability (Fonksiyonel Uygunluk)"
    ],
    "answer": 0
  },
  {
    "id": 11,
    "chapter": 1,
    "topic": "ISO 25010 - Maintainability",
    "question": "Modülerlik, yeniden kullanılabilirlik, analiz edilebilirlik, değiştirilebilirlik ve **test edilebilirlik (testability)** hangi karakteristik altında yer alır?",
    "options": [
      "Portability (Taşınabilirlik)",
      "Maintainability (Bakım Yapılabilirlik)",
      "Compatibility (Uyumluluk)",
      "Usability (Kullanılabilirlik)"
    ],
    "answer": 1
  },
  {
    "id": 12,
    "chapter": 1,
    "topic": "Eşdeğerlik Payları (EP)",
    "question": "Eşdeğerlik Paylarına Ayırma (Equivalence Partitioning - EP) tekniğinin temel felsefesi nedir?",
    "options": [
      "Girdi alanındaki tüm olası değerleri tek tek çalıştırarak %100 kapsama sağlamak.",
      "Girdileri sistemin benzer şekilde davranması beklenen sınıflara bölmek ve her sınıftan en az bir temsilci değer seçip test etmek.",
      "Yalnızca sistemin sınır değerlerini test ederek ara değerleri tamamen göz ardı etmek.",
      "Kaynak kodun her bir satırını en az bir kez çalıştıracak rastgele girdiler üretmek."
    ],
    "answer": 1
  },
  {
    "id": 13,
    "chapter": 1,
    "topic": "Sınır Değer Analizi (BVA)",
    "question": "Sınır Değer Analizi (Boundary Value Analysis - BVA) yönteminde testlerin özellikle sınır bölgelerine yoğunlaşmasının temel nedeni nedir?",
    "options": [
      "Sınır bölgelerini test etmenin kod yazımını kolaylaştırması.",
      "Yazılım hatalarının (kusurların) genellikle eşdeğerlik sınıflarının sınırlarında (boundaries) kümelenmesi.",
      "Sınır değerlerin her zaman geçersiz (invalid) veri üretmesi.",
      "İş birimlerinin yalnızca sınır değerlerle ilgilenmesi."
    ],
    "answer": 1
  },
  {
    "id": 14,
    "chapter": 1,
    "topic": "EP/BVA Parola Örneği",
    "question": "Şartname: 'Parola 8-20 karakter uzunluğunda olmalı, en az bir harf ve bir rakam içermeli, boşluk içermemelidir.' BVA tekniğine göre karakter uzunluğu için hangi değerler öncelikle test edilmelidir?",
    "options": [
      "0, 5, 10, 25",
      "7, 8, 9, 20, 21",
      "1, 2, 8, 20, 100",
      "8 ve 20 (yalnızca geçerli sınırlar)"
    ],
    "answer": 1
  },
  {
    "id": 15,
    "chapter": 1,
    "topic": "EP/BVA Tamsayı Örneği",
    "question": "Bir girdi alanı 1 ile 999 arasındaki tamsayıları kabul etmekte ve başta sıfır ('leading zeros') olmasını reddetmektedir. Bu alan için geçersiz (invalid) sınır değerleri aşağıdakilerden hangileridir?",
    "options": [
      "1 ve 999",
      "0 ve 1000",
      "50 ve 500",
      "100 ve 998"
    ],
    "answer": 1
  },
  {
    "id": 16,
    "chapter": 1,
    "topic": "Risk Tabanlı Test (RBT)",
    "question": "Risk Tabanlı Test (Risk-Based Testing - RBT) yaklaşımında bir riskin büyüklüğü (Risk Değeri / RPN) hangi bileşenlerin çarpımıyla hesaplanır?",
    "options": [
      "Risk = Maliyet × Süre × Kod Satır Sayısı",
      "Risk = Gerçekleşme Olasılığı (Likelihood) × Etki (Impact) × Tespit Edilebilirlik (Detectability)",
      "Risk = Test Kapsamı × Birim Test Sayısı × Geliştirici Sayısı",
      "Risk = Hata Sayısı × Hata Çözüm Süresi × Proje Bütçesi"
    ],
    "answer": 1
  },
  {
    "id": 17,
    "chapter": 1,
    "topic": "FMEA Yaklaşımı",
    "question": "FMEA (Failure Mode and Effects Analysis) metodolojisinin test mühendisliğindeki birincil rolü nedir?",
    "options": [
      "Testlerin koşum sürelerini milisaniye cinsinden ölçmek.",
      "Olası arıza modlarını, bunların etkilerini ve tespit zorluklarını puanlayarak test önceliklendirmesi yapmak.",
      "Geliştiricilerin kod yazım hızını artırmak için otomatik şablon üretmek.",
      "Kaynak kodun sözdizimsel hatalarını otomatik düzeltmek."
    ],
    "answer": 1
  },
  {
    "id": 18,
    "chapter": 1,
    "topic": "SDLC - Waterfall vs Agile",
    "question": "Şelale (Waterfall) modeli ile Çevik (Agile/DevOps) modellerde test mühendisinin çalışma biçimi arasındaki en temel fark nedir?",
    "options": [
      "Waterfall'da test geliştirme ile paralel başlar; Agile'da ise tüm yazılım bittikten sonra başlar.",
      "Waterfall'da test genellikle kodlama bittikten sonra ayrı bir aşama olarak yürütülür; Agile'da ise her sprintte ve CI/CD hattında sürekli olarak geliştirme ile iç içedir.",
      "Waterfall modellerinde otomatik test yapılırken, Agile modellerde yalnızca manuel test uygulanır.",
      "Waterfall'da test mühendisi bulunmaz, testleri doğrudan proje yöneticisi yapar."
    ],
    "answer": 1
  },
  {
    "id": 19,
    "chapter": 1,
    "topic": "Test Seviyeleri Hiyerarşisi",
    "question": "Yazılım test seviyelerinin en dar kapsamdan en geniş kapsama doğru hiyerarşik sıralaması hangi seçenekte doğrudur?",
    "options": [
      "Kabul Testi → Sistem Testi → Entegrasyon Testi → Birim Testi",
      "Birim Testi → Entegrasyon Testi → Sistem Testi → Kabul Testi",
      "Entegrasyon Testi → Birim Testi → Sistem Testi → Kabul Testi",
      "Birim Testi → Sistem Testi → Entegrasyon Testi → Kabul Testi"
    ],
    "answer": 1
  },
  {
    "id": 20,
    "chapter": 1,
    "topic": "Birim Testi (Unit Testing) Kapsamı",
    "question": "Birim Testinin (Unit Testing) kapsamı ve temel çalışma biçimi nedir?",
    "options": [
      "Tüm sistemin canlı veritabanı ve harici ödeme sağlayıcıları ile olan uçtan uca etkileşimini doğrulamak.",
      "En küçük test edilebilir kod parçalarını (fonksiyon, metot, sınıf) diğer bağımlılıklarından izole ederek test etmek.",
      "Kullanıcı arayüzünde butonlara tıklayarak sayfalar arası geçişleri incelemek.",
      "Yazılımın yüksek yük altındaki bellek sızıntılarını ölçmek."
    ],
    "answer": 1
  },
  {
    "id": 21,
    "chapter": 1,
    "topic": "Entegrasyon Testi Kapsamı",
    "question": "Entegrasyon Testinin (Integration Testing) temel odak noktası nedir?",
    "options": [
      "Tek bir fonksiyonun algoritma doğruluğu.",
      "Birlikte çalışan bileşenler, modüller veya harici alt sistemler arasındaki arayüzler ve veri alışverişi.",
      "Müşteri sözleşmesindeki hukuki şartların uygunluğu.",
      "Yalnızca CSS ve HTML stillerinin tarayıcı uyumluluğu."
    ],
    "answer": 1
  },
  {
    "id": 22,
    "chapter": 1,
    "topic": "Sistem Testi Kapsamı",
    "question": "Sistem Testi (System Testing) aşamasında test edilen kapsam nedir?",
    "options": [
      "Yalnızca izole edilmiş tek bir sınıfın değişkenleri.",
      "Tüm modülleri bir araya getirilmiş, uçtan uca eksiksiz ve entegre sistemin fonksiyonel ve fonksiyonel olmayan gereksinimleri.",
      "Geliştiricilerin yerel makinesindeki derleme logları.",
      "Ürünün kaynak kodundaki değişken adlandırma standartları."
    ],
    "answer": 1
  },
  {
    "id": 23,
    "chapter": 1,
    "topic": "Kabul Testi (Acceptance Testing)",
    "question": "Kabul Testinin (Acceptance / UAT) diğer test seviyelerinden en belirgin farkı nedir?",
    "options": [
      "Geliştiriciler tarafından kod seviyesinde debug işlemi yapılmasıdır.",
      "Sistemin iş ihtiyaçlarını karşıladığının ve son kullanıcılar / paydaşlar tarafından onaylanmaya hazır olduğunun doğrulanmasıdır.",
      "Kod kapsama oranının (Code coverage) %100 olduğunu matematiksel olarak kanıtlamaktır.",
      "Postman üzerinden birim test yazmaktır."
    ],
    "answer": 1
  },
  {
    "id": 24,
    "chapter": 1,
    "topic": "Test Mühendisi Teknik Sorumlulukları",
    "question": "Aşağıdakilerden hangisi modern bir Test Mühendisinin teknik sorumlulukları arasında doğrudan yer alır?",
    "options": [
      "Şirketin finansal bütçesini planlamak ve maaş bordrolarını onaylamak.",
      "Farklı test seviyelerinde test senaryoları tasarlamak, test otomasyon çatıları kurmak ve CI/CD süreçlerine testleri entegre etmek.",
      "Müşterilerle satış sözleşmelerini imzalamak.",
      "Yazılımın sunucu donanım parçalarını fiziksel olarak üretmek."
    ],
    "answer": 1
  },
  {
    "id": 25,
    "chapter": 1,
    "topic": "Test Mühendisi İşbirlikçi Sorumlulukları",
    "question": "Modern test mühendisliğinde işbirlikçi (collaborative) sorumluluklar kapsamında aşağıdakilerden hangisi vurgulanır?",
    "options": [
      "Test mühendisinin diğer geliştiricilerle hiçbir iletişim kurmadan tek başına çalışması.",
      "Gereksinim incelemelerine katılmak, geliştiriciler ve ürün sahipleri ile birlikte 'test edilebilirlik' (testability) kriterlerini belirlemek.",
      "Yalnızca üretim ortamındaki canlı sunucu çöktüğünde devreye girmek.",
      "Tüm kod tabanını baştan tek başına yazmak."
    ],
    "answer": 1
  },
  {
    "id": 26,
    "chapter": 1,
    "topic": "Etik ve Profesyonellik",
    "question": "ACM/IEEE ve ISTQB standartlarına göre bir Test Mühendisinin mesleki etik ilkeleri arasında aşağıdakilerden hangisi yer alır?",
    "options": [
      "Yöneticileri mutlu etmek için kritik hataları gizlemek.",
      "Riskleri ve belirsizlikleri dürüstçe raporlamak; Kişisel Verileri (PII) korumak ve tarafsız değerlendirme yapmak.",
      "Sadece şirketin hisse değerini koruyacak test sonuçlarını paylaşmak.",
      "Müşterinin gerçek ortam verilerini kendi kişisel cihazlarına kopyalamak."
    ],
    "answer": 1
  },
  {
    "id": 27,
    "chapter": 1,
    "topic": "ISTQB Sertifikasyon Yolu",
    "question": "Yazılım test uzmanlığı alanında uluslararası geçerliliği olan temel düzey ISTQB sertifikası hangisidir?",
    "options": [
      "CTFL (Certified Tester Foundation Level)",
      "CTAL-TM (Test Manager)",
      "PMP (Project Management Professional)",
      "AWS Certified Solutions Architect"
    ],
    "answer": 0
  },
  {
    "id": 28,
    "chapter": 1,
    "topic": "Standartlar: ISO/IEC/IEEE 29119",
    "question": "ISO/IEC/IEEE 29119 standart ailesi yazılım mühendisliğinde hangi alanı tanımlamak ve yönlendirmek için oluşturulmuştur?",
    "options": [
      "Donanım devre kartı tasarım standartları",
      "Yazılım testi süreçleri, kavramları, dokümantasyonu ve test teknikleri",
      "Veritabanı ilişkisel modelleme kuralları",
      "Ağ kablolama ve yönlendirici protokolleri"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "chapter": 1,
    "topic": "Hata Bulma Maliyeti Eğrisi",
    "question": "Yazılım mühendisliğindeki bilinen 'Hata Maliyeti Eğrisi'ne (Cost of Quality) göre, bir hatanın gereksinim aşamasında bulunması ile üretim (production) aşamasında bulunması arasındaki fark nedir?",
    "options": [
      "Üretim aşamasında bulunan hatayı düzeltmek gereksinim aşamasına göre katbekat (onlarca/yüzlerce kat) daha maliyetlidir.",
      "İkisi arasında hiçbir maliyet farkı yoktur.",
      "Gereksinim aşamasında hata düzeltmek üretim ortamından daha pahalıdır.",
      "Üretimde bulunan hatalar hiçbir zaman maliyet oluşturmaz."
    ],
    "answer": 0
  },
  {
    "id": 30,
    "chapter": 1,
    "topic": "Test Tasarım Teknikleri",
    "question": "Birden fazla koşulun ve iş mantığı kombinasyonlarının olduğu durumlarda en uygun test tasarım tekniği hangisidir?",
    "options": [
      "Yalnızca Sınır Değer Analizi (BVA)",
      "Karar Tablosu Testi (Decision Table Testing)",
      "Rastgele Veri Girişi (Monkey Testing)",
      "Bileşen İçi Değişken Adı Analizi"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "chapter": 1,
    "topic": "ISO 25010 - Portability",
    "question": "ISO/IEC 25010 standardında bir yazılımın farklı donanım, işletim sistemi veya yazılım ortamlarına aktarılabilme yeteneği hangi karakteristik ile adlandırılır?",
    "options": [
      "Compatibility (Uyumluluk)",
      "Portability (Taşınabilirlik)",
      "Maintainability (Bakım Yapılabilirlik)",
      "Modularity (Modülerlik)"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "chapter": 1,
    "topic": "Gereksinim İncelemesi (Review)",
    "question": "Bir gereksinim belgesinde yer alan 'Sistem çok hızlı ve son derece kullanıcı dostu olmalıdır' ifadesi test edilebilirlik açısından nasıl değerlendirilir?",
    "options": [
      "Kusursuz ve net bir gereksinimdir, hemen test kodu yazılabilir.",
      "Ölçülebilir ve doğrulanabilir kriterler (örn. yanıt süresi < 200 ms) içermediği için test edilemez (untestable / ambiguous) bir ifadedir.",
      "Yalnızca birim testleri ile doğrudan doğrulanabilir.",
      "Bu ifade bir fonksiyonel uygunluk standardıdır."
    ],
    "answer": 1
  },
  {
    "id": 33,
    "chapter": 1,
    "topic": "Test Kapsamlılığı İlkesi",
    "question": "'Her şeyi test etmek (Exhaustive Testing) imkansızdır' prensibi karşısında bir test mühendisinin izlemesi gereken en profesyonel yaklaşım nedir?",
    "options": [
      "Test yapmaktan tamamen vazgeçip yazılımı doğrudan canlıya almak.",
      "Risk analizi, eşdeğerlik payları ve sınır değer analizi kullanarak en yüksek hata bulma olasılığına sahip temsili test senaryolarını seçmek.",
      "Sadece geliştiricinin güvendiği tek bir senaryoyu koşturmak.",
      "Yalnızca kullanıcı arayüzündeki renk uyumunu denetlemek."
    ],
    "answer": 1
  },
  {
    "id": 34,
    "chapter": 2,
    "topic": "Birim Testi Tanımı",
    "question": "Birim Testi (Unit Testing) ile ilgili aşağıdakilerden hangisi temel bir kuraldır?",
    "options": [
      "Birim testleri her zaman gerçek bir veritabanına ve harici API'ye bağlı çalışmalıdır.",
      "Birim testi, tek bir sınıfı veya fonksiyonu harici bağımlılıklarından izole ederek bağımsız olarak test eder.",
      "Birim testleri yalnızca sistemin son kullanıcıları tarafından koşturulur.",
      "Birim testlerinde hiçbir zaman assertion (iddia/doğrulama) kullanılmaz."
    ],
    "answer": 1
  },
  {
    "id": 35,
    "chapter": 2,
    "topic": "Test Piramidi Oranları",
    "question": "Ders slaytlarında ve test mühendisliği literatüründe kabul gören ideal Test Piramidi (Test Pyramid) oranları hangi seçenekte doğru verilmiştir?",
    "options": [
      "Birim Testleri: %10, Entegrasyon/Sistem Testleri: %20, GUI/Uçtan Uca Testler: %70",
      "Birim Testleri: %70, Sistem/Entegrasyon Testleri: %20, GUI/Uçtan Uca Testler: %10",
      "Birim Testleri: %33, Sistem Testleri: %33, GUI Testleri: %33",
      "Birim Testleri: %50, Entegrasyon Testleri: %50, GUI Testleri: %0"
    ],
    "answer": 1
  },
  {
    "id": 36,
    "chapter": 2,
    "topic": "Test Piramidi Mantığı",
    "question": "Test Piramidinin tabanında neden en yüksek oranda (%70) Birim Testlerinin bulunması önerilir?",
    "options": [
      "Çünkü birim testleri en pahalı ve çalışması en yavaş testlerdir.",
      "Çünkü birim testleri milisaniyeler içinde çok hızlı çalışır, ucuzdur, hata kaynağını tam satır olarak izole eder ve regresyonu önler.",
      "Çünkü birim testleri yazıldığında entegrasyon testlerine gerek kalmaz.",
      "Çünkü birim testleri doğrudan tarayıcıyı ayağa kaldırır."
    ],
    "answer": 1
  },
  {
    "id": 37,
    "chapter": 2,
    "topic": "GUI Testlerinin Sınırları",
    "question": "Piramidin en tepesindeki GUI / Uçtan Uca (E2E) testlerin oranının küçük (%10) tutulmasının temel sebebi nedir?",
    "options": [
      "Kullanıcı arayüzünün hiç test edilmek istenmemesi.",
      "GUI testlerinin çalışmasının yavaş olması, kırılgan (brittle) yapıda olması ve bakım maliyetinin çok yüksek olması.",
      "GUI testlerinin hiçbir geliştirici tarafından anlaşılamaması.",
      "Tarayıcıların test çalıştırmayı desteklememesi."
    ],
    "answer": 1
  },
  {
    "id": 38,
    "chapter": 2,
    "topic": "Beyaz Kutu vs Siyah Kutu",
    "question": "Beyaz Kutu (White Box) ve Siyah Kutu (Black Box) test yaklaşımları arasındaki temel fark nedir?",
    "options": [
      "Beyaz kutu testinde iç kod yapısı ve mimari bilinir ve doğrudan koda bakılarak test yazılır; Siyah kutu testinde ise iç kod bilinmeden yalnızca şartname ve arayüze göre test yapılır.",
      "Beyaz kutu testleri yalnızca manuel yapılır; siyah kutu testleri otomatiktir.",
      "Beyaz kutu testleri sadece donanımı; siyah kutu testleri sadece yazılımı test eder.",
      "Beyaz kutu testinde hiçbir girdi verilmez, sadece çıktılar izlenir."
    ],
    "answer": 0
  },
  {
    "id": 39,
    "chapter": 2,
    "topic": "Statik vs Dinamik Test Sınıflandırması",
    "question": "'Kodu çalıştırıyor mu?' ve 'Kodun içine bakıyor mu?' sorularına göre yapılan test sınıflandırmasında aşağıdakilerden hangisi doğrudur?",
    "options": [
      "Kodu çalıştırmadan yapılan test Dinamik Testtir.",
      "Kodu çalıştırarak yapılan test Dinamik Testtir; kodu çalıştırmadan inceleme yapılan test ise Statik Testtir.",
      "Siyah kutu testinde her zaman kodun kaynak satırlarına bakılır.",
      "Birim testleri statik test kategorisine girer."
    ],
    "answer": 1
  },
  {
    "id": 40,
    "chapter": 2,
    "topic": "AAA Kalıbı Genel",
    "question": "Birim testlerinde dünya standardı olan AAA kalıbının açılımı ve sırası nedir?",
    "options": [
      "Action - Analyze - Apply",
      "Arrange - Act - Assert",
      "Assert - Arrange - Act",
      "Allocate - Compute - Terminate"
    ],
    "answer": 1
  },
  {
    "id": 41,
    "chapter": 2,
    "topic": "AAA - Arrange Adımı",
    "question": "AAA kalıbında 'Arrange' aşamasında gerçekleştirilen ana işlem nedir?",
    "options": [
      "Test edilen fonksiyonu çağırmak.",
      "Beklenen sonuç ile gerçekleşen sonucu kıyaslamak.",
      "Test edilecek nesneleri oluşturmak, girdileri hazırlamak ve ön koşulları (preconditions) kurmak.",
      "Test bittikten sonra log dosyalarını temizlemek."
    ],
    "answer": 2
  },
  {
    "id": 42,
    "chapter": 2,
    "topic": "AAA - Act Adımı",
    "question": "AAA kalıbında 'Act' aşamasında gerçekleştirilen ana işlem nedir?",
    "options": [
      "Test senaryosunun beklenen çıktısını belirlemek.",
      "Test edilen davranışı / hedef metodu çağırmak ve sonucu elde etmek.",
      "Veritabanı bağlantılarını yapılandırmak.",
      "Test raporunu e-posta ile göndermek."
    ],
    "answer": 1
  },
  {
    "id": 43,
    "chapter": 2,
    "topic": "AAA - Assert Adımı",
    "question": "AAA kalıbında 'Assert' aşamasının birim testindeki temel fonksiyonu nedir?",
    "options": [
      "Elde edilen gerçek çıktının (actual), şartnamenin gerektirdiği beklenen sonuçla (expected) eşleştiğini doğrulamak.",
      "Yazılan kodun derlenip derlenmediğini kontrol etmek.",
      "Kullanıcıya bildirim penceresi göstermek.",
      "Test edilen metodu sonsuz döngüye sokmak."
    ],
    "answer": 0
  },
  {
    "id": 44,
    "chapter": 2,
    "topic": "Assertion Rolü",
    "question": "Ders slaytlarına göre: 'Assertions replace us humans in checking that the software does what it should.' ifadesinin anlamı nedir?",
    "options": [
      "Yazılımcıların yerini yapay zekanın almasıdır.",
      "İddialar (assertions), yazılımın beklenen davranışı sergileyip sergilemediğini manuel insan gözü yerine otomatik olarak denetler.",
      "Assertion yazmak insan hatalarını tamamen ortadan kaldırır.",
      "Assertion olmadan da otomatik testler hata yakalayabilir."
    ],
    "answer": 1
  },
  {
    "id": 45,
    "chapter": 2,
    "topic": "Birim Test Çatıları: JUnit ve NUnit",
    "question": "Java dünyasında JUnit ne anlama geliyorsa, .NET / C# dünyasında karşılığı olan popüler açık kaynaklı test çatısı hangisidir?",
    "options": [
      "PyTest",
      "NUnit",
      "Mocha",
      "Selenium"
    ],
    "answer": 1
  },
  {
    "id": 46,
    "chapter": 2,
    "topic": "Test Fikstürleri - SetUp",
    "question": "JUnit'teki `@BeforeEach` veya NUnit'teki `[SetUp]` etiketinin temel görevi nedir?",
    "options": [
      "Test sınıfı çalışmadan önce tüm testleri kalıcı olarak silmek.",
      "Her bir test metodundan önce çalışarak test ortamını ve ortak nesneleri taze (fresh) bir başlangıç durumuna getirmek.",
      "Yalnızca başarısız olan testlerin ardından çalışmak.",
      "Testleri paralel olarak sunucuya dağıtmak."
    ],
    "answer": 1
  },
  {
    "id": 47,
    "chapter": 2,
    "topic": "Test Fikstürleri - TearDown",
    "question": "JUnit'teki `@AfterEach` veya NUnit'teki `[TearDown]` etiketinin ana kullanım amacı nedir?",
    "options": [
      "Her test metodundan sonra çalışarak açık kaynakları, geçici dosyaları veya bellek durumunu temizlemek (cleanup).",
      "Test senaryolarının kodunu yeniden yazmak.",
      "Tüm testleri otomatik olarak başarılı saymak.",
      "Geliştiriciye bir sonraki görevi atamak."
    ],
    "answer": 0
  },
  {
    "id": 48,
    "chapter": 2,
    "topic": "BankAccount Örneği - Pozitif Senaryo",
    "question": "Bir `BankAccount` sınıfında başlangıç bakiyesi 100 TL iken `account.deposit(50)` çağrılıyor. Doğru assert ifadesi hangisidir?",
    "options": [
      "assertEquals(100, account.getBalance());",
      "assertEquals(150, account.getBalance());",
      "assertEquals(50, account.getBalance());",
      "assertNull(account.getBalance());"
    ],
    "answer": 1
  },
  {
    "id": 49,
    "chapter": 2,
    "topic": "BankAccount Örneği - İstisna (Exception) Testi",
    "question": "Bir banka hesabı metodunda `account.withdraw(-50)` gibi negatif bir miktar çekilmeye çalışıldığında veya bakiye yetersiz olduğunda ne doğrulanmalıdır?",
    "options": [
      "İşlemin sessizce geçiştirilip bakiyenin sıfırlanması.",
      "Metodun beklenen bir istisna (örn. `ArgumentOutOfRangeException` veya `IllegalArgumentException`) fırlattığının assert edilmesi.",
      "Paranın negatif olarak hesaba eklenmesi.",
      "Testin otomatik olarak iptal edilmesi."
    ],
    "answer": 1
  },
  {
    "id": 50,
    "chapter": 2,
    "topic": "Birim Testinin Avantajları",
    "question": "Aşağıdakilerden hangisi birim testlerinin yazılım geliştirme sürecine sağladığı doğrudan avantajlardan biridir?",
    "options": [
      "Sistemdeki tüm donanım arızalarını önceden haber vermesi.",
      "Yeniden yapılandırma (refactoring) sırasında mevcut davranışın bozulmadığına dair güvenli bir emniyet ağı (safety net) sağlaması.",
      "Kullanıcı kabul testlerine olan ihtiyacı tamamen ortadan kaldırması.",
      "Veritabanı sunucusunun hızını iki katına çıkarması."
    ],
    "answer": 1
  },
  {
    "id": 51,
    "chapter": 2,
    "topic": "Birim Testi ve Regresyon",
    "question": "Yazılıma yeni bir özellik eklendiğinde eski özelliklerin bozulmadığını kontrol etmeye ne ad verilir ve birim testleri burada nasıl bir rol oynar?",
    "options": [
      "Yük testi - Birim testleri sistemi aşırı yükler.",
      "Regresyon Testi - Birim testleri her derlemede otomatik koşularak regresyonları anında yakalar.",
      "Kullanılabilirlik testi - Birim testleri ekran tasarımlarını denetler.",
      "Statik analiz - Birim testleri sadece kod sözdizimini kontrol eder."
    ],
    "answer": 1
  },
  {
    "id": 52,
    "chapter": 2,
    "topic": "Birim Testinin Sınırları - Geliştirici Bağımlılığı",
    "question": "Ders slaytlarında birim testlerinin bir dezavantajı olarak belirtilen 'Dependence on Developers' neyi ifade eder?",
    "options": [
      "Birim testlerinin kalitesinin, testi yazan geliştiricinin yetkinliğine, dikkatine ve kapsamlı senaryo tasarlama becerisine bağımlı olmasını.",
      "Geliştiricilerin test yazarken yöneticiden izin almak zorunda olmasını.",
      "Testlerin sadece tek bir geliştiricinin bilgisayarında çalışabilmesini.",
      "Geliştirici işten ayrılınca testlerin otomatik olarak silinmesini."
    ],
    "answer": 0
  },
  {
    "id": 53,
    "chapter": 2,
    "topic": "Birim Testinin Sınırları - Etkileşimler",
    "question": "Birim testleri mükemmel şekilde geçen iki farklı sınıf (Unit) bir araya geldiğinde sistem neden hala hata verebilir?",
    "options": [
      "Çünkü birim testleri tek tek sınıfları izole test eder; sınıflar arasındaki arayüz, protokol ve veri formatı uyuşmazlıklarını (etkileşimleri) yakalayamaz.",
      "Çünkü birim testleri her zaman hatalı sonuç üretir.",
      "Çünkü işlemci birim testlerinden sonra yorulur.",
      "Çünkü derleyici sınıfları birleştirmeyi reddeder."
    ],
    "answer": 0
  },
  {
    "id": 54,
    "chapter": 2,
    "topic": "Birim Testinin Sınırları - Arayüz (UI)",
    "question": "Ders slaytlarında belirtildiği üzere, birim testleri neden Kullanıcı Arayüzü (User Interface - UI) testi için uygun değildir?",
    "options": [
      "Çünkü UI kodu derlenmez.",
      "Çünkü birim testleri tekil mantıksal birimlerin işlevine odaklanır; ekran öğelerinin görsel yerleşimi, css stilleri ve kullanıcı deneyimi için yetersiz kalır.",
      "Çünkü birim testleri yalnızca C dilinde yazılır.",
      "Çünkü tarayıcılar birim testlerini güvenlik gerekçesiyle engeller."
    ],
    "answer": 1
  },
  {
    "id": 55,
    "chapter": 2,
    "topic": "Aşırı Otomasyona Güven (False Sense of Security)",
    "question": "Ders notlarında yer alan 'Over-reliance on Automation' (Otomasyona Aşırı Güven) uyarısı neyi vurgulamaktadır?",
    "options": [
      "Tüm otomatik testlerin geçmesinin sistemde hiçbir hata veya tasarım açığı kalmadığı anlamına gelmeyeceğini, sahte bir güvenlik hissi yaratabileceğini.",
      "Otomatik testlerin asla çalıştırılmaması gerektiğini.",
      "Test otomasyonunun manuel testten her zaman daha ucuz olduğunu.",
      "Yalnızca tek bir test otomasyon aracının kullanılması gerektiğini."
    ],
    "answer": 0
  },
  {
    "id": 56,
    "chapter": 2,
    "topic": "Bakım Yükü (Maintenance Overhead)",
    "question": "Yazılım mimarisi değiştikçe birim testlerinin karşılaştığı 'Maintenance Overhead' durumu nedir?",
    "options": [
      "Testlerin sunucuda çok fazla disk alanı kaplaması.",
      "Üretim kodu geliştikçe ve gereksinimler değiştikçe, test senaryolarının da sürekli güncellenmesi ve bakımının yapılması gerekmesi.",
      "Testlerin her ay yeniden satın alınmasının gerekmesi.",
      "Test kodlarının sadece eski işletim sistemlerinde çalışması."
    ],
    "answer": 1
  },
  {
    "id": 57,
    "chapter": 2,
    "topic": "Manuel Birim Testinin Sorunları",
    "question": "Manuel birim testinin günümüz modern yazılım mühendisliğinde tercih edilmemesinin temel nedenleri nelerdir?",
    "options": [
      "Çok zaman alması, her kod değişiminde tekrarlanmasının maliyetli olması, insan hatasına açık olması ve bileşen izolasyonunun zorluğu.",
      "Geliştiricilerin klavye kullanmasını yasaklaması.",
      "İnternet bağlantısı olmadan yapılamaması.",
      "Yalnızca süper bilgisayarlarda çalışabilmesi."
    ],
    "answer": 0
  },
  {
    "id": 58,
    "chapter": 2,
    "topic": "TDD Felsefesi Giriş",
    "question": "Test Odaklı Geliştirme (TDD) yaklaşımının merkezindeki temel prensip hangisidir?",
    "options": [
      "Kodu yazıp bitirdikten 3 ay sonra test senaryosu hazırlamak.",
      "Üretim kodunu yazmadan önce başarısız olacak testi yazmak (Test-First).",
      "Yalnızca müşteri şikayet ettiğinde test yazmak.",
      "Test yazımını stajyerlere devretmek."
    ],
    "answer": 1
  },
  {
    "id": 59,
    "chapter": 2,
    "topic": "CI/CD ve Birim Testleri",
    "question": "DevOps ve CI/CD süreçlerinde birim testlerinin her kod 'push' veya 'pull request' işleminde otomatik koşulmasının amacı nedir?",
    "options": [
      "Geliştiricilerin bilgisayarını kilitlemek.",
      "Kod değişikliklerinin mevcut sistemi bozup bozmadığını saniyeler içinde doğrulayarak hatalı kodun ana dala (main branch) girmesini engellemek.",
      "Sunucu faturalarını artırmak.",
      "Kullanıcıya her dakika e-posta göndermek."
    ],
    "answer": 1
  },
  {
    "id": 60,
    "chapter": 2,
    "topic": "Hata Terminolojisi: Error (Mistake)",
    "question": "Yazılım mühendisliği terminolojisinde 'Error' (Hata/Yanılgı) kavramı neyi ifade eder?",
    "options": [
      "Sistemin kullanıcıya yanlış bakiye göstermesi olayını.",
      "Bir yazılımcının gereksinimi yanlış anlaması veya yanlış kod yazması gibi insanın yaptığı yanlış eylemi.",
      "Diskin fiziksel olarak bozulmasını.",
      "Veritabanı tablosundaki satır sayısını."
    ],
    "answer": 1
  },
  {
    "id": 61,
    "chapter": 2,
    "topic": "Hata Terminolojisi: Fault (Defect/Bug)",
    "question": "Yazılım kaynak kodunda veya bir dokümanda yer alan kusura / hataya (örn. `i <= n` yerine yanlışlıkla `i < n` yazılmasına) ne ad verilir?",
    "options": [
      "Failure",
      "Fault (Defect / Bug)",
      "Error",
      "Incident"
    ],
    "answer": 1
  },
  {
    "id": 62,
    "chapter": 2,
    "topic": "Hata Terminolojisi: Failure (Başarısızlık)",
    "question": "Bir program çalışırken beklenen davranışından saptığında ve kullanıcıya yanlış sonuç gösterdiğinde (veya çöktüğünde) ortaya çıkan duruma ne ad verilir?",
    "options": [
      "Error",
      "Failure (Başarısızlık)",
      "Fault",
      "Mistake"
    ],
    "answer": 1
  },
  {
    "id": 63,
    "chapter": 2,
    "topic": "Error - Fault - Failure İlişkisi",
    "question": "İnsan, kod ve sistem çıktısı ekseninde Error, Fault ve Failure arasındaki neden-sonuç zinciri hangi seçenekte doğru sıralanmıştır?",
    "options": [
      "Failure → Fault → Error",
      "Error (İnsan hatası) → Fault (Koddaki kusur/bug) → Failure (Sistemin yanlış çıktısı/çökmesi)",
      "Fault → Error → Failure",
      "Failure → Error → Fault"
    ],
    "answer": 1
  },
  {
    "id": 64,
    "chapter": 2,
    "topic": "Birim Testi Kapsamı (Scope)",
    "question": "Bir birim testinin kapsamı (Scope) tanımlanırken aşağıdakilerden hangisi bir 'Unit' (Birim) olarak kabul edilebilir?",
    "options": [
      "Tek bir fonksiyon, tek bir metot veya tek bir sınıf",
      "Tüm mikroservis kümesi ve Kubernetes podları",
      "Şirketin tüm ERP veritabanı",
      "Kullanıcının ödeme yaptığı harici banka gateway sistemi"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "chapter": 2,
    "topic": "İdeal Birim Testinin Özellikleri",
    "question": "Aşağıdakilerden hangisi kaliteli bir birim testinin taşıması gereken özelliklerden (Fast, Isolated, Repeatable) biri DEĞİLDİR?",
    "options": [
      "Hızlı çalışması (milisaniyeler seviyesinde)",
      "Tekrarlanabilir olması (aynı girdiyle her zaman aynı sonucu vermesi)",
      "Başka testlerin çalışma sırasına ve veritabanı durumuna sıkı sıkıya bağımlı olması",
      "Açık ve anlaşılır bir AAA yapısına sahip olması"
    ],
    "answer": 2
  },
  {
    "id": 66,
    "chapter": 2,
    "topic": "Test Odaklı Geliştirme Zamanlaması",
    "question": "Ders slaytlarındaki geliştirme felsefesine göre, testlerin yazılım koduna kıyasla geliştirilme zamanı nasıl olmalıdır?",
    "options": [
      "Yazılım canlıya çıktıktan en az 6 ay sonra yazılmalıdır.",
      "Uygulama koduyla paralel olarak veya KODDAN ÖNCE (in parallel with application code or before) geliştirilmelidir.",
      "Sadece ürün sahibi onay verirse yazılmalıdır.",
      "Yalnızca haftasonları gece saatlerinde yazılmalıdır."
    ],
    "answer": 1
  },
  {
    "id": 67,
    "chapter": 3,
    "topic": "İleri Düzey Birim Testi Amacı",
    "question": "İleri Düzey Birim Testi (Advanced Unit Testing) anlayışında testlerin temel rolü nasıl tanımlanır?",
    "options": [
      "Yalnızca hata yakalayan bir güvenlik ağı (bug net) olmaktan çıkıp, yazılım mimarisini ve kod tasarımını şekillendiren bir araç (design tool) haline gelmesidir.",
      "Testlerin tamamen manuel ekibe devredilmesidir.",
      "Tüm projenin tek bir devasa fonksiyon içinde test edilmesidir.",
      "Yalnızca donanım çiplerinin voltaj değerlerini ölçmesidir."
    ],
    "answer": 0
  },
  {
    "id": 68,
    "chapter": 3,
    "topic": "TDD Döngüsü",
    "question": "Test Odaklı Geliştirme (TDD) yaklaşımının ünlü döngüsü hangi sırayla gerçekleşir?",
    "options": [
      "Refactor → Red → Green",
      "Red → Green → Refactor",
      "Green → Red → Refactor",
      "Code → Test → Deploy"
    ],
    "answer": 1
  },
  {
    "id": 69,
    "chapter": 3,
    "topic": "TDD - RED Aşaması",
    "question": "TDD'nin 'RED' aşamasında geliştirici tam olarak ne yapar?",
    "options": [
      "Tüm kodu bitirip hata veren satırları kırmızıyla boyar.",
      "Henüz yazılmamış küçük bir işlev/davranış için başarısız olan (failing) minimal bir test yazar.",
      "Kod tabanındaki tüm sınıfları siler.",
      "Sunucuya acil durum sinyali gönderir."
    ],
    "answer": 1
  },
  {
    "id": 70,
    "chapter": 3,
    "topic": "TDD - GREEN Aşaması",
    "question": "TDD'nin 'GREEN' aşamasındaki temel prensip nedir?",
    "options": [
      "Yazılan başarısız testi geçirecek en az ve minimal kodu (minimal code) yazarak testi başarıya ulaştırmak.",
      "Sistemin tüm gelecekteki özelliklerini aynı anda kodlamak.",
      "Kodu çalıştırmadan test kodunu silmek.",
      "Testin assertion satırını yorum satırı haline getirmek."
    ],
    "answer": 0
  },
  {
    "id": 71,
    "chapter": 3,
    "topic": "TDD - REFACTOR Aşaması",
    "question": "TDD'nin 'REFACTOR' aşamasında ne amaçlanır ve testler burada nasıl bir rol oynar?",
    "options": [
      "Sistemin dış davranışını tamamen değiştirmek.",
      "Tüm testler yeşil durumdayken, testlerin sağladığı güvenlik ağı altında kodun tasarımını temizlemek, tekrarları gidermek ve okunabilirliği artırmak.",
      "Bozuk olan testleri düzeltmek.",
      "Yeni bir test ekleyerek sistemi kırmızıya döndürmek."
    ],
    "answer": 1
  },
  {
    "id": 72,
    "chapter": 3,
    "topic": "TDD Döngü Süresi",
    "question": "Ders slaytlarına göre TDD döngülerinin (Red-Green-Refactor) ideal süresi ne kadar olmalıdır?",
    "options": [
      "2 - 10 dakikalık kısa ve odaklanmış adımlar",
      "2 - 3 haftalık uzun sprintler",
      "Günde yalnızca bir kez (24 saat)",
      "En az 6 saat kesintisiz"
    ],
    "answer": 0
  },
  {
    "id": 73,
    "chapter": 3,
    "topic": "TDD Ne Değildir?",
    "question": "Aşağıdakilerden hangisi ders slaytlarında vurgulanan 'What TDD Is Not' (TDD Ne Değildir) maddelerinden biridir?",
    "options": [
      "TDD, kodu yazdıktan sonra test yazmak (tests after coding) değildir.",
      "TDD, baştan sona devasa mimari tasarımı önceden yapma (big upfront design) töreni değildir.",
      "TDD, uçtan uca (E2E) veya entegrasyon testlerinin alternatifi veya ikamesi değildir.",
      "Yukarıdakilerin hepsi"
    ],
    "answer": 3
  },
  {
    "id": 74,
    "chapter": 3,
    "topic": "TDD Faydaları - Tasarım",
    "question": "TDD ile geliştirilen bir kod tabanında mimari ve tasarım açısından en sık gözlenen olumlu etki nedir?",
    "options": [
      "Monolitik ve aşırı bağımlı (tightly coupled) spagetti kod oluşması.",
      "Yüksek kohezyon (cohesion), düşük kuplaj (coupling) ve kendiliğinden gelişen modüler tasarım (emergent design).",
      "Sınıfların hiçbir arayüz (interface) kullanmaması.",
      "Her sınıfın binlerce satırdan oluşması."
    ],
    "answer": 1
  },
  {
    "id": 75,
    "chapter": 3,
    "topic": "TDD Faydaları - Yaşayan Dokümantasyon",
    "question": "TDD ile yazılmış birim testlerin 'Self-documenting examples / Living documentation' (Yaşayan Doküman) olarak adlandırılmasının sebebi nedir?",
    "options": [
      "Testlerin bir Word dosyasına otomatik dönüştürülmesi.",
      "Testlerin sistemin nasıl çalışması gerektiğini gösteren, kodla senkronize ve her zaman güncel kalan çalışan örnekler olması.",
      "Test kodlarının sadece yöneticiler tarafından okunması.",
      "Testlerin her hafta yeniden yazılmak zorunda olması."
    ],
    "answer": 1
  },
  {
    "id": 76,
    "chapter": 3,
    "topic": "TDD Tuzakları - Brittle Tests",
    "question": "TDD uygulanırken yapılan en büyük hatalardan biri olan 'Over-specifying internals' (iç detayları aşırı belirleme) neye yol açar?",
    "options": [
      "Testlerin gereksiz yere kırılgan (brittle/fragile) hale gelmesine ve iç mantıkta yapılan en ufak refactor işleminde bozulmasına.",
      "Kodun derlenememesine.",
      "Tüm testlerin hızının artmasına.",
      "Sistemin internet erişiminin kesilmesine."
    ],
    "answer": 0
  },
  {
    "id": 77,
    "chapter": 3,
    "topic": "Test Tiyatrosu (Test Theater)",
    "question": "Ders slaytlarında geçen 'Test Theater' (Test Tiyatrosu) terimi ne anlama gelmektedir?",
    "options": [
      "Test mühendislerinin tiyatro oyunu sahnelemesi.",
      "Yüksek kod kapsama yüzdesi gösteren ancak gerçekte anlamlı assertion içermeyen ve hiçbir gerçek hatayı yakalamayan sahte testler.",
      "Yalnızca görsel arayüzü olan test otomasyon araçları.",
      "Geliştiricilerin canlı yayında test koşması."
    ],
    "answer": 1
  },
  {
    "id": 78,
    "chapter": 3,
    "topic": "Test Edilebilirlik Tasarımı",
    "question": "Bir kod tabanının kolay test edilebilir (Design for Testability) olması için aşağıdakilerden hangisi önerilir?",
    "options": [
      "Küresel değişkenler (global state) ve statik tekiller (static singletons) kullanmak.",
      "Bağımlılıkların Tersine Çevrilmesi (Dependency Inversion), arayüzler (interfaces) ve saf fonksiyonlar kullanmak.",
      "Tüm metotları 'private' yapıp dışarıdan erişimi tamamen engellemek.",
      "Tüm veritabanı sorgularını doğrudan UI butonlarının içine gömmek."
    ],
    "answer": 1
  },
  {
    "id": 79,
    "chapter": 3,
    "topic": "Test Dublörleri Taksonomisi",
    "question": "Gerard Meszaros tarafından tanımlanan ve ders slaytlarında yer alan 'Test Doubles' (Test Dublörleri) ailesinde kaç temel dublör türü bulunur?",
    "options": [
      "2 tür (Mock ve Stub)",
      "3 tür (Unit, Integration, System)",
      "5 tür (Dummy, Stub, Fake, Spy, Mock)",
      "7 tür (White, Black, Gray, Static, Dynamic, Smoke, Sanity)"
    ],
    "answer": 2
  },
  {
    "id": 80,
    "chapter": 3,
    "topic": "Test Dublörleri - Dummy",
    "question": "Bir test metoduna yalnızca parametre listesini doldurmak için iletilen, ancak test akışında ASLA çağrılmayan ve kullanılmayan dublör hangisidir?",
    "options": [
      "Dummy",
      "Mock",
      "Spy",
      "Fake"
    ],
    "answer": 0
  },
  {
    "id": 81,
    "chapter": 3,
    "topic": "Test Dublörleri - Stub",
    "question": "Test sırasında yapılan çağrılara önceden hazırlanmış sabit değerler (canned values/responses) döndüren ve test edilen koda dolaylı girdi sağlayan dublör hangisidir?",
    "options": [
      "Dummy",
      "Stub",
      "Spy",
      "Mock"
    ],
    "answer": 1
  },
  {
    "id": 82,
    "chapter": 3,
    "topic": "Test Dublörleri - Fake",
    "question": "Gerçekten çalışan bir iş mantığına sahip olan ancak üretim (production) için uygun olmayan basitleştirilmiş bir uygulama (örneğin: In-memory Veritabanı) hangi dublör türüdür?",
    "options": [
      "Fake",
      "Stub",
      "Dummy",
      "Mock"
    ],
    "answer": 0
  },
  {
    "id": 83,
    "chapter": 3,
    "topic": "Test Dublörleri - Spy",
    "question": "Gerçek bir nesneyi veya stub'ı sarmalayarak, kendisine hangi metotların kaç kez çağrıldığını ve hangi argümanların iletildiğini gizlice kaydeden dublör hangisidir?",
    "options": [
      "Dummy",
      "Spy (Casus)",
      "Fake",
      "Driver"
    ],
    "answer": 1
  },
  {
    "id": 84,
    "chapter": 3,
    "topic": "Test Dublörleri - Mock",
    "question": "Önceden belirlenmiş beklentilerle (expectations) programlanan ve test edilen nesnenin beklenen çağrıları doğru sıra ve parametrelerle yapıp yapmadığını (davranış doğrulaması) denetleyen dublör hangisidir?",
    "options": [
      "Mock",
      "Dummy",
      "Fake",
      "Stub"
    ],
    "answer": 0
  },
  {
    "id": 85,
    "chapter": 3,
    "topic": "Stub vs Mock Farkı",
    "question": "Stub ve Mock arasındaki en kritik kavramsal ayrım hangi seçenekte doğru açıklanmıştır?",
    "options": [
      "Stub davranış doğrulaması (Behavior verification) yapar; Mock durum doğrulaması (State verification) yapar.",
      "Stub dolaylı girdileri simüle ederek durum doğrulaması (State verification) için kullanılır; Mock ise dolaylı çıktıları ve metod çağrılarının etkileşimini (Behavior verification) doğrular.",
      "Stub yalnızca veritabanları için, Mock yalnızca web servisleri için kullanılır.",
      "Stub gerçek nesnedir, Mock ise sahte nesnedir."
    ],
    "answer": 1
  },
  {
    "id": 86,
    "chapter": 3,
    "topic": "Ne Zaman Mock Kullanılmalı?",
    "question": "Ders slaytlarında belirtilen kurallara göre, aşağıdakilerden hangisi Mock nesnesi kullanmak için EN UYGUN durumdur?",
    "options": [
      "Kendi yazdığımız basit matematiksel hesaplama fonksiyonları",
      "Sistem saatini, dış ağ isteklerini (HTTP), dosya sistemini veya harici ödeme servislerini taklit etmek",
      "Projenin temel veri modelleri (User, Product sınıfları)",
      "Saf (pure) sıralama algoritmaları"
    ],
    "answer": 1
  },
  {
    "id": 87,
    "chapter": 3,
    "topic": "Ne Zaman Mock KULLANILMAMALI?",
    "question": "Mock nesneleri ile ilgili 'When Not To Mock' kuralına göre aşağıdakilerden hangisini mock'lamak kötü bir pratiktir?",
    "options": [
      "Kendi veri modellerimizi (Domain Models), değer nesnelerimizi (Value Objects) veya saf algoritmaları",
      "Harici SMS gönderme servisini",
      "Üçüncü parti bulut depolama API'sini",
      "E-posta sunucusu bağlantısını"
    ],
    "answer": 0
  },
  {
    "id": 88,
    "chapter": 3,
    "topic": "Fakes vs Mocks Tercihi",
    "question": "Mümkün olduğu durumlarda karmaşık mock düzenekleri kurmak yerine 'Fake' (örn. in-memory repository) tercih edilmesinin sebebi nedir?",
    "options": [
      "Fake nesnelerin testleri daha gerçekçi, daha az kırılgan (less brittle) ve sürdürülebilir kılması.",
      "Fake nesnelerin derleyici tarafından doğrudan silinmesi.",
      "Fake nesnelerin her zaman internet bağlantısı gerektirmesi.",
      "Mock nesnelerinin hiçbir programlama dilinde desteklenmemesi."
    ],
    "answer": 0
  },
  {
    "id": 89,
    "chapter": 3,
    "topic": "Mocking Framework - Given / When / Then",
    "question": "Modern mock kütüphanelerinde (Mockito, Moq vb.) `when(service.getUser(1)).thenReturn(mockUser)` ifadesi hangi aşamaya karşılık gelir?",
    "options": [
      "Assert aşamasına",
      "Arrange (Beklenti ve dönüş değerini hazırlama) aşamasına",
      "Act aşamasına",
      "Teardown aşamasına"
    ],
    "answer": 1
  },
  {
    "id": 90,
    "chapter": 3,
    "topic": "Mocking Framework - Verify",
    "question": "Bir mock nesnesi üzerinde `verify(emailService, times(1)).send(...)` çağrısı yapmak neyi doğrular?",
    "options": [
      "Email servisinin sunucuya bağlandığını",
      "Email servisinin `send` metodunun belirtilen parametreyle tam olarak 1 kez çağrıldığını",
      "Emailin alıcıya ulaştığını",
      "Servisin kod satır sayısını"
    ],
    "answer": 1
  },
  {
    "id": 91,
    "chapter": 3,
    "topic": "Test İzolasyonu ve Sızıntı (Leakage)",
    "question": "Testler arasında 'Test Leakage' (Durum Sızıntısı) oluşmasını önlemek için her testin ardından ne yapılmalıdır?",
    "options": [
      "Test kütüphanesi yeniden yüklenmelidir.",
      "Ortak durum, mock nesneleri ve statik alanlar sıfırlanmalı (reset / teardown) ve testler birbirinden bağımsız koşmalıdır.",
      "Test dosyası silinip tekrar oluşturulmalıdır.",
      "İşletim sistemi yeniden başlatılmalıdır."
    ],
    "answer": 1
  },
  {
    "id": 92,
    "chapter": 3,
    "topic": "Test Kokuları: Flaky Tests",
    "question": "Aynı kod üzerinde hiçbir değişiklik yapılmadığı halde bazen başarılı olan bazen de başarısız olan (deterministik olmayan) testlere ne ad verilir?",
    "options": [
      "Flaky Test",
      "Smoke Test",
      "Unit Test",
      "Stress Test"
    ],
    "answer": 0
  },
  {
    "id": 93,
    "chapter": 3,
    "topic": "Flaky Testlerin Nedenleri",
    "question": "Aşağıdakilerden hangisi bir testin 'Flaky' (kararsız) olmasına en sık yol açan etkenlerden biridir?",
    "options": [
      "Eşzamanlılık (concurrency / race conditions), sistem saatine bağımlılık ve paylaşılan küresel durum",
      "Testin çok kısa olması",
      "Kodda çok fazla açıklama satırı bulunması",
      "Test metodunun isminin İngilizce olması"
    ],
    "answer": 0
  },
  {
    "id": 94,
    "chapter": 3,
    "topic": "Test Kokuları: Fragile Tests",
    "question": "Sistemin dış davranışında hiçbir değişiklik olmamasına rağmen, en ufak bir iç kod refactoring işleminde derhal çöken test kokusu hangisidir?",
    "options": [
      "Fragile / Brittle Test (Kırılgan Test)",
      "Flaky Test",
      "Robust Test",
      "E2E Test"
    ],
    "answer": 0
  },
  {
    "id": 95,
    "chapter": 3,
    "topic": "Test Kokuları: Obscure Tests",
    "question": "'Obscure Test' kokusu ne anlama gelir?",
    "options": [
      "Gereksiz karmaşıklık, aşırı uzun kurulum adımları veya anlamsız veriler nedeniyle neyi test ettiği ve neden başarısız olduğu kolayca anlaşılamayan test.",
      "Hiç çalıştırılamayan test.",
      "Sadece geceleri çalışan test.",
      "Güvenlik açığı arayan test."
    ],
    "answer": 0
  },
  {
    "id": 96,
    "chapter": 3,
    "topic": "CI/CD ve Pre-commit Hook'lar",
    "question": "Bir geliştiricinin hatalı veya standart dışı kodu GitHub'a 'commit' etmesini kendi yerel bilgisayarında engelleyen mekanizma hangisidir?",
    "options": [
      "Pre-commit hook",
      "Pull request merge",
      "Docker container",
      "Kubernetes pod"
    ],
    "answer": 0
  },
  {
    "id": 97,
    "chapter": 3,
    "topic": "GitHub Actions ile Test Otomasyonu",
    "question": "GitHub Actions veya benzeri bir CI aracında her 'Pull Request' açıldığında testlerin koşulmasının en önemli getirisi nedir?",
    "options": [
      "Geliştiricilere otomatik maaş zammı yapılması.",
      "Bozuk veya gerilemeye (regression) neden olan kodun ana koda entegre edilmesini otomatik olarak bloke etmek.",
      "Müşteriye otomatik fatura kesmek.",
      "Proje dokümanlarını internette gizlemek."
    ],
    "answer": 1
  },
  {
    "id": 98,
    "chapter": 3,
    "topic": "Testing in Production",
    "question": "Modern yazılım dağıtımlarında 'Testing in Production' (Üretimde Test) kapsamında kullanılan tekniklerden biri hangisidir?",
    "options": [
      "Canary Releases (Kanarya Sürümleri) ve Feature Flags",
      "Gereksinim analizini atlamak",
      "Veritabanını rastgele formatlamak",
      "Birim testlerini tamamen silmek"
    ],
    "answer": 0
  },
  {
    "id": 99,
    "chapter": 3,
    "topic": "Kanarya Sürümü (Canary Release)",
    "question": "'Canary Release' (Kanarya Dağıtımı) stratejisinin mantığı nedir?",
    "options": [
      "Yeni sürümü önce kullanıcıların küçük bir yüzdesine (%1 - %5) açarak metrikleri ve olası hataları izlemek, sorun yoksa kademeli olarak genele yaymak.",
      "Yazılımı yalnızca sarı renkli bilgisayarlara yüklemek.",
      "Tüm sunucuları aynı anda durdurup gece güncelleme yapmak.",
      "Sadece yöneticilerin görebileceği sahte bir web sitesi açmak."
    ],
    "answer": 0
  },
  {
    "id": 100,
    "chapter": 3,
    "topic": "Kent Beck ve TDD Mirası",
    "question": "TDD'nin modern yazılım mühendisliğinde bir disiplin olarak popülerleşmesini sağlayan ve 'Test-Driven Development: By Example' kitabının yazarı olan öncü kimdir?",
    "options": [
      "Kent Beck",
      "Alan Turing",
      "Linus Torvalds",
      "Ada Lovelace"
    ],
    "answer": 0
  },
  {
    "id": 101,
    "chapter": 4,
    "topic": "Kapsama ve Test Gücü",
    "question": "Kod Kapsamı (Code Coverage) ve Mutasyon Testi (Mutation Testing) arasındaki temel fark hangi soruyu yanıtladıklarında yatar?",
    "options": [
      "Kod Kapsamı: 'Kod çalıştırıldı mı?' | Mutasyon Testi: 'Testler bir hatayı tespit edebilir mi?'",
      "Kod Kapsamı: 'Yazılım hızlı mı?' | Mutasyon Testi: 'Kod güvenli mi?'",
      "Kod Kapsamı: 'Müşteri memnun mu?' | Mutasyon Testi: 'Kaç satır kod yazıldı?'",
      "Kod Kapsamı: 'Veritabanı bağlandı mı?' | Mutasyon Testi: 'Kullanıcı arayüzü güzel mi?'"
    ],
    "answer": 0
  },
  {
    "id": 102,
    "chapter": 4,
    "topic": "İfade Kapsamı (Statement Coverage)",
    "question": "İfade Kapsamı (Statement Coverage / Line Coverage) neyi ölçer?",
    "options": [
      "Test senaryolarının kod tabanındaki çalıştırılabilir satırların / ifadelerin yüzde kaçını en az bir kez çalıştırdığını",
      "Yazılan yorum satırlarının toplam koda oranını",
      "Kodda kaç adet `if` bloğu bulunduğunu",
      "Testlerin çalışma süresinin milisaniye cinsinden değerini"
    ],
    "answer": 0
  },
  {
    "id": 103,
    "chapter": 4,
    "topic": "İfade Kapsamının Zayıflığı",
    "question": "%100 İfade Kapsamına (Statement Coverage) ulaşılmış bir test takımı neden hala kritik bir mantık hatasını kaçırabilir?",
    "options": [
      "Çünkü derleyici ifade kapsamını tanımaz.",
      "Çünkü bir `if` bloğunun yalnızca `true` dalı çalıştırılmış olabilir; `false` durumunda yapılması gerekenler veya boş `else` dalları hiç test edilmemiş olabilir.",
      "Çünkü ifade kapsamı yalnızca Python dilinde geçerlidir.",
      "Çünkü ifade kapsamı testlerin assertion içermesini zorunlu kılar."
    ],
    "answer": 1
  },
  {
    "id": 104,
    "chapter": 4,
    "topic": "Dal / Karar Kapsamı (Branch Coverage)",
    "question": "Dal / Karar Kapsamı (Branch / Decision Coverage) neyi hedefler?",
    "options": [
      "Programdaki her kontrol akışı karar noktasının (if, switch vb.) alabileceği tüm olası dalların (True ve False) en az birer kez test edilmesini",
      "Yalnızca döngülerin (for/while) test edilmesini",
      "Yalnızca hata fırlatan satırların denenmesini",
      "Projedeki tüm Git dallarının (branches) birleştirilmesini"
    ],
    "answer": 0
  },
  {
    "id": 105,
    "chapter": 4,
    "topic": "Kapsama Hiyerarşisi (Subsumption)",
    "question": "Test kriterleri arasındaki 'Subsumption' (Kapsama/İçerme) ilkesine göre aşağıdakilerden hangisi doğrudur?",
    "options": [
      "İfade Kapsamı (Statement Coverage), Dal Kapsamını (Branch Coverage) kapsar.",
      "Dal Kapsamını (%100 Branch Coverage) sağlayan her test takımı, otomatik olarak %100 İfade Kapsamını da (Statement Coverage) sağlamış olur.",
      "İkisi birbirinden tamamen bağımsızdır ve hiçbir zaman kesişmez.",
      "İfade kapsamı her zaman dal kapsamından daha güçlü bir kriterdir."
    ],
    "answer": 1
  },
  {
    "id": 106,
    "chapter": 4,
    "topic": "Koşul Kapsamı (Condition Coverage)",
    "question": "`if (A && B)` gibi bileşik bir kararda 'Koşul Kapsamı' (Condition Coverage) neyi gerektirir?",
    "options": [
      "Sadece tüm ifadenin `true` olmasını",
      "Bileşik ifadedeki her bir alt mantıksal koşulun (A ve B) bağımsız olarak hem True hem de False değerini en az bir kez almasını",
      "A ve B değişkenlerinin string olmasını",
      "Yalnızca tek bir test koşulmasını"
    ],
    "answer": 1
  },
  {
    "id": 107,
    "chapter": 4,
    "topic": "Çoklu Koşul Kapsamı (MCC)",
    "question": "N adet bağımsız mantıksal alt koşul içeren bir karar ifadesinde Çoklu Koşul Kapsamı (Multiple Condition Coverage - MCC) sağlamak için kaç adet test kombinasyonu gereklidir?",
    "options": [
      "N adet test",
      "N + 1 adet test",
      "2^N adet test",
      "N^2 adet test"
    ],
    "answer": 2
  },
  {
    "id": 108,
    "chapter": 4,
    "topic": "MC/DC Neden Geliştirildi?",
    "question": "MC/DC (Modified Condition/Decision Coverage) kriterinin ortaya çıkışındaki temel mühendislik sebebi nedir?",
    "options": [
      "Çoklu Koşul Kapsamının (MCC) koşul sayısı arttıkça üssel (2^N) olarak patlamasını engelleyip, doğrusal (linear) test sayısıyla yüksek güvenlik sağlamak.",
      "Tüm testleri otomatik olarak silmek.",
      "Sadece tek bir testle %100 kapsama elde etmek.",
      "Birim testlerini gereksiz kılmak."
    ],
    "answer": 0
  },
  {
    "id": 109,
    "chapter": 4,
    "topic": "MC/DC Test Sayısı",
    "question": "N adet koşul içeren bir karar ifadesi için MC/DC kriterini sağlamak üzere gereken minimum test sayısı kaçtır?",
    "options": [
      "N test",
      "N + 1 test",
      "2^N test",
      "N! (Faktöriyel) test"
    ],
    "answer": 1
  },
  {
    "id": 110,
    "chapter": 4,
    "topic": "MC/DC Bağımsız Etki İlkesi",
    "question": "MC/DC'de bir alt koşulun kararı 'bağımsız olarak etkilediğini' (independent effect) göstermek için nasıl bir test çifti seçilmelidir?",
    "options": [
      "Tüm koşulların aynı anda değiştiği iki test.",
      "Yalnızca incelenen koşulun değeri (True → False) değişirken diğer tüm koşulların sabit tutulduğu ve bu değişimin nihai karar sonucunu doğrudan değiştirdiği iki test.",
      "Rastgele değerlerin girildiği iki test.",
      "Her iki testin de başarısız olduğu durumlar."
    ],
    "answer": 1
  },
  {
    "id": 111,
    "chapter": 4,
    "topic": "MC/DC ve Emniyet Standardı DO-178C",
    "question": "Havacılık ve emniyet-kritik yazılımlarda (Avionics Software) en yüksek seviye (Level A) için MC/DC test kapsamını zorunlu kılan uluslararası standart hangisidir?",
    "options": [
      "ISO 9001",
      "DO-178C",
      "IEEE 802.11",
      "W3C HTML5"
    ],
    "answer": 1
  },
  {
    "id": 112,
    "chapter": 4,
    "topic": "Kapsama Merdiveni (Subsumption Hierarchy)",
    "question": "Kod kapsama kriterlerinin en güçlüden en zayıfa doğru hiyerarşik sıralaması hangi seçenekte eksiksiz verilmiştir?",
    "options": [
      "Statement → Branch → MC/DC → Multiple Condition Coverage (MCC)",
      "Multiple Condition Coverage (MCC) → MC/DC → Decision/Branch Coverage → Statement Coverage",
      "MC/DC → Statement → Branch → MCC",
      "Branch → Statement → MCC → MC/DC"
    ],
    "answer": 1
  },
  {
    "id": 113,
    "chapter": 4,
    "topic": "RIPR Modeli Genel",
    "question": "Ammann ve Offutt tarafından geliştirilen ve bir yazılım hatasının gözlemlenebilir bir başarısızlığa (failure) dönüşmesi için gereken 4 adımı açıklayan model hangisidir?",
    "options": [
      "PDCA Döngüsü",
      "RIPR Modeli (Reachability, Infection, Propagation, Revealability)",
      "SWOT Analizi",
      "ACID Modeli"
    ],
    "answer": 1
  },
  {
    "id": 114,
    "chapter": 4,
    "topic": "RIPR - Reachability (Ulaşılabilirlik)",
    "question": "RIPR modelinin ilk adımı olan 'Reachability' (Ulaşılabilirlik) neyi ifade eder?",
    "options": [
      "Kullanıcının internete bağlanabilmesini",
      "Test girdisinin, yazılımda kusurun (fault) bulunduğu kod konumunu fiilen çalıştırmasını ve o satıra ulaşmasını",
      "Sunucuya ping atılabilmesini",
      "Veritabanının yedeklenmesini"
    ],
    "answer": 1
  },
  {
    "id": 115,
    "chapter": 4,
    "topic": "RIPR - Infection (Bulaşma)",
    "question": "RIPR modelinde 'Infection' (Bulaşma / Enfeksiyon) aşamasında ne gerçekleşir?",
    "options": [
      "Bilgisayara truva atı virüsü bulaşması",
      "Hatalı kod satırının çalıştırılması sonucunda programın iç durumunun (değişken değeri, bellek vb.) hatalı/bozuk hale gelmesi",
      "Test raporunun silinmesi",
      "Ekranda mavi ekran çıkması"
    ],
    "answer": 1
  },
  {
    "id": 116,
    "chapter": 4,
    "topic": "RIPR - Propagation (Yayılma)",
    "question": "RIPR modelinde 'Propagation' (Yayılma) adımının gerçekleşmesi ne demektir?",
    "options": [
      "Bozuk iç program durumunun yürütme boyunca ilerleyerek nihai program çıktısına veya gözlemlenebilir bir sonuca yansıması",
      "Kodun başka bir sunucuya kopyalanması",
      "Hatanın diğer geliştiricilere e-posta ile bildirilmesi",
      "Test dosyasının adının değiştirilmesi"
    ],
    "answer": 0
  },
  {
    "id": 117,
    "chapter": 4,
    "topic": "RIPR - Revealability (Görünürlük)",
    "question": "RIPR modelinde 'Revealability' (Görünürlük / Açığa Çıkma) neyi ifade eder?",
    "options": [
      "Test senaryosundaki assertion (iddia) kontrolünün, çıktıda meydana gelen bu hatalı sapmayı fiilen yakalayıp testi başarısız kılması",
      "Kodun GitHub'da açık kaynak yapılması",
      "Yazılımcının hatayı kabul etmesi",
      "Ekran parlaklığının artırılması"
    ],
    "answer": 0
  },
  {
    "id": 118,
    "chapter": 4,
    "topic": "Kod Kapsamı vs RIPR",
    "question": "Geleneksel Kod Kapsamı (Code Coverage) RIPR modelinin hangi basamağını garanti ederken hangilerini garanti EDEMEZ?",
    "options": [
      "Yalnızca Reachability'yi (Ulaşılabilirlik) garanti eder; Infection, Propagation ve Revealability için garanti vermez.",
      "Tüm adımları %100 garanti eder.",
      "Yalnızca Revealability'yi garanti eder.",
      "Hiçbir basamağı garanti etmez."
    ],
    "answer": 0
  },
  {
    "id": 119,
    "chapter": 4,
    "topic": "Mutasyon Testi Tanımı",
    "question": "Mutasyon Testi (Mutation Testing) tekniğinin temel işleyiş mekanizması nedir?",
    "options": [
      "Orijinal kaynak koda küçük sentaktik değişikliklerle yapay hatalar (mutantlar) enjekte etmek ve mevcut test takımının bu hataları yakalayıp yakalayamadığını ölçmek.",
      "Donanım parçalarının sıcaklığını artırıp sistemi zorlamak.",
      "Kullanıcıya farklı tasarımlar gösterip A/B testi yapmak.",
      "Tüm kod tabanını başka bir programlama diline derlemek."
    ],
    "answer": 0
  },
  {
    "id": 120,
    "chapter": 4,
    "topic": "Mutant Nedir?",
    "question": "Mutasyon testinde 'Mutant' terimi neyi ifade eder?",
    "options": [
      "Test mühendisinin yazdığı hatalı test senaryosunu",
      "Orijinal programın tek bir satırında veya operatöründe kasıtlı olarak küçük bir değişiklik yapılmış yapay kusurlu kopyasını",
      "Veritabanında silinmiş verileri",
      "Çalışmayan bir harici API'yi"
    ],
    "answer": 1
  },
  {
    "id": 121,
    "chapter": 4,
    "topic": "Öldürülen Mutant (Killed Mutant)",
    "question": "Bir mutant programa karşı test takımı çalıştırıldığında testlerden en az biri başarısız (Fail) olursa bu mutanta ne ad verilir?",
    "options": [
      "Killed Mutant (Öldürülmüş / Yakalanmış Mutant)",
      "Survived Mutant (Hayatta Kalan Mutant)",
      "Equivalent Mutant (Eşdeğer Mutant)",
      "Stillborn Mutant"
    ],
    "answer": 0
  },
  {
    "id": 122,
    "chapter": 4,
    "topic": "Hayatta Kalan Mutant (Survived Mutant)",
    "question": "Koddaki yapay hataya rağmen tüm testler yeşil yanarak başarılı olursa (Survived Mutant), bu durum test takımı hakkında ne gösterir?",
    "options": [
      "Test takımının mükemmel olduğunu",
      "Test takımında o koddaki değişikliği ve davranışı yakalayacak uygun girdi veya assertion (iddia) eksikliği olduğunu",
      "Yazılımın hatasız çalıştığını",
      "Mutasyon aracının bozuk olduğunu"
    ],
    "answer": 1
  },
  {
    "id": 123,
    "chapter": 4,
    "topic": "Ölü Doğan Mutant (Stillborn Mutant)",
    "question": "Mutasyon aracının ürettiği mutant kod sözdizimsel olarak geçersiz olduğu için derlenemiyorsa (compile error) buna ne ad verilir?",
    "options": [
      "Stillborn Mutant (Ölü Doğan Mutant)",
      "Equivalent Mutant",
      "Survived Mutant",
      "Immortal Mutant"
    ],
    "answer": 0
  },
  {
    "id": 124,
    "chapter": 4,
    "topic": "Eşdeğer Mutant (Equivalent Mutant)",
    "question": "Kaynak koddaki sentaktik değişikliğe rağmen orijinal programla tamamen aynı anlamsal davranışı sergileyen ve HİÇBİR testin öldüremeyeceği mutanta ne ad verilir?",
    "options": [
      "Equivalent Mutant (Eşdeğer Mutant)",
      "Killed Mutant",
      "Defective Mutant",
      "Zombie Mutant"
    ],
    "answer": 0
  },
  {
    "id": 125,
    "chapter": 4,
    "topic": "Eşdeğer Mutantların Zorluğu",
    "question": "Eşdeğer mutantların tespit edilmesi bilgisayar bilimlerinde neden teorik olarak otomatikleştirilemez ve mutasyon testinin en büyük maliyetidir?",
    "options": [
      "Çünkü programların anlamsal denkliği genel olarak 'karar verilemez' (undecidable) bir problemdir ve manuel insan incelemesi gerektirir.",
      "Çünkü işletim sistemleri eşdeğer mutantları virüs sanır.",
      "Çünkü eşdeğer mutantlar sadece Python'da oluşur.",
      "Çünkü test araçları internete bağlanamaz."
    ],
    "answer": 0
  },
  {
    "id": 126,
    "chapter": 4,
    "topic": "Mutasyon Skoru Formülü",
    "question": "Ders slaytlarında verilen Mutasyon Skoru (Mutation Score) hesaplama formülü hangisidir?",
    "options": [
      "Mutasyon Skoru = (Killed) / (Total - Equivalent)",
      "Mutasyon Skoru = (Killed + Survived) / Total",
      "Mutasyon Skoru = (Equivalent) / (Total)",
      "Mutasyon Skoru = (Total) / (Killed - Survived)"
    ],
    "answer": 0
  },
  {
    "id": 127,
    "chapter": 4,
    "topic": "Değer Mutasyonları (Value Mutations)",
    "question": "Koddaki `int timeout = 5000;` satırının mutasyon aracı tarafından `int timeout = 5001;` veya `0` yapılması hangi mutasyon türüne örnektir?",
    "options": [
      "Değer Mutasyonu (Value Mutation)",
      "İfade Silme Mutasyonu",
      "Arayüz Mutasyonu",
      "Veritabanı Mutasyonu"
    ],
    "answer": 0
  },
  {
    "id": 128,
    "chapter": 4,
    "topic": "Karar Mutasyonları (Decision Mutations)",
    "question": "Koddaki `if (a < b)` ifadesinin `if (a <= b)` haline getirilmesi durumunda, bu mutantı öldürebilecek TEK test girdisi hangisidir?",
    "options": [
      "a > b olan bir girdi",
      "a == b olan sınır değer girdisi",
      "a < b olan herhangi bir girdi",
      "a = 0 ve b = -1 girdisi"
    ],
    "answer": 1
  },
  {
    "id": 129,
    "chapter": 4,
    "topic": "İfade Mutasyonları (Statement Mutations)",
    "question": "Bir metodun gövdesindeki `sendEmailNotification();` satırının tamamen silinmesi veya yoruma alınması hangi mutasyon türüdür?",
    "options": [
      "İfade Mutasyonu (Statement Mutation / Deletion)",
      "Karar Mutasyonu",
      "Değer Mutasyonu",
      "Tip Değiştirme Mutasyonu"
    ],
    "answer": 0
  },
  {
    "id": 130,
    "chapter": 4,
    "topic": "Mutasyon Test Araçları - PIT",
    "question": "Java ekosisteminde endüstri standardı olan en popüler ve modern mutasyon testi aracı hangisidir?",
    "options": [
      "PIT (Pitest)",
      "Stryker",
      "Mull",
      "mutmut"
    ],
    "answer": 0
  },
  {
    "id": 131,
    "chapter": 4,
    "topic": "Mutasyon Test Araçları - Stryker",
    "question": "JavaScript/TypeScript, C# (.NET) ve Scala dillerinde yaygın olarak kullanılan modern mutasyon testi çatısı hangisidir?",
    "options": [
      "Stryker (StrykerJS / Stryker.NET)",
      "PIT",
      "Infection",
      "Cosmic Ray"
    ],
    "answer": 0
  },
  {
    "id": 132,
    "chapter": 4,
    "topic": "Mutasyon Test Araçları - Python",
    "question": "Python programlama dilinde mutasyon testi yapmak için ders slaytlarında listelenen araçlar hangileridir?",
    "options": [
      "mutmut ve Cosmic Ray",
      "PIT ve JUnit",
      "Mull ve Cargo-mutants",
      "Infection ve Stryker"
    ],
    "answer": 0
  },
  {
    "id": 133,
    "chapter": 4,
    "topic": "Mutasyon Testinin Avantajları",
    "question": "Aşağıdakilerden hangisi Mutasyon Testinin Kod Kapsamına kıyasla sunduğu en büyük üstünlüktür?",
    "options": [
      "Çok az işlemci gücü tüketmesi ve saniyeler içinde bitmesi.",
      "Yalnızca kodun çalıştırılıp çalıştırılmadığını değil, test takımının gerçek kusurları yakalama kabiliyetini doğrudan ölçmesi ve sınır değer assert'leri yazmaya teşvik etmesi.",
      "Kaynak koda ihtiyaç duymadan siyah kutu olarak çalışabilmesi.",
      "Yazılımcıların test yazma ihtiyacını tamamen ortadan kaldırması."
    ],
    "answer": 1
  },
  {
    "id": 134,
    "chapter": 4,
    "topic": "Mutasyon Testinin Dezavantajları",
    "question": "Mutasyon testinin büyük kurumsal projelerde uygulanmasını zorlaştıran en temel dezavantajı nedir?",
    "options": [
      "Hesaplama maliyetinin (computational cost) aşırı yüksek olması; binlerce mutant için test takımının defalarca baştan koşulması gerekliliği.",
      "Mutasyon testlerinin hiçbir dilde desteklenmemesi.",
      "Sadece Linux işletim sisteminde çalışabilmesi.",
      "Geliştiricilerin kod yazmasını engellemesi."
    ],
    "answer": 0
  },
  {
    "id": 135,
    "chapter": 5,
    "topic": "Test Seviyesi vs Test Arayüzü",
    "question": "Ders slaytlarında vurgulanan 'Test Seviyesi' (Test Level) ve 'Test Arayüzü' (Test Interface) arasındaki temel kavramsal fark nedir?",
    "options": [
      "Test seviyesi sistemin ne kadarlık bir parçasının test edildiğini (Birim, Entegrasyon, Sistem) belirtirken; Test arayüzü sisteme nereden dokunulduğunu (Kod çağrısı, API, UI) ifade eder.",
      "Test seviyesi sadece donanımı, test arayüzü ise sadece yazılımı inceler.",
      "Test seviyesi testin kaç saniye sürdüğünü, test arayüzü ise hangi programlama diliyle yazıldığını gösterir.",
      "İkisi tamamen aynı anlama gelir ve birbirinin yerine kullanılır."
    ],
    "answer": 0
  },
  {
    "id": 136,
    "chapter": 5,
    "topic": "Restoran Analojisi - API",
    "question": "Hafta 5'te kullanılan 'Restoran Analojisi'nde menü ve sipariş alan garson yazılım mimarisinde neye karşılık gelir?",
    "options": [
      "Veritabanı tablosuna",
      "API (Mutfakla iletişim kurmanın resmi arayüzü)",
      "İşletim sistemi çekirdeğine",
      "Birim testine"
    ],
    "answer": 1
  },
  {
    "id": 137,
    "chapter": 5,
    "topic": "Restoran Analojisi - Test Seviyeleri",
    "question": "Restoran analojisinde 'Her bir malzemeyi tek başına tatmak' ve 'İstasyonlar arası sipariş fişlerinin doğru aktığını kontrol etmek' sırasıyla hangi test türleridir?",
    "options": [
      "Birim Testi (Unit) ve Entegrasyon Testi (Integration)",
      "Sistem Testi ve Kabul Testi",
      "Performans Testi ve Güvenlik Testi",
      "Statik Analiz ve Manuel Test"
    ],
    "answer": 0
  },
  {
    "id": 138,
    "chapter": 5,
    "topic": "Mars Climate Orbiter Faciası",
    "question": "1999 yılında Mars Climate Orbiter uzay aracının kaybolmasına yol açan ve entegrasyon testlerinin önemini kanıtlayan hata neydi?",
    "options": [
      "Geliştiricilerin hiç kod yazmamış olması.",
      "Yer kontrol yazılımının itiş gücünü 'pound-force seconds' olarak göndermesi, uzay aracı navigasyon yazılımının ise 'newton seconds' (metrik SI) beklemesi nedeniyle 4.45 katlık arayüz birim uyuşmazlığı.",
      "Aracın güneş panellerinin ters takılması.",
      "Veritabanı şifresinin yanlış girilmesi."
    ],
    "answer": 1
  },
  {
    "id": 139,
    "chapter": 5,
    "topic": "Mars Faciasından Çıkarılan Ders",
    "question": "Mars Climate Orbiter olayında her iki yazılım modülü de kendi birim testlerinden başarıyla geçmişti. Buradan çıkarılan en kritik test dersi nedir?",
    "options": [
      "Birim testleri geçerse başka hiçbir teste gerek yoktur.",
      "Modüller kendi başlarına kusursuz çalışsa bile, aralarındaki veri formatı ve arayüz sözleşmesi test edilmezse sistem entegrasyon noktasında felaketle sonuçlanabilir.",
      "Uzay araçlarında yazılım kullanılmamalıdır.",
      "Tüm hesaplamalar elle yapılmalıdır."
    ],
    "answer": 1
  },
  {
    "id": 140,
    "chapter": 5,
    "topic": "Bileşen vs Sistem Entegrasyonu",
    "question": "Kendi geliştirdiğimiz Sipariş Servisi ile Veritabanı arasındaki entegrasyon testi ile; sistemimiz ile Stripe/PayPal ödeme sağlayıcısı arasındaki entegrasyon testi sırasıyla nasıl sınıflandırılır?",
    "options": [
      "Bileşen Entegrasyon Testi (Component Integration) ve Sistem Entegrasyon Testi (System Integration)",
      "Birim Testi ve Kullanıcı Kabul Testi",
      "Statik Test ve Beyaz Kutu Testi",
      "Donanım Testi ve Ağ Testi"
    ],
    "answer": 0
  },
  {
    "id": 141,
    "chapter": 5,
    "topic": "Tipik Arayüz Hataları",
    "question": "Aşağıdakilerden hangisi modüller arası entegrasyon testlerinde en sık karşılaşılan tipik arayüz kusurlarından (Interface Defects) biridir?",
    "options": [
      "Veri formatı ve ölçü birimi uyuşmazlıkları (örn. Tarih formatları, para birimi)",
      "Eksik veri alanları veya beklenmeyen null değerler",
      "Metot çağrı sırası (Call order) hataları ve zaman aşımı (timeout) varsayımları",
      "Yukarıdakilerin hepsi"
    ],
    "answer": 3
  },
  {
    "id": 142,
    "chapter": 5,
    "topic": "Büyük Patlama (Big-Bang) Entegrasyonu",
    "question": "Büyük Patlama (Big-Bang) entegrasyon stratejisinin temel özelliği ve en büyük dezavantajı nedir?",
    "options": [
      "Tüm modüller ayrı ayrı test edilmeden tek seferde birleştirilir; bir hata çıktığında hatanın hangi modülden veya bağlantıdan kaynaklandığını tespit etmek son derece zordur.",
      "Çok fazla Stub ve Driver yazılmasını gerektirir.",
      "Sadece tek bir modülün test edilmesidir.",
      "Yalnızca mikroservis mimarilerinde uygulanabilir."
    ],
    "answer": 0
  },
  {
    "id": 143,
    "chapter": 5,
    "topic": "Artımlı (Incremental) Entegrasyon",
    "question": "Artımlı Entegrasyon (Incremental Integration) yaklaşımının Büyük Patlama'ya kıyasla en belirgin üstünlüğü nedir?",
    "options": [
      "Hiçbir planlama gerektirmemesi.",
      "Modüllerin sisteme birer birer eklenip her adımda test edilmesi sayesinde ortaya çıkan hataların hemen son eklenen parçada kolayca izole edilebilmesi.",
      "Testlerin tamamen kaldırılmasını sağlaması.",
      "Yalnızca son kullanıcılar tarafından yapılması."
    ],
    "answer": 1
  },
  {
    "id": 144,
    "chapter": 5,
    "topic": "Yukarıdan Aşağıya (Top-Down) Entegrasyon",
    "question": "Yukarıdan Aşağıya (Top-Down) entegrasyon stratejisinde henüz geliştirilmemiş veya entegre edilmemiş alt seviye modüllerin yerine ne kullanılır?",
    "options": [
      "Driver (Sürücü)",
      "Stub (Koçan / Sahte Alt Modül)",
      "Linter",
      "Derleyici"
    ],
    "answer": 1
  },
  {
    "id": 145,
    "chapter": 5,
    "topic": "Aşağıdan Yukarıya (Bottom-Up) Entegrasyon",
    "question": "Aşağıdan Yukarıya (Bottom-Up) entegrasyon stratejisinde alt seviye modülleri çağırmak ve test etmek için henüz hazır olmayan üst seviye modüllerin yerine ne yazılır?",
    "options": [
      "Stub",
      "Driver (Test Sürücüsü / Çağırıcı)",
      "Mock veritabanı",
      "Browser eklentisi"
    ],
    "answer": 1
  },
  {
    "id": 146,
    "chapter": 5,
    "topic": "Sandviç (Sandwich) Entegrasyonu",
    "question": "Sandviç (Sandwich / Hibrit) entegrasyon stratejisi nasıl çalışır?",
    "options": [
      "Yukarıdan aşağıya ve aşağıdan yukarıya yaklaşımları birleştirerek, çekirdek bir orta katman etrafında sistemi aynı anda entegre eder.",
      "Yalnızca iki katmanlı yazılımlarda kullanılır.",
      "Öğle arasında yapılan manuel testtir.",
      "Testlerin sadece hafta sonu koşulmasıdır."
    ],
    "answer": 0
  },
  {
    "id": 147,
    "chapter": 5,
    "topic": "Sözleşme Testi (Contract Testing) ve Pact",
    "question": "Mikroservisler arasında API uyumluluğunu doğrulamak için kullanılan Tüketici Odaklı Sözleşme Testi (Consumer-Driven Contracts) ve 'Pact' aracının amacı nedir?",
    "options": [
      "Avukatların hazırladığı lisans sözleşmesini kontrol etmek.",
      "İstemcinin (consumer) servisten ne beklediğini bir sözleşme haline getirip, sağlayıcının (provider) bu sözleşmeyi bozmadan hizmet verdiğini izole şekilde doğrulamak.",
      "Sunucuların elektrik tüketimini ölçmek.",
      "Kullanıcı şifrelerini şifrelemek."
    ],
    "answer": 1
  },
  {
    "id": 148,
    "chapter": 5,
    "topic": "HTTP Metotları - GET",
    "question": "REST mimarisinde HTTP GET metodunun temel özellikleri hangi seçenekte doğru verilmiştir?",
    "options": [
      "Sunucuda yeni kayıt oluşturur, güvenli değildir.",
      "Kaynakları sorgulamak/okumak için kullanılır; Güvenli (Safe) ve Idempotent (Eşgüçlü) bir metottur.",
      "Sunucudaki veritabanını tamamen siler.",
      "Her zaman istek gövdesinde (request body) şifreli veri taşımalıdır."
    ],
    "answer": 1
  },
  {
    "id": 149,
    "chapter": 5,
    "topic": "HTTP Metotları - POST",
    "question": "HTTP POST metodunun tipik kullanım amacı ve idempotentlik durumu nedir?",
    "options": [
      "Sunucuda yeni bir kaynak oluşturmak için kullanılır; Idempotent DEĞİLDİR (aynı istek tekrarlandığında birden fazla kaynak oluşturabilir).",
      "Yalnızca dosya indirmek için kullanılır ve idempotenttir.",
      "Sunucu durumunu asla değiştirmez (safe).",
      "Sadece hata durumunda çağrılır."
    ],
    "answer": 0
  },
  {
    "id": 150,
    "chapter": 5,
    "topic": "HTTP Metotları - PUT",
    "question": "HTTP PUT metodu ile ilgili aşağıdakilerden hangisi doğrudur?",
    "options": [
      "Belirtilen URL'deki kaynağı tamamen güncellemek / üzerine yazmak için kullanılır ve Idempotenttir.",
      "Asla idempotent değildir.",
      "Yalnızca resim dosyalarını silmek için kullanılır.",
      "Güvenli (Safe) bir metottur, sunucu durumunu değiştirmez."
    ],
    "answer": 0
  },
  {
    "id": 151,
    "chapter": 5,
    "topic": "HTTP Metotları - PATCH vs PUT",
    "question": "PATCH metodu ile PUT metodu arasındaki temel fark nedir?",
    "options": [
      "PUT kaynağın tamamını günceller / değiştirir; PATCH ise kaynağın sadece belirli alanlarını kısmi olarak (partial update) günceller.",
      "PATCH veriyi siler, PUT ekler.",
      "PUT tarayıcılarda çalışmaz.",
      "PATCH güvenli bir metottur, PUT değildir."
    ],
    "answer": 0
  },
  {
    "id": 152,
    "chapter": 5,
    "topic": "HTTP Metotları - DELETE",
    "question": "HTTP DELETE metodunun idempotentlik niteliği nedir?",
    "options": [
      "Idempotenttir; aynı silme isteğinin bir veya birden fazla kez gönderilmesi sunucu kaynak durumunda aynı nihai sonucu (kaynağın silinmiş olması) bırakır.",
      "Kesinlikle idempotent değildir.",
      "Güvenli (Safe) bir metottur.",
      "Yalnızca GET isteğiyle birlikte çalışabilir."
    ],
    "answer": 0
  },
  {
    "id": 153,
    "chapter": 5,
    "topic": "Güvenli (Safe) Metot Kavramı",
    "question": "HTTP protokolünde bir metodun 'Güvenli' (Safe) olması ne anlama gelir?",
    "options": [
      "İsteğin SSL sertifikası kullanmasıdır.",
      "İsteğin sunucudaki kaynak durumunu değiştirmemesi, yalnızca salt okunur (read-only) işlem yapmasıdır.",
      "Şifre gerektirmemesidir.",
      "Yalnızca güvenli ağlarda çalışabilmesidir."
    ],
    "answer": 1
  },
  {
    "id": 154,
    "chapter": 5,
    "topic": "Idempotent Metot Kavramı",
    "question": "Bir HTTP metodunun 'Idempotent' (Eşgüçlü) olması tam olarak neyi ifade eder?",
    "options": [
      "İsteğin 1 milisaniyeden kısa sürmesini.",
      "Aynı isteğin art arda defalarca çalıştırılmasının sunucu durumu üzerinde tek bir çalıştırmayla aynı yan etkiyi üretmesini.",
      "İsteğin yalnızca tek bir sunucuya iletilebilmesini.",
      "İstek gövdesinin boş olmasını."
    ],
    "answer": 1
  },
  {
    "id": 155,
    "chapter": 5,
    "topic": "HTTP Durum Kodu: 200 vs 201",
    "question": "Başarılı bir `POST /orders` isteği sonucunda yeni bir sipariş kaydı oluşturulduğunda dönmesi beklenen en standart HTTP yanıt kodu nedir?",
    "options": [
      "200 OK",
      "201 Created",
      "204 No Content",
      "301 Moved Permanently"
    ],
    "answer": 1
  },
  {
    "id": 156,
    "chapter": 5,
    "topic": "HTTP Durum Kodu: 204 No Content",
    "question": "Bir `DELETE /orders/42` isteği başarıyla tamamlandığında ve sunucu yanıt gövdesinde (body) hiçbir içerik döndürmeyeceğinde hangi durum kodu kullanılır?",
    "options": [
      "200 OK",
      "204 No Content",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    "answer": 1
  },
  {
    "id": 157,
    "chapter": 5,
    "topic": "HTTP Durum Kodu: 401 vs 403",
    "question": "HTTP 401 (Unauthorized) ve 403 (Forbidden) arasındaki fark nedir?",
    "options": [
      "401 kimlik doğrulanmadığında (authentication required / login olunmamış); 403 ise kimlik doğrulanmış ancak o kaynağa erişim yetkisi (authorization) yetersiz olduğunda döner.",
      "401 sunucu hatasıdır; 403 istemci hatasıdır.",
      "401 başarılı yanıttır; 403 yönlendirmedir.",
      "İkisi tamamen farksızdır."
    ],
    "answer": 0
  },
  {
    "id": 158,
    "chapter": 5,
    "topic": "HTTP Durum Kodu: 404 vs 409",
    "question": "İstenen kaynak bulunamadığında 404 (Not Found) dönerken; sistemde zaten var olan bir e-posta adresiyle tekrar kayıt olunmaya çalışıldığında hangi durum kodu döner?",
    "options": [
      "409 Conflict",
      "200 OK",
      "502 Bad Gateway",
      "304 Not Modified"
    ],
    "answer": 0
  },
  {
    "id": 159,
    "chapter": 5,
    "topic": "HTTP Durum Kodu: 422 Unprocessable Entity",
    "question": "Gönderilen JSON sözdizimsel olarak doğru olmasına rağmen, içerisindeki alan iş kurallarına aykırıysa (örn. yaş negatif girilmişse) hangi durum kodu tercih edilir?",
    "options": [
      "422 Unprocessable Entity",
      "200 OK",
      "500 Internal Server Error",
      "401 Unauthorized"
    ],
    "answer": 0
  },
  {
    "id": 160,
    "chapter": 5,
    "topic": "HTTP Durum Kodu: 500 vs 503",
    "question": "Sunucu tarafında işlenmeyen beklenmedik bir yazılım hatası / çökme olduğunda 500 dönerken; sunucu aşırı yük altındayken veya bakımdayken hangi kod döner?",
    "options": [
      "503 Service Unavailable",
      "404 Not Found",
      "201 Created",
      "400 Bad Request"
    ],
    "answer": 0
  },
  {
    "id": 161,
    "chapter": 5,
    "topic": "Postman - Ortam Değişkenleri (Environment)",
    "question": "Postman'de testleri hem 'Geliştirme' (Dev) hem de 'Test' (Staging) ortamında çalıştırmak için `{{baseUrl}}` gibi değişkenler nerede tutulmalıdır?",
    "options": [
      "Environment (Ortam Değişkenleri)",
      "Ekran görüntüsü klasöründe",
      "Yalnızca e-posta taslaklarında",
      "Sabit kod olarak her isteğin içine elle yazılarak"
    ],
    "answer": 0
  },
  {
    "id": 162,
    "chapter": 5,
    "topic": "Postman - Pre-request Script vs Test Script",
    "question": "Postman'de bir istek gönderilmeden ÖNCE çalışan betikler ile yanıt geldikten SONRA çalışan betikler hangi sekmelerde yazılır?",
    "options": [
      "Pre-request Script (Önce) ve Tests (Sonra)",
      "Tests (Önce) ve Headers (Sonra)",
      "Body (Önce) ve Params (Sonra)",
      "Settings (Önce) ve Console (Sonra)"
    ],
    "answer": 0
  },
  {
    "id": 163,
    "chapter": 5,
    "topic": "Postman Test Sözdizimi",
    "question": "Postman test sekmesinde yanıtın durum kodunun 200 olduğunu doğrulamak için kullanılan standart test kodu hangisidir?",
    "options": [
      "pm.test(\"Status code is 200\", function () { pm.response.to.have.status(200); });",
      "assert status == 200 in postman;",
      "check(200);",
      "validate.response.code = 200;"
    ],
    "answer": 0
  },
  {
    "id": 164,
    "chapter": 5,
    "topic": "Postman - JSON Doğrulama",
    "question": "Postman'de dönen yanıt gövdesindeki `user.role` alanının 'admin' olduğunu Chai sözdizimiyle doğrulamak için hangi kod kullanılır?",
    "options": [
      "pm.expect(pm.response.json().user.role).to.eql(\"admin\");",
      "verify role == admin",
      "pm.check(\"admin\");",
      "response.body.equals(\"admin\");"
    ],
    "answer": 0
  },
  {
    "id": 165,
    "chapter": 5,
    "topic": "JSON Şema Doğrulama (Schema Validation)",
    "question": "API testlerinde yanıtın sadece değerini değil, dönen verinin tiplerini ve zorunlu alanlarını garantiye almak için ne kullanılır?",
    "options": [
      "JSON Schema Validation (ajv kütüphanesi)",
      "Yalnızca kelime sayacı",
      "HTML validator",
      "Rastgele sayı üreteci"
    ],
    "answer": 0
  },
  {
    "id": 166,
    "chapter": 5,
    "topic": "Newman CLI Aracı",
    "question": "Postman koleksiyonlarını grafik arayüz olmadan komut satırından (headless) ve Jenkins/GitHub Actions CI/CD hatlarında koşturmak için kullanılan araç hangisidir?",
    "options": [
      "Newman",
      "Selenium",
      "Wireshark",
      "Valgrind"
    ],
    "answer": 0
  },
  {
    "id": 167,
    "chapter": 5,
    "topic": "Newman CI/CD Entegrasyonu",
    "question": "Bir CI/CD derleme hattında `newman run my_collection.json -e env.json` komutu başarısız bir testle karşılaştığında hattın derlemeyi (build) durdurmasını sağlayan mekanizma nedir?",
    "options": [
      "Newman'ın sıfırdan farklı bir çıkış kodu (non-zero exit code) döndürmesi",
      "Bilgisayarın fişini çekmesi",
      "Kullanıcıya SMS atması",
      "Veritabanını sıfırlaması"
    ],
    "answer": 0
  },
  {
    "id": 168,
    "chapter": 6,
    "topic": "Model Tabanlı Test Tasarımı",
    "question": "Hafta 6 ders slaytlarında yazılım modelinden test türetmek için ele alınan 3 temel modelleme yöntemi hangileridir?",
    "options": [
      "Kontrol Akış Grafı (Graph Coverage), Veri Akışı (Data Flow) ve Karar Tabloları (Decision Tables)",
      "SQL Tabloları, NoSQL Belgeleri ve Excel Sayfaları",
      "CSS Seçicileri, HTML Etiketleri ve JavaScript Olayları",
      "Birim Testi, Sistem Testi ve Kabul Testi"
    ],
    "answer": 0
  },
  {
    "id": 169,
    "chapter": 6,
    "topic": "Kontrol Akış Grafı (CFG) Bileşenleri",
    "question": "Bir Kontrol Akış Grafında (Control Flow Graph - CFG) Düğümler (Nodes) ve Kenarlar (Edges) sırasıyla neyi temsil eder?",
    "options": [
      "Düğümler: İfadeleri / temel kod bloklarını | Kenarlar: İfadeler arasındaki kontrol aktarımlarını (dalları)",
      "Düğümler: Donanım çiplerini | Kenarlar: Ağ kablolarını",
      "Düğümler: Kullanıcıları | Kenarlar: Parolaları",
      "Düğümler: Test sürelerini | Kenarlar: Hata sayılarını"
    ],
    "answer": 0
  },
  {
    "id": 170,
    "chapter": 6,
    "topic": "Düğüm Kapsamı (Node Coverage)",
    "question": "Kontrol Akış Grafında 'Düğüm Kapsamı' (Node Coverage) sağlamak, geleneksel kod kapsama metriklerinden hangisine tam olarak denktir?",
    "options": [
      "İfade Kapsamı (Statement Coverage)",
      "MC/DC Kapsamı",
      "Mutasyon Kapsamı",
      "Güvenlik Kapsamı"
    ],
    "answer": 0
  },
  {
    "id": 171,
    "chapter": 6,
    "topic": "Kenar Kapsamı (Edge Coverage)",
    "question": "Kontrol Akış Grafında 'Kenar Kapsamı' (Edge Coverage) sağlamak, geleneksel kod kapsama metriklerinden hangisine doğrudan karşılık gelir?",
    "options": [
      "Dal / Karar Kapsamı (Branch / Decision Coverage)",
      "Satır Kapsamı",
      "Kullanıcı Kabul Kapsamı",
      "Bellek Kapsamı"
    ],
    "answer": 0
  },
  {
    "id": 172,
    "chapter": 6,
    "topic": "Kenar-Çifti Kapsamı (Edge-Pair Coverage)",
    "question": "Graf kapsama kriterlerinden biri olan 'Kenar-Çifti Kapsamı' (Edge-Pair Coverage) neyi gerektirir?",
    "options": [
      "Graftaki uzunluğu en fazla 2 kenar olan (ardışık 3 düğümden oluşan) tüm geçerli yolların test edilmesini",
      "Sadece ilk ve son kenarın test edilmesini",
      "Graftaki tüm düğümlerin çift sayıda olmasını",
      "Her testin iki kez çalıştırılmasını"
    ],
    "answer": 0
  },
  {
    "id": 173,
    "chapter": 6,
    "topic": "Basit Yol (Simple Path) Tanımı",
    "question": "Graf teorisinde ve test tasarımında 'Basit Yol' (Simple Path) kavramı nasıl tanımlanır?",
    "options": [
      "İçerisinde hiçbir düğümün birden fazla kez tekrarlanmadığı (yalnızca ilk ve son düğüm döngü oluşturacak şekilde aynı olabilir) yol",
      "Yalnızca tek bir satırdan oluşan kod",
      "Döngü içeren ve sonsuza kadar giden yol",
      "Hiçbir kenarı olmayan düğüm"
    ],
    "answer": 0
  },
  {
    "id": 174,
    "chapter": 6,
    "topic": "Asal Yol (Prime Path) Tanımı",
    "question": "Graf kapsamında 'Asal Yol' (Prime Path) kavramının matematiksel tanımı nedir?",
    "options": [
      "Başka hiçbir basit yolun alt yolu (proper subpath) olmayan, maksimal uzunluktaki basit yol",
      "Düğüm sayısı asal sayı olan herhangi bir yol",
      "En kısa olan tek kenarlı yol",
      "Yalnızca hata veren yol"
    ],
    "answer": 0
  },
  {
    "id": 175,
    "chapter": 6,
    "topic": "Asal Yol Kapsamı (Prime Path Coverage)",
    "question": "Asal Yol Kapsamı (Prime Path Coverage), Tam Yol Kapsamının (Complete Path Coverage) döngülerdeki hangi çıkmazını çözer?",
    "options": [
      "Sonsuz döngü içeren programlarda sonsuz sayıda yol oluşması sorununu sonlu ve kapsayıcı bir test kümesiyle çözer.",
      "Testlerin derlenmesini hızlandırır.",
      "Tüm değişkenleri otomatik sıfırlar.",
      "Kullanıcıya bildirim gönderir."
    ],
    "answer": 0
  },
  {
    "id": 176,
    "chapter": 6,
    "topic": "Tam Yol Kapsamı (Complete Path Coverage)",
    "question": "Bir yazılımda Tam Yol Kapsamı (Complete Path Coverage) sağlamak pratikte neden genellikle imkansızdır?",
    "options": [
      "Döngüler (loops) veya özyinelemeli çağrılar nedeniyle graf üzerinde sonsuz sayıda potansiyel yol bulunabilmesi.",
      "Yolların renklerinin olmaması.",
      "İşlemcilerin graf çizememesi.",
      "Testlerin yalnızca gündüz çalışabilmesi."
    ],
    "answer": 0
  },
  {
    "id": 177,
    "chapter": 6,
    "topic": "Graf Kapsama Hiyerarşisi (Subsumption)",
    "question": "Graf kapsama kriterleri arasındaki kapsama (subsumption) merdiveni en güçlüden en zayıfa doğru hangi seçenekte doğrudur?",
    "options": [
      "Complete Path → Prime Path → Edge-Pair → Edge Coverage → Node Coverage",
      "Node Coverage → Edge Coverage → Edge-Pair → Prime Path → Complete Path",
      "Edge Coverage → Node Coverage → Prime Path → Complete Path",
      "Prime Path → Complete Path → Node Coverage → Edge Coverage"
    ],
    "answer": 0
  },
  {
    "id": 178,
    "chapter": 6,
    "topic": "Gerçeklenemez Yollar (Infeasible Paths)",
    "question": "Kontrol Akış Grafında yapısal olarak var olan ancak çelişkili koşullar (örn. `x > 5` iken alt blokta `x < 2` kontrolü) nedeniyle hiçbir test girdisiyle fiilen çalıştırılamayan yollara ne ad verilir?",
    "options": [
      "Infeasible Path (Gerçeklenemez / Koşulamaz Yol)",
      "Prime Path",
      "Simple Path",
      "Def-clear Path"
    ],
    "answer": 0
  },
  {
    "id": 179,
    "chapter": 6,
    "topic": "Veri Akış Testi: Tanım (Definition / Def)",
    "question": "Veri Akış Testinde (Data Flow Testing) bir değişken için 'Tanım' (Definition / Def) ne anlama gelir?",
    "options": [
      "Değişkenin bellekte bir değer aldığı konum (atama, girdi okuma veya parametre alma)",
      "Değişkenin ekrana yazdırılması",
      "Değişkenin silinmesi",
      "Değişken tipinin ekranda gösterilmesi"
    ],
    "answer": 0
  },
  {
    "id": 180,
    "chapter": 6,
    "topic": "Veri Akış Testi: Kullanım (Use)",
    "question": "Veri Akış Testinde 'c-use' (hesaplama kullanımı) ve 'p-use' (koşul kullanımı) arasındaki fark nedir?",
    "options": [
      "c-use değişkenin bir hesaplamada, dönüş değerinde veya çıktıda kullanılmasıdır; p-use ise bir karar / koşul ifadesinde (`if (x > 0)`) dallanmayı belirlemek için kullanılmasıdır.",
      "c-use C dilinde, p-use Python dilinde kullanılır.",
      "c-use statik, p-use dinamik testtir.",
      "İkisi tamamen aynıdır."
    ],
    "answer": 0
  },
  {
    "id": 181,
    "chapter": 6,
    "topic": "Tanımsız-Temiz Yol (Def-Clear Path)",
    "question": "Bir $v$ değişkeninin bir tanımdan (def) bir kullanıma (use) kadar olan yolunda, aradaki hiçbir düğümde $v$'ye yeni bir değer atanmıyorsa bu yola ne ad verilir?",
    "options": [
      "Def-clear Path (Tanımdan-Temiz Yol)",
      "Infeasible Path",
      "Prime Path",
      "Infinite Loop"
    ],
    "answer": 0
  },
  {
    "id": 182,
    "chapter": 6,
    "topic": "All-Defs Kapsama Kriteri",
    "question": "Veri Akış Testinde 'All-Defs' (Tüm Tanımlar) kapsama kriteri neyi zorunlu kılar?",
    "options": [
      "Her bir değişken tanımı için, o tanımdan en az bir kullanıma (use) giden en az bir def-clear yolun test edilmesini",
      "Tüm değişkenlerin aynı anda silinmesini",
      "Değişkenlerin global olarak tanımlanmasını",
      "Kodda hiç değişken kullanılmamasını"
    ],
    "answer": 0
  },
  {
    "id": 183,
    "chapter": 6,
    "topic": "All-Uses Kapsama Kriteri",
    "question": "Veri Akış Testinde 'All-Uses' (Tüm Kullanımlar) kapsama kriteri neyi hedefler?",
    "options": [
      "Her bir değişken tanımı ile o tanımdan erişilebilen her bir kullanım (use) arasındaki def-clear yolların test edilmesini",
      "Sadece ekrana yazılan değişkenlerin testini",
      "Tüm kullanıcıların sisteme giriş yapmasını",
      "Yalnızca p-use kullanımlarını"
    ],
    "answer": 0
  },
  {
    "id": 184,
    "chapter": 6,
    "topic": "Veri Akışı Anomalisi: ur (Use before Def)",
    "question": "Bir değişken henüz başlatılmadan / değer atanmadan önce okunmaya çalışılırsa ortaya çıkan veri akışı anomalisi hangisidir?",
    "options": [
      "ur (use before definition)",
      "du (definition never used)",
      "dd (double definition)",
      "uu (use after use)"
    ],
    "answer": 0
  },
  {
    "id": 185,
    "chapter": 6,
    "topic": "Veri Akışı Anomalisi: du (Def never Used)",
    "question": "Bir değişkene bir değer atanması ancak sonrasında bu değerin hiçbir yerde okunmadan programın sonlanması veya üzerine yeni değer yazılması hangi anomalidir?",
    "options": [
      "du (definition never used / ölü kod)",
      "ur (use before definition)",
      "dd (double definition)",
      "loop anomaly"
    ],
    "answer": 0
  },
  {
    "id": 186,
    "chapter": 6,
    "topic": "Veri Akışı Anomalisi: dd (Double Def)",
    "question": "Bir değişkene atanan değer hiç okunmadan hemen ardından aynı değişkene ikinci kez değer atanması hangi anomalidir?",
    "options": [
      "dd (double definition)",
      "ur",
      "ud",
      "deadlock"
    ],
    "answer": 0
  },
  {
    "id": 187,
    "chapter": 6,
    "topic": "Karar Tablosu (Decision Table) Amacı",
    "question": "Karar Tablosu (Decision Table) tekniği hangi durumlarda en güçlü test tasarım yöntemidir?",
    "options": [
      "Çok sayıda mantıksal koşulun ve iş kuralının farklı kombinasyonlarla farklı eylemleri tetiklediği karmaşık iş mantıklarında",
      "Yalnızca tek bir butonun rengini test ederken",
      "Veritabanı bağlantı hızını ölçerken",
      "Kullanıcı şifre uzunluğunu denerken"
    ],
    "answer": 0
  },
  {
    "id": 188,
    "chapter": 6,
    "topic": "Karar Tablosu Bileşenleri",
    "question": "ISTQB standardına göre bir Karar Tablosunun satır ve sütun yapısı hangi temel parçalardan oluşur?",
    "options": [
      "Satırlar: Koşullar (Conditions) ve Eylemler (Actions) | Sütunlar: Kurallar (Rules / Senaryolar)",
      "Satırlar: Geliştirici isimleri | Sütunlar: Maaşlar",
      "Satırlar: Sunucu IP'leri | Sütunlar: Portlar",
      "Satırlar: Hata logları | Sütunlar: Çözüm yolları"
    ],
    "answer": 0
  },
  {
    "id": 189,
    "chapter": 6,
    "topic": "Karar Tablosu Boyutu Formülü",
    "question": "Bir karar tablosunda N adet ikili (True/False) bağımsız koşul bulunduğunda, indirgeme yapılmadan önceki tam tablo toplam kaç sütundan (kuraldan) oluşur?",
    "options": [
      "2^N sütun",
      "N sütun",
      "N + 1 sütun",
      "N^2 sütun"
    ],
    "answer": 0
  },
  {
    "id": 190,
    "chapter": 6,
    "topic": "Karar Tablosu İndirgeme (Minimization)",
    "question": "Karar tablosunda bir koşulun sonucunun belirli bir eylemi hiç etkilemediği durumlarda o hücreye konulan 'Farketmez' (Don't Care) işareti nedir ve ne işe yarar?",
    "options": [
      "Tire (-) veya yıldız (*) işareti ile gösterilir; benzer kuralların birleştirilmesini sağlayarak gereksiz test senaryolarını eler.",
      "Soru işareti (?) konulur ve tablodan silinir.",
      "X işareti konulur ve sistem hata verir.",
      "Sıfır (0) konulur ve koşul iptal edilir."
    ],
    "answer": 0
  },
  {
    "id": 191,
    "chapter": 6,
    "topic": "Karar Tablosu Kapsamı",
    "question": "Karar tablosu testinde '%100 Karar Tablosu Kapsamı' (Decision Table Coverage) elde etmek ne demektir?",
    "options": [
      "Tablodaki gerçeklenebilir (feasible) her bir kural / sütun kombinasyonu için en az bir test senaryosu çalıştırmak",
      "Tüm hücreleri yeşile boyamak",
      "Sadece tek bir sütunu denemek",
      "Tabloyu Excel'de açmak"
    ],
    "answer": 0
  },
  {
    "id": 192,
    "chapter": 6,
    "topic": "Karar Tablosunun Avantajı",
    "question": "Ders slaytlarına göre Karar Tablosu tekniğinin en önemli avantajı nedir?",
    "options": [
      "Karmaşık iş akışlarını ve karar mantıklarını eksiksiz modelleyerek hiçbir kural kombinasyonunun gözden kaçmamasını garanti etmesi.",
      "Tüm performans sorunlarını çözmesi.",
      "Kod yazımına gerek bırakmaması.",
      "Donanım hatalarını tamir etmesi."
    ],
    "answer": 0
  },
  {
    "id": 193,
    "chapter": 6,
    "topic": "Karar Tablosunun Dezavantajı",
    "question": "Karar Tablosu tekniğinin en belirgin iki kısıtlaması/dezavantajı nedir?",
    "options": [
      "Koşul sayısı arttıkça üssel (2^N) olarak hızla büyümesi ve sayısal girdi aralıkları / sınır değerleri (BVA) tek başına test edememesi.",
      "Yalnızca Windows ortamında çalışması.",
      "Tablonun yazdırılamaması.",
      "Hata yakalama gücünün sıfır olması."
    ],
    "answer": 0
  },
  {
    "id": 194,
    "chapter": 6,
    "topic": "BVA: 2 Değerli vs 3 Değerli Sınır",
    "question": "Sınır Değer Analizinde (BVA) 2 değerli sınır yaklaşımı ile 3 değerli sınır yaklaşımı arasındaki fark nedir?",
    "options": [
      "2 değerli yaklaşım sınırın üzerini ve hemen dışını (on ve off) test eder; 3 değerli yaklaşım ise sınırın hemen altını, tam üzerini ve hemen üstünü test eder.",
      "2 değerli yaklaşım hatalıdır.",
      "3 değerli yaklaşım sadece negatif sayılarda çalışır.",
      "İkisi de aynı değerleri üretir."
    ],
    "answer": 0
  },
  {
    "id": 195,
    "chapter": 6,
    "topic": "Durum Geçiş Testi (State Transition Testing)",
    "question": "Durum Geçiş Testi (State Transition Testing) hangi tür sistemlerin test edilmesinde en uygundur?",
    "options": [
      "Sistemin davranışı geçmiş olayların sırasına ve mevcut duruma (State) bağlı olarak değiştiğinde (örn. Sipariş: Verildi → Ödendi → Kargolandı)",
      "Yalnızca sabit matematik formülleri içeren sistemlerde",
      "Sadece tek bir ekranı olan web sitelerinde",
      "Statik HTML sayfalarında"
    ],
    "answer": 0
  },
  {
    "id": 196,
    "chapter": 6,
    "topic": "Durum Geçişinde Geçersiz Geçişler",
    "question": "Bir e-ticaret durum makinesinde 'Kargolanmış' (Shipped) durumundaki bir sipariş için 'İptal Et' (Cancel) eylemi tetiklenirse testte ne doğrulanmalıdır?",
    "options": [
      "Bu geçersiz geçişin (invalid transition) sistem tarafından reddedildiği ve siparişin bozulmadığı",
      "Sistemin hemen kapanması gerektiği",
      "Kargonun anında imha edilmesi gerektiği",
      "Kullanıcıya ücretsiz ürün verilmesi gerektiği"
    ],
    "answer": 0
  },
  {
    "id": 197,
    "chapter": 6,
    "topic": "Hata Tahmini (Error Guessing)",
    "question": "Hata Tahmini (Error Guessing) tekniğinin tanımı ve dayanağı nedir?",
    "options": [
      "Test mühendisinin geçmiş deneyimlerine, sezgilerine ve bilinen hata kontrol listelerine dayanarak sistemde hata çıkması en muhtemel noktaları hedeflemesi",
      "Yazı tura atarak rastgele test senaryosu seçmek",
      "Yapay zekanın kod yazması",
      "Müşterinin tahminlerine göre kod yazmak"
    ],
    "answer": 0
  },
  {
    "id": 198,
    "chapter": 6,
    "topic": "Keşif Testi (Exploratory Testing)",
    "question": "Keşif Testi (Exploratory Testing) nasıl yürütülür?",
    "options": [
      "Test tasarımı, test yürütme ve sistem öğreniminin eşzamanlı olarak, genellikle belirli bir zaman kutusu (time-box) ve odak tüzüğü (charter) içinde yapılmasıyla",
      "Yalnızca yazılı senaryoların kelimesi kelimesine takip edilmesiyle",
      "Testlerin tamamen otomasyon botlarına bırakılmasıyla",
      "Kaynak kodun satır satır ezberlenmesiyle"
    ],
    "answer": 0
  },
  {
    "id": 199,
    "chapter": 6,
    "topic": "Maksimum Kapsam İçin 4 Adımlı Strateji",
    "question": "Ders slaytlarının sonuç bölümünde iş mantığı için maksimum test kapsamı sağlamak üzere önerilen 4 adım hangi seçenekte eksiksiz sıralanmıştır?",
    "options": [
      "Adım 1: Karar Tablosu → Adım 2: BVA & EP → Adım 3: Alan Düzeyi Kombinasyonlar → Adım 4: Deneyimle Hata Tahmini (Error Guessing)",
      "Adım 1: Manuel Test → Adım 2: Otomatik Test → Adım 3: Yük Testi → Adım 4: Güvenlik Testi",
      "Adım 1: Kodlama → Adım 2: Derleme → Adım 3: Canlıya Alma → Adım 4: Dua Etme",
      "Adım 1: E2E Test → Adım 2: UI Test → Adım 3: Unit Test → Adım 4: API Test"
    ],
    "answer": 0
  },
  {
    "id": 200,
    "chapter": 6,
    "topic": "Vize Kapsamı ve Bütünleştirme",
    "question": "CEN315 Test Mühendisliği vize konularının (Hafta 1-6) tamamı göz önüne alındığında, profesyonel bir test mühendisinin nihai hedefi nedir?",
    "options": [
      "Farklı test seviyelerini, arayüzlerini ve tasarım tekniklerini uygun risk modelleriyle birleştirerek yazılımın güvenilirliğini, kalitesini ve sürdürülebilirliğini proaktif olarak güvenceye almak.",
      "Sadece tek bir aracı öğrenip tüm projelerde yalnızca onu kullanmak.",
      "Yazılım geliştiricilerle hiç iletişim kurmadan sadece hata raporu yazmak.",
      "Kod kapsamı %100 olduktan sonra başka hiçbir test yapmamak."
    ],
    "answer": 0
  }
];
