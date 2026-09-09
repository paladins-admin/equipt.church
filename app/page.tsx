import Link from 'next/link';
import {
  MessageCircle,
  Check,
  ArrowUpRight,
  Users,
  ShieldCheck,
} from 'lucide-react';
import {
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  FeatureGrid,
  AppPreview,
  AnalyticsPreview,
  TestimonialCard,
  CTASection,
} from '@/components/marketing';
import { HeroParallax, Reveal } from '@/components/motion';
import { ScreenshotCarousel } from '@/components/screenshot-carousel';
import { FAQAccordion } from '@/components/faq-accordion';
export default function Home() {
  return (
    <main id="main">
      <section className="hero wrap">
        <div className="eyebrow">
          <span /> A little intention. A lasting difference.
        </div>
        <h1>
          Discipleship starts
          <br />
          with a <em>conversation.</em>
        </h1>
        <p className="hero-copy">
          You don’t need all the answers. Just a willingness to walk alongside
          someone. Equipt helps you take the next step, together.
        </p>
        <div className="actions">
          <PrimaryButton href="/download">Discover Equipt</PrimaryButton>
          <SecondaryButton href="/for-churches">
            Made for your church
          </SecondaryButton>
        </div>
        <p className="micro">Less pressure. More presence. Real growth.</p>
        <div className="hero-stage">
          <div className="side-note">
            <span className="note-icon">
              <MessageCircle />
            </span>
            <h3>
              Real conversations.
              <br />
              Deeper connections.
            </h3>
            <p>
              A simple guide for
              <br />
              meaningful moments.
            </p>
          </div>
          <HeroParallax>
            <AppPreview />
          </HeroParallax>
          <div className="floating-note">
            <span className="success">
              <Check size={19} />
            </span>
            <div>
              <strong>Small steps. Real growth.</strong>
              <p>Every conversation counts.</p>
            </div>
          </div>
          <div className="stage-caption">
            Illustrative app preview · Final screens may vary
          </div>
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="FAITH GROWS IN RELATIONSHIP"
          title="Walk alongside someone. We’ll help with the next step."
          description="Thoughtful guides, space to reflect, and gentle reminders. Everything you need to make discipleship part of everyday life."
        />
        <FeatureGrid limit={3} />
        <div className="center-link">
          <Link className="text-link" href="/features">
            Explore all the features <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="soft-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="SIMPLE ENOUGH TO START TODAY"
            title="A little structure. A lot of room to grow."
          />
          <div className="steps">
            {[
              [
                '01',
                'Choose your person.',
                'Start with someone you know. Invite them into a regular conversation about life and faith.',
              ],
              [
                '02',
                'Start a conversation.',
                'Follow a thoughtful guide, ask an honest question, and make space to listen.',
              ],
              [
                '03',
                'Keep growing, together.',
                'Reflect, pray, and take the next small step. A simple rhythm can make a lasting difference.',
              ],
            ].map(([n, title, text]) => (
              <Reveal key={n} className="step">
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section">
        <ScreenshotCarousel>
          {[0, 1, 2].map((variant) => (
            <AppPreview key={variant} variant={variant} />
          ))}
        </ScreenshotCarousel>
      </section>
      <section className="wrap church-banner">
        <div>
          <div className="eyebrow">FOR THE CHURCH YOU LOVE</div>
          <h2>
            Don’t just run a program.
            <br />
            Grow a culture.
          </h2>
          <p>
            Help your people feel ready to disciple others. Give your church a
            shared pathway and your leaders the insights to encourage the
            journey.
          </p>
          <PrimaryButton href="/for-churches">
            Explore Equipt for churches
          </PrimaryButton>
        </div>
        <div className="church-principles">
          {[
            [
              Users,
              'Everyday people, equipped',
              'A simple way for more people to take part.',
            ],
            [
              MessageCircle,
              'A shared discipleship rhythm',
              'Intentional conversations across your community.',
            ],
            [
              ShieldCheck,
              'Care that starts with trust',
              'A thoughtful approach to progress and privacy.',
            ],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Users;
            return (
              <div key={String(title)}>
                <I size={23} />
                <div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="wrap split-section">
        <div>
          <span className="eyebrow">SEE THE PEOPLE BEHIND THE PROGRESS</span>
          <h2>
            Less guesswork.
            <br />
            More encouragement.
          </h2>
          <p>
            Get a clearer picture of participation and progress. Use those
            insights to start a conversation, celebrate a small step, or offer a
            little extra support.
          </p>
          <Link className="text-link" href="/for-churches">
            A closer look at church insights <ArrowUpRight size={17} />
          </Link>
        </div>
        <AnalyticsPreview />
      </section>
      <section className="soft-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="GROWING TOGETHER"
            title="The stories are still being written."
          />
          <TestimonialCard />
        </div>
      </section>
      <section className="wrap section faq-section">
        <SectionHeading
          eyebrow="A FEW THINGS YOU MIGHT BE WONDERING"
          title="Let’s clear a little space."
        />
        <FAQAccordion limit={5} />
        <div className="center-link">
          <Link className="text-link" href="/faq">
            More questions, answered <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
