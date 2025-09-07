import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">ELGARD</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Портфолио</a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О компании</a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Премиальный ремонт
              <span className="block text-secondary">под ключ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаем уникальные интерьеры для тех, кто ценит качество и стиль. 
              Полный цикл работ с гарантией результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4">
                <Icon name="Calendar" size={20} className="mr-2" />
                Консультация
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">12+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                <div className="text-muted-foreground">завершенных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ для создания вашего идеального пространства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Дизайн интерьера",
                description: "Индивидуальное проектирование с учетом всех ваших пожеланий"
              },
              {
                icon: "Hammer",
                title: "Строительные работы",
                description: "Полный цикл ремонтных работ с использованием премиальных материалов"
              },
              {
                icon: "Palette",
                title: "Декорирование",
                description: "Подбор мебели, текстиля и аксессуаров для завершенного образа"
              },
              {
                icon: "Lightbulb",
                title: "Освещение",
                description: "Профессиональный дизайн освещения для создания нужной атмосферы"
              },
              {
                icon: "ShieldCheck",
                title: "Гарантия качества",
                description: "5 лет гарантии на все выполненные работы и материалы"
              },
              {
                icon: "Clock",
                title: "Соблюдение сроков",
                description: "Четкое планирование и выполнение работ в установленные сроки"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <Icon name={service.icon} size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши лучшие работы говорят за себя
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/96be5fee-b732-4937-81ae-46c78a8581c3.jpg",
                title: "Современная квартира",
                description: "120 м² в центре города",
                category: "Жилое пространство"
              },
              {
                image: "/img/544b7bed-f211-4132-b0fc-0094e43e1640.jpg",
                title: "Премиум ванная",
                description: "Spa-зона в частном доме",
                category: "Ванная комната"
              },
              {
                image: "/img/9905a93c-f13f-47c4-8ab9-bbaf38c35b00.jpg",
                title: "Дизайнерская кухня",
                description: "Кухня-гостиная 45 м²",
                category: "Кухня"
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium text-secondary">{project.category}</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-4">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мнение тех, кто уже доверил нам свой дом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                position: "Владелец квартиры",
                rating: 5,
                review: "Потрясающий результат! Команда Elgard превзошла все мои ожидания. Качество работ на высочайшем уровне."
              },
              {
                name: "Михаил Соколов",
                position: "Бизнесмен",
                rating: 5,
                review: "Профессионализм, пунктуальность и внимание к деталям. Именно то, что нужно для серьезного проекта."
              },
              {
                name: "Елена Волкова",
                position: "Дизайнер",
                rating: 5,
                review: "Как специалист в области дизайна могу сказать — работа выполнена безупречно. Рекомендую!"
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">О компании Elgard</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы — команда профессионалов с 12-летним опытом в сфере премиального ремонта и дизайна интерьеров. 
                Наша миссия — создавать пространства, которые отражают индивидуальность каждого клиента.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Индивидуальный подход к каждому проекту",
                  "Использование только премиальных материалов",
                  "Собственная команда мастеров и дизайнеров",
                  "Гарантия качества на все виды работ"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Users" size={20} className="mr-2" />
                Познакомиться с командой
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-muted rounded-3xl flex items-center justify-center">
                <Icon name="Building" size={120} className="text-secondary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: "Phone",
                    title: "Телефон",
                    details: ["+7 (495) 123-45-67", "+7 (985) 765-43-21"],
                    subtitle: "Звоните с 9:00 до 21:00"
                  },
                  {
                    icon: "Mail",
                    title: "Email",
                    details: ["info@elgard.ru", "projects@elgard.ru"],
                    subtitle: "Отвечаем в течение часа"
                  },
                  {
                    icon: "MapPin",
                    title: "Офис",
                    details: ["г. Москва, ул. Тверская, 15", "БЦ «Премиум», офис 405"],
                    subtitle: "Пн-Пт: 10:00-19:00"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                      {contact.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground/80 mt-1">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Ваше имя"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Тип проекта</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-background">
                      <option>Выберите тип проекта</option>
                      <option>Квартира</option>
                      <option>Дом</option>
                      <option>Офис</option>
                      <option>Коммерческое помещение</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Сообщение</label>
                    <textarea 
                      rows={4}
                      placeholder="Расскажите подробнее о вашем проекте..."
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-foreground mb-4">ELGARD</div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Премиальный ремонт и дизайн интерьеров под ключ. 
                Создаем уникальные пространства с 2012 года.
              </p>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "Youtube"].map((social, index) => (
                  <Button key={index} variant="ghost" size="sm" className="w-10 h-10 p-0">
                    <Icon name={social === "Instagram" ? "Camera" : social === "Facebook" ? "Users" : "Play"} size={20} />
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
              <div className="space-y-2">
                {["Дизайн интерьера", "Ремонт под ключ", "Декорирование", "Авторский надзор"].map((service, index) => (
                  <a key={index} href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@elgard.ru</p>
                <p>г. Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Elgard. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;