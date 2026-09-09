import type { Metadata } from 'next';
export const site = {
  name: 'Equipt',
  url: 'https://www.equipt.church',
  email: 'hello@core25.com.au',
  appStoreUrl: '',
  testflightUrl: '',
  socialLinks: [] as { label: string; url: string }[],
};
export function pageMetadata(
  title: string,
  description: string,
  path = '/',
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: site.url + path },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: site.url + path,
      locale: 'en_AU',
    },
    twitter: { card: 'summary', title, description },
  };
}
export const features = [
  {
    icon: 'BookOpen',
    title: 'A guide, not a script.',
    text: 'Thoughtful conversation guides give you somewhere to start, while leaving room for the questions that matter.',
    label: 'Guided discipleship',
  },
  {
    icon: 'MessageCircle',
    title: 'Make space for the real stuff.',
    text: 'Explore faith through honest, two-way conversations. Listen well, ask questions, and learn together.',
    label: 'Conversation-based learning',
  },
  {
    icon: 'ChartNoAxesCombined',
    title: 'Notice the small steps.',
    text: 'Keep track of completed conversations and see the journey taking shape, one meaningful moment at a time.',
    label: 'Progress tracking',
  },
  {
    icon: 'NotebookPen',
    title: 'Remember what matters.',
    text: 'Capture reflections and questions so your next conversation can pick up where the last one left off.',
    label: 'Notes',
  },
  {
    icon: 'Heart',
    title: 'Keep people in your prayers.',
    text: 'Set a gentle reminder to pause and pray for the people you are walking alongside.',
    label: 'Prayer reminders',
  },
  {
    icon: 'Users',
    title: 'More people. The same care.',
    text: 'Keep each discipleship relationship in its own space, with an individual journey and a clear next step.',
    label: 'Multiple disciples',
  },
  {
    icon: 'Bell',
    title: 'A nudge at the right time.',
    text: 'Local notifications help you build a rhythm. Choose reminders that work for you and adjust them as life changes.',
    label: 'Local notifications',
  },
  {
    icon: 'WifiOff',
    title: 'Room to grow, wherever you are.',
    text: 'Offline support is part of the Equipt vision, so a meaningful conversation does not have to depend on a signal.',
    label: 'Offline support',
  },
  {
    icon: 'ChartPie',
    title: 'See the bigger picture.',
    text: 'Church analytics help leaders understand participation and progress, with privacy at the heart of the conversation.',
    label: 'Church analytics',
  },
];
export const faqs = [
  {
    q: 'What is Equipt?',
    a: 'Equipt is a discipleship app designed to help people and churches grow through intentional conversations. It brings guided learning, reflection, reminders, and progress into one simple place.',
  },
  {
    q: 'Do I need to be an experienced leader?',
    a: 'You do not need to have every answer. Equipt is designed to offer a helpful starting point for a conversation, while encouraging you to listen, learn, and grow alongside someone.',
  },
  {
    q: 'Can our whole church use Equipt?',
    a: 'Church-wide use is part of the Equipt vision. Get in touch to discuss your community, the people you want to equip, and the reporting your leaders need.',
  },
  {
    q: 'Is Equipt available on the App Store?',
    a: 'The App Store and TestFlight links will be added here when they are ready. Visit the Download page for the current availability, or email us to ask about early access.',
  },
  {
    q: 'Does Equipt work offline?',
    a: 'Offline support is planned for supported app content. The exact offline features and syncing behaviour will be confirmed with the release. Account changes and church reporting may need an internet connection.',
  },
  {
    q: 'Who can see my notes and progress?',
    a: 'The intended approach is to keep personal reflections separate from church-level reporting. Exact permissions, sharing controls, and data practices must be confirmed in the final Privacy Policy before launch.',
  },
  {
    q: 'How much will Equipt cost?',
    a: 'Starter, Church, and Enterprise are planned options. Prices and included limits have not been finalised. The Pricing page outlines the proposed plans without committing you to a subscription.',
  },
  {
    q: 'How can I ask for my data to be deleted?',
    a: 'Email hello@core25.com.au from the address associated with your account, with “Equipt data deletion request” as the subject. We will confirm any verification needed and the applicable deletion process.',
  },
];
export const pageInfo: Record<
  string,
  { title: string; description: string; eyebrow: string }
> = {
  features: {
    title: 'A little guidance. A lot of possibility.',
    description:
      'Simple tools that help you show up, listen well, and keep growing together.',
    eyebrow: 'Made for meaningful moments',
  },
  'for-churches': {
    title: 'A discipleship culture starts with your people.',
    description:
      'Equip everyday people to walk alongside others, and give your leaders a clearer view of the journey.',
    eyebrow: 'Equipt for churches',
  },
  about: {
    title: 'Big purpose. Small, intentional steps.',
    description:
      'Helping churches make disciples through intentional conversations.',
    eyebrow: 'Our heart behind Equipt',
  },
  pricing: {
    title: 'A place to start. Room to grow.',
    description:
      'Simple plans for individuals, churches, and wider communities. Pricing is being finalised.',
    eyebrow: 'Plans for your next step',
  },
  faq: {
    title: 'Good questions are a good start.',
    description: 'A few things you might be wondering about Equipt.',
    eyebrow: 'Frequently asked questions',
  },
  contact: {
    title: 'Let’s start a conversation.',
    description:
      'Have a question, an idea, or a church you would love to equip? We would love to hear from you.',
    eyebrow: 'Say hello',
  },
  download: {
    title: 'Your next step starts here.',
    description:
      'A simpler way to grow in faith, together. Equipt for iPhone is on the way.',
    eyebrow: 'Take Equipt with you',
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description:
      'A clear place to understand how Equipt handles personal information.',
    eyebrow: 'Your trust matters',
  },
  'terms-of-service': {
    title: 'Terms of Service',
    description: 'The framework for using Equipt responsibly and respectfully.',
    eyebrow: 'Using Equipt',
  },
  support: {
    title: 'A little help along the way.',
    description:
      'Need a hand with Equipt? Start here, or reach out to our team.',
    eyebrow: 'Equipt support',
  },
  'data-deletion': {
    title: 'Your data. Your choice.',
    description:
      'How to request deletion of your Equipt account and personal information.',
    eyebrow: 'Account and data deletion',
  },
  'community-guidelines': {
    title: 'Make room for one another.',
    description:
      'A few shared commitments for thoughtful, caring conversations.',
    eyebrow: 'Community guidelines',
  },
  accessibility: {
    title: 'Everyone deserves a place to grow.',
    description:
      'Our commitment to making Equipt more accessible, one improvement at a time.',
    eyebrow: 'Accessibility',
  },
  'release-notes': {
    title: 'Small improvements. Better conversations.',
    description: 'Follow the journey as Equipt grows and improves.',
    eyebrow: 'Release notes',
  },
};
export const footerGroups = [
  {
    title: 'Explore',
    links: [
      ['Home', '/'],
      ['Features', '/features'],
      ['For Churches', '/for-churches'],
      ['Pricing', '/pricing'],
      ['About', '/about'],
      ['Download', '/download'],
    ],
  },
  {
    title: 'Here to help',
    links: [
      ['Support', '/support'],
      ['FAQ', '/faq'],
      ['Contact', '/contact'],
      ['Release Notes', '/release-notes'],
    ],
  },
  {
    title: 'The details',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms of Service', '/terms-of-service'],
      ['Data Deletion', '/data-deletion'],
      ['Community Guidelines', '/community-guidelines'],
      ['Accessibility', '/accessibility'],
    ],
  },
];
