import React from "react";
import {
  Archive, Award, Box, CreditCard, Droplets, ExternalLink,
  Headphones, Lock, ShieldCheck, Star, Store, Truck,
} from "lucide-react";

const logoImage = "/Gemfoil logo no background.png";
const binderImage = "/Binder.png";
const etbImage = "/GemFoil_Branded_6.png";
const products = [
  {
    name: "Toploader Binder x360",
    price: "£24.99",
    image: binderImage,
    description: "The ultimate storage solution for serious collectors. Holds up to 360 toploaded cards with premium protection.",
    buyLink: "https://www.ebay.co.uk/itm/146851899616",
    offer: "Includes 25 Toploaders & 100 Penny Sleeves",
    features: ["360 Cards", "Waterproof", "Zip Closure"],
    tag: "Best Seller",
  },
  {
    name: "Premium Acrylic ETB Protector",
    price: "£14.99",
    image: etbImage,
    description: "8mm thick acrylic with strong magnets for the ultimate ETB protection and display.",
    buyLink: "https://www.ebay.co.uk/itm/146850308670",
    offer: "Ordering more than 1? Message us on eBay for a discount!",
    features: ["8mm Thick", "N52 Magnets", "UV Resistant"],
    tag: "Display Ready",
  },
];

const heroFeatures = [
  { label: "Holds 360", sub: "Cards", icon: Archive },
  { label: "Waterproof", sub: "Exterior", icon: Droplets },
  { label: "Premium Zip", sub: "Closure", icon: Lock },
  { label: "Free UK", sub: "Delivery", icon: Truck },
];

const trustItems = [
  { title: "Premium Quality", text: "Built to last", icon: ShieldCheck },
  { title: "Collector Focused", text: "Designed by collectors", icon: Award },
  { title: "Secure Packaging", text: "Your order, protected", icon: Box },
  { title: "Collector Support", text: "Contact via eBay", icon: Headphones },
];

