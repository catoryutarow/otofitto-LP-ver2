/**
 * オトフィット LP の表示データ。
 * 将来 CMS 連携するときは、ここを「fetch して返す関数」に差し替えるだけで
 * 各セクションコンポーネントは変更不要になる想定。
 */

export type Instructor = {
  name: string;
  furigana?: string;
  role: string;
  badge: string;
  image: string;
  details: string[];
  achievement: string[];
  variant: "navy" | "grey";
};

export type MusicMember = {
  name: string;
  image: string;
  roleTag: string;
  tagColor: "green" | "blue" | "pink";
  details: string[];
};

export type MovingMember = {
  label: string;
  name: string;
  details: string[];
  message: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type DetailItem = {
  label: string;
  value: string[];
  note?: string;
};

export type IndustryTag = {
  label: string;
  highlight?: boolean;
};

export type CompanyRow = {
  label: string;
  value: string | string[];
  isBadgeList?: boolean;
};

// === 講師 (世界タイトルホルダー 3名) =========================================
export const instructors: Instructor[] = [
  {
    name: "横関 裕二",
    role: "ボディビル・クラシックフィジーク",
    badge: "世界大会 優勝",
    image: "/yokozeki.JPG",
    details: [
      "JBBF現役日本代表",
      "NSCA認定パーソナルトレーナー",
      "中高保健体育教諭免許",
    ],
    achievement: [
      "ARNOLD CLASSIC EUROPE 2024",
      "Men's Classic Bodybuilding 優勝",
    ],
    variant: "navy",
  },
  {
    name: "森 更紗",
    role: "健康・姿勢改善",
    badge: "世界大会 入賞",
    image: "/sarasa.jpg",
    details: [
      "筑波大学 体育専門学群出身",
      "健康運動指導士",
      "中高保健体育教諭免許",
    ],
    achievement: ["ラート世界選手権2015 団体2位", "シルホイール世界選手権2016 個人3位"],
    variant: "grey",
  },
  {
    name: "青柳 呂武",
    role: "音楽・口笛",
    badge: "世界チャンピオン",
    image: "/romu.jpg",
    details: [
      "東京藝術大学大学院修了",
      "NHK・TBS等 TV多数出演",
      "中高音楽教諭免許",
    ],
    achievement: ["IWC2014 グランドチャンピオン", "史上最年少・日本人男性初"],
    variant: "navy",
  },
];

// === 音楽サポートチーム (株式会社モテコロ) ==================================
export const musicMembers: MusicMember[] = [
  {
    name: "加藤 龍太郎",
    image: "/kato.png",
    roleTag: "ピアノ無双",
    tagColor: "green",
    details: ["東京藝術大学在学", "作曲200曲超・音楽講師"],
  },
  {
    name: "伊藤 優人",
    image: "/ito.png",
    roleTag: "ギター無双",
    tagColor: "blue",
    details: ["プロギタリスト", "年間100本超ライブ"],
  },
  {
    name: "西井 聖華",
    image: "/nishii.png",
    roleTag: "カラオケ無双",
    tagColor: "pink",
    details: ["シンガーソングライター", "歌好きグランプリ 準V"],
  },
];

// === 一緒に動くチーム (2名) ===================================================
export const movingMembers: MovingMember[] = [
  {
    label: "キャプテン山本 / 株式会社スポルアップ 代表",
    name: "山本 慎二郎",
    details: [
      "元高校球児・健康マニア社長",
      "楽天・Amazon出身",
      "230社超のEC事業を支援",
    ],
    message: "経営者目線で音頭をとり、社員と一緒に全力で動く",
  },
  {
    label: "コーチ井上",
    name: "井上 美紀",
    details: [
      "筑波大学 体育専門学群出身",
      "フィットネストレーナー",
      "鍼灸師国家資格保有",
    ],
    message: "参加者の身体に寄り添い、痛み・疲労をその場でケア",
  },
];

// === 経営者が得られる成果 =====================================================
// 企画書「オトフィット 企画概要」の3本柱（安全性・一体感・ダイエット効果）と
// 健康経営テーマから、経営者視点での4成果を構成。
export const benefits: Benefit[] = [
  {
    title: "健康経営施策としての即戦力",
    description:
      "健康経営優良法人の認定で問われる「具体的な取り組み」として、そのまま社内記録に残せます。専門人材・特別な設備は不要。年1回の単発実施から始められます。",
  },
  {
    title: "部署・年齢を超えた一体感",
    description:
      "生演奏、手拍子、会場内ウォーク、コール&レスポンス。役職も部署も年齢も超えて、全員が同じ歌を歌っている。普段は話さない社員同士が、コミュニケーションを取れる90分です。",
  },
  {
    title: "全員が無理なく参加できる安全設計",
    description:
      "運動経験は問いません。ジャンプなしの代替動作、20〜25分ごとの給水、任意参加の演出。年齢差・体力差のあるチームでも、置き去りにする人を作らない設計です。",
  },
  {
    title: "継続的な健康改善とストレス発散",
    description:
      "有酸素・自重・ライトHIIT・コアトレを、音楽に乗せて90分。運動不足、姿勢の崩れ、溜まったストレスを一度にケア。社員から「またやりたい」の声が、自然に上がります。",
  },
];

// === イベント詳細 4項目 =======================================================
export const detailItems: DetailItem[] = [
  {
    label: "形式・時間",
    value: ["出張型（会場不問）", "60〜90分／応相談"],
  },
  {
    label: "対象",
    value: ["運動経験不問", "全社員・全年齢層対応"],
  },
  {
    label: "対応エリア",
    value: ["全国対応可"],
    note: "(交通費別途ご相談)",
  },
  {
    label: "内容",
    value: ["体操・姿勢改善 × ライブ演奏・リズム運動"],
  },
];

// === Hero の業種タグ ==========================================================
export const industries: IndustryTag[] = [
  { label: "建設・土木" },
  { label: "物流・運送" },
  { label: "介護・福祉" },
  { label: "製造・工場" },
  { label: "警備" },
  { label: "現場を持つ全業種", highlight: true },
];

// === Hero のバッジ ============================================================
export const heroBadges = ["企業向け", "ヘルス＆メンタルケア", "体験イベント"];

// === 会社情報 =================================================================
export const companyInfo: CompanyRow[] = [
  { label: "会社名", value: "株式会社スポルアップ (Spollup inc.)" },
  { label: "設立", value: "2017年3月" },
  {
    label: "所在地",
    value: "東京都調布市布田1-43-2 グレースメゾン谷中 N棟204",
  },
  { label: "代表者", value: "山本 慎二郎" },
  {
    label: "主要取引先",
    value: [
      "楽天グループ",
      "Amazon",
      "TBSテレビ",
      "日本テレビ",
      "テレビ朝日",
      "ミズノ",
    ],
    isBadgeList: true,
  },
];

// === CTA =====================================================================
export const cta = {
  phone: { value: "050-4560-2385", href: "tel:050-4560-2385" },
  email: { value: "info@spollup.jp", href: "mailto:info@spollup.jp" },
  url: "https://spollup.jp/contact/",
};
