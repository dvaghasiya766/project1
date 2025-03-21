import * as React from "react";
const id = (function* () {
  let i = 0;
  while (true) {
    yield i++;
  }
})();
class MonolothicComp extends React.Component {
  state = {
    articles: [
      {
        id: id.next().value,
        title: "Title 1",
        summary: "Summary1",
        display: "none",
      },
      {
        id: id.next().value,
        title: "Title 2",
        summary: "Summary2",
        display: "none",
      },
      {
        id: id.next().value,
        title: "Title 3",
        summary: "Summary3",
        display: "none",
      },
      {
        id: id.next().value,
        title: "Title 4",
        summary: "Summary4",
        display: "none",
      },
    ],
    title: "",
    summary: "",
  };
  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };
  onClickedAdd = () => {
    this.setState((state) => ({
      articles: [
        ...state.articles,
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none",
        },
      ],
      title: "",
      summary: "",
    }));
  };
  onClicToggle = (id) => {
    this.setState((state) => {
      const articles = [...state.articles];
      const index = articles.findIndex((article) => article.id === id);
      articles[index] = {
        ...articles[index],
        display: state.article[index].display ? "" : "none",
      };
      return { ...state, articles };
    });
  };
  onClickRemove = (id) => {
    this.setState((state) => ({
      ...state,
      articles: state.articles.filter((i) => i.id !== id),
    }));
  };

  render() {
    const { title, summary, articles } = this.state;
    return (
      <>
        <input type="text" value={title} onChange={this.onChangeTitle} />
        <input type="text" value={summary} onChange={this.onChangeSummary} />
        <button onClick={this.onClickedAdd()}></button>
        <br />
        <ul>
          {articles.map((i) => {
            <li key={i.id}>
              <a href={`#${id}`} onClick={this.onClickToggle.bind(null, i.id)}>
                {i.title}
              </a>
              {i.summary}
              <a
                href={`#${i.id}`}
                onClick={this.onClickRemove.bind(null, i.id)}
              >
                remove
              </a>
              <p style={{ display: i.display }}> {i.display}</p>
            </li>;
          })}
        </ul>
      </>
    );
  }
}
export default MonolothicComp;
