import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const CareerGuidanceModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    setSubmitMessage("");

    try {
      console.log("Form Data Submitted:", formData);
      setIsOpen(false);
      setFormData({ name: "", email: "", phone: "" });
      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your request has been submitted successfully!",
        confirmButtonColor: "#319795",
      });
      sessionStorage.setItem("formSubmitted", "true");
      setIsOpen(false);
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ useEffect should be at component level, NOT inside handleSubmit
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sessionStorage.getItem("formSubmitted")) {
        setIsOpen(true);
      }
    }, 4000); // 40 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-1"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="backdrop-blur-2xl shadow-[inset_0px_0px_25px_6px_rgba(59,_130,_246,_0.5)] rounded-xl p-6 my-20 w-full max-w-sm max-h-100 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-teal-700">Get Career Guidance</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {submitMessage && (
                <p className="mt-2 text-center text-green-500">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGuidanceModal;
