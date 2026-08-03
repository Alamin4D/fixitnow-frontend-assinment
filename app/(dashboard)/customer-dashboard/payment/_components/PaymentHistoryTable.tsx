interface Payment {
  id: string;
  amount: number;
  status: string;
  transactionId: string;
  createdAt: string;
}


const PaymentHistoryTable = ({
  payments,
}: {
  payments: Payment[];
}) => {
  if (!payments.length) {
    return (
      <div className="rounded-lg border py-16 text-center text-muted-foreground">
        No payment history found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Transaction ID</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border-t">
              <td className="p-3">{payment.transactionId}</td>
              <td className="p-3">${payment.amount}</td>
              <td className="p-3 capitalize">{payment.status}</td>
              <td className="p-3">
                {new Date(payment.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryTable;