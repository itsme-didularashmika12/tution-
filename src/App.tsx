import {
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Lock,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
} from 'lucide-react'

const features = [
  {
    title: 'LMS පහසුකම්',
    description: 'පාඨමාලා, පාඩම්, පාඩම් ලිපි සහ පරිශීලක කළමනාකරණය සම්පූර්ණයෙන්ම.',
    icon: GraduationCap,
  },
  {
    title: 'Online Exams & Results',
    description: 'ඔන්ලයින් විභාග, ස්වයංක්‍රීය ලකුණු සහ ඉක්මන් ප්‍රතිඵල.',
    icon: BookOpen,
  },
  {
    title: 'Secure Paper/Video Hosting',
    description: 'DRM ආරක්ෂාව සමඟ සුරක්ෂිත වීඩියෝ හා පත්‍රිකා හෝස්ට් කිරීම.',
    icon: Lock,
  },
  {
    title: 'Payment Gateway Integration',
    description: 'බැංකු හුවමාරු හෝ online ගෙවීම් සමඟ ආදායම් කළමනාකරණය.',
    icon: ShieldCheck,
  },
]

const plans = [
  {
    name: 'Starter Plan',
    price: 'LKR 25,000',
    description: 'Individual tutors සඳහා හොඳම ආරම්භක පියවර.',
    capacity: 'Up to 500 Students',
    features: [
      'Basic LMS',
      'Standard Video Hosting (50GB)',
      'Online Exams',
      'Bank Transfer Verification',
    ],
    highlight: false,
  },
  {
    name: 'Professional Plan',
    price: 'LKR 55,000',
    description: 'වැඩිවන student base සහිත ගුරුවරුන්ට.',
    capacity: 'Up to 2,500 Students',
    features: [
      'Advanced Course Management',
      'Secure DRM Video Hosting (200GB)',
      'Performance Analytics',
      'Integrated Payment Gateways',
    ],
    highlight: true,
  },
  {
    name: 'Elite / Institute Plan',
    price: 'LKR 95,000',
    description: 'Institute සහ multi-teacher management සඳහා සම්පූර්ණ විසඳුම.',
    capacity: 'Unlimited Students',
    features: [
      'Multi-tier Management',
      'Unlimited Secure Storage',
      'Custom Question Banks',
      'Dedicated 24/7 Support',
    ],
    highlight: false,
  },
]

