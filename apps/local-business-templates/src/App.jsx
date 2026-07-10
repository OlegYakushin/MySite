import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  Check,
  Clock,
  Info,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { CollectionTemplate } from "./CollectionTemplate.jsx";
import { additionalFamilies, additionalFamiliesById } from "./collectionTemplates.js";

const text = {
  es: {
    library: "Biblioteca",
    proposal: "Propuesta visual no oficial · información sujeta a confirmación",
    sent: "Solicitud preparada. El negocio confirmará los detalles por el canal elegido.",
  },
  ca: {
    library: "Biblioteca",
    proposal: "Proposta visual no oficial · informació subjecta a confirmació",
    sent: "Sol·licitud preparada. El negoci confirmarà els detalls pel canal escollit.",
  },
};

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

function useLanguage() {
  const [lang, setLang] = useState("es");
  return { lang, setLang, common: text[lang] };
}

function LanguageSwitch({ lang, onChange, inverted = false }) {
  return (
    <div className={`language-switch ${inverted ? "is-inverted" : ""}`} aria-label="Idioma">
      <button className={lang === "es" ? "active" : ""} onClick={() => onChange("es")} type="button">ES</button>
      <span aria-hidden="true">/</span>
      <button className={lang === "ca" ? "active" : ""} onClick={() => onChange("ca")} type="button">CAT</button>
    </div>
  );
}

function ProposalNotice({ children, dark = false }) {
  return <div className={`proposal-notice ${dark ? "dark" : ""}`}><Info size={18} weight="bold" />{children}</div>;
}

