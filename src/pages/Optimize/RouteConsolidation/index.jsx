import React from "react";
import Layout from "../../../components/Layout";
import RouteConsolidationContent from "../../../components/Optimization/RouteConsolidation/RouteConsolidationContent";

const RouteConsolidation = () => {
  return (
    <Layout isLoading={false}>
      <RouteConsolidationContent />
    </Layout>
  );
};

export default RouteConsolidation;
