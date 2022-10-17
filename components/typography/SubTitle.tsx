type SubTitleProps = {
  color?: string;
  content: string;
};

export function SubTitle({ color, content }: SubTitleProps) {
  return (
    <>
      <h2>{content}</h2>
      <style jsx>{`
        h2 {
          color: white;
          font-size: 46px;
          font-weight: 600;
          letter-spacing: -2px;
          line-height: 1.1;
          margin-top: 40px;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
}
