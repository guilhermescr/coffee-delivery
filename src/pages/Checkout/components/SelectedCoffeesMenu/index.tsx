import { PiTrash } from 'react-icons/pi';

import Espresso from 'src/assets/Images/coffees/expresso-tradicional.png';

export default function SelectedCoffeesMenu() {
  return (
    <section className="w-full lg:w-2/3">
      <h2 className="mb-[0.94rem] text-lg">Selected Coffees</h2>

      <section className="bg-[#F3F2F2] rounded-tr-[2.75rem] rounded-bl-[2.75rem] rounded-s-md rounded-br-md p-6 lg:p-10">
        <section className="products">
          <article className="product flex justify-between gap-6 border-b border-solid border-[#E6E5E5] mb-6 px-1 py-2">
            <div className="content flex items-center gap-5 pb-4">
              <img className="w-16" src={Espresso} alt="Espresso" />

              <div>
                <h3
                  style={{
                    fontFamily: 'Roboto',
                  }}
                >
                  Traditional Espresso
                </h3>

                <div className="actions grid grid-cols-2 mt-2 w-40">
                  <div className="counter bg-[#E6E5E5] flex items-center justify-center gap-3 p-2 rounded-md max-w-max">
                    <button className="text-[#8047F8] font-bold hover:text-[#4b259c]">
                      &#x2013;
                    </button>

                    <span>1</span>

                    <button className="text-[#8047F8] font-bold hover:text-[#4b259c]">
                      +
                    </button>
                  </div>

                  <button className="bg-[#E6E5E5] flex items-center gap-1 p-2 rounded-md">
                    <PiTrash className="text-[#8047F8]" />{' '}
                    <span className="text-xs uppercase text-[#574F4D]">
                      Remove
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <p className="font-bold text-[#574F4D]">R$9,90</p>
          </article>

          <article className="product flex justify-between gap-6 border-b border-solid border-[#E6E5E5] my-6 px-1 py-2">
            <div className="content flex items-center gap-5 pb-4">
              <img className="w-16" src={Espresso} alt="Espresso" />

              <div>
                <h3
                  style={{
                    fontFamily: 'Roboto',
                  }}
                >
                  Traditional Espresso
                </h3>

                <div className="actions grid grid-cols-2 mt-2 w-40">
                  <div className="counter bg-[#E6E5E5] flex items-center justify-center gap-3 p-2 rounded-md max-w-max">
                    <button className="text-[#8047F8] font-bold hover:text-[#4b259c]">
                      &#x2013;
                    </button>

                    <span>1</span>

                    <button className="text-[#8047F8] font-bold hover:text-[#4b259c]">
                      +
                    </button>
                  </div>

                  <button className="bg-[#E6E5E5] flex items-center gap-1 p-2 rounded-md">
                    <PiTrash className="text-[#8047F8]" />{' '}
                    <span className="text-xs uppercase text-[#574F4D]">
                      Remove
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <p className="font-bold text-[#574F4D]">R$9,90</p>
          </article>
        </section>

        <section className="prices flex flex-col gap-3">
          <p className="flex items-center justify-between">
            <span className="text-sm text-[#574F4D]">Total Items</span>{' '}
            <span className="text-[#574F4D]">R$19,80</span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-sm text-[#574F4D]">Shipping Price</span>{' '}
            <span className="text-[#574F4D]">R$5,80</span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-[#403937] text-xl font-bold">Total</span>

            <span className="text-[#403937] text-xl font-bold">R$25,60</span>
          </p>
        </section>

        <button className="bg-[#DBAC2C] rounded-md uppercase text-sm font-bold text-white mt-6 py-3 px-2 w-full hover:saturate-150 active:opacity-90">
          Finish Order
        </button>
      </section>
    </section>
  );
}
