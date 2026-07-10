import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Info,
  MapPin,
  Phone,
} from "@phosphor-icons/react";

const ui = {
  es: {
    offers: "Lo que puedes encontrar",
    approach: "Cómo funciona",
    contact: "Dar el siguiente paso",
    name: "Nombre",
    contactField: "Email o teléfono",
    interest: "Qué te interesa",
    choose: "Selecciona una opción",
    send: "Enviar solicitud",
    location: "Barcelona · ubicación por confirmar",
    success: "Solicitud preparada. El negocio confirmará los detalles directamente.",
    notice: "Propuesta visual no oficial · textos, imágenes y datos sujetos a confirmación",
    today: "Selección actual",
    process: "Tres formas de empezar",
    availability: "Disponibilidad por confirmar",
    view: "Ver detalle",
  },
  ca: {
    offers: "El que hi pots trobar",
    approach: "Com funciona",
    contact: "Fer el pas següent",
    name: "Nom",
    contactField: "Email o telèfon",
    interest: "Què t’interessa",
    choose: "Selecciona una opció",
    send: "Enviar sol·licitud",
    location: "Barcelona · ubicació per confirmar",
    success: "Sol·licitud preparada. El negoci confirmarà els detalls directament.",
    notice: "Proposta visual no oficial · textos, imatges i dades subjectes a confirmació",
    today: "Selecció actual",
    process: "Tres maneres de començar",
    availability: "Disponibilitat per confirmar",
    view: "Veure detall",
  },
  en: {
    offers: "What you can find", approach: "How it works", contact: "Take the next step", name: "Name", contactField: "Email or phone", interest: "What are you interested in", choose: "Choose an option", send: "Send enquiry", location: "Location to be confirmed", success: "Enquiry prepared. The business will confirm the details directly.", notice: "Unofficial visual proposal · Text, images and details subject to confirmation", today: "Current selection", process: "Three ways to start", availability: "Availability to be confirmed", view: "View details",
  },
  pt: {
    offers: "O que pode encontrar", approach: "Como funciona", contact: "Dar o próximo passo", name: "Nome", contactField: "Email ou telefone", interest: "O que lhe interessa", choose: "Escolha uma opção", send: "Enviar pedido", location: "Localização a confirmar", success: "Pedido preparado. O negócio confirmará os detalhes diretamente.", notice: "Proposta visual não oficial · Textos, imagens e dados sujeitos a confirmação", today: "Seleção atual", process: "Três formas de começar", availability: "Disponibilidade a confirmar", view: "Ver detalhes",
  },
  fr: {
    offers: "Ce que vous pouvez trouver", approach: "Comment ça marche", contact: "Passer à l’étape suivante", name: "Nom", contactField: "Email ou téléphone", interest: "Ce qui vous intéresse", choose: "Choisissez une option", send: "Envoyer la demande", location: "Adresse à confirmer", success: "Demande préparée. L’établissement confirmera directement les détails.", notice: "Proposition visuelle non officielle · Textes, images et informations à confirmer", today: "Sélection actuelle", process: "Trois façons de commencer", availability: "Disponibilité à confirmer", view: "Voir les détails",
  },
  it: {
    offers: "Cosa puoi trovare", approach: "Come funziona", contact: "Fai il passo successivo", name: "Nome", contactField: "Email o telefono", interest: "Cosa ti interessa", choose: "Scegli un’opzione", send: "Invia richiesta", location: "Posizione da confermare", success: "Richiesta preparata. L’attività confermerà direttamente i dettagli.", notice: "Proposta visiva non ufficiale · Testi, immagini e dati da confermare", today: "Selezione attuale", process: "Tre modi per iniziare", availability: "Disponibilità da confermare", view: "Vedi dettagli",
  },
};

function LanguageSwitch({ lang, onChange, languages = [{ code: "es", label: "ES" }, { code: "ca", label: "CAT" }] }) {
  return (
    <div className="collection-language" aria-label="Idioma">
      {languages.map((language, index) => (
        <span className="collection-language-option" key={language.code}>
          {index > 0 && <span aria-hidden="true">/</span>}
          <button className={lang === language.code ? "active" : ""} type="button" onClick={() => onChange(language.code)}>{language.label}</button>
        </span>
      ))}
    </div>
  );
}

function Actions({ copy, secondaryHref = "#offers" }) {
  return (
    <div className="collection-actions">
      <a className="collection-primary" href="#contact">{copy.primary}<ArrowRight size={21} /></a>
      <a className="collection-secondary" href={secondaryHref}>{copy.secondary}</a>
    </div>
  );
}

function Location({ labels }) {
  return <span className="collection-location"><MapPin size={19} weight="fill" />{labels.location}</span>;
}

