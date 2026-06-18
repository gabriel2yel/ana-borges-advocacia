import { createFileRoute } from "@tanstack/react-router";
import anaPhotoAsset from "@/assets/ana-borges-hero.png.asset.json";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Gavel,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const anaPhoto = anaPhotoAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/5531995709866?text=Ol%C3%A1%2C%20Dra.%20Ana.%20Gostaria%20de%20receber%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.";
const INSTAGRAM = "https://www.instagram.com/anacborges.adv/";
const FACEBOOK = "https://www.facebook.com/direitodescomplicadoo/";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Highlights />
      <Areas />
      <About />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Monogram className="h-9 w-9" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-navy-deep">Ana C. Borges</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Advocacia</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#areas" className="transition hover:text-navy-deep">Áreas</a>
          <a href="#sobre" className="transition hover:text-navy-deep">Sobre</a>
          <a href="#atendimento" className="transition hover:text-navy-deep">Atendimento</a>
          <a href="#contato" className="transition hover:text-navy-deep">Contato</a>
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-4 py-2.5 text-xs font-medium text-cream transition hover:bg-navy md:px-5 md:text-sm"
        >
          WhatsApp <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-full bg-navy-deep ${className}`}>
      <span className="font-display text-base font-semibold text-silver">AB</span>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary to-background" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, var(--navy-deep) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-deep/20 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-navy-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Direito Descomplicado
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-navy-deep md:text-6xl lg:text-7xl">
            Orientação jurídica com <em className="not-italic text-accent">clareza</em>,<br />
            técnica e acolhimento.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Atendimento jurídico em <strong className="text-navy-deep">Direito Previdenciário</strong> e <strong className="text-navy-deep">Direito Criminal</strong>, com linguagem simples, sigilo profissional e análise individual do caso.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-medium text-cream shadow-lg shadow-navy-deep/20 transition hover:bg-navy"
            >
              Falar com a advogada <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 rounded-full border border-navy-deep/15 bg-white px-7 py-3.5 text-sm font-medium text-navy-deep transition hover:border-navy-deep/40"
            >
              Ver áreas de atuação
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Atendimento online</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Linguagem sem juridiquês</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Sigilo profissional</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-navy-deep/10 via-transparent to-accent/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-navy-deep/10 bg-navy-deep shadow-2xl shadow-navy-deep/30">
            <img src={anaPhoto} alt="Dra. Ana C. Borges" width={896} height={1152} className="h-[520px] w-full object-cover md:h-[560px]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent p-6">
              <div className="font-display text-2xl text-cream">Dra. Ana C. Borges</div>
              <div className="text-xs uppercase tracking-[0.2em] text-silver/80">Advocacia Previdenciária & Criminal</div>
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-white px-5 py-4 shadow-xl md:flex md:items-center md:gap-3">
            <ShieldCheck className="h-8 w-8 text-navy-deep" />
            <div>
              <div className="text-sm font-semibold text-navy-deep">Atendimento ético</div>
              <div className="text-xs text-muted-foreground">Responsabilidade e discrição</div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-24 hidden rounded-2xl border border-border bg-white px-5 py-4 shadow-xl md:flex md:items-center md:gap-3">
            <MessageCircle className="h-8 w-8 text-accent" />
            <div>
              <div className="text-sm font-semibold text-navy-deep">Contato direto</div>
              <div className="text-xs text-muted-foreground">WhatsApp e redes sociais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: ShieldCheck, title: "Sigilo", label: "Atendimento com confidencialidade e responsabilidade profissional." },
    { icon: FileText, title: "Análise", label: "Avaliação de documentos, prazos e caminhos jurídicos possíveis." },
    { icon: Users, title: "Humanização", label: "Explicações claras para que você entenda cada etapa do atendimento." },
    { icon: Clock, title: "Organização", label: "Comunicação objetiva sobre próximos passos e documentação necessária." },
  ];

  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-secondary/60 p-6 min-h-[210px] flex flex-col gap-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-deep/5 text-navy-deep">
              <item.icon className="h-5 w-5" />
            </div>

            <div>
              <div className="font-display text-2xl font-semibold leading-tight text-navy-deep">
                {item.title}
              </div>

              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Areas() {
  const main = [
    {
      icon: HeartHandshake,
      title: "Direito Previdenciário",
      desc: "Orientação sobre aposentadorias, benefícios do INSS, revisões, BPC/LOAS e análise de documentos previdenciários.",
    },
    {
      icon: Gavel,
      title: "Direito Criminal",
      desc: "Atuação técnica em procedimentos criminais, audiências, medidas urgentes e acompanhamento processual.",
      highlight: true,
    },
    {
      icon: FileText,
      title: "Consultoria Jurídica",
      desc: "Esclarecimento de dúvidas, análise preventiva e direcionamento jurídico conforme a necessidade do cliente.",
    },
    {
      icon: Scale,
      title: "Acompanhamento",
      desc: "Apoio jurídico com explicação dos próximos passos, prazos, documentos e alternativas possíveis.",
    },
  ];

  const secondary = [
    "Aposentadoria por idade e tempo de contribuição",
    "Revisão de benefício previdenciário",
    "Benefício por incapacidade",
    "BPC/LOAS",
    "Defesa criminal",
    "Audiências e acompanhamento processual",
    "Orientação documental",
    "Atendimento online em todo o Brasil",
  ];

  return (
    <section id="areas" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-navy-deep/15 bg-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-deep">Áreas de atuação</span>
          <h2 className="mt-5 font-display text-4xl text-navy-deep md:text-5xl">
            Atendimento jurídico com foco em <em className="not-italic text-accent">prevenção e solução</em>
          </h2>
          <p className="mt-4 text-muted-foreground">Conteúdo informativo, linguagem simples e condução responsável do atendimento jurídico.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {main.map((area) => (
            <div
              key={area.title}
              className={`rounded-2xl border p-7 transition ${
                area.highlight
                  ? "border-navy-deep bg-navy-deep text-cream shadow-xl shadow-navy-deep/20"
                  : "border-border bg-white hover:border-navy-deep/30 hover:shadow-lg"
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${area.highlight ? "bg-cream/10 text-accent" : "bg-secondary text-navy-deep"}`}>
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className={`mt-5 font-display text-2xl ${area.highlight ? "text-cream" : "text-navy-deep"}`}>{area.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${area.highlight ? "text-silver/80" : "text-muted-foreground"}`}>{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 transition hover:border-navy-deep/30">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-navy-deep">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative bg-navy-deep py-24 text-cream">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, var(--silver) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-full border border-silver/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-silver">Sobre a Dra. Ana</span>
          <h2 className="mt-5 font-display text-4xl text-cream md:text-5xl">
            Advocacia com <em className="not-italic text-accent">escuta, clareza e estratégia</em>.
          </h2>
          <p className="mt-5 leading-relaxed text-silver/85">
            A proposta do atendimento é descomplicar o Direito: explicar o cenário jurídico com clareza, orientar sobre documentos e prazos e conduzir cada demanda com ética, técnica e responsabilidade.
          </p>
          <p className="mt-4 leading-relaxed text-silver/85">
            O escritório atua com foco em Direito Previdenciário e Criminal, priorizando comunicação objetiva e atendimento individualizado.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Atendimento direto e humanizado",
              "Explicações claras sobre cada etapa",
              "Análise individual do caso e dos documentos",
              "Sigilo profissional e atuação ética",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-silver/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-silver/15 bg-navy/40 p-8 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { k: "Previdenciário", v: "Aposentadorias, benefícios e revisões" },
              { k: "Criminal", v: "Defesa, orientação e acompanhamento" },
              { k: "Online", v: "Atendimento remoto para maior praticidade" },
              { k: "Clareza", v: "Direito explicado de forma simples" },
            ].map((box) => (
              <div key={box.k} className="rounded-2xl border border-silver/10 bg-navy-deep/40 p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent">{box.k}</div>
                <div className="mt-2 font-display text-lg text-cream">{box.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-cream/5 p-5">
            <Monogram className="h-14 w-14 shrink-0 border border-silver/20" />
            <div>
              <div className="font-display text-xl text-cream">Ana C. Borges</div>
              <div className="text-xs uppercase tracking-[0.2em] text-silver/70">Advogada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "1. Primeiro contato", text: "Você envia uma mensagem informando de forma resumida a sua necessidade jurídica." },
    { title: "2. Análise inicial", text: "São indicados os documentos importantes e os pontos que precisam ser avaliados." },
    { title: "3. Orientação", text: "A advogada explica caminhos possíveis, riscos, prazos e próximos passos." },
  ];

  return (
    <section id="atendimento" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-navy-deep/15 bg-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-deep">Como funciona</span>
            <h2 className="mt-5 font-display text-4xl text-navy-deep md:text-5xl">
              Um atendimento simples, seguro e organizado.
            </h2>
            <p className="mt-4 text-muted-foreground">
              O objetivo é facilitar seu entendimento sem prometer resultado, respeitando a ética profissional e as particularidades de cada caso.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-border bg-white p-7 shadow-sm">
                <div className="font-display text-2xl text-navy-deep">{step.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="border-y border-border bg-secondary/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep p-10 text-center md:p-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 30%, var(--accent) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-4xl text-cream md:text-5xl">
              Precisa de orientação jurídica?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-silver/80">
              Entre em contato pelos canais oficiais da Dra. Ana C. Borges e informe sua demanda para receber direcionamento inicial.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-accent/90"
              >
                <Phone className="h-4 w-4" /> Chamar no WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-silver/25 px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-cream/10"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-silver/25 px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-cream/10"
              >
                <MessageCircle className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Monogram className="h-10 w-10" />
            <div>
              <div className="font-display text-lg text-navy-deep">Ana C. Borges</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Advocacia</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Direito Previdenciário e Criminal com atendimento claro, humano e responsável.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#areas" className="hover:text-navy-deep">Áreas</a></li>
            <li><a href="#sobre" className="hover:text-navy-deep">Sobre</a></li>
            <li><a href="#atendimento" className="hover:text-navy-deep">Atendimento</a></li>
            <li><a href="#contato" className="hover:text-navy-deep">Contato</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep">Contato</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-navy-deep">
                <Instagram className="h-4 w-4 text-navy-deep" /> @anacborges.adv
              </a>
            </li>
            <li>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-navy-deep">
                <MessageCircle className="h-4 w-4 text-navy-deep" /> Direito Descomplicado
              </a>
            </li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-navy-deep" /> contato@anacborges.adv.br</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-navy-deep" /> Atendimento online</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Ana C. Borges — Advocacia. Todos os direitos reservados.</span>
          <span>Conteúdo informativo. Não há promessa de resultado.</span>
        </div>
      </div>
    </footer>
  );
}
