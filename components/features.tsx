import { HoverEffect } from "./ui/card-hover-effect";

export default function Features() {
  return (
    <div className="max-w-screen mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        title: "AI Doctor Consultation",
        description:
            "Chat with AI-powered virtual doctors for instant health advice, symptom analysis, and follow-up care.",
    },
    {
        title: "Prescription Generation",
        description:
            "Automatically generate medical prescriptions based on AI diagnosis, ready to download.",
    },
    {
        title: "24x7 Medical Support",
        description:
            "Get round-the-clock support for general health issues, medication queries using intelligent assistance.",
    },
    {
        title: "Health Records Dashboard",
        description:
            "Securely store, view, and manage your digital prescriptions and medical history in one place.",
    }

];
