"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const PaymentCancelPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 text-center shadow-sm">
        <XCircle className="mx-auto h-14 w-14 text-red-500" />

        <h1 className="mt-6 text-2xl font-bold">
          Payment Cancelled
        </h1>

        <p className="mt-3 text-muted-foreground">
          Your payment was cancelled. No charges were made to your account.
          You can return to your booking and try again whenever you're ready.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            className="flex-1"
            onClick={() => router.back()}
          >
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex-1"
          >
            <Link href="/customer-dashboard/bookings">
              My Bookings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelPage;