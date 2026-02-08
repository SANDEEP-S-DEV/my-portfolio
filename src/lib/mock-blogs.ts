export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

export const MOCK_BLOGS: Blog[] = [
  {
    id: "human-centered-ai-future",
    title: "The Future of Human-Centered AI",
    excerpt: "Exploring why the next generation of AI must prioritize human intuition and ethical design.",
    content: `
      <p>Artificial Intelligence is no longer just a technical feat; it is a human experience. As we move towards more advanced Agentic AI, the focus is shifting from 'what can AI do' to 'how can AI help humans do more'.</p>
      <p>Human-centered AI (HCAI) is an approach that seeks to amplify human abilities rather than replace them. It involves designing systems that are transparent, explainable, and aligned with human values.</p>
      <h3>The Three Pillars of HCAI</h3>
      <ul>
        <li><strong>Transparency:</strong> Users should understand why an AI made a certain decision.</li>
        <li><strong>Control:</strong> Humans should always be in the loop, especially for high-stakes decisions.</li>
        <li><strong>Empathy:</strong> AI systems should be designed with an understanding of human emotions and social contexts.</li>
      </ul>
      <p>In my studies at TU Dublin, we explore these themes deeply, ensuring that the tech we build today doesn't become the problem of tomorrow.</p>
    `,
    date: "2024-02-15",
    tags: ["AI", "Design", "Ethics"],
    readTime: "5 min read"
  },
  {
    id: "bert-nlp-moderation",
    title: "Deep Dive into BERT for Content Moderation",
    excerpt: "How we used Bidirectional Encoder Representations from Transformers to build Tone Tracker.",
    content: `
      <p>Content moderation is a massive challenge for digital communities. Static keyword filters are easily bypassed and lack context. This is where BERT (Bidirectional Encoder Representations from Transformers) shines.</p>
      <p>Unlike previous models that looked at text in one direction, BERT looks at the entire sequence of words at once, allowing it to understand the nuance and 'tone' of a sentence.</p>
      <p>Our project, Tone Tracker, fine-tuned a BERT-base-uncased model on a dataset of social media comments. We achieved 94% accuracy in identifying offensive vs. non-offensive speech by focusing on the semantic relationship between words.</p>
    `,
    date: "2024-01-20",
    tags: ["NLP", "BERT", "Python"],
    readTime: "8 min read"
  },
  {
    id: "data-analytics-construction",
    title: "AI in Construction: Predicting Delays before they Happen",
    excerpt: "Applying machine learning to project management workflows to optimize resource allocation.",
    content: `
      <p>The construction industry is traditionally slow to adopt digital transformation. However, the potential for AI-driven analytics is enormous. During my internship at ASK’s Crafty LLP, I saw this firsthand.</p>
      <p>By analyzing historical project data, we were able to identify patterns that lead to delays—such as weather fluctuations, supply chain bottlenecks, and labor shortages. We built a predictive model that could forecast completion dates with significantly higher accuracy than traditional methods.</p>
    `,
    date: "2023-11-10",
    tags: ["Data Analytics", "ML", "Industry"],
    readTime: "6 min read"
  },
  // Add more mock blogs to test pagination (need 10+ to see pagination/loading)
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: `mock-blog-${i}`,
    title: `Exploring AI Trend #${i + 1}`,
    excerpt: `A short summary of what's happening in AI trend number ${i + 1}.`,
    content: `<p>Detailed content about AI trend ${i + 1} goes here...</p>`,
    date: `2023-10-${(15 + i) % 30}`.padStart(10, '0'),
    tags: ["AI", "Tech"],
    readTime: "3 min read"
  }))
];
