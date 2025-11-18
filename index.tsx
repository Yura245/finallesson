import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Users, 
  Target, 
  Layout, 
  MousePointerClick, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3,
  Settings,
  Search,
  MessageSquare,
  Factory,
  FileText,
  ShieldCheck,
  HardHat,
  MapPin,
  Briefcase,
  Wallet,
  AlertTriangle,
  Heart,
  Lock,
  Check,
  Clock,
  TrendingUp,
  Zap,
  HelpCircle,
  Smartphone,
  Image as ImageIcon,
  Download,
  Calculator,
  Star,
  Phone,
  Menu,
  X,
  ChevronRight,
  PlayCircle,
  UserCheck,
  Calendar,
  Hammer,
  FileCheck,
  Truck,
  Video,
  Magnet,
  Gift,
  FileDown,
  Bot,
  Database,
  MessageCircle
} from 'lucide-react';

// --- Types & Data ---

type Tab = 'analytics' | 'offers' | 'site' | 'lead_magnet';

interface SegmentData {
  id: number;
  title: string;
  icon: React.ReactNode;
  demographics: {
    gender: string;
    age: string;
    geo: string;
    status: string;
    income: string;
  };
  psychographics: {
    fears: string[];
    desires: string[];
    pain: string;
  };
  jtbd: string;
  sixW: {
    who: string;
    what: string;
    where: string; // Где искать
    when: string; // Когда
    why: string; // Почему мы
    which: string; // Критерии выбора
  };
}

const segments: SegmentData[] = [
  {
    id: 1,
    title: "Агробизнес (КФХ) — «Экономный Хозяйственник»",
    icon: <Users className="w-6 h-6 text-green-600" />,
    demographics: {
      gender: "Мужчины (95%)",
      age: "35–65 лет",
      geo: "Краснодарский край (Тимашевск + 200км), ЮФО",
      status: "Глава КФХ, Агроном",
      income: "Сезонный. Ищут оптимальное соотношение цена/качество."
    },
    psychographics: {
      fears: [
        "Зерно сгорит/промокнет в дешевом ангаре",
        "Ангар сложится от снега (нужен правильный профиль)",
        "Долгострой в сезон уборки"
      ],
      desires: [
        "Максимально дешево закрыть вопрос хранения",
        "Построить быстро (бескаркасник) до дождей",
        "Чтобы техника свободно заходила (высота)"
      ],
      pain: "Старые склады рушатся, элеваторы дерут три шкуры за хранение. Нужно свое дешевое хранилище."
    },
    jtbd: "Когда подходит сезон, я хочу быстро (за 2-3 недели) поставить бескаркасный ангар, чтобы сэкономить на фундаменте и сохранить урожай.",
    sixW: {
      who: "Фермеры, Главы КФХ, Владельцы паев.",
      what: "Бескаркасные арочные ангары (Зернохранилища) под ключ.",
      where: "Яндекс Поиск («ангары цена»), Авито, Сарафанное радио.",
      when: "Остро: Август-Сентябрь (перед уборкой). Планово: Март-Апрель.",
      why: "Цена от 3500р/м2 (дешевле капитального), Скорость (14 дней), Герметичность.",
      which: "Толщина металла (не фольга), Опыт бригады, Отсутствие предоплаты 100%."
    }
  },
  {
    id: 2,
    title: "Производственники — «Основательный»",
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    demographics: {
      gender: "Мужчины",
      age: "40–55 лет",
      geo: "Промзоны Краснодара, Тимашевска, Ростова",
      status: "Владелец производственной компании",
      income: "Стабильный оборот"
    },
    psychographics: {
      fears: [
        "В арочном ангаре неудобно ставить стеллажи (стены кривые)",
        "Будет холодно/жарко работникам",
        "Проблемы с кран-балкой"
      ],
      desires: [
        "Полноценное прямостенное здание",
        "Теплый контур (сэндвич-панели)",
        "Эстетичный внешний вид офиса/цеха"
      ],
      pain: "Нужен полноценный цех, но капитальное строительство из бетона — это долго и дорого."
    },
    jtbd: "Когда расширяю производство, я хочу построить каркасный прямостенный ангар, чтобы максимально использовать полезную площадь и высоту стен.",
    sixW: {
      who: "Владельцы заводов, СТО, Логистических центров.",
      what: "Каркасные прямостенные ангары (Сэндвич/Профлист).",
      where: "Поиск подрядчика с проектным отделом, Тендеры.",
      when: "При расширении бизнеса, запуске новой линии.",
      why: "Возможность утепления, Прямые стены, Эстетика, Прочность.",
      which: "Наличие СРО, Проект КМ/КМД, Работа с НДС, Гарантия."
    }
  }
];

// --- Components ---

const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-orange-600 text-white p-2 rounded-lg font-black text-xl italic tracking-tighter">СК</div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 uppercase tracking-tight">СК «АНГАР»</h1>
          <p className="text-xs text-gray-500">Маркетинговая связка | Gora Marketing</p>
        </div>
      </div>
      <div className="text-right hidden sm:block">
        <div className="text-sm font-medium text-gray-900">Клиент: skangar.ru</div>
        <div className="text-xs text-gray-500 flex items-center justify-end gap-1">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          Этап: Лид-магнит
        </div>
      </div>
    </div>
  </header>
);

