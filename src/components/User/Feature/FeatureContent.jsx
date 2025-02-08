import Layout from "../../Layout";
import FeatureCard from "./FeatureItem";

const FeaturesContent = () => {
  const features = [
    {
      title: "Route Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      slug: "routing",
    },
    {
      title: "Intra-Truck Load Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      slug: "intra-truck-load",
    },
    {
      title: "Inter-Truck Load Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      slug: "inter-truck-load",
    },
    {
      title: "Visibilité et Réactivité en Temps Réel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      slug: "visibilite-reactivite-temps-reel",
    },
    {
      title: "Planification & Coordination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      slug: "planification-coordination",
    }
  ];
  
  return (
    <Layout>
      <section className="w-screen min-h-screen  flex flex-col  gap-6 py-10">
        <div className="flex items-center justify-between px-[10vw] text-center mb-6">
          <h2 className="text-[2.5rem] font-bold text-Typo text-center text-6xl w-full">Solutions</h2>
        </div>
        <div className="grid grid-cols-3 items-center gap-x-8 w-[95vw] mx-auto justify-between flex-wrap gap-y-16">
          {
            features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} slug={feature.slug} />
            ))
          }
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesContent;
