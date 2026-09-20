// Single source of truth for the site’s content.
// Edit this file to update the site.

export const profile = {
  name: 'Muhammad Khubaib Raza',
  shortName: 'Khubaib',
  title: 'Senior AI Engineer & Full-Stack Developer',
  location: 'Lahore, Pakistan',
  currentRole: 'AI Solution Architect',
  currentCompany: 'Cloudcx',
  availability: 'Available for senior AI engineering work',

  hero: {
    lines: ["I'm Khubaib.", 'I build AI systems', 'and ship them to production.'],
    // Index from which the remaining headline lines render muted.
    mutedFrom: 2,
  },

  bio: '8+ years building production-grade AI that does real work — large language models, agentic systems, and voice AI. Currently AI Solution Architect at Cloudcx, where I build and stress-test real-time voice agents.',

  bioShort: 'Building production AI systems at Cloudcx.',

  projects: [
    {
      name: 'TransVoice — Real-Time Translated Calling',
      blurb:
        'A browser-based calling app where two people speak different languages and hear each other translated inside the same live call. Twilio call control, streaming speech-to-text, translation and neural TTS stitched into one near-real-time loop, with live transcripts, consent-aware recording, wallet billing and per-country rating behind it.',
      stack: ['Next.js 14', 'FastAPI', 'Twilio Voice', 'Soniox STT', 'Google Translate + TTS', 'Firebase', 'Cloud Run'],
      meta: 'Architect & lead engineer · 2026',
    },
    {
      name: 'QuickTest — Voice Agent Regression Testing',
      blurb:
        'A testing platform for voice AI. Synthetic personas call a bot through scripted scenarios, every run is scored against evaluation criteria, and results roll up into session and organisation reports — so a prompt or model change gets caught before customers hear it. Runs scheduled across timezones with exportable reports.',
      stack: ['React', 'TypeScript', 'Supabase', 'AWS Amplify', 'LLM evaluation'],
      meta: 'Product engineering lead · 2026',
    },
    {
      name: 'Production Voice Agents',
      blurb:
        'Real-time conversational agents on customer-facing phone and web channels: barge-in handling, tool calls into business systems, warm transfer to humans, and the latency budget work that keeps a conversation feeling like a conversation.',
      stack: ['Vapi', 'ElevenLabs', 'Pipecat', 'Twilio', 'Asterisk'],
      meta: 'AI Solution Architect, Cloudcx · 2024 — Present',
    },
    {
      name: 'LLM Voice Support Line',
      blurb:
        'An automated phone support line that answers, understands and resolves customer calls end to end — LLM reasoning wired into a live telephony backend with streaming transcription, so callers talk instead of pressing keys.',
      stack: ['OpenAI', 'Twilio', 'Streaming STT', 'Python'],
      meta: 'Design & build · 2023 — 2024',
    },
    {
      name: 'Invoice OCR Pipeline',
      blurb:
        'An OCR pipeline that reads invoices and pulls structured fields out of them, replacing manual data entry in a high-volume document workflow. Trained and served on SageMaker, containerised for repeatable deployment.',
      stack: ['Python', 'AWS SageMaker', 'OCR', 'Docker'],
      meta: 'ML engineering · 2022',
      href: 'https://github.com/imkhubaibraza/invoiceOCR',
    },
    {
      name: 'Emotion Detection via Domain Adaptation',
      blurb:
        'Facial emotion recognition adapted from Western benchmark datasets to Pakistani dramas and talk shows — a study in what happens to a vision model when the domain shifts underneath it, and how to close the gap without collecting a dataset from scratch.',
      stack: ['PyTorch', 'Computer Vision', 'Domain Adaptation'],
      meta: 'Research, ITU Lahore · 2020',
      href: 'https://github.com/imkhubaibraza/Emotion-Detection',
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
      label: 'Voice & Telephony',
      items: [
        'Vapi',
        'Pipecat',
        'LiveKit',
        'Twilio',
        'Asterisk',
        'SIP',
        'WebRTC',
        'Streaming ASR',
        'Deepgram',
        'ElevenLabs',
        'TTS',
        'IVR replacement',
      ],
    },
    {
      label: 'Agents & Evaluation',
      items: [
        'LangGraph',
        'Multi-agent orchestration',
        'RAG',
        'Prompt engineering',
        'LLM evals',
        'Regression testing',
      ],
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
