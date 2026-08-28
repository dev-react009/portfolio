import type { SkillCategory } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

interface SkillsGridProps {
  skills: SkillCategory[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, index) => (
        <FadeIn key={group.category} delay={index * 0.04}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base">{group.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