const TabButton = ({ active, id, label, icon, onClick, locked = false, completed = false }: { active: boolean, id: Tab, label: string, icon: React.ReactNode, onClick: (id: Tab) => void, locked?: boolean, completed?: boolean }) => (
  <button
    onClick={() => !locked && onClick(id)}
    disabled={locked}
    className={`relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 w-full sm:w-auto justify-center shrink-0
      ${active ? 'border-orange-600 text-orange-700 bg-orange-50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}
      ${locked ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
    `}
  >
    {completed && !active && <CheckCircle2 className="w-4 h-4 text-green-500 absolute top-2 right-2" />}
    {icon}
    {label}
    {locked && <Lock className="w-3 h-3 absolute top-2 right-2 text-gray-400" />}
  </button>
);

// --- Section: Detailed Segmentation (Foundation) ---
const SegmentationDeepDive = () => (
  <div className="space-y-8 animate-fadeIn pb-20">
    <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-slate-800 rounded-lg">
          <Target className="w-8 h-8 text-orange-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Этап 1. Сегментация 6W (Полная версия)</h2>
          <p className="opacity-90 max-w-3xl text-sm leading-relaxed">
             Теперь мы видим полную картину по методике Марка Шеррингтона (6W). Это позволяет точно настроить таргетинг и написать релевантные объявления.
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-12">
      {segments.map((seg) => (
        <div key={seg.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">{seg.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{seg.title}</h3>
            </div>
            <div className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Сегмент #{seg.id}
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Avatar & Psychographics */}
            <div className="space-y-6">
               {/* JTBD */}
               <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-yellow-200/50 rotate-12">
                    <Target className="w-24 h-24" />
                  </div>
                  <h4 className="text-sm font-bold text-yellow-800 uppercase mb-2 relative z-10">Jobs To Be Done</h4>
                  <p className="text-gray-800 italic font-medium text-sm relative z-10 leading-relaxed">
                    "{seg.jtbd}"
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h5 className="text-red-800 font-bold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Боли
                  </h5>
                  <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                    {seg.psychographics.fears.map((f, i) => <li key={i}>{f}</li>)}
                    <li className="font-semibold text-red-700 mt-2 pt-2 border-t border-red-200">{seg.psychographics.pain}</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h5 className="text-green-800 font-bold text-sm mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Хотелки
                  </h5>
                  <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-1">
                    {seg.psychographics.desires.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: 6W Matrix */}
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                <Layout className="w-4 h-4" /> Матрица 6W
              </h4>
              <div className="border border-gray-200 rounded-lg overflow-hidden text-sm shadow-sm">
                {/* WHO */}
                <div className="grid grid-cols-12 border-b border-gray-100">
                   <div className="col-span-3 bg-gray-50 p-3 font-bold text-gray-500 text-xs uppercase flex items-center border-r border-gray-100">
                      Who (Кто)
                   </div>
                   <div className="col-span-9 p-3 text-gray-800 font-medium">{seg.sixW.who}</div>
                </div>
                {/* WHAT */}
                <div className="grid grid-cols-12 border-b border-gray-100">
                   <div className="col-span-3 bg-gray-50 p-3 font-bold text-gray-500 text-xs uppercase flex items-center border-r border-gray-100">
                      What (Что)
                   </div>
                   <div className="col-span-9 p-3 text-gray-800 font-medium">{seg.sixW.what}</div>
                </div>
                {/* WHERE */}
                <div className="grid grid-cols-12 border-b border-gray-100">
                   <div className="col-span-3 bg-gray-50 p-3 font-bold text-gray-500 text-xs uppercase flex items-center border-r border-gray-100">
                      Where (Где)
                   </div>
                   <div className="col-span-9 p-3 text-gray-800">{seg.sixW.where}</div>
                </div>
                {/* WHEN */}
                <div className="grid grid-cols-12 border-b border-gray-100 bg-orange-50/20">
                   <div className="col-span-3 bg-orange-50 p-3 font-bold text-orange-700 text-xs uppercase flex items-center border-r border-orange-100">
                      When (Когда)
                   </div>
                   <div className="col-span-9 p-3 text-gray-900">{seg.sixW.when}</div>
                </div>
                {/* WHY */}
                <div className="grid grid-cols-12 border-b border-gray-100">
                   <div className="col-span-3 bg-gray-50 p-3 font-bold text-gray-500 text-xs uppercase flex items-center border-r border-gray-100">
                      Why (Почему)
                   </div>
                   <div className="col-span-9 p-3 text-gray-800 font-semibold">{seg.sixW.why}</div>
                </div>
                {/* WHICH */}
                <div className="grid grid-cols-12">
                   <div className="col-span-3 bg-gray-50 p-3 font-bold text-gray-500 text-xs uppercase flex items-center border-r border-gray-100">
                      Which (Критерии)
                   </div>
                   <div className="col-span-9 p-3 text-gray-800 italic">{seg.sixW.which}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Section: Offers & UTP (Strategy) ---
const OffersStrategy = () => (
  <div className="space-y-8 animate-fadeIn pb-20">
    <div className="bg-indigo-900 text-white p-8 rounded-xl shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-indigo-800 rounded-lg">
           <FileText className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Этап 2. Лестница Бена Ханта и Офферы</h2>
          <p className="opacity-90 max-w-3xl text-sm leading-relaxed">
            Мы не можем предлагать всем одно и то же. Клиент проходит путь от "нет проблемы" до "покупки". Для каждого этапа — свой месседж.
          </p>
        </div>
      </div>
    </div>

    {/* BEN HUNT LADDER */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
       <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          Лестница узнаваемости Бена Ханта (Стратегия контента)
       </h3>
       <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-4 right-4 h-1 bg-gray-100 z-0 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
             {/* Step 1 */}
             <div className="group">
                <div className="w-16 h-16 rounded-full bg-gray-100 border-4 border-white shadow-sm flex items-center justify-center font-bold text-gray-400 mb-4 group-hover:bg-gray-200 transition-colors mx-auto md:mx-0">1</div>
                <h4 className="font-bold text-sm text-gray-900 mb-1 text-center md:text-left">Нет проблемы</h4>
                <p className="text-xs text-gray-500 mb-2 text-center md:text-left">"У меня старый склад, вроде стоит."</p>
                <div className="bg-indigo-50 p-2 rounded text-[10px] text-indigo-800 border border-indigo-100">
                   <strong>Реклама:</strong> "Потеря зерна из-за влажности — это -20% прибыли. Проверьте склад."
                </div>
             </div>
             {/* Step 2 */}
             <div className="group">
                <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-sm flex items-center justify-center font-bold text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors mx-auto md:mx-0">2</div>
                <h4 className="font-bold text-sm text-gray-900 mb-1 text-center md:text-left">Есть проблема</h4>
                <p className="text-xs text-gray-500 mb-2 text-center md:text-left">"Надо строить новый. Элеватор дорогой."</p>
                <div className="bg-indigo-50 p-2 rounded text-[10px] text-indigo-800 border border-indigo-100">
                   <strong>Реклама:</strong> "Собственный ангар окупается за 2 сезона. Расчет рентабельности."
                </div>
             </div>
             {/* Step 3 */}
             <div className="group">
                <div className="w-16 h-16 rounded-full bg-purple-100 border-4 border-white shadow-sm flex items-center justify-center font-bold text-purple-600 mb-4 group-hover:bg-purple-200 transition-colors mx-auto md:mx-0">3</div>
                <h4 className="font-bold text-sm text-gray-900 mb-1 text-center md:text-left">Поиск решения</h4>
                <p className="text-xs text-gray-500 mb-2 text-center md:text-left">"Каркасный или Бескаркасный?"</p>
                <div className="bg-indigo-50 p-2 rounded text-[10px] text-indigo-800 border border-indigo-100">
                   <strong>Реклама:</strong> "Сравнение технологий: почему бескаркасник в 2 раза дешевле бетона."
                </div>
             </div>
             {/* Step 4 */}
             <div className="group">
                <div className="w-16 h-16 rounded-full bg-orange-100 border-4 border-white shadow-sm flex items-center justify-center font-bold text-orange-600 mb-4 group-hover:bg-orange-200 transition-colors mx-auto md:mx-0">4</div>
                <h4 className="font-bold text-sm text-gray-900 mb-1 text-center md:text-left">Выбор продукта</h4>
                <p className="text-xs text-gray-500 mb-2 text-center md:text-left">"Нужен арочный, 20х50."</p>
                <div className="bg-indigo-50 p-2 rounded text-[10px] text-indigo-800 border border-indigo-100">
                   <strong>Реклама:</strong> "Ангар 1000м² за 14 дней. Заводское качество, не гараж."
                </div>
             </div>
             {/* Step 5 */}
             <div className="group">
                <div className="w-16 h-16 rounded-full bg-green-100 border-4 border-white shadow-sm flex items-center justify-center font-bold text-green-600 mb-4 group-hover:bg-green-200 transition-colors mx-auto md:mx-0">5</div>
                <h4 className="font-bold text-sm text-gray-900 mb-1 text-center md:text-left">Выбор поставщика</h4>
                <p className="text-xs text-gray-500 mb-2 text-center md:text-left">"Кто построит в Тимашевске?"</p>
                <div className="bg-indigo-50 p-2 rounded text-[10px] text-indigo-800 border border-indigo-100">
                   <strong>Оффер:</strong> "СК АНГАР: База в Тимашевске. Работаем без предоплаты 100%. Показ объектов."
                </div>
             </div>
          </div>
       </div>
    </div>

    {/* CORE UTP */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <Factory className="w-64 h-64" />
      </div>
      <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-4">Генеральное УТП (Для 5 ступени)</h3>
      <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6 relative z-10">
        Строительство ангаров в ЮФО <span className="text-orange-600">от производителя</span>: бескаркасные от 14 дней, каркасные любой сложности. <span className="text-orange-600">База в Тимашевске.</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
          <MapPin className="w-6 h-6 text-orange-600 shrink-0" />
          <div>
            <div className="font-bold text-gray-900">Местное производство</div>
            <div className="text-sm text-gray-600">Свой цех в Тимашевске. Никаких московских наценок.</div>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
          <Clock className="w-6 h-6 text-orange-600 shrink-0" />
          <div>
            <div className="font-bold text-gray-900">Скорость</div>
            <div className="text-sm text-gray-600">Бескаркасный ангар 1000м² строим за 2-3 недели.</div>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
          <Wallet className="w-6 h-6 text-orange-600 shrink-0" />
          <div>
            <div className="font-bold text-gray-900">Честная смета</div>
            <div className="text-sm text-gray-600">Цена не меняется в процессе. Работаем с НДС и без.</div>
          </div>
        </div>
      </div>
    </div>

    {/* 4U Offers */}
    <div className="grid grid-cols-1 gap-8">
      <h3 className="text-2xl font-bold text-gray-900">Сегментированные Офферы (4U)</h3>
      
      {/* Offer 1: Frameless (Farmers) */}
      <div className="bg-white rounded-xl shadow-md border-l-4 border-green-500 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-green-600" />
          <span className="text-sm font-bold text-green-600 uppercase">Для Фермеров (Бескаркасные)</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-snug">
          Постройте герметичный зерносклад <span className="bg-green-100 px-1 text-green-800">по цене от 3500 ₽/м²</span> за 14 дней, 
          чтобы успеть сохранить урожай <span className="bg-green-100 px-1 text-green-800">до сезона дождей</span>.
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm border-t border-gray-100 pt-4">
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Польза</span> Сохранить урожай</div>
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Специфика</span> От 3500 ₽/м²</div>
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Срочность</span> За 14 дней</div>
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Уникальность</span> Герметичность (без швов)</div>
        </div>
      </div>

      {/* Offer 2: Frame (Business) */}
      <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-500 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Factory className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-bold text-blue-600 uppercase">Для Бизнеса (Каркасные)</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-snug">
          Возведение теплых каркасных цехов и складов <span className="bg-blue-100 px-1 text-blue-800">«под ключ»</span> в Тимашевске и по краю. 
          <span className="bg-blue-100 px-1 text-blue-800">Проект и расчет нагрузок бесплатно</span> при заключении договора в этом месяце.
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm border-t border-gray-100 pt-4">
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Польза</span> Теплый цех под ключ</div>
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Специфика</span> Проект бесплатно</div>
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Срочность</span> В этом месяце</div>
           <div><span className="text-gray-400 text-xs font-bold uppercase block">Уникальность</span> Местный производитель</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Section: Site Prototype (Siteology) ---
const SitePrototype = () => {
  const [quizStep, setQuizStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextStep = () => setQuizStep(prev => prev < 5 ? prev + 1 : 5);
  const resetQuiz = () => {
    setQuizStep(1);
    setSelectedType(null);
  };

  const faqItems = [
     { q: "Что дешевле: каркасный или бескаркасный ангар?", a: "Бескаркасный (арочный) ангар дешевле на 30-40%, так как не требует массивного фундамента и металлоемкого каркаса. Это идеальный вариант для зернохранилищ." },
     { q: "Вы работаете только в Тимашевске?", a: "Наша производственная база находится в Тимашевске, но мы строим объекты по всему Краснодарскому краю, в Ростовской области и Ставрополье. У нас свои мобильные бригады." },
     { q: "Какие сроки строительства?", a: "Бескаркасный ангар площадью 1000 м² мы возводим за 14-20 дней. Каркасные здания требуют больше времени — от 1.5 до 3 месяцев в зависимости от сложности проекта." },
     { q: "Даете ли вы гарантию?", a: "Да, мы даем гарантию 2 года на герметичность и целостность конструкции. Все прописано в официальном договоре с ООО «СК АНГАР»." }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      <div className="bg-emerald-900 text-white p-8 rounded-xl shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-800 rounded-lg">
            <Layout className="w-8 h-8 text-teal-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Этап 3. Прототип: skangar.ru (Max Conversion)</h2>
            <p className="opacity-90 max-w-3xl text-sm leading-relaxed">
               Мы расширили структуру сайта. Теперь это не просто лендинг, а полноценная презентация. Добавлены блоки: <strong>Портфолио, Видео производства, Этапы работы, Отзывы</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* --- PREMIUM WEBSITE MOCKUP --- */}
      <div className="border-[10px] border-gray-900 rounded-[2rem] overflow-hidden bg-white shadow-2xl mx-auto max-w-5xl relative transform transition-transform duration-500 ring-1 ring-gray-900/5">
        
        {/* Browser Top Bar */}
        <div className="bg-gray-900 h-9 flex items-center px-4 gap-2 border-b border-gray-800 sticky top-0 z-[60]">
          <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
             <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
             <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-800 rounded-lg px-4 py-0.5 text-[10px] text-gray-400 flex items-center gap-2 w-64 justify-center font-mono border border-gray-700">
               <Lock className="w-2.5 h-2.5" /> skangar.ru
            </div>
          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="relative h-[800px] overflow-y-auto overflow-x-hidden bg-white">
            
            {/* Sticky Navigation Inside Mockup */}
            <div className="sticky top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/95 backdrop-blur-md">
               <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                     <div className="bg-orange-600 text-white p-1.5 rounded font-black text-lg leading-none italic">СК</div>
                     <div className="text-white font-bold tracking-tight leading-none uppercase">
                        СК «АНГАР» <br/><span className="text-[9px] text-slate-400 font-normal tracking-widest">Тимашевск</span>
                     </div>
                  </div>
                  <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
                     <span className="hover:text-white cursor-pointer">Технологии</span>
                     <span className="hover:text-white cursor-pointer">Портфолио</span>
                     <span className="hover:text-white cursor-pointer">Производство</span>
                     <span className="hover:text-white cursor-pointer">Контакты</span>
                  </div>
                  <div className="text-right">
                     <div className="text-white font-bold text-sm flex items-center justify-end gap-2">
                        <Phone className="w-3 h-3 text-orange-500" /> 8 (918) 000-00-00
                     </div>
                     <div className="text-[10px] text-slate-400">
                        Работаем по ЮФО
                     </div>
                  </div>
               </div>
            </div>

            {/* 1. HERO SECTION */}
            <div className="relative bg-slate-900 text-white min-h-[680px] flex items-center pt-10 pb-20 overflow-hidden">
               {/* Background */}
               <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Construction site"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/30"></div>
               </div>

               <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: UTP & Offer */}
                  <div className="lg:col-span-7 space-y-8">
                     <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-3 py-1 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
                        <Hammer className="w-3 h-3" /> Собственное производство
                     </div>
                     
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                        Строительство ангаров <br/>
                        <span className="text-white">любой сложности</span>
                     </h1>
                     
                     <p className="text-xl text-slate-300 max-w-xl leading-relaxed border-l-4 border-orange-500 pl-4">
                        Бескаркасные (Арочные) и Каркасные сооружения. <br/>
                        <span className="text-white font-bold">От 14 дней. От производителя.</span>
                     </p>

                     {/* Triggers */}
                     <div className="grid grid-cols-2 gap-4 max-w-md">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-start gap-3 hover:bg-white/10 transition-colors">
                           <TrendingUp className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                           <div className="text-xs text-slate-300">
                              <div className="text-white font-bold text-sm mb-0.5">Экономия до 40%</div>
                              На бескаркасной технологии
                           </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-start gap-3 hover:bg-white/10 transition-colors">
                           <Truck className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                           <div className="text-xs text-slate-300">
                              <div className="text-white font-bold text-sm mb-0.5">База в Тимашевске</div>
                              Минимальная логистика
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-orange-600/20">
                           Рассчитать стоимость
                        </button>
                        <button className="bg-transparent border border-slate-600 hover:border-white text-white font-medium py-3 px-8 rounded-xl transition-all">
                           Смотреть портфолио
                        </button>
                     </div>
                  </div>

                  {/* Right Column: QUIZ */}
                  <div className="lg:col-span-5">
                     <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-slate-800/10">
                        {/* Quiz Header */}
                        <div className="bg-slate-50 p-6 border-b border-slate-100">
                           <div className="flex justify-between items-start mb-3">
                              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                 Узнайте стоимость <br/>вашего ангара за 1 минуту
                              </h3>
                              <div className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                 Калькулятор
                              </div>
                           </div>
                           {/* Progress Bar */}
                           <div className="mt-4 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                 className="h-full bg-orange-500 transition-all duration-500 ease-out"
                                 style={{width: `${(quizStep / 5) * 100}%`}}
                              ></div>
                           </div>
                        </div>

                        {/* Quiz Body */}
                        <div className="p-6 min-h-[320px] flex flex-col justify-between relative">
                           {quizStep === 1 && (
                              <div className="space-y-4 animate-fadeIn">
                                 <div className="text-sm font-medium text-slate-900 mb-2">1. Какая технология вас интересует?</div>
                                 <div className="grid grid-cols-1 gap-2">
                                    {[
                                       { id: 'frameless', label: 'Бескаркасный (Арочный)', sub: 'Дешевле, быстрее. Для зерна/склада.', icon: <TrendingUp className="w-4 h-4"/> },
                                       { id: 'frame', label: 'Каркасный (Прямостенный)', sub: 'Сэндвич-панели, теплый цех.', icon: <Factory className="w-4 h-4"/> },
                                       { id: 'dont_know', label: 'Пока не знаю, нужна консультация', sub: 'Подберем под бюджет.', icon: <HelpCircle className="w-4 h-4"/> }
                                    ].map((type) => (
                                       <button 
                                          key={type.id}
                                          onClick={() => { setSelectedType(type.id); nextStep(); }}
                                          className="flex items-start gap-3 w-full p-3 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
                                       >
                                          <div className="mt-1 bg-slate-100 group-hover:bg-orange-100 p-2 rounded-lg text-slate-500 group-hover:text-orange-600 transition-colors">
                                             {type.icon}
                                          </div>
                                          <div>
                                             <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 block">{type.label}</span>
                                             <span className="text-xs text-slate-400 group-hover:text-slate-600">{type.sub}</span>
                                          </div>
                                       </button>
                                    ))}
                                 </div>
                              </div>
                           )}

                           {quizStep === 2 && (
                              <div className="space-y-6 animate-fadeIn">
                                 <div className="text-sm font-medium text-slate-900">2. Размеры будущего строения?</div>
                                 <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                       <label className="text-xs text-slate-500">Длина (м)</label>
                                       <input type="number" placeholder="20" className="w-full p-3 rounded-lg border border-slate-200 focus:border-orange-500 outline-none font-bold text-center"/>
                                    </div>
                                    <div className="space-y-1">
                                       <label className="text-xs text-slate-500">Ширина (м)</label>
                                       <input type="number" placeholder="12" className="w-full p-3 rounded-lg border border-slate-200 focus:border-orange-500 outline-none font-bold text-center"/>
                                    </div>
                                 </div>
                                 <button onClick={nextStep} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/30 transition-transform active:scale-95 mt-4">
                                    Далее
                                 </button>
                              </div>
                           )}

                           {quizStep >= 3 && quizStep < 5 && (
                              <div className="space-y-6 animate-fadeIn text-center pt-10">
                                 <div className="animate-pulse">
                                    <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-3"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
                                 </div>
                                 <p className="text-sm text-slate-500 mt-4">Подбираем проекты под ваши параметры...</p>
                                 <button onClick={nextStep} className="text-xs text-orange-500 font-bold mt-4">(Пропустить шаги)</button>
                              </div>
                           )}

                           {quizStep === 5 && (
                              <div className="space-y-4 animate-fadeIn text-center">
                                 <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm font-medium mb-4 border border-green-100">
                                    <CheckCircle2 className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                                    Расчет готов!
                                 </div>
                                 <h4 className="text-lg font-bold text-slate-900">Получите расчет сметы в WhatsApp</h4>
                                 <p className="text-xs text-slate-500 mb-4">Инженер свяжется в течение 15 минут</p>
                                 <button className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:bg-[#20bd5a]">
                                    <MessageSquare className="w-5 h-5" /> Открыть в WhatsApp
                                 </button>
                                 <button onClick={resetQuiz} className="text-xs text-slate-400 underline mt-2">Заполнить заново</button>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 2. ADVANTAGES & ABOUT COMPANY */}
            <div className="bg-white py-20">
               <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                   <div className="relative">
                      <div className="absolute -left-4 -top-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 z-0"></div>
                      <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop" className="relative z-10 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500" alt="Warehouse base"/>
                      <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-xl z-20 shadow-xl max-w-xs">
                         <div className="text-3xl font-black text-orange-500 mb-1">10+</div>
                         <div className="font-bold text-sm">Лет успешной работы на строительном рынке Юга России</div>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <h2 className="text-3xl font-black text-slate-900">
                         СК «АНГАР» — мы строим, а не перепродаем
                      </h2>
                      <div className="space-y-4 text-slate-600 leading-relaxed">
                         <p>
                            Многие "компании" в интернете — это просто диспетчеры. Мы же — полноценная строительная компания с <strong>собственной базой в Тимашевске</strong>, спецтехникой и штатом квалифицированных монтажников.
                         </p>
                         <p>
                            Приезжайте к нам на экскурсию. Покажем станки, познакомим с инженерами, дадим пощупать металл.
                         </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><FileCheck className="w-5 h-5"/></div>
                            <span className="text-sm font-bold text-slate-800">Работаем по Договору</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><HardHat className="w-5 h-5"/></div>
                            <span className="text-sm font-bold text-slate-800">Свои бригады</span>
                         </div>
                      </div>
                   </div>
               </div>
            </div>

            {/* 3. PORTFOLIO (NEW SECTION) */}
            <div className="py-20 bg-slate-900 text-white">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="flex justify-between items-end mb-12">
                     <div>
                        <h2 className="text-3xl font-black mb-2">Наши построенные объекты</h2>
                        <p className="text-slate-400">Более 50 сданных объектов за последний год</p>
                     </div>
                     <button className="hidden md:flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors">
                        Смотреть все работы <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {/* Case 1 */}
                     <div className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-colors">
                        <div className="h-56 overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Hangar"/>
                        </div>
                        <div className="p-6">
                           <div className="text-xs font-bold text-orange-500 uppercase mb-2">Зернохранилище</div>
                           <h3 className="text-xl font-bold mb-4">Бескаркасный ангар 20х50м</h3>
                           <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-700 pt-4">
                              <div>
                                 <div className="text-slate-500 text-xs">Локация</div>
                                 <div>ст. Динская</div>
                              </div>
                              <div>
                                 <div className="text-slate-500 text-xs">Срок</div>
                                 <div>18 дней</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Case 2 */}
                     <div className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-colors">
                        <div className="h-56 overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Factory"/>
                        </div>
                        <div className="p-6">
                           <div className="text-xs font-bold text-blue-400 uppercase mb-2">Производство</div>
                           <h3 className="text-xl font-bold mb-4">Теплый цех 15х40м</h3>
                           <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-700 pt-4">
                              <div>
                                 <div className="text-slate-500 text-xs">Локация</div>
                                 <div>г. Краснодар</div>
                              </div>
                              <div>
                                 <div className="text-slate-500 text-xs">Срок</div>
                                 <div>45 дней</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Case 3 */}
                     <div className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-colors">
                        <div className="h-56 overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Shelter"/>
                        </div>
                        <div className="p-6">
                           <div className="text-xs font-bold text-green-500 uppercase mb-2">СХ Техника</div>
                           <h3 className="text-xl font-bold mb-4">Навес для техники 12х30м</h3>
                           <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-700 pt-4">
                              <div>
                                 <div className="text-slate-500 text-xs">Локация</div>
                                 <div>г. Тимашевск</div>
                              </div>
                              <div>
                                 <div className="text-slate-500 text-xs">Срок</div>
                                 <div>14 дней</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 4. FACTORY & PRODUCTION (NEW SECTION) */}
            <div className="py-20 bg-slate-50">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div>
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6">
                           <Video className="w-4 h-4" /> Видео-экскурсия
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                           Побывайте на нашем производстве
                        </h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                           У нас свой профилегибочный стан, цех металлоконструкций и покрасочная камера. 
                           Посмотрите короткое видео о том, как мы производим арки для вашего будущего ангара.
                        </p>
                        <button className="bg-slate-900 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-colors">
                           <PlayCircle className="w-6 h-6" /> Смотреть видео (59 сек)
                        </button>
                     </div>
                     <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Factory video preview"/>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                           <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-2xl transform group-hover:scale-110 transition-transform">
                              <PlayCircle className="w-10 h-10 text-orange-600" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 5. STEPS OF WORK (NEW SECTION) */}
            <div className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6">
                  <h2 className="text-3xl font-black text-center text-slate-900 mb-16">Этапы работы</h2>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                     <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-100 hidden md:block z-0"></div>
                     
                     {[
                        { step: "01", title: "Заявка", text: "Оставляете заявку или звоните нам." },
                        { step: "02", title: "Расчет", text: "Инженер готовит смету и 3 варианта решения." },
                        { step: "03", title: "Договор", text: "Фиксируем цену и сроки. Без скрытых доплат." },
                        { step: "04", title: "Производство", text: "Изготовление арок на заводе в Тимашевске." },
                        { step: "05", title: "Монтаж", text: "Сборка на вашем участке за 10-14 дней." }
                     ].map((item, i) => (
                        <div key={i} className="relative z-10 bg-white pt-4 md:text-center group">
                           <div className="w-16 h-16 bg-white border-4 border-slate-100 text-slate-300 font-black text-2xl flex items-center justify-center rounded-full mb-4 mx-auto group-hover:border-orange-500 group-hover:text-orange-500 transition-colors">
                              {item.step}
                           </div>
                           <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                           <p className="text-sm text-slate-500">{item.text}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* 6. FAQ & FINAL CTA */}
            <div className="py-20 bg-slate-50 border-t border-slate-100">
               <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Ответы на вопросы</h2>
                  <div className="space-y-4">
                     {faqItems.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                           <button 
                              onClick={() => setOpenFaq(openFaq === i ? null : i)}
                              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                           >
                              <span className="font-bold text-slate-900 text-lg">{item.q}</span>
                              <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
                           </button>
                           <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                                 {item.a}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Final CTA */}
                  <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                     <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-4">Начните с бесплатного расчета</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
                           Приезжайте к нам в офис в Тимашевске или закажите выезд инженера на ваш участок.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                           <button className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-orange-600/30">
                              +7 (918) 000-00-00
                           </button>
                           <button className="w-full md:w-auto bg-white text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-slate-100 transition-colors">
                              Заказать звонок
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 7. FOOTER */}
            <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800 text-sm">
               <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                     <div className="text-white font-bold text-xl mb-4 uppercase italic">СК «АНГАР»</div>
                     <p>Строительство бескаркасных и каркасных ангаров в Краснодарском крае и ЮФО.</p>
                  </div>
                  <div>
                     <h4 className="text-white font-bold mb-4">Контакты</h4>
                     <p className="mb-1">Краснодарский край,</p>
                     <p className="mb-1">г. Тимашевск, ул. Промышленная</p>
                     <p className="mt-2 text-white">8 (918) 000-00-00</p>
                  </div>
                  <div>
                     <h4 className="text-white font-bold mb-4">Услуги</h4>
                     <ul className="space-y-2">
                        <li>Бескаркасные ангары</li>
                        <li>Каркасные ангары</li>
                        <li>Зернохранилища</li>
                        <li>Навесы</li>
                     </ul>
                  </div>
               </div>
               <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-xs text-center">
                  © 2024 СК «АНГАР». Все права защищены.
               </div>
            </footer>
        </div>
      </div>
    </div>
  );
};

// --- Section: Lead Magnet & Funnel (NEW) ---
const LeadMagnetSection = () => (
  <div className="space-y-8 animate-fadeIn pb-20">
    <div className="bg-purple-900 text-white p-8 rounded-xl shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-800 rounded-lg">
          <Magnet className="w-8 h-8 text-purple-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Этап 4. Лид-магнит и Автоворонка</h2>
          <p className="opacity-90 max-w-3xl text-sm leading-relaxed">
             В строительстве цикл сделки длинный. Чтобы не терять клиентов, которые "просто смотрят", мы предлагаем им бесплатную пользу (Лид-магнит) в обмен на подписку в бот.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       {/* STRATEGY CARD */}
       <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
             <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                Суть связки (Funnel)
             </h3>
             <div className="space-y-4 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-100"></div>
                
                <div className="relative pl-8">
                   <div className="absolute left-0 top-1 w-6 h-6 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">1</div>
                   <div className="font-bold text-sm text-gray-900">Трафик (РСЯ/Telegram)</div>
                   <div className="text-xs text-gray-500">Объявление: "Узнайте реальные цены на ангары в 2024 году".</div>
                </div>

                <div className="relative pl-8">
                   <div className="absolute left-0 top-1 w-6 h-6 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-700">2</div>
                   <div className="font-bold text-sm text-gray-900">Лид-магнит (Польза)</div>
                   <div className="text-xs text-gray-500">Мини-лендинг (ниже) с предложением скачать Каталог проектов.</div>
                </div>

                <div className="relative pl-8">
                   <div className="absolute left-0 top-1 w-6 h-6 bg-green-100 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700">3</div>
                   <div className="font-bold text-sm text-gray-900">Трипваер (Легкий шаг)</div>
                   <div className="text-xs text-gray-500">После подписки бот предлагает: "Бесплатный выезд инженера + Расчет сметы".</div>
                </div>
                
                <div className="relative pl-8">
                   <div className="absolute left-0 top-1 w-6 h-6 bg-orange-100 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-orange-700">4</div>
                   <div className="font-bold text-sm text-gray-900">Продажа (Основной продукт)</div>
                   <div className="text-xs text-gray-500">Договор на строительство ангара.</div>
                </div>
             </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
             <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Выбранный Лид-магнит
             </h3>
             <p className="text-sm text-yellow-900 mb-3 font-medium">
                "Каталог 15 типовых проектов ангаров с расчетом стоимости на 2024 год + Чек-лист проверки подрядчика"
             </p>
             <ul className="text-xs text-yellow-800/80 list-disc list-inside space-y-1">
                <li>Закрывает вопрос "Сколько стоит?"</li>
                <li>Показывает экспертность (Чек-лист)</li>
                <li>Снимает страх обмана</li>
             </ul>
          </div>
       </div>

       {/* VISUAL MOCKUP (Mini Landing) */}
       <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 shadow-inner flex flex-col">
          <div className="text-xs font-bold text-slate-400 uppercase mb-2 text-center tracking-wider">Прототип подписной страницы (Tilda Zero Block)</div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200 flex-1 relative min-h-[500px]">
             {/* Header */}
             <div className="px-6 py-4 flex justify-between items-center border-b border-slate-50">
                <div className="font-bold text-slate-900 text-sm italic">СК «АНГАР»</div>
                <div className="text-[10px] text-slate-400">Бесплатный материал</div>
             </div>

             {/* Hero Content */}
             <div className="p-8 flex flex-col items-center text-center">
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                   Для тех, кто планирует стройку
                </div>
                <h1 className="text-2xl font-black text-slate-900 leading-tight mb-4">
                   Скачайте сметы 15 реальных ангаров, построенных в 2023-2024 году
                </h1>
                <p className="text-sm text-slate-500 mb-8 max-w-xs mx-auto">
                   Узнайте реальную рыночную стоимость бескаркасных и каркасных строений, чтобы не переплачивать посредникам.
                </p>

                {/* 3D Book/PDF Mockup */}
                <div className="relative w-48 h-60 bg-slate-900 rounded-r-xl rounded-l-sm shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 mb-8 flex items-center justify-center group cursor-pointer border-l-4 border-slate-800">
                   <div className="absolute inset-0 border border-white/10 rounded-r-xl"></div>
                   <div className="text-center p-4">
                      <div className="text-orange-500 font-black text-4xl mb-2">2024</div>
                      <div className="text-white font-bold text-sm uppercase leading-tight">Каталог<br/>проектов<br/>и цен</div>
                      <div className="mt-4 w-8 h-8 bg-white/20 rounded-full mx-auto flex items-center justify-center text-white">
                         <FileDown className="w-4 h-4" />
                      </div>
                   </div>
                   {/* Badge */}
                   <div className="absolute -right-4 -top-4 bg-orange-500 text-white text-[10px] font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg rotate-12 z-10">
                      PDF
                   </div>
                </div>

                {/* Form/Buttons */}
                <div className="w-full max-w-xs space-y-3">
                   <div className="text-xs text-slate-400 font-medium">Куда отправить файл?</div>
                   <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-transform active:scale-95">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                   </button>
                   <button className="w-full bg-[#229ED9] hover:bg-[#1f94cc] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-transform active:scale-95">
                      <Bot className="w-4 h-4" /> Telegram
                   </button>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-400">
                   <ShieldCheck className="w-3 h-3" /> Без спама. Ваши данные защищены.
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);


// --- Main App ---

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('analytics');
  const [unlockedSteps, setUnlockedSteps] = useState<Tab[]>(['analytics']);

  const handleApprove = () => {
    if (activeTab === 'analytics') {
      if (!unlockedSteps.includes('offers')) {
        setUnlockedSteps([...unlockedSteps, 'offers']);
      }
      setActiveTab('offers');
    } else if (activeTab === 'offers') {
      if (!unlockedSteps.includes('site')) {
        setUnlockedSteps([...unlockedSteps, 'site']);
      }
      setActiveTab('site');
    } else if (activeTab === 'site') {
       if (!unlockedSteps.includes('lead_magnet')) {
        setUnlockedSteps([...unlockedSteps, 'lead_magnet']);
      }
      setActiveTab('lead_magnet');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-12 font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Маркетинговая связка: СК «АНГАР»</h1>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Работаем по методологии Gora Marketing. Текущий этап: <strong className="text-orange-600">
              {activeTab === 'analytics' ? 'Сегментация (6W Complete)' : 
               activeTab === 'offers' ? 'УТП и Лестница Ханта' : 
               activeTab === 'site' ? 'Прототип Landing Page' : 'Лид-магнит и Воронка'}
            </strong>.
          </p>
        </div>

        {/* Navigation Tabs (Process Flow) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 p-1 overflow-x-auto">
          <div className="flex min-w-[600px]">
            <TabButton 
              active={activeTab === 'analytics'} 
              id="analytics" 
              label="1. Сегментация" 
              icon={<Users className="w-4 h-4" />}
              onClick={setActiveTab}
              completed={unlockedSteps.includes('offers')}
            />
            <TabButton 
              active={activeTab === 'offers'} 
              id="offers" 
              label="2. Офферы" 
              icon={<FileText className="w-4 h-4" />}
              onClick={setActiveTab}
              locked={!unlockedSteps.includes('offers')}
              completed={unlockedSteps.includes('site')}
            />
            <TabButton 
              active={activeTab === 'site'} 
              id="site" 
              label="3. Прототип" 
              icon={<Layout className="w-4 h-4" />}
              onClick={setActiveTab}
              locked={!unlockedSteps.includes('site')}
              completed={unlockedSteps.includes('lead_magnet')}
            />
            <TabButton 
              active={activeTab === 'lead_magnet'} 
              id="lead_magnet" 
              label="4. Лид-магнит" 
              icon={<Magnet className="w-4 h-4" />}
              onClick={setActiveTab}
              locked={!unlockedSteps.includes('lead_magnet')}
            />
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[500px]">
          {activeTab === 'analytics' && <SegmentationDeepDive />}
          {activeTab === 'offers' && <OffersStrategy />}
          {activeTab === 'site' && <SitePrototype />}
          {activeTab === 'lead_magnet' && <LeadMagnetSection />}
        </div>

        {/* Footer with Approval Request */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
           <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <AlertTriangle className="w-5 h-5" />
               </div>
               <div className="text-sm">
                 <div className="font-bold text-gray-900">Статус проекта:</div>
                 <div className="text-gray-500">
                    {activeTab === 'analytics' ? 'Проверьте заполнение всех 6W (Who, What, Where...)' : 
                     activeTab === 'offers' ? 'Ознакомьтесь со стратегией Бена Ханта.' : 
                     activeTab === 'site' ? 'Согласуйте обновленный дизайн (с Портфолио и Видео).' : 'Готов прототип воронки.'}
                 </div>
               </div>
             </div>
             
             <button 
                onClick={handleApprove}
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
                {activeTab === 'analytics' ? 'Утвердить Сегменты' : 
                 activeTab === 'offers' ? 'Утвердить Офферы' : 
                 activeTab === 'site' ? 'Утвердить Сайт' : 'Завершить проект'} 
                <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}