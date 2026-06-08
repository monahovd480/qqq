/**
 * Практическая работа №3, №4, №5
 * JavaScript для галереи изображений
 * Автор: Дмитрий Монахов
 * Группа: 1ИП6
 */

const imagesData = [
    { id: 1, title: "Чайные террасы Уишань", date: "10 апреля 2025", description: "Знаменитые чайные террасы провинции Фуцзянь.", category: "tea", tags: ["улун", "чайные террасы"], imgUrl: "https://picsum.photos/id/104/400/300", alt: "Чайные плантации" },
    { id: 2, title: "Китайская чайная церемония", date: "18 мая 2025", description: "Традиционная церемония Гунфу Ча.", category: "ceremony", tags: ["церемония", "Гунфу Ча"], imgUrl: "https://picsum.photos/id/30/400/300", alt: "Чайная церемония" },
    { id: 3, title: "Свежие листья пуэра", date: "3 марта 2025", description: "Сбор молодых листьев для ферментированного чая.", category: "tea", tags: ["пуэр", "сбор чая"], imgUrl: "https://picsum.photos/id/127/400/300", alt: "Чайные листья" },
    { id: 4, title: "Чайный домик в саду", date: "22 июня 2025", description: "Традиционная чайная комната.", category: "ceremony", tags: ["чайный домик", "сад"], imgUrl: "https://picsum.photos/id/96/400/300", alt: "Чайный домик" },
    { id: 5, title: "Водопад в горах Хуаншань", date: "15 июля 2025", description: "Природа провинции Аньхой.", category: "nature", tags: ["горы", "водопад"], imgUrl: "https://picsum.photos/id/97/400/300", alt: "Водопад