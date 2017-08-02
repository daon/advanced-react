import React from 'react';
import PropTypes from 'prop-types';

import storeProvider from './storeProvider';

const styles = {
  article: {
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const dateDisplay = (dateString) => {
  return new Date(dateString).toDateString();
};

const Article = ({article, author}) => {
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {dateDisplay(article.date)}
      </div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

//   const author = store.lookupAuthor(article.authorId);

function extraProps(store, originalProps) {
  const { article } = originalProps;
  return {
    author: store.lookupAuthor(article.authorId),
  };
}

export default storeProvider(extraProps)(Article);