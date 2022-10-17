type ParagraphProps = {
  color?: "black" | "white";
  content: string;
  fontWeight?: number;
}

export function Paragraph({ color, content, fontWeight = 400 }: ParagraphProps) {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? "white"};
          font-size: 20px;
          opacity: 0.8;
          font-weight: ${fontWeight};
        }
      `}</style>
    </>
  );
}
