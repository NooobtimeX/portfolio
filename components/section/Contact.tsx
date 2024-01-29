"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaLine,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import SectionTransition from "../SectionTransition";
import { Button } from "../ui/button";

export default function Contact() {
  const contactDetails = [
    {
      title: "Facebook",
      detail: "Woongsaphat Puangsorn",
      link: "https://www.facebook.com/xnooobtime",
      icon: FaFacebook,
      recommend: true,
    },
    {
      title: "Discord",
      detail: "NooobtimeX",
      icon: FaDiscord,
      recommend: true,
    },
    {
      title: "Mail",
      detail: "nooobtimex@gmail.com",
      link: "mailto:nooobtimex@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "Phone number",
      detail: "+66 85 587 7024",
      link: "tel:+66855877024",
      icon: FaPhone,
    },
    {
      title: "Line",
      detail: "@nooobtimex",
      icon: FaLine,
    },
    {
      title: "LinkedIn",
      detail: "Wongsaphat Puangsorn",
      link: "https://www.linkedin.com/in/nooobtimex/",
      icon: FaLinkedin,
    },
    {
      title: "Youtube",
      detail: "NooobtimeX",
      link: "https://www.youtube.com/@nooobtimex",
      icon: FaYoutube,
    },
  ];

  // When the button is clicked:
  // - If a link exists, open it in a new tab.
  // - Otherwise, copy the detail text to clipboard.
  const handleContactClick = (contact: {
    title: string;
    detail: string;
    link?: string;
    icon: IconType;
    recommend?: boolean;
  }) => {
    if (contact.link) {
      window.open(contact.link, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard.writeText(contact.detail);
      alert("Copied to clipboard!");
    }
  };

  return (
    <section id="contact" className="min-h-screen container mx-auto">
      <div className="pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <SectionTransition key={index}>
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon className="text-xl" />
                      <h3>{detail.title}</h3>
                      {detail.recommend && (
                        <Badge variant="secondary" className="rounded-2xl">
                          Recommended
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <span>{detail.detail}</span>
                      <Button
                        onClick={() => handleContactClick(detail)}
                        className="btn btn-primary btn-sm"
                      >
                        {detail.link ? "Open" : "Copy"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>
            );
          })}
        </div>
      </div>
    </section>
  );
}
