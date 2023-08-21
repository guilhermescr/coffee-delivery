import Wrapper from 'src/components/Wrapper';
import DeliveryDetailsSection from './components/DeliveryDetailsSection';
import DeliveryIllustration from 'src/assets/Images/illustrations/delivery-illustration.png';

export default function DeliverySuccess() {
  return (
    <>
      <Wrapper>
        <section className="flex flex-col gap-8 items-center justify-between min-h-[calc(100vh-6.5rem)] md:gap-20 lg:flex-row">
          <section className="w-full lg:w-2/3">
            <h2 className="text-[2rem] text-[#C47F17] font-extrabold">
              Yay! Order confirmed
            </h2>
            <p className="text-xl text-[#403937]">
              Now just wait for the coffee to come to you soon
            </p>

            <DeliveryDetailsSection />
          </section>

          <img className='mb-8 lg:mb-0'
            src={DeliveryIllustration}
            alt="Illustration of a man riding a motorcycle"
          />
        </section>
      </Wrapper>
    </>
  );
}
