import Link from "next/link";
import { CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PaymentEmptyProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

const PaymentEmpty = ({
  title = "No Payment Found",
  description = "There are no payment records available at the moment.",
  actionLabel = "Browse Services",
  actionHref = "/services",
}: PaymentEmptyProps) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <CreditCard className="h-8 w-8 text-primary" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {actionHref && actionLabel && (
        <Button asChild className="mt-6">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
};

export default PaymentEmpty;