function MesaViva() {
  const { lang, setLang, common } = useLanguage();
  const [sent, setSent] = useState(false);
  const copy = lang === "es" ? {
    nav: ["Carta", "Historia", "Horario"], reserve: "Reservar", title: "Mesa Viva",
    headline: "Un lugar al que apetece volver.",
    lead: "Una web pensada para descubrir la carta, sentir el ambiente y reservar sin rodeos.",
    menuTitle: "Hoy en la mesa", menuLink: "Ver carta completa",
    items: [["Plato de temporada", "Ingredientes y precio por confirmar"], ["Especialidad de la casa", "Descripción breve del plato"], ["Opción para compartir", "Disponible según mercado"], ["Postre del día", "Pregunta al equipo"]],
    storyTitle: "Hecho aquí, para tu mesa.", story: "La historia, la cocina y el ambiente ocupan el centro. Sustituye este texto únicamente por información confirmada por el negocio.",
    hours: "Horario", location: "Dónde estamos", booking: "Reservar mesa", closed: "Horario por confirmar", address: "Dirección publicada del negocio", date: "Fecha", guests: "Personas", time: "Hora preferida", send: "Solicitar reserva",
  } : {
    nav: ["Carta", "Història", "Horari"], reserve: "Reservar", title: "Mesa Viva",
    headline: "Un lloc on ve de gust tornar.",
    lead: "Una web pensada per descobrir la carta, sentir l’ambient i reservar sense voltar-hi.",
    menuTitle: "Avui a taula", menuLink: "Veure la carta completa",
    items: [["Plat de temporada", "Ingredients i preu per confirmar"], ["Especialitat de la casa", "Descripció breu del plat"], ["Opció per compartir", "Disponible segons mercat"], ["Postres del dia", "Pregunta a l’equip"]],
    storyTitle: "Fet aquí, per a la teva taula.", story: "La història, la cuina i l’ambient ocupen el centre. Substitueix aquest text només amb informació confirmada pel negoci.",
    hours: "Horari", location: "On som", booking: "Reservar taula", closed: "Horari per confirmar", address: "Adreça publicada del negoci", date: "Data", guests: "Persones", time: "Hora preferida", send: "Sol·licitar reserva",
  };

  return (
    <div className="mesa-page">
      <header className="mesa-header">
        <a className="mesa-brand" href="#top">NOMBRE DEL LOCAL</a>
        <nav>{copy.nav.map((item, index) => <a href={["#carta", "#historia", "#reserva"][index]} key={item}>{item}</a>)}</nav>
        <LanguageSwitch lang={lang} onChange={setLang} inverted />
        <a className="mesa-reserve-small" href="#reserva">{copy.reserve}</a>
      </header>
      <main>
        <section className="mesa-hero" id="top">
          <img src={publicAsset("assets/mesa-viva-hero.jpg")} alt="Interior de un restaurante local" />
          <div className="mesa-overlay" />
          <div className="mesa-hero-copy">
            <h1>{copy.title}</h1>
            <h2>{copy.headline}</h2>
            <p>{copy.lead}</p>
            <div className="mesa-actions"><a href="#reserva">{copy.reserve}</a><a href="#carta">{copy.menuTitle}</a></div>
            <span className="mesa-location"><MapPin size={19} weight="fill" />Barcelona</span>
          </div>
        </section>

        <section className="mesa-menu" id="carta">
          <div className="mesa-section-heading"><h2>{copy.menuTitle}</h2><a href="#reserva">{copy.menuLink}<ArrowRight size={20} /></a></div>
          <div className="mesa-menu-list">
            {copy.items.map(([name, description]) => <div className="mesa-menu-row" key={name}><div><strong>{name}</strong><span>{description}</span></div><b>Consultar</b></div>)}
          </div>
        </section>

        <section className="mesa-story" id="historia">
          <div className="mesa-story-photo"><img src={publicAsset("assets/mesa-viva-story.jpg")} alt="Ambiente del local" /></div>
          <div><h2>{copy.storyTitle}</h2><p>{copy.story}</p></div>
        </section>

        <section className="mesa-contact" id="reserva">
          <div className="mesa-contact-block"><Clock size={34} /><h2>{copy.hours}</h2><p>{copy.closed}</p></div>
          <div className="mesa-contact-block"><MapPin size={34} weight="fill" /><h2>{copy.location}</h2><p>{copy.address}<br />Barcelona</p></div>
          <form className="mesa-booking" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            <h2><CalendarBlank size={34} />{copy.booking}</h2>
            <div className="mesa-form-grid">
              <label>{copy.date}<input required type="date" /></label>
              <label>{copy.guests}<select defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4+</option></select></label>
              <label>{copy.time}<input required type="time" /></label>
            </div>
            <button type="submit">{copy.send}<ArrowRight size={20} /></button>
            {sent && <p className="form-success"><Check size={20} weight="bold" />{common.sent}</p>}
          </form>
        </section>
      </main>
      <ProposalNotice dark>{common.proposal}</ProposalNotice>
    </div>
  );
}

