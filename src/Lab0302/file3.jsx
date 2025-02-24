import { useState } from "react";
import { Page1, Page2, Page3 } from "./file1";
import { Page4, Page5 } from "./file2";
import { UserProvider } from "./file";
function SelectPage({ i }) {
  const Page = [Page1, Page2, Page3, Page4, Page5][i];
  return <Page />;
}
export default function UserContextExample() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <UserProvider>
      <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
        Page 1
      </button>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        Page 2
      </button>
      <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>
        Page 3
      </button>
      <button onClick={() => setCurrentPage(3)} disabled={currentPage === 3}>
        Page 4
      </button>
      <button onClick={() => setCurrentPage(4)} disabled={currentPage === 4}>
        Page 5
      </button>
      <SelectPage i={currentPage} />
    </UserProvider>
  );
}
