"use client";

import { CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentMethodCardProps {
  isLoading?: boolean;
  onCheckout: () => void;
}

const PaymentMethodCard = ({
  isLoading = false,
  onCheckout,
}: PaymentMethodCardProps) => {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Payment Method
      </h2>

      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">Stripe Checkout</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Pay securely using your Visa, Mastercard, American Express,
              Apple Pay, Google Pay, and other payment methods supported by
              Stripe.
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
              <ShieldCheck className="h-4 w-4" />
              <span>256-bit SSL encrypted & secure payment</span>
            </div>
          </div>
        </div>
      </div>

      <Button
        className="mt-6 w-full"
        size="lg"
        onClick={onCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Redirecting to Stripe..." : "Proceed to Payment"}
      </Button>
    </div>
  );
};

export default PaymentMethodCard;