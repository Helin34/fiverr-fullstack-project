# 🛒 Fiverr Clone - MERN Stack E-Ticaret ve Hizmet Platformu

> Bu projem, MERN stack (MongoDB, Express.js, React, Node.js) teknolojileri kullanarak geliştirmiş olduğum tam kapsamlı bir **Fiverr (Hizmet ve Yetenek Pazarı)** klonudur. Kullanıcıların hizmet (gig) oluşturabildiği, kategorilere göre filtreleme yapabildiği ve detaylı inceleyebildiği dinamik bir web uygulamasıdır.

## 🎥 Proje Gif Önizleme

![Ön İzleme](./assets/fiverr-demo.mp4)

---

## 🚀 Özellikler

- **Kapsamlı Filtreleme & Arama:** Kategorilere ve arama sorgularına göre anlık dinamik sonuç filtreleme.
- **Detaylı Hizmet (Gig) Sayfaları:** `@splidejs` destekli görsel slider yapısı ve satıcı profili entegrasyonu.
- **Güvenli Kimlik Doğrulama:** JWT tabanlı kullanıcı kayıt ve giriş mekanizması.
- **Dinamik Veri Yönetimi:** Mongoose şemaları ile yapılandırılmış MongoDB veritabanı ilişkileri (User & Gig).
- **Responsive Tasarım:** Tailwind CSS kullanılarak mobil, tablet ve masaüstü cihazlarla tam uyumlu arayüz.

---

## 🛠️ Kullanılan Teknolojiler

Bu proje, modern web geliştirme standartlarına uygun olarak aşağıdaki teknolojilerle inşa edilmiştir:

### **Frontend:**

- **React** & **TypeScript** (Bileşen tabanlı mimari ve tip güvenliği)
- **React Router** (Sayfa yönlendirmeleri ve arama parametresi yönetimi)
- **Tailwind CSS** (Modern ve duyarlı kullanıcı arayüzü tasarımı)
- **Splide.js** (Görsel ve slider yönetimi)

### **Backend:**

- **Node.js** & **Express.js** (RESTful API mimarisi)
- **MongoDB** & **Mongoose** (NoSQL veritabanı ve nesne modelleme)
- **JWT (JSON Web Token)** (Oturum yönetimi ve yetkilendirme)

---

## 📂 Proje Mimarisi

```text
fiverr-clone/
│
├── client/                 # Frontend (React & Vite & Tailwind)
│   ├── src/
│   │   ├── components/     # Ortak bileşenler (Card, Loader, Error vb.)
│   │   ├── pages/          # Sayfa bileşenleri (Search, Detail vb.)
│   │   ├── service/        # API istekleri (Axios entegrasyonları)
│   │   └── types/          # TypeScript arayüz tanımlamaları
│
└── api/                    # Backend (Node.js & Express)
    ├── models/             # Mongoose şemaları (User, Gig)
    ├── routes/             # API yönlendiricileri
    └── controllers/        # İş mantığı katmanı
```
