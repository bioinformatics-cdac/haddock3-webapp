import banner from "./banner.jpg";

export function Banner() {
  return (
    <img
      className="w-full object-cover"
      src={banner}
      alt="Bonvinlab Haddock3 banner"
    />
  );
}
