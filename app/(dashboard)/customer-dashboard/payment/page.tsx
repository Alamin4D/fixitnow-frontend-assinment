import { getPaymentHistory } from "./_actions/get-payment-history";
import PaymentEmpty from "./_components/PaymentEmpty";
import PaymentHistoryTable from "./_components/PaymentHistoryTable";

const PaymentPage = async () => {
  const result = await getPaymentHistory();

  const payments = result?.data || [];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Payments</h1>
        <p className="text-muted-foreground">
          View your payment history and transaction details.
        </p>
      </div>

      {payments.length === 0 ? (
        <PaymentEmpty
          title="No Payments Yet"
          description="You haven't made any payments yet. Your completed transactions will appear here."
          actionLabel="Browse Services"
          actionHref="/services"
        />
      ) : (
        <PaymentHistoryTable payments={payments} />
      )}
    </div>
  );
};

export default PaymentPage;