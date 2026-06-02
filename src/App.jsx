import React from "react";
import {
  Archive, CheckCircle2, ExternalLink, Gift, Heart, Lock, PackageCheck,
  Search, ShieldCheck, Star, Target, Truck, Droplets
} from "lucide-react";

const logoImage = "/gemfoil-logo.png";
const binderImage = "/toploader-binder.png";
const etbImage = "/etb-protector.jpg";
const ebayLogo = "/ebay-logo.png";
const contactLink = "https://www.ebay.co.uk/cnt/ViewMessage?reference_id=146851899616&other_user_id=gemfoil&_caprdt=1&group_type=CORE&reference_type=LISTING";

const products = [
  {
    name: "Toploader Binder",
    price: "£24.99",
    image: binderImage,
    description: "Premium 9-pocket binder with toploader compatibility.",
    buyLink: "https://www.ebay.co.uk/itm/146851899616",
    features: ["Holds 360 cards", "Waterproof exterior", "Premium zip closure", "Includes 25 toploaders", "Includes 100 penny sleeves"],
  },
  {
    name: "ETB Protector",
    price: "£14.99",
    image: etbImage,
    description: "Premium protection for your Elite Trainer Boxes.",
    buyLink: "https://www.ebay.co.uk/itm/146850308670",
    features: ["8mm side walls", "N52 strong magnets", "UV resistant", "Scratch resistant", "Cleaning cloth included"],
  },
];

const heroFeatures = [
  { icon: Archive, title: "Holds", subtitle: "360 Cards" },
  { icon: Droplets, title: "Waterproof", subtitle: "Exterior" },
  { icon: Lock, title: "Premium", subtitle: "Zip Closure" },
  { icon: Truck, title: "Free UK", subtitle: "Delivery" },
];

const trustItems = [
  { icon: Star, title: "1000+", subtitle: "Positive Feedback" },
  { icon: Truck, title: "Free UK", subtitle: "Delivery" },
  { icon: ShieldCheck, title: "Secure", subtitle: "eBay Checkout" },
];

const reviews = [
  { name: "James T.", rating: 5, text: "Absolutely brilliant quality. The binder feels premium and my cards are perfectly protected. Fast delivery too!" },
  { name: "Sarah M.", rating: 5, text: "The ETB protector is stunning. Crystal clear and the magnets are incredibly strong. Worth every penny." },
  { name: "Daniel K.", rating: 5, text: "Bought two binders and an ETB protector. GemFoil is the real deal — proper collector gear at a fair price." },
  { name: "Emily R.", rating: 5, text: "Really impressed with the packaging and quality. You can tell these are made by people who actually collect." },
];

const whyItems = [
  { icon: Star, title: "Premium Quality", text: "High quality materials built to protect your valuable collection." },
  { icon: Target, title: "Collector Focused", text: "Designed by collectors, for collectors. Every detail is made with purpose." },
  { icon: PackageCheck, title: "Secure Packaging", text: "Your order is packed with care to help it arrive in perfect condition." },
  { icon: Heart, title: "Collector Support", text: "We're here to help with any questions. Real people, real support." },
];

function Logo({ footer = false }) {
  return <img src={logoImage} alt="GemFoil" className={footer ? "w-36 sm:w-44" : "w-32 sm:w-44 md:w-52"} />;
}

function EbayLogo({ className = "h-6" }) {
  return <img src={ebayLogo} alt="eBay" className={className} />;
}

function Button({ href, children, outline = false }) {
  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={outline
        ? "inline-flex items-center justify-center gap-2 rounded-lg border border-[#c6902d] bg-black/20 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#c6902d]"
        : "inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#d7a23c] to-[#b77b19] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-[#b77b19]/20 transition hover:brightness-110"}>
      {children}
    </a>
  );
}

