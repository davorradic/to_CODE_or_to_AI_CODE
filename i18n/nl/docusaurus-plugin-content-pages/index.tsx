import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../../../src/pages/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <Heading as="h1" className="hero__title">
              🎭 To Code or to AI Code Hackathon 2026
            </Heading>
            <p className="hero__subtitle">
              Doe mee aan een baanbrekende onderzoekshackathon waar we de grens ontdekken tussen
              essentiële programmeerkennis en vaardigheden die kunnen worden gedelegeerd naar AI-tools.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg margin-right--md"
                to="/docs/intro">
                📚 Verken Onderzoek
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/docs/registration">
                🚀 Registreer Nu
              </Link>
            </div>
            <div className="margin-top--lg">
              <Link
                className="button button--primary button--md margin-right--sm"
                to="mailto:dradic@roc-nijmegen.nl">
                📧 Join Discord
              </Link>
              <Link
                className="button button--outline button--primary button--md"
                to="/docs/contact">
                👨‍🎓 Word Juryid
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img
                src={require('@site/static/to_code_or_to_AI_code.png').default}
                alt="TO CODE OR TO AI CODE - Shakespeare overweegt de eeuwige vraag"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  imageRendering: 'pixelated'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ResearchHighlight() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="card margin-bottom--lg" style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div className="card__header text--center">
                <Heading as="h2">🔬 Centrale Onderzoeksvraag</Heading>
              </div>
              <div className="card__body">
                <p className="text--center text--lg">
                  <strong>"Waar ligt de grens tussen essentiële programmeerkennis die studenten moeten leren versus vaardigheden die effectief kunnen worden gedelegeerd naar AI-tools?"</strong>
                </p>
                <p className="text--center">
                  Dit onderzoek is onderdeel van mijn Applied AI thesis aan <Link to="https://www.iu.org/masters/artificial-intelligence/">IU International University</Link>.
                  Mijn doel is open-source onderzoek te creëren dat onderwijsinstellingen wereldwijd ten goede kan komen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParticipantGroups() {
  const groups = [
    { icon: '🌱', title: 'Blanco Coders', description: 'Geen programmeerervaring - ontdek AI-ondersteunde ontwikkeling vanaf nul' },
    { icon: '🔍', title: 'Code Nieuwsgierigen', description: 'Tutorials bekeken, nooit geoefend - overbruggen theorie naar AI-ondersteunde praktijk' },
    { icon: '🛠️', title: 'Traditionele Bouwers', description: '1-3 jaar ervaring - vergelijk traditionele vs AI ontwikkelingsmethoden' },
    { icon: '🤖', title: 'AI Natives', description: 'AI-first ontwikkelaars - demonstreer geavanceerde AI samenwerkingstechnieken' },
    { icon: '🎓', title: 'Hybride Leerders', description: 'Zowel traditionele als AI ervaring - vind de optimale balans' },
    { icon: '🏢', title: 'Industrie Veteranen', description: 'Professionele ontwikkelaars - deel real-world AI integratie inzichten' },
  ];

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">👥 Deelnemersgroepen</Heading>
          <p className="text--lg">Kies je ervaringsniveau en help programmeeronderwijs hervormen</p>
        </div>
        <div className="row">
          {groups.map((group, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className="card h-100">
                <div className="card__header text--center">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{group.icon}</div>
                  <Heading as="h3" className="card__title">{group.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{group.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="hero hero--secondary padding-vert--xl">
      <div className="container">
        <div className="text--center">
          <Heading as="h2">🌍 Klaar om de Toekomst van Programmeeronderwijs te Vormen?</Heading>
          <p className="text--lg margin-bottom--lg">
            Jouw deelname zal direct bijdragen aan het hervormen van programmeeronderwijs voor miljoenen studenten wereldwijd.
          </p>
          <div>
            <Link
              className="button button--primary button--lg margin-right--md"
              to="/docs/registration">
              📝 Registreer Gratis
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/intro">
              📖 Meer Informatie
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="To Code or to AI Code Hackathon 2026"
      description="Een baanbrekende onderzoekshackathon die de grens verkent tussen essentiële programmeerkennis en AI-delegeerbare vaardigheden">
      <HomepageHeader />
      <main>
        <ResearchHighlight />
        <ParticipantGroups />
        <CallToAction />
      </main>
    </Layout>
  );
}