function Turno() {
  const { lang, setLang, common } = useLanguage();
  const [method, setMethod] = useState("whatsapp");
  const [sent, setSent] = useState(false);
  const copy = lang === "es" ? {
    services: "Servicios", process: "Cómo funciona", contact: "Contacto", action: "Pedir cita",
    headline: "Tu tiempo. Tu turno.", lead: "Elige tu servicio y pide cita en menos de un minuto. Rápido, fácil y sin llamadas.",
    choose: "Elige un servicio", placeholder: "Selecciona un servicio", preference: "Elige cómo prefieres que te contactemos", when: "Cuéntanos cuándo te va mejor", optional: "Día y hora preferidos", send: "Pedir cita ahora",
    list: "Servicios y precios", priceNotice: "Precios por confirmar", items: [["Servicio esencial", "30 min"], ["Servicio especializado", "60 min"], ["Sesión completa", "90 min"], ["Mantenimiento", "45 min"]],
    easy: "Así de fácil", steps: [["Elige tu servicio", "Encuentra lo que necesitas."], ["Elige el contacto", "WhatsApp o llamada. Tú eliges."], ["Recibe confirmación", "El negocio confirma día y hora."]], talk: "¿Prefieres hablar con alguien?", help: "Estamos aquí para ayudarte.",
  } : {
    services: "Serveis", process: "Com funciona", contact: "Contacte", action: "Demanar cita",
    headline: "El teu temps. El teu torn.", lead: "Tria el servei i demana cita en menys d’un minut. Ràpid, fàcil i sense trucades.",
    choose: "Tria un servei", placeholder: "Selecciona un servei", preference: "Tria com prefereixes que et contactem", when: "Digues-nos quan et va millor", optional: "Dia i hora preferits", send: "Demanar cita ara",
    list: "Serveis i preus", priceNotice: "Preus per confirmar", items: [["Servei essencial", "30 min"], ["Servei especialitzat", "60 min"], ["Sessió completa", "90 min"], ["Manteniment", "45 min"]],
    easy: "Així de fàcil", steps: [["Tria el servei", "Troba el que necessites."], ["Tria el contacte", "WhatsApp o trucada. Tu tries."], ["Rep confirmació", "El negoci confirma dia i hora."]], talk: "Prefereixes parlar amb algú?", help: "Som aquí per ajudar-te.",
  };
  return (
    <div className="turno-page">
      <header className="turno-header"><a href="#top" className="turno-logo">TURNO</a><span>NOMBRE DE<br />TU NEGOCIO</span><nav><a href="#servicios">{copy.services}</a><a href="#proceso">{copy.process}</a><a href="#contacto">{copy.contact}</a></nav><LanguageSwitch lang={lang} onChange={setLang} inverted /><a className="turno-nav-action" href="#cita">{copy.action}<ArrowRight size={21} /></a></header>
      <main>
        <section className="turno-hero" id="top">
          <form className="turno-booker" id="cita" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            <h1>{copy.headline}</h1><p className="turno-lede">{copy.lead}</p>
            <label><span><b>1</b>{copy.choose}</span><select required defaultValue=""><option value="" disabled>{copy.placeholder}</option>{copy.items.map(([item]) => <option key={item}>{item}</option>)}</select></label>
            <fieldset><legend><b>2</b>{copy.preference}</legend><div className="turno-methods"><button className={method === "whatsapp" ? "selected" : ""} onClick={() => setMethod("whatsapp")} type="button"><WhatsappLogo size={26} />WhatsApp</button><button className={method === "phone" ? "selected" : ""} onClick={() => setMethod("phone")} type="button"><Phone size={24} />Llamada</button></div></fieldset>
            <label><span><b>3</b>{copy.when}</span><input required placeholder={copy.optional} type="text" /></label>
            <button className="turno-submit" type="submit">{copy.send}<ArrowRight size={24} /></button>
            {sent && <p className="turno-success"><Check size={20} weight="bold" />{common.sent}</p>}
          </form>
          <div className="turno-photo"><img src={publicAsset("assets/turno-service.jpg")} alt="Profesional trabajando en un servicio local" /><div><MapPin size={32} weight="fill" /><span>BARCELONA<br /><small>{copy.priceNotice}</small></span></div></div>
        </section>

        <section className="turno-services" id="servicios"><div className="turno-section-inner"><div className="turno-list-head"><h2>{copy.list}</h2><span>{copy.priceNotice}</span></div>{copy.items.map(([name, duration]) => <div className="turno-service-row" key={name}><strong>{name}</strong><span>{duration}</span><b>Consultar</b></div>)}</div></section>
        <section className="turno-process" id="proceso"><div className="turno-section-inner"><h2>{copy.easy}</h2><div className="turno-steps">{copy.steps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}.</span><div><h3>{title}</h3><p>{body}</p></div>{index < 2 && <ArrowRight size={38} />}</article>)}</div></div></section>
        <section className="turno-contact" id="contacto"><div><h2>{copy.talk}</h2><p>{copy.help}</p></div><div className="turno-contact-lines"><a href="https://wa.me/34000000000"><WhatsappLogo size={34} /><span>WhatsApp<strong>+34 000 000 000</strong></span><ArrowRight size={26} /></a><a href="tel:+34000000000"><Phone size={32} /><span>Llámanos<strong>+34 000 000 000</strong></span><ArrowRight size={26} /></a></div></section>
      </main>
      <ProposalNotice dark>{common.proposal}</ProposalNotice>
    </div>
  );
}

