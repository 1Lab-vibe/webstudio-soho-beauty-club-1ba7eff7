import heroImg from "@/assets/hero-salon.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, MapPin, Phone, Clock, Instagram, MessageCircle, Sparkles, ChevronRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const services = [
  { name: "Стрижки и укладки", desc: "Женские, мужские, детские. Подбор формы под тип лица.", price: "от 1 200 ₽" },
  { name: "Окрашивание", desc: "Тон в тон, мелирование, балаяж, AirTouch, сложное окрашивание.", price: "от 3 500 ₽" },
  { name: "Уход за волосами", desc: "Ботокс, кератин, нанопластика, питательные процедуры.", price: "от 2 800 ₽" },
  { name: "Маникюр и педикюр", desc: "Аппаратный, комбинированный, покрытие гель-лаком, дизайн.", price: "от 1 500 ₽" },
  { name: "Брови и ресницы", desc: "Архитектура бровей, окрашивание, ламинирование, наращивание.", price: "от 800 ₽" },
  { name: "Макияж и визаж", desc: "Дневной, вечерний, свадебный. Обучение самомакияжу.", price: "от 2 500 ₽" },
];

const reviews = [
  { name: "Анна К.", text: "Хожу в SoHo уже третий год. Девочки всегда подскажут, что подойдёт именно мне. Окрашивание держится идеально.", rating: 5 },
  { name: "Мария С.", text: "Сделали свадебный образ — всё было на высшем уровне. Спокойно, аккуратно, красиво. Спасибо команде!", rating: 5 },
  { name: "Екатерина В.", text: "Очень уютная атмосфера, чистота, мастера-профессионалы. Маникюр держится 4 недели — рекорд для меня.", rating: 5 },
];

const works = [work1, work2, work3, work4];

