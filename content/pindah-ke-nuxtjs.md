---
title: "Pindah Ke Nuxt.Js"
date: 2019-10-12
thumbnail: "/siarie.me.webp"
description: "Nuxt.Js merupakan sebuah framework untuk membuat Universal Vue.Js Application"
publish: true
---

# Kenapa Pindah?
Berpikir tentang "Kenapa Pindah?" jadi terpikir tentang sebuah pertanyaan "Kenapa buat website?". Sebagai seorang (penyuka) IT rasanya tidak keren kalo gak punya website sendiri, setidaknya hanya web portfolio (walaupun belum ada portfolio). Dikarenakan saya sendiri juga kurang suka menulis, tetapi saya tetap ingin webnya ada fitur blog jika suatu hari nanti saya ingin menulis sesuatu.

Berbicara tentang website, sebenarnya saya dulu pernah jadi blogger. Waktu itu saya masih duduk di bangku SMK tepatnya kelas 1 Semester II. Pertama kali ngeblog saya menggunakan platform wordpress, tapi bukan *sefl hosted* yah. Menggunakan layanan dari [Wordpress.Com](https://wordpress.com) waktu itu, tidak lama kemudian saya berhenti. Tidak lama setelah naik kelas saya berniat aktif nge-blog lagi. Tetapi kali ini saya ingin menggunakan [Blogspot](htts://blogger.com), dikarenkan wordpress yang *Cloud Hosted* terlalu sedikit fitur yang digratiskan, dan disinilah penyesalan saya. Saya menghapus blog wordpress tanpa pikir panjang. Bukan masalah webnya yang saya hapus, tapi saya lupa mem-*backup* tulisan saya saya waktu itu. Konten yang saya buat dengan modal Rp. 5000 / konten (buat sewa warnetnya) hanya 2 yang terselamatkan.

**STOP**... Sampai disini saja ceritanya. Sebenarnya masih ada kelanjutannya, tapi kayaknya akan panjang jadi saya stop disini aja.

**Timeskip**

Jadi, kenapa pindah?. Website yang saya buat awalnya menggunakan [Hugo](https://gohugo.io). Karena suatu hal saya berhenti mengembangkan websitenya. Kemudian saya merasa kurang cocok dengan Hugo. Hugo ini sepertinya lebih cocok untuk orang-orang yang suka nge-*blog*. Untuk itu saya pengen pindah ke lain hati. Dikarenakan saat ini saya lagi mendalami javascript, saya memilih pindah ke framework yang base-nya javascript dan saya lihat di [Staticgen](https://staticgen.com) Nuxt.Js sepertinya cukup populer. Karena saya juga sedang mempelajari Vue.Js jadi saya memutuskan menggunakan Nuxt.

# Kenapa Nuxt.Js?
>Nuxt.Js merupakan sebuah framework untuk membuat *Universal Vue.Js Application*. 

Sebelumnya saya pernah mencoba membangun blog menggunakan Vue.Js, tetapi banyak kesulitan. Berbeda dengan Vue.Js, Nuxt mengatur semua konfigurasi yang dibutuhkan untuk membuat aplikasi Vue.Js lebih menyenangkan. Dan Nuxt.Js ini juga bagus untuk SEO, walaupun saya belum benar-benar butuh SEO disini. Yaah, pokoknya gitu deh. Kalo mau tau lebih lanjut bisa kunjungi dokumentasi resminya [disini](https://nuxtjs.org).

# Interface
Untuk tampilan atau tema sendiri saya menggunakan style saya sebelumnya, dan ini sebenernya belum sepenuhnya selesai masih banyak yang perlu diperbaiki/dirubah. Saya memakai *pure css* disini, semenjak saya mendalami CSS beberapa bulan lalu saya sadar bahwa membuat style sendiri itu tidak terlalu rumit. Alasan lain kenapa saya kurang suka memakai framework adalah karena bisa berpengaruh pada *performance*. Mungkin pernah mendengar kata *unusable css, unusable class, unusable style*, atau apalah namanya pokoknya ada kata *unusable*. Banyaknya style yang tidak digunakan juga tidak baik untuk *performance*, meskipun framework sendiri bisa dikustomisasi menggunakan SASS/LESS dengan menghilangkan komponen yang tidak diperlukan.

# Tambahan
Ada beberapa plugin penting yang saya gunakaan dalam membuat wesite saya, diantaranya adalah:

### 1. frontmatter-markdown-loader
Seperti namanya plugin ini saya gunakan untuk me-*load* frontmatter pada markdown yang berformat YAML
``` md
---
title: "Pindah Ke Nuxt.Js"
date: 2019-10-12
thumbnail: ""
description: ""
publish: true

---
```
Selengkapnya tentang [frontmatter-markdown-loader](https://github.com/hmsk/frontmatter-markdown-loader)

### 2. Marked.Js
Jika sebelumnya nge-*load* frontmatter pada markdown, lalu selanjutnya marked ini bertugas untuk me-*render* html nya. karena output dari frontmatter tadi merupakan html.

Selengkapnya tentang [Marked.Js](https://marked.js.org/)

### 3. Highlight.Js
Codeblock rasanya nggak gaul kalo gak dikasih highlight ya kan?. Dan inilah fungsi highlight.js ini. saya sisipkan contoh disini
``` javascript
// ini javascript
let text = 'The Progressive Vue.js Framework'
console.log(text)
```
``` py
# contoh dengan bahasa python
print('Ini Python')
```

Selengkapnya tentang [Highlight.Js](https://highlightjs.org/)

### 4. vue-feather-icons
Kalo ini adalah versi vue-nya dari [Feathericons](https://feathericons.com/)

Selengkapnya tentang [vue-feather-icons](https://github.com/egoist/vue-feather-icons)

# Penutup
Masih banyak yang perlu diperbaiki dari website ini sampai saya benar-benar puas. Source code website ini tersedia [github](https://github.com/siarie/siarie.me)

Terima kasih yang telah membaca tentang migrasi saya ke Nuxt.Js