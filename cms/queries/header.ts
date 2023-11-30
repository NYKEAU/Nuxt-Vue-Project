export default gql`
query topHeader {
    header {
        title
        description(markdown: true)
    }
}`;