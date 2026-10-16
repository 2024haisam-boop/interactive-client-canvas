import { Globe, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Project } from "@/lib/portfolio";

export function ProjectPreview({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="project-dialog">
        <div className="preview-browser-header">
          <div className="traffic-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <DialogTitle className="preview-title-chip">
            {project?.slug === "more-labs" ? "Morning Recovery" : project?.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {project?.industry} — scrollable mobile website preview
          </DialogDescription>
        </div>
        <div className="preview-tools">
          <span>
            <Globe size={13} /> {project ? new URL(project.url).hostname : ""}
          </span>
          <div>
            {project?.live ? (
              <Button asChild variant="secondary" size="sm" className="preview-live-link">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Open live site <ExternalLink />
                </a>
              </Button>
            ) : (
              <span className="preview-unavailable-label">Original unavailable</span>
            )}
          </div>
        </div>
        <div className="phone-frame capture-frame">
          <div className="snapshot-scroll">
            {project?.image ? (
              <img
                src={project.image}
                width={project.imageWidth}
                height={project.imageHeight}
                decoding="async"
                alt={`${project.name} website preview`}
              />
            ) : (
              <div className="unavailable">
                <Globe size={36} />
                <h3>{project?.name}</h3>
                <p>An instant preview is currently unavailable. Open the original website above.</p>
                <span>{project?.url}</span>
              </div>
            )}
          </div>
          {project?.previewIssue && project.image && (
            <span className="preview-issue-badge">Illustrative fallback</span>
          )}
          {project?.image && (
            <span className="preview-scroll-hint" aria-hidden="true">
              Scroll to explore <ArrowDown size={16} />
            </span>
          )}
        </div>
        <p className="preview-note">
          {project?.previewIssue === "capture-unavailable"
            ? "This site could not be captured for an instant preview. Use Open live site to visit the original."
            : project?.previewIssue
              ? "Original site unavailable · Showing a clearly marked illustrative fallback."
              : "Instant preloaded preview · Open the live site in a new tab for the latest version."}
        </p>
      </DialogContent>
    </Dialog>
  );
}
