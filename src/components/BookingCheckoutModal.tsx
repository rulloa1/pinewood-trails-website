import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface Site {
  num: number;
  type: string;
  amp: string;
  price: number;
}

interface BookingCheckoutModalProps {
  site: Site | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingCheckoutModal({ site, isOpen, onClose }: BookingCheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      toast.success("Reservation confirmed!");
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStep(1), 300); // reset after closing animation
  };

  if (!site) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[500px] border-white/10 bg-black/95 text-cream backdrop-blur-xl">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-cream tracking-wide">
                Complete Reservation
              </DialogTitle>
              <DialogDescription className="text-cream/70">
                You selected Site {site.num} ({site.type} • {site.amp}). Please provide your details to secure your spot.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleConfirm} className="mt-4 grid gap-5">
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-cream/70 mb-1.5 block">First Name</span>
                  <input required type="text" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-cream focus:border-[#B07045] focus:outline-none transition-colors" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-cream/70 mb-1.5 block">Last Name</span>
                  <input required type="text" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-cream focus:border-[#B07045] focus:outline-none transition-colors" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-cream/70 mb-1.5 block">Email</span>
                <input required type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-cream focus:border-[#B07045] focus:outline-none transition-colors" />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-cream/70 mb-1.5 block">Phone Number</span>
                <input required type="tel" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-cream focus:border-[#B07045] focus:outline-none transition-colors" />
              </label>
              
              <div className="mt-2 rounded-xl bg-[#B07045]/10 border border-[#B07045]/20 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cream/80">Rate ({site.type})</span>
                  <span className="font-bold">${site.price}/night</span>
                </div>
                <div className="flex justify-between items-center text-sm text-cream/60 mb-2">
                  <span>Taxes & Fees</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-[#B07045]">${site.price}.00</span>
                </div>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full mt-2 rounded-xl bg-gradient-to-r from-[#B07045] to-[#855030] px-6 py-3.5 font-display text-lg font-bold text-white shadow-lg hover:from-[#CD8C5D] hover:to-[#B07045] transition-all disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Confirm Reservation"}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-400" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-2">You're All Set!</h3>
            <p className="text-cream/80 mb-8 max-w-sm">
              Your reservation for Site {site.num} has been confirmed. We've sent a confirmation email with details about your stay.
            </p>
            <button 
              onClick={handleClose}
              className="rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3 font-display font-bold transition-all"
            >
              Back to Home
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
