import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenFancy,
  FaVideo,
  FaMusic,
  FaBriefcase,
  FaRobot,
  FaUserTie,
  FaCamera,
  FaChartLine,
  FaHeartbeat,
} from "react-icons/fa";

export const categories = [
  { name: "Programlama ve Teknoloji", icon: <FaCode /> },
  { name: "Grafik Tasarımı", icon: <FaPaintBrush /> },
  { name: "Dijital Pazarlama", icon: <FaBullhorn /> },
  { name: "Yazma ve Çeviri", icon: <FaPenFancy /> },
  { name: "Video ve Animasyon", icon: <FaVideo /> },
  { name: "Yapay Zeka Hizmetleri", icon: <FaRobot /> },
  { name: "Müzik ve Ses", icon: <FaMusic /> },
  { name: "İş", icon: <FaBriefcase /> },
  { name: "Danışmanlık", icon: <FaUserTie /> },
  { name: "Fotoğrafçılık", icon: <FaCamera /> },
  { name: "Finans ve Muhasebe", icon: <FaChartLine /> },
  { name: "Yaşam Tarzı", icon: <FaHeartbeat /> },
];

export const infoItems = [
  {
    title: "Uzman işe alım danışmanlığı",
    text: "Doğru yeteneği bulmanız ve projenizin her ihtiyacını karşılamnız için bir hesap yöneticisine güvenin",
  },
  {
    title: "Memnuniyet Garantisi",
    text: "Doğru yeteneği bulmanız ve projenizin her ihtiyacını karşılamnız için bir hesap yöneticisine güvenin",
  },
  {
    title: "Gelişmiş yönetim araçları",
    text: "Doğru yeteneği bulmanız ve projenizin her ihtiyacını karşılamnız için bir hesap yöneticisine güvenin",
  },
  {
    title: "Esnek Ödeme Modelleri",
    text: "Doğru yeteneği bulmanız ve projenizin her ihtiyacını karşılamnız için bir hesap yöneticisine güvenin",
  },
];

export const gigInputs = [
  {
    label: "Başlık",
    name: "title",
  },
  {
    label: "Kapak Fotoğrafı",
    name: "coverImage",
    type: "file",
  },
  {
    label: "Fotoğraflar",
    name: "images",
    type: "file",
    multiple: true,
  },
  {
    label: "Revizyon sayısı",
    name: "packageRevision",
    type: "number",
    min: 1,
    max: 99,
  },
  {
    label: "Özellikler(, ile ayırın)",
    name: "packageFeatures",
    type: "textarea",
  },
  {
    label: "Açıklama",
    name: "description",
    type: "textare",
  },
  {
    label: "Paket Açıklama",
    name: "packageDescription",
    type: "textarea",
  },
  {
    label: "Paket Başlığı",
    name: "packageTitle",
  },
  {
    label: "Teslimat Süresi",
    name: "packageDuration",
    type: "number",
    min: 1,
    max: 99,
  },
  {
    label: "Fiyat ($)",
    name: "packagePrice",
    type: "number",
    min: 1,
  },
  {
    label: "Kategori",
    name: "category",
    type: "select",
    options: categories.map((i) => i.name),
  },
];
