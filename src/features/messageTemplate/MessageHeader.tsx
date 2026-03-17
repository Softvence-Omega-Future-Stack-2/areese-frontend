const MessageHeader = () => {
  return (
    <div className="w-full border border-border rounded-2xl bg-white px-8 py-10 flex flex-col items-center text-center shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">
        Communication Templates
      </h1>

      <h2 className="text-base font-bold text-gray-800 mb-4">
        Ever get stuck—or forget what to say—professionally?
      </h2>

      <p className="text-sm text-gray-600 leading-relaxed max-w-xl mb-5">
        Don't Forget has you covered. These done-for-you communication templates
        help you say it right every time. Just copy, paste, and fill in the
        blanks to add your personal touch for emails, texts, or messages that
        help you sound clear, confident, and professional.
      </p>

      <p className="text-sm font-bold italic text-today-accent">
        Thank me later.
      </p>
    </div>
  );
};

export default MessageHeader;