function OficioClaro() {
  const { lang, setLang, common } = useLanguage();
  const [sent, setSent] = useState(false);
  const copy = lang === "es" ? {
    areas: "Ámbitos", method: "Método", contact: "Contacto", consult: "Solicitar consulta",
    headline: ["Entiende tu caso.", "Decide con claridad.", "Accede directamente", "a quien lo resuelve."],
    lead: "Asesoramiento profesional y directo para empresas, autónomos y particulares en Barcelona.",
    promises: [["Acceso directo", "Hablas con el profesional que lleva tu caso."], ["Confidencialidad", "Tu información se trata con cuidado desde el primer contacto."], ["Claridad desde el inicio", "Opciones, riesgos y próximos pasos sin rodeos."]],
    initial: "Consulta inicial", initialBody: "Cuéntanos tu caso en pocos minutos. El negocio valorará tu consulta y responderá con el siguiente paso.",
    areasTitle: "Ámbitos de actuación", areaItems: [["Asesoría profesional", "Consultas, planificación y acompañamiento."], ["Fiscal y contable", "Gestión para empresas y autónomos."], ["Consultoría de empresa", "Estrategia, organización y control."], ["Inmobiliario", "Operaciones, contratos y gestión."], ["Proyectos y licencias", "Tramitación y coordinación especializada."]],
    methodTitle: "Nuestro método, tu ventaja", steps: [["Escuchamos tu caso", "Entendemos la situación y el objetivo."], ["Analizamos", "Valoramos opciones y riesgos."], ["Proponemos el camino", "Una propuesta clara con próximos pasos."], ["Acompañamos", "Seguimiento durante todo el proceso."]],
    formTitle: "Cuéntanos tu caso.", formLead: "Respondemos contigo.", name: "Nombre", contactLabel: "Contacto", topic: "Tema", select: "¿En qué podemos ayudarte?", send: "Solicitar consulta",
  } : {
    areas: "Àmbits", method: "Mètode", contact: "Contacte", consult: "Sol·licitar consulta",
    headline: ["Entén el teu cas.", "Decideix amb claredat.", "Accedeix directament", "a qui ho resol."],
    lead: "Assessorament professional i directe per a empreses, autònoms i particulars a Barcelona.",
    promises: [["Accés directe", "Parles amb el professional que porta el teu cas."], ["Confidencialitat", "La teva informació es tracta amb cura des del primer contacte."], ["Claredat des de l’inici", "Opcions, riscos i passos següents sense embuts."]],
    initial: "Consulta inicial", initialBody: "Explica’ns el cas en pocs minuts. El negoci valorarà la consulta i respondrà amb el següent pas.",
    areasTitle: "Àmbits d’actuació", areaItems: [["Assessorament professional", "Consultes, planificació i acompanyament."], ["Fiscal i comptable", "Gestió per a empreses i autònoms."], ["Consultoria d’empresa", "Estratègia, organització i control."], ["Immobiliari", "Operacions, contractes i gestió."], ["Projectes i llicències", "Tramitació i coordinació especialitzada."]],
    methodTitle: "El nostre mètode, el teu avantatge", steps: [["Escoltem el cas", "Entenem la situació i l’objectiu."], ["Analitzem", "Valorem opcions i riscos."], ["Proposem el camí", "Una proposta clara amb els passos següents."], ["Acompanyem", "Seguiment durant tot el procés."]],
    formTitle: "Explica’ns el cas.", formLead: "Et responem amb claredat.", name: "Nom", contactLabel: "Contacte", topic: "Tema", select: "En què et podem ajudar?", send: "Sol·licitar consulta",
  };
  return (
    <div className="oficio-page">
      <header className="oficio-header"><a href="#top"><strong>Oficio Claro</strong><span>Servicios profesionales en Barcelona</span></a><nav><a href="#ambitos">{copy.areas}</a><a href="#metodo">{copy.method}</a><a href="#contacto">{copy.contact}</a></nav><LanguageSwitch lang={lang} onChange={setLang} inverted /><a className="oficio-consult" href="#contacto">{copy.consult}<ArrowRight size={20} /></a></header>
      <main>
        <section className="oficio-hero" id="top"><div><h1>{copy.headline.map((line, index) => <span className={index > 1 ? "accent" : ""} key={line}>{line}</span>)}</h1><p>{copy.lead}</p><div className="oficio-promises">{copy.promises.map(([title, body]) => <div key={title}><Check size={22} /><strong>{title}</strong><span>{body}</span></div>)}</div></div><aside><h2>{copy.initial}</h2><p>{copy.initialBody}</p><span><MapPin size={22} />Barcelona y área metropolitana</span></aside></section>

        <section className="oficio-areas" id="ambitos"><h2>{copy.areasTitle}</h2>{copy.areaItems.map(([name, description]) => <a href="#contacto" key={name}><strong>{name}</strong><span>{description}</span><ArrowRight size={28} /></a>)}</section>
        <div className="oficio-photo"><img src={publicAsset("assets/oficio-team.jpg")} alt="Equipo profesional revisando un proyecto" /></div>
        <section className="oficio-method" id="metodo"><h2>{copy.methodTitle}</h2><div>{copy.steps.map(([title, body], index) => <article key={title}><b>{index + 1}</b><span><strong>{title}</strong><p>{body}</p></span></article>)}</div></section>
        <section className="oficio-contact" id="contacto"><div><h2>{copy.formTitle}<span>{copy.formLead}</span></h2><p>{copy.initialBody}</p></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>{copy.name}<input required placeholder={copy.name} /></label><label>{copy.contactLabel}<input required placeholder="Email o teléfono" /></label><label>{copy.topic}<select required defaultValue=""><option disabled value="">{copy.select}</option>{copy.areaItems.map(([area]) => <option key={area}>{area}</option>)}</select></label><button type="submit">{copy.send}<ArrowRight size={22} /></button>{sent && <p className="oficio-success"><Check size={20} weight="bold" />{common.sent}</p>}</form></section>
      </main>
      <ProposalNotice>{common.proposal}</ProposalNotice>
    </div>
  );
}

