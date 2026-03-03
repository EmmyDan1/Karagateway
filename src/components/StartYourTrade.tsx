import { useState } from "react";


const StartTradeJourney = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    expansionGoal: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "expansion",
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        businessType: "",
        email: "",
        expansionGoal: "",
        message: "",
      });
    } else {
      throw new Error("Failed to send");
    }

  } catch (error) {
    console.error("Failed to send:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-[#f4e9dc] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#4e3629] mb-4">
            Start Your Trade Journey
          </h1>
          <p className="text-lg text-[#4e3629]/80">
            Bringing the world's innovations to Africa and Africa's excellence
            to the world through trade.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-secondary rounded-2xl shadow-lg p-6 sm:p-8"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#4e3629] mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full  bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-medium text-[#4e3629] mb-2"
              >
                Type of Business / Business Sector *
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full  px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent bg-secondary"
                placeholder="e.g., Agriculture, Technology, Manufacturing"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#4e3629] mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="expansionGoal"
                className="block text-sm font-medium text-[#4e3629] mb-2"
              >
                Expansion Goals / Interests *
              </label>
              <textarea
                id="expansionGoal"
                name="expansionGoal"
                value={formData.expansionGoal}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                placeholder="Describe your expansion goals, target markets, and interests"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#4e3629] mb-2"
              >
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent "
                placeholder="Any additional information you'd like to share"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4e3629] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3a281f] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                Thank you for your submission! We'll be in touch soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                There was an error submitting your form. Please try again.
              </div>
            )}
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-[#4e3629]/70">
          <p>
            We respect your privacy and will never share your information with
            third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartTradeJourney;
