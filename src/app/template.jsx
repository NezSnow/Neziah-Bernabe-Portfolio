/**
 * Keep root wrapper minimal — Framer Motion here wrapped the entire tree and has
 * been linked to RSC/hydration edge cases on some Next + React combinations.
 */
export default function Template({ children }) {
  return <>{children}</>;
}
