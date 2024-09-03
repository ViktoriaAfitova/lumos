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
    <section className='mt-16 flex justify-center items-center px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 max-w-screen-lg'>
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
  );
}

export default BenefitsSection;
