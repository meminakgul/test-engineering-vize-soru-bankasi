# CEN315 Test Engineering - Vize Soru Bankası Web Uygulaması

Bu proje, **CEN315 Test Engineering** dersinin ilk 6 haftalık ders slaytlarından (**test eng 1.pdf** – **test eng 6.pdf**) doğrudan ve titizlikle çıkarılmış **200 soruluk** interaktif bir vize soru bankası ve sınav hazırlık web uygulamasıdır.

## 🎯 Temel Özellikler
- **Göz Yormayan Minimalist Tasarım:** Sade, şık, açık ve koyu tema destekli.
- **200 Tam Dengeli ve Özgün Soru:**
  - **Şık Uzunluğu Dengesi:** Doğru cevapların uzunluğundan tahmin edilmesini imkansız kılan, tüm şıkların benzer gramer yapısında ve dengeli uzunlukta olduğu sınav kalitesinde çeldiriciler.
  - **Dengeli Cevap Dağılımı:** Cevap anahtarları A, B, C ve D şıklarına yaklaşık %25'lik eşit oranda dağıtılmıştır.
  - Bölüm 1: Kalite Temelleri, QA/QC, Verification/Validation, ISO 25010, EP/BVA, RBT, SDLC (Sorular 1 - 33)
  - Bölüm 2: Birim Testi Temelleri, Test Piramidi (%70-%20-%10), AAA Kalıbı, Assertion'lar, JUnit/NUnit, Error/Fault/Failure (Sorular 34 - 66)
  - Bölüm 3: İleri Birim Testi, TDD (Red-Green-Refactor), Test Dublörleri (Dummy, Stub, Fake, Spy, Mock), Test Smells, CI/CD (Sorular 67 - 100)
  - Bölüm 4: Kod Kapsama Metrikleri (Statement, Branch, MCC, MC/DC), RIPR Modeli, Mutasyon Testi (Mutantlar, Mutasyon Skoru, Araçlar) (Sorular 101 - 134)
  - Bölüm 5: Entegrasyon Testi Stratejileri (Top-Down, Bottom-Up, Sandwich), Mars Climate Orbiter hatası, REST API, HTTP Metotları ve Durum Kodları, Postman, Newman (Sorular 135 - 167)
  - Bölüm 6: İleri Test Tasarımı, Graf Kapsamı (CFG, Node, Edge, Edge-Pair, Prime Path), Veri Akış Testi (Def-Use, Def-clear), Karar Tabloları, Durum Geçiş Testi, Hata Tahmini (Sorular 168 - 200)
- **💡 Açıklamayı Göster Butonu:** Her sorunun altında yer alan buton ile doğru cevabın gerekçesini ve ders slaytlarındaki kavramsal arka planını detaylıca görüntüleyebilme.
- **Kaldığın Yerden Devam Etme (Otomatik Kaydetme):** Uygulamayı kapatsanız veya yenileseniz dahi en son kaldığınız soru ve çözdüğünüz sorular `localStorage` ile otomatik olarak hatırlanır ve doğrudan oradan başlar.
- **Akıllı Cevap Denetimi:** Doğru seçeneğe tıklandığında yeşil yanar, ikinci kez tıklandığında güvenli bir şekilde sonraki soruya geçer. Yanlış tıklandığında kırmızı yanarak devre dışı kalır ve doğru cevabı doğrudan ele vermez.
- **Rastgele Sıralama (Shuffle):** Soruları tekrarsız rastgele sırayla çözebilme.
- **Hızlı Soru Atlama:** 200 soruyu görsel durumlarıyla listeleyen açılır ızgara menü.
- **Klavye Kısayolları:** Sol/Sağ Ok tuşları ile gezinme; A, B, C, D veya 1, 2, 3, 4 tuşları ile şık işaretleme.
