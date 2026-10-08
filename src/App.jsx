import { useState } from "react";
import {
  Play,
  Check,
  ChevronDown,
  ChevronUp,
  Tv,
  Trophy,
  Music2,
  ShieldCheck,
  Smartphone,
  Zap,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    title: "Vídeo",
    icon: Tv,
    items: [
      "Netflix", "Amazon Prime Video", "Disney+", "Max", "Globoplay",
      "Apple TV+", "Paramount+", "YouTube", "Pluto TV", "Tubi",
      "Samsung TV Plus", "RecordPlay", "Crunchyroll", "Mubi", "Looke",
      "Claro TV+", "Vivo Play"
    ]
  },
  {
    title: "Esporte",
    icon: Trophy,
    items: ["Premiere", "DAZN", "ESPN", "CazéTV"]
  },
  {
    title: "Música e áudio",
    icon: Music2,
    items: ["Spotify", "YouTube Music", "Deezer", "Amazon Music", "Apple Music"]
  }
];

const faqs = [
  ["Como funciona a assinatura?", "Você paga uma única mensalidade e recebe acesso ao catálogo e benefícios previstos no plano, conforme disponibilidade e regras de cada serviço."],
  ["Posso cancelar quando quiser?", "Sim. O cancelamento deve seguir as condições apresentadas no momento da contratação, sem necessidade de manter a assinatura por prazo mínimo."],
  ["Funciona no celular e na TV?", "A experiência foi pensada para funcionar em diferentes dispositivos. A compatibilidade específica pode variar conforme cada plataforma."],
  ["O valor é mesmo R$ 39,90 por mês?", "Sim. O plano apresentado nesta página tem mensalidade de R$ 39,90, conforme as condições da oferta vigente."],
  ["Todas as plataformas estão incluídas?", "A oferta reúne as plataformas apresentadas na página, mas a disponibilidade de cada serviço está sujeita a licenças, termos, região e condições comerciais aplicáveis."]
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToPlan = () => document.getElementById("plano")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      <header className="nav">
        <div className="brand"><span>CLUBE</span><strong>+</strong></div>
        <button className="navCta" onClick={scrollToPlan}>Assinar agora</button>
      </header>

      <main>
        <section className="hero">
          <div className="heroGlow" />
          <div className="heroContent">
            <div className="eyebrow"><span className="dot" /> UMA EXPERIÊNCIA. UMA ASSINATURA.</div>
            <h1>Seu entretenimento.<br /><span>Tudo em um só lugar.</span></h1>
            <p className="heroText">
              Filmes, séries, esportes, música e muito mais em uma experiência criada para quem quer aproveitar mais e pagar menos.
            </p>
            <div className="heroActions">
              <button className="primaryCta" onClick={scrollToPlan}>
                Quero fazer parte <ArrowRight size={19} />
              </button>
              <a className="ghostCta" href="#catalogo">Ver plataformas</a>
            </div>
            <div className="trustRow">
              <span><Check size={16} /> Uma única mensalidade</span>
              <span><Check size={16} /> Sem complicação</span>
              <span><Check size={16} /> Acesso em vários dispositivos</span>
            </div>
          </div>
          <div className="heroArt" aria-hidden="true">
            <div className="poster p1">FILMES</div>
            <div className="poster p2">SÉRIES</div>
            <div className="poster p3">SPORTS</div>
            <div className="poster p4">MUSIC</div>
            <div className="playOrb"><Play fill="currentColor" size={27} /></div>
          </div>
        </section>

        <section className="ticker">
          <div className="tickerInner">
            <span>FILMES</span><i /> <span>SÉRIES</span><i /> <span>ESPORTES</span><i /> <span>MÚSICA</span><i /> <span>ENTRETENIMENTO</span><i /> <span>FILMES</span><i /> <span>SÉRIES</span>
          </div>
        </section>

        <section className="section intro">
          <div className="sectionLabel">POR QUE FAZER PARTE?</div>
          <h2>Uma assinatura que<br /><em>entende o seu tempo.</em></h2>
          <p className="sectionLead">
            Em vez de escolher entre entretenimento, esporte e música, tenha uma experiência centralizada para aproveitar seus conteúdos favoritos.
          </p>
          <div className="benefits">
            {[
              [Zap, "Tudo em uma oferta", "Uma mensalidade simples para uma experiência completa."],
              [Smartphone, "Onde você estiver", "Tenha uma experiência pensada para seus dispositivos."],
              [ShieldCheck, "Mais praticidade", "Menos contas espalhadas e mais facilidade para gerenciar sua assinatura."]
            ].map(([Icon, title, text]) => (
              <div className="benefit" key={title}>
                <div className="iconBox"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="catalogo" className="section catalog">
          <div className="sectionLabel">CATÁLOGO</div>
          <h2>Tem sempre algo<br /><em>para assistir ou ouvir.</em></h2>
          <p className="sectionLead">Confira as plataformas contempladas pela oferta.</p>

          <div className="categoryGrid">
            {categories.map(({ title, icon: Icon, items }) => (
              <div className="categoryCard" key={title}>
                <div className="categoryHead">
                  <div className="categoryIcon"><Icon size={21} /></div>
                  <div><span>CONTEÚDO</span><h3>{title}</h3></div>
                </div>
                <div className="platforms">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="plano" className="pricingSection">
          <div className="priceCard">
            <div className="priceTop">
              <div>
                <div className="sectionLabel">PLANO ÚNICO</div>
                <h2>Tenha tudo isso por<br /><em>uma única mensalidade.</em></h2>
              </div>
              <div className="price">
                <small>R$</small><strong>39</strong><sup>,90</sup><span>/mês</span>
              </div>
            </div>
            <div className="priceDivider" />
            <div className="priceBottom">
              <ul>
                <li><Check size={17} /> Acesso à oferta completa</li>
                <li><Check size={17} /> Vídeo, esporte, música e áudio</li>
                <li><Check size={17} /> Uma única cobrança mensal</li>
                <li><Check size={17} /> Sem plano intermediário</li>
              </ul>
              <button className="priceCta" onClick={() => alert("Próxima etapa: conectar este botão ao checkout.")}>
                Quero assinar por R$ 39,90 <ArrowRight size={18} />
              </button>
            </div>
            <p className="finePrint">A oferta e a disponibilidade de cada serviço estão sujeitas aos respectivos termos, licenças e condições comerciais.</p>
          </div>
        </section>

        <section className="section faqSection">
          <div className="sectionLabel">DÚVIDAS</div>
          <h2>Perguntas<br /><em>frequentes.</em></h2>
          <div className="faqList">
            {faqs.map(([q, a], index) => {
              const open = openFaq === index;
              return (
                <button className={`faqItem ${open ? "open" : ""}`} key={q} onClick={() => setOpenFaq(open ? null : index)}>
                  <span className="faqQuestion">{q}</span>
                  {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  {open && <span className="faqAnswer">{a}</span>}
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <div className="brand"><span>CLUBE</span><strong>+</strong></div>
        <p>Entretenimento em uma experiência simples.</p>
        <small>© {new Date().getFullYear()} Clube+. Todos os direitos reservados.</small>
      </footer>
    </div>
  );
}

export default App;