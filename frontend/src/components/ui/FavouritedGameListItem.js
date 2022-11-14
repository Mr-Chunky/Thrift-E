/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props._gameId -- ID of the internally stored game in the MySQL database
props.title -- The name of the game as stored in the MySQL database
props.genre -- The genre of the game as stored in the MySQL database
props.image -- The URL of the image associated with the game as stored in the MySQL database
props.release_date -- The release date of the game as stored in the MySQL database
props.localPrice -- The price of the game as stored in the MySQL database (move decimal place 2 places to the left)
props.publisher -- The publisher of the game as stored in the MySQL database
props.saleStatus -- Returns the sale status of the game as stored in the MySQL database, where 1 = Sale & 0 = No Sale
------------------------------------------------------------------
*/

function FavouritedGameListItem(props) {}

export default FavouritedGameListItem;
