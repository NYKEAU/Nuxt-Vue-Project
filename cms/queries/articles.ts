export default gql`
query articles {
  homepage {
    articles {
      title
      image
      description
      datePubli
    }
  }
}`;