function OfferRows({ copy, className = "", showView = false, viewLabel = "" }) {
  return (
    <div className={className}>
      {copy.offers.map((offer, index) => (
        <a href="#contact" key={offer} style={{ "--i": index }}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{offer}</strong>
          {showView && <small>{viewLabel}</small>}
          <ArrowRight size={24} />
        </a>
      ))}
    </div>
  );
}

function ContactPanel({ family, copy, labels, sent, setSent, className = "" }) {
  const directHref = family.phone ? `tel:${family.phone.replace(/\s+/g, "")}` : family.email ? `mailto:${family.email}` : family.mapUrl || "#top";
  const directLabel = family.phone || family.email || labels.location;
  return (
    <section className={`collection-contact collection-contact-${className}`} id="contact">
      <div className="collection-contact-copy">
        <p>{copy.type}</p>
        <h2>{labels.contact}</h2>
        <p>{copy.intro}</p>
        <a href={directHref}><Phone size={22} />{directLabel}</a>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
        <label>{labels.name}<input required name="name" autoComplete="name" placeholder={labels.name} /></label>
        <label>{labels.contactField}<input required name="contact" autoComplete="email" placeholder={labels.contactField} /></label>
        <label>{labels.interest}
          <select required defaultValue="" name="interest">
            <option value="" disabled>{labels.choose}</option>
            {copy.offers.map((offer) => <option key={offer}>{offer}</option>)}
          </select>
        </label>
        <button type="submit">{labels.send}<ArrowRight size={22} /></button>
        {sent && <p className="collection-success" role="status"><Check size={20} weight="bold" />{labels.success}</p>}
      </form>
    </section>
  );
}

function Notice({ labels }) {
  return <div className="collection-notice"><Info size={18} weight="bold" />{labels.notice}</div>;
}

function StandardHeader({ family, copy, labels, lang, setLang, languages, className = "" }) {
  return (
    <header className={`collection-header ${className}`}>
      <a className="collection-brand" href="#top">{family.logo && <img src={family.logo} alt="" />}<span>{family.name}</span></a>
      <nav aria-label="Navegación principal">
        <a href="#offers">{labels.offers}</a>
        <a href="#approach">{labels.approach}</a>
        <a href="#contact">{labels.contact}</a>
      </nav>
      <LanguageSwitch lang={lang} onChange={setLang} languages={languages} />
      <a className="collection-header-cta" href="#contact">{copy.primary}<ArrowRight size={18} /></a>
    </header>
  );
}

function WindowLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <StandardHeader {...props} className="window-header" />
      <main>
        <section className="window-hero" id="top">
          <figure className="window-display motion-clip"><img src={family.image} alt={`${copy.type} en un entorno local de Barcelona`} /></figure>
          <div className="window-pitch motion-rise">
            <p className="collection-type">{copy.type}</p>
            <h1>{copy.headline}</h1>
            <p className="collection-intro">{copy.intro}</p>
            <Actions copy={copy} />
            <Location labels={labels} />
          </div>
        </section>
        <section className="window-shelf" id="offers">
          <div><p>{labels.today}</p><h2>{labels.offers}</h2></div>
          <OfferRows copy={copy} className="window-products" />
        </section>
        <section className="window-story" id="approach">
          <div><p>{labels.approach}</p><h2>{copy.story}</h2><a href="#contact">{copy.primary}<ArrowRight size={20} /></a></div>
          <figure className="motion-pan"><img loading="lazy" src={family.image} alt={`${copy.type}: detalle de la selección`} /></figure>
        </section>
        <ContactPanel {...props} className="window" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function WorkbenchLayout(props) {
  const { family, copy, labels, lang, setLang, languages } = props;
  return (
    <div className="bench-shell">
      <aside className="bench-rail">
        <a className="collection-brand" href="#top">{family.logo && <img src={family.logo} alt="" />}<span>{family.name}</span></a>
        <span className="bench-index">01-03</span>
        <nav aria-label="Navegación principal"><a href="#offers">{labels.offers}</a><a href="#approach">{labels.approach}</a><a href="#contact">{labels.contact}</a></nav>
        <LanguageSwitch lang={lang} onChange={setLang} languages={languages} />
      </aside>
      <div className="bench-content">
        <main>
          <section className="bench-hero" id="top">
            <div className="bench-command motion-snap">
              <p>{copy.type}</p><h1>{copy.headline}</h1><p>{copy.intro}</p><Actions copy={copy} /><Location labels={labels} />
            </div>
            <figure className="bench-photo motion-clip"><img src={family.image} alt={`${copy.type}: trabajo en proceso`} /><figcaption>{labels.availability}</figcaption></figure>
          </section>
          <section className="bench-services" id="offers"><div className="bench-heading"><span>02</span><h2>{labels.offers}</h2><p>{copy.story}</p></div><OfferRows copy={copy} className="bench-rows" /></section>
          <section className="bench-proof" id="approach"><span>03</span><h2>{labels.approach}</h2><p>{copy.story}</p><a href="#contact">{copy.primary}<ArrowRight size={22} /></a></section>
          <ContactPanel {...props} className="bench" />
        </main>
        <Notice labels={labels} />
      </div>
    </div>
  );
}

function ClinicalLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <StandardHeader {...props} className="clinical-header" />
      <main className="clinical-main">
        <section className="clinical-hero" id="top">
          <div className="clinical-copy motion-rise"><p>{copy.type}</p><h1>{copy.headline}</h1><p>{copy.intro}</p><Actions copy={copy} /><Location labels={labels} /></div>
          <figure className="clinical-portrait motion-clip"><img src={family.image} alt={`${copy.type}: atención profesional`} /></figure>
        </section>
        <section className="clinical-pathway" id="offers">
          <div className="clinical-pathway-title"><p>{labels.approach}</p><h2>{copy.story}</h2></div>
          <ol>{copy.offers.map((offer, index) => <li key={offer} style={{ "--i": index }}><span>{index + 1}</span><strong>{offer}</strong><p>{labels.availability}</p><a href="#contact" aria-label={`${copy.primary}: ${offer}`}><ArrowRight size={22} /></a></li>)}</ol>
        </section>
        <section className="clinical-band" id="approach"><figure className="motion-pan"><img loading="lazy" src={family.image} alt={`${copy.type}: espacio y atención`} /></figure><div><p>{labels.offers}</p><h2>{labels.contact}</h2><p>{copy.intro}</p></div></section>
        <ContactPanel {...props} className="clinical" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function PostcardLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <main>
        <section className="postcard-hero" id="top">
          <StandardHeader {...props} className="postcard-header" />
          <figure className="postcard-backdrop motion-breathe"><img src={family.image} alt={`${copy.type}: atmósfera del lugar`} /></figure>
          <div className="postcard-card motion-card"><p>{copy.type}</p><h1>{copy.headline}</h1><p>{copy.intro}</p><Actions copy={copy} /><Location labels={labels} /></div>
          <a className="postcard-scroll" href="#offers"><span>{labels.offers}</span><ArrowDown size={20} /></a>
        </section>
        <section className="postcard-itinerary" id="offers"><div><p>{labels.availability}</p><h2>{copy.story}</h2></div><OfferRows copy={copy} className="postcard-stops" /></section>
        <section className="postcard-journal" id="approach"><figure className="motion-pan"><img loading="lazy" src={family.image} alt={`${copy.type}: detalle de la experiencia`} /></figure><div><span>Barcelona</span><h2>{labels.approach}</h2><p>{copy.story}</p><a href="#contact">{copy.primary}<ArrowRight size={20} /></a></div></section>
        <ContactPanel {...props} className="postcard" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function PortfolioLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <StandardHeader {...props} className="portfolio-header" />
      <main>
        <section className="portfolio-hero" id="top">
          <div className="portfolio-title motion-rise"><p>{copy.type}</p><h1>{copy.headline}</h1><Actions copy={copy} /></div>
          <figure className="portfolio-cover motion-clip"><img src={family.image} alt={`${copy.type}: proyecto destacado`} /><figcaption>{copy.intro}</figcaption></figure>
        </section>
        <section className="portfolio-work" id="offers"><header><span>01</span><h2>{labels.offers}</h2><p>{copy.story}</p></header><OfferRows copy={copy} className="portfolio-projects" showView viewLabel={labels.view} /></section>
        <section className="portfolio-manifesto" id="approach"><span>02</span><h2>{copy.story}</h2><div><p>{copy.intro}</p><Location labels={labels} /><a href="#contact">{copy.primary}<ArrowRight size={22} /></a></div></section>
        <ContactPanel {...props} className="portfolio" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function RitualLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <StandardHeader {...props} className="ritual-header" />
      <main>
        <section className="ritual-hero" id="top">
          <div className="ritual-copy motion-rise"><p>{copy.type}</p><h1>{copy.headline}</h1><p>{copy.intro}</p><Actions copy={copy} /></div>
          <figure className="ritual-orbit"><div className="ritual-ring" aria-hidden="true" /><img src={family.image} alt={`${copy.type}: momento de cuidado`} /></figure>
          <Location labels={labels} />
        </section>
        <section className="ritual-practices" id="offers"><div className="ritual-practices-title"><p>{labels.offers}</p><h2>{labels.process}</h2></div><div>{copy.offers.map((offer, index) => <article key={offer} style={{ "--i": index }}><span>0{index + 1}</span><h3>{offer}</h3><p>{copy.story}</p><a href="#contact">{copy.primary}<ArrowRight size={20} /></a></article>)}</div></section>
        <section className="ritual-note" id="approach"><p>{labels.approach}</p><blockquote>{copy.story}</blockquote></section>
        <ContactPanel {...props} className="ritual" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function PropertyLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <StandardHeader {...props} className="property-header" />
      <main>
        <section className="property-intro" id="top"><div className="motion-rise"><p>{copy.type}</p><h1>{copy.headline}</h1></div><div><p>{copy.intro}</p><Actions copy={copy} /><Location labels={labels} /></div></section>
        <figure className="property-panorama motion-clip"><img src={family.image} alt={`${copy.type}: vista principal`} /><figcaption>{labels.availability}</figcaption></figure>
        <section className="property-inventory" id="offers"><header><span>01</span><h2>{labels.offers}</h2></header><OfferRows copy={copy} className="property-list" showView viewLabel={labels.view} /></section>
        <section className="property-method" id="approach"><div><span>02</span><h2>{labels.approach}</h2></div><p>{copy.story}</p><a href="#contact">{copy.primary}<ArrowRight size={22} /></a></section>
        <ContactPanel {...props} className="property" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function LedgerLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <StandardHeader {...props} className="ledger-header" />
      <main>
        <section className="ledger-hero" id="top"><div className="ledger-copy motion-snap"><p>{copy.type}</p><h1>{copy.headline}</h1><p>{copy.intro}</p><Actions copy={copy} /><Location labels={labels} /></div><figure className="motion-clip"><img src={family.image} alt={`${copy.type}: selección del día`} /></figure></section>
        <section className="ledger-board" id="offers"><header><span>{labels.today}</span><h2>{labels.offers}</h2><p>{labels.availability}</p></header><OfferRows copy={copy} className="ledger-lines" /></section>
        <section className="ledger-strip" id="approach"><div><p>{labels.approach}</p><h2>{copy.story}</h2><a href="#contact">{copy.primary}<ArrowRight size={20} /></a></div><figure className="motion-pan"><img loading="lazy" src={family.image} alt={`${copy.type}: trabajo y producto`} /></figure></section>
        <ContactPanel {...props} className="ledger" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

