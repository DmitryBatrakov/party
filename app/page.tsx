import CardSlider from "./components/CardSlider/CardSlider";
import Link from "./components/Link/Link";

export default function HomePage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <CardSlider />
      <Link />      
    </div>
  );
}
