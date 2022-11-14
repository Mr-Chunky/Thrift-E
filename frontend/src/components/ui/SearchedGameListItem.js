/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props.header_image -- A URL pointing to the game's thumbnail image
props.name -- The name of the game as advertised on Steam
props.steam_appid -- The unique ID of the game stored on Steam
props.short_description -- A short "about" statement for the game
props.genres -- An array of objects containing genres applied to the game, where:
    * id = object.id
    * description = object.description
props.release_date -- An object containing two items:
    * coming_soon (bool)
    * date (Date)
props.developers -- An array containing the studios that worked on the game
props.publishers -- An array containing the entities with publishing rights to the game
props.price_overview -- An object containing details such as:
    * currency: units used in the local region that the API was called from
    * initial: price before discount applied
    * final: net price after discount applied
    * discount_percent: integer value of percentage discount granted
    * initial_formatted: pre-formatting before further processing
    * final_formatted: final result of formatting applied to currency
------------------------------------------------------------------
*/

function SearchedGameListItem(props) {}

export default SearchedGameListItem;
