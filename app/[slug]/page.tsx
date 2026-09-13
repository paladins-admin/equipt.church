import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpRight,
  Mail,
  Heart,
  Sprout,
  Users,
  ShieldCheck,
  Check,
  Apple,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { pageInfo, pageMetadata, site } from '@/lib/site';
import { legalSections, legalIntroductions, legalUpdated } from '@/lib/legal';
import {
  FeatureGrid,
  SectionHeading,
  CTASection,
  AnalyticsPreview,
  PrimaryButton,
  SecondaryButton,
  AppPreview,
} from '@/components/marketing';
import { FAQAccordion } from '@/components/faq-accordion';
import { ContactForm } from '@/components/contact-form';
import { Reveal } from '@/components/motion';
export function generateStaticParams() {
  return Object.keys(pageInfo).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const info = pageInfo[slug];
  return info
    ? pageMetadata(
        info.title + ' | Equipt',
        info.description,
        '/' + (slug === 'terms-of-service' ? 'terms-of-use' : slug) + '/',
      )
    : {};
}
function ContactDetails() {
  return (
    <aside className="contact-details">
      <div className="feature-icon tone-0">
        <Mail />
      </div>
      <h2>A real conversation starts here.</h2>
      <p>
        Questions about the app, your church, privacy, or something else? It all
        starts with a hello.
      </p>
      <a className="email-link" href={'mailto:' + site.email}>
        {site.email}
        <ArrowUpRight size={17} />
      </a>
      <div className="contact-extra">
        <h3>Find us elsewhere</h3>
        {site.socialLinks.length ? (
          site.socialLinks.map((link) => (
            <a key={link.url} href={link.url}>
              {link.label}
            </a>
          ))
        ) : (
          <p>
            Our social channels are coming soon. Email is the best way to reach
            us for now.
          </p>
        )}
      </div>
    </aside>
  );
}
function Churches() {
  return (
    <>
      <section className="wrap split-section">
        <Reveal>
          <div className="feature-icon tone-0">
            <Users />
          </div>
          <h2>Help your people help each other grow.</h2>
          <p>
            Discipleship is personal. Supporting it across a church takes a
            shared rhythm. Equipt brings a simple conversation pathway together
            with a view of how your community is participating.
          </p>
          <ul className="check-list">
            {[
              'A common starting point for discipleship',
              'Clear progress insights for leaders',
              'Reporting to support thoughtful follow-up',
              'A privacy-first approach to personal reflections',
            ].map((t) => (
              <li key={t}>
                <Check size={18} />
                {t}
              </li>
            ))}
          </ul>
          <PrimaryButton href="/contact">Talk about your church</PrimaryButton>
        </Reveal>
        <AnalyticsPreview />
      </section>
      <section className="soft-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="A CLEARER PICTURE, A MORE PERSONAL RESPONSE"
            title="Insights that lead back to people."
          />
          <div className="feature-grid">
            {[
              [
                'Church-wide tracking',
                'Understand participation across discipleship relationships without turning spiritual growth into a competition.',
              ],
              [
                'A leadership dashboard',
                'Bring progress insights into one place, so leaders can spot where encouragement or a conversation may help.',
              ],
              [
                'Useful reporting',
                'Build a shared understanding of what is happening over time. Reporting scope and export options will be confirmed before launch.',
              ],
            ].map(([title, text]) => (
              <Reveal className="feature-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap privacy-callout">
        <ShieldCheck size={40} />
        <div>
          <h2>Trust belongs at the centre.</h2>
          <p>
            Your discipleship information stays on your device. Equipt does not
            send your discipleship records or progress information to Core25.
          </p>
          <Link className="text-link" href="/privacy-policy">
            Read the Privacy Policy <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
function About() {
  return (
    <>
      <section className="wrap mission-panel">
        <span className="eyebrow">OUR MISSION</span>
        <h2>
          “Helping churches make disciples through intentional conversations.”
        </h2>
        <Sprout size={38} />
      </section>
      <section className="wrap split-section story">
        <div>
          <span className="eyebrow">WHY EQUIPT EXISTS</span>
          <h2>
            Because showing up
            <br />
            can change a life.
          </h2>
        </div>
        <div>
          <p>
            Most meaningful growth does not happen in a hurry. It happens when
            someone makes time, asks a thoughtful question, and keeps walking
            with us.
          </p>
          <p>
            Equipt is built around that simple idea. A discipleship guide should
            help a conversation happen, give people confidence to begin, and
            leave room for real life.
          </p>
          <p>
            Our vision is to see churches where everyday people feel equipped to
            help others grow in faith. One relationship at a time, intentional
            conversations can become an everyday culture.
          </p>
        </div>
      </section>
      <section className="soft-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="WHAT WE VALUE"
            title="People first. Purpose in every step."
          />
          <div className="feature-grid">
            {[
              [
                Heart,
                'Presence over pressure',
                'Give people your attention, patience, and care. Growth is a journey, not a score.',
              ],
              [
                MessageCircle,
                'Honest conversations',
                'Make room for questions, thoughtful listening, and the courage to learn together.',
              ],
              [
                Sprout,
                'Faithful small steps',
                'Encourage rhythms that fit everyday life and help faith take root.',
              ],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Heart;
              return (
                <Reveal key={String(title)} className="feature-card">
                  <div className="feature-icon tone-1">
                    <I />
                  </div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
function Download() {
  return (
    <section className="wrap download-layout">
      <div>
        <div className="availability">
          <span /> Preparing for launch
        </div>
        <h2>
          Less on your mind.
          <br />
          More room for people.
        </h2>
        <p>
          Guided conversations, a place to reflect, and gentle reminders to keep
          growing together.
        </p>
        <div className="download-buttons">
          {site.appStoreUrl ? (
            <a className="button store-button" href={site.appStoreUrl}>
              <Apple />
              Download on the App Store
            </a>
          ) : (
            <button
              className="button store-button"
              disabled
              aria-describedby="availability-note"
            >
              <Apple />
              Download on the App Store<span>Coming soon</span>
            </button>
          )}
          {site.testflightUrl ? (
            <a className="button secondary" href={site.testflightUrl}>
              Join TestFlight
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <button className="button secondary" disabled>
              Join TestFlight <span>Coming soon</span>
            </button>
          )}
        </div>
        <p className="form-note" id="availability-note">
          Download links are not yet available. Final device requirements and
          feature availability will be published at release.
        </p>
        <a
          className="text-link"
          href={'mailto:' + site.email + '?subject=Equipt%20early%20access'}
        >
          Ask about early access <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="download-preview">
        <AppPreview />
        <p>Illustrative app preview</p>
      </div>
    </section>
  );
}
function PolicyText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((paragraph, index) => (
        <p key={index} style={{ marginBottom: '1rem' }}>
          {paragraph
            .split(/((?:privacy|support)@equipt\.church)/g)
            .map((part, i) =>
              /^(privacy|support)@equipt\.church$/.test(part) ? (
                <a key={i} href={'mailto:' + part}>
                  {part}
                </a>
              ) : (
                part
              ),
            )}
        </p>
      ))}
    </>
  );
}
function Legal({ slug }: { slug: string }) {
  const sections = legalSections[slug];
  return (
    <article
      className={sections.length ? 'wrap legal-layout' : 'wrap prose narrow'}
    >
      {sections.length > 0 && (
        <aside>
          <p>ON THIS PAGE</p>
          <nav aria-label="Policy sections">
            {sections.map(([title], i) => (
              <a key={title} href={'#section-' + i}>
                {title}
              </a>
            ))}
          </nav>
        </aside>
      )}
      <div className="prose">
        <p style={{ marginBottom: '1.5rem' }}>
          <strong>
            Last updated: <time dateTime="2026-09-13">{legalUpdated}</time>
          </strong>
        </p>
        <PolicyText text={legalIntroductions[slug]} />
        {sections.map(([title, text], i) => (
          <section id={'section-' + i} key={title}>
            <h2>{title}</h2>
            <PolicyText text={text} />
          </section>
        ))}
      </div>
    </article>
  );
}
function Deletion() {
  return (
    <article className="wrap prose narrow">
      <section>
        <h2>Your Data</h2>
        <p>
          Equipt stores your discipleship information locally on your device.
          Core25 does not maintain a remote copy of your discipleship records
          and cannot recover information that has been deleted from your device.
        </p>
      </section>
      <section>
        <h2>Deleting Your Information</h2>
        <PolicyText
          text={
            legalSections['privacy-policy'].find(
              ([title]) => title === 'Deleting Your Information',
            )![1]
          }
        />
      </section>
      <section>
        <h2>Data Retention</h2>
        <PolicyText
          text={
            legalSections['privacy-policy'].find(
              ([title]) => title === 'Data Retention',
            )![1]
          }
        />
      </section>
      <section>
        <h2>Privacy enquiries</h2>
        <p>
          <a href={'mailto:' + site.privacyEmail}>{site.privacyEmail}</a>
        </p>
        <p>
          <Link href="/privacy-policy">Read the Privacy Policy</Link>.
        </p>
      </section>
    </article>
  );
}
function Support() {
  return (
    <article className="wrap prose narrow">
      <section>
        <p>
          Equipt is designed to make discipleship simple and practical. If
          you're having trouble using the app, managing discipleship progress,
          setting reminders or understanding a feature, contact us.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Support:
          <br />
          <a href={'mailto:' + site.supportEmail}>{site.supportEmail}</a>
        </p>
      </section>
      <section>
        <h2>Privacy</h2>
        <p>
          Your discipleship information stays on your device. Equipt does not
          send your discipleship records or progress information to Core25.
        </p>
        <p style={{ marginTop: '1rem' }}>
          For privacy enquiries:
          <br />
          <a href={'mailto:' + site.privacyEmail}>{site.privacyEmail}</a>
        </p>
      </section>
      <section>
        <h2>Your Data</h2>
        <PolicyText
          text={
            'Equipt stores your discipleship information locally on your device.\nCore25 does not maintain a remote copy of your discipleship records and cannot recover information that has been deleted from your device.'
          }
        />
      </section>
      <section>
        <h2>About Equipt</h2>
        <p>
          Equipt is operated by:
          <br />
          CORE25 PTY LTD
          <br />
          ABN 81 700 737 604
          <br />
          Queensland, Australia
        </p>
      </section>
    </article>
  );
}
function Community() {
  return (
    <article className="wrap prose narrow">
      {[
        [
          'Lead with kindness',
          'Treat people with dignity. Listen without rushing to correct, and disagree without attacking or belittling another person.',
        ],
        [
          'Make room for questions',
          'Respect different stages of faith and understanding. Encourage honest conversation without pressure, coercion, or shame.',
        ],
        [
          'Protect personal stories',
          'Ask before sharing another person’s words or experiences. Do not post private information or disclose someone’s prayer needs without their permission.',
        ],
        [
          'Respect boundaries',
          'Do not use the platform for harassment, hate, exploitation, manipulation, or unwanted contact. Respect another person’s decision to pause or end a conversation.',
        ],
        [
          'Share responsibly',
          'Only share content you have permission to use. Do not impersonate others, spread harmful misinformation, or misuse the platform.',
        ],
        [
          'Raise a concern',
          'Contact support@equipt.church to report a concern. Share enough context to help the team understand what happened without including unnecessary sensitive details.',
        ],
        [
          'How these guidelines are applied',
          'Use Equipt responsibly and respectfully. Our Acceptable Use Policy sets out the conditions for using the application. Questions can be directed to support@equipt.church.',
        ],
      ].map(([title, text]) => (
        <section key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
    </article>
  );
}
function Accessibility() {
  return (
    <article className="wrap prose narrow">
      <section>
        <h2>Built with people in mind</h2>
        <p>
          We want more people to be able to participate in discipleship,
          whatever their access needs. Accessibility is an ongoing part of how
          we design and improve Equipt.
        </p>
      </section>
      <section>
        <h2>On this website</h2>
        <p>
          We use semantic headings, labelled form fields, keyboard-accessible
          navigation, visible focus styles, responsive layouts, and
          reduced-motion preferences. Content can be read without relying on
          animation.
        </p>
      </section>
      <section>
        <h2>Our direction</h2>
        <p>
          We aim to work towards WCAG 2.2 Level AA for the website. This is a
          goal, not a certification or a claim that an independent accessibility
          audit has been completed.
        </p>
      </section>
      <section>
        <h2>Ongoing improvements</h2>
        <p>
          We plan to review keyboard use, screen reader experiences, text
          resizing, contrast, and touch targets as the site and app develop.
          App-specific support, including VoiceOver and Dynamic Type, will be
          documented when verified.
        </p>
      </section>
      <section>
        <h2>Tell us about a barrier</h2>
        <p>
          Email <a href={'mailto:' + site.email}>{site.email}</a> with the page
          or feature, what you were trying to do, and any assistive technology
          you use. Let us know if you need information in another format.
        </p>
      </section>
    </article>
  );
}
function Releases() {
  return (
    <section className="wrap release-list">
      <div className="release-row">
        <div>
          <span className="release-badge">In development</span>
          <p>Version 1.0 · Planned</p>
        </div>
        <article>
          <h2>A simple beginning.</h2>
          <p>
            The first Equipt release is being prepared. Confirmed release dates
            and shipped features will be added here.
          </p>
          <ul>
            <li>Guided discipleship conversations</li>
            <li>Progress, notes, and prayer reminders</li>
            <li>A foundation for church participation insights</li>
          </ul>
          <p className="form-note">
            This is a planned scope, not a record of shipped features. No public
            version history has been supplied yet.
          </p>
        </article>
      </div>
      <div className="mini-cta">
        <h2>Have an idea for what comes next?</h2>
        <SecondaryButton href="/support">
          Share a feature request
        </SecondaryButton>
      </div>
    </section>
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const info = pageInfo[slug];
  if (!info) notFound();
  return (
    <main id="main">
      <section
        className={
          'wrap page-hero ' + (legalSections[slug] ? 'legal-hero' : '')
        }
      >
        <div className="eyebrow">{info.eyebrow}</div>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </section>
      {slug === 'features' ? (
        <>
          <section className="wrap">
            <FeatureGrid />
            <p className="pricing-note">
              Feature descriptions outline the Equipt product direction. Release
              availability and exact behaviour will be confirmed before launch.
            </p>
          </section>
          <CTASection />
        </>
      ) : slug === 'for-churches' ? (
        <Churches />
      ) : slug === 'about' ? (
        <About />
      ) : slug === 'faq' ? (
        <section className="wrap narrow faq-page">
          <FAQAccordion />
          <div className="mini-cta">
            <h2>Still wondering about something?</h2>
            <SecondaryButton href="/contact">Ask us a question</SecondaryButton>
          </div>
        </section>
      ) : slug === 'contact' ? (
        <section className="wrap contact-layout">
          <ContactForm />
          <ContactDetails />
        </section>
      ) : slug === 'download' ? (
        <Download />
      ) : legalSections[slug] ? (
        <Legal slug={slug} />
      ) : slug === 'data-deletion' ? (
        <Deletion />
      ) : slug === 'support' ? (
        <Support />
      ) : slug === 'community-guidelines' ? (
        <Community />
      ) : slug === 'accessibility' ? (
        <Accessibility />
      ) : slug === 'release-notes' ? (
        <Releases />
      ) : null}
    </main>
  );
}
