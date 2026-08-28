import { cn } from "@/lib/utils";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageShellProps) {
  return (
    <div className={cn("container-page py-16 sm:py-20", className)}>
      <header className="max-w-3xl space-y-3">
        {eyebrow ? (
          <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </header>
      <div className="mt-12">{children}</div>
    </div>
  );
}
