import { Typography } from "./typography";

type LatestNewsCardProps = {
  headline: string;
  newsText: string;
  imageUrl: string;
};

export function LatestNewsCard({
  headline,
  newsText,
  imageUrl,
}: LatestNewsCardProps) {
  return (
    <>
      <div className="bg flex flex-col justify-content-center p-3 h-100">
        <div className="flex flex-col gap-2">
          <h4>{headline}</h4>
          <h2>{newsText}</h2>
        </div>
      </div>

      <style jsx>{`
        .bg {
          background: url(${imageUrl}) center center no-repeat;
          background-size: cover;
          border-radius: 20px;
          padding: 20px;
          transition: 0.2s all ease-in-out;
        }

        .bg:hover {
          transform: scale(1.05);
          cursor: pointer;
        }

        h2 {
          color: white;
          font-size: 20px;
          font-weight: 600;
          filter: brightness(1.5);
          padding: 6px 0px 0px 0px;
        }

        h4 {
          opacity: 0.6;
          font-size: 16px;
          font-weight: 600;
          padding: 60px 0px 0px 0px;
        }
      `}</style>
    </>
  );
}
