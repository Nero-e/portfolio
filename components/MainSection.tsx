const MainSection = () => {
  return (
    <>
        <section className="flex overflow-hidden w-full flex-nowrap justify-between items-center h-screen py-44 px-32 md:pb-64">
          <div className="flex flex-col relative z-30 gap-6 w-full">
            <div className="text-center leading-8 md:leading-10 md:text-left">
              <div className="inline-block">
                <h1 className="tracking-wide inline font-semibold text-8xl text-[#100f11] font-lemonmilk">
                  Im a&nbsp;
                </h1>
                <h1 className="tracking-wide inline text-animated font-semibold text-8xl bg-clip-text text-transparent font-lemonmilk">
                  front-end&nbsp;
                </h1>
              </div>
              <br />
              <h1 className="tracking-wide inline font-semibold text-8xl text-[#100f11] font-lemonmilk">developer</h1>
            </div>
            <p>Kevin David Espitia</p>
          </div>
          {/*Fondo gradient con animacion*/}
        <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-[#F3F4FA]" />
        </section>
    </>
  );
};
export default MainSection;
