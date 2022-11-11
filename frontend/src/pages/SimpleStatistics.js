import SimpleStatisticsHeader from "../components/statistics_components/SimpleStatisticsHeader";
import SimpleStatisticsView from "../components/statistics_components/SimpleStatisticsView";
import NavBar from "../components/ui/NavBar";

function SimpleStatisticsPage() {
  return (
    <div>
      <NavBar />
      <SimpleStatisticsHeader />
      <SimpleStatisticsView />
    </div>
  );
}

export default SimpleStatisticsPage;
