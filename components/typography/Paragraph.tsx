type ParagraphProps = {
  color?: "black" | "white";
  content: string;
  fontWeight?: number;
  opacity?: number;
};

export function Paragraph({
  color,
  content,
  fontWeight = 400,
  opacity = 1,
}: ParagraphProps) {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? "white"};
          font-size: 20px;
          opacity: ${opacity};
          font-weight: ${fontWeight};
        }
      `}</style>
    </>
  );
}
