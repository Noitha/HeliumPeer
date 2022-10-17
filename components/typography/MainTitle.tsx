type MainTitleProps = {
  color?: "black" | "white";
  content: string;
};

export const MainTitle = ({ color, content }: MainTitleProps) => {
  return (
    <>
      <h1>{content}</h1>
      <style jsx>{`
        h1 {
          color: ${color ?? "white"};
          font-size: 110px;
          letter-spacing: -6px;
          line-height: 0.9;
          margin-bottom: 20px;
          position: relative;
        }
      `}</style>
    </>
  );
};
