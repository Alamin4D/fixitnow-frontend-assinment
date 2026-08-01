"use client";

import { useTransition } from "react";

import PaymentMethodCard from "./PaymentMethodCard";
import { createCheckout } from "../_actions/create-checkout";
import { toast } from "sonner";

interface Props {
    bookingId: string;
}

const PaymentMethodSection = ({ bookingId }: Props) => {
    const [isPending, startTransition] = useTransition();

    const handleCheckout = () => {
        startTransition(async () => {
            const result = await createCheckout(bookingId);

            if (!result.success) {
                toast.error(result.message || "Checkout failed");
                return;
            }

            window.location.href = result.data.checkoutUrl;
        });
    };

    return (
        <PaymentMethodCard
            isLoading={isPending}
            onCheckout={handleCheckout}
        />
    );
};

export default PaymentMethodSection;