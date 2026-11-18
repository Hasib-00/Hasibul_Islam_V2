/* Re-mounts per route. The zoom-in is a pure CSS animation (runs on the compositor, not the JS thread), see .page-in in globals.css. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
