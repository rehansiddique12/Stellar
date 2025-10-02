import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto h-full w-full max-w-screen-2xl px-4 ", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
