import StatsCard from "@/components/custom/StatsCard"
import SearchBar from "@/components/custom/SearchBar"
import ReviewCard from "@/components/custom/ReviewCard"
import Pagination from "@/components/custom/Pagination"
import Sidebar from "@/components/custom/Sidebar"
import TopBar from "@/components/custom/TopBar"

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">

      {/* TopBar at the top */}
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex gap-2 mt-2">
            <StatsCard description={"Total Revenue"} value={200}/>
            <StatsCard description={"Bad reviews"} value={100}/>
            <StatsCard description={"Good Reviews"} value={10}/>
            <StatsCard description={"Sales"} value={1100}/>
          </div>
          
          {/* Search Bar Component */}
          <div className="mt-4">
            <SearchBar />
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ReviewCard
              name="John Doe"
              profileImg="/avatar-placeholder.jpg"
              time="2 hours ago"
              rating={4}
              reviewType="Positive"
              status="Pending"
              reviewBody="Great product! Highly recommend."
              suggestedReply="Thank you for your kind words!"
            />
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
