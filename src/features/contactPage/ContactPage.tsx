import CommonButton from "@/components/shared/CommonButton";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { inputClass } from "../task/CreateDashboardForm";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg min-h-screen pt-10 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-black mb-4">Contact Us</h1>

        <p className="text-text/50 text-lg">
          We'd love to hear from you. Send us a message and we'll respond soon.
        </p>
      </div>

      {/* CONTACT GRID */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 pb-24">
        {/* LEFT CARD */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl border p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-4">
            Don’t Forget To Contact Us
          </h2>

          <p className="text-gray-600 mb-8">
            Not sure what you need? Our team will be happy to listen and suggest
            ideas you may not have considered.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 text-info p-3 rounded-lg">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-sm text-text/50">Email</p>
                <p className="font-semibold">info@dontforget.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-today-accent p-3 rounded-lg">
                <MessageSquare size={18} />
              </div>

              <div>
                <p className="text-sm text-text/50">Support</p>
                <p className="font-semibold">24/7 customer support</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl border shadow-sm p-8"
        >
          <h2 className="text-xl font-bold mb-6">Send us a message</h2>

          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={inputClass.label}>Full Name</label>

                <input type="text" className={inputClass.input} />
              </div>

              <div>
                <label className={inputClass.label}>Email</label>

                <input type="email" className={inputClass.input} />
              </div>
            </div>

            <div>
              <label className={inputClass.label}>Subject</label>

              <input type="text" className={inputClass.input} />
            </div>

            <div>
              <label className={inputClass.label}>Message</label>

              <textarea rows={5} className={inputClass.input} />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <CommonButton type="submit">Send Message</CommonButton>
              <CommonButton
                type="button"
                onClick={() => navigate("/")}
                variant="secondary"
              >
                Back
              </CommonButton>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;
