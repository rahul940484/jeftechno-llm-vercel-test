export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black">
      {/* Background video, poster shows while it loads */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="./AboutUs/AboutUsMainBG.png"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="./HomePageImg/Banner-1.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient so the text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text, pinned to the bottom-left like the design */}
      <div className="section-container relative z-10 flex h-full flex-col justify-end pb-14">
        <h1 className="text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
          Think Electrical,
          <br />
          Across India.
        </h1>
        <p className="mt-6 max-w-4xl text-sm text-white md:text-lg">
          Explore JEF across India. Find state-wise information to connect local
          business needs with the right products, solutions, resources and
          opportunities.
        </p>
      </div>
    </section>
  );
}