import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function SiteFooter() {
  return (
    <footer className="bg-black/95 text-cream border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#B07045] to-[#855030] opacity-50" />
      <div className="mx-auto max-w-[1400px] grid gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        
        <ScrollReveal animation="slide-up">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#B07045]">🌲</span>
            <div className="font-display text-2xl font-bold tracking-[0.1em] text-cream">PINEWOOD TRAILS</div>
          </div>
          <div className="border-y border-white/20 my-1 text-center text-xs tracking-[0.4em] py-0.5 text-[#B07045]">
            RV PARK
          </div>
          <div className="font-script text-2xl text-center text-cream mt-2">Where folks love to live!</div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={150}>
          <div className="font-display text-sm tracking-[0.3em] mb-4 text-[#B07045]">CONTACT US</div>
          <div className="flex items-center gap-3 text-sm py-1.5 opacity-90"><Phone className="h-4 w-4 text-[#B07045]" /> 832-521-3345</div>
          <div className="flex items-center gap-3 text-sm py-1.5 opacity-90"><Phone className="h-4 w-4 text-[#B07045]" /> 832-671-5999</div>
          <div className="flex items-center gap-3 text-sm py-1.5 mt-2 opacity-90 text-[#B07045] hover:text-[#CD8C5D] transition-colors"><a href="mailto:info@pinewoodtrailsrv.com">info@pinewoodtrailsrv.com</a></div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={300}>
          <div className="font-display text-sm tracking-[0.3em] mb-4 text-[#B07045]">VISIT US</div>
          <div className="flex items-start gap-3 text-sm py-1.5 opacity-90">
            <MapPin className="h-4 w-4 mt-0.5 text-[#B07045]" />
            <span>19651 Pinewood Trails Dr.<br/>Magnolia, TX 77355</span>
          </div>
          <div className="flex items-center gap-3 text-sm py-1.5 mt-2 opacity-90"><Clock className="h-4 w-4 text-[#B07045]" /> 8AM - 5PM, 7 Days a Week</div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={450}>
          <div className="font-display text-sm tracking-[0.3em] mb-4 text-[#B07045]">STAY CONNECTED</div>
          <p className="text-sm opacity-80 leading-relaxed mb-4">Follow us for park updates, events & special offers!</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/5 p-2.5 hover:bg-[#B07045] hover:text-white transition-all"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/5 p-2.5 hover:bg-[#B07045] hover:text-white transition-all"><Instagram className="h-5 w-5" /></a>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-sm opacity-90">
              <li><a href="#about" className="hover:text-[#B07045] transition-colors flex items-center gap-2"><span className="text-[#B07045] text-xs">▹</span> Our Story</a></li>
              <li><a href="#amenities" className="hover:text-[#B07045] transition-colors flex items-center gap-2"><span className="text-[#B07045] text-xs">▹</span> Amenities</a></li>
              <li><a href="#sites" className="hover:text-[#B07045] transition-colors flex items-center gap-2"><span className="text-[#B07045] text-xs">▹</span> Sites & Rates</a></li>
          </ul>
        </ScrollReveal>

      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-cream/50 bg-black/40">
        &copy; {new Date().getFullYear()} Pinewood Trails RV Park. All Rights Reserved.
      </div>
    </footer>
  );
}

