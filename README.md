# CostWatch - Frontend Client 🚀

CostWatch, e-ticarət platformalarındakı (Trendyol, Amazon və s.) məhsulların qiymət dəyişikliklərini real vaxt rejimində izləyən və hədəf qiymətə düşdükdə istifadəçiyə bildiriş göndərən bir Micro-SaaS platformasıdır. Bu qovluq layihənin frontend (Client) hissəsini ehtiva edir.

## 🛠️ İstifadə Olunan Texnologiyalar

* **Framework:** React (Vite ilə quraşdırılıb)
* **CSS Framework:** Tailwind CSS v4 (Müasir, konfiqurasiyasız mühərrik)
* **Routing:** React Router Dom v6+
* **İkonlar:** Lucide React
* **HTTP Client:** Axios (Backend API sorğuları üçün)

---

## 📂 Qovluq Strukturu (Folder Structure)

Layihə scalable və modulyar arxitektura prinsiplərinə uyğun olaraq aşağıdakı strukturda qurulmuşdur:

```text
src/
├── assets/          # Loqolar, qlobal şəkillər və statik fayllar
├── components/      # Təkrar istifadə edilə bilən komponentlər
│   ├── common/      # Qlobal ortaq komponentlər (Button, Input və s.)
│   ├── home/        # Sırf Landing (Tanıtım) səhifəsinə aid komponentlər
│   └── dashboard/   # Sırf daxili panelə aid komponentlər
├── context/         # Qlobal State idarəetməsi (Məs: AuthContext)
├── hooks/           # Custom React Hook-ları
├── layouts/         # Səhifə skeletləri (Məs: DashboardLayout)
├── pages/           # Əsas böyük səhifələr (Home, Login, Dashboard)
├── services/        # Backend .NET API ilə əlaqə quran servis funksiyaları
├── App.jsx          # Router xəritəsi və ana giriş nöqtəsi
└── main.jsx         # Layihənin ayağa qaldırıldığı yer