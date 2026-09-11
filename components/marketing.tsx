import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  MessageCircle,
  ChartNoAxesCombined,
  NotebookPen,
  Heart,
  Users,
  Bell,
  WifiOff,
  ChartPie,
  Check,
  Sprout,
  ShieldCheck,
} from 'lucide-react';
import { features, footerGroups, site } from '@/lib/site';
import { Reveal } from './motion';
const icons = {
  BookOpen,
  MessageCircle,
  ChartNoAxesCombined,
  NotebookPen,
  Heart,
  Users,
  Bell,
  WifiOff,
  ChartPie,
};
export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="button primary" href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="button secondary" href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={'section-heading ' + align}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function FeatureCard({
  feature,
  index = 0,
}: {
  feature: (typeof features)[number];
  index?: number;
}) {
  const Icon = icons[feature.icon as keyof typeof icons];
  return (
    <Reveal className="feature-card" delay={(index % 3) * 0.05}>
      <div className={'feature-icon tone-' + (index % 3)}>
        <Icon size={23} aria-hidden="true" />
      </div>
      <p className="feature-label">{feature.label}</p>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </Reveal>
  );
}
export function FeatureGrid({ limit = 9 }: { limit?: number }) {
  return (
    <div className="feature-grid">
      {features.slice(0, limit).map((feature, index) => (
        <FeatureCard key={feature.label} feature={feature} index={index} />
      ))}
    </div>
  );
}
export function CTASection() {
  return (
    <section className="wrap cta">
      <div className="eyebrow">
        ONE PERSON. ONE CONVERSATION. ONE NEXT STEP.
      </div>
      <h2>You don’t have to have it all figured out.</h2>
      <p>Just start with someone. We’ll help you take it from there.</p>
      <div className="actions">
        <PrimaryButton href="/download">Find your next step</PrimaryButton>
        <SecondaryButton href="/contact">Let’s talk</SecondaryButton>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <span className="brand-mark">e</span>equipt
            <span className="logo-dot">.</span>
          </Link>
          <p>
            Intentional conversations.
            <br />
            Lifelong discipleship.
          </p>
          <a className="email-link" href={'mailto:' + site.email}>
            {site.email}
          </a>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Equipt. All rights reserved.</span>
        <span>Made with purpose. Built for people.</span>
      </div>
    </footer>
  );
}
export function AppPreview({ variant = 0 }: { variant?: number }) {
  return (
    <div
      className="phone"
      aria-label={
        [
          'Illustrative Equipt home screen',
          'Illustrative Equipt conversation screen',
          'Illustrative Equipt prayer screen',
        ][variant]
      }
      role="img"
    >
      <div aria-hidden="true">
        <div className="phone-top">
          9:41 <span>••• ▰</span>
        </div>
        <div className="phone-heading">
          <span className="app-mark">e</span>
          <span>equipt</span>
        </div>
        <p className="phone-greeting">
          {variant === 1
            ? 'FOUNDATIONS · CONVERSATION 03'
            : variant === 2
              ? 'MAKE A LITTLE SPACE'
              : 'A new day to grow.'}
        </p>
        <h2>
          {variant === 1 ? (
            'A faith that grows.'
          ) : variant === 2 ? (
            'Pause. Pray. Connect.'
          ) : (
            <>
              Hi, Alex <span>☀</span>
            </>
          )}
        </h2>
        <div className="phone-card blue">
          <div className="small-label">
            {variant === 1
              ? 'LET’S TALK'
              : variant === 2
                ? 'ON YOUR HEART'
                : 'YOUR NEXT CONVERSATION'}
          </div>
          {variant === 2 ? <Heart /> : <BookOpen />}
          <h3>
            {variant === 1 ? (
              'Where have you noticed God this week?'
            ) : variant === 2 ? (
              'A moment for the people you love.'
            ) : (
              <>
                Following Jesus,
                <br />
                one step at a time.
              </>
            )}
          </h3>
          <p>
            {variant === 1
              ? 'Take your time. There is room to be honest.'
              : variant === 2
                ? 'Your next reminder · 8:00 am'
                : 'Foundations · Conversation 03'}
          </p>
          <div className="phone-action">
            {variant === 1
              ? 'Space to reflect'
              : variant === 2
                ? 'Your prayer rhythm'
                : 'Let’s begin'}
            <ArrowUpRight size={16} />
          </div>
        </div>
        <div className="phone-row">
          <h3>{variant === 1 ? 'A thought to keep' : 'Your people'}</h3>
          <span>{variant === 1 ? 'Notes' : 'View all'}</span>
        </div>
        <div className="person">
          <span className="avatar">JL</span>
          <div>
            <strong>Jordan Lee</strong>
            <p>
              {variant === 1
                ? 'Learning to trust, one step at a time.'
                : 'Growing together'}
            </p>
          </div>
          <Check size={18} />
        </div>
        <div className="phone-progress">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="small-label">3 OF 5 CONVERSATIONS COMPLETE</p>
        <div className="phone-tabs">
          <BookOpen />
          <MessageCircle />
          <Sprout />
        </div>
      </div>
    </div>
  );
}
export function AnalyticsPreview() {
  return (
    <div
      className="analytics-preview"
      role="img"
      aria-label="Illustrative church dashboard: 48 people connected, 126 conversations and 72 percent active this month. All figures are sample data."
    >
      <div className="dashboard-top">
        <span className="app-mark">e</span>
        <strong>Your church, growing together.</strong>
        <span className="sample-label">Sample data</span>
      </div>
      <div className="stats">
        {[
          ['48', 'People connected'],
          ['126', 'Conversations'],
          ['72%', 'Active this month'],
        ].map(([v, l]) => (
          <div key={l}>
            <strong>{v}</strong>
            <p>{l}</p>
          </div>
        ))}
      </div>
      <div className="chart-title">
        <strong>Conversations over time</strong>
        <span>Last 6 months</span>
      </div>
      <div className="bar-chart" aria-hidden="true">
        {[35, 48, 43, 63, 76, 91].map((h, i) => (
          <div key={i}>
            <span style={{ height: h + '%' }} />
            <small>{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][i]}</small>
          </div>
        ))}
      </div>
      <div className="dashboard-foot">
        <ShieldCheck size={15} /> People behind the progress. Always.
      </div>
    </div>
  );
}
export function TestimonialCard() {
  return (
    <div className="testimonial-placeholder">
      <MessageCircle size={28} aria-hidden="true" />
      <h3>Good stories take time.</h3>
      <p>
        We’re making room here for honest stories from people and churches using
        Equipt. Their words, with their permission.
      </p>
      <span>Community stories coming soon</span>
    </div>
  );
}
