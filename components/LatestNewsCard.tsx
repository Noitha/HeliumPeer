import { Typography } from "./typography";

type LatestNewsCardProps = {
  headline: string;
  newsText: string;
  imageUrl: string;
  id: string;
};

export function LatestNewsCard({
  headline,
  newsText,
  imageUrl,
}: LatestNewsCardProps) {
  return (
    <>
      <div className="bg">
        <Typography.Paragraph content={"test"} color="white" fontWeight="900" />
      </div>

      <style jsx>{`
        .bg {
          background-image: url(${imageUrl});
        }
      `}</style>
    </>
  );
}
