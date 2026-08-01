"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

import { verifyPayment } from "../_actions/verify-payment";
import { Button } from "@/components/ui/button";

const PaymentSuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    const verify = async () => {
      const sessionId = searchParams.get("session_id");

      if (!sessionId) {
        setLoading(false);
        setMessage("Invalid payment session.");
        return;
      }

      const result = await verifyPayment(sessionId);

      setLoading(false);

      if (result.success) {
        setSuccess(true);
        setMessage(result.message || "Payment completed successfully.");

        setTimeout(() => {
          router.replace("/customer-dashboard/payment");
        }, 2500);
      } else {
        setSuccess(false);
        setMessage(result.message || "Payment verification failed.");
      }
    };

    verify();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 text-center shadow-sm">
        {loading ? (
          <>
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <h2 className="mt-6 text-2xl font-bold">
              Verifying Payment...
            </h2>
            <p className="mt-2 text-muted-foreground">
              Please wait while we verify your payment.
            </p>
          </>
        ) : success ? (
          <>
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
            <h2 className="mt-6 text-2xl font-bold">
              Payment Successful
            </h2>
            <p className="mt-2 text-muted-foreground">{message}</p>

            <Button
              className="mt-6 w-full"
              onClick={() =>
                router.push("/customer-dashboard/payment")
              }
            >
              View Payment History
            </Button>
          </>
        ) : (
          <>
            <XCircle className="mx-auto h-14 w-14 text-red-600" />
            <h2 className="mt-6 text-2xl font-bold">
              Verification Failed
            </h2>

            <p className="mt-2 text-muted-foreground">{message}</p>

            <Button
              variant="outline"
              className="mt-6 w-full"
              onClick={() =>
                router.push("/customer-dashboard/bookings")
              }
            >
              Back to Bookings
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessPage;