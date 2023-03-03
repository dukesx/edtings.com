import { useMantineColorScheme } from "@mantine/core";
import AppWrapper from "../components/global/wrapper";
import HomepageCategorySection from "../components/homepage/section";
import { sampleArticles } from "../data/samples";
import { HOME_NAV_DATA } from "../data/generics";

const IndexPage = () => {
  const { colorScheme } = useMantineColorScheme();
  var navLinks = HOME_NAV_DATA;
  navLinks = navLinks.filter((mapped) => mapped.title != "home");
  return (
    <AppWrapper
      navbarProps={{
        navbarTitle: "Categories",
        navbarPosition: "sticky",
        navbarLinks: navLinks,
      }}
      path=""
      padding={false}
    >
      <HomepageCategorySection
        subscribers={100000000}
        gradient={{
          from: "blue",
          to: "pink",
        }}
        title="Technology"
        articles={sampleArticles}
        lazyLoadImages={false}
      />
      <HomepageCategorySection
        subscribers={100000}
        gradient={{
          from: "red",
          to: "pink",
        }}
        title="Reviews"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={200000000}
        gradient={{
          from: "blue",
          to: "indigo",
        }}
        title="Programming"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "teal",
          to: "cyan",
        }}
        title="Lifestyle"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "blue",
          to: "cyan",
        }}
        title="General Health"
        articles={sampleArticles}
        lazyLoadImages={true}
      />

      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "indigo",
          to: "violet",
        }}
        title="Physiotherapy"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "teal",
          to: "green",
        }}
        title="Medicine"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
    </AppWrapper>
  );
};

export default IndexPage;
