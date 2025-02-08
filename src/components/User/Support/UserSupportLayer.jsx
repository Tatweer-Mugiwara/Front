import SupportContent from "./SupportContent";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Layout from "../../Layout";

const UserSupportLayout = () => {
  return (
    <Layout>
      <div>
        <SupportContent />
        <FrequentlyAskedQuestions />
      </div>
    </Layout>
  );
};

export default UserSupportLayout;
