// Single source of truth for the site’s content.
// Edit this file to update the site.

export const profile = {
  name: 'Muhammad Khubaib Raza',
  shortName: 'Khubaib',
  title: 'AI Solution Architect & AI Engineer',
  location: 'Lahore, Pakistan',
  currentRole: 'AI Solution Architect',
  currentCompany: 'CloudCX',
  workLocation: 'London, UK · Remote',
  availability: 'Available for senior AI engineering work',

  hero: {
    lines: ["I'm Khubaib.", 'I build AI that speaks,', 'reasons, and takes action.'],
    // Index from which the remaining headline lines render muted.
    mutedFrom: 2,
  },

  bio: 'I’m a senior AI engineer and full-stack developer with 8+ years of experience building production AI systems. I specialise in agentic AI, RAG and voice AI: agent workflows with LangGraph and LangChain, tool calling and MCP servers, on Python and FastAPI back ends on AWS.',

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
      name: 'QuickTest — Automated Evaluation for Voice AI Agents',
      blurb:
        'A testing platform that validates voice agents before and after release. Synthetic personas call a bot through scripted scenarios, every run is scored against evaluation criteria with pass/fail logic, and results roll up into session and organisation reports, so a prompt or model change is caught before customers hear it. Failed production calls can be saved and reused as regression tests. It replaced most manual call testing for the team.',
      stack: ['React', 'TypeScript', 'Supabase', 'AWS Amplify', 'LLM evaluation'],
      meta: 'CloudCX · Product engineering lead · 2026',
    },
    {
      name: 'Enterprise Voice Agent with Tool Calling and Live-Agent Handoff',
      blurb:
        'A real-time voice agent for customer calls. It uses LLM tool calling to look up data and take actions in back-end systems, handles speech and keypad (DTMF) input, and transfers the call to a person with context when needed. The back end handles latency, fragmented and duplicated responses, and call lifecycle edge cases.',
      stack: ['Python', 'FastAPI', 'LangGraph', 'Function calling', 'Pipecat', 'ElevenLabs', 'Deepgram', 'Twilio', 'Plivo'],
      meta: 'CloudCX · Real-time voice AI',
    },
    {
      name: 'TransVoice — Real-Time Translated Calling',
      blurb:
        'A browser-based calling app where two people speak different languages and hear each other translated inside the same live call. Twilio call control, streaming speech-to-text, translation and neural TTS stitched into one near-real-time loop, with live transcripts, consent-aware recording, wallet billing and per-country rating behind it.',
      stack: ['Next.js 14', 'FastAPI', 'Twilio Voice', 'Soniox STT', 'Google Translate + TTS', 'Firebase', 'Cloud Run'],
      meta: 'Architect & lead engineer · 2026',
    },
    {
      name: 'RAG Knowledge Assistant for Business Content',
      blurb:
        'A retrieval-augmented assistant that answers questions from a company’s own content. It collects content from business websites, embeds it with OpenAI embeddings, stores it in Pinecone, and retrieves the most relevant sources as context so the LLM writes a grounded answer.',
      stack: ['Python', 'LangChain', 'RAG', 'Pinecone', 'OpenAI API', 'Web scraping'],
      meta: 'LLM applications',
    },
    {
      name: 'Automatic Description Generation from Images',
      blurb:
        'Listing descriptions written from apartment photos and data. The pipeline removes duplicate photos, classifies each photo by room type, counts bedrooms and bathrooms, detects amenities, then generates the description with a transformer model (table to text).',
      stack: ['Computer vision', 'Object detection', 'Transformers', 'PyTorch'],
      meta: 'ML engineering',
    },
    {
      name: 'Information Extraction from Invoices',
      blurb:
        'An OCR system built on PaddleOCR that reads invoices and extracts their fields, replacing manual data entry for a small business. Deployed with a SageMaker Pipeline for continuous training and deployment, with model monitoring and version control.',
      stack: ['Python', 'PaddleOCR', 'AWS SageMaker', 'Docker'],
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
    ], summary: 'Founding engineer at CloudCX, helping grow the business from £0 to £1 million in annual recurring revenue (ARR). Built QuickTest, the automated test platform for our voice agents, and in-house voice agents on Vapi, ElevenLabs and Pipecat. Designed stateful, multi-step agent workflows with LangGraph and LangChain, exposed internal tools to agents through MCP servers, and built Python and FastAPI agent back ends on AWS that manage call state for concurrent live calls.' },
    { company: 'Metric', context: 'Full-time · Hybrid · Islamabad, Pakistan', roles: [
      { title: 'Head of Engineering', dates: 'Nov 2021 — Feb 2023' },
    ], summary: 'Scaled Metric’s app from 0 to 10,000 paid users and 100,000 downloads as Head of Engineering, used by businesses in 30 sectors to track their numbers. Joined as the second employee in the new tech team and grew engineering from 1 to 10 people. Led back-end, front-end and Android developers, shaped the product vision, set up hiring and onboarding, improved releases and CI/CD with Jenkins, and resolved Firestore performance issues.' },
    { company: 'Upwork', context: 'Freelance', roles: [
      { title: 'Top Rated Freelancer', dates: 'Dec 2020 — Apr 2022' },
    ] },
    { company: 'matix', context: 'Contract', roles: [
      { title: 'Senior NLP Engineer', dates: '2020 — 2021' },
    ], summary: 'Document classification and information extraction, plus back-end services on Asterisk and Twilio that streamed call audio to speech-to-text (Vosk, Google STT).' },
    { company: 'Omdena', context: 'Part-time', roles: [
      { title: 'Machine Learning Engineer', dates: 'Feb 2021 — Jul 2021' },
    ] },
    { company: 'Nextbridge Ltd.', context: 'Full-time · Lahore, Pakistan', roles: [
      { title: 'Software Engineer', dates: 'Nov 2018 — Sep 2019' },
    ] },
  ],

  // Education as listed on the Toptal profile.
  background: [
    { label: 'MSc Data Science', detail: 'Information Technology University, Lahore · 2019–2021' },
    { label: 'BSc Computer Science', detail: 'Government College University, Lahore · 2015–2019' },
  ],

  // As listed on the Toptal profile.
  certifications: [
    { name: 'Machine Learning in Production', issuer: 'Coursera', issued: 'Jul 2021', credential: 'AZTENR9E8JFU' },
    { name: 'AWS Machine Learning Engineer Scholarship Program', issuer: 'Udacity', issued: 'Aug 2020' },
    { name: 'Getting Started with AWS Machine Learning', issuer: 'Coursera', issued: 'May 2020' },
    { name: 'Deep Learning Nanodegree', issuer: 'Udacity', issued: 'Oct 2019', credential: 'YX3PJDKM' },
    { name: 'Introduction to Data Science in Python', issuer: 'Coursera', issued: 'Aug 2018' },
  ],

  skillGroups: [
    { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript'] },
    {
      label: 'AI & ML',
      items: ['LLMs', 'PyTorch', 'Transformers', 'NLP', 'Computer vision', 'Scikit-learn', 'Pandas'],
    },
    {
      label: 'Backend & Web',
      items: ['FastAPI', 'Flask', 'Next.js', 'React', 'Node.js', 'Supabase', 'Docker', 'Microservices'],
    },
    {
      label: 'Cloud',
      items: ['AWS', 'Amazon Bedrock', 'SageMaker', 'Lambda', 'AWS Amplify', 'GCP', 'Azure', 'Firebase', 'Datadog'],
    },
    {
      label: 'Voice & Telephony',
      items: [
        'Vapi',
        'Pipecat',
        'LiveKit',
        'Twilio',
        'Plivo',
        'Retell AI',
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
        'LangChain',
        'MCP servers',
        'Function calling',
        'Claude Agent SDK',
        'Bedrock AgentCore',
        'Multi-agent orchestration',
        'RAG',
        'Pinecone',
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
      label: 'Toptal',
      note: 'Verified Expert in Engineering',
      href: 'https://www.toptal.com/developers/resume/muhammad-khubaib-raza',
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
