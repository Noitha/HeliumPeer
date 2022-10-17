import { CoreTechnologiesCard } from "../components/CoreTechnologiesCard";
import { Typography } from "../components/typography";
import { request, gql } from "graphql-request";
import { useState } from "react";
import { LatestNewsCard } from "../components/LatestNewsCard";

type CoreTechnologiesCard = {
  coverImageUrl: string;
  body: string;
  id: string;
  title: string;
};

type LatestNewsCard = {
  id: string;
  imageUrl: string;
  headline: string;
  newsText: string;
};

type HomeProps = {
  latestNewsCards: LatestNewsCard[];
  coreTechnologiesCards: CoreTechnologiesCard[];
};

export default function Home({
  latestNewsCards,
  coreTechnologiesCards,
}: HomeProps) {
  const [latestNews, setLatestNews] =
    useState<LatestNewsCard[]>(latestNewsCards);
  const [cards, setCards] = useState<CoreTechnologiesCard[]>(
    coreTechnologiesCards
  );

  return (
    <>
      <section id="latest-news">
        <div className="latestNewsTitle">
          <h2>Latest News</h2>
        </div>
        <div className="container">
          <div className="row">
            {latestNews.map(({ id, ...other }) => {
              return (
                <>
                  <div className="col-12 col-md col-lg-3" key={id}>
                    <LatestNewsCard {...other} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section id="core-technologies">
        <div className="section-title">
          <Typography.MainTitle content="Core Technologies" />
          <div className="paragraph">
            <Typography.Paragraph content="The People's Network is made possible through sophisticated, open-source technologies that aim to create a truly decentralized and trust-less model for building wireless infrastructure." />
          </div>
        </div>
        <div className="container">
          <div className="row gy-5 align-items-stretch">
            {cards.map(({ coverImageUrl, id, ...other }) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={id}>
                  <CoreTechnologiesCard
                    coverImageUrl={{
                      alt: "Chicken Wings",
                      url: coverImageUrl,
                    }}
                    {...other}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        .section-title {
          margin-bottom: 80px;
          width: 800px;
        }
        .section-title .paragraph {
          max-width: 500px;
        }
        section {
          background-color: #1d1d1d;
          padding: 100px;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const query = gql`
    query MyQuery {
      coreTechnologiesCards {
        id
        coverImageUrl
        title
        body
      }
      latestNewsCards {
        headline
        imageUrl
        newsText
        id
      }
    }
  `;

  const data = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cgc0k34elq01ue8xl4hb4l/master",
    query
  );
  console.log(data);
  return {
    props: {
      coreTechnologiesCards: data.coreTechnologiesCards,
      latestNewsCards: data.latestNewsCards,
    },
  };
}
