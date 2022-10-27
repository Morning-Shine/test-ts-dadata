import React, { useState } from "react";
import PageHeader from "../components/page-header/PageHeader";
import NewsPlug from "../other/NewsPlug";

export default function News() {
  return (
    <section className="main-page-info">
      <PageHeader />
      <NewsPlug />
    </section>
  );
}