function Logo({ small = false }) {
  return (
    <div className="inline-flex flex-col items-start">
      <img src={logoImage} alt="GemFoil" className={small ? "h-auto w-32" : "h-auto w-40 md:w-48"} />
      <p className="ml-2 mt-1 text-xs font-black text-amber-400 md:text-sm">Made for Collectors</p>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-5 w-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function GoldButton({ href, children, outline = false }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={outline
        ? "inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/45 bg-black/20 px-6 py-3 text-sm font-black text-white shadow-lg shadow-black/30 transition hover:bg-amber-400 hover:text-black"
        : "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-7 py-3 text-sm font-black text-black shadow-lg shadow-amber-500/25 transition hover:brightness-110"
      }
    >
      {children}
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[520px] overflow-hidden lg:min-h-[650px]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,rgba(245,158,11,0.32),transparent_28%),linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.92)_10%,rgba(0,0,0,0.54)_35%,rgba(0,0,0,0.12)_70%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute right-[17%] top-[28%] h-80 w-80 rounded-full bg-amber-400/20 blur-[120px]" />
      <img src={binderImage} alt="GemFoil Toploader Binder" className="absolute bottom-0 right-[2%] h-[92%] w-auto max-w-none object-contain drop-shadow-[0_35px_90px_rgba(0,0,0,0.75)] md:right-[6%]" />
      <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black via-black/95 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#090909] to-transparent" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(245,158,11,0.08),transparent_26%)]" />
      <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="z-10 flex flex-col justify-center px-6 py-16 lg:px-10 lg:py-24">
          <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-amber-400">
            <span className="h-px w-10 bg-amber-400" /> Premium Protection
          </p>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
            Premium Protection For Serious Collectors
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Protect, store and display your collection with premium products designed specifically for Pokémon and TCG collectors.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Stars />
            <span className="font-black">1,000+ Positive eBay Feedback</span>
          </div>
          <p className="mt-3 text-lg font-black text-amber-400">Premium Protection. Fair Prices.</p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {heroFeatures.map(({ label, sub, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center backdrop-blur">
                <Icon className="mx-auto h-7 w-7 text-white" />
                <p className="mt-3 text-sm font-black leading-tight">{label}</p>
                <p className="text-xs font-semibold text-white/60">{sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <GoldButton href="#collection"><Store className="h-4 w-4" /> Shop Collection</GoldButton>
            <GoldButton href={products[0].buyLink} outline><CreditCard className="h-4 w-4" /> Buy on eBay</GoldButton>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur transition hover:border-amber-400/40">
      <div className="relative aspect-[1.45/1] overflow-hidden bg-neutral-900">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        {product.tag === "Best Seller" && (
          <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-black">★ Best Seller</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black tracking-tight text-white">{product.name}</h3>
        <p className="mt-2 text-2xl font-black text-amber-400">{product.price}</p>
        <p className="mt-3 text-sm leading-6 text-white/70">{product.description}</p>
        <p className="mt-3 text-sm font-bold text-white">{product.offer}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span key={feature} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-white/75">{feature}</span>
          ))}
        </div>
        <a href={product.buyLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/60 px-5 py-3 text-sm font-black text-amber-300 transition hover:bg-amber-400 hover:text-black">
          Buy on eBay <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function Collection() {
  return (
    <section id="collection" className="bg-[#090909] px-6 py-16 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">Our Collection</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Premium Products For Collectors</h2>
          <p className="mt-5 max-w-sm leading-7 text-white/65">Carefully designed products to protect and showcase your collection.</p>
          <a href="#collection" className="mt-8 inline-flex items-center justify-center rounded-xl border border-amber-400 px-7 py-3 text-sm font-black text-amber-300 transition hover:bg-amber-400 hover:text-black">View All Products</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#111111] px-6 py-6 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {trustItems.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex items-center gap-4 border-white/10 md:border-r md:pr-6 last:border-r-0">
            <Icon className="h-9 w-9 shrink-0 text-amber-400" />
            <div>
              <h3 className="font-black">{title}</h3>
              <p className="text-sm text-white/60">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#090909] px-6 py-16 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 lg:grid-cols-[0.55fr_1.45fr] lg:p-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">About GemFoil</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Premium Protection. Fair Prices.</h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-white/72 md:text-base">
          <p>At GemFoil, we believe collectors shouldn't have to choose between premium protection and fair pricing.</p>
          <p>We created GemFoil to offer high-quality storage and display solutions designed specifically for trading card collectors. Whether you're protecting your favourite Pokémon cards, building a master set, or displaying sealed products, our goal is simple: provide products that look premium, feel premium, and protect your collection properly.</p>
          <p>GemFoil was built to bridge the gap by delivering collector-focused products at prices that make sense.</p>
          <p className="font-black text-amber-400">Made for Collectors.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo small />
       <GoldButton href="https://www.ebay.co.uk/cnt/ViewMessage?other_user_id=gemfoil&_caprdt=1&group_type=CORE&reference_type=LISTING">
  <Headphones className="h-4 w-4" /> Contact Us on eBay!
</GoldButton>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-white/40">© {new Date().getFullYear()} GemFoil. All Rights Reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-black font-sans">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/82 px-6 py-5 backdrop-blur lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-bold text-white/75 lg:flex">
            <a href="#collection" className="hover:text-amber-400">Products</a>
            <a href="#about" className="hover:text-amber-400">About</a>
            <a href={products[0].buyLink} target="_blank" rel="noreferrer" className="hover:text-amber-400">eBay</a>
          </nav>
          <GoldButton href={products[0].buyLink}><CreditCard className="h-4 w-4" /> Buy on eBay</GoldButton>
        </div>
      </header>
      <Hero />
      <Collection />
      <TrustBar />
      <About />
      <Footer />
    </main>
  );
}
