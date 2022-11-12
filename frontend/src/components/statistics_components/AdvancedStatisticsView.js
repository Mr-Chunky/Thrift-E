import modifiers from "./AdvancedStatistics.module.css";
function AdvancedStatisticsView() {
  return (
    <div style={{ margin: "0 auto" }}>
      <table>
        <tr>
          <th>Most-Favourited Game</th>
          <th>Lowest Sale Price</th>
          <th>Most Popular Vendor</th>
          <th>Most-Favourited Genre</th>
          <th>Least Popular Vendor</th>
        </tr>
        <tr className={modifiers.tableRowOne}>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
        </tr>
        <tr className={modifiers.tableRowTwo}>
          <td>Number</td>
          <td>Number</td>
          <td>Number</td>
          <td>Number</td>
          <td>Number</td>
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
      </table>
    </div>
  );
}

export default AdvancedStatisticsView;
