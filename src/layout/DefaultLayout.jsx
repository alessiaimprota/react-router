import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      {/* imposto già il segnaposto per dopo per la navbar */}
      <Outlet />
    </div>
  );
}
