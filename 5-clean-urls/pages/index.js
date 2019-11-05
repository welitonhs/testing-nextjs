import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js"id="Hello-Next.js" />
        <PostLink title="Learn Next.js is awesome" id="Learn-Next.js-is-awesome" />
        <PostLink title="Deploy apps with Zeit" id="Deploy-apps-with-Zeit" />
      </ul>
    </Layout>
  );
}