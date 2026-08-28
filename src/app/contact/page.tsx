import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about roles, collaborations, or engineering work.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk"
      description="Open to full-stack roles and interesting engineering problems. Drop a message and I'll respond soon."
    >
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="space-y-4 lg:col-span-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-foreground/20"
          >
            <Mail className="size-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.email}
              </p>
            </div>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-foreground/20"
          >
            <Linkedin className="size-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground">
                Connect professionally
              </p>
            </div>
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-foreground/20"
          >
            <Github className="size-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">GitHub</p>
              <p className="text-sm text-muted-foreground">See my code</p>
            </div>
          </a>
        </div>
      </div>
    </PageShell>
  );
}
