import EquipmentLeft from "./EquipmentLeft";
import EquipmentRight from "./EquipmentRight";
import { featuresEquipment } from "./features";

const EquipmentAll = () => {
  let i = 1;
  return featuresEquipment.map((feature) =>
    i++ % 2 == 0 ? (
      <EquipmentRight
        key={feature.id}
        features={feature.data}
        src={feature.src}
        slogan={feature.slogan}
        title={feature.title}
        description={feature.description}
      />
    ) : (
      <EquipmentLeft
        key={feature.id}
        features={feature.data}
        src={feature.src}
        slogan={feature.slogan}
        title={feature.title}
        description={feature.description}
      />
    )
  );
};

export default EquipmentAll;
