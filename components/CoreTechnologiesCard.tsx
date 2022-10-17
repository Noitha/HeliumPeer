import { Typography } from "./typography";

type Image = {
  alt: string;
  url: string;
};

type CoreTechnologiesCardProps = {
  coverImageUrl: Image;
  body: string;
  title: string;
};

export function CoreTechnologiesCard({
  coverImageUrl: coverImageUrl,
  body: text,
  title,
}: CoreTechnologiesCardProps) {
  return (
    <>
      <div className="_container">
        <img alt={coverImageUrl.alt} src={coverImageUrl.url} />
        <div className="content">
          <h5>{title}</h5>
          <Typography.Paragraph content={text} opacity={0.8} />
        </div>
      </div>
      <style jsx>{`
        ._container {
          background-color: #383838;
          border-radius: 20px;
          height: 100%;
          overflow: hidden;
          transition: 0.2s all ease-in-out;
          width: 100%;
        }
        ._container:hover {
          cursor: pointer;
          filter: brightness(120%);
          transform: scale(1.08);
        }
        .content {
          padding: 30px;
        }
        h5 {
          color: #fff;
          font-size: 25px;
          font-weight: 600;
          letter-spacing: -0.5px;
          line-height: 1.4;
          margin-bottom: 10px;
        }
        img {
          width: 100%;
        }
      `}</style>
    </>
  );
}
