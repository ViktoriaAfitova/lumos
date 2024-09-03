import BenefitCard from './BenefitCard';

const benefitCards = [
  {
    imageSrc: '/assets/images/unlimitedIcon.png',
    title: 'Unlimited',
    subtitle: 'access to content',
    description:
      "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
  },
  {
    imageSrc: '/assets/images/flashingIcon.png',
    title: 'Flashing',
    subtitle: 'connecting speed',
    description:
      'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!',
  },
  {
    imageSrc: '/assets/images/hideIcon.png',
    title: 'Hide',
    subtitle: 'your location',
    description:
      'Get your own unique IP for added security and access to restricted sites, apps, and services!',
  },
  {
    imageSrc: '/assets/images/bypassIcon.png',
    title: 'Bypass',
    subtitle: 'blocked sites',
    description: 'Access any website safely and anonymously!',
  },
];

function BenefitsSection() {
  return (
    <>
      <section className='mt-16 flex items-center justify-center px-4'>
        <div className='grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2'>
          {benefitCards.map((benefitCard, title) => (
            <BenefitCard
              key={title}
              imageSrc={benefitCard.imageSrc}
              title={benefitCard.title}
              subtitle={benefitCard.subtitle}
              description={benefitCard.description}
            />
          ))}
        </div>
      </section>
      <h4 className='my-16 text-center text-2xl font-bold text-blue'>
        Millions of people trust us!
      </h4>
    </>
  );
}

export default BenefitsSection;
