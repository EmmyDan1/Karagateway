import { useState } from "react";
import emailjs from "@emailjs/browser";
import { partnerTypes } from "../data/PartnersType";
import { FaCheckCircle, FaUpload } from "react-icons/fa";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    partnershipType: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessDescription: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Create template parameters that match your EmailJS template
    const templateParams = {
      company_name: formData.companyName,
      partnership_type: formData.partnershipType,
      contact_person: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      business_description: formData.businessDescription,
      from_name: "Karagateway Website",
      to_email: "info@karagateway.com", // Add your email here if needed
    };

    console.log("Sending email with params:", templateParams);

    try {
      const result = await emailjs.send(
        "service_pul5dtb",
        "template_3dpsi6e",
        templateParams,
        "ge55ESt2Hz4cBeS9S"
      );

      console.log("Email sent successfully:", result); // Add this line

      setIsSubmitted(true);
      // Reset form data properly
      setFormData({
        companyName: "",
        partnershipType: "",
        contactPerson: "",
        email: "",
        phone: "",
        businessDescription: "",
      });
    } catch (error) {
      console.error("Failed to send:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Access Verified Partners: We vet every business to ensure credibility and quality.",
    "Simplified Trade Processes: Logistics, compliance, and documentation handled efficiently.",
    "Market Insights & Growth Opportunities: Informed decisions backed by data and experience.",
    "Ethical & Transparent Collaboration: Long-term partnerships built on trust and shared value.",
  ];

  return (
    <div className="min-h-screen bg-[#f4e9dc] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4e3629] mb-4">
            Partner With Us
          </h1>
          <p className="text-xl text-[#4e3629]/90 max-w-3xl mx-auto">
            Join Our Global Trade Network
          </p>
          <div className="h-1 w-24 bg-[#4e3629] mx-auto mt-6"></div>
        </div>

        {/* Intro Section */}
        <div className="bg-secondary rounded-2xl shadow-lg p-8 mb-16">
          <p className="text-lg text-[#4e3629] leading-relaxed text-center">
            Karagateway partners with producers, exporters, importers, and
            service providers to create seamless trade opportunities across
            Africa and the world. By joining our network, you gain access to
            verified partners, market insights, compliance expertise, and
            end-to-end support that makes international trade simpler, faster,
            and more reliable.
          </p>
        </div>

        {/* Who Can Partner Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4e3629] mb-8 text-center">
            Who Can Partner With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{partner.icon}</div>
                <h3 className="text-xl font-semibold text-[#4e3629] mb-2">
                  {partner.type}
                </h3>
                <p className="text-[#4e3629]/80">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner Section */}
        <div className="bg-[#4e3629] rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Partner With Karagateway
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-white text-xl mt-1 mr-4 flex-shrink-0" />
                <p className="text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options Tabs */}
        <div className="bg-secondary rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#4e3629] mb-2">
                  Thank You!
                </h3>
                <p className="text-[#4e3629]">
                  Thanks for providing your information - a member of our team
                  will get in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Partnership Request - Karagateway"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://yourdomain.com/thank-you"
                />{" "}
                {/* Optional: Redirect after submit */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <div>
                    <label className="block text-sm font-medium text-[#4e3629] mb-2">
                      Company/Organization name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4e3629] mb-2">
                      Type of partnership
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                    >
                      <option value="">Select partnership type</option>
                      <option value="producer">Producer & Supplier</option>
                      <option value="buyer">Buyer & Distributor</option>
                      <option value="logistics">
                        Logistics & Service Provider
                      </option>
                      <option value="investor">
                        Investor & Strategic Partner
                      </option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#4e3629] mb-2">
                      Contact person
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4e3629] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4e3629] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4e3629] mb-2">
                    Short description of your business or interest
                  </label>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-secondary px-4 py-3 border border-[#d6bb9c] rounded-lg focus:ring-2 focus:ring-[#4e3629] focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4e3629] mb-2">
                    Upload company profile or certificate (optional)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#d6bb9c] rounded-lg cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaUpload className="text-[#4e3629] text-xl mb-2" />
                        <p className="text-sm text-[#4e3629]">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-[#4e3629]/70">
                          PDF, DOC, DOCX (MAX. 10MB)
                        </p>
                      </div>
                      <input type="file" name="attachment" className="hidden" />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#4e3629] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3a281f] transition-colors duration-300"
                >
                  {isLoading ? "Sending..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
