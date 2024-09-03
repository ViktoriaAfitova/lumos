import { cn } from '@/utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const NavWrapper = ({ children, className }: Props) => {
  return (
    <nav
      className={cn(
        'flex h-20 items-center justify-between bg-white px-4 pt-6 lg:px-12',
        className,
      )}
    >
      {children}
    </nav>
  );
};

export default NavWrapper;
