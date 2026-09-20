// Single source of truth for the site’s content.
// Edit this file to update the site.

export const profile = {
  name: 'Muhammad Khubaib Raza',
  shortName: 'Khubaib',
  title: 'Senior AI Engineer & Full-Stack Developer',
  location: 'Lahore, Pakistan',
  currentRole: 'AI Solution Architect',
  currentCompany: 'Cloudcx',

  hero: {
    lines: ["I'm Khubaib.", 'I build AI systems', 'and ship them to production.'],
    // Index from which the remaining headline lines render muted.
    mutedFrom: 2,
  },

  bio: '8+ years building production-grade AI that does real work — large language models, agentic systems, and voice AI. Currently AI Solution Architect at Cloudcx, where I build and stress-test real-time voice agents.',

  bioShort: 'Building production AI systems at Cloudcx.',

  projects: [
    {
      name: 'Voice AI Agents',
      blurb:
        'Real-time conversational agents for customer-facing phone and web channels, plus the automated tooling that regression-tests them before they reach production.',
      meta: 'Vapi / ElevenLabs / Pipecat / 2024 — Present',
    },
    {
      name: 'ChatGPT Voice Customer Support',
      blurb:
        'An automated phone support line that answers, understands, and resolves customer calls end to end — ChatGPT reasoning wired into a live telephony backend.',
      meta: 'ChatGPT / Twilio / speech-to-text streaming',
    },
    {
      name: 'Invoice Processing',
      blurb:
        'An OCR pipeline that reads invoices and pulls structured data out of them, replacing manual entry for high-volume document workflows.',
      meta: 'AWS SageMaker / OCR / Python',
    },
  ],

  skillGroups: [
    { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript'] },
    {
      label: 'AI & ML',
      items: ['PyTorch', 'LangGraph', 'LLMs', 'NLP', 'Scikit-learn', 'Pandas'],
    },
    {
      label: 'Backend & Web',
      items: ['FastAPI', 'Flask', 'React', 'Node.js', 'Docker'],
    },
    {
      label: 'Cloud',
      items: ['AWS SageMaker', 'Lambda', 'EC2', 'S3', 'GCP', 'Azure', 'Firebase'],
    },
    {
      label: 'Voice & Conversational',
      items: ['Vapi', 'ElevenLabs', 'Pipecat', 'Twilio', 'Asterisk'],
    },
  ],

  links: [
    {
      label: 'LinkedIn',
      note: '/in/muhammadkhubiabraza',
      href: 'https://www.linkedin.com/in/muhammadkhubiabraza/',
    },
    {
      label: 'Email',
      note: 'mkhubaibraza@gmail.com',
      href: 'mailto:mkhubaibraza@gmail.com',
    },
  ],

  // The hero's second button. Points at the first link above.
  primaryCta: 'Get in touch',

  year: 2026,
};
