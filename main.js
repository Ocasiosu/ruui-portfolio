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

// Platform icons (emoji for reliable display)
const icons = {
    YouTube: '▶️',
    note: '📝'
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
