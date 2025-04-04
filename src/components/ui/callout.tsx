import { ReactNode } from 'react';

const Callout = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`rounded-xl border border-zinc-600 bg-zinc-700/20 p-4 text-zinc-200 italic ${className ?? ''}`}>
      {children}
    </div>
  );
};
export default Callout;
