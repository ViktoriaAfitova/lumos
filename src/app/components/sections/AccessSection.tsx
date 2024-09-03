import Image from 'next/image';
import Button from '../common/Button';

const accessImage = '/assets/images/accessSectionImage.png';
const wreathLeft = '/assets/images/wreathLeftImage.png';
const wreathRight = '/assets/images/wreathRightImage.png';
const location = '/assets/images/location.png';
const server = '/assets/images/server.png';

function AccessSection() {
  return (
    <section className='mt-16 flex flex-col items-center justify-center px-4'>
      <h1 className='flex-none text-center text-3xl font-bold'>
        Access <span className='text-blue'>everything</span>
        <br />
        <span className='text-blue'>securely</span> <span>with</span>
        <br />
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
        className='mt-4 h-16 w-96 rounded-2xl bg-orange text-2xl font-bold text-white'
        text='Get VPN'
      />
      <div className='mt-6 flex'>
        <Image src={wreathLeft} alt='Wreath' height={42} width={22} priority />
        <div className='mx-4 flex flex-col items-center'>
          <p className='text-sm font-normal text-blue'>Trusted by</p>
          <p className='text-sm font-semibold text-blue'>50M+ Users</p>
        </div>
        <Image src={wreathRight} alt='Wreath' height={42} width={22} priority />
      </div>
      <div className='mx-auto mt-6 flex h-20 w-[392px] max-w-full items-center justify-center rounded-2xl shadow-shadow-block lg:w-[896px]'>
        <div className='flex items-center'>
          <Image
            src={location}
            alt='Location'
            height={24}
            width={24}
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          <div className='ml-2'>
            <p className='text-2xl font-bold text-black'>50+</p>
            <p className='font-base text-sm text-grey'>Locations</p>
          </div>
        </div>
        <div className='mx-12 h-6 border-r border-grey lg:mx-24'></div>
        <div className='flex items-center'>
          <Image
            src={server}
            alt='Server'
            height={24}
            width={24}
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          <div className='ml-2'>
            <p className='text-2xl font-bold text-black'>1000+</p>
            <p className='font-base text-sm text-grey'>Servers</p>
          </div>
        </div>
      </div>
      <small className='mt-6 text-center text-base font-medium text-grey'>
        VPN-your <span className='text-blue'>ultimate</span> solution for a
        private and secure online experience!
      </small>
    </section>
  );
}

export default AccessSection;