function NocturneLayout(props) {
  const { family, copy, labels } = props;
  return (
    <>
      <main>
        <section className="night-hero" id="top">
          <StandardHeader {...props} className="night-header" />
          <figure className="night-backdrop motion-breathe"><img src={family.image} alt={`${copy.type}: ambiente y evento`} /></figure>
          <div className="night-poster motion-card"><p>{copy.type}</p><h1>{copy.headline}</h1><p>{copy.intro}</p><Actions copy={copy} /></div>
          <div className="night-location"><Location labels={labels} /><a href="#contact">{copy.primary}<ArrowRight size={20} /></a></div>
        </section>
        <section className="night-schedule" id="offers"><header><span>{labels.today}</span><h2>{labels.offers}</h2><p>{labels.availability}</p></header><OfferRows copy={copy} className="night-rows" /></section>
        <section className="night-story" id="approach"><span>{labels.approach}</span><h2>{copy.story}</h2><a href="#contact">{copy.primary}<ArrowRight size={22} /></a></section>
        <ContactPanel {...props} className="night" />
      </main>
      <Notice labels={labels} />
    </>
  );
}

const layouts = {
  window: WindowLayout,
  workbench: WorkbenchLayout,
  clinical: ClinicalLayout,
  postcard: PostcardLayout,
  portfolio: PortfolioLayout,
  ritual: RitualLayout,
  property: PropertyLayout,
  ledger: LedgerLayout,
  nocturne: NocturneLayout,
};

export function CollectionTemplate({ family }) {
  const languages = family.languages || Object.keys(family.copy).map((code) => ({ code, label: code === "ca" ? "CAT" : code.toUpperCase() }));
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const initialLanguage = languages.some((language) => language.code === requestedLanguage) ? requestedLanguage : (family.defaultLanguage || languages[0]?.code || "es");
  const [lang, setLang] = useState(initialLanguage);
  const [sent, setSent] = useState(false);
  const copy = family.copy[lang] || family.copy.en || family.copy.es || Object.values(family.copy)[0];
  const baseLabels = ui[lang] || ui.en;
  const labels = { ...baseLabels, ...(family.ui?.[lang] || {}), location: family.location || baseLabels.location };
  const Layout = layouts[family.layout] ?? WindowLayout;
  const style = {
    "--collection-bg": family.colors[0],
    "--collection-ink": family.colors[1],
    "--collection-accent": family.colors[2],
    "--collection-surface": family.colors[3],
    "--collection-font": `"${family.font}"`,
  };

  return (
    <div className={`collection-page collection-${family.layout}`} style={style}>
      <Layout family={family} copy={copy} labels={labels} lang={lang} setLang={setLang} languages={languages} sent={sent} setSent={setSent} />
    </div>
  );
}
