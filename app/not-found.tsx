import { PrimaryButton } from '@/components/marketing';
export default function NotFound() {
  return (
    <main id="main" className="wrap page-hero">
      <div className="eyebrow">404 · A DIFFERENT PATH</div>
      <h1>Let’s find your next step.</h1>
      <p>
        That page isn’t here. Head back home, or contact us if you need a hand.
      </p>
      <div className="actions">
        <PrimaryButton href="/">Back to Equipt</PrimaryButton>
      </div>
    </main>
  );
}
