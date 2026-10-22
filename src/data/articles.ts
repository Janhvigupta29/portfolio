export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  tags: string[];
}

// Add your real Hashnode article details here.
// Replace the placeholder entries with your actual article titles, excerpts, and links.
const articles: Article[] = [
  {
    id: '1',
    title: '[Add your article title here]',
    excerpt: 'Replace this with a one- or two-sentence excerpt from your article.',
    date: '[Date]',
    url: 'https://hashnode.com', // Replace with your actual article URL
    tags: ['DevOps', 'Learning'],
  },
  {
    id: '2',
    title: '[Add your article title here]',
    excerpt: 'Replace this with a one- or two-sentence excerpt from your article.',
    date: '[Date]',
    url: 'https://hashnode.com', // Replace with your actual article URL
    tags: ['Cloud', 'Engineering'],
  },
];

export default articles;
