import "isomorphic-fetch"; /* So fetch works in the server and the browser */
import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`);
    const stories = await req.json();
    return { stories };
  }
  render() {
    return (
      <Layout title="Latest News">
        <h1>Latest News</h1>

        {this.props.stories.map(story => (
          <h2 key={story.id}>
            <a href={story.url}>{story.title}</a>
          </h2>
        ))}

        <style jsx>{`
          h1 {
            font-weight: 300;
            color: #333;
          }
          a {
            color: #2b2929;
            text-decoration: none;
            border-bottom: 1px dotted gray;
            font-size: 20px;
          }
          a:hover {
            color: black;
          }
        `}</style>
        <style global jsx>{`
          body {
            background: #eee;
            font-family: system-ui;
            margin: 0;
          }
        `}</style>
      </Layout>
    );
  }
}
