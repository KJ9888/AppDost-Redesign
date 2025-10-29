import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "./ui/button";
import { Toast } from "./ui/toast";

const FloatingCTA = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const firstFieldRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Expose open method to parent component
  useImperativeHandle(ref, () => ({
    openForm: () => setOpen(true),
    closeForm: () => setOpen(false),
    hideButton: () => setHideButton(true),
    showButton: () => setHideButton(false),
  }));

  useEffect(() => {
    if (open && firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, [open]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, proceed with submission
    console.log("Form submitted:", formData);

    // Save name before resetting form
    setSubmittedName(formData.name);

    // Close the form
    setOpen(false);

    // Show success toast
    setShowToast(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Add your form submission logic here (API call, etc.)
  };

  return (
    <>
      {!open && !hideButton && (
        <button
          aria-label="Start a project"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[150] rounded-full px-5 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 active:scale-100 transition-all"
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-comment-dots"></i>
            <span className="hidden font-semibold sm:inline">Start a Project</span>
          </div>
        </button>
      )}

      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[180]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-0 flex items-end justify-center p-4 sm:items-center">
            <div className="relative w-full p-6 sm:max-w-lg glass-strong rounded-2xl sm:p-8">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute p-2 rounded-lg top-3 right-3 bg-white/10 hover:bg-white/20"
              >
                <i className="text-white fas fa-times"></i>
              </button>
              <h3 className="mb-2 text-2xl font-bold text-white">Tell us about your idea</h3>
              <p className="mb-6 text-gray-400">We usually reply within a few hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg bg-white/5 border-white/10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${
                      errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg bg-white/5 border-white/10 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                        : ""
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">What do you need?</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Website, mobile app, redesign..."
                    className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg resize-none bg-white/5 border-white/10 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95"
                >
                  Send Message
                  <i className="ml-2 fas fa-paper-plane"></i>
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="success"
        title="🎉 Congratulations!"
        message={`Thank you, ${
          submittedName || "there"
        }! Your message has been sent successfully. We'll get back to you soon!`}
      />
    </>
  );
});

FloatingCTA.displayName = "FloatingCTA";

export default FloatingCTA;
