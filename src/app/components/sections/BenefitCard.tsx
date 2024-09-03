import Image from 'next/image';

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const BenefitCard = ({ imageSrc, title, subtitle, description }: Props) => {
  return (
    <div className='flex w-[424px] flex-col justify-center items-center border-t border-grey py-4'>
      <Image
        width={104}
        height={52}
        src={imageSrc}
        alt={title}
        className='mt-4object-cover' 
      />
      <h2 className='mt-4 text-orange  text-2xl font-bold uppercase'>{title}</h2>
      <h3 className='mb-2 text-blue text-2xl font-bold uppercase'>{subtitle}</h3>
      <p className='mb-4 text-grey text-base font-semibold text-center'>{description}</p>
    </div>
  );
};

export default BenefitCard;