const families = [
  { id: "mesa-viva", name: "Mesa Viva", type: "Restaurantes y cafeterías", description: "Fotografía dominante, carta y reserva.", color: "#8f201e", category: "Gastronomía" },
  { id: "turno", name: "Turno", type: "Servicios con cita", description: "Oferta clara y contacto inmediato.", color: "#1555ef", category: "Servicios" },
  { id: "oficio-claro", name: "Oficio Claro", type: "Servicios profesionales", description: "Autoridad, ámbitos y consulta cualificada.", color: "#431335", category: "Servicios" },
  ...additionalFamilies.map((family) => ({
    id: family.id,
    name: family.name,
    type: family.copy.es.type,
    description: family.copy.es.story,
    color: family.colors[0],
    category: ({
      mercado: "Comercio", taller: "Servicios", "clinica-serena": "Salud", patio: "Espacios",
      estudio: "Servicios", raiz: "Salud", aula: "Servicios", nido: "Salud", "casa-abierta": "Espacios",
      obrador: "Gastronomía", nocturno: "Gastronomía", botanica: "Comercio", ruta: "Servicios",
      liga: "Salud", sastreria: "Comercio", orbita: "Espacios", barrio: "Comercio",
    })[family.id] ?? "Servicios",
  })),
];

function Catalog() {
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", "Gastronomía", "Servicios", "Salud", "Comercio", "Espacios"];
  const visibleFamilies = category === "Todas" ? families : families.filter((family) => family.category === category);

  return (
    <main className="studio-catalog">
      <header className="catalog-header">
        <a className="catalog-brand" href="/" aria-label="Volver a olegotka.es">oleg<span>otka</span></a>
        <span className="catalog-count">20 plantillas en ES y CAT</span>
        <a className="catalog-contact" href="mailto:hello@olegotka.es?subject=Quiero%20una%20web%20desde%20una%20plantilla">Pedir una web <ArrowRight size={18} /></a>
      </header>

      <section className="catalog-intro">
        <div className="catalog-hero-copy">
          <p>Biblioteca para negocios locales</p>
          <h1>20 plantillas para tu negocio.</h1>
          <span>Elige una dirección, abre la demo y comprueba cómo se adapta a tu negocio.</span>
          <a href="#catalogo">Explorar plantillas <ArrowRight size={20} /></a>
        </div>
        <div className="catalog-collage" aria-label="Selección de plantillas">
          {["mesa-viva", "oficio-claro", "turno"].map((id, index) => (
            <img key={id} className={`catalog-collage-${index + 1}`} src={publicAsset(`previews/${id}.png`)} alt={`Vista previa de la plantilla ${families.find((family) => family.id === id)?.name}`} />
          ))}
        </div>
      </section>

      <section className="catalog-library" id="catalogo">
        <div className="catalog-library-head">
          <div><h2>Elige por tipo de negocio</h2><p>{visibleFamilies.length} direcciones disponibles</p></div>
          <div className="catalog-filters" aria-label="Filtrar plantillas">
            {categories.map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)} type="button">{item}</button>)}
          </div>
        </div>

        <div className="catalog-grid" aria-live="polite">
          {visibleFamilies.map((family) => (
            <a className="catalog-card" href={`${import.meta.env.BASE_URL}?template=${family.id}`} key={family.id} style={{ "--entry-color": family.color }}>
              <div className="catalog-preview">
                <span aria-hidden="true">{family.name}</span>
                <img loading="lazy" src={publicAsset(`previews/${family.id}.png`)} alt={`Vista previa de ${family.name} para ${family.type.toLowerCase()}`} />
              </div>
              <div className="catalog-card-copy">
                <div><p>{family.category}</p><h3>{family.name}</h3></div>
                <span>{family.type}</span>
                <strong>{family.description}</strong>
                <em>Ver demo <ArrowRight size={19} /></em>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="catalog-cta">
        <h2>¿Has encontrado una dirección?</h2>
        <p>Adaptamos textos, colores, fotografías y contacto a tu negocio.</p>
        <a href="mailto:hello@olegotka.es?subject=Quiero%20adaptar%20una%20plantilla">Cuéntame tu negocio <ArrowRight size={20} /></a>
      </section>
      <footer className="catalog-footer"><a href="/">olegotka.es</a><span>Diseño y desarrollo web en Barcelona</span></footer>
    </main>
  );
}

function PreviewFrame({ children }) {
  return <div className="template-preview-frame"><div className="template-preview-tools"><a href={import.meta.env.BASE_URL}><ArrowLeft size={19} />Todas las plantillas</a><a href="mailto:hello@olegotka.es?subject=Quiero%20esta%20plantilla">Quiero esta web</a></div>{children}</div>;
}

export function App() {
  const template = useMemo(() => new URLSearchParams(window.location.search).get("template"), []);
  const runtimeLead = window.__LEAD_SITE__;
  if (runtimeLead?.family) return <CollectionTemplate family={runtimeLead.family} />;
  if (template === "mesa-viva") return <PreviewFrame><MesaViva /></PreviewFrame>;
  if (template === "turno") return <PreviewFrame><Turno /></PreviewFrame>;
  if (template === "oficio-claro") return <PreviewFrame><OficioClaro /></PreviewFrame>;
  if (additionalFamiliesById[template]) return <PreviewFrame><CollectionTemplate family={additionalFamiliesById[template]} /></PreviewFrame>;
  return <Catalog />;
}
