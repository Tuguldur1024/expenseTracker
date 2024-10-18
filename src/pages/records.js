import IsDelete from "@/components/IsDelete";
import { ExpensePie, IncomePie } from "@/components/PieChart";

const records = () => {
  return (
    <div className="flex gap-4">
      <IncomePie />
      <ExpensePie />
    </div>
  );
};

export default records;
