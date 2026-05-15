/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Zap, 
  Monitor, 
  Cpu, 
  MapPin, 
  Facebook, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Star,
  Clock,
  ShieldCheck,
  Truck,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { ServiceCard } from './components/UI';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Gamepad2,
      title: "Naprawa Padów",
      description: "Naprawiamy pady do PS4, PS5, Xbox Series oraz Switch. Wymiana analogów (driftowanie), przycisków, portów ładowania i baterii.",
      badge: "GWARANCJA"
    },
    {
      icon: Monitor,
      title: "Konsole - Brak Obrazu",
      description: "Profesjonalna naprawa portów HDMI, enkoderów obrazu oraz rozwiązywanie problemów z wyświetlaniem na wszystkich konsolach.",
      badge: "SZYBKI TERMIN"
    },
    {
      icon: Zap,
      title: "Przegrzewanie i Hałas",
      description: "Kompleksowe czyszczenie, wymiana past termoprzewodzących oraz termopadów. Twoja konsola będzie cicha jak nowa.",
      badge: "KONKRETNIE"
    },
    {
      icon: Cpu,
      title: "Płyty Główne",
      description: "Zaawansowane naprawy elektroniki, reballing, wymiana układów oraz naprawa po zalaniach i przepięciach.",
    }
  ];

  return (
    <div className="relative min-h-screen grid-pattern">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-tr from-bg via-bg to-accent/5 z-[-1]" />

      <nav className="sticky top-0 z-50 px-4 py-3 sm:px-8 border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="bg-accent p-0.5 rounded-lg shadow-lg overflow-hidden w-10 h-10">
              <img 
                src="https://i.postimg.cc/1XXNt5Rp/629777988-122130297723126360-1964813557781814064-n.jpg" 
                alt="Dorcia-Serwis Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-text-main">
              DORCIA<span className="text-accent">SERWIS</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#uslugi" className="text-sm font-semibold text-text-muted hover:text-accent transition-colors">USŁUGI</a>
            <a href="#opinie" className="text-sm font-semibold text-text-muted hover:text-accent transition-colors">OPINIE</a>
            <a href="#kontakt" className="text-sm font-semibold text-text-muted hover:text-accent transition-colors">KONTAKT</a>
            <a href="tel:532821884" className="btn-primary text-xs py-2 px-6">
              532 821 884
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu content */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 bg-bg-section border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-center shadow-xl"
          >
            <a href="#uslugi" onClick={() => setIsMenuOpen(false)} className="font-bold text-text-main py-2 hover:text-accent">Usługi</a>
            <a href="#opinie" onClick={() => setIsMenuOpen(false)} className="font-bold text-text-main py-2 hover:text-accent">Opinie</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="font-bold text-text-main py-2 hover:text-accent">Kontakt</a>
            <div className="h-px bg-white/5" />
            <a href="tel:532821884" className="btn-primary py-3">532 821 884</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 px-4 py-1.5 rounded-full mb-6 text-accent font-bold text-xs uppercase tracking-wider"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              Naprawa dostępna od ręki
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-text-main tracking-tighter mb-6 px-2"
            >
              PROFESJONALNY <br className="hidden sm:block" />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">SERWIS KONSOL</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium px-4"
            >
              Specjalistyczna naprawa elektroniki i konsol w Łodzi. 
              Precyzja, doświadczenie i autentyczna pasja do hardware'u. 
              Twój sprzęt zasługuje na najlepszą opiekę.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start px-4 w-full"
            >
              <a href="#kontakt" className="btn-primary py-4 px-10 w-full sm:w-auto text-center">
                KONTAKT
              </a>
              <a href="#uslugi" className="btn-secondary px-10 py-4 w-full sm:w-auto text-center uppercase text-xs tracking-widest">
                ZAKRES USŁUG
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-2 px-2"
            >
              {[
                { icon: Truck, label: "Wysyłka Cała PL" },
                { icon: Clock, label: "Szybki Serwis" },
                { icon: ShieldCheck, label: "Pewna Gwarancja" },
                { icon: CheckCircle2, label: "Status Naprawy" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start text-center sm:text-left">
                  <item.icon className="text-accent w-4 h-4 shrink-0" />
                  <span className="text-[9px] xs:text-[10px] font-bold text-text-muted uppercase tracking-widest leading-tight">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:w-2/5 relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[120px] rounded-full" />
            <div className="relative border border-white/5 bg-[#12192B]/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <span className="text-[10px] font-bold text-accent tracking-[0.2em]">DIAGNOSTIC_STATE_v1.0</span>
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              </div>
              <div className="space-y-5">
                {[85, 60, 95].map((w, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[9px] font-mono text-text-muted opacity-60">
                      <span>CHANNEL_{i+1}</span>
                      <span>{w}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${w}%` }}
                        transition={{ duration: 1.5, delay: 0.8 + i*0.2 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-[9px] font-mono text-text-muted opacity-40">
                // MODULE_LOADED: REPAIR_EXPERTISE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-24 px-4 sm:px-8 bg-bg-section border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-bold text-xs tracking-[0.3em] uppercase">Ekspertyza</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight uppercase">Specjalizacje Serwisowe</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="mt-12 tech-card border-accent/20 bg-accent/[0.02]">
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                 <h3 className="text-2xl font-bold text-text-main mb-4 tracking-tight">LOGISTYKA OGÓLNOPOLSKA</h3>
                 <p className="text-text-muted leading-relaxed font-medium">
                   Obsługujemy wysyłki serwisowe z każdego miejsca w Polsce. 
                   Współpracujemy z wiodącymi operatorami logistycznymi, zapewniając 
                   bezpieczny transport Twojego sprzętu do naszego laboratorium w Łodzi.
                 </p>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['INPOST', 'DPD', 'DHL'].map(carrier => (
                    <span key={carrier} className="px-4 py-2 bg-bg border border-white/5 rounded text-[10px] font-bold text-text-muted tracking-widest">{carrier}</span>
                  ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-accent font-bold text-xs tracking-[0.3em] uppercase block mb-4">Case Studies</span>
             <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight uppercase">Zaufanie Potwierdzone</h2>
          </div>

          <div className="flex justify-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="max-w-3xl tech-card border-accent/10 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="flex items-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-accent fill-accent" />)}
              </div>
              <p className="text-xl md:text-2xl text-text-main leading-relaxed mb-8 relative z-10 font-medium">
                "Bardzo polecam! Sprawna usługa, rewelacyjny kontakt na każdym etapie realizacji. Pad PS5 po naprawie działa lepiej niż nowy. Na pewno wrócę z drugim padem jak tylko zacznie pływać."
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <div className="w-10 h-10 rounded bg-accent/20 flex items-center justify-center text-accent font-bold">
                  FB
                </div>
                <div>
                  <p className="font-bold text-text-main">Klient z Facebooka</p>
                  <p className="text-xs text-accent font-bold">Recenzja zweryfikowana</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.facebook.com/profile.php?id=61583790827764&sk=reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent font-bold text-sm hover:underline flex items-center justify-center gap-2"
            >
              SPRAWDŹ WSZYSTKIE OPINIE <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 px-4 sm:px-8 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto tech-card overflow-hidden flex flex-col md:flex-row border border-white/10 p-0 shadow-2xl">
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Centrum Dowodzenia</span>
            <h2 className="text-4xl font-bold text-text-main mb-8 tracking-tight">ŁÓDŹ, POLSKA</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <p className="font-bold text-text-main">Punkt Odbioru</p>
                  <p className="text-text-muted text-sm">Łódź - zapytaj o szczegółowy adres w wiadomości prywatnej.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <Truck className="text-accent" />
                </div>
                <div>
                  <p className="font-bold text-text-main">Obsługa Logistyczna</p>
                  <p className="text-text-muted text-sm">Systematycznie obsługujemy paczki z całej Polski każdego dnia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[400px] bg-[#0A0F1E] flex items-center justify-center p-8 bg-[url('https://i.postimg.cc/SsHRdL77/xbox-xbox-one-microsoft-joystick-159369.webp')] bg-cover bg-center grayscale-[0.5] hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-700">
             <div className="tech-card bg-bg/80 px-8 py-4 rounded-lg font-bold text-text-main text-center shadow-2xl border-accent/50 backdrop-blur-md tracking-widest uppercase text-sm">
                LABORATORIUM ŁÓDŹ
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-text-main mb-6 tracking-tighter uppercase">Napisz do specjalisty</h2>
            <p className="text-lg text-text-muted font-medium">Brak jasnej diagnozy? Skonsultuj swój przypadek z Dorcia-Serwis.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href="tel:532821884" className="tech-card group hover:bg-accent/5">
               <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
               <p className="text-[10px] font-bold text-text-muted uppercase mb-1">Direct Line</p>
               <p className="text-xl font-bold text-text-main">532 821 884</p>
            </a>
            <a href="mailto:dorciazabawki@gmail.com" className="tech-card group hover:bg-accent/5">
               <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
               <p className="text-[10px] font-bold text-text-muted uppercase mb-1">Secure Email</p>
               <p className="text-xl font-bold text-text-main break-all">dorciazabawki@gmail.com</p>
            </a>
          </div>

          <div className="mt-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61583790827764" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-3 py-5 text-lg px-12 block w-full"
            >
              <Facebook className="w-6 h-6" /> MESSENGER SUPPORT
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[150px] pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="bg-bg pt-24 pb-12 px-4 sm:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="bg-accent p-0.5 rounded-lg overflow-hidden w-8 h-8">
                <img 
                  src="https://i.postimg.cc/1XXNt5Rp/629777988-122130297723126360-1964813557781814064-n.jpg" 
                  alt="Dorcia-Serwis Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-xl text-text-main">
                DORCIA<span className="text-accent">SERWIS</span>
              </span>
            </div>
            
            <div className="flex gap-8 text-xs font-bold text-text-muted uppercase tracking-widest leading-none mt-2">
              <a href="#uslugi" className="hover:text-accent transition-colors">Usługi</a>
              <a href="#opinie" className="hover:text-accent transition-colors">Opinie</a>
              <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583790827764" className="w-10 h-10 tech-card p-0 flex items-center justify-center text-accent hover:border-accent">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">
            <p>© {new Date().getFullYear()} Dorcia-Serwis. Specjaliści od hardware.</p>
            <p>Łódź, Polska</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