const steps = [
  { n: "01", t: "Заявка", d: "Оставьте номер или напишите в WhatsApp — ответим в течение 15 минут." },
  { n: "02", t: "Подбор мастера", d: "Уточним услугу и подберём свободное время у подходящего мастера." },
  { n: "03", t: "Визит в салон", d: "Встретим с кофе. Перед процедурой обсудим результат и пожелания." },
  { n: "04", t: "Результат", d: "Уйдёте с настроением и красотой, которая держится долго." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", description: "Чтобы мы могли с вами связаться." });
      return;
    }
    toast({ title: "Заявка отправлена ✨", description: "Администратор перезвонит в течение 15 минут." });
    setForm({ name: "", phone: "", service: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-tight text-primary">SoHo</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">Beauty Club</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-accent transition">Услуги</a>
            <a href="#works" className="hover:text-accent transition">Работы</a>
            <a href="#process" className="hover:text-accent transition">Как это работает</a>
            <a href="#contacts" className="hover:text-accent transition">Контакты</a>
          </nav>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 py-12 lg:py-24 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              Салон красоты в центре Екатеринбурга
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
              Красота, к которой <em className="text-accent not-italic">возвращаются</em>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              SoHo Beauty Club — пять лет создаём образы, которые подходят именно вам. Стрижки, окрашивание, уход, маникюр, брови и макияж в одном уютном месте.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-7 h-12">
                <a href="#booking">Записаться онлайн<ChevronRight className="w-4 h-4 ml-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 border-primary/30">
                <a href="tel:+73433000000"><Phone className="w-4 h-4 mr-2" />Позвонить</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <div>
                  <div className="font-semibold text-sm">4.9 на Яндекс.Картах</div>
                  <div className="text-xs text-muted-foreground">более 200 отзывов</div>
                </div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-semibold text-sm">5 лет</div>
                <div className="text-xs text-muted-foreground">в Екатеринбурге</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose/30 to-gold/20 rounded-[2rem] blur-2xl" />
            <img
              src={heroImg}
              alt="Интерьер салона красоты SoHo Beauty Club"
              width={1600}
              height={1024}
              className="relative rounded-[2rem] shadow-[var(--shadow-soft)] w-full object-cover aspect-[4/5] lg:aspect-[5/6]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-card)] p-4 flex items-center gap-3 max-w-[230px]">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Сегодня свободно</div>
                <div className="text-muted-foreground text-xs">Ближайший слот в 14:30</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / REVIEWS */}
      <section className="py-20 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent uppercase tracking-[0.2em] mb-2">Отзывы</div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary">Нам доверяют</h2>
            </div>
            <div className="flex items-center gap-3 bg-card px-5 py-3 rounded-full shadow-[var(--shadow-card)]">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground text-sm">· Яндекс.Карты</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 shadow-[var(--shadow-card)] flex flex-col gap-4">
                <div className="flex">{[...Array(r.rating)].map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}</div>
                <p className="text-foreground/85 leading-relaxed">«{r.text}»</p>
                <div className="mt-auto pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-xs text-muted-foreground">Яндекс.Карты</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-accent uppercase tracking-[0.2em] mb-2">Услуги</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Всё для вашей красоты — в одном месте</h2>
            <p className="text-muted-foreground">Полный прайс с актуальными ценами отправим в ответ на заявку. Цены зависят от длины волос и сложности работы.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-7 hover:border-accent/50 hover:shadow-[var(--shadow-card)] transition-all">
                <div className="flex items-baseline justify-between mb-3 gap-3">
                  <h3 className="font-serif text-2xl text-primary">{s.name}</h3>
                  <span className="text-accent font-medium whitespace-nowrap text-sm">{s.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <a href="#booking" className="inline-flex items-center gap-1 text-sm mt-5 text-primary group-hover:text-accent transition">
                  Записаться <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent uppercase tracking-[0.2em] mb-2">Портфолио</div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary">Работы наших мастеров</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Больше работ — в нашем Instagram и на странице на Яндекс.Картах.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {works.map((w, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl aspect-[4/5] group">
                <img src={w} alt={`Работа мастера SoHo ${i+1}`} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="text-sm text-accent uppercase tracking-[0.2em] mb-2">Как это работает</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Записаться — просто</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="font-serif text-5xl text-accent/40 mb-3">{s.n}</div>
                <h3 className="font-serif text-xl text-primary mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-24 bg-[image:var(--gradient-warm)]">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-accent uppercase tracking-[0.2em] mb-2">Запись</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-5">Оставьте заявку — перезвоним за 15 минут</h2>
            <p className="text-muted-foreground mb-8 max-w-md">Подскажем стоимость, подберём мастера и удобное время. Никакой обязательности — просто хороший разговор.</p>
            <ul className="space-y-3">
              {["Запись без предоплаты", "Можно перенести за 3 часа", "Подарочные сертификаты", "Программа лояльности для постоянных клиентов"].map((x, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/85">
                  <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center"><Check className="w-3.5 h-3.5 text-accent" /></span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} className="bg-card rounded-3xl p-8 shadow-[var(--shadow-soft)] space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
              <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Анна" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Телефон</label>
              <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} type="tel" placeholder="+7 (___) ___-__-__" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Услуга</label>
              <Input value={form.service} onChange={e => setForm({...form, service: e.target.value})} placeholder="Например: окрашивание балаяж" className="h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Комментарий</label>
              <Textarea value={form.note} onChange={e => setForm({...form, note: e.target.value})} placeholder="Удобное время, пожелания…" className="rounded-xl min-h-[90px]" />
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground text-base">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="text-sm text-accent uppercase tracking-[0.2em] mb-2">Контакты</div>
              <h2 className="font-serif text-4xl text-primary">Будем рады видеть</h2>
            </div>
            <div className="space-y-5 text-foreground/85">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Адрес</div>
                  <div className="text-muted-foreground text-sm">г. Екатеринбург, центр города</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium"><a href="tel:+73433000000" className="hover:text-accent">+7 (343) 300-00-00</a></div>
                  <div className="text-muted-foreground text-sm">Звонок и WhatsApp</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Ежедневно 10:00 — 22:00</div>
                  <div className="text-muted-foreground text-sm">Без выходных</div>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-11 h-11 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-11 h-11 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border min-h-[360px] bg-secondary">
            <iframe
              title="SoHo Beauty Club на карте"
              src="https://yandex.ru/map-widget/v1/?ll=60.605514%2C56.838011&z=13"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container flex flex-wrap gap-4 justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl text-primary">SoHo</span>
            <span className="text-xs uppercase tracking-[0.2em]">Beauty Club</span>
          </div>
          <div>© {new Date().getFullYear()} SoHo Beauty Club. Все права защищены.</div>
          <a href="#" className="hover:text-accent">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;