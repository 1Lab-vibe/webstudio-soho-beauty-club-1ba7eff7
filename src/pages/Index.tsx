import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Star, Scissors, Sparkles, Hand, Brush, ArrowRight, Instagram } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-salon.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const PHONE = "8 (922) 182-90-43";
const PHONE_TEL = "+79221829043";
const ADDRESS = "ул. Рябинина, 21, Екатеринбург";

const services = [
  { icon: Scissors, title: "Стрижки и укладки", desc: "Женские, мужские, детские. Подбор формы под овал лица.", price: "от 1 200 ₽" },
  { icon: Sparkles, title: "Окрашивание", desc: "Однотонное, мелирование, AirTouch, шатуш, балаяж.", price: "от 3 500 ₽" },
  { icon: Hand, title: "Маникюр и педикюр", desc: "Классический, аппаратный, покрытие гель-лаком, дизайн.", price: "от 1 500 ₽" },
  { icon: Brush, title: "Макияж и брови", desc: "Дневной, вечерний, свадебный. Коррекция и окрашивание бровей.", price: "от 1 800 ₽" },
];

const reviews = [
  { name: "Анна К.", text: "Хожу больше двух лет. Девочки всегда подскажут, что подойдёт, и никогда не навязывают лишнее. Окрашивание держится отлично." },
  { name: "Мария В.", text: "Сделали маникюр и укладку перед свадьбой подруги. Всё чётко по времени, аккуратно, атмосфера спокойная." },
  { name: "Екатерина Д.", text: "Лучший салон в районе. Чисто, уютно, мастера внимательные. Записываюсь только сюда." },
];

const steps = [
  { n: "01", title: "Запись", text: "Позвоните или оставьте заявку — подтвердим время в течение 15 минут." },
  { n: "02", title: "Консультация", text: "Мастер уточнит пожелания и предложит оптимальный вариант." },
  { n: "03", title: "Процедура", text: "Работаем с проверенными материалами в комфортной обстановке." },
  { n: "04", title: "Результат", text: "Уход и рекомендации, чтобы эффект сохранился надолго." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", note: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена! Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", service: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="font-display text-2xl font-semibold text-primary">
            SoHo<span className="text-gold"> Beauty Club</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Работы</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Интерьер салона SoHo Beauty Club" width={1600} height={1200} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative container py-20 md:py-32 text-primary-foreground">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 text-sm mb-6">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span>4.9 на Яндекс Картах · 5 лет в Екатеринбурге</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Салон красоты, в который<br />возвращаются
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              SoHo Beauty Club — стрижки, окрашивание, маникюр и макияж в спокойной атмосфере на ул. Рябинина, 21.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft">
                <a href="#booking">Записаться <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-4 w-4" /> {PHONE}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "4.9", l: "Рейтинг на Яндекс Картах" },
            { n: "5 лет", l: "Работаем в Екатеринбурге" },
            { n: "1500+", l: "Постоянных клиентов" },
            { n: "15 мин", l: "Подтверждение записи" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl md:text-3xl text-primary">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-sm uppercase tracking-widest text-gold mb-3">Услуги</div>
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">Что мы делаем</h2>
            <p className="text-muted-foreground">Полный спектр процедур для волос, ногтей и лица. Цены ориентировочные — итоговая зависит от длины волос и сложности работы.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="p-6 border-border hover:shadow-soft transition-all duration-300 bg-card">
                <s.icon className="h-8 w-8 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <div className="text-sm font-medium text-primary border-t border-border pt-3">{s.price}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 md:py-28 bg-warm">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-sm uppercase tracking-widest text-gold mb-3">Работы</div>
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">Наши работы говорят сами за себя</h2>
            <p className="text-muted-foreground">Фото из салона. Больше работ — в нашем Instagram и в карточке Яндекс Карт.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[portfolio1, portfolio2, portfolio3].map((src, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl shadow-card group">
                <img src={src} alt={`Работа салона ${i + 1}`} loading="lazy" width={900} height={1100} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-sm uppercase tracking-widest text-gold mb-3">Как мы работаем</div>
            <h2 className="font-display text-3xl md:text-5xl text-primary">Просто и без сюрпризов</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="font-display text-5xl text-accent mb-3">{s.n}</div>
                <h3 className="font-display text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-widest text-gold mb-3">Отзывы</div>
              <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">Что говорят клиенты</h2>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
                <span className="ml-2 text-sm text-muted-foreground">4.9 — средняя оценка на Яндекс Картах</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="p-7 bg-card border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5">«{r.text}»</p>
                <div className="text-sm font-medium text-primary">{r.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking + Contacts */}
      <section id="booking" className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm uppercase tracking-widest text-gold mb-3">Запись</div>
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">Оставьте заявку</h2>
            <p className="text-muted-foreground mb-8">Перезвоним в течение 15 минут, подберём удобное время и мастера. Без предоплаты.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="service">Услуга</Label>
                <Input id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="Например: окрашивание и стрижка" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="note">Комментарий</Label>
                <Textarea id="note" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Удобное время, пожелания" className="mt-1.5" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full">Записаться</Button>
              <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
            </form>
          </div>

          <div id="contacts" className="space-y-6">
            <div className="text-sm uppercase tracking-widest text-gold">Контакты</div>
            <h2 className="font-display text-3xl md:text-5xl text-primary">Как нас найти</h2>

            <Card className="p-6 space-y-4 bg-card">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-primary">Адрес</div>
                  <div className="text-sm text-muted-foreground">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-primary">Телефон</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-primary">{PHONE}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-primary">Часы работы</div>
                  <div className="text-sm text-muted-foreground">Ежедневно с 10:00 до 21:00</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-primary">Соцсети</div>
                  <div className="text-sm text-muted-foreground">Свежие работы — в нашем Instagram</div>
                </div>
              </div>
            </Card>

            <div className="rounded-xl overflow-hidden border border-border shadow-card aspect-[4/3]">
              <iframe
                title="Карта SoHo Beauty Club"
                src="https://yandex.ru/map-widget/v1/?text=ул.%20Рябинина%2021%20Екатеринбург&z=16"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground py-10">
        <div className="container flex flex-col md:flex-row justify-between gap-4 text-sm">
          <div>
            <div className="font-display text-xl mb-1">SoHo Beauty Club</div>
            <div className="text-primary-foreground/70">{ADDRESS}</div>
          </div>
          <div className="text-primary-foreground/70">
            © {new Date().getFullYear()} SoHo Beauty Club. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
