// we need to make sure this action creator is wired up to redux

export function selectBook(book) {
  // selectBook is an ActionCreator - it needs to return an objet with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
