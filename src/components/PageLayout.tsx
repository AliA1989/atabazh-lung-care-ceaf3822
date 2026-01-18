import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * Global Page Layout wrapper providing unified background styling
 * Applies the soft blue gradient theme across all pages for visual consistency
 */
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Global soft blue gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[hsl(200,35%,98%)] via-[hsl(200,45%,96%)] to-[hsl(210,55%,92%)] z-0" />
      
      {/* Ambient organic shapes */}
      <div className="fixed top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,_hsl(200,60%,90%)_0%,_transparent_60%)] z-0 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_bottom_left,_hsl(210,50%,92%)_0%,_transparent_60%)] z-0 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
