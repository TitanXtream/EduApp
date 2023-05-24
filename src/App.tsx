import { BrowserView, MobileView } from "react-device-detect";
import PageLayout from "./components/layouts/PageLayout";
import ContentLayout from "./components/layouts/ContentLayout";

const App = () => {
  return (
    <PageLayout>
      <ContentLayout />
    </PageLayout>
  );
};

export default App;
