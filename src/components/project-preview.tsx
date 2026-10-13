import { useState } from 'react'
import { Smartphone, Image, Globe, LoaderCircle, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import type { Project } from '@/lib/portfolio'

export function ProjectPreview({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [mode, setMode] = useState<'live' | 'snapshot'>('live')
  const [loading, setLoading] = useState(true)
  return <Dialog open={Boolean(project)} onOpenChange={(open) => { if (!open) onClose(); setMode('live'); setLoading(true) }}>
    <DialogContent className="project-dialog">
      <div className="preview-browser-header"><div className="traffic-lights" aria-hidden="true"><i/><i/><i/></div><DialogTitle className="preview-title-chip">{project?.slug === 'more-labs' ? 'Morning Recovery' : project?.name}</DialogTitle><DialogDescription className="sr-only">{project?.industry} — scrollable mobile website preview</DialogDescription></div>
      <div className="preview-tools"><span><Globe size={13} /> {project ? new URL(project.url).hostname : ''}</span><div>
        {project?.live && <Button variant={mode === 'live' ? 'secondary' : 'ghost'} size="icon" title="Live mobile website" aria-label="Live mobile website" onClick={() => { setMode('live'); setLoading(true) }}><Smartphone /></Button>}
        {project?.image && <Button variant={mode === 'snapshot' ? 'secondary' : 'ghost'} size="icon" title="Website capture" aria-label="Website capture" onClick={() => setMode('snapshot')}><Image /></Button>}
      </div></div>
      <div className="phone-frame">
        {project?.live && mode === 'live' ? <>{loading && <div className="frame-loading"><LoaderCircle className="animate-spin" /> Loading website</div>}<iframe key={project.slug} src={project.url} title={`${project.name} live mobile website`} onLoad={() => setLoading(false)} referrerPolicy="strict-origin-when-cross-origin" /></> : <div className="snapshot-scroll">{project?.image ? <img src={project.image} alt={`${project.name} website capture`} /> : <div className="unavailable"><Globe size={36}/><h3>{project?.name}</h3><p>A preview is currently unavailable.</p><span>{project?.url}</span></div>}</div>}
        {(project?.live || project?.image) && <span className="preview-scroll-hint" aria-hidden="true">Scroll to explore <ArrowDown size={16}/></span>}
      </div>
      <p className="preview-note">{project?.live && mode === 'live' ? 'Live website · Some third-party features may be limited in this view. If it doesn’t load, select the capture above.' : project?.image ? 'Scrollable website capture · This website blocks live embedding.' : 'This website is unavailable or prevents embedded previews.'}</p>
    </DialogContent>
  </Dialog>
}