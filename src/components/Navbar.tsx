"use client";
import PillNav from './PillNav';
const logo = 'logo.svg';

export default function Navbar() {
  return (
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'Curriculum', href: '#curriculum' },
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
        { label: 'JOIN NOW', href: '#join' }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#1a2236" // Deep navy background
      pillColor="#f5f5f5" // Soft white pill
      hoveredPillTextColor="#d4af37" // Gold text on hover
      pillTextColor="#1a2236" // Deep navy pill text
      initialLoadAnimation
    />
  );
}
  