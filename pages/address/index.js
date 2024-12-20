import React from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";

import MainLayout from "../../src/components/layout/MainLayout";
import { NoSsr } from "@mui/material";
import UserLayout from "../../src/components/layout/UserLayout";
import Address from "../../src/components/address";
import AuthGuard from "../../src/components/route-guard/AuthGuard";
import { useRouter } from "next/router";
import SEO from "../../src/components/seo";
import { getServerSideProps } from "../index";
import { getImageUrl } from "utils/CustomFunctions";

const Index = ({ configData, landingPageData }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Address` : "Loading..."}
        image={`${getImageUrl(
          { value: configData?.logo_storage },
          "business_logo_url",
          configData
        )}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <NoSsr>
          <AuthGuard from={router.pathname.replace("/", "")}>
            <UserLayout
              component={<Address configData={configData} t={t} />}
              configData={configData}
              t={t}
            />
          </AuthGuard>
        </NoSsr>
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };
