import { Badge } from "@/components/ui/badge";

type PaymentStatus =
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED";

interface PaymentStatusBadgeProps {
  status: PaymentStatus | string;
}

const statusStyles: Record<
  string,
  {
    label: string;
    className: string;
  }
> = {
  PENDING: {
    label: "Pending",
    className:
      "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100",
  },
  PAID: {
    label: "Paid",
    className:
      "bg-green-100 text-green-800 border-green-200 hover:bg-green-100",
  },
  FAILED: {
    label: "Failed",
    className:
      "bg-red-100 text-red-800 border-red-200 hover:bg-red-100",
  },
  CANCELLED: {
    label: "Cancelled",
    className:
      "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-100",
  },
  REFUNDED: {
    label: "Refunded",
    className:
      "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100",
  },
};

const PaymentStatusBadge = ({
  status,
}: PaymentStatusBadgeProps) => {
  const config = statusStyles[status] ?? {
    label: status,
    className:
      "bg-secondary text-secondary-foreground border-border",
  };

  return (
    <Badge
      variant="outline"
      className={config.className}
    >
      {config.label}
    </Badge>
  );
};

export default PaymentStatusBadge;