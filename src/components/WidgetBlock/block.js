import About from "@/widgets/About";
import HomeBanner from "@/widgets/HomeBanner";
import Testimonial from "@/widgets/Testimonial";

const setComponent = (widget) => {
  const components = {
    HomeBanner: HomeBanner,
    About: About,
    Testimonial: Testimonial,
  };
  return components[widget.widget_type] || components["default"];
};
const Block = ({
  widget,
  ssrDeviceType,
  saveFolderType,
  saveFolderId,
  slug,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
      ssrDeviceType={ssrDeviceType}
      saveFolderId={saveFolderId}
      saveFolderType={saveFolderType}
      slug={slug}
    />
  );
};

export default Block;
