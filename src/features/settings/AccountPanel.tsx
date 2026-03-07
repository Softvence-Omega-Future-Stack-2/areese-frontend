import CommonButton from "@/components/shared/CommonButton";

const AccountPanel = () => {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
      <h3 className="font-bold text-gray-800 mb-1">Account</h3>
      <div className="w-full h-px bg-gray-100 my-3" />
      <p className="text-sm text-gray-500 mb-5">
        View payment history via Stripe/PayPal links, export data, or manage
        your account.
      </p>
      <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-border mb-5">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          AU
        </div>
        <div className="min-w-0">
          <p className="font-bold text-gray-800 text-sm">Admin User</p>
          <p className="text-xs text-gray-500 truncate">
            Admin User · admin@email.com ·{" "}
            <span className="text-today-accent font-semibold">SuperAdmin</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <CommonButton>View Stripe/PayPal Transactions</CommonButton>
        <CommonButton>Cancel Subscription</CommonButton>
      </div>
    </div>
  );
};

export default AccountPanel;
