import { useState } from "react";
import ContactClick from "./ui/ContactClick";


const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

  const form = e.currentTarget;

  const formData = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    company: (form.elements.namedItem("company") as HTMLInputElement).value,
    region: (form.elements.namedItem("region") as HTMLInputElement).value,
    interest: (form.elements.namedItem("interest") as HTMLTextAreaElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "trade",
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      form.reset();
    } else {
      throw new Error("Failed to send");
    }

  } catch (error) {
    console.error("Failed to send:", error);
    alert("There was an error sending your message. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-lightbrown">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 mt-12">
          <h2 className="text-3xl font-playfair font-bold tracking-tight text-tertiary">
            Let’s Build Trade Pathways Together
          </h2>
          <p className="mt-4 text-lg text-primary">
            Share your details and we’ll get back to you shortly.
          </p>
        </div>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-whitte p-8 rounded-lg shadow-sm border border-secondary"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Trade Contact Submission"
            />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="/thank-you" />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-tertiary"
              >
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 bg-lightbrown text-tertiary border-secondary"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-tertiary"
              >
                Company *
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 bg-lightbrown text-tertiary border-secondary"
              />
            </div>

            {/* Region */}
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-tertiary"
              >
                Region *
              </label>
              <input
                type="text"
                name="region"
                id="region"
                required
                placeholder="e.g. Africa, Europe, Asia"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 bg-lightbrown text-tertiary border-secondary"
              />
            </div>

            {/* Trade Interest */}
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-tertiary"
              >
                Trade Interest *
              </label>
              <textarea
                id="interest"
                name="interest"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 bg-lightbrown text-tertiary border-secondary"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-tertiary"
              >
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 bg-lightbrown text-tertiary border-secondary"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors bg-primary text-secondary hover:bg-[#9a7f58]"
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-whitte p-8 rounded-lg shadow-sm text-center border border-secondary">
            <div className="text-2xl font-playfair font-bold mb-4 text-tertiary">
              Thank you!
            </div>
            <p className="text-primary">
              We’ve received your message and will contact you shortly.
            </p>
          </div>
        )}

        {/* Direct contact section */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-tertiary">
            Or reach out directly:
          </h3>
          <div className="flex flex-col items-center space-y-3 mt-6 text-primary">
            <ContactClick />
            <p>📍 Ehitajate tee 60, 12191 Tallinn, Estonia</p>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/company/109096257/admin/dashboard/"
                className="hover:opacity-80 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="http://@karagateway"
                className="hover:opacity-80 transition-opacity"
              >
                Twitter
              </a>
              <a
                href="http://karagateway"
                className="hover:opacity-80 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580678617699"
                className="hover:opacity-80 transition-opacity"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
