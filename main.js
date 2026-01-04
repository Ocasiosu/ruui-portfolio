// Works Data - combining YouTube videos and Note articles
const works = [
    // YouTube Videos
    {
        id: 'yt1',
        title: '99%の人が知らない、Macボイスメモの録音ファイルを一瞬で見つける裏技',
        thumbnail: './assets/video_v1.jpg',
        url: 'https://www.youtube.com/watch?v=Oy4ZX3nLTv4',
        type: 'YouTube'
    },
    {
        id: 'yt2',
        title: '【Gemini活用】1人で悩まない思考整理術。「人格プロンプト」で脳内会議をする方法',
        thumbnail: './assets/video_v2.jpg',
        url: 'https://www.youtube.com/watch?v=AJ9Ra1egzS8',
        type: 'YouTube'
    },
    {
        id: 'yt3',
        title: '【APIコスト激減】GPT-5.2が拒否した「AI機械語プロンプト」のロストテクノロジーを大公開',
        thumbnail: './assets/video_v3.jpg',
        url: 'https://www.youtube.com/watch?v=dJ88sNwa0OA',
        type: 'YouTube'
    },
    {
        id: 'yt4',
        title: 'M4MacBookAir半年レビュー メモリ24GBは本当に必要だったのか？',
        thumbnail: './assets/video_p1.jpg',
        url: 'https://www.youtube.com/watch?v=zBJ6D_ss0eg',
        type: 'YouTube'
    },
    // Note Articles
    {
        id: 'note1',
        title: 'Gemini3proで著名な人格を召喚して戦わせたら、議論が深まるしメンタルも守れた話',
        thumbnail: './assets/article_n1.png',
        url: 'https://note.com/ruui_works/n/ncf5691bdf0ce',
        type: 'note'
    },
    {
        id: 'note2',
        title: 'PremiereProの自動文字起こしがポンコツすぎるので、無料AIに任せたら作業時間が1/6になった話',
        thumbnail: './assets/article_n2.jpeg',
        url: 'https://note.com/ruui_works/n/nbaca20b2f7ea',
        type: 'note'
    }
];

// Platform icons (inline SVG)
const icons = {
    YouTube: `<svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    note: `<svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
};

// Create work card
const createWorkCard = (work) => {
    const card = document.createElement('div');
    card.className = 'work-card';
    card.onclick = () => window.open(work.url, '_blank');

    card.innerHTML = `
        <img src="${work.thumbnail}" alt="${work.title}">
        <div class="work-card-content">
            <h3>${work.title}</h3>
            <span class="meta platform-badge ${work.type.toLowerCase()}">${icons[work.type]} ${work.type}</span>
        </div>
    `;
    return card;
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const worksGrid = document.getElementById('works-grid');
    if (worksGrid) {
        works.forEach(work => {
            worksGrid.appendChild(createWorkCard(work));
        });
    }
});
