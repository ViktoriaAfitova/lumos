import { cn } from '@/utils/cn';
import NavWrapper from './NavWrapper';
import { NAV_BAR_LOGO_SIZE } from './const';
import Image from 'next/image';
import NextLink from 'next/link';
import Button from '../common/Button';

interface Props {
  className?: string;
}

const logoImage = '/assets/images/logo/logo.png';

function DesktopNav({ className }: Props) {
  return (
    <NavWrapper className={cn('relative !pr-8 pb-6', className)}>
      <NextLink href='/' className='flex items-center'>
        <Image
          src={logoImage}
          alt='Website logo'
          height={NAV_BAR_LOGO_SIZE.HEIGHT}
          width={NAV_BAR_LOGO_SIZE.WIDTH}
          priority
        />
        <span className='ml-1 text-2xl uppercase text-black'>VPN</span>
      </NextLink>
      <Button
        type='button'
        className='h-10 w-24 rounded-3xl bg-blue text-white'
        text='Get VPN'
      />
    </NavWrapper>
  );
}

export default DesktopNav;