const sampleSites = [
  {
    title: 'Danura Sir LMS',
    url: 'https://danurasir.lk/',
  },
  {
    title: 'ICT From ABC',
    url: 'https://www.ictfromabc.com/',
  },
  {
    title: 'Ape Sir',
    url: 'https://apesir.lk/',
  },
  {
    title: 'Upul Weerasinghe',
    url: 'https://upulweerasinghe.lk/',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#f6f7f2] text-slate-900">
      <header className="border-b border-emerald-100/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">Shop X Lanka</p>
              <h1 className="text-lg font-semibold">Tuition Class Management</h1>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-emerald-600">Features</a>
            <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
            <a href="#examples" className="hover:text-emerald-600">Examples</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </div>
          <a
            href="https://wa.me/94741671668"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-700"
          >
            <MessagesSquare className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_65%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <BadgeCheck className="h-4 w-4" />
              ඵලදායී සහ සුරක්ෂිත Digital Tuition Ecosystem
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              ඔබේ Tuition Class එකත් <span className="text-emerald-600">Digital</span> කරන්න සූදානම්ද?
            </h2>
            <p className="text-lg text-slate-600">
              එකම වහලක් යටින් LMS පහසුකම්, online exams, සුරක්ෂිත වීඩියෝ හෝස්ටින් සහ payment
              integration. Shop X Lanka සමඟ digital education legacy එකක් ගොඩනඟන්න.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
              >
                View Plans
                <CheckCircle2 className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-400"
              >
                Request Demo
                <TabletSmartphone className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'LMS Modules', value: '30+' },
                { label: 'Secure Hosting', value: 'Unlimited' },
                { label: 'Support', value: '24/7' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-emerald-100 bg-white px-4 py-3">
                  <p className="text-2xl font-semibold text-emerald-700">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="rounded-[32px] border border-emerald-100 bg-white p-4 shadow-2xl shadow-emerald-100">
              <img
                src="/uploads/upload_1.jpeg"
                alt="Tuition class management system preview"
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Features</p>
            <h3 className="text-3xl font-semibold">එකම platform එකකින් සියල්ල කළමනාකරණය කරන්න</h3>
          </div>
          <p className="max-w-xl text-slate-600">
            ගුරුතුමාට සහ අධ්‍යයන ආයතන සඳහා හොඳම digital workflow එකක් නිර්මාණය කර ඇත. Secure hosting,
            advanced analytics සහ convenient payments එකම dashboard එකක.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-700 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            {
              title: 'Unlimited Student Management',
              detail: 'සියලුම සිසුන්ගේ ලකුණු, දත්ත සහ පැමිණීම වැඩි කාර්යක්ෂම ලෙස track කරන්න.',
              icon: Building2,
            },
            {
              title: 'Unlimited Study Materials',
              detail: 'PDF, notes සහ live class recordings secure cloud එකට upload කරන්න.',
              icon: Globe2,
            },
            {
              title: 'Secured Files',
              detail: 'DRM security සහ access control එක්ක lecture content එක ආරක්ෂා කරන්න.',
              icon: ShieldCheck,
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <item.icon className="h-7 w-7" />
              <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-emerald-100">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Annual Plans</p>
          <h3 className="mt-2 text-3xl font-semibold">Tuition Class Management System Pricing</h3>
          <p className="mt-3 text-slate-600">
            ඔබගේ tuition class එකට ගැලපෙන plan එක තෝරන්න. Annual fee එකක් සහිත සම්පූර්ණ feature bundle.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                plan.highlight
                  ? 'border-emerald-500 bg-emerald-600 text-white shadow-emerald-200'
                  : 'border-emerald-100 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{plan.name}</h4>
                {plan.highlight && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
              </div>
              <p className={`mt-3 text-sm ${plan.highlight ? 'text-emerald-100' : 'text-slate-600'}`}>
                {plan.description}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-emerald-100' : 'text-slate-500'}`}>
                  / year
                </span>
              </div>
              <p className={`mt-2 text-sm font-medium ${plan.highlight ? 'text-emerald-100' : 'text-slate-600'}`}>
                {plan.capacity}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 ${plan.highlight ? 'text-white' : 'text-emerald-600'}`} />
                    <span className={plan.highlight ? 'text-emerald-50' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/94741671668"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                  plan.highlight
                    ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                    : 'border border-emerald-200 text-emerald-700 hover:border-emerald-400'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="examples" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Example LMS</p>
              <h3 className="mt-2 text-3xl font-semibold">විශ්වාස කළ digital education partners</h3>
            </div>
            <p className="max-w-lg text-slate-600">
              දැනටමත් Shop X Lanka සමඟ build කළ LMS platforms. ඔබගේ brand එකට ගැලපෙන design එකක් ලබා ගන්න.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sampleSites.map((site) => (
              <a
                key={site.title}
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/40 px-5 py-4 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300"
              >
                <span>{site.title}</span>
                <span className="text-xs text-emerald-500">Visit</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h3 className="text-3xl font-semibold">Shop X Lanka - Building Digital Education Legacies</h3>
              <p className="mt-3 text-slate-600">
                වැඩි විස්තර සඳහා අදම අමතන්න. Demo එකක් අවශ්‍ය නම් WhatsApp හරහා message කරන්න. අපි ඔබගේ
                tuition class එක digital කරන complete roadmap එක ගෙන එන්නෙමු.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/94741671668"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
                >
                  <MessagesSquare className="h-4 w-4" />
                  WhatsApp: +94 74 167 1668
                </a>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700">
                  <ShieldCheck className="h-4 w-4" />
                  Secure & Trusted Partner
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold">Why Shop X Lanka?</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  'Island-wide popular lecturers trust us for LMS builds.',
                  'Dedicated project manager for each institute.',
                  'Custom branding, domain, and onboarding support.',
                  'Fast launch timelines with secure infrastructure.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2024 Shop X Lanka. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            Tuition Class Management System
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
