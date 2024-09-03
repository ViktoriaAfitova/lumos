import Image from 'next/image';

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const BenefitCard = ({ imageSrc, title, subtitle, description }: Props) => {
  return (
    <div className='flex w-[424px] flex-col items-center justify-center border-t border-grey py-4'>
      <Image
        width={104}
        height={52}
        src={imageSrc}
        alt={title}
        className='mt-4 object-cover'
      />
      <h2 className='mt-4 text-2xl font-bold uppercase text-orange'>{title}</h2>
      <h3 className='mb-2 text-2xl font-bold uppercase text-blue'>
        {subtitle}
      </h3>
      <p className='mb-4 text-center text-base font-semibold text-grey'>
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
