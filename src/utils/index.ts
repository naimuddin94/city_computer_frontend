export function truncate(paragraph: string, wordLimit: number) {
  const words = paragraph.split(" ");

  if (words.length <= wordLimit) {
    return paragraph;
  }

  const truncatedWords = words.slice(0, wordLimit).join(" ") + "...";

  return truncatedWords;
}