function TopBanner() {
  return (
    <div className="bg-black px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white">
      <span className="inline-flex items-center justify-center gap-2"><Truck className="h-4 w-4 text-[#d7a23c]" /> Free postage on all UK orders 🇬🇧</span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#f7f3ea]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-black uppercase tracking-wide text-neutral-950 lg:flex">
          <a className="border-b-2 border-[#c6902d] pb-1 text-[#c6902d]" href="#home">Home</a>
          <a className="transition hover:text-[#c6902d]" href="#collection">Products</a>
          <a className="transition hover:text-[#c6902d]" href="#about">About Us</a>
          <a className="transition hover:text-[#c6902d]" href={contactLink} target="_blank" rel="noreferrer">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Search className="hidden h-6 w-6 text-neutral-950 sm:block" />
          <a href="https://www.ebay.co.uk/usr/gemfoil" target="_blank" rel="noreferrer" className="rounded-full bg-black px-4 py-2" aria-label="Find GemFoil on eBay">
            <EbayLogo className="h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-30"><img src={etbImage} alt="" className="h-full w-full object-cover blur-[2px]" /></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.92)_34%,rgba(0,0,0,0.38)_62%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute right-[18%] top-[36%] h-80 w-80 rounded-full bg-[#d7a23c]/20 blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
        <div className="z-10">
          <p className="text-sm font-black uppercase tracking-wide text-[#d7a23c]">Premium Protection</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl">Premium Protection For Serious Collectors</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Protect, store and display your collection with products designed specifically for Pokémon and TCG collectors.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-[#d7a23c] text-[#d7a23c]" />)}</div>
            <p className="font-bold">1,000+ Positive eBay Feedback</p>
          </div>
          <p className="mt-4 text-xl font-black text-[#d7a23c]">Premium Protection. Fair Prices.</p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-0 sm:grid-cols-4">
            {heroFeatures.map(({ icon: Icon, title, subtitle }) => (
              <div key={title + subtitle} className="border-r border-white/20 px-4 text-center last:border-r-0">
                <Icon className="mx-auto h-9 w-9 text-[#d7a23c]" />
                <p className="mt-3 text-sm font-bold">{title}</p>
                <p className="text-sm font-bold text-white/80">{subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-9"><Button href="#collection">Shop Collection <ExternalLink className="h-4 w-4" /></Button></div>
        </div>
        <div className="relative min-h-[430px] lg:min-h-[520px]">
          <img src={binderImage} alt="GemFoil Toploader Binder" className="absolute bottom-0 left-[4%] h-[93%] w-auto rounded-2xl object-contain shadow-2xl shadow-black/70" />
          <img src={etbImage} alt="GemFoil ETB Protector" className="absolute bottom-4 right-0 h-[52%] w-auto rounded-2xl object-contain shadow-2xl shadow-black/70" />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-[#f7f3ea] px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-[#fbfaf6] md:grid-cols-3 grid">
        {trustItems.map(({ icon: Icon, title, subtitle }) => (
          <div key={title + subtitle} className="flex items-center gap-4 border-b border-neutral-200 p-6 md:border-b-0 md:border-r last:border-r-0">
            <Icon className="h-11 w-11 shrink-0 text-[#c6902d]" />
            <div><p className="text-lg font-black text-neutral-950">{title}</p><p className="text-sm font-semibold text-neutral-700">{subtitle}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  return (
    <article id={index === 0 ? "binders" : "etb-protectors"} className="grid overflow-hidden rounded-2xl border border-neutral-200 bg-[#fbfaf6] lg:grid-cols-[0.75fr_1fr]">
      <div className="p-7">
        <h3 className="text-3xl font-black uppercase leading-tight text-neutral-950">{product.name}</h3>
        <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-700">{product.description}</p>
        <ul className="mt-6 space-y-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-neutral-800"><CheckCircle2 className="h-4 w-4 fill-[#c6902d] text-white" />{feature}</li>
          ))}
        </ul>
        <p className="mt-8 text-4xl font-black text-neutral-950">{product.price}</p>
        <a href={product.buyLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#c6902d]">
          <EbayLogo className="h-4" /> on eBay <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="flex items-center justify-center bg-[#f1eee6] p-5"><img src={product.image} alt={product.name} className="max-h-[360px] w-full rounded-xl object-contain" /></div>
    </article>
  );
}

function Collection() {
  return (
    <section id="collection" className="bg-[#f7f3ea] px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-wide text-[#c6902d]">Our Collection</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950">Premium Products For Collectors</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#c6902d]" />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div>
      </div>
    </section>
  );
}

function CustomerFeedback() {
  const reviewsWithImages = [
    { name: "James T.", rating: 5, text: "Absolutely brilliant quality. The binder feels premium and my cards are perfectly protected. Fast delivery too!", image: "/Binder cust 2.jpg" },
    { name: "Sarah M.", rating: 5, text: "The ETB protector is stunning. Crystal clear and the magnets are incredibly strong. Worth every penny.", image: "/etb cust 1.jpg" },
    { name: "Daniel K.", rating: 5, text: "Bought two binders and an ETB protector. GemFoil is the real deal — proper collector gear at a fair price.", image: "/etb cust 3.jpg" },
    { name: "Emily R.", rating: 5, text: "Really impressed with the packaging and quality. You can tell these are made by people who actually collect.", image: "/etb cust.jpg" },
  ];

  return (
    <section className="bg-[#f7f3ea] px-5 pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-wide text-[#c6902d]">Customer Feedback</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950">What Collectors Are Saying</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#c6902d]" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviewsWithImages.map(({ name, rating, text, image }) => (
            <div key={name} className="rounded-2xl border border-neutral-200 bg-[#fbfaf6] overflow-hidden">
              <img src={image} alt={`${name} collection`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex gap-1 mb-4">{Array.from({ length: rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#c6902d] text-[#c6902d]" />)}</div>
                <p className="text-sm leading-6 text-neutral-700">"{text}"</p>
                <p className="mt-4 text-sm font-black text-neutral-950">{name}</p>
                <p className="text-xs text-neutral-500">Verified eBay Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 );
}

function WhyGemFoil() {
  return (
    <section className="bg-[#f7f3ea] px-5 pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-neutral-200 bg-[#fbfaf6] p-8">
        <h2 className="text-center text-3xl font-black uppercase text-neutral-950">Why Choose GemFoil?</h2>
        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#c6902d]" />
        <div className="mt-9 grid gap-8 md:grid-cols-4">
          {whyItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center"><Icon className="mx-auto h-12 w-12 text-[#c6902d]" /><h3 className="mt-4 text-lg font-black text-neutral-950">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-700">{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="bg-[#f7f3ea] px-5 pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-neutral-200 bg-[#fbfaf6] p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-[#c6902d]">About Us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950">Premium Protection Shouldn't Cost a Fortune</h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#c6902d]" />
          </div>
          <div className="space-y-5 text-sm leading-7 text-neutral-700">
            <p>We started GemFoil because we felt the same frustration as every other collector — the best protection products either cost too much, or the affordable ones just weren't good enough.</p>
            <p>Your collection matters. Whether it's a binder full of your favourite Pokémon cards or a sealed Elite Trainer Box you've been holding onto for years, it deserves to be protected properly — without having to pay a premium just for the privilege.</p>
            <p>GemFoil was built to bridge that gap. We design and source products that genuinely perform, using quality materials and thoughtful details, and we price them fairly because we believe every collector — not just the big spenders — deserves proper protection.</p>
            <p className="font-black text-[#c6902d]">Made for collectors. Priced for everyone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-black px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Logo footer />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">Premium protection for your TCG collection. Designed by collectors, for collectors.</p>
        </div>
        <div>
          <h3 className="font-black uppercase text-[#d7a23c]">Shop</h3>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <p><a href="#collection" className="hover:text-[#d7a23c] transition">Binders</a></p>
            <p><a href="#collection" className="hover:text-[#d7a23c] transition">ETB Protectors</a></p>
          </div>
        </div>
        <div>
          <h3 className="font-black uppercase text-[#d7a23c]">Info</h3>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <p><a href="#about" className="hover:text-[#d7a23c] transition">About Us</a></p>
            <p><a href={contactLink} target="_blank" rel="noreferrer" className="hover:text-[#d7a23c] transition">Contact</a></p>
          </div>
          <p className="mt-4 text-xs text-white/50">Shipping or Returns question? Visit us on eBay</p>
        </div>
        <div>
          <h3 className="font-black uppercase text-[#d7a23c]">Find us on eBay</h3>
          <a href="https://www.ebay.co.uk/usr/gemfoil" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-xl bg-white px-6 py-3">
            <EbayLogo className="h-8" />
          </a>
          <p className="mt-4 text-sm text-white/75">1000+ Positive Feedback</p>
          <div className="mt-2 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#d7a23c] text-[#d7a23c]" />)}</div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">© {new Date().getFullYear()} GemFoil. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <TopBanner />
      <Header />
      <Hero />
      <TrustStrip />
      <Collection />
      <CustomerFeedback />
      <WhyGemFoil />
      <AboutUs />
      <Footer />
    </main>
  );
}
