import type { Metadata } from "next";

import { getProfile } from "@/lib/content";
import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "My professional journey, engineering mindset, what I'm learning, and where I'm headed.",
};

export default function AboutPage() {
  const profile = getProfile();

  return (
    <PageShell
      eyebrow="About"
      title="Engineering with intent"
      description="I build software the way I'd want to inherit it: clear, tested, and easy to change."
    >
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <h2 className="text-xl font-semibold tracking-tight">
            Professional journey
          </h2>
          {profile.journey.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Engineering mindset</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {profile.mindset.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-foreground">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Currently learning</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {profile.learning.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-foreground">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Career goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {profile.goals.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-foreground">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
