import { Typography } from "./typography";

type LatestNewsCardProps = {
  headline: string;
  newsText: string;
  imageURL: string;
  id: string;
};

export function LatestNewsCard({ headline, newsText, imageURL }: LatestNewsCardProps) {
  return (
    <>
      <div className="bg">
        <Typography.Paragraph content={"test"} color="white" fontWeight="900"/>
      </div>

      <style jsx>{`
        .bg{
            background-image: url(${imageURL});
        }
        `}</style>
    </>
  );
}
