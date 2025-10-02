import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

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
              <strong>Students!</strong> Join us for a groundbreaking research hackathon where we discover the border between
              essential programming knowledge and skills that can be delegated to AI tools. Help us reshape the future of programming education!
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg margin-right--md"
                to="/docs/intro">
                📚 Explore Research
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/docs/registration">
                🚀 Register Now
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img
                src={require('@site/static/to_code_or_to_AI_code.png').default}
                alt="TO CODE OR TO AI CODE - Shakespeare contemplating the eternal question"
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

function StudentFocusedGoals() {
  return (
    <section className="padding-vert--xl" style={{ backgroundColor: 'var(--ifm-color-primary-lightest)' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">🎯 Discover the Best Code Workflows Together</Heading>
          <p className="text--lg">Students and experts learning from each other - share workflows, discover best practices, and shape the future of AI-assisted programming</p>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧭</div>
                <Heading as="h3">Find the Border</Heading>
              </div>
              <div className="card__body">
                <p>Discover what programming skills are essential to learn versus what can be delegated to AI tools. This will reshape how programming is taught in schools.</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                <Heading as="h3">Hackathon Experience</Heading>
              </div>
              <div className="card__body">
                <p>Participate in exciting coding challenges, work with AI tools, collaborate with peers, and compete for prizes while contributing to educational research.</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <Heading as="h3">Shape Education</Heading>
              </div>
              <div className="card__body">
                <p>Your participation will directly influence how programming is taught to future students worldwide. Be part of this educational transformation!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <Heading as="h2">🔬 Core Research Question</Heading>
              </div>
              <div className="card__body">
                <p className="text--center text--lg">
                  <strong>"Where is the border between essential programming knowledge that students must learn versus skills that can be effectively delegated to AI tools?"</strong>
                </p>
                <p className="text--center">
                  This research is part of my master thesis in Applied AI at <Link to="https://www.iu.org/masters/artificial-intelligence/">IU International University</Link>.
                  I'm Davor Radic, and I already hold a bachelor's degree in computer science.
                  I work with the <Link to="https://roc-nijmegen.nl">Software Development team at ROC Nijmegen</Link>, where we're collaborating on this research.
                  My goal is to create open-source research that can benefit educational institutions worldwide.
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
    { icon: '🌱', title: 'Blank Slate Coders', description: 'No programming experience - discover AI-assisted development from scratch' },
    { icon: '🔍', title: 'Code Curious', description: 'Watched tutorials, never practiced - bridge theory to AI-assisted practice' },
    { icon: '🛠️', title: 'Traditional Builders', description: '1-3 years experience - compare traditional vs AI development methods' },
    { icon: '🤖', title: 'AI Natives', description: 'AI-first developers - demonstrate advanced AI collaboration techniques' },
    { icon: '🎓', title: 'Hybrid Learners', description: 'Both traditional and AI experience - find the optimal balance' },
    { icon: '🏢', title: 'Industry Veterans', description: 'Professional developers - share real-world AI integration insights' },
  ];

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">👥 Participant Groups</Heading>
          <p className="text--lg">Choose your experience level and help reshape programming education</p>
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

function JudgesSection() {
  return (
    <section className="padding-vert--xl" style={{ backgroundColor: 'var(--ifm-background-color)' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">👨‍⚖️ Expert Judges</Heading>
          <p className="text--lg">Industry professionals and educators evaluating your work</p>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className="card">
              <div className="card__body text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <Heading as="h3">Educational Experts</Heading>
                <p>Professors and researchers from leading universities evaluating educational impact and innovation.</p>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className="card">
              <div className="card__body text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
                <Heading as="h3">Industry Leaders</Heading>
                <p>Senior developers and CTOs from tech companies assessing practical applications and code quality.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/contact">
            🤝 Become a Judge
          </Link>
        </div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section className="padding-vert--xl" style={{ backgroundColor: 'var(--ifm-color-primary-lightest)' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">🤝 Partners & Sponsors</Heading>
          <p className="text--lg">Supporting the future of programming education</p>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
                <Heading as="h3">Tech Companies</Heading>
              </div>
              <div className="card__body">
                <p>Leading technology companies providing mentorship, prizes, and career opportunities for participants.</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <Heading as="h3">Educational Institutions</Heading>
              </div>
              <div className="card__body">
                <p>Universities and coding bootcamps partnering to advance programming education research and methodology.</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header text--center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                <Heading as="h3">AI Tool Providers</Heading>
              </div>
              <div className="card__body">
                <p>AI development platforms and tools supporting participants with free access and premium features.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/contact">
            💼 Become a Sponsor
          </Link>
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
          <Heading as="h2">🌍 Ready to Shape the Future of Programming Education?</Heading>
          <p className="text--lg margin-bottom--lg">
            Your participation will directly contribute to reshaping programming education for millions of students worldwide.
          </p>
          <div>
            <Link
              className="button button--primary button--lg margin-right--md"
              to="/docs/registration">
              📝 Register for Free
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/intro">
              📖 Learn More
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
      description="A groundbreaking research hackathon exploring the border between essential programming knowledge and AI-delegatable skills">
      <HomepageHeader />
      <main>
        <StudentFocusedGoals />
        <ResearchHighlight />
        <ParticipantGroups />
        <JudgesSection />
        <SponsorsSection />
        <CallToAction />
      </main>
    </Layout>
  );
}
