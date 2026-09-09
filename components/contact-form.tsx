'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { site } from '@/lib/site';
export function ContactForm({ support = false }: { support?: boolean }) {
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState('');
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus(
        'Message copied. Paste it into an email to ' + site.email + '.',
      );
    } catch {
      setStatus(
        'Copy was unavailable. Please select and copy the draft below.',
      );
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const message = String(data.get('message') || '').trim();
        if (!name || !message) {
          setStatus('Please add your name and a message.');
          return;
        }
        const text =
          'Name: ' +
          name +
          '\nReply email: ' +
          email +
          '\nChurch: ' +
          String(data.get('church') || 'Not provided') +
          '\n\n' +
          message;
        setDraft(text);
        setStatus(
          'Your email draft is ready. Open your email app below, then send it to reach our team.',
        );
      }}
    >
      <div className="field-row">
        <div>
          <label htmlFor="name">
            Your name <span>(required)</span>
          </label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Alex Taylor"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email address <span>(required)</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <label htmlFor="church">
        Church or organisation <span>(optional)</span>
      </label>
      <Input
        id="church"
        name="church"
        autoComplete="organization"
        maxLength={150}
        placeholder="Your community"
      />
      <label htmlFor="message">
        {support ? 'How can we help?' : 'Your message'} <span>(required)</span>
      </label>
      <Textarea
        id="message"
        name="message"
        rows={6}
        minLength={10}
        maxLength={2000}
        required
        placeholder={
          support
            ? 'Tell us what happened, your app version, and what you have already tried.'
            : 'Tell us a little about what you have in mind.'
        }
      />
      <p className="form-note">
        This form prepares an email; it does not submit or store your message on
        this website. Please avoid sharing sensitive personal information.
      </p>
      <Button className="button primary" type="submit">
        Prepare email <ArrowUpRight size={17} />
      </Button>
      <div role="status" aria-live="polite" className="form-status">
        {status}
      </div>
      {draft && (
        <div className="email-draft">
          <label htmlFor="draft">Your email draft</label>
          <Textarea id="draft" value={draft} readOnly rows={7} />
          <div className="actions left">
            <a
              className="button primary"
              href={
                'mailto:' +
                site.email +
                '?subject=' +
                encodeURIComponent(
                  support ? 'Equipt support request' : 'Hello Equipt',
                ) +
                '&body=' +
                encodeURIComponent(draft)
              }
            >
              Open email app <ArrowUpRight size={17} />
            </a>
            <Button
              type="button"
              variant="outline"
              className="button secondary"
              onClick={copy}
            >
              {status.startsWith('Message copied') ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}{' '}
              Copy message
            </Button>
          </div>
          <p className="form-note">
            If no email app opens, send the copied message to{' '}
            <a href={'mailto:' + site.email}>{site.email}</a>.
          </p>
        </div>
      )}
    </form>
  );
}
