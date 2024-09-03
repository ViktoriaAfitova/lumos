import Image from 'next/image';
import Button from '../common/Button';

const accessImage = '/assets/images/accessSectionImage.png';
const wreathLeft = '/assets/images/wreathLeftImage.png';
const wreathRight = '/assets/images/wreathRightImage.png';
const location = '/assets/images/location.png';
const server = '/assets/images/server.png';

function AccessSection() {
  return (
    <section className='mt-16 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold flex-none text-center'>
        Access{' '}
        <span className='text-blue'>everything</span><br />
        <span className='text-blue'>securely</span>{' '} 
        <span>with</span><br /> 
        VPN
  </h1>
      <Image
        src={accessImage}
        alt='Access section image'
        height={210}
        width={428}
        priority
      />
      <Button         
        type='button'
        className='mt-4 h-16 w-96 rounded-2xl bg-orange text-white text-2xl font-bold' 
        text='Get VPN' 
      />
      <div className='mt-6 flex'>
        <Image
          src={wreathLeft}
          alt='Wreath'
          height={42}
          width={22}
          priority
        />
          <div className='flex flex-col items-center mx-4'>
            <p className='text-blue text-sm font-normal'>Trusted by</p>
            <p className='text-blue text-sm font-semibold'>50M+ Users</p>
          </div>
        <Image
          src={wreathRight}
          alt='Wreath'
          height={42}
          width={22}
          priority
        />
      </div>
      <div className='mt-6 w-[896px] h-20 max-w-full rounded-2xl shadow-shadow-access-block flex items-center justify-center mx-auto'>
        <div className='flex items-center'>
          <Image
            src={location}
            alt='Location'
            height={24}
            width={24}
            style={{
              width: '24px',
              height: '24px'
            }}
          />
          <div className='ml-2'>
            <p className='text-black text-2xl font-bold'>50+</p>
            <p className='text-sm text-grey font-base'>Locations</p>
          </div>
        </div>
        <div className='h-6 border-r border-grey mx-24'></div>
        <div className='flex items-center'>
          <Image
            src={server}
            alt='Server'
            height={24}
            width={24}
            style={{
              width: '24px',
              height: '24px'
            }}
          />
          <div className='ml-2'>
            <p className='text-black text-2xl font-bold'>1000+</p>
            <p className='text-sm text-grey font-base'>Servers</p>
          </div>
        </div>
      </div>
      <small className='mt-6 text-base text-grey font-medium'>VPN-your <span className='text-blue'>ultimate</span> solution for a private and secure online experience!</small>
    </section>
  );
}

export default AccessSection;