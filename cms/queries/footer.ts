export default gql`
query footer {
  homepage {
    menus {
      menu
      links {
        title
        url
      }
    }
  }
}`;