import modifiers from "./AdvancedStatistics.module.css";
function AdvancedStatisticsView(props) {
  return (
    <div style={{ margin: "0 auto" }}>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Most-Favourited Game</th>
            <th>Lowest Sale Price</th>
            <th>Most Popular Vendor</th>
            <th>Most-Favourited Genre</th>
            <th>Least Popular Vendor</th>
            <th></th>
          </tr>
          <tr className={modifiers.tableRowOne}>
            <th className={modifiers.rowHeaders}>Title</th>
            <td>
              {props.mostFavouritedGame
                ? props.mostFavouritedGame.title
                : "None"}
            </td>
            <td>
              {props.lowestPriceGame ? props.lowestPriceGame.title : "None"}
            </td>
            <td>Steam</td>
            <td>
              {props.mostFavouritedGenre
                ? props.mostFavouritedGenre.genre
                : "None"}
            </td>
            <td>Steam</td>
            <th className={modifiers.rowHeaders}></th>
          </tr>
          <tr className={modifiers.tableRowTwo}>
            <th className={modifiers.rowHeaders}>#</th>
            <td>
              {props.mostFavouritedGame
                ? props.mostFavouritedGame.totalFavourited
                : "None"}
            </td>
            <td>
              {props.lowestPriceGame
                ? props.lowestPriceGame.lowestPrice
                : "None"}
            </td>
            <td>Everyone</td>
            <td>
              {props.mostFavouritedGenre
                ? props.mostFavouritedGenre.totalFavourited
                : "None"}
            </td>
            <td>Everyone</td>
            <th className={modifiers.rowHeaders}></th>
          </tr>
          <tr className={modifiers.tableRowThree}>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr className={modifiers.tableRowFour}>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdvancedStatisticsView;
