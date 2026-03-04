import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formType, ...data } = req.body;

  try {
    let subject = "";
    let html = "";

    // ===== Expansion Form =====
    if (formType === "expansion") {
      const { name, businessType, email, expansionGoal, message } = data;

      subject = "New Expansion Inquiry";

      html = `
        <h2>Expansion Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Expansion Goals:</strong></p>
        <p>${expansionGoal}</p>
        <p><strong>Additional Message:</strong></p>
        <p>${message || "N/A"}</p>
      `;
    }

    // ===== Trade Form =====
    if (formType === "trade") {
      const { name, company, region, interest, email } = data;

      subject = "New Trade Contact Submission";

      html = `
        <h2>Trade Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Trade Interest:</strong></p>
        <p>${interest}</p>
      `;
    }

    await resend.emails.send({
      from: "noreply@karagateway.com", // temporary, we’ll fix after domain verification
      to: "info@karagateway.com",   // replace later if needed
      subject,
      html,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}