export default gql`
query allReviews {
  homepage {
    reviews {
      title
      note
      date
      content(markdown: true)
      author
    }
  }
}`;