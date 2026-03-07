import DashboardTopSection from "@/components/shared/DashboardTopSection";
import PublicBookingForm from "@/features/publicBooking/PublicBookingForm";

const PublicBooking = () => {
  return (
    <div>
      <DashboardTopSection
        title="Public Booking"
        description="Generate unique booking links with optional booking limits and post-booking redirects.
        "
      />
      <PublicBookingForm />
    </div>
  );
};

export default PublicBooking;
