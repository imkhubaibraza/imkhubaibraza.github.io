// Single source of truth for the site’s content.
// Edit this file to update the site.

export const profile = {
  name: 'Muhammad Khubaib Raza',
  shortName: 'Khubaib',
  title: 'AI Solution Architect & AI Engineer',
  location: 'Lahore, Pakistan',
  currentRole: 'AI Solution Architect',
  currentCompany: 'CloudCX',
  availability: 'Available for senior AI engineering work',

  hero: {
    lines: ["I'm Khubaib.", 'I build AI systems', 'and ship them to production.'],
    // Index from which the remaining headline lines render muted.
    mutedFrom: 2,
  },

  bio: 'I design and build agentic AI systems, real-time voice agents, and enterprise automation platforms. My focus is reliable AI workflows that reason, use tools, manage memory, and take action in complex environments.',

  expertise: [
    'I’ve built and scaled AI systems for telecommunications, healthcare, customer support, and enterprise automation — from conversational AI and IVR to multi-step orchestration and low-latency voice infrastructure supporting thousands of concurrent interactions.',
    'I also build AI testing harnesses: validating conversational flows, tool calls, and multilingual interactions through regression testing, load testing, and end-to-end evaluation. The goal is fewer hallucinations, lower latency, and systems that hold up in production.',
  ],

  bioShort: 'Building production AI systems at CloudCX.',

  personal: {
    interests: 'Away from work, I enjoy chess, padel, table tennis, and badminton. I’m a big fan of productivity books and podcasts, and I love travelling and exploring the world. These interests have been part of my life for a long time.',
    curiosity: 'That curiosity carries into everyday life, too. I enjoy exploring new AI tools like OpenClaw, Instinct, and Muse by Meta AI, and finding ways to automate my daily routines with AI.',
    mentoring: 'I’d love to share what I’ve learned with junior engineers, help them build their skills, and support them as they grow in their careers. If you’re starting out and looking for guidance, get in touch.',
  },

  projects: [
    {
      name: 'QuickTest — Voice Agent Regression Testing',
      blurb:
        'A testing platform for voice AI. Synthetic personas call a bot through scripted scenarios, every run is scored against evaluation criteria, and results roll up into session and organisation reports — so a prompt or model change gets caught before customers hear it. Runs scheduled across timezones with exportable reports.',
      stack: ['React', 'TypeScript', 'Supabase', 'AWS Amplify', 'LLM evaluation'],
      meta: 'Product engineering lead · 2026',
    },
    {
      name: 'TransVoice — Real-Time Translated Calling',
      blurb:
        'A browser-based calling app where two people speak different languages and hear each other translated inside the same live call. Twilio call control, streaming speech-to-text, translation and neural TTS stitched into one near-real-time loop, with live transcripts, consent-aware recording, wallet billing and per-country rating behind it.',
      stack: ['Next.js 14', 'FastAPI', 'Twilio Voice', 'Soniox STT', 'Google Translate + TTS', 'Firebase', 'Cloud Run'],
      meta: 'Architect & lead engineer · 2026',
    },
    {
      name: 'Production Voice Agents',
      blurb:
        'Real-time conversational agents on customer-facing phone and web channels: barge-in handling, tool calls into business systems, warm transfer to humans, and the latency budget work that keeps a conversation feeling like a conversation.',
      stack: ['Vapi', 'ElevenLabs', 'Pipecat', 'Twilio', 'Asterisk'],
      meta: 'CloudCX · Real-time voice AI',
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

  experience: [
    { company: 'CloudCX', context: 'Contract · Remote · Greater London, UK', roles: [
      { title: 'AI Solution Architect', dates: 'Aug 2025 — Present' },
      { title: 'Senior Software Engineer', dates: 'Apr 2023 — Aug 2025' },
    ] },
    { company: 'Metric', context: 'Full-time · Hybrid · Islamabad, Pakistan', roles: [
      { title: 'Head of Engineering', dates: 'Nov 2021 — Feb 2023' },
    ], summary: 'Joined as the second employee in the new tech team and helped grow engineering from 1 to 10 people. Established hiring and onboarding processes, improved releases and CI/CD with Jenkins, and resolved Firestore database performance issues.' },
    { company: 'Upwork', context: 'Freelance', roles: [
      { title: 'Top Rated Freelancer', dates: 'Dec 2020 — Apr 2022' },
    ] },
    { company: 'Omdena', context: 'Part-time', roles: [
      { title: 'Machine Learning Engineer', dates: 'Feb 2021 — Jul 2021' },
    ] },
    { company: 'Nextbridge Ltd.', context: 'Full-time · Lahore, Pakistan', roles: [
      { title: 'Software Engineer', dates: 'Nov 2018 — Sep 2019' },
    ] },
  ],

  // Education from the public LinkedIn listing; degree title not supplied.
  background: [
    { label: 'Education', detail: 'Information Technology University · 2019–2021' },
  ],

  certifications: [
    { name: 'Introduction to Machine Learning in Production', issuer: 'DeepLearning.AI', issued: 'Jul 2021', credential: 'AZTENR9E8JFU' },
    { name: 'Deep Learning Nanodegree', issuer: 'Udacity', issued: 'Sep 2020', credential: 'YX3PJDKM' },
    { name: 'AWS Machine Learning Scholarship Program', issuer: 'Udacity', issued: 'Aug 2020' },
    { name: 'Getting Started with AWS Machine Learning', issuer: 'Coursera', issued: 'May 2020' },
    { name: 'Machine Learning', issuer: 'OpenDataScience [ods.ai]', issued: 'Sep 2019' },
    { name: 'Introduction to Data Science in Python', issuer: 'Coursera', issued: 'Aug 2018' },
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
